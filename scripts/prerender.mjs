// Pre-renders every page to static HTML after `vite build`, so search engines
// and link previews see real content and the right title/description per page.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const server = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);
const { render, routes, findMeta, SITE_URL, OG_IMAGE, brand } = server;

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

// Unrendered shell for any address that isn't pre-rendered (e.g. 404s).
// vercel.json rewrites unknown paths here so React renders them fresh.
await fs.writeFile(path.join(dist, "app.html"), template);
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const business = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-full.png`,
  image: OG_IMAGE,
  telephone: brand.phone,
  email: brand.email,
  foundingDate: String(brand.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "3030 Warrenville Rd",
    addressLocality: "Lisle",
    addressRegion: "IL",
    postalCode: "60532",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: Object.values(brand.social || {}),
};

for (const route of routes) {
  const meta = findMeta(route);
  const url = `${SITE_URL}${route}`;
  const body = await render(route);
  const head = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(brand.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    route === "/"
      ? `<script type="application/ld+json">${JSON.stringify(business).replace(/</g, "\\u003c")}</script>`
      : "",
  ].join("\n    ");

  const html = template
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace(/<meta name="description"[^>]*>\s*/, "")
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const out = route === "/" ? path.join(dist, "index.html") : path.join(dist, route, "index.html");
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, html);
}

await fs.rm(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`Pre-rendered ${routes.length} pages.`);
