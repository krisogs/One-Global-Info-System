import React from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { brand } from "../data/site.js";
import { Button, Section, Card, PageHero, fadeUp } from "../components/ui.jsx";

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to an expert"
        text="Tell us where you are and where you're headed. You'll hear back from a consultant — not a sales sequence — within one business day."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Motion.div {...fadeUp}>
            <Card className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <div className="rounded-full bg-emerald-50 p-4 text-emerald-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-slate-900">Message received</h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                    Thanks for reaching out. A consultant will get back to you within one
                    business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">Name</label>
                      <input
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">Company</label>
                      <input
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone</label>
                      <input
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      What are you working on?
                    </label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100">
                      <option>New ERP selection or implementation</option>
                      <option>Quality management (QMS)</option>
                      <option>MES / WMS / shop floor</option>
                      <option>Managed services / support</option>
                      <option>EDI or system integration</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      required
                      className="min-h-[130px] w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                      placeholder="Tell us about your systems, challenges, and timeline"
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                  <p className="text-xs text-slate-400">
                    Demo form — submissions aren't sent anywhere yet. Connect it to email or a
                    form service before launch.
                  </p>
                </form>
              )}
            </Card>
          </Motion.div>

          <Motion.div {...fadeUp} className="space-y-6">
            <Card className="p-7">
              <h2 className="text-lg font-semibold text-slate-900">Contact information</h2>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                    <Phone className="h-4 w-4" />
                  </div>
                  {brand.phone}
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                    <Mail className="h-4 w-4" />
                  </div>
                  {brand.email}
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                    <MapPin className="h-4 w-4" />
                  </div>
                  {brand.address}
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                    <Clock className="h-4 w-4" />
                  </div>
                  Mon–Fri, 8am–6pm CT
                </div>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-slate-50 to-indigo-50/40 p-7">
              <h2 className="text-lg font-semibold text-slate-900">Existing client?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Managed services clients: use your support portal for the fastest response, or
                call the priority line in your service agreement.
              </p>
            </Card>
          </Motion.div>
        </div>
      </Section>
    </>
  );
}
