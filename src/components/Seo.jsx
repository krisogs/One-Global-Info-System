import React from "react";
import { useLocation } from "react-router-dom";
import {
  brand,
  solutions,
  services,
  managedServices,
  caseStudies,
} from "../data/site.js";

/*
  Route-based SEO: sets document.title, meta description, and Open Graph
  tags on every navigation. Static routes are listed below; dynamic routes
  (solutions, industries, etc.) pull from the site data.
*/

const staticMeta = {
  "/": {
    title: `${brand.name} — Enterprise ERP, Quality & Supply Chain Experts`,
    description:
      "ERP, QMS, MES, and WMS solutions — selected, implemented, integrated, and managed for manufacturers and distributors since 2008.",
  },
  "/about": {
    title: `About Us — ${brand.name}`,
    description:
      "Enterprise systems consultancy for manufacturers and distributors. 300+ implementations, 97% client retention, since 2008.",
  },
  "/news": {
    title: `News — ${brand.name}`,
    description: "Announcements, milestones, and recognition from One Global Info Systems.",
  },
  "/careers": {
    title: `Careers — ${brand.name}`,
    description: "Join a practitioner-first enterprise systems consultancy. View open roles.",
  },
  "/resources": {
    title: `Resources — ${brand.name}`,
    description: "Guides, case studies, webinars, and data sheets from 300+ enterprise implementations.",
  },
  "/blog": {
    title: `Blog — ${brand.name}`,
    description: "Field-tested perspectives on ERP, quality, and supply chain systems.",
  },
  "/webinars": {
    title: `Webinars — ${brand.name}`,
    description: "Live sessions and on-demand replays led by our practice leads.",
  },
  "/case-studies": {
    title: `Case Studies — ${brand.name}`,
    description: "Real client projects with measurable results across manufacturing and distribution.",
  },
  "/contact": {
    title: `Contact — ${brand.name}`,
    description: `Talk to an enterprise systems expert. Call ${brand.phone} or send a message — replies within one business day.`,
  },
  "/managed-services": {
    title: `Managed Services — ${brand.name}`,
    description: "Your entire ERP department as a service: application support, technical administration, EDI, and continuous improvement.",
  },
};

function findMeta(pathname) {
  if (staticMeta[pathname]) return staticMeta[pathname];

  const [, section, slug] = pathname.split("/");
  const collections = {
    solutions: [solutions, (i) => `${i.name} — ${i.tagline}`],
    services: [services, (i) => `${i.name} — Professional Services`],
    "managed-services": [managedServices, (i) => `${i.name} — Managed Services`],
    "case-studies": [caseStudies, (i) => `${i.title} — Case Study`],
  };
  const entry = collections[section];
  if (entry && slug) {
    const item = entry[0].find((i) => i.slug === slug);
    if (item) {
      return {
        title: `${entry[1](item)} | ${brand.shortName}`,
        description: item.summary || item.description || "",
      };
    }
  }
  return staticMeta["/"];
}

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const meta = findMeta(pathname);
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", brand.name);
    setMeta("property", "og:image", `${window.location.origin}/logo.png`);
    setMeta("name", "twitter:card", "summary");
  }, [pathname]);

  return null;
}
