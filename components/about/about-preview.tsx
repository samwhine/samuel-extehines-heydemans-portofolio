import Link from "next/link";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

export function AboutPreview(): ReactNode {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-[50ch] text-[17px] leading-[1.6] tracking-tight text-foreground/75 sm:text-[18px]">
                At{" "}
                <strong className="font-semibold text-foreground">
                  Legacy ID
                </strong>
                , I&rsquo;m entrusted as a{" "}
                <strong className="font-semibold text-foreground">
                  Creative Staff, Video Editor &amp; YouTube Channel Manager
                </strong>
                , and I run{" "}
                <strong className="font-semibold text-foreground">
                  the office&rsquo;s self-hosted servers and Cloudflare
                  Tunnel infrastructure
                </strong>{" "}
                — including a custom dashboard I built to manage it all from
                one place. I&rsquo;m also a{" "}
                <strong className="font-semibold text-foreground">
                  Music Director
                </strong>{" "}
                at GMS Kelapa Gading, and studying Informatics Engineering
                while working full-time.
              </p>

              <Link
                href="/about"
                className="focus-ring group inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-foreground/10 bg-background px-5 py-2.5 text-[15px] font-medium tracking-tight text-foreground transition-colors hover:bg-foreground/5 md:self-center"
              >
                More about me
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}