"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

type Polaroid = { id: string; rotate: number; src: string; alt: string };

const PHOTOS: Polaroid[] = [
  { id: "a", rotate: -8, src: "/about/samuel-extehines-heydemans-producing-music-on-midi-keyboard.jpeg", alt: "Samuel Extehines Heydemans producing music on a MIDI keyboard" },
  { id: "b", rotate: 6, src: "/about/samuel-extehines-heydemans-monitoring-self-hosted-server-dashboard.jpeg", alt: "Samuel Extehines Heydemans monitoring a self-hosted server dashboard" },
  { id: "c", rotate: -4, src: "/about/samuel-extehines-heydemans-playing-bass-on-stage.jpeg", alt: "Samuel Extehines Heydemans playing bass on stage" },
  { id: "d", rotate: 7, src: "/about/samuel-extehines-heydemans-working-in-ableton-with-friend.jpeg", alt: "Samuel Extehines Heydemans working in Ableton with a friend" },
  { id: "e", rotate: -6, src: "/about/samuel-extehines-heydemans-editing-short-form-clip-in-capcut.jpeg", alt: "Samuel Extehines Heydemans editing a short-form clip in CapCut" },
  { id: "f", rotate: 5, src: "/about/samuel-extehines-heydemans-playing-drums-on-stage.jpeg", alt: "Samuel Extehines Heydemans playing drums on stage" },
];
const EASE = [0.22, 1, 0.36, 1] as const;

function PolaroidCard({ photo, index }: { photo: Polaroid; index: number }): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 }); const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`); const ty = useTransform(sy, (v) => `${v}px`);
  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => { const el = ref.current; if (!el) return; const rect = el.getBoundingClientRect(); const dx = e.clientX - (rect.left + rect.width / 2); const dy = e.clientY - (rect.top + rect.height / 2); mx.set(Math.max(-18, Math.min(18, dx * 0.25))); my.set(Math.max(-18, Math.min(18, dy * 0.25))); };
  return <motion.div ref={ref} onPointerMove={handleMove} onPointerLeave={() => { mx.set(0); my.set(0); }} initial={{ opacity: 0, y: -120 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.05 + index * 0.08, ease: EASE }} style={{ x: tx, y: ty, rotate: photo.rotate }} className="relative aspect-[3/4] w-[clamp(6rem,11vw,9rem)] shrink-0"><div className="h-full w-full overflow-hidden rounded-2xl border-6 border-neutral-300/40 bg-white p-1.5 dark:border-white/15 dark:bg-neutral-900"><div className="relative h-full w-full overflow-hidden rounded-xl"><Image src={photo.src} alt={photo.alt} fill sizes="144px" className="object-cover" /></div></div></motion.div>;
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  if (!mounted) return <div aria-hidden="true" className="h-[clamp(8rem,15vw,12rem)] w-full" />;
  return <div className="flex w-full flex-wrap items-start justify-center gap-1 px-4 sm:gap-1.5 sm:px-8">{PHOTOS.map((photo, i) => <PolaroidCard key={photo.id} photo={photo} index={i} />)}</div>;
}
