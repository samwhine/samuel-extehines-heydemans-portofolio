import { DigitalProducts } from "@/components/products/digital-products";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Shop — Digital Products by Samuel Extehines Heydemans",
  description:
    "Shop Samuel Extehines Heydemans' ready-to-use CapCut text animation packs for sharper hooks, cleaner pacing, and more expressive short-form edits.",
  path: "/shop",
});

export default function ShopPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 pb-20 sm:gap-28 sm:pb-28">
      <section className="mx-auto w-full max-w-275 px-6 pt-44 sm:px-10 sm:pt-56">
        <FadeIn className="flex flex-col gap-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
            Samuel&apos;s shop
          </p>
          <h1 className="max-w-[14ch] font-serif text-[3rem] font-medium leading-[1.02] tracking-tight text-foreground md:text-[4rem]">
            Tools for better motion.
          </h1>
          <p className="max-w-[48ch] text-[19px] leading-[1.5] tracking-tight text-foreground/65 sm:text-[21px]">
            Ready-to-use digital products for editors who want more rhythm, clarity, and personality in every cut.
          </p>
        </FadeIn>
      </section>

      <DigitalProducts />

      <section className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col gap-4 rounded-3xl border border-foreground/10 bg-background/70 p-6 shadow-[0_18px_55px_-28px_rgb(0_0_0/0.38)] backdrop-blur-xl sm:p-8">
          <p className="text-sm font-medium text-foreground">More products live on Lynk.id</p>
          <p className="max-w-[52ch] text-sm leading-relaxed text-foreground/60">
            Browse the current collection and product updates through Samuel&apos;s Lynk.id storefront.
          </p>
          <a
            href="https://lynk.id/samuelextehinesheydemans"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-11 w-fit items-center rounded-xl bg-foreground/90 px-4 py-2.5 text-sm font-medium text-background shadow-[0_10px_24px_-12px_rgb(0_0_0/0.5)] transition-[transform,opacity,box-shadow] duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_16px_30px_-14px_rgb(0_0_0/0.6)] active:translate-y-0 active:scale-[0.98]"
          >
            Open Lynk.id shop <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        </FadeIn>
      </section>
    </main>
  );
}
