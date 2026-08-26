export default function Waveform({ className = "" }: { className?: string }) {
  const bars = [4, 8, 14, 22, 30, 20, 12, 26, 34, 18, 10, 24, 16, 8, 5, 12, 20, 28, 16, 6];
  return (
    <div className={`flex items-end gap-[3px] h-10 ${className}`} aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-[var(--teal)]/60"
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}
