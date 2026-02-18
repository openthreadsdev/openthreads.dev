import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Layers, GitBranch, FileDown, Users, BarChart3 } from "lucide-react";
import { config } from "@/lib/config";
import { posts, formatDate } from "@/lib/blog";
import { PostCard } from "@/components/PostCard";
import { OtTag } from "@/components/OtTag";

const whatWeDo = [
  {
    icon: Layers,
    title: "Structured compliance data models",
    desc: "We design typed, validated, versioned data schemas so product compliance records are consistent, queryable, and auditable.",
  },
  {
    icon: GitBranch,
    title: "Traceability + change history",
    desc: "Every change to a product record is logged. Know what changed, when, and by whom. Point-in-time record reconstruction included.",
  },
  {
    icon: FileDown,
    title: "Exportable compliance packs",
    desc: "Generate clean JSON or PDF compliance exports for auditors, retail partners, or regulatory filings—no manual assembly required.",
  },
];

const whoItsFor = [
  "Small EU-facing merchants navigating GPSR, REACH, and upcoming ESPR requirements",
  "Mid-market brands and ops teams managing multi-SKU compliance at scale",
  "Regulated product operators who need auditable records across changing supplier networks",
];

const whyItMatters = [
  { label: "Less spreadsheet chaos", detail: "Structured data in one place instead of scattered files and inboxes." },
  { label: "Faster audit responses", detail: "Export a complete compliance pack in minutes, not days." },
  { label: "Clear ownership + completeness", detail: "Every field has an owner. Every gap is visible." },
];

const recentPosts = posts.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="grid-bg bg-ot-bg section-pad relative overflow-hidden">
        <div className="ot-container relative">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-4 block">
              OpenThreads
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-ot-text leading-tight mb-6">
              Compliance-first product data infrastructure.
            </h1>
            <p className="text-xl text-ot-muted leading-relaxed mb-10 max-w-xl">
              We build structured systems that make product compliance auditable, exportable, and operational.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={config.threadmarkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ot-accent hover:bg-ot-accent-hover text-white font-semibold px-6 py-3 rounded-btn transition-colors text-sm"
              >
                Explore Threadmark
                <ArrowRight size={16} />
              </a>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ot-accent hover:text-ot-accent-hover transition-colors"
              >
                Read the blog →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-ot-bg section-pad border-t border-ot-border">
        <div className="ot-container">
          <div className="mb-12">
            <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
              What we do
            </span>
            <h2 className="text-3xl font-bold text-ot-text">Built around compliance outputs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatWeDo.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-ot-surface border border-ot-border rounded-card p-6 card-hover">
                <div className="w-10 h-10 rounded-lg bg-ot-accent/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-ot-accent" />
                </div>
                <h3 className="font-semibold text-ot-text mb-2 text-base">{title}</h3>
                <p className="text-sm text-ot-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for + Why it matters */}
      <section className="tint-bg section-pad border-t border-ot-border">
        <div className="ot-container grid md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
              Who it's for
            </span>
            <h2 className="text-2xl font-bold text-ot-text mb-6">Teams managing regulated products</h2>
            <ul className="space-y-4">
              {whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-ot-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-ot-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
              Why it matters
            </span>
            <h2 className="text-2xl font-bold text-ot-text mb-6">Practical, measurable outcomes</h2>
            <div className="space-y-4">
              {whyItMatters.map(({ label, detail }) => (
                <div key={label} className="border-l-2 border-ot-accent pl-4">
                  <p className="font-semibold text-sm text-ot-text mb-0.5">{label}</p>
                  <p className="text-sm text-ot-muted">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product: Threadmark */}
      <section className="bg-ot-bg section-pad border-t border-ot-border">
        <div className="ot-container">
          <div className="mb-10">
            <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
              Our product
            </span>
            <h2 className="text-3xl font-bold text-ot-text">Now building: Threadmark</h2>
          </div>
          <div className="bg-ot-surface border border-ot-border rounded-card p-8 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-md bg-ot-accent flex items-center justify-center">
                <BarChart3 size={16} className="text-white" />
              </div>
              <h3 className="font-bold text-ot-text text-lg">Threadmark</h3>
              <span className="font-mono text-xs bg-ot-accent/10 text-ot-accent px-2 py-0.5 rounded-full">In development</span>
            </div>
            <p className="text-sm text-ot-muted leading-relaxed mb-4">
              Compliance data management for product-based businesses. Structured records, change history, and exportable compliance packs—without the enterprise price tag or the in-house compliance team.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Typed product record schemas with field-level validation",
                "Immutable change history for every compliance field",
                "One-click export: PDF or JSON compliance packs",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-ot-muted">
                  <CheckCircle size={14} className="text-ot-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
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

      {/* Latest posts */}
      <section className="bg-ot-bg section-pad border-t border-ot-border">
        <div className="ot-container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
                From the blog
              </span>
              <h2 className="text-3xl font-bold text-ot-text">Latest thinking</h2>
            </div>
            <Link to="/blog" className="text-sm text-ot-accent hover:text-ot-accent-hover font-medium transition-colors hidden md:block">
              All posts →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-6 md:hidden">
            <Link to="/blog" className="text-sm text-ot-accent font-medium">All posts →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
