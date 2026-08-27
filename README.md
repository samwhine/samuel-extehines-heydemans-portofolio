# Samuel Extehines Heydemans — Portfolio

Personal portfolio site for Samuel Extehines Heydemans — Creative Staff & short-form video editor (Reels, Shorts, TikTok) working in the music industry, plus YouTube channel management, music direction, and server administration for [Legacy ID](https://www.behance.net/samuel-e-heydemans).

**Live:** [samuel-extehines-heydemans-portofolio.vercel.app](https://samuel-extehines-heydemans-portofolio.vercel.app)

Built on top of [rbp-portfolio](https://github.com/DavidHDev/rbp-portfolio) by David Haz — a Next.js template with a WebGL flow shader, morphing portrait, and Lenis smooth scroll — customized with real content, projects, and a couple of behavior changes (see [Customizations](#customizations-from-the-original-template) below).

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **motion/react** for animation, **Lenis** for smooth scroll
- **next-themes** for light/dark toggle
- Raw **WebGL** (OGL-style) flow shader for the background and contact card
- **Matter.js** for the physics-driven tech stack chips
- Deployed on **Vercel**

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---|---|
| \`npm run dev\` | Start development server |
| \`npm run build\` | Production build |
| \`npm run start\` | Start production server |
| \`npm run lint\` / \`lint:fix\` | ESLint |
| \`npm run format\` / \`format:check\` | Prettier |
| \`npm run typecheck\` | TypeScript check (\`tsc --noEmit\`) |

## Project Structure

\`\`\`
├── app/
│   ├── about/                 # /about — bio, polaroid strip, skills, stack, experience, education
│   ├── projects/              # /projects — full work grid
│   ├── page.tsx                # Home — hero, featured projects, contact card
│   ├── layout.tsx              # Root layout, fonts, JSON-LD Person schema
│   └── robots.ts / sitemap.ts  # SEO
├── components/
│   ├── hero/                   # Hero copy, CTAs, social links, portrait morph
│   ├── projects/                # Project cards (real Behance covers, no stock images)
│   ├── about/                   # Polaroid strip, skills, stack chips, experience, education
│   ├── contact/                 # Contact button (mailto) + contact card
│   ├── layout/                  # Nav, theme toggle, smooth scroll, page backdrop
│   └── shaders/                 # WebGL flow shader
├── lib/
│   └── metadata.ts              # siteConfig + SEO metadata helpers
└── public/
    ├── photo.png                 # Portrait
    ├── projects/                 # Real Behance project covers
    ├── about/                    # Polaroid strip photos (about-1..6.jpeg)
    └── og-image.png               # Open Graph / social share image
\`\`\`

## Customizations from the original template

Things that differ from the upstream \`rbp-portfolio\` template, in case this gets updated from upstream again later:

- **Theme defaults to light and doesn't persist across refreshes on purpose.** Most project covers are light/white images, so a saved dark preference makes the grid look inconsistent. The toggle in \`components/layout/nav.tsx\` still works within a session, but clears its own \`localStorage\` key (\`theme-v2\`) right after writing it, so every fresh page load falls back to \`defaultTheme="light"\` in \`components/layout/providers.tsx\`.
- **Polaroid strip entrance animation has no \`filter: blur()\`.** The original animates \`opacity\`, \`y\`, and \`blur\` together on an element with \`rounded-2xl overflow-hidden\`. Mobile Safari has a known issue clipping rounded corners correctly while animating \`filter\` + \`transform\` on the same layer — corners could render square and the animation could stutter on phones. Removed the blur step; same fade/slide otherwise.
- **Projects use real covers**, not template mockups — see \`public/projects/\`. \`components/projects/projects.tsx\` has a comment noting this.
- **Stack chips** (\`components/about/stack.tsx\`) use real tools; a couple (CapCut, Ableton) don't have entries in [Simple Icons](https://simpleicons.org), so those use Google's favicon service (\`s2/favicons\`) instead of a broken image.

## Updating Content

Content is co-located in each component — no separate CMS/content folder.

| What | Where |
|---|---|
| Site name, description, SEO, OG image path | \`lib/metadata.ts\` |
| Hero headline/copy | \`components/hero/hero.tsx\` |
| Social links (IG/Behance/LinkedIn) | \`components/hero/hero-social-links.tsx\`, \`components/contact/contact-card.tsx\` |
| Contact email | \`components/contact/contact-button.tsx\`, \`components/contact/contact-card.tsx\` |
| Projects | \`components/projects/projects.tsx\` (add a cover to \`public/projects/\` first) |
| Bio | \`app/about/page.tsx\` |
| Polaroid photos | \`components/about/polaroid-strip.tsx\` + \`public/about/\` |
| Skills | \`components/about/skills.tsx\` |
| Tools/stack chips | \`components/about/stack.tsx\` |
| Experience / Education | \`components/about/experience.tsx\`, \`components/about/education.tsx\` |

**After changing \`lib/metadata.ts\`'s \`url\`, or moving to a custom domain:** the Open Graph image, canonical URLs, and JSON-LD in \`app/layout.tsx\` all key off \`siteConfig.url\` — one place to update.

## SEO / Search

- \`app/robots.ts\` and \`app/sitemap.ts\` are dynamic and generated from \`siteConfig.url\`.
- \`app/layout.tsx\` includes a \`Person\` JSON-LD block (name, job title, links to Behance/LinkedIn/Instagram) to help Google understand this is a personal profile page.
- Being live and crawlable doesn't mean indexed immediately — submit the sitemap in [Google Search Console](https://search.google.com/search-console) and use "Request Indexing" on the homepage to speed that up.

## License

Built on the [rbp-portfolio](https://github.com/DavidHDev/rbp-portfolio) template, which is free to use in personal and commercial projects (not for resale/redistribution as a template). All content, photos, and project details in this repo are personal to Samuel Extehines Heydemans.
