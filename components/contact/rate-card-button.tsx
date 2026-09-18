"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export function RateCardButton(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="border border-foreground/5 focus-ring inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-background px-5 text-sm font-medium text-foreground shadow-md/2 transition-colors hover:bg-foreground/[0.03]"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        View rate card
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 p-4 backdrop-blur-[6px] sm:p-6"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.97, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(3px)" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-background/95 p-3 text-foreground shadow-[0_24px_80px_-24px_rgb(0_0_0/0.35)] sm:max-h-[calc(100vh-3rem)] sm:p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="rate-card-dialog-title"
            >
              <div className="flex items-center justify-between px-2 pb-3 sm:px-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/45">
                    Services &amp; pricing
                  </p>
                  <h2
                    id="rate-card-dialog-title"
                    className="mt-1 font-serif text-2xl font-medium tracking-tight sm:text-3xl"
                  >
                    Rate card
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/55 transition-colors hover:bg-foreground/5 hover:text-foreground"
                  aria-label="Close rate card"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="overflow-auto rounded-2xl border border-foreground/8 bg-muted">
                <img
                  src="/MonthlyVideoEditingRateCard.png"
                  alt="Monthly video editing rate card"
                  className="mx-auto h-auto w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
