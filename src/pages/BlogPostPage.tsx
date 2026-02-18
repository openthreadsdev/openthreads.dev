import { useParams, Link, Navigate } from "react-router-dom";
import { Clock, ArrowLeft, Share2 } from "lucide-react";
import { getPostBySlug, getRelatedPosts, posts, formatDate } from "@/lib/blog";
import { OtTag } from "@/components/OtTag";
import { PostCard } from "@/components/PostCard";
import { config } from "@/lib/config";

// Simple markdown-like renderer for the static blog content
function renderContent(content: string): string {
  return content
    .trim()
    .split("\n")
    .map((line) => {
      if (line.startsWith("## "))
        return `<h2 class="text-2xl font-bold text-ot-text mt-10 mb-4">${line.slice(3)}</h2>`;
      if (line.startsWith("### "))
        return `<h3 class="text-lg font-semibold text-ot-text mt-8 mb-3">${line.slice(4)}</h3>`;
      if (line.startsWith("- ")) {
        return `<li class="text-ot-muted leading-relaxed">${line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-ot-text font-semibold">$1</strong>')}</li>`;
      }
      if (line === "") return `</ul><p class="mb-0"></p>`;
      const inlineLine = line
        .replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="text-ot-text font-semibold">$1</strong>'
        )
        .replace(
          /`(.*?)`/g,
          '<code class="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">$1</code>'
        );
      return `<p class="text-ot-muted leading-relaxed mb-4">${inlineLine}</p>`;
    })
    .join("\n")
    .replace(/<\/ul>\n<p class="mb-0"><\/p>\n<li/g, "<li")
    .replace(
      /(<li.*?<\/li>\n?)+/g,
      (match) => `<ul class="list-disc pl-5 space-y-1.5 mb-4">${match}</ul>`
    );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post);
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const prev = posts[currentIndex + 1];
  const next = posts[currentIndex - 1];

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <main>
      {/* Header */}
      <section className="section-pad border-b border-ot-border bg-ot-bg">
        <div className="ot-container max-w-3xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-ot-muted transition-colors hover:text-ot-accent"
          >
            <ArrowLeft size={14} /> All posts
          </Link>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <OtTag key={t} tag={t} />
            ))}
          </div>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-ot-text md:text-4xl">
            {post.title}
          </h1>
          <p className="mb-6 text-lg text-ot-muted">{post.description}</p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 font-mono text-xs text-ot-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readingTime} min read
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="mr-1 flex items-center gap-1 text-xs text-ot-muted">
                <Share2 size={12} />
                Share:
              </span>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ot-border px-2.5 py-1 font-mono text-xs text-ot-muted transition-colors hover:border-ot-accent hover:text-ot-accent"
              >
                X / Twitter
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ot-border px-2.5 py-1 font-mono text-xs text-ot-muted transition-colors hover:border-ot-accent hover:text-ot-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-ot-bg py-12">
        <div className="ot-container max-w-3xl">
          <div
            className="prose-ot"
            dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
          />
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-ot-border bg-ot-surface py-10">
        <div className="ot-container grid max-w-3xl grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/blog/${prev.slug}`}
              className="group rounded-card border border-ot-border p-4 transition-colors hover:border-ot-accent"
            >
              <span className="mb-1 block font-mono text-xs text-ot-muted">
                ← Previous
              </span>
              <span className="text-sm font-medium text-ot-text transition-colors group-hover:text-ot-accent">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/blog/${next.slug}`}
              className="group ml-auto w-full rounded-card border border-ot-border p-4 text-right transition-colors hover:border-ot-accent"
            >
              <span className="mb-1 block font-mono text-xs text-ot-muted">
                Next →
              </span>
              <span className="text-sm font-medium text-ot-text transition-colors group-hover:text-ot-accent">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-pad border-t border-ot-border bg-ot-bg">
          <div className="ot-container">
            <h2 className="mb-6 text-xl font-bold text-ot-text">
              Related posts
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
