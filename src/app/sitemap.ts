import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dev-mina-ezzat.vercel.app/";

  return [
    {
      url: baseUrl,
      priority: 1,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}about`,
      priority: 0.8,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}projects`,
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}contact`,
      priority: 0.6,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
  ];
}
