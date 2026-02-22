import matter from "gray-matter"; // spelling:disable

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: number;
  content: string;
  draft?: boolean;
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
const allPosts: Post[] = Object.entries(articleModules)
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
      draft: frontmatter.draft || false,
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Filter out draft posts in production
export const posts: Post[] = import.meta.env.DEV
  ? allPosts
  : allPosts.filter((post) => !post.draft);

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
