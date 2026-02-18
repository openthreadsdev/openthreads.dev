import { writeFileSync } from "fs";
import { posts, getAllTags } from "../src/lib/blog.js";

const SITE_URL = "https://openthreads.dev";

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

function generateSitemap(): string {
  const urls: SitemapUrl[] = [];

  // Static pages
  const staticPages = [
    { path: "/", changefreq: "weekly" as const, priority: "1.0" },
    { path: "/about", changefreq: "monthly" as const, priority: "0.8" },
    { path: "/blog", changefreq: "weekly" as const, priority: "0.9" },
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
  const tags = getAllTags();
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
    const sitemap = generateSitemap();
    writeFileSync("public/sitemap.xml", sitemap, "utf-8");
    console.log("✓ Sitemap generated successfully at public/sitemap.xml");
    console.log(
      `  Generated ${posts.length} blog posts + ${getAllTags().length} tag pages + 5 static pages`
    );
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
}

main();
