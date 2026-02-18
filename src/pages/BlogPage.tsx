import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { posts, getAllTags } from "@/lib/blog";
import { PostCard } from "@/components/PostCard";
import { OtTag } from "@/components/OtTag";

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
      {/* Header */}
      <section className="bg-ot-bg section-pad border-b border-ot-border">
        <div className="ot-container">
          <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">
            Blog
          </span>
          <h1 className="text-4xl font-bold text-ot-text mb-4">
            Thinking on compliance infrastructure
          </h1>
          <p className="text-ot-muted max-w-lg">
            Research, perspectives, and practical guides on product compliance data from the OpenThreads studio.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-ot-surface border-b border-ot-border py-4 sticky top-16 z-30">
        <div className="ot-container flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ot-muted" />
            <input
              type="search"
              placeholder="Search posts…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-ot-border rounded-btn bg-ot-bg text-ot-text placeholder:text-ot-muted focus:outline-none focus:ring-2 focus:ring-ot-accent/30 focus:border-ot-accent transition-colors"
            />
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`font-mono text-xs px-3 py-1 rounded-full border transition-colors ${
                !activeTag
                  ? "bg-ot-accent text-white border-ot-accent"
                  : "border-ot-border text-ot-muted hover:border-ot-accent hover:text-ot-accent"
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`font-mono text-xs px-3 py-1 rounded-full border transition-colors ${
                  activeTag === tag
                    ? "bg-ot-accent text-white border-ot-accent"
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
      <section className="bg-ot-bg section-pad">
        <div className="ot-container">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-ot-muted">No posts match your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
