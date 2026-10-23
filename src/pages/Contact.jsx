import React from "react";
import { useSearchParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { brand } from "../data/site.js";
import { Button, Section, Card, PageHero, fadeUp } from "../components/ui.jsx";

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [searchParams] = useSearchParams();
  const messageRef = React.useRef(null);

  // Pre-fill the message when arriving from the chatbot (/contact?message=…).
  React.useEffect(() => {
    const prefill = searchParams.get("message");
    if (prefill && messageRef.current && !messageRef.current.value) {
      messageRef.current.value = prefill;
    }
  }, [searchParams]);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");

  // Web3Forms delivers each submission to the inbox tied to this key.
  // Set VITE_WEB3FORMS_KEY in Vercel → Settings → Environment Variables.
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // spam bot filled the hidden field

    if (!accessKey) {
      setError(`Our form is temporarily unavailable. Please email us at ${brand.email} or call ${brand.phone}.`);
      return;
    }

    data.append("access_key", accessKey);
    data.append("subject", `New website enquiry from ${data.get("name") || "a visitor"}`);
    data.append("from_name", `${brand.shortName} website`);

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || "Request failed");
      form.reset();
      setSubmitted(true);
    } catch {
      setError(`Sorry, your message couldn't be sent. Please try again, or email us at ${brand.email}.`);
    } finally {
      setSending(false);
    }
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
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">Name</label>
                      <input
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        name="name"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">Company</label>
                      <input
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        name="company"
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
                        name="email"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone</label>
                      <input
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        name="phone"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      What are you working on?
                    </label>
                    <select name="topic" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100">
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
                      ref={messageRef}
                      required
                      className="min-h-[130px] w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none sm:text-sm transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                      name="message"
                        placeholder="Tell us about your systems, challenges, and timeline"
                    />
                  </div>
                  {error && (
                    <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </p>
                  )}
                  <Button type="submit" disabled={sending} className="w-full sm:w-auto disabled:opacity-60">
                    {sending ? "Sending…" : "Send Message"}
                  </Button>
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
