import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import { PROJECTS, getProject } from "@/components/projects/projects";
import { createMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(): Array<{ slug: string }> {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createMetadata({
      title: "Project not found — Samuel Extehines Heydemans",
      description: "The requested project could not be found.",
      path: `/projects/${slug}`,
    });
  }

  return createMetadata({
    title: `${project.iconLabel} — Samuel Extehines Heydemans`,
    description: project.description,
    path: `/projects/${project.id}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps): Promise<ReactNode> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const relatedProjects = PROJECTS.filter(
    (candidate) => candidate.category === project.category && candidate.id !== project.id,
  ).slice(0, 3);

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-32 pb-16 sm:px-10 sm:pt-40 sm:pb-24">
        <FadeIn className="mb-10 sm:mb-14">
          <Link
            href="/projects"
            className="focus-ring group inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground/65 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            Back to selected work
          </Link>
        </FadeIn>

        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.7fr)] lg:gap-20">
          <FadeIn className="flex flex-col gap-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
              {project.meta}
            </p>
            <h1 className="max-w-[14ch] font-serif text-[3rem] font-medium leading-[0.98] tracking-tight text-foreground sm:text-[4.5rem] lg:text-[5.5rem]">
              {project.iconLabel}
            </h1>
            <p className="max-w-[40ch] text-[20px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[23px]">
              {project.title}
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="flex flex-col gap-5 lg:pb-1">
            <p className="max-w-[38ch] text-[16px] leading-[1.55] text-foreground/65 sm:text-[17px]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={project.behanceHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-foreground/8 focus-ring group inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View full project on Behance
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-275 px-6 sm:px-10" aria-label={`${project.iconLabel} preview`}>
        <FadeIn className="relative aspect-[1.28/1] w-full overflow-hidden rounded-[2rem] bg-foreground/5 ring-1 ring-foreground/8 sm:rounded-[2.5rem]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(min-width: 1100px) 1100px, 100vw"
            className="object-cover"
          />
        </FadeIn>
      </section>

      <section className="mx-auto flex w-full max-w-275 flex-col items-center gap-5 px-6 py-24 text-center sm:px-10 sm:py-32">
        <FadeIn className="flex flex-col items-center gap-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/45">Keep exploring</p>
          <h2 className="max-w-[15ch] font-serif text-[2.5rem] font-medium leading-[1.02] tracking-tight text-foreground sm:text-[3.5rem]">
            Explore more of my work
          </h2>
          <Link
            href="/projects"
            className="border border-foreground/8 focus-ring group inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Back to selected work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </FadeIn>

        <div className="grid w-full grid-cols-1 gap-5 pt-8 text-left sm:grid-cols-3 sm:pt-12">
          {relatedProjects.map((relatedProject, index) => (
            <FadeIn key={relatedProject.id} delay={index * 0.06}>
              <Link
                href={`/projects/${relatedProject.id}`}
                className="project-card flex h-full flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3"
              >
                <div className="relative aspect-[1.28/1] overflow-hidden rounded-2xl bg-foreground/5">
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.imageAlt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 px-1 pb-1">
                  <p className="text-sm font-medium tracking-tight text-foreground">{relatedProject.iconLabel}</p>
                  <p className="text-xs leading-normal text-foreground/55">View project</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
