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

const process = [
  {
    step: "01",
    label: "Research",
    desc: "We study real compliance workflows, regulatory requirements, and where teams actually break down. Not theory—fieldwork.",
  },
  {
    step: "02",
    label: "Prototype",
    desc: "We build minimal, testable versions of the solution. Fast iteration before architectural commitment.",
  },
  {
    step: "03",
    label: "Ship",
    desc: "We release working tools to real users, gather feedback, and improve. The goal is something people actually use.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-ot-bg section-pad border-b border-ot-border">
        <div className="ot-container max-w-2xl">
          <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-4 block">
            About OpenThreads
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ot-text mb-6 leading-tight">
            We operationalize compliance-first product data.
          </h1>
          <p className="text-lg text-ot-muted leading-relaxed">
            OpenThreads is a product data infrastructure studio. We research, prototype, and build tools that help product-based businesses manage compliance and product transparency data—without becoming compliance experts themselves.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-ot-bg section-pad border-b border-ot-border">
        <div className="ot-container grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
              Mission
            </span>
            <h2 className="text-3xl font-bold text-ot-text mb-4">Make compliance data work for the business, not against it.</h2>
            <p className="text-ot-muted leading-relaxed mb-4">
              For most product teams, compliance is a friction point. Data is scattered. Records are inconsistent. When an audit arrives, there's a scramble. That's not a people problem—it's a data infrastructure problem.
            </p>
            <p className="text-ot-muted leading-relaxed">
              We're not a law firm and we don't provide legal advice. We help teams build the structured data systems that make compliance operational: consistent, auditable, and exportable when you need it.
            </p>
          </div>
          <div>
            <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
              How we work
            </span>
            <div className="space-y-6">
              {process.map(({ step, label, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="font-mono text-xs text-ot-accent font-bold pt-0.5 w-8 shrink-0">{step}</div>
                  <div>
                    <h3 className="font-semibold text-ot-text mb-1">{label}</h3>
                    <p className="text-sm text-ot-muted leading-relaxed">{desc}</p>
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
            <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
              Principles
            </span>
            <h2 className="text-3xl font-bold text-ot-text">What guides our work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map(({ label, desc }) => (
              <div key={label} className="bg-ot-surface border border-ot-border rounded-card p-6">
                <h3 className="font-bold text-ot-text mb-2">{label}</h3>
                <p className="text-sm text-ot-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threadmark callout */}
      <section className="bg-ot-bg section-pad">
        <div className="ot-container">
          <div className="bg-ot-accent/5 border border-ot-accent/20 rounded-card p-8 max-w-2xl">
            <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
              Now building
            </span>
            <h2 className="text-2xl font-bold text-ot-text mb-3">Threadmark</h2>
            <p className="text-sm text-ot-muted leading-relaxed mb-5">
              Threadmark is our first tool: a compliance data management platform for small and mid-market product businesses. Structured records, change history, and exportable compliance packs—built for teams without dedicated compliance staff.
            </p>
            <a
              href={config.threadmarkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ot-accent hover:bg-ot-accent-hover text-white font-semibold px-5 py-2.5 rounded-btn transition-colors text-sm"
            >
              Explore Threadmark <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
