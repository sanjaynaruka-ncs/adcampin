import { MetadataRoute } from "next";
import { platforms } from "@/lib/platforms";
import { industries } from "@/lib/industries";
import { cities } from "@/lib/cities";
import { types } from "@/lib/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.adcampin.com";

  const urls: MetadataRoute.Sitemap = [];

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

  return urls;
}