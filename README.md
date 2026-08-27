# Samuel Extehines Heydemans — Portfolio

![Preview](public/og-image.png)

Short-form editor & Creative Staff working in the music industry. I edit Reels/Shorts/TikTok content, manage YouTube channels, direct music, and handle the server infrastructure running behind the scenes — currently working with **Legacy ID** and its artists.

**Live site:** [samuel-extehines-heydemans-portofolio.vercel.app](https://samuel-extehines-heydemans-portofolio.vercel.app)
**Behance:** [behance.net/samuel-e-heydemans](https://www.behance.net/samuel-e-heydemans)
**LinkedIn:** [linkedin.com/in/samuel-extehines-heydemans](https://www.linkedin.com/in/samuel-extehines-heydemans/)
**Contact:** samuel.heydemanss@gmail.com

## About this repo

[#about-this-repo](#about-this-repo)

This is the source code for my personal portfolio site, built with Next.js and Tailwind CSS. It features a custom WebGL flow shader background, a magnetic morphing portrait, Lenis smooth scroll, and a minimal black-and-white design system.

## Features

[#features](#features)

- ✅ **Next.js** with App Router
- ✅ **TypeScript** (strict mode)
- ✅ **Tailwind CSS v4** with token-driven theming
- ✅ **Dark Mode** via next-themes (class-based) with view-transition reveal
- ✅ **Motion** via motion/react with reduced-motion support
- ✅ **WebGL Flow Shader** — aspect-correct circular fade baked into the fragment, theme-aware bg sync
- ✅ **Lenis Smooth Scroll** with anchor-link integration
- ✅ **Portrait Morph** — hover-driven image swap with magnetic cursor follow
- ✅ **Polaroid Strip, Skills, Stack, Experience, Education** — co-located content sections for the `/about` route
- ✅ **Physics-driven Stack** — draggable tech chips powered by Matter.js
- ✅ **Projects Grid** — real project covers pulled from Behance, hover lift and image zoom
- ✅ **Contact Card** — single-click copy email with hover content swap, embedded shader
- ✅ **Animated Pill Nav** — spring-animated active indicator, hydration-safe theme toggle
- ✅ **SEO Ready** — metadata, Open Graph, Twitter cards, sitemap, robots
- ✅ **Accessibility** — skip links, focus rings, ARIA labels, `prefers-reduced-motion` guards
- ✅ **Edge Compatible** — no Node-only APIs

## Sections

[#sections](#sections)

- **Nav** — Fixed pill nav with spring-animated active indicator and hydration-safe theme toggle
- **Hero** — WebGL flow shader backdrop, headline, morphing portrait, magnetic CTAs
- **About preview** — short excerpt on the homepage linking through to the full About page
- **Projects** — Grid of project cards with hover lift, image zoom, and links out to Behance
- **About** — Polaroid strip, skills grid, interactive Matter.js stack chips, expandable experience timeline, education list
- **Contact Card** — Embedded shader, copy-to-clipboard email, secondary social CTAs

## Getting Started

[#getting-started](#getting-started)

### Install dependencies

```
npm install
```

### Run development server

```
npm run dev
```

Open <http://localhost:3000> in your browser.

## Scripts

[#scripts](#scripts)

| Command                 | Description                    |
| ------------------------ | ------------------------------- |
| `npm run dev`            | Start development server        |
| `npm run build`          | Build for production            |
| `npm run start`          | Start production server         |
| `npm run lint`           | Run ESLint                      |
| `npm run lint:fix`       | Fix ESLint errors               |
| `npm run format`         | Format code with Prettier       |
| `npm run format:check`   | Check code formatting           |
| `npm run typecheck`      | Run TypeScript type checking    |

## Project Structure

[#project-structure](#project-structure)

```
├── app/
│   ├── about/                       # About route
│   ├── projects/                    # Projects route
│   ├── globals.css                  # Design tokens, frame, project-card styles
│   ├── layout.tsx                   # Root layout with providers, nav, backdrop
│   ├── page.tsx                     # Home page
│   ├── robots.ts                    # Dynamic robots.txt
│   ├── sitemap.ts                   # Dynamic sitemap
│   ├── icon.svg                     # Favicon
│   └── apple-icon.svg               # Apple touch icon
├── components/
│   ├── about/
│   │   ├── about-preview.tsx        # Short About excerpt shown on the homepage
│   │   ├── education.tsx            # Education list with bordered logo squares
│   │   ├── experience.tsx           # Expandable timeline with fade-mask collapse
│   │   ├── polaroid-strip.tsx       # Tilted polaroid photos with magnetic tilt
│   │   ├── skills.tsx               # Skills grid
│   │   └── stack.tsx                # Matter.js physics-driven tech chips
│   ├── contact/
│   │   ├── contact-button.tsx       # Click-to-copy email button
│   │   ├── contact-card.tsx         # Shader-backed contact card
│   │   └── contact-card-ctas.tsx    # Social CTAs
│   ├── hero/
│   │   ├── hero.tsx                 # Hero layout and copy
│   │   ├── hero-ctas.tsx            # Magnetic primary/secondary CTAs
│   │   ├── hero-social-links.tsx    # Social links under the hero copy
│   │   └── portrait-morph.tsx       # Hover-swap portrait with magnetic follow
│   ├── layout/
│   │   ├── nav.tsx                  # Pill nav with theme toggle
│   │   ├── page-backdrop.tsx        # Site-wide shader backdrop
│   │   ├── providers.tsx            # Theme + smooth-scroll providers
│   │   ├── skip-to-content.tsx      # Skip link for a11y
│   │   └── smooth-scroll.tsx        # Lenis smooth-scroll wrapper
│   ├── projects/
│   │   └── projects.tsx             # Projects grid — covers saved locally under /public/projects
│   ├── shaders/
│   │   └── shader-flow.tsx          # WebGL flow shader (raw OGL)
│   └── ui/
│       ├── dotted-pattern.tsx       # Shared dotted texture
│       └── motion-primitives.tsx    # FadeIn, ScaleUnblur entrance helpers
├── lib/
│   ├── config.ts                    # Site config
│   ├── metadata.ts                  # SEO metadata utilities
│   └── motion.tsx                   # Motion components & hooks
└── public/
    ├── about/                       # Polaroid strip photos
    ├── logos/                       # Company/school logos for the Experience & Education lists
    ├── projects/                    # Project cover images (synced manually from Behance)
    ├── photo.png                    # Default portrait
    ├── photo-hover.png              # Hover portrait
    ├── og-image.png                 # Open Graph / preview image
    ├── linkedin.svg                 # Social icon
    └── site.webmanifest             # PWA manifest
```

## Content Workflow

[#content-workflow](#content-workflow)

Behance's API has been unavailable for new integrations since 2021, so project covers don't auto-sync. When publishing something new on Behance:

1. Save the cover image to `public/projects/`
2. Add an entry to the `PROJECTS` array in `components/projects/projects.tsx`

## Design System

[#design-system](#design-system)

### Colors

- `--background` / `--foreground` — Page background and text
- `--muted` / `--muted-foreground` — Subtle surfaces and secondary text
- `--border` — Hairline rails and dividers
- `--ring` — Focus rings
- `--frame` — Site-frame color (matches `--background`)

The palette is strict black and white. No accent or semantic color hues are used.

### Typography

- **Sans:** Geist Sans
- **Mono:** Geist Mono
- **Serif:** Fraunces (used selectively for display headlines)

## Accessibility

[#accessibility](#accessibility)

- Skip-to-content link
- Visible focus rings on all interactive elements
- ARIA labels on toggles, social links, and the contact button
- `prefers-reduced-motion` guards on the theme toggle view-transition
- Shaders pause when offscreen and on tab hide
- Proper heading hierarchy (single `<h1>` per page)
- WCAG 2.1 AA contrast compliance in both themes

## Performance

[#performance](#performance)

- WebGL context cleanup on unmount via `WEBGL_lose_context`
- Single mount-once shader effect; uniforms updated via refs
- Shaders pause when offscreen (`IntersectionObserver`) and on tab hide (`visibilitychange`)
- DPR capped to keep shading cost bounded on retina displays
- Matter.js is dynamic-imported inside the stack section
- Lenis smooth scroll runs on a single rAF loop
- Edge-compatible runtime

## Connect

[#connect](#connect)

- 📧 [samuel.heydemanss@gmail.com](mailto:samuel.heydemanss@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/samuel-extehines-heydemans/)
- 🎨 [Behance](https://www.behance.net/samuel-e-heydemans)
- 📷 [Instagram](https://instagram.com/samuelheydemans)

---

© 2026 Samuel Extehines Heydemans. Built with Next.js.
