"use client";

import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

const VIDEO_ID = "OWPIksNDwNk";

export function EditBreakdownTeaser(): ReactNode {
  const [isMuted, setIsMuted] = useState(true);

  function toggleSound() {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    const player = document.getElementById("raw-edited-youtube-teaser") as HTMLIFrameElement | null;
    player?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: nextMuted ? "mute" : "unMute",
        args: [],
      }),
      "*",
    );
    if (!nextMuted) {
      player?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
        "*",
      );
      player?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*",
      );
    }
  }

  return (
    <section className="relative w-full" aria-labelledby="edit-breakdown-teaser-heading">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col gap-5 rounded-3xl border border-foreground/8 bg-foreground/3 p-5 dark:bg-foreground/5 sm:p-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
                Raw → Edited
              </p>
              <h2
                id="edit-breakdown-teaser-heading"
                className="mt-2 font-serif text-[2rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.5rem]"
              >
                See the transformation
              </h2>
            </div>
            <p className="max-w-[34ch] text-[14px] leading-[1.5] tracking-tight text-foreground/60 sm:text-right">
              A quick look at how raw talking-head footage becomes a finished social edit.
            </p>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
            <iframe
              id="raw-edited-youtube-teaser"
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&playsinline=1&rel=0&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fsamuelheydemans.my.id`}
              title="Raw versus edited talking-head video preview"
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:left-4 sm:top-4">
              Raw → Edited
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] tracking-tight text-foreground/50">Talking-head editing · Before / after</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={toggleSound}
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-foreground/10 bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                aria-pressed={!isMuted}
              >
                {isMuted ? <Volume2 className="h-4 w-4" aria-hidden="true" /> : <VolumeX className="h-4 w-4" aria-hidden="true" />}
                {isMuted ? "Enable sound" : "Mute"}
              </button>
              <Link
                href="/projects"
                className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View all work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
