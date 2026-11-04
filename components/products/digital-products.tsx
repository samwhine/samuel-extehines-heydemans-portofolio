"use client";

import { ArrowUpRight, ShoppingBag } from "lucide-react";
import type { ReactNode } from "react";
import { motion } from "motion/react";

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
              <motion.article
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.995 }}
                transition={{ type: "spring", stiffness: 360, damping: 28, mass: 0.65 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/8 bg-background transition-[border-color,box-shadow] duration-500 hover:border-foreground/20 hover:shadow-2xl"
              >
                <div className="relative aspect-[9/16] max-h-[34rem] w-full overflow-hidden bg-foreground/5 sm:max-h-[38rem]">
                  <iframe
                    className="pointer-events-none absolute inset-0 h-full w-full scale-[1.01]"
                    src={`https://www.youtube.com/embed/${product.previewId}?autoplay=1&mute=1&loop=1&playlist=${product.previewId}&controls=0&playsinline=1&rel=0&modestbranding=1`}
                    title={`${product.title} preview by Samuel Extehines Heydemans`}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
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
                    className="focus-ring mt-auto inline-flex w-fit items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Get the pack
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
