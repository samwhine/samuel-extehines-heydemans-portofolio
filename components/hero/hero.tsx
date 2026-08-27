import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { HeroSocialLinks } from "./hero-social-links";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";

// Only one portrait is available for now, so both slots point to the same
// image — swap PORTRAIT_HOVER_SRC for a second photo later to get the
// full morph effect on hover.
const PORTRAIT_SRC = "/photo.png";
const PORTRAIT_HOVER_SRC = "/photo-hover.png";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Hey
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              , I&rsquo;m Samuel
            </p>

            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block whitespace-nowrap">
                Short-form editor &
              </span>
              <span className="block whitespace-nowrap">creative staff</span>
            </h1>

            <p className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-foreground/65">
              I edit short-form content for Reels, Shorts &amp; TikTok,
              manage
              YouTube channels, and handle the server infrastructure running
              behind the scenes — plus music direction on the side.
            </p>

            <HeroCtas />
            <HeroSocialLinks />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div className="relative aspect-square w-full md:max-w-105 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt="Samuel Extehines Heydemans"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
