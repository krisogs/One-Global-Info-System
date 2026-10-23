import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Search as SearchIcon, X, ArrowRight, CornerDownLeft } from "lucide-react";
import {
  solutions,
  services,
  managedServices,
  caseStudies,
  blogPosts,
} from "../data/site.js";

// Build the search index once from site data
const INDEX = [
  ...solutions.map((i) => ({ label: i.name, group: "Solutions", text: `${i.summary} ${i.tagline}`, to: `/solutions/${i.slug}` })),
  ...services.map((i) => ({ label: i.name, group: "Services", text: i.summary, to: `/services/${i.slug}` })),
  ...managedServices.map((i) => ({ label: i.name, group: "Managed Services", text: i.summary, to: `/managed-services/${i.slug}` })),
  ...caseStudies.map((i) => ({ label: `${i.client}: ${i.title}`, group: "Case Studies", text: i.summary, to: `/case-studies/${i.slug}` })),
  ...blogPosts.map((i) => ({ label: i.title, group: "Blog", text: i.excerpt, to: "/blog" })),
  { label: "About Us", group: "Company", text: "story values team history", to: "/about" },
  { label: "Careers", group: "Company", text: "jobs open roles hiring", to: "/careers" },
  { label: "News", group: "Company", text: "announcements press milestones", to: "/news" },
  { label: "Contact", group: "Company", text: "phone email address talk to an expert", to: "/contact" },
  { label: "Webinars", group: "Resources", text: "live sessions replays register", to: "/webinars" },
];

function search(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const words = q.split(/\s+/);
  return INDEX.map((item) => {
    const hay = `${item.label} ${item.group} ${item.text}`.toLowerCase();
    let score = 0;
    for (const w of words) {
      if (item.label.toLowerCase().includes(w)) score += 3;
      else if (hay.includes(w)) score += 1;
      else return null;
    }
    return { ...item, score };
  })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

export default function Search() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const inputRef = React.useRef(null);
  const navigate = useNavigate();
  const results = React.useMemo(() => search(query), [query]);

  // Cmd/Ctrl+K to open, Esc to close
  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  React.useEffect(() => setActive(0), [query]);

  const go = (item) => {
    setOpen(false);
    navigate(item.to);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search the site"
        className="flex items-center gap-2 rounded-lg border border-slate-200 px-2.5 py-2 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="hidden text-xs font-medium text-slate-400 xl:inline">⌘K</span>
      </button>

      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center bg-slate-900/40 p-4 pt-[12vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <Motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
                <SearchIcon className="h-5 w-5 text-slate-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") setActive((a) => Math.min(a + 1, results.length - 1));
                    if (e.key === "ArrowUp") setActive((a) => Math.max(a - 1, 0));
                    if (e.key === "Enter" && results[active]) go(results[active]);
                  }}
                  placeholder="Search solutions, services, resources…"
                  className="flex-1 bg-transparent text-base outline-none placeholder:text-slate-400"
                />
                <button onClick={() => setOpen(false)} aria-label="Close search">
                  <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                </button>
              </div>

              <div className="max-h-[50vh] overflow-y-auto p-2">
                {query && results.length === 0 && (
                  <div className="px-4 py-8 text-center text-sm text-slate-500">
                    No results for "{query}". Try "ERP", "quality", or "support" — or{" "}
                    <button className="font-semibold text-indigo-600" onClick={() => go({ to: "/contact" })}>
                      ask us directly
                    </button>
                    .
                  </div>
                )}
                {!query && (
                  <div className="px-4 py-6 text-center text-xs text-slate-400">
                    Type to search all 30+ pages · ↑↓ to navigate · Enter to open
                  </div>
                )}
                {results.map((r, i) => (
                  <button
                    key={r.to + r.label}
                    onClick={() => go(r)}
                    onMouseEnter={() => setActive(i)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left ${
                      i === active ? "bg-indigo-50" : ""
                    }`}
                  >
                    <div className="min-w-0">
                      <div className={`truncate text-sm font-semibold ${i === active ? "text-indigo-700" : "text-slate-900"}`}>
                        {r.label}
                      </div>
                      <div className="truncate text-xs text-slate-500">{r.text}</div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                        {r.group}
                      </span>
                      {i === active ? (
                        <CornerDownLeft className="h-4 w-4 text-indigo-500" />
                      ) : (
                        <ArrowRight className="h-4 w-4 text-slate-300" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
