import React from "react";
import { motion as Motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeftRight,
  BadgeCheck,
  Building2,
  Car,
  Cog,
  Compass,
  Cpu,
  FlaskConical,
  GraduationCap,
  Headset,
  HeartPulse,
  Layers3,
  LineChart,
  Network,
  Repeat,
  Rocket,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
  Stethoscope,
  Truck,
  Users,
  UtensilsCrossed,
  Warehouse,
  Wrench,
} from "lucide-react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const crumbLabels = {
  solutions: "Solutions",
  industries: "Industries",
  services: "Services",
  "managed-services": "Managed Services",
  "case-studies": "Case Studies",
  resources: "Resources",
  blog: "Blog",
  webinars: "Webinars",
  about: "About",
  news: "News",
  careers: "Careers",
  contact: "Contact",
};

function Breadcrumbs({ leaf }) {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const linkable = new Set(["/managed-services", "/case-studies", "/resources", "/blog", "/webinars"]);
  const crumbs = [{ label: "Home", to: "/" }];
  let path = "";
  segments.forEach((seg, i) => {
    path += `/${seg}`;
    const isLeaf = i === segments.length - 1;
    crumbs.push({
      label: isLeaf && leaf ? leaf : crumbLabels[seg] || seg,
      to: !isLeaf && linkable.has(path) ? path : null,
    });
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-400">
      {crumbs.map((c, i) => (
        <React.Fragment key={i}>
          {i > 0 && <ChevronRight className="h-3 w-3 text-slate-300" />}
          {c.to ? (
            <Link to={c.to} className="transition hover:text-indigo-600">
              {c.label}
            </Link>
          ) : (
            <span className="text-slate-600">{c.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

// Icons referenced by name from src/data/site.js. Only these are bundled —
// if you add a new `icon:` name in site.js, import it above and add it here.
const Icons = {
  ArrowLeftRight,
  BadgeCheck,
  Building2,
  Car,
  Cog,
  Compass,
  Cpu,
  FlaskConical,
  GraduationCap,
  Headset,
  HeartPulse,
  Layers3,
  LineChart,
  Network,
  Repeat,
  Rocket,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
  Stethoscope,
  Truck,
  Users,
  UtensilsCrossed,
  Warehouse,
  Wrench,
};

// Resolve a lucide icon by string name (used by data-driven pages)
export function Icon({ name, className = "h-6 w-6" }) {
  const Cmp = Icons[name] || Sparkles;
  return <Cmp className={className} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export function Button({ children, to, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";
  const variants = {
    primary: "bg-indigo-600 text-white shadow-sm shadow-indigo-600/25 hover:bg-indigo-500",
    secondary: "bg-white text-slate-900 ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50",
    ghost: "text-indigo-600 hover:text-indigo-500",
    dark: "bg-slate-900 text-white hover:bg-slate-800",
  };
  const classes = `${base} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

export function Section({ children, className = "", tinted = false }) {
  return (
    <section className={`${tinted ? "border-y border-slate-100 bg-slate-50/70" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 lg:px-8 lg:py-24">{children}</div>
    </section>
  );
}

export function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white ${
        hover ? "transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({ name, className = "" }) {
  return (
    <div
      className={`inline-flex rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 p-3 text-indigo-600 ring-1 ring-indigo-100 ${className}`}
    >
      <Icon name={name} className="h-6 w-6" />
    </div>
  );
}

export function LinkCard({ to, icon, title, text }) {
  return (
    <Link to={to} className="group block h-full">
      <Card hover className="flex h-full flex-col p-6">
        {icon && <IconBadge name={icon} className="mb-4 self-start" />}
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{text}</p>
        <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
          Learn more
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
}

export function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
      <span className="text-sm leading-6 text-slate-700">{children}</span>
    </li>
  );
}

export function StatBlock({ value, label, light = false }) {
  return (
    <div>
      <div
        className={`text-4xl font-bold tracking-tight ${
          light ? "text-white" : "bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"
        }`}
      >
        {value}
      </div>
      <div className={`mt-2 text-sm font-medium ${light ? "text-indigo-200" : "text-slate-500"}`}>{label}</div>
    </div>
  );
}

export function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-indigo-50/60 via-white to-white">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8 lg:py-20">
        <Motion.div {...fadeUp} className="max-w-3xl">
          <Breadcrumbs leaf={title} />
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          {text && <p className="mt-6 text-lg leading-8 text-slate-600">{text}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </Motion.div>
      </div>
    </section>
  );
}

export function CTA({
  title = "Ready to talk about your next project?",
  text = "Tell us where you are and where you're headed. We'll give you a straight answer on scope, timeline, and cost.",
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8 lg:pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-16 sm:py-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-indigo-600/40 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact">
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/case-studies" variant="secondary">
              See Client Results
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
