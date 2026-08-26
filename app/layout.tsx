import type { Metadata } from "next";
import "./globals.css";
import TargetCursor from "@/components/TargetCursor";

const SITE_URL = "https://samuel-extehines-heydemans.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Samuel Extehines Heydemans — Video Editor & Creative Staff",
  description:
    "Portfolio of Samuel Extehines Heydemans — video editor, YouTube channel manager, and music arranger based in Jakarta, working with Legacy ID.",
  keywords: [
    "video editor",
    "video editing portfolio",
    "youtube channel manager",
    "music arranger",
    "creative staff Jakarta",
    "Legacy ID",
    "Samuel Heydemans",
  ],
  authors: [{ name: "Samuel Extehines Heydemans" }],
  openGraph: {
    title: "Samuel Extehines Heydemans",
    description: "Video Editor · Creative Staff · Music Director",
    url: SITE_URL,
    siteName: "Samuel Extehines Heydemans",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Extehines Heydemans",
    description: "Video Editor · Creative Staff · Music Director",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TargetCursor />
        {children}
      </body>
    </html>
  );
}
