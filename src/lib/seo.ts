export const DEFAULT_SEO = {
  siteName: "OpenThreads",
  siteUrl: "https://openthreads.dev",
  defaultTitle: "OpenThreads - Compliance-first product data infrastructure",
  defaultDescription:
    "Structured systems that make product compliance auditable, exportable, and operational.",
  twitterHandle: "@openthreads",
  ogImage: "https://openthreads.dev/assets/og-image.png",
};

export function generatePageTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return DEFAULT_SEO.defaultTitle;
  }
  return `${pageTitle} - ${DEFAULT_SEO.siteName}`;
}

export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${DEFAULT_SEO.siteUrl}${cleanPath}`;
}

export function generateMetaDescription(description?: string): string {
  const content = description || DEFAULT_SEO.defaultDescription;
  // Ensure description is under 160 characters for optimal SEO
  return content.length > 160 ? content.slice(0, 157) + "..." : content;
}

export function getDefaultOGImage(): string {
  return DEFAULT_SEO.ogImage;
}
