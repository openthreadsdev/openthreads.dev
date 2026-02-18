import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getPostsByTag, getAllTags } from "@/lib/blog";
import { PostCard } from "@/components/PostCard";

export default function TagPage() {
  const { tag } = useParams<{ tag: string }>();
  const allTags = getAllTags();

  if (!tag || !allTags.includes(tag)) return <Navigate to="/blog" replace />;

  const tagPosts = getPostsByTag(tag);

  return (
    <main>
      <section className="bg-ot-bg section-pad border-b border-ot-border">
        <div className="ot-container">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-ot-muted hover:text-ot-accent transition-colors mb-8">
            <ArrowLeft size={14} /> All posts
          </Link>
          <span className="font-mono text-xs text-ot-accent font-medium tracking-wider uppercase mb-3 block">Tag archive</span>
          <h1 className="text-4xl font-bold text-ot-text">#{tag}</h1>
          <p className="text-ot-muted mt-2">{tagPosts.length} post{tagPosts.length !== 1 ? "s" : ""}</p>
        </div>
      </section>
      <section className="bg-ot-bg section-pad">
        <div className="ot-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tagPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
