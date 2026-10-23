import React from "react";
import { useLocation } from "react-router-dom";
import { brand } from "../data/site.js";
import { findMeta, SITE_URL, OG_IMAGE } from "../data/seo.js";

/*
  Route-based SEO: sets document.title, meta description, and Open Graph
  tags on every navigation. Static routes are listed below; dynamic routes
  (solutions, industries, etc.) pull from the site data.
*/

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Keeps tags in sync as visitors move between pages. The first page load
// already has these tags baked in by the pre-render step (scripts/prerender.mjs).
export default function Seo() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const meta = findMeta(pathname);
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", brand.name);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("name", "twitter:card", "summary_large_image");
    setCanonical(url);
  }, [pathname]);

  return null;
}
