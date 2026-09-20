"use client";

import { Instagram, Mail, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useLayoutEffect, useState, useSyncExternalStore } from "react";

const EMAIL = "samuel.heydemanss@gmail.com";
const INSTAGRAM = "https://instagram.com/samuelheydemans";
const WHATSAPP = "https://wa.me/6281317856465?text=Hi%20Sam%21%20I%27d%20like%20to%20discuss%20a%20project%20and%20learn%20more%20about%20your%20services.";

const contactOptions = [
  { label: "Email", description: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
  { label: "Instagram", description: "@samuelheydemans", href: INSTAGRAM, icon: Instagram },
  { label: "WhatsApp", description: "Discuss a project", href: WHATSAPP, icon: MessageCircle },
] as const;

const emptySubscribe = () => () => {};

export function ContactButton(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    const scrollY = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="focus-ring group inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90" aria-haspopup="dialog" aria-expanded={isOpen}>
        <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /><span>Contact</span>
      </button>
      {isMounted ? createPortal(
        <AnimatePresence>
          {isOpen ? (
            <motion.div initial={{ opacity: 1, backdropFilter: "blur(0px)" }} animate={{ opacity: 1, backdropFilter: "blur(6px)" }} exit={{ opacity: 0, backdropFilter: "blur(0px)" }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-foreground/20 p-5" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
              <motion.div initial={{ opacity: 0, y: 12, scale: 0.97, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(3px)" }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative w-full max-w-md overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-background/95 p-6 text-foreground shadow-[0_24px_80px_-24px_rgb(0_0_0/0.35)] sm:p-8" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title">
                <button type="button" onClick={() => setIsOpen(false)} className="focus-ring absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/55 transition-colors hover:bg-foreground/5 hover:text-foreground" aria-label="Close contact options"><X className="h-4 w-4" aria-hidden="true" /></button>
                <div className="pr-10"><p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/45">Get in touch</p><h2 id="contact-dialog-title" className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">Let&rsquo;s connect</h2><p className="mt-3 text-sm leading-relaxed text-foreground/60">Choose the channel that works best for you.</p></div>
                <div className="mt-6 grid gap-3">
                  {contactOptions.map(({ label, description, href, icon: Icon }, index) => (
                    <motion.a key={label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.3, delay: 0.08 + index * 0.06, ease: [0.22, 1, 0.36, 1] }} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noopener noreferrer"} onClick={() => setIsOpen(false)} className="focus-ring group flex items-center gap-4 rounded-2xl border border-foreground/10 bg-background px-4 py-3.5 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-foreground/[0.03]">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground text-background"><Icon className="h-4 w-4" aria-hidden="true" /></span><span className="min-w-0"><span className="block text-sm font-medium">{label}</span><span className="block truncate text-xs text-foreground/55">{description}</span></span><span className="ml-auto text-foreground/35 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>, document.body,
      ) : null}
    </>
  );
}
