import { Link } from "react-router-dom";

interface OtTagProps {
  tag: string;
  linked?: boolean;
}

export function OtTag({ tag, linked = true }: OtTagProps) {
  const cls =
    "inline-block font-mono text-xs px-2.5 py-0.5 rounded-full border border-ot-border bg-ot-surface text-ot-muted hover:border-ot-accent hover:text-ot-accent transition-colors";

  if (linked) {
    return (
      <Link to={`/tags/${tag}`} className={cls}>
        #{tag}
      </Link>
    );
  }
  return <span className={cls}>#{tag}</span>;
}
