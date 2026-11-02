"use client";

import { Instagram, Mail, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";

const EMAIL = "samuel.heydemanss@gmail.com";
const INSTAGRAM = "https://instagram.com/samuelheydemans";
const WHATSAPP = "https://wa.me/6281317856465?text=Hi%20Sam%21%20I%27d%20like%20to%20discuss%20a%20project%20and%20learn%20more%20about%20your%20services.";

const contactOptions = [
  { label: "Email", description: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
  { label: "Instagram", description: "@samuelheydemans", href: INSTAGRAM, icon: Instagram },
  { label: "WhatsApp", description: "Discuss a project", href: WHATSAPP, icon: MessageCircle },
] as const;

const emptySubscribe = () => () => {};
const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactButton(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const shouldReduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      closeRef.current?.focus();
    } else if (wasOpenRef.current && isMounted) {
      triggerRef.current?.focus({ preventScroll: true });
      wasOpenRef.current = false;
    }
  }, [isOpen, isMounted]);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    const scrollY = window.scrollY;
    const previous = { overflow: document.body.style.overflow, paddingRight: document.body.style.paddingRight, position: document.body.style.position, top: document.body.style.top, width: document.body.style.width };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previous.overflow;
      document.body.style.paddingRight = previous.paddingRight;
      document.body.style.position = previous.position;
      document.body.style.top = previous.top;
      document.body.style.width = previous.width;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const modalTransition = shouldReduceMotion ? { duration: 0 } : { type: "spring" as const, stiffness: 360, damping: 30, mass: 0.72 };
  const itemTransition = shouldReduceMotion ? { duration: 0 } : { type: "spring" as const, stiffness: 440, damping: 32, mass: 0.55 };

  return (
    <>
      <motion.button ref={triggerRef} type="button" onClick={() => setIsOpen(true)} whileHover={{ y: shouldReduceMotion ? 0 : -2, scale: shouldReduceMotion ? 1 : 1.015 }} whileTap={{ y: 0, scale: shouldReduceMotion ? 1 : 0.985 }} transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 520, damping: 28, mass: 0.55 }} className="focus-ring group inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-foreground px-5 text-sm font-medium text-background" aria-haspopup="dialog" aria-expanded={isOpen}>
        <Mail className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-rotate-6" aria-hidden="true" /><span>Contact</span>
      </motion.button>
      {isMounted ? createPortal(
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, backdropFilter: shouldReduceMotion ? "blur(0px)" : "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: shouldReduceMotion ? "blur(0px)" : "blur(12px)" }}
              exit={{ opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.48, ease: EASE }}
              className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-foreground/[0.18] p-5 sm:p-6"
              role="presentation"
              onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}
            >
              <motion.div aria-hidden="true" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.55, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.9, ease: EASE }} className="pointer-events-none absolute h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22),transparent_64%)] blur-3xl" />
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18, scale: shouldReduceMotion ? 1 : 0.965, filter: shouldReduceMotion ? "blur(0px)" : "blur(5px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 10, scale: shouldReduceMotion ? 1 : 0.98, filter: shouldReduceMotion ? "blur(0px)" : "blur(3px)" }}
                transition={modalTransition}
                className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-foreground/12 bg-background/90 p-6 text-foreground shadow-[0_30px_100px_-28px_rgb(0_0_0/0.45)] backdrop-blur-2xl sm:p-8"
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-dialog-title"
                aria-describedby="contact-dialog-description"
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-foreground/[0.045] blur-2xl" />
                <button ref={closeRef} type="button" onClick={() => setIsOpen(false)} className="focus-ring absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/50 transition-[background-color,color,transform] duration-300 hover:rotate-90 hover:bg-foreground/7 hover:text-foreground" aria-label="Close contact options"><X className="h-4 w-4" aria-hidden="true" /></button>
                <motion.div initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} transition={itemTransition} className="relative pr-10"><p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/45"><span className="h-1.5 w-1.5 rounded-full bg-foreground/45" aria-hidden="true" />Get in touch</p><h2 id="contact-dialog-title" className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">Let&rsquo;s connect</h2><p id="contact-dialog-description" className="mt-3 text-sm leading-relaxed text-foreground/60">Have a project in mind? Choose the channel that works best for you.</p></motion.div>
                <motion.div initial="hidden" animate="show" exit="hidden" variants={{ hidden: {}, show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.065, delayChildren: shouldReduceMotion ? 0 : 0.08 } } }} className="relative mt-7 grid gap-3">
                  {contactOptions.map(({ label, description, href, icon: Icon }) => (
                    <motion.a key={label} variants={{ hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14, scale: shouldReduceMotion ? 1 : 0.985 }, show: { opacity: 1, y: 0, scale: 1 } }} transition={itemTransition} whileHover={{ y: shouldReduceMotion ? 0 : -2 }} whileTap={{ scale: shouldReduceMotion ? 1 : 0.992 }} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noopener noreferrer"} onClick={() => setIsOpen(false)} className="focus-ring group flex items-center gap-4 rounded-2xl border border-foreground/10 bg-background/70 px-4 py-3.5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-foreground/20 hover:bg-foreground/[0.035] hover:shadow-[0_12px_30px_-18px_rgb(0_0_0/0.4)]">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground text-background transition-transform duration-300 group-hover:scale-105"><Icon className="h-4 w-4" aria-hidden="true" /></span><span className="min-w-0"><span className="block text-sm font-medium">{label}</span><span className="block truncate text-xs text-foreground/55">{description}</span></span><span className="ml-auto text-lg leading-none text-foreground/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground/60" aria-hidden="true">&rarr;</span>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>, document.body,
      ) : null}
    </>
  );
}
