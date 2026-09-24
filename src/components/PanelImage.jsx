import manifest from '../image-manifest.json';

/**
 * The photo inside a hero/approach/solutions panel.
 *
 * AVIF and WebP derivatives come from scripts/images.mjs; the original JPEG
 * stays as the <img> fallback, so a fresh clone that has not run the image
 * step still renders. Intrinsic width/height are read from the generated
 * manifest rather than typed in, so the markup cannot drift from the files.
 *
 * The panels are ~520px wide on a desktop layout and full-bleed below 900px.
 */
const SIZES = '(max-width: 900px) 100vw, 520px';
const WIDTHS = [600, 1200];

export default function PanelImage({ name, alt, priority = false }) {
  const { width, height } = manifest[name];
  const srcSet = (ext) =>
    WIDTHS.map((w) => `/images/derived/${name}-${w}.${ext} ${w}w`).join(', ');

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet('avif')} sizes={SIZES} />
      <source type="image/webp" srcSet={srcSet('webp')} sizes={SIZES} />
      <img
        src={`/images/${name}.jpg`}
        alt={alt}
        className="panel-photo"
        width={width}
        height={height}
        sizes={SIZES}
        decoding="async"
        // The hero photo is the LCP element, so it must never be lazy.
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
      />
    </picture>
  );
}
