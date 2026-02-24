import {
  writeFileSync,
  readFileSync,
  readdirSync,
  mkdirSync,
  existsSync,
} from "fs";
import { join } from "path";
import matter from "gray-matter"; // spelling:disable

const SITE_URL = "https://www.openthreads.dev";
const DIST_DIR = join(process.cwd(), "dist");
const BASE_HTML_PATH = join(DIST_DIR, "index.html");

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

interface PageMeta {
  title: string;
  description: string;
  url: string;
  type: string;
  image?: string;
}

function loadPosts(): Post[] {
  const articlesDir = join(process.cwd(), "src", "articles");
  const files = readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const filepath = join(articlesDir, filename);
    const rawContent = readFileSync(filepath, "utf-8");
    const { data: frontmatter } = matter(rawContent);

    // Extract slug from filename: 2024-11-12-slug.md -> slug
    const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(".md", "");

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description || "",
      date: frontmatter.date,
      tags: frontmatter.tags || [],
    };
  });
}

function getAllTags(posts: Post[]): string[] {
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

function generateHtmlWithMeta(baseHtml: string, meta: PageMeta): string {
  let html = baseHtml;

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${escapeHtml(meta.title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?".*?\/>/,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?".*?\/>/,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
  );

  html = html.replace(
    /<meta property="og:description" content=".*?".*?\/>/,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
  );

  html = html.replace(
    /<meta property="og:type" content=".*?".*?\/>/,
    `<meta property="og:type" content="${meta.type}" />`
  );

  html = html.replace(
    /<meta property="og:image" content=".*?".*?\/>/,
    `<meta property="og:image" content="${meta.image || `${SITE_URL}/assets/og-image.png`}" />`
  );

  // Add canonical URL
  const canonicalRegex = /<link rel="canonical".*?\/>/;
  const canonicalTag = `<link rel="canonical" href="${meta.url}" />`;

  if (canonicalRegex.test(html)) {
    html = html.replace(canonicalRegex, canonicalTag);
  } else {
    // Insert after the last meta tag
    html = html.replace(
      /(<meta name="twitter:image".*?\/>)/,
      `$1\n    ${canonicalTag}`
    );
  }

  return html;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function writeRouteHtml(path: string, html: string): void {
  const routePath = join(DIST_DIR, path);

  // Create directory structure if needed
  if (path !== "") {
    mkdirSync(routePath, { recursive: true });
  }

  const htmlPath = join(routePath, "index.html");
  writeFileSync(htmlPath, html, "utf-8");
}

function main() {
  if (!existsSync(BASE_HTML_PATH)) {
    console.error(
      "Error: dist/index.html not found. Run 'npm run build' first."
    );
    process.exit(1);
  }

  const baseHtml = readFileSync(BASE_HTML_PATH, "utf-8");
  const posts = loadPosts();
  const tags = getAllTags(posts);

  let generatedCount = 0;

  // Static pages with custom meta
  const staticPages: Array<{ path: string; meta: PageMeta }> = [
    {
      path: "about",
      meta: {
        title: "About OpenThreads - Compliance-First Product Data",
        description:
          "Learn how OpenThreads helps businesses build structured, auditable product compliance systems that reduce risk and enable growth.",
        url: `${SITE_URL}/about`,
        type: "website",
      },
    },
    {
      path: "blog",
      meta: {
        title: "Blog - OpenThreads",
        description:
          "Insights on product compliance, data infrastructure, and regulatory technology for modern businesses.",
        url: `${SITE_URL}/blog`,
        type: "website",
      },
    },
    {
      path: "careers",
      meta: {
        title: "Careers - Join OpenThreads",
        description:
          "Join our team building compliance-first product data infrastructure for global commerce.",
        url: `${SITE_URL}/careers`,
        type: "website",
      },
    },
    {
      path: "contact",
      meta: {
        title: "Contact OpenThreads",
        description:
          "Get in touch to learn how OpenThreads can help your business build better product compliance systems.",
        url: `${SITE_URL}/contact`,
        type: "website",
      },
    },
    {
      path: "privacy",
      meta: {
        title: "Privacy Policy - OpenThreads",
        description:
          "OpenThreads privacy policy and data protection practices.",
        url: `${SITE_URL}/privacy`,
        type: "website",
      },
    },
  ];

  staticPages.forEach(({ path, meta }) => {
    const html = generateHtmlWithMeta(baseHtml, meta);
    writeRouteHtml(path, html);
    generatedCount++;
  });

  // Blog posts
  posts.forEach((post) => {
    const meta: PageMeta = {
      title: `${post.title} - OpenThreads`,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
    };

    const html = generateHtmlWithMeta(baseHtml, meta);
    writeRouteHtml(`blog/${post.slug}`, html);
    generatedCount++;
  });

  // Tag pages
  tags.forEach((tag) => {
    const tagPosts = posts.filter((p) => p.tags.includes(tag));
    const meta: PageMeta = {
      title: `${tag} - OpenThreads Blog`,
      description: `Articles about ${tag} - ${tagPosts.length} ${tagPosts.length === 1 ? "post" : "posts"} on product compliance, regulation, and data systems.`,
      url: `${SITE_URL}/tags/${encodeURIComponent(tag)}`,
      type: "website",
    };

    const html = generateHtmlWithMeta(baseHtml, meta);
    writeRouteHtml(`tags/${encodeURIComponent(tag)}`, html);
    generatedCount++;
  });

  console.log(`✓ Pre-rendered ${generatedCount} routes with unique meta tags:`);
  console.log(`  - ${staticPages.length} static pages`);
  console.log(`  - ${posts.length} blog posts`);
  console.log(`  - ${tags.length} tag pages`);
  console.log(
    "\nEach route now has unique title, description, and canonical URL for SEO."
  );
}

main();
