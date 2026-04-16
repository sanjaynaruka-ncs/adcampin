import { platforms } from "@/lib/platforms";
import { industries } from "@/lib/industries";
import { cities } from "@/lib/cities";
import { types } from "@/lib/types";
import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://www.adcampin.com";
  const urls: string[] = [];

  // Static Pages
  urls.push(`${baseUrl}`);
  urls.push(`${baseUrl}/blog`);

  // Programmatic SEO Pages
  platforms.forEach((p: any) => {
    const platform = typeof p === "string" ? p : p.slug;

    industries.forEach((i: any) => {
      const industry = typeof i === "string" ? i : i.slug;

      cities.forEach((c: any) => {
        const city = typeof c === "string" ? c : c.slug;

        types.forEach((t: any) => {
          const type = typeof t === "string" ? t : t.slug;

          urls.push(`${baseUrl}/ads/${platform}/${industry}/${city}/${type}`);
        });
      });
    });
  });

  // Blog Pages
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
          urls.push(`${baseUrl}/blog/${folder}`);
        }
      });
    }
  } catch (error) {
    console.error("Sitemap blog scan error:", error);
  }

  // First 50,000 URLs
  const sitemapUrls = urls.slice(0, 50000);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}