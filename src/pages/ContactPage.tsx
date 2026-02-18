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
      <section className="bg-ot-bg section-pad border-b border-ot-border">
        <div className="ot-container max-w-xl">
          <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
            Contact
          </span>
          <h1 className="text-4xl font-bold text-ot-text mb-4">Get in touch</h1>
          <p className="text-ot-muted leading-relaxed">
            Questions about OpenThreads or Threadmark? We're a small studio—we read everything.
          </p>
        </div>
      </section>

      <section className="bg-ot-bg section-pad">
        <div className="ot-container max-w-xl">
          {/* Direct email */}
          <div className="flex items-center gap-3 mb-8 p-4 bg-ot-surface border border-ot-border rounded-card">
            <div className="w-9 h-9 rounded-lg bg-ot-accent/10 flex items-center justify-center shrink-0">
              <Mail size={16} className="text-ot-accent" />
            </div>
            <div>
              <p className="text-xs text-ot-muted mb-0.5">Email us directly</p>
              <a
                href={`mailto:${config.contactEmail}`}
                className="text-sm font-medium text-ot-accent hover:text-ot-accent-hover transition-colors"
              >
                {config.contactEmail}
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="bg-ot-accent/5 border border-ot-accent/30 rounded-card p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-ot-accent/10 flex items-center justify-center mx-auto mb-4">
                <Send size={20} className="text-ot-accent" />
              </div>
              <h2 className="font-bold text-ot-text mb-2">Message sent</h2>
              <p className="text-sm text-ot-muted">Thanks for reaching out. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-ot-text mb-1.5" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-ot-border rounded-btn bg-ot-surface text-ot-text placeholder:text-ot-muted focus:outline-none focus:ring-2 focus:ring-ot-accent/30 focus:border-ot-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ot-text mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-ot-border rounded-btn bg-ot-surface text-ot-text placeholder:text-ot-muted focus:outline-none focus:ring-2 focus:ring-ot-accent/30 focus:border-ot-accent transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ot-text mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-ot-border rounded-btn bg-ot-surface text-ot-text placeholder:text-ot-muted focus:outline-none focus:ring-2 focus:ring-ot-accent/30 focus:border-ot-accent transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-ot-accent hover:bg-ot-accent-hover text-white font-semibold px-6 py-2.5 rounded-btn transition-colors text-sm"
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
