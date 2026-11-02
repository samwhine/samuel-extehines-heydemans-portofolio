"use client";

import { ArrowUpRight, SkipForward } from "lucide-react";
import { useEffect, useState, type CSSProperties, type ReactNode, useSyncExternalStore } from "react";

const STORAGE_KEY = "samuel-swarm-intro-seen";
const emptySubscribe = () => () => {};
const cursors = [
  { label: "EDIT", x: "18%", y: "28%", delay: "0s" },
  { label: "MOTION", x: "76%", y: "24%", delay: "0.35s" },
  { label: "CODE", x: "27%", y: "72%", delay: "0.7s" },
  { label: "SYSTEMS", x: "78%", y: "70%", delay: "1.05s" },
];

export function SwarmIntro(): ReactNode {
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = window.localStorage.getItem(STORAGE_KEY) === "true";
    if (reducedMotion || alreadySeen) return;

    const showTimer = window.setTimeout(() => setIsVisible(true), 0);
    const exitTimer = window.setTimeout(() => setIsExiting(true), 4300);
    const closeTimer = window.setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, "true");
      setIsVisible(false);
    }, 5050);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(closeTimer);
      window.clearTimeout(showTimer);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  function skipIntro() {
    setIsExiting(true);
    window.setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, "true");
      setIsVisible(false);
    }, 260);
  }

  if (!isMounted || !isVisible) return null;

  return (
    <div
      className={`swarm-intro ${isExiting ? "swarm-intro--exiting" : ""}`}
      role="dialog"
      aria-label="Samuel Extehines Heydemans portfolio introduction"
      aria-modal="true"
    >
      <div className="swarm-intro__grid" aria-hidden="true" />
      <div className="swarm-intro__scanline" aria-hidden="true" />

      <div className="swarm-intro__brand">
        <span className="swarm-intro__eyebrow">Samuel Extehines Heydemans</span>
        <span className="swarm-intro__status"><i /> portfolio system online</span>
      </div>

      <div className="swarm-intro__content">
        <p className="swarm-intro__kicker">Co-founder · Creative Technologist</p>
        <h1>Building ideas into motion.</h1>
        <p className="swarm-intro__subline">A portfolio assembled across editing, systems, and creative technology.</p>
        <div className="swarm-intro__progress" aria-hidden="true"><span /></div>
      </div>

      <div className="swarm-intro__cursors" aria-hidden="true">
        {cursors.map((cursor) => (
          <div
            key={cursor.label}
            className="swarm-intro__cursor"
            style={{ "--cursor-x": cursor.x, "--cursor-y": cursor.y, "--cursor-delay": cursor.delay } as CSSProperties}
          >
            <span className="swarm-intro__cursor-mark" />
            <span className="swarm-intro__cursor-label">{cursor.label}</span>
          </div>
        ))}
      </div>

      <div className="swarm-intro__footer">
        <span>assembling selected work / 04</span>
        <button type="button" onClick={skipIntro} className="swarm-intro__skip">
          <SkipForward className="h-3.5 w-3.5" aria-hidden="true" />
          Skip intro
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
