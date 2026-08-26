"use client";
import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollExpand — media/panel that grows from a narrow column to full width
 * (and its corners sharpen) as it scrolls through the viewport, inspired by
 * reactbits.dev/animations/scroll-expand.
 */
export default function ScrollExpand({
  children,
  className = "",
  minWidth = "60%",
  maxWidth = "100%",
}: {
  children: ReactNode;
  className?: string;
  minWidth?: string;
  maxWidth?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const width = useTransform(scrollYProgress, [0, 1], [minWidth, maxWidth]);
  const radius = useTransform(scrollYProgress, [0, 1], [24, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.5, 1]);

  return (
    <div ref={ref} className="flex justify-center">
      <motion.div
        style={{ width, borderRadius: radius, opacity }}
        className={`overflow-hidden ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
