"use client";

export default function LogoLoop({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative py-6 border-y border-[var(--line)]">
      <div className="flex gap-12 animate-[scroll_25s_linear_infinite] w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm uppercase tracking-widest text-[var(--ink-dim)] whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
