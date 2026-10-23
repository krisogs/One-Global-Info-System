import React from "react";
import { motion as Motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, AlertTriangle, TrendingUp } from "lucide-react";
import { solutions, industries, services, managedServices, caseStudies } from "../data/site.js";
import {
  Button,
  Section,
  SectionHeading,
  Card,
  IconBadge,
  CheckItem,
  CTA,
  PageHero,
  LinkCard,
  fadeUp,
} from "../components/ui.jsx";

export function NotFound() {
  return (
    <Section className="text-center">
      <div className="text-7xl font-bold text-slate-200">404</div>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you're looking for doesn't exist or has moved.</p>
      <div className="mt-8 flex justify-center">
        <Button to="/">Back to Home</Button>
      </div>
    </Section>
  );
}

function RelatedGrid({ title, items, basePath, current }) {
  const others = items.filter((i) => i.slug !== current).slice(0, 3);
  return (
    <Section tinted>
      <SectionHeading eyebrow="Explore More" title={title} />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {others.map((i) => (
          <LinkCard
            key={i.slug}
            to={`${basePath}/${i.slug}`}
            icon={i.icon}
            title={i.name}
            text={i.summary}
          />
        ))}
      </div>
    </Section>
  );
}

// ── Solution detail ──────────────────────────────────────────
export function SolutionPage() {
  const { slug } = useParams();
  const item = solutions.find((s) => s.slug === slug);
  if (!item) return <NotFound />;

  return (
    <>
      <PageHero eyebrow="Enterprise Solutions" title={item.name} text={item.tagline}>
        <Button to="/contact">
          Request a Demo <ArrowRight className="h-4 w-4" />
        </Button>
        <Button to="/case-studies" variant="secondary">
          Client Results
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Motion.div {...fadeUp}>
            <SectionHeading eyebrow="Overview" title={item.summary} />
            <p className="mt-6 text-base leading-8 text-slate-600">{item.description}</p>
          </Motion.div>
          <Motion.div {...fadeUp}>
            <Card className="bg-gradient-to-br from-slate-50 to-indigo-50/40 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">Why teams choose it</h3>
              <ul className="mt-5 space-y-4">
                {item.benefits.map((b) => (
                  <CheckItem key={b}>{b}</CheckItem>
                ))}
              </ul>
            </Card>
          </Motion.div>
        </div>
      </Section>

      {item.platforms && (
        <Section>
          <SectionHeading
            eyebrow="ERP Platforms"
            title="The ERP platforms we implement and support"
            text="We help you choose the right fit, then implement, integrate, and support it."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {item.platforms.map((p) => (
              <Motion.div key={p.name} id={p.slug} className="scroll-mt-28" {...fadeUp}>
                <Card className="h-full p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{p.text}</p>
                </Card>
              </Motion.div>
            ))}
          </div>
        </Section>
      )}

      <Section tinted>
        <SectionHeading
          eyebrow="Capabilities"
          title={`What ${item.name} covers`}
          text="Configured to your processes — not the other way around."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {item.features.map((f) => (
            <Motion.div key={f.title} {...fadeUp}>
              <Card className="h-full p-6">
                <IconBadge name={item.icon} className="mb-4" />
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.text}</p>
              </Card>
            </Motion.div>
          ))}
        </div>
      </Section>

      <RelatedGrid
        title="Other enterprise solutions"
        items={solutions}
        basePath="/solutions"
        current={slug}
      />
      <CTA title={`Ready to see ${item.name} in action?`} />
    </>
  );
}

