import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Video Editing Portfolio — Samuel Extehines Heydemans",
  description: "Explore Samuel Extehines Heydemans’ portfolio of short-form video editing, 2D animation, promotional content, music projects, YouTube channel work, and technical production.",
  path: "/projects",
});

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-16 sm:px-10 sm:pt-56 sm:pb-20"><FadeIn className="flex flex-col items-center gap-5 text-center"><h1 className="font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">Video editing &amp; creative projects</h1><p className="max-w-[38ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">A selection of editing, animation, music, infrastructure, and production work by Samuel Extehines Heydemans.</p></FadeIn></section>
      <Projects /><ContactCard /><div className="h-12 sm:h-16" />
    </main>
  );
}
