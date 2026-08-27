import type { ReactNode } from "react";

const SKILLS = [
  "Short-Form Editing (Reels, Shorts & TikTok)",
  "Video Editing",
  "2D Animation",
  "YouTube Channel Management",
  "Multimedia & Livestream Production (OBS)",
  "Music Arrangement",
  "Piano, Bass & Drums",
  "Server Administration",
  "Self-Hosted Infrastructure",
  "Next.js & TypeScript",
];

export function Skills(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        What I do
      </h3>
      <div className="rounded-4xl border border-foreground/5 bg-foreground/2 p-2 sm:p-4 dark:bg-foreground/5">
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/8 bg-background px-4 py-2 text-[14px] tracking-tight text-foreground/85 sm:text-[15px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
