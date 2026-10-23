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
} from "./data/site.js";

export { findMeta, SITE_URL, OG_IMAGE } from "./data/seo.js";
export { brand } from "./data/site.js";

export const routes = [
  "/",
  "/about",
  "/news",
  "/careers",
  "/resources",
  "/blog",
  "/webinars",
  "/case-studies",
  "/contact",
  "/managed-services",
  ...solutions.map((s) => `/solutions/${s.slug}`),
  ...services.map((s) => `/services/${s.slug}`),
  ...managedServices.map((s) => `/managed-services/${s.slug}`),
  ...caseStudies.map((s) => `/case-studies/${s.slug}`),
];

export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  let html = "";
  for await (const chunk of prelude) html += chunk;
  return html;
}
