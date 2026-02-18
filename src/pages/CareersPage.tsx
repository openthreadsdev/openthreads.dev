import { Link } from "react-router-dom";

const responsibilities = [
  {
    title: "Regulatory Monitoring",
    points: [
      "Track emerging EU and UK product compliance regulations (e.g., DPP, EPR, REACH, Green Claims, CSRD).",
      "Monitor policy updates from EU Commission sources and relevant trade bodies.",
      "Identify regulatory changes likely to impact small-to-mid-sized product businesses.",
    ],
  },
  {
    title: "Community Signal Detection",
    points: [
      "Monitor public forums (e.g., Reddit, LinkedIn, industry groups) for compliance-related discussions.",
      "Identify recurring pain signals and confusion patterns.",
      "Capture verbatim quotes that reflect authentic market sentiment.",
    ],
  },
  {
    title: "Industry-Specific Research",
    points: [
      "Observe high-friction verticals: Apparel and textiles, Furniture and home goods, Sustainability-focused brands, Cannabis-based medicinal products (CBMPs).",
      "Map compliance pain intensity by sector.",
    ],
  },
  {
    title: "Pattern Analysis",
    points: [
      "Distill daily observations into weekly intelligence briefs.",
      "Identify: Top emerging regulatory themes, Operational bottlenecks, Language patterns used by founders, Shifts in urgency or enforcement perception.",
    ],
  },
  {
    title: "Strategic Reporting",
    points: [
      "Top 3 emerging compliance concerns",
      "One unexpected insight",
      "One potential product or positioning implication",
      "Notable direct quotes",
      "Severity assessment (1–5)",
    ],
  },
];

const deliverables = [
  "Daily signal capture log (structured table format)",
  "Weekly Compliance Intelligence Brief (1–2 pages)",
  "Monthly trend summary (high-level strategic overview)",
];

const idealProfile = [
  "Strong research and analytical mindset",
  "Comfortable synthesizing qualitative signals into patterns",
  "Interested in EU regulation, commerce, sustainability, and digital infrastructure",
  "Detail-oriented and systematic",
  "Self-directed and disciplined",
];

