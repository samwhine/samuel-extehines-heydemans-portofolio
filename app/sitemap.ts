import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

const projectImages = [
  "samuel-extehines-heydemans-sanfile-manggala-farma-promotional-video-editing-cover.png",
  "samuel-extehines-heydemans-ade-govinda-professional-video-editing-cover.png",
  "samuel-extehines-heydemans-nelly-syara-meme-comedy-video-editing-cover.png",
  "samuel-extehines-heydemans-sidegigx-2d-animation-cover.png",
  "samuel-extehines-heydemans-proctologyku-2d-animation-cover.png",
  "samuel-extehines-heydemans-tebar-pesona-promotional-content-cover.png",
  "samuel-extehines-heydemans-legacy-id-server-administration-cover.png",
  "samuel-extehines-heydemans-music-certificate-personal-project-cover.png",
].map((filename) => `${siteConfig.url}/projects/${filename}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-20T00:00:00.000Z");
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1, images: [`${siteConfig.url}/og-image.png`, `${siteConfig.url}/samuel-extehines-heydemans-portrait.png`, ...projectImages] },
    { url: `${siteConfig.url}/projects`, lastModified, changeFrequency: "weekly", priority: 0.9, images: projectImages },
    { url: `${siteConfig.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8, images: [`${siteConfig.url}/samuel-extehines-heydemans-portrait.png`, `${siteConfig.url}/about/samuel-extehines-heydemans-producing-music-on-midi-keyboard.jpeg`, `${siteConfig.url}/about/samuel-extehines-heydemans-monitoring-self-hosted-server-dashboard.jpeg`, `${siteConfig.url}/about/samuel-extehines-heydemans-playing-bass-on-stage.jpeg`, `${siteConfig.url}/about/samuel-extehines-heydemans-working-in-ableton-with-friend.jpeg`, `${siteConfig.url}/about/samuel-extehines-heydemans-editing-short-form-clip-in-capcut.jpeg`, `${siteConfig.url}/about/samuel-extehines-heydemans-playing-drums-on-stage.jpeg`] },
  ];
}
