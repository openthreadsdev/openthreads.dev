import { ArrowRight, CheckCircle } from "lucide-react";
import { config } from "@/lib/config";

const principles = [
  {
    label: "Clarity",
    desc: "Compliance data should be unambiguous. Every field has a type, every record has an owner, every state has a timestamp.",
  },
  {
    label: "Traceability",
    desc: "You should be able to reconstruct the state of any product record at any point in time. No silent edits.",
  },
  {
    label: "Exportability",
    desc: "Data that can't leave your system isn't really yours. Every record should be exportable in a format auditors and partners can use.",
  },
  {
    label: "Pragmatism",
    desc: "We build for real teams with real constraints—not for hypothetical enterprises with infinite resources and in-house legal.",
  },
];

const values = [
  {
    step: "01",
    label: "Clarity over complexity",
    desc: "We reduce regulatory noise into structured, operational data.",
  },
  {
    step: "02",
    label: "Systems over spreadsheets",
    desc: "Compliance should live in structured systems, not scattered documents.",
  },
  {
    step: "03",
    label: "Infrastructure over hype",
    desc: "We build durable foundations, not short-lived tools.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-pad border-b border-ot-border bg-ot-bg">
        <div className="ot-container max-w-2xl">
          <span className="mb-4 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
            About OpenThreads
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-ot-text md:text-5xl">
            We operationalise compliance-first product data.
          </h1>
          <p className="text-lg leading-relaxed text-ot-muted">
            OpenThreads is a product data infrastructure studio. We research,
            prototype, and build tools that help product-based businesses manage
            compliance and product transparency data—without becoming compliance
            experts themselves.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad border-b border-ot-border bg-ot-bg">
        <div className="ot-container grid items-start gap-16 md:grid-cols-2">
          <div>
            <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
              Mission
            </span>
            <h2 className="mb-4 text-3xl font-bold text-ot-text">
              Make compliance data work for the business, not against it.
            </h2>
            <p className="mb-4 leading-relaxed text-ot-muted">
              For most product teams, compliance is a friction point. Data is
              scattered. Records are inconsistent. When an audit arrives,
              there's a scramble. That's not a people problem—it's a data
              infrastructure problem.
            </p>
            <p className="leading-relaxed text-ot-muted">
              We're not a law firm and we don't provide legal advice. We help
              teams build the structured data systems that make compliance
              operational: consistent, auditable, and exportable when you need
              it.
            </p>
          </div>
          <div>
            <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
              What we care about
            </span>
            <div className="space-y-6">
              {values.map(({ step, label, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="w-8 shrink-0 pt-0.5 font-mono text-xs font-bold text-ot-accent">
                    {step}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-ot-text">{label}</h3>
                    <p className="text-sm leading-relaxed text-ot-muted">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="tint-bg section-pad border-b border-ot-border">
        <div className="ot-container">
          <div className="mb-10">
            <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
              Principles
            </span>
            <h2 className="text-3xl font-bold text-ot-text">
              What guides our work
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map(({ label, desc }) => (
              <div
                key={label}
                className="rounded-card border border-ot-border bg-ot-surface p-6"
              >
                <h3 className="mb-2 font-bold text-ot-text">{label}</h3>
                <p className="text-sm leading-relaxed text-ot-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threadmark callout */}
      <section className="section-pad bg-ot-bg">
        <div className="ot-container">
          <div className="max-w-2xl rounded-card border border-ot-accent/20 bg-ot-accent/5 p-8">
            <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
              Now building
            </span>
            <h2 className="mb-3 text-2xl font-bold text-ot-text">Threadmark</h2>
            <p className="mb-5 text-sm leading-relaxed text-ot-muted">
              Threadmark is our first tool: a compliance data management
              platform for small and mid-market product businesses. Structured
              records, change history, and exportable compliance packs—built for
              teams without dedicated compliance staff.
            </p>
            <a
              href={config.threadmarkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-btn bg-ot-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ot-accent-hover"
            >
              Explore Threadmark <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
