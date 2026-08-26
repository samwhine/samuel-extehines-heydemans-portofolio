"use client";
import SpecularButton from "./SpecularButton";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
];

export default function TimelineNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--line)] bg-[#0e0e12]/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <span className="font-display text-lg">Samuel Heydemans</span>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-[var(--ink-dim)] hover:text-[var(--ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <SpecularButton href="#contact" className="!px-5 !py-2">
          Contact
        </SpecularButton>
      </div>
    </nav>
  );
}
