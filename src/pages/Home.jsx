import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import {
  stats,
  solutions,
  services,
  caseStudies,
  values,
} from "../data/site.js";
import {
  Button,
  Section,
  SectionHeading,
  LinkCard,
  Card,
  IconBadge,
  StatBlock,
  CheckItem,
  CTA,
  Eyebrow,
  fadeUp,
} from "../components/ui.jsx";
import { FAQSection } from "../components/extras.jsx";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-white to-white" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Enterprise systems that run your business.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Partners who run them with you.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            ERP, quality, and supply chain platforms — selected, implemented, integrated, and
            managed by consultants who know your industry from the inside.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/contact" className="!px-7 !py-3.5 !text-base">
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/case-studies" variant="secondary" className="!px-7 !py-3.5 !text-base">
              See Client Results
            </Button>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-xl shadow-indigo-100/40 backdrop-blur sm:mt-16 sm:gap-8 sm:p-8 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <StatBlock key={s.label} value={s.value} label={s.label} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Solutions */}
      <Section>
        <Motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="Enterprise Solutions"
            title="One partner across the full enterprise stack"
            text="From core ERP to the shop floor and the warehouse — platforms that share one data backbone, implemented by one accountable team."
          />
        </Motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((s) => (
            <Motion.div key={s.slug} {...fadeUp}>
              <LinkCard
                to={`/solutions/${s.slug}`}
                icon={s.icon}
                title={s.name}
                text={s.summary}
              />
            </Motion.div>
          ))}
          <Motion.div {...fadeUp}>
            <Link to="/contact" className="group block h-full">
              <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white transition group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-indigo-300/50">
                <h3 className="text-lg font-semibold">Not sure where to start?</h3>
                <p className="mt-2 text-sm leading-6 text-indigo-100">
                  Tell us your challenges and we'll map the right platform mix — no sales pitch,
                  just a straight assessment.
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                  Get an assessment
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Motion.div>
        </div>
      </Section>

      {/* Services */}
      <Section tinted>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Professional Services"
              title="From selection to go-live to every day after"
              text="Implementation is where projects live or die. Our milestone-driven methodology has delivered 30+ projects — on scope, on time, and absorbed by the business."
            />
            <ul className="mt-8 space-y-4">
              <CheckItem>Fixed-scope, milestone-driven delivery with weekly transparency</CheckItem>
              <CheckItem>Named project teams with real industry experience</CheckItem>
              <CheckItem>Validation support for regulated environments</CheckItem>
              <CheckItem>Hypercare and managed services when the project ends</CheckItem>
            </ul>
            <div className="mt-8">
              <Button to="/services/implementations">
                Our Methodology <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <Motion.div key={s.slug} {...fadeUp}>
                <Link to={`/services/${s.slug}`} className="group block h-full">
                  <Card hover className="h-full p-5">
                    <IconBadge name={s.icon} className="mb-3" />
                    <h3 className="text-sm font-semibold text-slate-900">{s.name}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500">{s.summary}</p>
                  </Card>
                </Link>
              </Motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Managed services band */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Motion.div {...fadeUp}>
              <Eyebrow>Managed Services</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your entire ERP department, as a service
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Application support, technical administration, EDI operations, and continuous
                improvement — one agreement, one SLA, one named team that knows your business.
              </p>
              <div className="mt-8">
                <Button to="/managed-services">
                  Explore Managed Services <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Motion.div>
            <Motion.div {...fadeUp} className="grid grid-cols-2 gap-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <StatBlock light value="24/7" label="Monitoring & support coverage" />
              <StatBlock light value="<1 hr" label="Critical-issue response SLA" />
              <StatBlock light value="97%" label="Client retention rate" />
              <StatBlock light value="1" label="Agreement covering everything" />
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <Section>
        <Motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Client Results"
            title="Outcomes, not just go-lives"
            text="Real projects, real numbers — from regulated manufacturers to high-volume distributors."
          />
          <Button to="/case-studies" variant="secondary">
            All Case Studies <ArrowRight className="h-4 w-4" />
          </Button>
        </Motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <Motion.div key={cs.slug} {...fadeUp}>
              <Link to={`/case-studies/${cs.slug}`} className="group block h-full">
                <Card hover className="flex h-full flex-col p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {cs.industry}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                    {cs.title}
                  </h3>
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

      {/* Values / quote */}
      <Section tinted>
        <div className="grid gap-12 lg:grid-cols-2">
          <Motion.div {...fadeUp}>
            <SectionHeading
              eyebrow="Why One Global"
              title="The partner standard we hold ourselves to"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <Card key={v.title} className="p-5">
                  <h3 className="font-semibold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{v.text}</p>
                </Card>
              ))}
            </div>
          </Motion.div>
          <Motion.div {...fadeUp} className="flex">
            <div className="relative flex flex-col justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-7 text-white sm:p-10">
              <Quote className="h-10 w-10 text-indigo-300" />
              <blockquote className="mt-6 text-2xl font-semibold leading-snug">
                "The managed services model means I have an entire ERP department for less than
                the cost of one senior hire."
              </blockquote>
              <div className="mt-6 text-sm font-medium text-indigo-200">
                President, Velocity Distribution Group
              </div>
              <Link
                to="/case-studies/velocity-distribution"
                className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-indigo-100"
              >
                Read their story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Motion.div>
        </div>
      </Section>

      <FAQSection />

      <CTA />
    </>
  );
}
