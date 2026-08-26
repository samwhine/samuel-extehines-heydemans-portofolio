"use client";
import { useState } from "react";

type Item = { title: string; tag: string; href: string };

export default function AccordionGallery({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-2 h-[420px]">
      {items.map((item, i) => (
        <a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setActive(i)}
          className="relative rounded-xl overflow-hidden transition-all duration-500 ease-out flex items-end p-5 border border-[var(--line)]"
          style={{
            flex: active === i ? 4 : 1,
            background:
              active === i
                ? "linear-gradient(160deg, rgba(232,183,92,0.18), var(--card))"
                : "var(--card)",
          }}
        >
          <div className={active === i ? "opacity-100" : "opacity-60"}>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--amber)]">
              {item.tag}
            </span>
            <h3 className="font-display text-lg mt-1 whitespace-nowrap md:whitespace-normal">
              {item.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
}
