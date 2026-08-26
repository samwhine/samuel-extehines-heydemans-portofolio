"use client";
import { motion } from "framer-motion";

/**
 * WarpText — per-letter skew/scale "warp" that ripples across the text
 * on hover/focus, inspired by reactbits.dev/text-animations/warp-text.
 */
const container = {
  rest: { transition: { staggerChildren: 0.02 } },
  warp: { transition: { staggerChildren: 0.02 } },
};

const letterVariants = {
  rest: { y: 0, scaleY: 1, scaleX: 1 },
  warp: {
    y: [0, -10, 0],
    scaleY: [1, 1.35, 1],
    scaleX: [1, 0.85, 1],
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WarpText({
  text,
  className = "",
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const letters = text.split("");
  const MotionTag = motion[Tag as "span"];

  return (
    <MotionTag
      className={`inline-block cursor-default select-none ${className}`}
      initial="rest"
      whileHover="warp"
      whileFocus="warp"
      animate="rest"
      variants={container}
      tabIndex={0}
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </MotionTag>
  );
}
