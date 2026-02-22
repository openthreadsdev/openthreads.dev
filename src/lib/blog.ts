import matter from "gray-matter"; // spelling:disable

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: number;
  content: string;
}

// Load all markdown files from src/articles/
const articleModules = import.meta.glob("/src/articles/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function extractSlugFromFilename(filepath: string): string {
  // Extract filename from path: /src/articles/2024-11-12-why-compliance-fails.md
  // -> why-compliance-fails
  const filename = filepath.split("/").pop() || "";
  const withoutExtension = filename.replace(".md", "");
  const slug = withoutExtension.replace(/^\d{4}-\d{2}-\d{2}-/, "");
  return slug;
}

// Parse markdown files into Post objects
export const posts: Post[] = Object.entries(articleModules)
  .map(([filepath, rawContent]) => {
    const { data: frontmatter, content: markdown } = matter(
      rawContent as string
    );
    const slug = extractSlugFromFilename(filepath);

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      tags: frontmatter.tags || [],
      readingTime: frontmatter.readingTime,
      content: markdown.trim(),
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Keep old hardcoded posts temporarily for comparison
const oldPosts: Post[] = [
  {
    slug: "why-compliance-fails-in-spreadsheets",
    title: "Why Compliance Work Fails in Spreadsheets",
    description:
      "Spreadsheets feel like the path of least resistance—until an audit lands. Here's why they systematically break down for product compliance.",
    date: "2024-11-12",
    tags: ["compliance", "operations", "data"],
    readingTime: 6,
    content: `
## The Default Tool Isn't the Right Tool

Every product team reaches for spreadsheets when compliance comes up. It makes sense: they're flexible, immediate, and everyone knows them. But "everyone knows them" is exactly the problem.

When compliance data lives in a shared spreadsheet, it accumulates three failure modes that compound over time: version drift, ownership blur, and format inconsistency.

## Version Drift

A product record in a spreadsheet has no immutable history. When someone changes a material composition, a safety rating, or a regulatory standard reference—last month's state is simply gone. You might have a backup. You might not. Either way, reconstructing what your record said on a specific date becomes archaeology.

For audit purposes, that's a serious problem. Regulators don't ask what you think you have—they ask what you can prove you had, and when.

## Ownership Blur

Spreadsheets don't have field-level ownership. There's no way to say "the toxicology field is owned by the lab team, not sales." In practice, whoever has edit access can change anything. This creates silent corruption: data that looks authoritative but was updated by someone who didn't know what they were changing.

When you scale past a handful of products, this stops being a process smell and becomes a real compliance risk.

## Format Inconsistency

Ask five people to enter a substance percentage. You'll get: "12%", "12", "0.12", "approx. 12", and "see attached PDF." None of these are wrong in isolation, but they're incompatible. Any downstream tool—export pipeline, certification system, supplier portal—has to make assumptions about what you meant.

Assumptions are where compliance breaks.

## What "Structured" Actually Means

Structured compliance data means: defined fields, validated inputs, typed values, change history, and clear ownership. It's not about the tool—it's about the model.

A spreadsheet can technically hold structured data, but nothing enforces it. Every form interaction, every paste from another tab, every helpful colleague who "just formatted this one column"—they all erode the structure.

## The Upgrade Path

You don't need to replace spreadsheets overnight. Most teams start by identifying the 5–10 fields that actually matter for compliance outputs, formalising those first, and building export pipelines around a consistent schema.

That's the core of what we're building at OpenThreads: tools that make structured compliance data practical for teams that aren't compliance specialists.

## Conclusion

Spreadsheets aren't evil. They're the wrong tool for an accountability problem. Compliance work is fundamentally about traceability—knowing what was true, when, and who said so. That requires structure, not just storage.
    `,
  },
  {
    slug: "compliance-first-product-data-explained",
    title: "Compliance-First Product Data: What It Is (and What It Isn't)",
    description:
      "The phrase gets used loosely. Let's be precise about what compliance-first product data actually means—and why the distinction matters.",
    date: "2024-11-20",
    tags: ["compliance", "product-data", "definitions"],
    readingTime: 7,
    content: `
## A Phrase Worth Unpacking

"Compliance-first" is becoming a buzzword, which means it's starting to lose precision. Teams use it to describe everything from "we use a checklist" to "we have a dedicated legal function." Neither of those is what we mean.

Compliance-first product data has a specific technical meaning: the data model is designed around the requirements of compliance outputs, not retrofitted to meet them after the fact.

## The Retrofit Problem

Most product data starts as commercial data. You have SKUs, descriptions, pricing, inventory levels. At some point, a regulation comes along—EU GPSR, REACH, upcoming ESPR—and someone asks: "Can we pull a compliance report from this?"

Usually, the answer is "sort of, with a lot of manual work." The data exists, but it's not in the shape compliance requires. Missing fields, wrong granularity, no change history, no provenance.

Retrofitting is expensive and brittle. You're essentially building a shadow system alongside your commercial one, and they drift apart.

## What Compliance Outputs Actually Need

To understand compliance-first design, start from the outputs: What does a regulator, auditor, or certification body actually ask for?

In most regulated product categories, they ask for:

- **Substance composition** at a defined level of specificity (percentage, CAS number, source)
- **Safety and test records** with dates, standards, and test body references
- **Chain of custody**: who made it, who tested it, who approved it
- **Change history**: if you updated the formulation, what changed and when
- **Declaration of conformity**: a structured, exportable statement of compliance

Each of these maps to a data requirement. Compliance-first means those fields are first-class citizens in your data model from the beginning.

## What It Isn't

Compliance-first is not:

- **A legal function.** We build data infrastructure, not legal strategy. What you're compliant with is your team's call.
- **A checkbox system.** Ticking "compliant: yes" is not the same as having the data to back it up.
- **A one-time project.** Product data changes. Regulations change. A compliance-first system tracks both.

## The Practical Implication

If you design your product records around compliance outputs, you get commercial benefits for free. Rich structured data is better for everything: supplier communication, customer transparency, product discovery, sustainability reporting.

The reverse isn't true. Designing for commercial data first and adding compliance later is always more expensive than starting right.

## Conclusion

Compliance-first means starting with the question "what do I need to be able to prove?" and working backward to data design. It's a discipline, not a tool. The tools should enforce the discipline—that's what we're building.
    `,
  },
  {
    slug: "audit-ready-product-records",
    title: "A Practical Approach to Audit-Ready Product Records",
    description:
      "What does an audit-ready product record actually look like? Walk through the field-by-field requirements that matter.",
    date: "2024-12-03",
    tags: ["compliance", "audit", "product-records"],
    readingTime: 8,
    content: `
## Audit-Ready Is Not a State—It's a System Property

Teams often treat "audit-ready" as something you achieve right before an audit. You scramble, gather documents, consolidate spreadsheets, and hope it holds together. This is the wrong model.

Audit-ready is a system property: either your records are continuously maintained in a form that can withstand scrutiny, or they aren't. Audits don't create compliance gaps—they reveal them.

## The Minimum Viable Audit Record

For most regulated physical products (consumer goods, textiles, food-adjacent, industrial), an audit-ready record needs:

### 1. Product Identity
- SKU / internal ID
- Product name (all commercial variants)
- Product category (ideally HS code or equivalent)
- Primary market(s) of sale

### 2. Composition Data
- Material/substance breakdown with percentages
- CAS numbers for regulated substances
- Country of origin for key components
- Supplier reference (name + ID, not just a contact email)

### 3. Test and Certification Records
- Test standard(s) applied (e.g., EN 71, ISO 9001)
- Test date and expiry
- Test body name and accreditation number
- Document reference (link or file hash)

### 4. Regulatory Status
- Applicable regulations (REACH, RoHS, GPSR, etc.)
- Compliance status per regulation
- Declaration of Conformity reference and date
- Responsible Person (EU) or importer of record (US) details

### 5. Change History
- Every field change should be logged with: who changed it, when, old value, new value
- Major revisions (new formulation, new supplier) should trigger a re-certification flag

## Why Change History Is the Hardest Part

Most teams can get identity and composition data into shape. Change history is where systems break. It requires either a database with native audit logging or an explicit workflow process—and most spreadsheet-based systems have neither.

Without change history, you cannot answer the question: "What did your product record say on March 15th?" That question comes up in audits, in disputes with suppliers, and in regulatory enforcement. If you can't answer it, you're in a weak position.

## A Practical Rollout Sequence

Don't try to implement everything at once. A reasonable sequence:

1. **Standardise product identity** (SKUs, categories, markets)
2. **Formalise composition data** (pick a schema, enforce it for all new products)
3. **Centralise test records** (even if just linked documents initially)
4. **Add regulatory status tracking** (per regulation, per product)
5. **Enable change logging** (this is where tooling really helps)

## Conclusion

Audit-ready product records aren't a documentation project—they're a data architecture decision. Get the schema right first. The documentation follows naturally from structured, versioned data.
    `,
  },
  {
    slug: "digital-product-passports-for-small-merchants",
    title:
      "Digital Product Passports: What Small Merchants Actually Need First",
    description:
      "DPPs are coming. But most DPP coverage focuses on enterprise readiness. Here's what actually matters for smaller EU-facing merchants.",
    date: "2024-12-18",
    tags: ["dpp", "EU-regulation", "small-business"],
    readingTime: 7,
    content: `
## The DPP Conversation Is Skewed

Most coverage of Digital Product Passports (DPPs) focuses on large manufacturers, tier-1 suppliers, and enterprise software vendors positioning for the opportunity. That's understandable—big contracts make news.

But a large slice of the businesses that will be legally required to produce DPPs are small and mid-market: independent brands, artisanal producers, niche retailers importing from outside the EU. They're not well-served by enterprise-focused implementation advice.

## What the ESPR Actually Requires (and When)

The European Ecodesign for Sustainable Products Regulation (ESPR) mandates DPPs for product categories in waves, starting with textiles, electronics, and construction products. Exact timing per category is still being finalised via delegated acts, but the framework is law.

A DPP, at minimum, must contain:
- Product identity and description
- Sustainability and environmental data (materials, recyclability, repairability)
- Supply chain information
- Compliance declarations
- A unique identifier (scannable, QR or similar)

For small merchants, the question isn't "how do we build a DPP platform?"—it's "what data do we actually need to collect, and how do we get it from suppliers?"

## The Real Bottleneck: Upstream Data

The hardest part of DPP compliance for small merchants is not the technology. It's getting structured data from suppliers who don't use structured data systems.

Your supplier knows what their product is made of. They might have a test certificate. They almost certainly don't have an API. Getting that information in a form you can use—and keep updated—is the actual work.

This means small merchants need:

1. **A clear template** for what to ask suppliers (specific fields, not "send me your compliance docs")
2. **A way to receive and validate that data** (not just email attachments)
3. **Storage that can be queried** when the DPP needs to be generated

## What to Focus on First

If you're a small EU-facing merchant preparing for DPPs:

**Do now:**
- Audit your current product data. What do you actually have vs. what DPPs require?
- Identify your top 20 products (by revenue or regulatory risk) and treat them as the pilot
- Ask your suppliers for material declarations in writing—even informal ones buy you time

**Don't do yet:**
- Don't build a custom DPP platform. The format standards are still evolving.
- Don't assume your ecommerce platform will handle this for you. They won't.

## Where Threadmark Fits

Threadmark is built specifically for this gap: small and mid-market product businesses that need structured compliance data management without an enterprise budget or an in-house compliance team.

It focuses on the data layer—collecting, structuring, and maintaining product compliance records—so that when DPP generation tools mature, your data is ready to plug in.

## Conclusion

DPPs are real and coming. The smart move for small merchants is to start on the data now, not the output format. Get your records structured and supplier data flowing. The generation layer will follow.
    `,
  },
  {
    slug: "traceability-without-blockchain",
    title:
      "Traceability Without Blockchain: Immutable Logs, Change History, and Trust",
    description:
      "Blockchain gets proposed for every traceability problem. There's a simpler, more practical answer—and it works better for most product compliance use cases.",
    date: "2025-01-08",
    tags: ["traceability", "data-architecture", "compliance"],
    readingTime: 6,
    content: `
## The Blockchain Reflex

Whenever someone mentions "product traceability" in a compliance or sustainability context, blockchain comes up within five minutes. It's been marketed hard as the solution to supply chain trust. And it does solve a specific problem—establishing consensus across untrusted parties without a central authority.

But most product compliance traceability problems don't require that. They require something simpler: a record that can't be quietly edited, with a clear chain of who did what and when.

## What Traceability Actually Requires

Product traceability for compliance purposes needs to answer:

- What was the state of this record at a given point in time?
- Who made changes, and when?
- Is this record the authoritative version?

These are database problems, not distributed consensus problems. A well-designed append-only log with cryptographic signatures solves them without any blockchain infrastructure.

## Append-Only Logs in Practice

The core technique is simple: instead of updating records in place, write new records. Every change to a product compliance record creates a new entry: old value, new value, timestamp, user ID, reason (optional).

This gives you:

- **Full history**: every state the record has ever been in
- **Accountability**: who made each change
- **Non-repudiation**: you can't quietly edit history without a trace
- **Point-in-time queries**: "what did this record say on January 1st?"

Postgres has native support for this pattern. SQLite does too. You don't need a distributed ledger.

## Where Cryptographic Signatures Add Value

If you need to prove a record to an external party—a regulator, an auditor, a customer—a cryptographic signature on the record state adds genuine value. You hash the record content, sign it with a private key, and publish the signature.

Anyone can verify: the record content matches the signature, and the signature was created by a known key at a specific time. This is the trust model regulators actually care about.

Blockchain does this with global consensus. A signed, timestamped hash does it with a single trusted authority—which, for most compliance contexts, is what you want anyway.

## The Practical Implementation

For a product compliance system, the traceability stack looks like:

1. **Core data store**: relational database with append-only change tables
2. **Change log**: every write triggers a log entry (timestamp, user, old/new value)
3. **Signatures**: generate a signed hash of the record at key milestones (initial certification, renewal, regulatory submission)
4. **Export**: when a regulator asks, produce a structured document with the record + signature + log of all changes since last signature

This is implementable by a small engineering team in days. A blockchain integration is months.

## Conclusion

Traceability is about accountability and verifiability, not decentralisation. For product compliance, an append-only log with cryptographic signatures gives you everything you need. Start there.
    `,
  },
  {
    slug: "how-we-think-about-building-threadmark",
    title: "How We Think About Building Threadmark: MVP Scope and Boundaries",
    description:
      "What's in, what's out, and why. A transparent look at how we're scoping Threadmark's first version.",
    date: "2025-01-22",
    tags: ["threadmark", "product", "mvp"],
    readingTime: 7,
    content: `
## Why Scope Decisions Matter More Than Feature Lists

Every product team has a feature list. The hard work is deciding what stays off it—and being honest about why.

Threadmark is a compliance data management tool for product-based businesses. The problem space is genuinely large: it touches data modelling, document management, supplier communication, regulatory frameworks across jurisdictions, and integration with ecommerce and ERP systems.

We can't build all of that in version one. Here's how we think about what we're doing first.

## The Core Hypothesis

The fundamental problem we're solving: small and mid-market product businesses can't produce structured, auditable compliance records when asked.

Not because the data doesn't exist—usually it does, scattered across emails, supplier PDFs, and spreadsheets. But it's not in a queryable, exportable, versioned form. When an audit comes, or a large retail partner requests documentation, or a regulatory deadline approaches, the manual work is enormous.

Threadmark's MVP tests one hypothesis: if you give teams a simple, structured way to maintain product compliance records, they'll use it and it'll be worth paying for.

## What's In (v1)

The v1 scope is deliberately narrow:

**Product records**: A structured data model for product compliance information—identity, composition, certifications, regulatory status. Fields are typed and validated. Not a freeform document editor.

**Change history**: Every field change is logged. You can see what the record looked like at any point in time. This is non-negotiable.

**Export**: Generate a clean, structured PDF or JSON export of any record. This is the "moment of truth" for compliance data—it has to be useful to an auditor or partner who doesn't use Threadmark.

**Basic collaboration**: Multiple team members can view and edit records with role-based access. One owner per record, others as editors.

## What's Out (v1)

Explicitly not in v1:

**Supplier portal**: We want suppliers to be able to submit data directly. Not yet—the overhead of building a good supplier UX is high, and we'd rather validate the core data model first.

**Regulation-specific validation**: We don't build "is this product REACH compliant?" checking. We provide the data structure; your team (or your legal advisor) makes the compliance determination.

**ERP/ecommerce integrations**: These come after we know what data model is stable. Integrating too early locks in decisions you haven't validated.

**DPP generation**: We'll add structured export formats aligned to emerging DPP standards once they're sufficiently final to build to.

## The Boundaries We Hold Hard

Two things we won't compromise on:

**We are not a legal service.** Threadmark doesn't tell you whether you're compliant. It helps you maintain the records that let you (and your advisors) make that determination. This isn't a cop-out—it's an honest assessment of what software can and can't do in a regulated domain.

**We don't try to automate compliance decisions.** Regulation is ambiguous, jurisdiction-specific, and changing. Systems that claim to automate compliance decisions are selling certainty they can't deliver. We sell good data infrastructure.

## How We'll Know v1 Works

Success in v1 looks like: teams using Threadmark as their primary place for compliance record management, and successfully producing documentation when audits or partner requests arrive—without a multi-day manual scramble.

If that's true, we'll have validated the hypothesis and can expand scope sensibly.

## Conclusion

Building a focused v1 is harder than it looks. The temptation to add features is constant. We're holding the line by staying close to the core problem: structured, auditable product compliance records. Everything else is later.
    `,
  },
];

export function getAllTags(): string[] {
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((p) => p.tags.includes(tag));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
