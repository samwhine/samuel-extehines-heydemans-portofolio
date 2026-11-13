import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-05T00:00:00.000Z");
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/projects`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/shop`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
