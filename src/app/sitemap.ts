import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dev-mina-ezzat.vercel.app";

  return [
    {
      url: baseUrl,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
  ];
}
