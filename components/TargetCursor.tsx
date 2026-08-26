"use client";
import { useEffect, useRef, useState } from "react";

export default function TargetCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function move(e: MouseEvent) {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button"));
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [visible]);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s" }}
    >
      <div
        className="rounded-full border transition-all duration-150 ease-out"
        style={{
          width: hovering ? 48 : 20,
          height: hovering ? 48 : 20,
          borderColor: "var(--amber)",
          borderWidth: hovering ? 2 : 1,
          background: hovering ? "rgba(232,183,92,0.12)" : "transparent",
        }}
      />
    </div>
  );
}
