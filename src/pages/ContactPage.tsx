import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { config } from "@/lib/config";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Static form simulation
    setSubmitted(true);
  }

  return (
    <main>
      <section className="section-pad border-b border-ot-border bg-ot-bg">
        <div className="ot-container max-w-xl">
          <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
            Contact
          </span>
          <h1 className="mb-4 text-4xl font-bold text-ot-text">Get in touch</h1>
          <p className="leading-relaxed text-ot-muted">
            Questions about OpenThreads or Threadmark? We're a small studio—we
            read everything.
          </p>
        </div>
      </section>

      <section className="section-pad bg-ot-bg">
        <div className="ot-container max-w-xl">
          {/* Direct email */}
          <div className="mb-8 flex items-center gap-3 rounded-card border border-ot-border bg-ot-surface p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ot-accent/10">
              <Mail size={16} className="text-ot-accent" />
            </div>
            <div>
              <p className="mb-0.5 text-xs text-ot-muted">Email us directly</p>
              <a
                href={`mailto:${config.contactEmail}`}
                className="text-sm font-medium text-ot-accent transition-colors hover:text-ot-accent-hover"
              >
                {config.contactEmail}
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-card border border-ot-accent/30 bg-ot-accent/5 p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ot-accent/10">
                <Send size={20} className="text-ot-accent" />
              </div>
              <h2 className="mb-2 font-bold text-ot-text">Message sent</h2>
              <p className="text-sm text-ot-muted">
                Thanks for reaching out. We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-ot-text"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-btn border border-ot-border bg-ot-surface px-4 py-2.5 text-sm text-ot-text transition-colors placeholder:text-ot-muted focus:border-ot-accent focus:outline-none focus:ring-2 focus:ring-ot-accent/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-ot-text"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-btn border border-ot-border bg-ot-surface px-4 py-2.5 text-sm text-ot-text transition-colors placeholder:text-ot-muted focus:border-ot-accent focus:outline-none focus:ring-2 focus:ring-ot-accent/30"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-ot-text"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-none rounded-btn border border-ot-border bg-ot-surface px-4 py-2.5 text-sm text-ot-text transition-colors placeholder:text-ot-muted focus:border-ot-accent focus:outline-none focus:ring-2 focus:ring-ot-accent/30"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-btn bg-ot-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ot-accent-hover"
              >
                Send message <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
