import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/danke"],
    },
    sitemap: "https://www.proficio-digitaldruck.de/sitemap.xml",
  };
}
