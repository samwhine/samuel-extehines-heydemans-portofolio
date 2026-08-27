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
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

const BEHANCE_PROFILE_URL = "https://www.behance.net/samuel-e-heydemans";

/**
 * These covers are the actual project thumbnails from Behance, saved
 * locally under /public/projects. Behance's API has been unavailable for
 * new integrations since 2021 (and there's no reliable way to auto-sync),
 * so when you publish something new on Behance: drop the new cover in
 * /public/projects and add an entry below — that's the whole workflow.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  href: string;
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "ade-govinda",
    icon: Film,
    iconLabel: "Ade Govinda",
    title: "Professional editing for musician Ade Govinda's channel content.",
    description:
      "Cutting and pacing performance and promo footage for a working artist's release cycle.",
    meta: "Freelance · Video Editing",
    href: "https://www.behance.net/gallery/254775341/Ade-Govinda-(Professional-Editing)",
    image: "/projects/ade-govinda.png",
    imageAlt: "Ade Govinda (Professional Editing) cover",
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
    image: "/projects/nelly-syara.png",
    imageAlt: "Nelly Syara (MEME, Mentality, Funny Editings) cover",
  },
  {
    id: "sidegigx",
    icon: Wand2,
    iconLabel: "Sidegigx",
    title: "2D animation work for the Sidegigx freelance platform.",
    description:
      "Motion and character animation produced end to end for a short-form 2D piece, delivered as freelance work.",
    meta: "Freelance · 2D Animation",
    href: "https://www.behance.net/gallery/254792361/Sidegigx-(2D-Animation)",
    image: "/projects/sidegigx.png",
    imageAlt: "Sidegigx (2D Animation) cover",
  },
  {
    id: "proctologyku",
    icon: Bot,
    iconLabel: "Proctologyku",
    title: "2D animation for Proctologyku, a proctologist's content brand.",
    description:
      "Comedic 2D animation for a doctor's personal content brand — clean timing, simple character motion.",
    meta: "Freelance · 2D Animation",
    href: "https://www.behance.net/gallery/254792183/Proctologyku-(2D-Animation)",
    image: "/projects/proctologyku.png",
    imageAlt: "Proctologyku (2D Animation) cover",
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
    image: "/projects/tebar-pesona.png",
    imageAlt: "Tebar Pesona (Promotional Content) cover",
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
    image: "/projects/music-certificate.png",
    imageAlt: "Music Certificate cover",
  },
  {
    id: "server-admin",
    icon: Server,
    iconLabel: "Server Admin",
    title: "Managing and running Legacy ID's servers, end to end.",
    description:
      "Handling the office's self-hosted servers and Cloudflare Tunnel setup — including building a custom dashboard to manage it all from one place.",
    meta: "Technical / Infrastructure",
    href: "https://www.behance.net/gallery/254816347/Server-Administration",
    image: "/projects/server-admin.png",
    imageAlt: "Server Administration cover",
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-16">
          {viewMoreVisible ? (
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
          ) : null}
          <Link
            href={BEHANCE_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View full profile on Behance
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
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
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: 808 / 632 }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
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
