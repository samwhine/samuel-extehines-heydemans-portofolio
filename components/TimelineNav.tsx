"use client";
import { useEffect, useState } from "react";

const clips = [
  { id: "about", label: "About", tc: "00:00" },
  { id: "work", label: "Work", tc: "00:14" },
  { id: "experience", label: "Experience", tc: "00:31" },
  { id: "contact", label: "Contact", tc: "00:47" },
];

export default function TimelineNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = clips
      .map((c) => document.getElementById(c.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section timeline"
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--line)] bg-[#0e0e12]/90 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center h-14 gap-1 overflow-x-auto">
          <span className="font-mono text-[11px] text-[var(--ink-dim)] pr-4 shrink-0">
            SEH.MOV
          </span>
          <div className="flex items-stretch h-full flex-1 min-w-0">
            {clips.map((c, i) => {
              const isActive = active === c.id;
              return (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className={`group relative flex flex-col justify-center px-4 border-l ${
                    i === 0 ? "border-l-0" : "border-[var(--line)]"
                  } shrink-0 transition-colors ${
                    isActive ? "bg-[var(--card)]" : "hover:bg-[var(--card)]/50"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-[var(--amber)]" : "text-[var(--ink-dim)]"
                    }`}
                  >
                    {c.tc}
                  </span>
                  <span
                    className={`text-xs tracking-wide ${
                      isActive ? "text-[var(--ink)]" : "text-[var(--ink-dim)]"
                    }`}
                  >
                    {c.label}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--amber)]" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
