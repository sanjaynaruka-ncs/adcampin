import type { MetadataRoute } from "next";

/**
 * ============================================================================
 * GLOBAL ROBOTS CONFIG
 * ============================================================================
 *
 * PURPOSE:
 * - Improve Google crawl efficiency
 * - Ensure SEO pages are crawlable
 * - Expose sitemap index to search engines
 * - Prevent accidental crawl blocking
 *
 * IMPORTANT:
 * - Allows all major search engines
 * - References sitemap.xml
 * - Safe for large-scale SEO websites
 * ============================================================================
 */

export default function robots(): MetadataRoute.Robots {

  return {

    rules: [
      {
        userAgent: "*",

        allow: "/",

        disallow: [
          "/api/",
          "/dashboard/",
          "/settings/",
          "/login/",
          "/signup/",
        ],
      },
    ],

    sitemap: "https://www.adcampin.com/sitemap.xml",

    host: "https://www.adcampin.com",
  };
}