import { useParams, Link, Navigate } from "react-router-dom";
import { Clock, ArrowLeft, Share2 } from "lucide-react";
import { getPostBySlug, getRelatedPosts, posts, formatDate } from "@/lib/blog";
import { OtTag } from "@/components/OtTag";
import { PostCard } from "@/components/PostCard";
import { SEOHead, StructuredData } from "@/components/seo";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemas";
import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/github-dark.css";

// Register languages for syntax highlighting
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("json", json);

// Configure marked with syntax highlighting using renderer
const renderer = new marked.Renderer();
const originalCodeRenderer = renderer.code.bind(renderer);
renderer.code = ({ text, lang }: { text: string; lang?: string }) => {
  if (lang && hljs.getLanguage(lang)) {
    const highlighted = hljs.highlight(text, { language: lang }).value;
    return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
  }
  return originalCodeRenderer({ text, lang });
};

marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: false, // Don't treat \n as <br>
  renderer,
});

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post);
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const prev = posts[currentIndex + 1];
  const next = posts[currentIndex - 1];

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;
  const xUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <main>
      <SEOHead
        title={post.title}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        ogType="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.date,
          tags: post.tags,
        }}
      />
      <StructuredData
        schema={[
          generateArticleSchema(post),
          generateBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Blog", item: "/blog" },
            { name: post.title, item: `/blog/${post.slug}` },
          ]),
        ]}
      />

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
                href={xUrl}
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
            dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
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
