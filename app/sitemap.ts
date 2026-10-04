import { MetadataRoute } from "next";

const baseUrl = "https://www.adcampin.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified,
    },
    {
      url: `${baseUrl}/shipping-policy`,
      lastModified,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
    },
  ];
}