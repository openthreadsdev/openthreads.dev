import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Layers,
  GitBranch,
  FileDown,
  Users,
  BarChart3,
} from "lucide-react";
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
  {
    label: "Less spreadsheet chaos",
    detail:
      "Structured data in one place instead of scattered files and inboxes.",
  },
  {
    label: "Faster audit responses",
    detail: "Export a complete compliance pack in minutes, not days.",
  },
  {
    label: "Clear ownership + completeness",
    detail: "Every field has an owner. Every gap is visible.",
  },
];

const recentPosts = posts.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="grid-bg section-pad relative overflow-hidden bg-ot-bg">
        <div className="ot-container relative">
          <div className="max-w-2xl">
            <span className="mb-4 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
              OpenThreads
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-ot-text md:text-6xl">
              Compliance-first product data infrastructure.
            </h1>
            <p className="mb-10 max-w-xl text-xl leading-relaxed text-ot-muted">
              We build structured systems that make product compliance
              auditable, exportable, and operational.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={config.threadmarkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-btn bg-ot-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ot-accent-hover"
              >
                Explore Threadmark
                <ArrowRight size={16} />
              </a>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ot-accent transition-colors hover:text-ot-accent-hover"
              >
                Read the blog →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-pad border-t border-ot-border bg-ot-bg">
        <div className="ot-container">
          <div className="mb-12">
            <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
              What we do
            </span>
            <h2 className="text-3xl font-bold text-ot-text">
              Built around compliance outputs
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whatWeDo.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card-hover rounded-card border border-ot-border bg-ot-surface p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-ot-accent/10">
                  <Icon size={20} className="text-ot-accent" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-ot-text">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-ot-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for + Why it matters */}
      <section className="tint-bg section-pad border-t border-ot-border">
        <div className="ot-container grid gap-12 md:grid-cols-2">
          <div>
            <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
              Who it's for
            </span>
            <h2 className="mb-6 text-2xl font-bold text-ot-text">
              Teams managing regulated products
            </h2>
            <ul className="space-y-4">
              {whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-ot-accent"
                  />
                  <span className="text-sm leading-relaxed text-ot-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
              Why it matters
            </span>
            <h2 className="mb-6 text-2xl font-bold text-ot-text">
              Practical, measurable outcomes
            </h2>
            <div className="space-y-4">
              {whyItMatters.map(({ label, detail }) => (
                <div key={label} className="border-l-2 border-ot-accent pl-4">
                  <p className="mb-0.5 text-sm font-semibold text-ot-text">
                    {label}
                  </p>
                  <p className="text-sm text-ot-muted">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product: Threadmark */}
      <section className="section-pad border-t border-ot-border bg-ot-bg">
        <div className="ot-container">
          <div className="mb-10">
            <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
              Our product
            </span>
            <h2 className="text-3xl font-bold text-ot-text">
              Now building: Threadmark
            </h2>
          </div>
          <div className="max-w-2xl rounded-card border border-ot-border bg-ot-surface p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-ot-accent">
                <BarChart3 size={16} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-ot-text">Threadmark</h3>
              <span className="rounded-full bg-ot-accent/10 px-2 py-0.5 font-mono text-xs text-ot-accent">
                In development
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-ot-muted">
              Compliance data management for product-based businesses.
              Structured records, change history, and exportable compliance
              packs—without the enterprise price tag or the in-house compliance
              team.
            </p>
            <ul className="mb-6 space-y-2">
              {[
                "Typed product record schemas with field-level validation",
                "Immutable change history for every compliance field",
                "One-click export: PDF or JSON compliance packs",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-sm text-ot-muted"
                >
                  <CheckCircle size={14} className="shrink-0 text-ot-accent" />
                  {b}
                </li>
              ))}
            </ul>
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

      {/* Latest posts */}
      <section className="section-pad border-t border-ot-border bg-ot-bg">
        <div className="ot-container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
                From the blog
              </span>
              <h2 className="text-3xl font-bold text-ot-text">
                Latest thinking
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden text-sm font-medium text-ot-accent transition-colors hover:text-ot-accent-hover md:block"
            >
              All posts →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-6 md:hidden">
            <Link to="/blog" className="text-sm font-medium text-ot-accent">
              All posts →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
