import { Link } from "react-router-dom";
import { Post, formatDate } from "@/lib/blog";
import { OtTag } from "./OtTag";
import { Clock } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-ot-surface border border-ot-border rounded-card p-6 card-hover group">
      <div className="flex flex-wrap gap-1.5 mb-4">
        {post.tags.map((t) => (
          <OtTag key={t} tag={t} />
        ))}
      </div>
      <Link to={`/blog/${post.slug}`}>
        <h2 className="text-lg font-bold text-ot-text group-hover:text-ot-accent transition-colors mb-2 leading-snug">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm text-ot-muted leading-relaxed mb-4">
        {post.description}
      </p>
      <div className="flex items-center gap-4 text-xs text-ot-muted font-mono">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {post.readingTime} min read
        </span>
      </div>
    </article>
  );
}
