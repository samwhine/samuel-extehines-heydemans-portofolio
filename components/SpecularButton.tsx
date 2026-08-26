"use client";
import { useState, MouseEvent, ReactNode } from "react";

export default function SpecularButton({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  function handleMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  const Tag = (href ? "a" : "button") as any;

  return (
    <Tag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      onMouseMove={handleMove}
      className={`relative overflow-hidden isolate rounded-full font-mono text-xs uppercase tracking-wider px-6 py-3 bg-[var(--amber)] text-[#0e0e12] transition-transform hover:scale-[1.03] ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 80px at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.55), transparent 70%)`,
        }}
      />
      <span className="relative">{children}</span>
    </Tag>
  );
}
