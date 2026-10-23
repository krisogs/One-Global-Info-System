import React from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { brand, solutions, services, managedServices, caseStudies } from "../data/site.js";

/*
  Lightweight FAQ chatbot — no backend required.
  Answers are generated from the site content in src/data/site.js,
  matched by keywords. Swap `answer()` for an API call later if you
  move to an AI-powered bot.
*/

const QUICK_STARTERS = [
  "What solutions do you offer?",
  "What does managed services include?",
  "What does support cost?",
  "How do I contact you?",
];

function linkList(items, basePath) {
  return items.map((i) => ({ label: i.name, to: `${basePath}/${i.slug}` }));
}

function answer(raw) {
  const t = raw.toLowerCase();
  const has = (...words) => words.some((w) => t.includes(w));

  // Contact / phone / email / address / hours
  if (has("contact", "phone", "call", "email", "address", "location", "office", "hours", "reach")) {
    return {
      text: `You can reach us at ${brand.phone} or ${brand.email}. Our office is at ${brand.address}, open Mon–Fri, 8am–6pm CT. Or send us a message and a consultant will reply within one business day.`,
      links: [{ label: "Go to Contact page", to: "/contact" }],
    };
  }

  // Pricing
  if (has("price", "pricing", "cost", "how much", "rate", "budget", "quote")) {
    return {
      text: "Pricing depends on scope — platform, user count, and how much implementation or ongoing support you need. We don't do one-size-fits-all quotes, but we're happy to give you a straight estimate after a short conversation about your situation.",
      links: [
        { label: "Request an estimate", to: "/contact" },
        { label: "Managed services options", to: "/managed-services" },
      ],
    };
  }

  // Specific solutions
  const solutionKeywords = {
    "enterprise-erp": ["enterprise erp", "financials", "accounting", "netsuite", "cloud erp", "manufacturing erp", "production", "mrp"],
    "quality-management": ["qms", "quality", "capa", "compliance", "fda", "iso", "audit", "validation"],
    "mes": ["mes", "shop floor", "execution", "oee", "machine"],
    "wms": ["wms", "warehouse", "inventory", "barcode", "picking", "scanning"],
  };
  for (const [slug, words] of Object.entries(solutionKeywords)) {
    if (has(...words)) {
      const s = solutions.find((x) => x.slug === slug);
      return {
        text: `${s.name}: ${s.summary}`,
        links: [
          { label: `Explore ${s.name}`, to: `/solutions/${s.slug}` },
          { label: "Talk to an expert", to: "/contact" },
        ],
      };
    }
  }

  // Solutions overview
  if (has("solution", "product", "platform", "erp", "software", "offer")) {
    return {
      text: "We implement and manage five enterprise platforms — all sharing one data backbone:",
      links: linkList(solutions, "/solutions"),
    };
  }

  // Industry questions — no industry pages yet, so route to a consultant
  if (
    has(
      "industr", "vertical", "sector", "who do you serve",
      "medical", "device", "pharma", "biotech", "startup",
      "automotive", "food", "beverage", "retail", "distribution", "wholesale"
    )
  ) {
    return {
      text: "We work across manufacturing and distribution — including regulated environments like medical device and pharma, plus food and beverage, automotive, industrial, retail, and wholesale distribution. A consultant can walk you through relevant projects in your sector.",
      links: [
        { label: "Talk to an expert", to: "/contact" },
        { label: "See client results", to: "/case-studies" },
      ],
    };
  }

  // BPO
  if (has("bpo", "outsourc", "back office", "back-office", "order entry", "accounts payable", "data entry")) {
    return {
      text: "Our BPO teams run high-volume back-office processes inside your ERP — order entry, AP/AR, master data maintenance, and recurring reporting — with documented SOPs and SLA-backed accuracy targets.",
      links: [
        { label: "Business Process Outsourcing", to: "/managed-services/bpo" },
        { label: "Get a proposal", to: "/contact" },
      ],
    };
  }

  // Managed services / support
  if (has("support", "managed", "help desk", "sla", "maintain", "monitoring")) {
    return {
      text: "Our managed services work like a subscription ERP department — application support, technical administration, EDI operations, and continuous improvement under one SLA-backed agreement.",
      links: [
        { label: "Managed services overview", to: "/managed-services" },
        ...linkList(managedServices.slice(0, 3), "/managed-services"),
      ],
    };
  }

  // Specific services
  if (has("implement", "go-live", "golive", "project")) {
    return {
      text: "Our implementation methodology is fixed-scope and milestone-driven — discover, design, build, validate, deploy — refined across 300+ projects.",
      links: [
        { label: "Implementation methodology", to: "/services/implementations" },
        { label: "Client results", to: "/case-studies" },
      ],
    };
  }
  if (has("edi", "trading partner", "chargeback", "asn")) {
    return {
      text: "We implement and manage EDI end to end: partner onboarding, document mapping, certification, and 24/7 monitoring — with chargeback prevention as the KPI.",
      links: [
        { label: "EDI solutions", to: "/services/edi" },
        { label: "Managed EDI", to: "/managed-services/managed-edi" },
      ],
    };
  }
  if (has("integrat", "api", "connect", "sync")) {
    return {
      text: "We design and build integrations between your ERP and everything else — CRM, eCommerce, PLM, 3PLs, banking — with proper error handling and monitoring.",
      links: [{ label: "System integration", to: "/services/system-integration" }],
    };
  }
  if (has("train", "learn", "onboard")) {
    return {
      text: "We build role-based training tailored to your configuration — live workshops, recorded modules, and quick-reference guides.",
      links: [{ label: "Training & enablement", to: "/services/training" }],
    };
  }
  if (has("consult", "service", "advis", "select")) {
    return {
      text: "Our professional services cover the full lifecycle — selection, implementation, integration, EDI, training, and business consulting:",
      links: linkList(services, "/services"),
    };
  }

  // Case studies / results / references
  if (has("case stud", "result", "proof", "reference", "client", "success")) {
    const cs = caseStudies[0];
    return {
      text: `Happy to share results. For example: ${cs.title} (${cs.client}). We have documented case studies with real numbers, and can connect you with references.`,
      links: [{ label: "Browse case studies", to: "/case-studies" }],
    };
  }

  // Careers
  if (has("career", "job", "hiring", "work for", "position", "apply")) {
    return {
      text: "We're always looking for strong practitioners — consultants who've run plants, quality systems, and warehouses. Current openings are on our careers page.",
      links: [{ label: "View open roles", to: "/careers" }],
    };
  }

  // About
  if (has("about", "company", "who are you", "history", "founded")) {
    return {
      text: `One Global Info Systems has been implementing and managing enterprise systems for manufacturers and distributors since ${brand.founded} — 300+ implementations with a 97% client retention rate.`,
      links: [{ label: "About us", to: "/about" }],
    };
  }

  // Greetings (word-boundary match so "hi" doesn't fire inside other words)
  if (/\b(hi|hello|hey|good morning|good afternoon|thanks|thank you)\b/.test(t)) {
    return {
      text: "Hello! I can answer questions about our solutions, services, support plans, and how to get in touch. What would you like to know?",
      chips: QUICK_STARTERS,
    };
  }

  // Fallback
  return {
    text: "I'm not sure about that one — I can help with our solutions, services, managed support, pricing, and contact info. For anything else, a consultant can give you a real answer within one business day.",
    links: [{ label: "Ask a consultant", to: "/contact" }],
    chips: QUICK_STARTERS,
  };
}

