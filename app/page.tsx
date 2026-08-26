import Image from "next/image";
import TimelineNav from "@/components/TimelineNav";
import GlowOrb from "@/components/GlowOrb";
import BlurText from "@/components/BlurText";
import SpecularButton from "@/components/SpecularButton";
import BorderGlow from "@/components/BorderGlow";
import RotatingText from "@/components/RotatingText";
import LogoLoop from "@/components/LogoLoop";
import AccordionGallery from "@/components/AccordionGallery";

const links = [
  { label: "Behance", href: "https://www.behance.net/samuel-e-heydemans" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-extehines-heydemans/" },
  { label: "GitHub", href: "https://github.com/samwhine" },
  { label: "Instagram", href: "https://instagram.com/samuelheydemans" },
];

const work = [
  { title: "Ade Govinda (Professional Editing)", tag: "Video Editing", href: "https://www.behance.net/gallery/254775341/Ade-Govinda-(Professional-Editing)" },
  { title: "Nelly Syara (MEME, Mentality, Funny Editings)", tag: "Video Editing", href: "https://www.behance.net/gallery/254791715/Nelly-Syara-(MEME-Mentalilty-Funny-Editings)" },
  { title: "Sidegigx", tag: "2D Animation", href: "https://www.behance.net/gallery/254792361/Sidegigx-(2D-Animation)" },
  { title: "Proctologyku", tag: "2D Animation", href: "https://www.behance.net/gallery/254792183/Proctologyku-(2D-Animation)" },
  { title: "Tebar Pesona", tag: "Promotional Content", href: "https://www.behance.net/gallery/254792067/Tebar-Pesona-(Promotional-Content)" },
  { title: "Music Certificate", tag: "Music", href: "https://www.behance.net/gallery/254794941/Music-Certificate" },
  { title: "Server Administration", tag: "Technical / IT", href: "https://www.behance.net/gallery/254816347/Server-Administration" },
];

const experience = [
  { range: "Apr 2024 — Present", role: "Creative Staff / Video Editor / YouTube Channel Manager", org: "Legacy ID", detail: "Edit artist promotional content, manage the label's YouTube channel, and administer server infrastructure (File Browser, Cloudflare Tunnel)." },
  { range: "2023 — Present", role: "Music Director", org: "GMS Kelapa Gading", detail: "Arrange worship music and play piano, bass, and drums for the church's music ministry." },
  { range: "2024 — Present", role: "Teknik Informatika (Computer Science)", org: "Universitas Mercu Buana", detail: "Evening classes (kelas karyawan), currently in semester 4, alongside full-time creative work." },
];

const tools = ["CapCut", "OBS Studio", "Adobe Premiere", "File Browser", "Cloudflare Tunnel", "Next.js"];

export default function Home() {
  return (
    <>
      <TimelineNav />
      <main className="pt-14 relative">
        {/* HERO */}
        <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-32 md:pt-36 md:pb-48 text-center">
          <GlowOrb />
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
            <BlurText text="Samuel Extehines Heydemans" />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--ink-dim)] max-w-xl mx-auto">
            Creative Staff &amp; Video Editor — also{" "}
            <RotatingText
              words={["Music Director", "YouTube Manager", "Server Admin", "Arranger"]}
              className="text-[var(--teal)]"
            />
          </p>
          <div className="mt-10 flex justify-center">
            <SpecularButton href="https://www.behance.net/samuel-e-heydemans">
              See My Work ↗
            </SpecularButton>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4 relative">
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

        {/* LOGO LOOP */}
        <LogoLoop items={tools} />

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-5xl px-6 py-20 border-b border-[var(--line)]">
          <p className="font-mono text-xs text-[var(--teal)] uppercase tracking-widest mb-4">About</p>
          <p className="font-display text-2xl md:text-3xl leading-relaxed max-w-3xl">
            I manage YouTube channels, edit promotional content for artists, and
            help shape creative direction for talent under a record label. I also
            serve as a Music Director — arranging worship music and playing
            piano, bass, and drums — and handle server infrastructure behind the
            scenes.
          </p>
        </section>

        {/* WORK — accordion gallery */}
        <section id="work" className="mx-auto max-w-5xl px-6 py-20 border-t border-[var(--line)]">
          <p className="font-mono text-xs text-[var(--teal)] uppercase tracking-widest mb-8">Work</p>
          <AccordionGallery items={work.slice(0, 5)} />
          <div className="grid gap-4 sm:grid-cols-2 mt-4">
            {work.slice(5).map((w) => (
              <BorderGlow key={w.title} className="p-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--amber)]">{w.tag}</span>
                <h3 className="font-display text-xl mt-3">
                  <a href={w.href} target="_blank" rel="noreferrer">{w.title}</a>
                </h3>
              </BorderGlow>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <SpecularButton href="https://www.behance.net/samuel-e-heydemans">
              Visit Full Behance Profile ↗
            </SpecularButton>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-5xl px-6 py-20 border-t border-[var(--line)]">
          <p className="font-mono text-xs text-[var(--teal)] uppercase tracking-widest mb-8">Experience</p>
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
        <section id="contact" className="mx-auto max-w-5xl px-6 py-24 border-t border-[var(--line)] text-center">
          <p className="font-mono text-xs text-[var(--teal)] uppercase tracking-widest mb-8">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl mx-auto">
            <BlurText text="Let's work on something together." />
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <SpecularButton key={l.label} href={l.href} className="!bg-transparent !text-[var(--ink)] border border-[var(--line)]">
                {l.label} ↗
              </SpecularButton>
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
