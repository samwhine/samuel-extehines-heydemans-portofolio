"use client";

import { ShoppingBag } from "lucide-react";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

const DIGITAL_PRODUCTS = [
  {
    title: "Premium Text Animation Pack Vol. 1",
    description:
      "20+ polished CapCut typography presets for creators who want sharper hooks, cleaner pacing, and more expressive short-form edits.",
    meta: "20+ presets · IDR 52,000",
    previewId: "krbQxho6KPo",
    productUrl: "https://lynk.id/samuelextehinesheydemans/32l128kp9776",
  },
  {
    title: "Basic Text Animation Pack Vol. 1",
    description:
      "17 practical CapCut text animation presets for building energetic Reels, Shorts, and TikTok edits without starting from zero.",
    meta: "17 presets · IDR 25,500",
    previewId: "tW0oidpk9Do",
    productUrl: "https://lynk.id/samuelextehinesheydemans/rx8nmpr4w340",
  },
] as const;

export function DigitalProducts(): ReactNode {
  return (
    <section className="relative w-full" aria-labelledby="digital-products-heading">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="mb-8 flex flex-col gap-3 sm:mb-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
            Digital Products
          </p>
          <h2
            id="digital-products-heading"
            className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem]"
          >
            Tools for better motion
          </h2>
          <p className="max-w-[48ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
            Ready-to-use text animation packs for editors who want more rhythm, clarity, and personality in every cut.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {DIGITAL_PRODUCTS.map((product, index) => (
            <FadeIn key={product.previewId} delay={index * 0.07}>
              <article
                className="project-card group flex h-full flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 outline-none transition-[transform,box-shadow,border-color] duration-300 active:scale-[0.99] sm:p-3.5"
              >
                <div className="project-card__image relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1 ring-foreground/5" style={{ aspectRatio: "9 / 16" }}>
                  <div className="project-card__image-inner">
                    <iframe
                      className="pointer-events-none absolute inset-0 h-full w-full scale-[1.01]"
                      src={`https://www.youtube.com/embed/${product.previewId}?autoplay=1&mute=1&loop=1&playlist=${product.previewId}&controls=0&playsinline=1&rel=0&modestbranding=1`}
                      title={`${product.title} preview by Samuel Extehines Heydemans`}
                      loading="lazy"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/70 to-transparent" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/3 text-foreground/75 dark:bg-foreground/5">
                      <ShoppingBag className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="pt-2 text-right text-[11px] leading-[1.4] tracking-tight text-foreground/45">
                      {product.meta}
                    </span>
                  </div>
                  <h3 className="max-w-[24ch] text-[21px] font-medium leading-[1.15] tracking-tight text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-[14px] leading-[1.5] tracking-tight text-foreground/60">
                    {product.description}
                  </p>
                  <a
                    href={product.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring group mt-auto inline-flex cursor-pointer items-center gap-2 rounded-xl border border-foreground/8 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Get the pack
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
