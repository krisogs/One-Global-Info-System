import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { brand, show, solutions, services, managedServices } from "../data/site.js";
import { Button } from "./ui.jsx";
import ChatBot from "./ChatBot.jsx";
import Search from "./Search.jsx";
import Seo from "./Seo.jsx";

const navGroups = [
  {
    label: "Solutions",
    links: solutions.map((s) => ({
      name: s.name,
      path: `/solutions/${s.slug}`,
      children: s.platforms?.map((p) => ({
        name: p.name,
        path: `/solutions/${s.slug}#${p.slug}`,
      })),
    })),
  },
  {
    label: "Services",
    links: services.map((s) => ({ name: s.name, path: `/services/${s.slug}` })),
  },
  {
    label: "Managed Services",
    links: [
      { name: "Overview", path: "/managed-services" },
      ...managedServices.map((m) => ({ name: m.name, path: `/managed-services/${m.slug}` })),
    ],
  },
  {
    label: "Company",
    links: [
      { name: "About Us", path: "/about" },
      show.news && { name: "News", path: "/news" },
      { name: "Careers", path: "/careers" },
    ].filter(Boolean),
  },
  {
    label: "Resources",
    links: [
      (show.blog || show.webinars || show.dataSheets) && { name: "All Resources", path: "/resources" },
      show.blog && { name: "Blog", path: "/blog" },
      { name: "Case Studies", path: "/case-studies" },
      show.webinars && { name: "Webinars", path: "/webinars" },
    ].filter(Boolean),
  },
];

// New page → scroll to top. Link with #section (e.g. an ERP platform in the
// Solutions menu) → scroll to that section once the page has loaded.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    let tries = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el || ++tries > 40) {
        clearInterval(timer);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
    return () => clearInterval(timer);
  }, [pathname, hash]);
  return null;
}

function ScrollProgress() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[80] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo-600 via-violet-500 to-brand-orange transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Fallback swirl-globe mark in the One Global logo colors — filled crescents
export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      {/* magenta flick, top-left */}
      <path d="M9 16 C13 9, 21 5.5, 29 7 C21 8, 14 11, 9 16 Z" fill="#c0245e" />
      {/* orange sweep across the top */}
      <path d="M7 22 C12 10, 30 3, 43 13 C40 9, 25 8.5, 16 14 C11 17, 8 19.5, 7 22 Z" fill="#f0932b" />
      {/* teal sweep, center */}
      <path d="M13 29 C21 36, 34 33, 40 21 C38 32, 25 40, 13 29 Z" fill="#2bbcb9" />
      {/* blue base arc */}
      <path d="M6 23 C7 37, 24 47, 40 39 C27 43, 12 38, 6 23 Z" fill="#2f6de4" />
    </svg>
  );
}

/*
  Real logo mark (cropped, transparent) served from public/logo-mark.png,
  with the SVG above as a fallback if the file is ever removed.
*/
export function BrandLogo({ className = "h-10 w-10" }) {
  const [hasImage, setHasImage] = React.useState(true);
  if (!hasImage) return <LogoMark className={className} />;
  return (
    <img
      src="/logo-mark.png"
      alt="One Global Info Systems"
      className={`${className} object-contain`}
      onError={() => setHasImage(false)}
    />
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <BrandLogo />
      <div className="leading-tight">
        <div className="text-[15px] font-bold uppercase tracking-tight text-slate-700">
          One Global
        </div>
        <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-slate-400">
          Info Systems
        </div>
      </div>
    </Link>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 xl:px-3 xl:text-sm">
                {group.label}
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 transition group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/60">
                  {group.links.map((link) => (
                    <div key={link.path} className="group/item relative">
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition ${
                            isActive
                              ? "bg-indigo-50 font-semibold text-indigo-700"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          } ${link.children ? "group-hover/item:bg-slate-50 group-hover/item:text-slate-900" : ""}`
                        }
                      >
                        {link.name}
                        <ChevronRight
                          className={`h-4 w-4 ${link.children ? "text-slate-500" : "text-slate-300"}`}
                        />
                      </NavLink>
                      {link.children && (
                        <div className="invisible absolute left-full top-0 z-50 w-64 pl-2 opacity-0 transition-all duration-150 group-hover/item:visible group-hover/item:opacity-100">
                          <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/60">
                            <div className="px-3.5 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                              ERP Platforms
                            </div>
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                              >
                                {child.name}
                                <ChevronRight className="h-4 w-4 text-slate-300" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="ml-2 xl:ml-3">
            <Search />
          </div>
          <Button to="/contact" className="ml-2 whitespace-nowrap !px-3.5 !py-2 !text-[13px] xl:ml-3 xl:!px-4 xl:!text-sm">
            Talk to an Expert
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Search />
          <button
            className="rounded-lg border border-slate-200 p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1">
            {navGroups.map((group) => (
              <div key={group.label} className="border-b border-slate-100 pb-1">
                <button
                  className="flex w-full items-center justify-between px-2 py-3 text-sm font-semibold text-slate-900"
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                >
                  {group.label}
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition ${openGroup === group.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openGroup === group.label && (
                  <div className="grid gap-1 pb-2">
                    {group.links.map((link) => (
                      <React.Fragment key={link.path}>
                        <Link
                          to={link.path}
                          className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                        >
                          {link.name}
                        </Link>
                        {link.children?.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="ml-4 rounded-lg border-l border-slate-200 px-4 py-1.5 text-sm text-slate-500 hover:bg-slate-50"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Button to="/contact" className="w-full">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="mb-4 text-sm font-semibold text-white">{title}</div>
      <ul className="space-y-2.5 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="transition hover:text-white">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <BrandLogo className="h-10 w-10" />
              <div className="text-base font-bold text-white">{brand.name}</div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Enterprise ERP, quality, and supply chain systems — implemented, integrated, and
              managed for manufacturers and distributors since {brand.founded}.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-indigo-400" /> {brand.phone}
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-indigo-400" /> {brand.email}
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-indigo-400" /> {brand.address}
              </div>
            </div>
          </div>

          <FooterCol
            title="Solutions"
            links={solutions.map((s) => ({ name: s.name, path: `/solutions/${s.slug}` }))}
          />
          <FooterCol
            title="Services"
            links={[
              ...services.map((s) => ({ name: s.name, path: `/services/${s.slug}` })),
            ]}
          />
          <FooterCol
            title="Managed Services"
            links={[
              { name: "Overview", path: "/managed-services" },
              ...managedServices.map((m) => ({ name: m.name, path: `/managed-services/${m.slug}` })),
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { name: "About Us", path: "/about" },
              show.news && { name: "News", path: "/news" },
              { name: "Careers", path: "/careers" },
              { name: "Resources", path: "/resources" },
              { name: "Contact", path: "/contact" },
            ].filter(Boolean)}
          />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
          <div>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            {[
              ["LinkedIn", brand.social.linkedin],
              ["X", brand.social.x],
              ["Facebook", brand.social.facebook],
            ]
              .filter(([, href]) => href)
              .map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            <Link to="/contact" className="inline-flex items-center gap-1 font-semibold text-indigo-400 transition hover:text-indigo-300">
              Start a project <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Seo />
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatBot />
    </div>
  );
}
