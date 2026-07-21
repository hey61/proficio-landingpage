import type { MetadataRoute } from "next";

const siteUrl = "https://www.proficio-digitaldruck.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-29"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/verpackungsdruck-kleinauflagen`,
      lastModified: new Date("2026-07-21"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/spezialdruck-druckveredelung`,
      lastModified: new Date("2026-07-21"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hausdruckerei-weiterentwickeln`,
      lastModified: new Date("2026-06-29"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/impressum`,
      lastModified: new Date("2026-06-29"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/datenschutz`,
      lastModified: new Date("2026-06-29"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
