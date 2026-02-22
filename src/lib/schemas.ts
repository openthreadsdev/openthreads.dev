import type { Post } from "./blog";
import { config } from "./config";
import { DEFAULT_SEO } from "./seo";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateOrganizationSchema() {
  // spelling:disable
  return {
    "@context": "https://schema.org",
    "@type": "Organization", // spelling:disable
    name: config.siteName,
    url: DEFAULT_SEO.siteUrl,
    logo: `${DEFAULT_SEO.siteUrl}/assets/logo.png`,
    description: config.siteDescription,
    sameAs: [config.social.twitter, config.social.linkedin],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.siteName,
    url: DEFAULT_SEO.siteUrl,
    description: config.siteDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${DEFAULT_SEO.siteUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateArticleSchema(post: Post) {
  const articleUrl = `${DEFAULT_SEO.siteUrl}/blog/${post.slug}`;

  // Strip markdown-like syntax for plain text content
  const plainTextContent = post.content
    .replace(/#{1,6}\s/g, "") // Remove headings
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold
    .replace(/\*(.*?)\*/g, "$1") // Remove italic
    .replace(/`(.*?)`/g, "$1") // Remove code
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove links
    .trim();

  const wordCount = plainTextContent.split(/\s+/).length;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: DEFAULT_SEO.ogImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization", // spelling:disable
      name: config.siteName,
      url: DEFAULT_SEO.siteUrl,
    },
    publisher: {
      "@type": "Organization", // spelling:disable
      name: config.siteName,
      url: DEFAULT_SEO.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${DEFAULT_SEO.siteUrl}/assets/logo.png`,
      },
    },
    keywords: post.tags.join(", "),
    articleSection: post.tags[0] || "Blog",
    articleBody: plainTextContent,
    wordCount,
    timeRequired: `PT${post.readingTime}M`,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${DEFAULT_SEO.siteUrl}${item.item}`,
    })),
  };
}

export function generateCollectionPageSchema(
  name: string,
  description: string,
  posts: Post[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: DEFAULT_SEO.siteUrl,
    hasPart: posts.slice(0, 10).map((post) => ({
      "@type": "Article",
      headline: post.title,
      description: post.description,
      url: `${DEFAULT_SEO.siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };
}
