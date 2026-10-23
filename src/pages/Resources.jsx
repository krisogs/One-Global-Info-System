import React from "react";
import { motion as Motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, PlayCircle, FileText, Quote, Calendar } from "lucide-react";
import { blogPosts, webinars, dataSheets, caseStudies } from "../data/site.js";
import {
  Button,
  Section,
  SectionHeading,
  Card,
  CTA,
  PageHero,
  fadeUp,
} from "../components/ui.jsx";
import { NotFound } from "./Detail.jsx";

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// ── Resources hub ────────────────────────────────────────────
export function ResourcesHub() {
  const sections = [
    { title: "Blog", path: "/blog", text: "Field-tested perspectives on ERP, quality, and supply chain systems.", icon: FileText },
    { title: "Case Studies", path: "/case-studies", text: "Real projects with real numbers, across our client industries.", icon: Quote },
    { title: "Webinars", path: "/webinars", text: "Live and on-demand sessions with our practice leads.", icon: PlayCircle },
  ];
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Learn from 300+ implementations"
        text="Guides, client stories, and sessions from consultants in the field — not marketing content."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((s) => (
            <Motion.div key={s.title} {...fadeUp}>
              <Link to={s.path} className="group block h-full">
                <Card hover className="flex h-full flex-col p-7">
                  <div className="inline-flex self-start rounded-xl bg-indigo-50 p-3 text-indigo-600 ring-1 ring-indigo-100">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-slate-900">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{s.text}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                    Browse <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            </Motion.div>
          ))}
        </div>
      </Section>

      <Section tinted>
        <SectionHeading
          eyebrow="Data Sheets"
          title="Service overviews, ready to share"
          text="One-page summaries of our key offerings for your internal evaluations."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {dataSheets.map((d) => (
            <Motion.div key={d.title} {...fadeUp}>
              <Card hover className="flex items-start gap-4 p-6">
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600 ring-1 ring-indigo-100">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{d.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{d.description}</p>
                  <Link to="/contact" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    Request a copy <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </Motion.div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}

// ── Blog ─────────────────────────────────────────────────────
export function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="From the field"
        text="Perspectives from consultants who spend their weeks inside client systems — not content calendars."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((p) => (
            <Motion.div key={p.slug} {...fadeUp}>
              <Card hover className="flex h-full flex-col p-6">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700">{p.category}</span>
                  <span className="text-slate-400">{formatDate(p.date)}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug text-slate-900">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{p.excerpt}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                  Discuss this topic <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </Motion.div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}

// ── Webinars ─────────────────────────────────────────────────
export function Webinars() {
  return (
    <>
      <PageHero
        eyebrow="Webinars"
        title="Live sessions and on-demand replays"
        text="Practical, demo-heavy sessions led by our practice leads. No 40-slide vendor pitches."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-5">
          {webinars.map((w) => (
            <Motion.div key={w.title} {...fadeUp}>
              <Card hover className="flex flex-wrap items-center justify-between gap-4 p-6">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 text-xs font-semibold">
                    <span
                      className={`rounded-full px-3 py-1 ${
                        w.status === "Upcoming"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {w.status}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <Calendar className="h-3.5 w-3.5" /> {formatDate(w.date)}
                    </span>
                  </div>
                  <h2 className="mt-3 font-semibold text-slate-900">{w.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{w.description}</p>
                </div>
                <Button to="/contact" variant="secondary">
                  {w.status === "Upcoming" ? "Register" : "Watch"} <PlayCircle className="h-4 w-4" />
                </Button>
              </Card>
            </Motion.div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}

// ── Case studies list ────────────────────────────────────────
export function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Outcomes, not just go-lives"
        text="Every project below shipped on a real timeline with measurable results. Names shared with client permission."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Motion.div key={cs.slug} {...fadeUp}>
              <Link to={`/case-studies/${cs.slug}`} className="group block h-full">
                <Card hover className="flex h-full flex-col p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {cs.industry}
                  </div>
                  <h2 className="mt-3 text-lg font-semibold leading-snug text-slate-900">{cs.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{cs.summary}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <div className="text-lg font-bold text-slate-900">{r.value}</div>
                        <div className="mt-0.5 text-[11px] leading-4 text-slate-500">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Link>
            </Motion.div>
          ))}
        </div>
      </Section>
      <CTA title="Want results like these?" />
    </>
  );
}

// ── Case study detail ────────────────────────────────────────
export function CaseStudyPage() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return <NotFound />;

  return (
    <>
      <PageHero eyebrow={`Case Study — ${cs.industry}`} title={cs.title} text={cs.summary}>
        <Button to="/contact">
          Discuss a Similar Project <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {cs.results.map((r) => (
            <Motion.div key={r.label} {...fadeUp}>
              <Card className="p-8 text-center">
                <div className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
                  {r.value}
                </div>
                <div className="mt-3 text-sm font-medium text-slate-500">{r.label}</div>
              </Card>
            </Motion.div>
          ))}
        </div>

        <Motion.div {...fadeUp} className="mx-auto mt-16 max-w-3xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-10 text-white">
            <Quote className="h-9 w-9 text-indigo-300" />
            <blockquote className="mt-5 text-2xl font-semibold leading-snug">
              “{cs.quote}”
            </blockquote>
            <div className="mt-5 text-sm font-medium text-indigo-200">{cs.quoteAttribution}</div>
          </div>
        </Motion.div>

        <div className="mx-auto mt-16 max-w-3xl">
          <SectionHeading eyebrow="The Engagement" title={`About ${cs.client}`} />
          <p className="mt-5 text-base leading-8 text-slate-600">{cs.summary}</p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Want the full project story — scope, timeline, team structure, and lessons learned?
            We're happy to walk through it and connect you with a reference.
          </p>
          <div className="mt-8">
            <Button to="/contact">
              Request the Full Story <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
      <CTA />
    </>
  );
}