const notThisRole = [
  "Not legal advice",
  "Not compliance consulting",
  "Not marketing content creation",
  "Not community management",
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-pad border-b border-ot-border bg-ot-bg">
        <div className="ot-container max-w-3xl">
          <span className="mb-4 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
            Open Roles
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-ot-text md:text-5xl">
            Join OpenThreads
          </h1>
          <p className="text-lg leading-relaxed text-ot-muted">
            We're building compliance-first product data infrastructure for
            modern product brands. If you care about regulatory clarity,
            structured systems, and helping businesses navigate complexity—we'd
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Available Positions */}
      <section className="section-pad bg-ot-bg">
        <div className="ot-container max-w-3xl">
          <div className="rounded-card border border-ot-border bg-ot-surface p-8">
            {/* Position Header */}
            <div className="mb-8 border-b border-ot-border pb-6">
              <h2 className="mb-3 text-3xl font-bold text-ot-text">
                Compliance Intelligence Lead
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-btn bg-ot-accent/10 px-3 py-1 font-mono text-xs font-medium text-ot-accent">
                  Remote
                </span>
                <span className="rounded-btn bg-ot-accent/10 px-3 py-1 font-mono text-xs font-medium text-ot-accent">
                  Part-Time / Contract
                </span>
              </div>
            </div>

            {/* About OpenThreads */}
            <div className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-ot-text">
                About OpenThreads
              </h3>
              <p className="mb-4 leading-relaxed text-ot-muted">
                OpenThreads is a compliance-first product data infrastructure
                studio focused on helping product-based businesses manage
                regulatory requirements with clarity and confidence.
              </p>
              <p className="mb-3 leading-relaxed text-ot-muted">
                We work at the intersection of:
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex gap-2 text-sm text-ot-muted">
                  <span className="text-ot-accent">•</span>
                  EU product regulation
                </li>
                <li className="flex gap-2 text-sm text-ot-muted">
                  <span className="text-ot-accent">•</span>
                  Digital Product Passports (DPP)
                </li>
                <li className="flex gap-2 text-sm text-ot-muted">
                  <span className="text-ot-accent">•</span>
                  Sustainability and environmental reporting
                </li>
                <li className="flex gap-2 text-sm text-ot-muted">
                  <span className="text-ot-accent">•</span>
                  Shopify-based commerce
                </li>
                <li className="flex gap-2 text-sm text-ot-muted">
                  <span className="text-ot-accent">•</span>
                  Compliance data management infrastructure
                </li>
              </ul>
              <p className="leading-relaxed text-ot-muted">
                Our mission is to reduce regulatory friction for modern product
                brands through structured, audit-ready systems.
              </p>
            </div>

            {/* The Role */}
            <div className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-ot-text">The Role</h3>
              <p className="mb-4 leading-relaxed text-ot-muted">
                We are seeking a <strong>Compliance Intelligence Lead</strong>{" "}
                to build and maintain our regulatory insight capability.
              </p>
              <p className="mb-4 leading-relaxed text-ot-muted">
                This role is responsible for continuously monitoring emerging
                regulations, industry conversations, and compliance-related
                friction across digital communities and trade ecosystems.
              </p>
              <p className="mb-4 leading-relaxed text-ot-muted">
                You will surface patterns, identify risk signals, and translate
                qualitative insights into actionable strategic intelligence for
                product and messaging decisions.
              </p>
              <div className="rounded-btn bg-ot-accent/5 p-4">
                <p className="mb-1 font-mono text-xs font-semibold text-ot-accent">
                  Important:
                </p>
                <p className="text-sm leading-relaxed text-ot-muted">
                  This is not a legal advisory role. This is an intelligence and
                  insight function.
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-bold text-ot-text">
                Responsibilities
              </h3>
              <div className="space-y-6">
                {responsibilities.map(({ title, points }) => (
                  <div key={title}>
                    <h4 className="mb-2 font-semibold text-ot-text">{title}</h4>
                    <ul className="space-y-1.5">
                      {points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-sm text-ot-muted"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ot-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-ot-text">
                Deliverables
              </h3>
              <ul className="space-y-2">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ot-muted">
                    <span className="text-ot-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal Profile */}
            <div className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-ot-text">
                Ideal Profile
              </h3>
              <ul className="mb-4 space-y-2">
                {idealProfile.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ot-muted">
                    <span className="text-ot-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-ot-muted">
                Background in policy, research, compliance, journalism,
                consulting, or market intelligence is a plus—but not required.
              </p>
            </div>

            {/* What This Role Is Not */}
            <div className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-ot-text">
                What This Role Is Not
              </h3>
              <ul className="mb-4 space-y-2">
                {notThisRole.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ot-muted">
                    <span className="text-ot-muted">×</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-ot-muted">
                This is a signal intelligence and pattern recognition function.
              </p>
            </div>

            {/* Time Commitment */}
            <div className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-ot-text">
                Time Commitment
              </h3>
              <p className="mb-2 text-sm text-ot-muted">Flexible.</p>
              <p className="text-sm text-ot-muted">
                Expected 20–40 minutes per day, plus structured weekly
                reporting.
              </p>
            </div>

            {/* Why This Role Matters */}
            <div className="mb-8">
              <h3 className="mb-3 text-lg font-bold text-ot-text">
                Why This Role Matters
              </h3>
              <p className="mb-3 leading-relaxed text-ot-muted">
                Regulatory friction is increasing across Europe. Businesses are
                confused, underprepared, and overwhelmed.
              </p>
              <p className="mb-3 leading-relaxed text-ot-muted">
                OpenThreads exists to bring structure to that chaos.
              </p>
              <p className="leading-relaxed text-ot-muted">
                This role ensures our product strategy is grounded in real-world
                friction—not assumptions.
              </p>
            </div>

            {/* Apply */}
            <div className="rounded-btn border border-ot-accent/20 bg-ot-accent/5 p-6">
              <h3 className="mb-2 text-lg font-bold text-ot-text">
                Interested in this role?
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-ot-muted">
                We'd love to hear from you. Reach out to discuss how you might
                contribute to our regulatory intelligence capability.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-btn bg-ot-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ot-accent-hover"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
