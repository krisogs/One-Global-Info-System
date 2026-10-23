import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { brand, stats, values, news, careers } from "../data/site.js";
import {
  Button,
  Section,
  SectionHeading,
  Card,
  StatBlock,
  CTA,
  PageHero,
  fadeUp,
} from "../components/ui.jsx";

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// ── About ────────────────────────────────────────────────────
export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`Setting the standard since ${brand.founded}`}
        text="One Global Info Systems is an enterprise systems consultancy for manufacturers and distributors — from venture-backed startups to global multi-site operations."
      >
        <Button to="/careers">
          Join the Team <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Motion.div {...fadeUp}>
            <SectionHeading eyebrow="Our Story" title="Practitioners first, consultants second" />
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                One Global was founded in {brand.founded} by operators who had lived through bad
                ERP projects from the client side — and believed the industry could do better.
                The founding principle still drives every engagement: consultants should know
                the client's industry from the inside, and success should be measured after
                go-live, not at it.
              </p>
              <p>
                Today our team of consultants, architects, and support engineers serves
                manufacturers and distributors across North America, with deep practices in
                regulated industries, supply chain, and quality management. Most of our new
                business comes from referrals — and most of our clients have been with us for
                years.
              </p>
            </div>
          </Motion.div>
          <Motion.div {...fadeUp} className="grid grid-cols-2 content-center gap-10 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-indigo-50/40 p-10">
            {stats.map((s) => (
              <StatBlock key={s.label} value={s.value} label={s.label} />
            ))}
          </Motion.div>
        </div>
      </Section>

      <Section tinted>
        <SectionHeading eyebrow="Values" title="How we work" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((v) => (
            <Motion.div key={v.title} {...fadeUp}>
              <Card className="h-full p-6">
                <h3 className="font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{v.text}</p>
              </Card>
            </Motion.div>
          ))}
        </div>
      </Section>

      <CTA title="Work with a team that's done this 30+ times" />
    </>
  );
}

// ── News ─────────────────────────────────────────────────────
export function News() {
  return (
    <>
      <PageHero
        eyebrow="Company News"
        title="What's new at One Global"
        text="Announcements, milestones, and recognition."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          {news.map((n) => (
            <Motion.div key={n.title} {...fadeUp}>
              <Card className="p-7">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  {formatDate(n.date)}
                </div>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">{n.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{n.excerpt}</p>
              </Card>
            </Motion.div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}

// ── Careers ──────────────────────────────────────────────────
export function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do the best work of your career, with clients who notice"
        text="We hire practitioners — people who've run plants, quality systems, and warehouses — and give them the platform to fix those problems for a living."
      >
        <Button to="/contact">
          Get in Touch <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Open Roles"
          title="Current openings"
          text="Don't see your role? We're always interested in strong industry practitioners — send us a note anyway."
        />
        <div className="mt-10 space-y-4">
          {careers.map((job) => (
            <Motion.div key={job.title} {...fadeUp}>
              <Card hover className="flex flex-wrap items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="font-semibold text-slate-900">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" /> {job.type}
                    </span>
                  </div>
                </div>
                <Button to="/contact" variant="secondary">
                  Apply <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            </Motion.div>
          ))}
        </div>
      </Section>

      <Section tinted>
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            { title: "Real variety", text: "New industries, new problems, new platforms — consultants here don't do the same project twice." },
            { title: "Practitioner culture", text: "No leverage pyramids or bench politics. Small senior teams with full project ownership." },
            { title: "Benefits that matter", text: "Full health coverage, 401(k) match, home-office stipend, and a real training budget every year." },
          ].map((b) => (
            <Motion.div key={b.title} {...fadeUp}>
              <Card className="h-full p-6">
                <div className="inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600 ring-1 ring-indigo-100">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{b.text}</p>
              </Card>
            </Motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
