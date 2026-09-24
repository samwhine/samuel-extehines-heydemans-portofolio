import type { Metadata } from "next";

export const siteConfig = {
  name: "Samuel Extehines Heydemans — Co-founder, The House Works | Creative Technologist & Video Editor",
  description:
    "Samuel Extehines Heydemans is the co-founder of The House Works, a creative technologist, and a video editor and creative staff member at Legacy ID.",
  url: "https://samuel-extehines-heydemans-portofolio.vercel.app",
  ogImage: "/og-image.png",
  creator: "@samuelheydemans",
  authors: [
    {
      name: "Samuel Extehines Heydemans",
      url: "https://samuel-extehines-heydemans-portofolio.vercel.app",
    },
  ],
  keywords: [
    "video editor",
    "Samuel",
    "Samuel Creative",
    "Samuel editor",
    "Samuel short form editing",
    "short form video editor",
    "short-form video editing",
    "video editing portfolio",
    "Reels editor",
    "TikTok editor",
    "YouTube Shorts editor",
    "youtube channel manager",
    "music arranger",
    "creative staff Jakarta",
    "Legacy ID",
    "The House Works",
    "The House Works founder",
    "Samuel Extehines Heydemans The House Works",
    "Samuel Heydemans",
    "Samuel E Heydemans",
    "Samuel Extehines Heydemans",
    "Creative Technologist Jakarta",
    "self-hosted infrastructure",
    "WELL Ecosystem",
    "WELL Downloader",
    "Ableton MIDI Remote Script",
  ],
} as const;

export const THE_HOUSE_WORKS_URL = "https://thehouseworks.vercel.app/";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
};

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    ...(title && { title }),
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
      siteName: siteConfig.name,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title ?? siteConfig.name,
        },
      ],
    },
    twitter: {
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
