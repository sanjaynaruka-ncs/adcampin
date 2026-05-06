import { platforms } from "@/lib/platforms";
import { industries } from "@/lib/industries";
import { cities } from "@/lib/cities";
import { types } from "@/lib/types";
import fs from "fs";
import path from "path";

/**
 * =========================================================
 * PERFORMANCE CONFIG (CRITICAL FOR VERCEL USAGE REDUCTION)
 * =========================================================
 */

// Use Node runtime (avoids expensive Edge execution)
export const runtime = "nodejs";

// Cache sitemap for 24 hours (reduces repeated bot hits)
export const revalidate = 86400;

/**
 * =========================================================
 * SITEMAP GENERATOR (SECOND HALF: 50K+ URLs)
 * =========================================================
 */

export async function GET() {
  const baseUrl = "https://www.adcampin.com";
  const urls: string[] = [];

  /**
   * ---------------------------------------------------------
   * STATIC PAGES
   * ---------------------------------------------------------
   */
  urls.push(`${baseUrl}`);
  urls.push(`${baseUrl}/blog`);

  /**
   * ---------------------------------------------------------
   * PROGRAMMATIC SEO PAGES
   * ---------------------------------------------------------
   * NOTE:
   * - Using for-loops (faster than forEach)
   * - Safe typing to avoid TS errors
   */
  for (const p of platforms as any[]) {
    const platform = typeof p === "string" ? p : p?.slug;

    for (const i of industries as any[]) {
      const industry = typeof i === "string" ? i : i?.slug;

      for (const c of cities as any[]) {
        const city = typeof c === "string" ? c : c?.slug;

        for (const t of types as any[]) {
          const type = typeof t === "string" ? t : t?.slug;

          urls.push(`${baseUrl}/ads/${platform}/${industry}/${city}/${type}`);
        }
      }
    }
  }

  /**
   * ---------------------------------------------------------
   * BLOG PAGES
   * ---------------------------------------------------------
   * NOTE:
   * - Safe FS handling
   * - No blocking failures
   */
  try {
    const blogDir = path.join(process.cwd(), "app", "blog");

    if (fs.existsSync(blogDir)) {
      const blogFolders = fs.readdirSync(blogDir);

      for (const folder of blogFolders) {
        const fullPath = path.join(blogDir, folder);

        if (
          fs.statSync(fullPath).isDirectory() &&
          fs.existsSync(path.join(fullPath, "page.tsx"))
        ) {
          urls.push(`${baseUrl}/blog/${folder}`);
        }
      }
    }
  } catch (error) {
    console.error("Sitemap blog scan error:", error);
  }

  /**
   * ---------------------------------------------------------
   * SECOND SITEMAP (URLS AFTER 50K)
   * ---------------------------------------------------------
   */
  const sitemapUrls = urls.slice(50000);

  /**
   * ---------------------------------------------------------
   * XML GENERATION (OPTIMIZED)
   * ---------------------------------------------------------
   */
  const lastMod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  /**
   * ---------------------------------------------------------
   * RESPONSE WITH AGGRESSIVE CACHING (KEY OPTIMIZATION)
   * ---------------------------------------------------------
   */
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}