import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

const projectImages = [
  "ade-govinda",
  "nelly-syara",
  "sidegigx",
  "proctologyku",
  "tebar-pesona",
  "music-certificate",
  "server-admin",
].map((slug) => `${siteConfig.url}/projects/${slug}.png`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-20T00:00:00.000Z");
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1, images: [`${siteConfig.url}/og-image.png`, `${siteConfig.url}/samuel-extehines-heydemans-portrait.png`, ...projectImages] },
    { url: `${siteConfig.url}/projects`, lastModified, changeFrequency: "weekly", priority: 0.9, images: projectImages },
    { url: `${siteConfig.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8, images: [`${siteConfig.url}/samuel-extehines-heydemans-portrait.png`, `${siteConfig.url}/about/samuel-producing-midi-keyboard.jpeg`, `${siteConfig.url}/about/samuel-server-monitoring-dashboard.jpeg`, `${siteConfig.url}/about/samuel-playing-bass-on-stage.jpeg`, `${siteConfig.url}/about/samuel-working-in-ableton-with-friend.jpeg`, `${siteConfig.url}/about/samuel-editing-short-form-clip-capcut.jpeg`, `${siteConfig.url}/about/samuel-playing-drums-on-stage.jpeg`] },
  ];
}
