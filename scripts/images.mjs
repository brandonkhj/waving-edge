// Generates responsive AVIF/WebP derivatives for the section photos and
// recompresses the Open Graph card. Runs before `vite build` so Vite copies the
// output out of public/ with everything else.
//
// The sources are 1200px wide but the panels they fill are ~520px on a desktop
// layout, so the original JPEGs were roughly four times the pixels needed. The
// derivatives are written to public/images/derived/ and are gitignored — this
// script is the source of truth, not the files.
import { mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, extname, resolve } from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const sourceDir = resolve(root, 'public/images');
const outDir = resolve(root, 'public/images/derived');
const WIDTHS = [600, 1200];

mkdirSync(outDir, { recursive: true });

const sources = readdirSync(sourceDir).filter((f) => extname(f) === '.jpg');
if (sources.length === 0) throw new Error('images: no .jpg sources found in public/images');

const manifest = {};

for (const file of sources) {
  const name = basename(file, '.jpg');
  const input = resolve(sourceDir, file);
  const { width, height } = await sharp(input).metadata();
  manifest[name] = { width, height };

  for (const w of WIDTHS) {
    // Never upscale past the source.
    if (w > width) continue;
    const pipeline = sharp(input).resize({ width: w, withoutEnlargement: true });
    await pipeline.clone().avif({ quality: 55 }).toFile(resolve(outDir, `${name}-${w}.avif`));
    await pipeline.clone().webp({ quality: 74 }).toFile(resolve(outDir, `${name}-${w}.webp`));
  }
}

// Intrinsic dimensions are read by the components so the markup cannot drift
// from the actual files.
writeFileSync(
  resolve(root, 'src/image-manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`
);

// Lossless recompression only — the card is scraped, never served to a visitor,
// so there is no reason to accept any quality loss for the bytes.
const ogPath = resolve(root, 'public/og.png');
const og = await sharp(ogPath).png({ compressionLevel: 9, effort: 10 }).toBuffer();
if (og.length < statSync(ogPath).size) writeFileSync(ogPath, og);

const report = Object.keys(manifest)
  .map((n) => `${n} ${manifest[n].width}x${manifest[n].height}`)
  .join(', ');
console.log(`images: ${sources.length} sources (${report}) -> ${WIDTHS.join('/')}px avif+webp`);
console.log(`images: og.png ${(og.length / 1024) | 0}KB`);
