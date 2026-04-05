import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://www.adcampin.com";

  const pages: MetadataRoute.Sitemap = [];

  // Core Static Pages
  pages.push(
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/pricing`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() }
  );

  // Blog Pages (High-quality SEO focus)
  pages.push(
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/blog/facebook-ad-copy-real-estate`, lastModified: new Date() },
    { url: `${baseUrl}/blog/google-ads-headlines-local-business`, lastModified: new Date() }
  );

  // NOTE:
  // Programmatic SEO pages (/ads/*) intentionally removed
  // Reason:
  // - These pages are currently set to "noindex"
  // - Including them in sitemap creates conflicting signals
  // - Focus is now on high-quality blog-based SEO

  return pages;
}