function BotMessage({ msg, onChip }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-2.5 text-sm leading-6 text-slate-800">
        {msg.text}
      </div>
      {msg.links && (
        <div className="flex flex-wrap gap-1.5">
          {msg.links.map((l) => (
            <Link
              key={l.to + l.label}
              to={l.to}
              className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100"
            >
              {l.label} <ArrowRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      )}
      {msg.chips && (
        <div className="flex flex-wrap gap-1.5">
          {msg.chips.map((c) => (
            <button
              key={c}
              onClick={() => onChip(c)}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-indigo-300 hover:text-indigo-700"
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([
    {
      role: "bot",
      text: `Hi! I'm the ${brand.shortName} assistant. Ask me about our solutions, services, or support — or pick a topic below.`,
      chips: QUICK_STARTERS,
    },
  ]);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (text) => {
    const clean = text.trim();
    if (!clean) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: clean }]);
    // small delay so the reply feels conversational
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", ...answer(clean) }]);
    }, 450);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-4 right-4 z-[60] flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 p-3.5 text-white shadow-lg shadow-indigo-600/30 transition hover:scale-105 sm:bottom-5 sm:right-5"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-[60] flex h-[min(520px,calc(100dvh-6.5rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15 sm:bottom-24 sm:right-5"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-4 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white p-1">
                <img src="/logo-mark.png" alt="" className="h-7 w-7 object-contain" />
              </div>
              <div>
                <div className="text-sm font-bold">{brand.shortName} Assistant</div>
                <div className="text-xs text-indigo-100">
                  Typically replies instantly · Humans reply within 1 business day
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((msg, i) =>
                msg.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-indigo-600 px-4 py-2.5 text-sm leading-6 text-white">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <BotMessage key={i} msg={msg} onChip={send} />
                )
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-slate-100 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question…"
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-base outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 sm:text-sm"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-500 disabled:opacity-40"
                disabled={!input.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
