// Bakes the rendered app into dist/index.html at build time.
//
// The major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot …) fetch raw
// HTML and never execute JavaScript, so a client-rendered page reads to them as
// an empty <div id="root">. Pre-rendering puts the real content in the served
// file; the browser still hydrates it and behaves exactly as before.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js');
const indexPath = resolve(root, 'dist/index.html');
const marker = '<div id="root"></div>';

const { render } = await import(ssrEntry);
const appHtml = render();

const template = readFileSync(indexPath, 'utf8');
if (!template.includes(marker)) {
  throw new Error(`prerender: "${marker}" not found in dist/index.html — nothing was injected`);
}

writeFileSync(indexPath, template.replace(marker, `<div id="root">${appHtml}</div>`));
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });

console.log(`prerender: injected ${appHtml.length.toLocaleString()} chars into dist/index.html`);
