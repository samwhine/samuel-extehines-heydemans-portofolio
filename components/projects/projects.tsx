import {
  ArrowRight,
  Bot,
  Film,
  Music,
  Server,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * No project screenshots are available yet, so cards render a labeled
 * placeholder panel instead of borrowing someone else's imagery. Add an
 * `image` field (and bring back next/image) once you have real
 * thumbnails for each piece.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    id: "ade-govinda",
    icon: Film,
    iconLabel: "Ade Govinda",
    title: "Professional editing for musician Ade Govinda's channel content.",
    description:
      "Cutting and pacing performance and promo footage for a working artist's release cycle.",
    meta: "Video Editing",
    href: "https://www.behance.net/gallery/254775341/Ade-Govinda-(Professional-Editing)",
  },
  {
    id: "nelly-syara",
    icon: Sparkles,
    iconLabel: "Nelly Syara",
    title: "Meme, mentality, and comedy-style edits for Nelly Syara.",
    description:
      "Fast, punchy comedic edits built for short-form attention spans without losing the joke.",
    meta: "Video Editing",
    href: "https://www.behance.net/gallery/254791715/Nelly-Syara-(MEME-Mentalilty-Funny-Editings)",
  },
  {
    id: "sidegigx",
    icon: Wand2,
    iconLabel: "Sidegigx",
    title: "2D animation work for the Sidegigx project.",
    description:
      "Motion and character animation produced end to end for a short-form 2D piece.",
    meta: "2D Animation",
    href: "https://www.behance.net/gallery/254792361/Sidegigx-(2D-Animation)",
  },
  {
    id: "proctologyku",
    icon: Bot,
    iconLabel: "Proctologyku",
    title: "2D animation for Proctologyku.",
    description:
      "Another 2D animation piece, focused on clean comedic timing and simple character motion.",
    meta: "2D Animation",
    href: "https://www.behance.net/gallery/254792183/Proctologyku-(2D-Animation)",
  },
  {
    id: "tebar-pesona",
    icon: Sparkles,
    iconLabel: "Tebar Pesona",
    title: "Promotional content for Tebar Pesona.",
    description:
      "Brand-forward promotional edit built to move quickly across social platforms.",
    meta: "Promotional Content",
    href: "https://www.behance.net/gallery/254792067/Tebar-Pesona-(Promotional-Content)",
  },
  {
    id: "music-certificate",
    icon: Music,
    iconLabel: "Music Certificate",
    title: "Music direction and arrangement credit work.",
    description:
      "Documentation of arranging and music direction work delivered for a certificate project.",
    meta: "Music",
    href: "https://www.behance.net/gallery/254794941/Music-Certificate",
  },
  {
    id: "server-admin",
    icon: Server,
    iconLabel: "Server Admin",
    title: "Server administration behind the scenes at Legacy ID.",
    description:
      "Running self-hosted file storage and Cloudflare Tunnel infrastructure that keeps the label's tools online.",
    meta: "Technical / IT",
    href: "https://www.behance.net/gallery/254816347/Server-Administration",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My work
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Video editing, animation, and behind-the-scenes work for Legacy
              ID and its artists.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all work
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5"
      >
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: 4 / 3 }}
        >
          <Icon
            className="h-10 w-10 text-foreground/20"
            strokeWidth={1.25}
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </a>
    </FadeIn>
  );
}
