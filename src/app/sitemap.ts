import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // const baseUrl = "https://dev-mina-ezzat.vercel.app/";
  return [
    {
      url: "https://dev-mina-ezzat.vercel.app/",
      priority: 1,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: "https://dev-mina-ezzat.vercel.app/about",
      priority: 0.8,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: "https://dev-mina-ezzat.vercel.app/projects",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: "https://dev-mina-ezzat.vercel.app/contact",
      priority: 0.6,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
  ];
}
