import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type SocialLink = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  imageSrc?: string;
};

const LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/samuelheydemans",
    icon: Instagram,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/samuel-e-heydemans",
    imageSrc: "https://cdn.simpleicons.org/behance",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-extehines-heydemans/",
    icon: Linkedin,
  },
];

export function HeroSocialLinks(): ReactNode {
  return (
    <div className="mt-1 flex flex-wrap items-center gap-4">
      {LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="focus-ring group inline-flex items-center gap-1.5 text-[14px] font-medium tracking-tight text-foreground/55 transition-colors hover:text-foreground"
          >
            {Icon ? (
              <Icon className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden="true" />
            ) : link.imageSrc ? (
              <img
                src={link.imageSrc}
                alt=""
                width={14}
                height={14}
                aria-hidden="true"
                draggable={false}
                className="h-3.5 w-3.5 object-contain opacity-70 group-hover:opacity-100 dark:invert"
              />
            ) : null}
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
