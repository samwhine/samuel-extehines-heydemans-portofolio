import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About Samuel Extehines Heydemans — Creative Technologist & Co-founder",
  description: "Learn about Samuel Extehines Heydemans, co-founder of The House Works, creative technologist, video editor, and technical builder working across content, web products, and infrastructure.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56"><PolaroidStrip /></section>
      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24"><FadeIn delay={0.5}><div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3"><h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Samuel Extehines Heydemans</span>.</h1><div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]"><p>I&rsquo;m Samuel, the <strong className="font-semibold text-foreground">co-founder of The House Works</strong>, an independent creative production business built with Stefanny Simanjuntak. I work across creative direction, short-form content, video editing, animation, and production systems.</p><p>At <strong className="font-semibold text-foreground">Legacy ID</strong>, I work as a <strong className="font-semibold text-foreground">Creative Staff and Video Editor</strong> in the music industry — editing Reels, Shorts, and TikTok content, managing YouTube channels, producing promotional content, and helping shape creative direction for artists. I also manage <strong className="font-semibold text-foreground">self-hosted servers and Cloudflare Tunnel infrastructure</strong>, including a custom dashboard I built to keep it all under control.</p><p>Alongside creative work, I build <strong className="font-semibold text-foreground">web products, private tools, and technical systems</strong> with Next.js, TypeScript, Python, and self-hosted infrastructure. Outside of work, I serve as a <strong className="font-semibold text-foreground">Music Director</strong> at GMS Kelapa Gading and study Informatics Engineering at Universitas Mercu Buana.</p></div></div></FadeIn></section>
      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28"><FadeIn delay={0.1}><div className="flex flex-col gap-10"><Experience /><Education /><Skills /><Stack /></div></FadeIn></section>
      <ContactCard /><div className="h-12 sm:h-16" />
    </main>
  );
}
