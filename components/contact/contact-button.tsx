"use client";

import { Instagram, Mail, MessageCircle, X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const EMAIL = "samuel.heydemanss@gmail.com";
const INSTAGRAM = "https://instagram.com/samuelheydemans";
const WHATSAPP = "https://wa.me/6281317856465?text=Hi%2C%20Kak.%20Mau%20minta%20ratecard%20dong.";

const contactOptions = [
  {
    label: "Email",
    description: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: "Instagram",
    description: "@samuelheydemans",
    href: INSTAGRAM,
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    description: "Chat langsung",
    href: WHATSAPP,
    icon: MessageCircle,
  },
] as const;

export function ContactButton(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="focus-ring group inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Contact</span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/25 p-5 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-foreground/10 bg-background p-6 text-foreground shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="focus-ring absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/55 transition-colors hover:bg-foreground/5 hover:text-foreground"
              aria-label="Close contact options"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="pr-10">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/45">
                Get in touch
              </p>
              <h2
                id="contact-dialog-title"
                className="font-serif text-3xl font-medium tracking-tight sm:text-4xl"
              >
                Let&rsquo;s connect
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                Choose the channel that works best for you.
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              {contactOptions.map(({ label, description, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  onClick={() => setIsOpen(false)}
                  className="focus-ring group flex items-center gap-4 rounded-2xl border border-foreground/10 bg-background px-4 py-3.5 transition-colors hover:border-foreground/20 hover:bg-foreground/[0.03]"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">{label}</span>
                    <span className="block truncate text-xs text-foreground/55">
                      {description}
                    </span>
                  </span>
                  <span
                    className="ml-auto text-foreground/35 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
