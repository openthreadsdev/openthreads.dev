import { writeFileSync, readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter"; // spelling:disable

const SITE_URL = "https://openthreads.dev";

interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
}

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: string;
}

function loadPosts(): Post[] {
  const articlesDir = join(process.cwd(), "src", "articles");
  const files = readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const filepath = join(articlesDir, filename);
      const rawContent = readFileSync(filepath, "utf-8");
      const { data: frontmatter } = matter(rawContent);

      // Extract slug from filename: 2024-11-12-slug.md -> slug
      const slug = filename
        .replace(/^\d{4}-\d{2}-\d{2}-/, "")
        .replace(".md", "");

      return {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        tags: frontmatter.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function getAllTags(posts: Post[]): string[] {
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

function generateSitemap(): string {
  const urls: SitemapUrl[] = [];
  const posts = loadPosts();

  // Static pages
  const staticPages = [
    { path: "/", changefreq: "weekly" as const, priority: "1.0" },
    { path: "/about", changefreq: "monthly" as const, priority: "0.8" },
    { path: "/blog", changefreq: "weekly" as const, priority: "0.9" },
    { path: "/careers", changefreq: "monthly" as const, priority: "0.7" },
    { path: "/contact", changefreq: "monthly" as const, priority: "0.7" },
    { path: "/privacy", changefreq: "yearly" as const, priority: "0.3" },
  ];

  staticPages.forEach(({ path, changefreq, priority }) => {
    urls.push({
      loc: `${SITE_URL}${path}`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq,
      priority,
    });
  });

  // Blog posts
  posts.forEach((post) => {
    urls.push({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: "monthly",
      priority: "0.8",
    });
  });

  // Tag pages
  const tags = getAllTags(posts);
  tags.forEach((tag) => {
    urls.push({
      loc: `${SITE_URL}/tags/${encodeURIComponent(tag)}`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: "0.6",
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return xml;
}

function main() {
  try {
    const posts = loadPosts();
    const sitemap = generateSitemap();
    writeFileSync("public/sitemap.xml", sitemap, "utf-8");
    console.log("✓ Sitemap generated successfully at public/sitemap.xml");
    console.log(
      `  Generated ${posts.length} blog posts + ${getAllTags(posts).length} tag pages + 6 static pages`
    );
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
}

main();
