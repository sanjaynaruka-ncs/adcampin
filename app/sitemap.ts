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
 * 3. Uses dynamic lastModified for faster Google re-crawling
 * 4. Safe file system handling (no crashes in production)
 * 5. Keeps performance optimized for large scale (20K+ pages)
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.adcampin.com";

  const urls: MetadataRoute.Sitemap = [];

  // ---------------------------------------------------------------------------
  // 1. STATIC PAGES (IMPORTANT FOR SEO DISCOVERY)
  // ---------------------------------------------------------------------------

  urls.push(
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    }
  );

  // ---------------------------------------------------------------------------
  // 2. PROGRAMMATIC SEO PAGES (/ads)
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
            // ✅ FIX: dynamic date instead of static old date
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
          });
        });
      });
    });
  });

  // ---------------------------------------------------------------------------
  // 3. AUTO BLOG DETECTION (/blog/*)
  // ---------------------------------------------------------------------------

  try {
    const blogDir = path.join(process.cwd(), "app", "blog");

    if (fs.existsSync(blogDir)) {
      const blogFolders = fs.readdirSync(blogDir);

      blogFolders.forEach((folder) => {
        const fullPath = path.join(blogDir, folder);

        // Only include valid blog folders containing page.tsx
        if (
          fs.statSync(fullPath).isDirectory() &&
          fs.existsSync(path.join(fullPath, "page.tsx"))
        ) {
          urls.push({
            url: `${baseUrl}/blog/${folder}`,
            // ✅ FIX: dynamic lastModified for faster indexing
            lastModified: new Date(),
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