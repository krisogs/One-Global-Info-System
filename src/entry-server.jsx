/* eslint-disable react-refresh/only-export-components -- build-time entry, not a hot-reloaded module */
import React from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import {
  solutions,
  services,
  managedServices,
  caseStudies,
  show,
} from "./data/site.js";

export { findMeta, SITE_URL, OG_IMAGE } from "./data/seo.js";
export { brand } from "./data/site.js";

export const routes = [
  "/",
  "/about",
  ...(show.news ? ["/news"] : []),
  "/careers",
  "/resources",
  ...(show.blog ? ["/blog"] : []),
  ...(show.webinars ? ["/webinars"] : []),
  "/case-studies",
  "/contact",
  "/managed-services",
  ...solutions.map((s) => `/solutions/${s.slug}`),
  ...services.map((s) => `/services/${s.slug}`),
  ...managedServices.map((s) => `/managed-services/${s.slug}`),
  ...caseStudies.map((s) => `/case-studies/${s.slug}`),
];

async function renderOnce(url) {
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
    // Never split large sections into separately-revealed chunks: those need
    // inline scripts, which the site's Content-Security-Policy blocks.
    { progressiveChunkSize: Number.POSITIVE_INFINITY }
  );
  let html = "";
  for await (const chunk of prelude) html += chunk;
  return html;
}

// Render twice: the first pass loads the lazily-imported page code, so the
// second pass renders synchronously. That keeps React's inline "streaming"
// scripts out of the HTML, which a strict Content-Security-Policy would block.
export async function render(url) {
  await renderOnce(url);
  return renderOnce(url);
}
