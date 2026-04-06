import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

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

  // Dynamically fetch all blog pages
  const blogDir = path.join(process.cwd(), "app/blog");

  const blogPages = fs
    .readdirSync(blogDir)
    // Exclude the blog index file
    .filter((name) => name !== "page.tsx")
    .map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
    }));

  // Blog Index + All Blog Articles
  pages.push(
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...blogPages
  );

  // NOTE:
  // Programmatic SEO pages (/ads/*) intentionally excluded
  // Reason:
  // - These pages are large in volume and discovered via internal linking
  // - Keeping sitemap focused improves crawl efficiency and trust signals

  return pages;
}