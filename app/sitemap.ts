import { MetadataRoute } from "next";

/**
 * Sitemap Index Generator
 *
 * FEATURES:
 * 1. Main sitemap.xml points to split sitemap files
 * 2. Google-safe for 50K+ URL websites
 * 3. Supports manual split sitemap architecture
 *
 * OUTPUT:
 * /sitemap.xml
 * /sitemap-pages-1.xml
 * /sitemap-pages-2.xml
 */

const baseUrl = "https://www.adcampin.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/sitemap-pages-1.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-pages-2.xml`,
      lastModified: new Date(),
    },
  ];
}