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
 * 1. Splits sitemap automatically into multiple files (Google 50K URL safe)
 * 2. Generates ALL programmatic SEO pages (/ads/...)
 * 3. Automatically includes ALL blog pages from /app/blog/*
 * 4. Uses dynamic lastModified for faster Google re-crawling
 * 5. Safe file system handling (no crashes in production)
 * 6. Keeps performance optimized for large scale (75K+ pages)
 *
 * OUTPUT:
 * /sitemap.xml       → Sitemap index
 * /sitemap/[id].xml  → Split child sitemaps
 */

const baseUrl = "https://www.adcampin.com";
const MAX_URLS_PER_SITEMAP = 50000;

/**
 * Generate ALL URLs centrally
 */
function generateAllUrls(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // ---------------------------------------------------------------------------
  // 1. STATIC PAGES
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

        if (
          fs.statSync(fullPath).isDirectory() &&
          fs.existsSync(path.join(fullPath, "page.tsx"))
        ) {
          urls.push({
            url: `${baseUrl}/blog/${folder}`,
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

  return urls;
}

/**
 * Generate split sitemap IDs for Next.js
 */
export async function generateSitemaps(): Promise<{ id: number }[]> {
  const allUrls = generateAllUrls();
  const totalSitemaps = Math.ceil(allUrls.length / MAX_URLS_PER_SITEMAP);

  return Array.from({ length: totalSitemaps }, (_, index) => ({
    id: index,
  }));
}

/**
 * Serve split sitemap chunks
 */
export default async function sitemap(
  props: {
    id: number;
  }
): Promise<MetadataRoute.Sitemap> {
  const { id } = props;

  const allUrls = generateAllUrls();

  const start = id * MAX_URLS_PER_SITEMAP;
  const end = start + MAX_URLS_PER_SITEMAP;

  return allUrls.slice(start, end);
}