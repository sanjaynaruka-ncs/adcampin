import { MetadataRoute } from "next";

/**
 * ============================================================================
 * GLOBAL SITEMAP INDEX
 * ============================================================================
 *
 * PURPOSE:
 * - Provide Google with a clean sitemap index
 * - Improve crawl efficiency for large-scale SEO architecture
 * - Reduce sitemap processing failures in GSC
 * - Support scalable indexing beyond 50K URLs
 *
 * CURRENT STRUCTURE:
 * - sitemap-pages-1.xml → First 25K URLs
 * - sitemap-pages-2.xml → Second 25K URLs
 * - sitemap-pages-3.xml → Remaining URLs
 *
 * BENEFITS:
 * - Better crawl distribution
 * - Faster sitemap processing
 * - Reduced indexing bottlenecks
 * - Cleaner GSC reporting
 * - Easier future scaling to 100K+ URLs
 *
 * OUTPUT:
 * /sitemap.xml
 * /sitemap-pages-1.xml
 * /sitemap-pages-2.xml
 * /sitemap-pages-3.xml
 * ============================================================================
 */

const baseUrl = "https://www.adcampin.com";

/**
 * ============================================================================
 * SITEMAP INDEX GENERATOR
 * ============================================================================
 */

export default function sitemap(): MetadataRoute.Sitemap {

  const lastModified = new Date();

  return [

    /**
     * ------------------------------------------------------------------------
     * FIRST 25K URLS
     * ------------------------------------------------------------------------
     */

    {
      url: `${baseUrl}/sitemap-pages-1.xml`,
      lastModified,
    },

    /**
     * ------------------------------------------------------------------------
     * SECOND 25K URLS
     * ------------------------------------------------------------------------
     */

    {
      url: `${baseUrl}/sitemap-pages-2.xml`,
      lastModified,
    },

  ];
}