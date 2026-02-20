import { Link } from "react-router-dom";
import { Post, formatDate } from "@/lib/blog";
import { OtTag } from "./OtTag";
import { Clock } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="card-hover group rounded-card border border-ot-border bg-ot-surface p-6">
      <div className="mb-4 flex flex-wrap gap-1.5">
        {post.tags.map((t) => (
          <OtTag key={t} tag={t} />
        ))}
      </div>
      <Link to={`/blog/${post.slug}`}>
        <h2 className="mb-2 text-lg font-bold leading-snug text-ot-text transition-colors group-hover:text-ot-accent">
          {post.title}
        </h2>
      </Link>
      <p className="mb-4 text-sm leading-relaxed text-ot-muted">
        {post.description}
      </p>
      <div className="flex items-center gap-4 font-mono text-xs text-ot-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {post.readingTime} min read
        </span>
      </div>
    </article>
  );
}
