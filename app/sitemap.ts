import { MetadataRoute } from "next";

const baseUrl = "https://www.adcampin.com";

export default function sitemap(): MetadataRoute.Sitemap {

  const lastModified = new Date();

  return [

    {
      url: `${baseUrl}/sitemap-pages-1.xml`,
      lastModified,
    },
  ];
}