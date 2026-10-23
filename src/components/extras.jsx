import React from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { clients, faqs } from "../data/site.js";
import { Icon, Section, SectionHeading, fadeUp } from "./ui.jsx";

// ── Client logo strip (homepage, below hero) ─────────────────
export function LogoStrip() {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Trusted by manufacturers and distributors
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:justify-between">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-2 text-slate-400 grayscale transition hover:text-slate-600 hover:grayscale-0"
            >
              <Icon name={c.icon} className="h-5 w-5" />
              <span className="text-sm font-semibold tracking-tight">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ accordion ────────────────────────────────────────────
function FAQItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-slate-900">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180 text-indigo-600" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-7 text-slate-600">{item.a}</p>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState(0);
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear most"
            text="Straight answers, the same ones you'd get on a call. Don't see yours? Ask us directly — a consultant replies within one business day."
          />
        </Motion.div>
        <Motion.div {...fadeUp}>
          <div className="rounded-2xl border border-slate-200 bg-white">
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Motion.div>
      </div>
    </Section>
  );
}
