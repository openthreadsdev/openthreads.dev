import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { posts, getAllTags } from "@/lib/blog";
import { PostCard } from "@/components/PostCard";
import { SEOHead, StructuredData } from "@/components/seo";
import {
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
} from "@/lib/schemas";

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = getAllTags();

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesQuery;
    });
  }, [query, activeTag]);

  return (
    <main>
      <SEOHead
        title="Blog"
        description="Research, perspectives, and practical guides on product compliance data from the OpenThreads studio."
        canonicalPath="/blog"
        ogType="website"
      />
      <StructuredData
        schema={[
          generateBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Blog", item: "/blog" },
          ]),
          generateCollectionPageSchema(
            "OpenThreads Blog",
            "Research and insights on product compliance infrastructure",
            posts
          ),
        ]}
      />

      {/* Header */}
      <section className="section-pad border-b border-ot-border bg-ot-bg">
        <div className="ot-container">
          <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
            Blog
          </span>
          <h1 className="mb-4 text-4xl font-bold text-ot-text">
            Thinking on compliance infrastructure
          </h1>
          <p className="max-w-lg text-ot-muted">
            Research, perspectives, and practical guides on product compliance
            data from the OpenThreads studio.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 border-b border-ot-border bg-ot-surface py-4">
        <div className="ot-container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-ot-muted"
            />
            <input
              type="search"
              placeholder="Search posts…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-btn border border-ot-border bg-ot-bg py-2 pl-9 pr-4 text-sm text-ot-text transition-colors placeholder:text-ot-muted focus:border-ot-accent focus:outline-none focus:ring-2 focus:ring-ot-accent/30"
            />
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                !activeTag
                  ? "border-ot-accent bg-ot-accent text-white"
                  : "border-ot-border text-ot-muted hover:border-ot-accent hover:text-ot-accent"
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                  activeTag === tag
                    ? "border-ot-accent bg-ot-accent text-white"
                    : "border-ot-border text-ot-muted hover:border-ot-accent hover:text-ot-accent"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-pad bg-ot-bg">
        <div className="ot-container">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-ot-muted">No posts match your search.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
