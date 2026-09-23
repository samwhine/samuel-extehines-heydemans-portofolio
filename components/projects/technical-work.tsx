"use client";

import { ArrowUpRight, Globe2, Server, Wrench } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

const TECHNICAL_WORK = [
  {
    title: "Server Administration & Infrastructure",
    description:
      "Self-hosted server management, Cloudflare Tunnel networking, internal tooling, and custom dashboard development for real production workflows.",
    meta: "Technical / Infrastructure · Python · Node.js · Go · Cloudflare",
    href: "https://www.behance.net/gallery/254816347/Server-Administration",
    label: "View project on Behance",
    icon: Server,
  },
  {
    title: "The House Works Website",
    description:
      "A production website for an independent creative business, built with Next.js, TypeScript, responsive motion, structured SEO, dynamic Open Graph images, and deployment-ready PWA assets.",
    meta: "Web Product · Next.js · TypeScript · SEO · Vercel",
    href: "https://thehouseworks.vercel.app/",
    label: "Visit live website",
    icon: Globe2,
  },
  {
    title: "WELL Ecosystem",
    description:
      "A collection of personal and self-hosted tools for media workflows, automation, and technical operations — including WELL Downloader and other independent projects.",
    meta: "Personal Projects · Self-hosted Tools",
    href: "https://github.com/samwhine",
    label: "Explore GitHub projects",
    icon: Wrench,
  },
] as const;

export function TechnicalWork(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="mb-8 flex flex-col gap-3 sm:mb-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
            Technical Systems &amp; Infrastructure
          </p>
          <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem]">
            Beyond the edit
          </h2>
          <p className="max-w-[48ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
            Web products, self-hosted systems, and internal tools built around real production workflows.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TECHNICAL_WORK.map(({ title, description, meta, href, label, icon: Icon }, index) => (
            <FadeIn key={title} delay={index * 0.06}>
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 360, damping: 28, mass: 0.65 }}
                className="group flex h-full min-h-64 flex-col rounded-3xl border border-foreground/8 bg-background p-6 transition-[border-color,box-shadow] duration-500 hover:border-foreground/20 hover:shadow-2xl sm:p-7"
              >
                <span className="border-foreground/10 mb-8 inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-foreground/3 text-foreground/75 dark:bg-foreground/5">
                  <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="max-w-[18ch] text-[21px] font-medium leading-[1.15] tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.5] tracking-tight text-foreground/60">
                  {description}
                </p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-7">
                  <span className="text-[11px] leading-[1.4] tracking-tight text-foreground/45">{meta}</span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-[12px] font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