// ── Industry detail ──────────────────────────────────────────
export function IndustryPage() {
  const { slug } = useParams();
  const item = industries.find((i) => i.slug === slug);
  if (!item) return <NotFound />;

  const relatedCase = caseStudies.find((cs) => cs.industry === item.name);

  return (
    <>
      <PageHero eyebrow="Industries" title={item.name} text={item.summary}>
        <Button to="/contact">
          Talk to an Industry Expert <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <div className="max-w-3xl">
          <Motion.p {...fadeUp} className="text-lg leading-8 text-slate-600">
            {item.description}
          </Motion.p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Motion.div {...fadeUp}>
            <Card className="h-full border-amber-100 bg-amber-50/40 p-6 sm:p-8">
              <div className="inline-flex rounded-xl bg-amber-100 p-3 text-amber-700">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Challenges we solve
              </h3>
              <ul className="mt-5 space-y-3">
                {item.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </Card>
          </Motion.div>
          <Motion.div {...fadeUp}>
            <Card className="h-full border-indigo-100 bg-indigo-50/40 p-6 sm:p-8">
              <div className="inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-700">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Outcomes clients achieve
              </h3>
              <ul className="mt-5 space-y-3">
                {item.outcomes.map((o) => (
                  <CheckItem key={o}>{o}</CheckItem>
                ))}
              </ul>
            </Card>
          </Motion.div>
        </div>
      </Section>

      {relatedCase && (
        <Section tinted>
          <SectionHeading eyebrow="Proof" title={`${item.name} in practice`} />
          <Motion.div {...fadeUp} className="mt-10">
            <Link to={`/case-studies/${relatedCase.slug}`} className="group block">
              <Card hover className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr]">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    Case Study — {relatedCase.client}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">{relatedCase.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{relatedCase.summary}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                    Read the story <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 self-center lg:grid-cols-1">
                  {relatedCase.results.map((r) => (
                    <div key={r.label}>
                      <div className="text-2xl font-bold text-slate-900">{r.value}</div>
                      <div className="mt-1 text-xs text-slate-500">{r.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </Link>
          </Motion.div>
        </Section>
      )}

      <RelatedGrid
        title="Other industries we serve"
        items={industries}
        basePath="/industries"
        current={slug}
      />
      <CTA title={`Let's talk about your ${item.name.toLowerCase()} operation`} />
    </>
  );
}

// ── Service detail ───────────────────────────────────────────
export function ServicePage() {
  const { slug } = useParams();
  const item = services.find((s) => s.slug === slug);
  if (!item) return <NotFound />;

  return (
    <>
      <PageHero eyebrow="Professional Services" title={item.name} text={item.summary}>
        <Button to="/contact">
          Start a Conversation <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Motion.div {...fadeUp}>
            <SectionHeading eyebrow="Approach" title="How we deliver" />
            <p className="mt-6 text-base leading-8 text-slate-600">{item.description}</p>
          </Motion.div>
          <Motion.div {...fadeUp}>
            <Card className="bg-gradient-to-br from-slate-50 to-indigo-50/40 p-6 sm:p-8">
              <IconBadge name={item.icon} className="mb-4" />
              <h3 className="text-lg font-semibold text-slate-900">What's included</h3>
              <ul className="mt-5 space-y-4">
                {item.deliverables.map((d) => (
                  <CheckItem key={d}>{d}</CheckItem>
                ))}
              </ul>
            </Card>
          </Motion.div>
        </div>
      </Section>

      <RelatedGrid
        title="Other professional services"
        items={services}
        basePath="/services"
        current={slug}
      />
      <CTA />
    </>
  );
}

// ── Managed services overview + detail ───────────────────────
export function ManagedServicesOverview() {
  return (
    <>
      <PageHero
        eyebrow="Managed Services"
        title="Your entire ERP department, as a service"
        text="Application support, technical administration, EDI operations, and continuous improvement — one agreement, one SLA, one named team that knows your business."
      >
        <Button to="/contact">
          Get a Coverage Proposal <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Service Lines"
          title="Coverage shaped to how you operate"
          text="Take the full TotalCare package or compose exactly the coverage you need."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {managedServices.map((m) => (
            <Motion.div key={m.slug} {...fadeUp}>
              <LinkCard
                to={`/managed-services/${m.slug}`}
                icon={m.icon}
                title={m.name}
                text={m.summary}
              />
            </Motion.div>
          ))}
        </div>
      </Section>
      <CTA title="Stop staffing an ERP department. Subscribe to one." />
    </>
  );
}

export function ManagedServicePage() {
  const { slug } = useParams();
  const item = managedServices.find((m) => m.slug === slug);
  if (!item) return <NotFound />;

  return (
    <>
      <PageHero eyebrow="Managed Services" title={item.name} text={item.summary}>
        <Button to="/contact">
          Get a Proposal <ArrowRight className="h-4 w-4" />
        </Button>
        <Button to="/managed-services" variant="secondary">
          All Managed Services
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Motion.div {...fadeUp}>
            <SectionHeading eyebrow="Overview" title="What this service does" />
            <p className="mt-6 text-base leading-8 text-slate-600">{item.description}</p>
          </Motion.div>
          <Motion.div {...fadeUp}>
            <Card className="bg-gradient-to-br from-slate-50 to-indigo-50/40 p-6 sm:p-8">
              <IconBadge name={item.icon} className="mb-4" />
              <h3 className="text-lg font-semibold text-slate-900">Included in {item.name}</h3>
              <ul className="mt-5 space-y-4">
                {item.includes.map((i) => (
                  <CheckItem key={i}>{i}</CheckItem>
                ))}
              </ul>
            </Card>
          </Motion.div>
        </div>
      </Section>

      <RelatedGrid
        title="Other managed service lines"
        items={managedServices}
        basePath="/managed-services"
        current={slug}
      />
      <CTA />
    </>
  );
}
