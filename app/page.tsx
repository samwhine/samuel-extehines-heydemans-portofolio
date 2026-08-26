import Image from "next/image";
import TimelineNav from "@/components/TimelineNav";
import Waveform from "@/components/Waveform";

const links = [
  { label: "Behance", href: "https://www.behance.net/samuel-e-heydemans" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-extehines-heydemans/" },
  { label: "GitHub", href: "https://github.com/samwhine" },
  { label: "Instagram", href: "https://instagram.com/samuelheydemans" },
];

const work = [
  {
    title: "Ade Govinda (Professional Editing)",
    tag: "Video Editing",
    href: "https://www.behance.net/gallery/254775341/Ade-Govinda-(Professional-Editing)",
  },
  {
    title: "Nelly Syara (MEME, Mentality, Funny Editings)",
    tag: "Video Editing",
    href: "https://www.behance.net/gallery/254791715/Nelly-Syara-(MEME-Mentalilty-Funny-Editings)",
  },
  {
    title: "Sidegigx",
    tag: "2D Animation",
    href: "https://www.behance.net/gallery/254792361/Sidegigx-(2D-Animation)",
  },
  {
    title: "Proctologyku",
    tag: "2D Animation",
    href: "https://www.behance.net/gallery/254792183/Proctologyku-(2D-Animation)",
  },
  {
    title: "Tebar Pesona",
    tag: "Promotional Content",
    href: "https://www.behance.net/gallery/254792067/Tebar-Pesona-(Promotional-Content)",
  },
  {
    title: "Music Certificate",
    tag: "Music",
    href: "https://www.behance.net/gallery/254794941/Music-Certificate",
  },
  {
    title: "Server Administration",
    tag: "Technical / IT",
    href: "https://www.behance.net/gallery/254816347/Server-Administration",
  },
];

const experience = [
  {
    range: "Apr 2024 — Present",
    role: "Creative Staff / Video Editor / YouTube Channel Manager",
    org: "Legacy ID",
    detail:
      "Edit artist promotional content, manage the label's YouTube channel, and administer server infrastructure (File Browser, Cloudflare Tunnel).",
  },
  {
    range: "2023 — Present",
    role: "Music Director",
    org: "GMS Kelapa Gading",
    detail: "Arrange worship music and play piano, bass, and drums for the church's music ministry.",
  },
  {
    range: "2024 — Present",
    role: "Teknik Informatika (Computer Science)",
    org: "Universitas Mercu Buana",
    detail: "Evening classes (kelas karyawan), currently in semester 4, alongside full-time creative work.",
  },
];

export default function Home() {
  return (
    <>
      <TimelineNav />
      <main className="pt-14">
        {/* HERO */}
        <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
            <div>
              <p className="font-mono text-xs text-[var(--amber)] tracking-widest mb-6">
                REC ● 00:00:00:00
              </p>
              <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
                Samuel Extehines Heydemans
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--ink-dim)] max-w-xl">
                Creative Staff &amp; Video Editor working in the music industry —
                cutting footage by day, arranging worship music by night.
              </p>
              <Waveform className="mt-10" />
            </div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-[var(--line)] shrink-0 justify-self-start md:justify-self-end">
              <Image src="/photo.png" alt="Samuel Extehines Heydemans" fill className="object-cover" priority />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-wider border border-[var(--line)] rounded-full px-4 py-2 hover:border-[var(--amber)] hover:text-[var(--amber)] transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-5xl px-6 py-20 border-t border-[var(--line)]">
          <p className="font-mono text-xs text-[var(--teal)] mb-4">00:00 / About</p>
          <p className="font-display text-2xl md:text-3xl leading-relaxed max-w-3xl">
            I manage YouTube channels, edit promotional content for artists, and
            help shape creative direction for talent under a record label.
            Outside of editing, I also serve as a Music Director — arranging
            worship music and playing piano, bass, and drums. On the technical
            side, I handle server infrastructure and admin work behind the
            scenes.
          </p>
          <p className="mt-6 text-[var(--ink-dim)] max-w-2xl">
            Based in Jakarta, currently studying Computer Science while working
            full-time in the creative field.
          </p>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-5xl px-6 py-20 border-t border-[var(--line)]">
          <p className="font-mono text-xs text-[var(--teal)] mb-8">00:14 / Work</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {work.map((w) => (
              <a
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-[var(--line)] bg-[var(--card)] p-6 hover:border-[var(--amber)]/60 transition-colors"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--amber)]">
                  {w.tag}
                </span>
                <h3 className="font-display text-xl mt-3">{w.title}</h3>
                <span className="mt-4 inline-block text-xs font-mono text-[var(--ink-dim)] group-hover:text-[var(--amber)]">
                  View on Behance ↗
                </span>
              </a>
            ))}
          </div>
          <a
            href="https://www.behance.net/samuel-e-heydemans"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block font-mono text-xs uppercase tracking-wider bg-[var(--amber)] text-[#0e0e12] rounded-full px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Visit full Behance profile ↗
          </a>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-5xl px-6 py-20 border-t border-[var(--line)]">
          <p className="font-mono text-xs text-[var(--teal)] mb-8">00:31 / Experience</p>
          <div className="space-y-8">
            {experience.map((e) => (
              <div key={e.role} className="grid md:grid-cols-[140px_1fr] gap-2 md:gap-8 border-b border-[var(--line)] pb-8">
                <span className="font-mono text-xs text-[var(--ink-dim)]">{e.range}</span>
                <div>
                  <h3 className="font-display text-lg">{e.role}</h3>
                  <p className="text-sm text-[var(--amber)] mt-1">{e.org}</p>
                  <p className="mt-2 text-sm text-[var(--ink-dim)] max-w-xl">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-24 border-t border-[var(--line)]">
          <p className="font-mono text-xs text-[var(--teal)] mb-8">00:47 / Contact</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl">
            Let&apos;s work on something together.
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-wider border border-[var(--line)] rounded-full px-4 py-2 hover:border-[var(--amber)] hover:text-[var(--amber)] transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
          <p className="mt-16 font-mono text-[11px] text-[var(--ink-dim)]">
            © {new Date().getFullYear()} Samuel Extehines Heydemans
          </p>
        </section>
      </main>
    </>
  );
}
