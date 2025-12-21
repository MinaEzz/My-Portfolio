import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // const baseUrl = "https://dev-mina-ezzat.vercel.app/";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/projects", "/contact"],
      disallow: ["/api/*"],
    },
    sitemap: "https://dev-mina-ezzat.vercel.app/sitemap.xml",
  };
}
