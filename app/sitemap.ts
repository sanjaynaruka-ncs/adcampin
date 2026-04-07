import { MetadataRoute } from "next";
import { platforms } from "@/lib/platforms";
import { industries } from "@/lib/industries";
import { cities } from "@/lib/cities";
import { types } from "@/lib/types";
import fs from "fs";
import path from "path";

/**
 * Dynamic Sitemap Generator
 *
 * FEATURES:
 * 1. Generates ALL programmatic SEO pages (/ads/...)
 * 2. Automatically includes ALL blog pages from /app/blog/*
 *    → No manual updates required after git commit
 * 3. Keeps performance optimized for large scale (20K+ pages)
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.adcampin.com";

  const urls: MetadataRoute.Sitemap = [];

  // ---------------------------------------------------------------------------
  // 1. PROGRAMMATIC SEO PAGES (/ads)
  // ---------------------------------------------------------------------------

  platforms.forEach((p: any) => {
    const platform = typeof p === "string" ? p : p.slug;

    industries.forEach((i: any) => {
      const industry = typeof i === "string" ? i : i.slug;

      cities.forEach((c: any) => {
        const city = typeof c === "string" ? c : c.slug;

        types.forEach((t: any) => {
          const type = typeof t === "string" ? t : t.slug;

          urls.push({
            url: `${baseUrl}/ads/${platform}/${industry}/${city}/${type}`,
            lastModified: new Date("2024-01-01"),
            changeFrequency: "weekly",
            priority: 0.8,
          });
        });
      });
    });
  });

  // ---------------------------------------------------------------------------
  // 2. AUTO BLOG DETECTION (/blog/*)
  // ---------------------------------------------------------------------------

  try {
    const blogDir = path.join(process.cwd(), "app", "blog");

    if (fs.existsSync(blogDir)) {
      const blogFolders = fs.readdirSync(blogDir);

      blogFolders.forEach((folder) => {
        const fullPath = path.join(blogDir, folder);

        // Only include folders that contain page.tsx
        if (
          fs.statSync(fullPath).isDirectory() &&
          fs.existsSync(path.join(fullPath, "page.tsx"))
        ) {
          urls.push({
            url: `${baseUrl}/blog/${folder}`,
            lastModified: new Date("2024-01-01"),
            changeFrequency: "weekly",
            priority: 0.9,
          });
        }
      });
    }
  } catch (error) {
    console.error("Sitemap blog scan error:", error);
  }

  // ---------------------------------------------------------------------------
  // FINAL RETURN
  // ---------------------------------------------------------------------------

  return urls;
}