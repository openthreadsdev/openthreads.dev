import { Helmet } from "react-helmet-async";
import {
  DEFAULT_SEO,
  generateCanonicalUrl,
  generateMetaDescription,
  generatePageTitle,
  getDefaultOGImage,
} from "@/lib/seo";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: "website" | "article";
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage,
  ogType = "website",
  article,
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = generatePageTitle(title);
  const fullDescription = generateMetaDescription(description);
  const canonicalUrl = generateCanonicalUrl(canonicalPath);
  const imageUrl = ogImage || getDefaultOGImage();

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />

      {/* Article-specific Open Graph tags */}
      {article && (
        <>
          <meta
            property="article:published_time"
            content={article.publishedTime}
          />
          {article.modifiedTime && (
            <meta
              property="article:modified_time"
              content={article.modifiedTime}
            />
          )}
          {article.tags?.map((tag) => (
            <meta property="article:tag" content={tag} key={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_SEO.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
