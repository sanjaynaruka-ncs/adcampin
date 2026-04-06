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

    // Existing Articles
    { url: `${baseUrl}/blog/facebook-ad-copy-real-estate`, lastModified: new Date() },
    { url: `${baseUrl}/blog/google-ads-headlines-local-business`, lastModified: new Date() },
    { url: `${baseUrl}/blog/best-chatgpt-prompts-ad-copy`, lastModified: new Date() },

    // NEW ARTICLES ADDED
    { url: `${baseUrl}/blog/google-ads-dentists`, lastModified: new Date() },
    { url: `${baseUrl}/blog/facebook-ads-lawyers`, lastModified: new Date() },
    { url: `${baseUrl}/blog/instagram-ads-gyms`, lastModified: new Date() }
  );

  // NOTE:
  // Programmatic SEO pages (/ads/*) intentionally excluded
  // Reason:
  // - These pages are large in volume and discovered via internal linking
  // - Keeping sitemap focused improves crawl efficiency and trust signals

  return pages;
}