import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { TechnicalWork } from "@/components/projects/technical-work";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Creative & Technical Work — Samuel Extehines Heydemans",
  description:
    "Explore Samuel Extehines Heydemans' creative work in video editing, animation, music, and promotional content, alongside technical systems, web products, and self-hosted infrastructure.",
  path: "/projects",
});

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-24 sm:gap-32">
      <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-0 sm:px-10 sm:pt-56">
        <FadeIn className="flex flex-col items-center gap-5 text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
            Co-founder, The House Works
          </p>
          <h1 className="max-w-[16ch] font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3.25rem] lg:text-[3.75rem]">
            Creative work &amp; technical systems
          </h1>
          <p className="max-w-[42ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px]">
            A curated view of the creative production and technology I build across editing, animation, music, web products, and infrastructure.
          </p>
        </FadeIn>
      </section>

      <section aria-labelledby="creative-work-heading">
        <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
          <FadeIn className="mb-8 flex flex-col gap-3 sm:mb-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
              Selected Creative Work
            </p>
            <h2 id="creative-work-heading" className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem]">
              Made to be watched
            </h2>
            <p className="max-w-[46ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Video editing, animation, music direction, and promotional content for artists, brands, and social platforms.
            </p>
          </FadeIn>
        </div>
        <Projects />
      </section>

      <TechnicalWork />

      <section className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.behance.net/samuel-e-heydemans"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View full profile on Behance
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="https://github.com/samwhine"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Explore GitHub
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
