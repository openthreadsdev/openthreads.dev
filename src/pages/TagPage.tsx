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
      <section className="section-pad border-b border-ot-border bg-ot-bg">
        <div className="ot-container">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-ot-muted transition-colors hover:text-ot-accent"
          >
            <ArrowLeft size={14} /> All posts
          </Link>
          <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ot-accent">
            Tag archive
          </span>
          <h1 className="text-4xl font-bold text-ot-text">#{tag}</h1>
          <p className="mt-2 text-ot-muted">
            {tagPosts.length} post{tagPosts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>
      <section className="section-pad bg-ot-bg">
        <div className="ot-container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tagPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
