"use client";

import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";
import { useState, type ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";

const VIDEO_ID = "OWPIksNDwNk";
const YOUTUBE_URL = `https://www.youtube.com/shorts/${VIDEO_ID}`;

export function EditBreakdown(): ReactNode {
  const [isMuted, setIsMuted] = useState(true);

  function toggleSound() {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    const player = document.getElementById("raw-edited-youtube-player") as HTMLIFrameElement | null;
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
    <section className="relative w-full" aria-labelledby="edit-breakdown-heading">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="mb-8 flex flex-col gap-3 sm:mb-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
            Edit Breakdown
          </p>
          <h2
            id="edit-breakdown-heading"
            className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem]"
          >
            From raw footage to final cut
          </h2>
          <p className="max-w-[48ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
            A quick before-and-after look at the pacing, typography, glow treatment, and sound design behind a talking-head edit.
          </p>
        </FadeIn>

        <FadeIn>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 360, damping: 28, mass: 0.65 }}
            className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl border border-foreground/8 bg-foreground/3 shadow-sm dark:bg-foreground/5"
          >
            <div className="relative mx-auto aspect-[9/16] w-full overflow-hidden bg-black">
              <iframe
                id="raw-edited-youtube-player"
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&playsinline=1&rel=0&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fsamuelheydemans.my.id`}
                title="Raw versus edited talking-head video by Samuel Extehines Heydemans"
                allow="autoplay; encrypted-media; picture-in-picture"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" aria-hidden="true" />
              <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:left-6 sm:top-6">
                Raw <span className="text-white/55">→</span> Edited
              </div>
            </div>

            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <p className="text-[13px] tracking-tight text-foreground/55">
                Talking-head editing · Before / after preview
              </p>
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
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-xl bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Watch on YouTube
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
