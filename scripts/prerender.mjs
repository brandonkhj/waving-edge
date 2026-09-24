// Bakes every route into its own static index.html at build time.
//
// The major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot …) fetch raw
// HTML and never execute JavaScript, so a client-rendered page reads to them as
// an empty <div id="root">. Pre-rendering puts the real content in the served
// file; the browser still hydrates it and behaves exactly as before.
//
// Each route also gets its own <title>, description, canonical, Open Graph tags
// and JSON-LD, so /services/<slug>/ is a real indexable page rather than a copy
// of the home page's head. Routes come from the SSR bundle (src/routes.js), so
// the route table, the nav and the sitemap cannot drift apart.
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const root = process.cwd();
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js');
const distDir = resolve(root, 'dist');
const indexPath = resolve(distDir, 'index.html');
const marker = '<div id="root"></div>';
const ORIGIN = 'https://www.wavingedge.com';

const { render, routes, faqs } = await import(ssrEntry);

const template = readFileSync(indexPath, 'utf8');
if (!template.includes(marker)) {
  throw new Error(`prerender: "${marker}" not found in dist/index.html — nothing was injected`);
}

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Replaces the first match, and fails loudly rather than silently skipping. */
function swap(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`prerender: could not find ${label} in the template`);
  return html.replace(pattern, () => replacement);
}

// The template's own JSON-LD is the Organization/WebSite graph; every page
// builds on it rather than restating it.
const ldMatch = template.match(
  /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/
);
if (!ldMatch) throw new Error('prerender: no JSON-LD block found in the template');
const baseGraph = JSON.parse(ldMatch[1])['@graph'];
const ORG_ID = `${ORIGIN}/#organization`;

function graphFor(route) {
  if (!route.service) {
    return [
      ...baseGraph,
      {
        '@type': 'FAQPage',
        '@id': `${ORIGIN}/#faq`,
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ];
  }

  const url = `${ORIGIN}${route.path}`;
  return [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: route.service.pageTitle,
      description: route.service.desc,
      url,
      provider: { '@id': ORG_ID },
      areaServed: [
        { '@type': 'Country', name: 'Malaysia' },
        { '@type': 'Place', name: 'International' },
      ],
      serviceType: route.service.examples,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${ORIGIN}/#services` },
        { '@type': 'ListItem', position: 3, name: route.service.pageTitle, item: url },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: route.title,
      description: route.description,
      isPartOf: { '@id': `${ORIGIN}/#website` },
      about: { '@id': ORG_ID },
    },
  ];
}

function pageFor(route) {
  const url = `${ORIGIN}${route.path}`;
  const title = escape(route.title);
  const description = escape(route.description);
  const ogDescription = escape(route.ogDescription ?? route.description);
  let html = template;

  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, '<title>');
  html = swap(
    html,
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${description}" />`,
    'meta description'
  );
  html = swap(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`,
    'canonical'
  );
  html = swap(
    html,
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${title}" />`,
    'og:title'
  );
  html = swap(
    html,
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta property="og:description" content="${ogDescription}" />`,
    'og:description'
  );
  html = swap(
    html,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`,
    'og:url'
  );
  html = swap(
    html,
    /<meta name="twitter:title" content="[\s\S]*?" \/>/,
    `<meta name="twitter:title" content="${title}" />`,
    'twitter:title'
  );
  html = swap(
    html,
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="twitter:description" content="${ogDescription}" />`,
    'twitter:description'
  );
  html = swap(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${JSON.stringify(
      { '@context': 'https://schema.org', '@graph': graphFor(route) },
      null,
      2
    )}\n    </script>`,
    'JSON-LD'
  );

  return html.replace(marker, `<div id="root">${render(route.path)}</div>`);
}

let injected = 0;
for (const route of routes) {
  const outPath =
    route.path === '/' ? indexPath : resolve(distDir, `.${route.path}`, 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  const html = pageFor(route);
  writeFileSync(outPath, html);
  injected += 1;
  console.log(`prerender: ${route.path} -> ${outPath.replace(`${distDir}/`, '')}`);
}

// Generated rather than hand-maintained, so it cannot fall behind the routes.
const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${ORIGIN}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap);

rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`prerender: ${injected} routes, sitemap with ${routes.length} urls`);
