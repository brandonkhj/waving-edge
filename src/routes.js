// Single source of truth for the site's routes, consumed by three places:
// App.jsx (what to render), entry-server.jsx (what to prerender) and
// scripts/prerender.mjs (per-route <head> metadata). The service routes are
// derived from `services` in data.jsx so a new service cannot appear in the nav
// without also getting a page, a sitemap entry and its own metadata.
import { services } from './data.jsx';

export const ORIGIN = 'https://www.wavingedge.com';

export const home = {
  path: '/',
  title: 'Waving Edge Venture | Custom Software Development Malaysia',
  description:
    'Waving Edge Venture builds custom web apps, business systems, SaaS products and integrations for startups and SMEs in Malaysia and internationally.',
  ogDescription:
    'Custom web apps, internal business systems, SaaS products and integrations — built for businesses that need more than an off-the-shelf solution.',
};

export const serviceRoutes = services.map((service) => ({
  path: `/services/${service.slug}/`,
  slug: service.slug,
  service,
  title: `${service.pageTitle} | Waving Edge Venture`,
  description: `${service.desc} Custom software development for businesses in Malaysia and internationally.`,
  ogDescription: service.desc,
}));

export const routes = [home, ...serviceRoutes];

/**
 * Resolves a pathname to a route. An unmatched path falls back to the home
 * page, which in practice only happens for URLs the host would already have
 * served 404.html for.
 *
 * Both the trailing slash and an explicit index.html are optional, because a
 * route is a real directory on disk: /services/x, /services/x/ and
 * /services/x/index.html all serve the same file and must therefore hydrate to
 * the same page. Without the index.html case the prerendered service markup is
 * replaced by the home page on hydration.
 */
export function matchRoute(pathname) {
  const withoutIndex = pathname.replace(/index\.html$/, '');
  const normalised = withoutIndex.endsWith('/') ? withoutIndex : `${withoutIndex}/`;
  // Matched by suffix rather than equality so the app also resolves correctly
  // when it is served from a subdirectory instead of the domain root — a
  // project-site deploy, or a local preview of dist/. Home is the fallback, so
  // it must not take part in the suffix test: every path ends in '/'.
  return serviceRoutes.find((route) => normalised.endsWith(route.path)) ?? home;
}
