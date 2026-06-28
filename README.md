# hapiss.dev

Personal portfolio of **Muhammad Hafizh Fadhlurrahman** — a frontend engineer building maintainable web applications for banking, enterprise, and internal business systems.

🔗 **Live:** [hapiss.dev](https://hapiss.dev)

A complete rebuild focused on clarity, performance, and accessibility — designed to feel intentional rather than templated.

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router) with React 19
- **Language:** TypeScript (strict mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with CSS-variable design tokens
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) — dark/light, no flash on load
- **Icons:** [lucide-react](https://lucide.dev) + a couple of hand-rolled brand SVGs
- **Type:** Geist Sans & Geist Mono, self-hosted via `next/font`
- **Hosting:** [Vercel](https://vercel.com)

## What's notable

A few decisions worth calling out, since they shaped the codebase:

- **Server-first.** Almost everything is a React Server Component shipping zero JS. Interactivity is isolated into four small client components (nav, theme toggle, theme provider, contact form).
- **Content / UI separation.** All copy and data live in typed modules under [`content/`](content), feeding presentational components — ready for a CMS swap without touching the UI.
- **Design tokens, not hardcoded colors.** A warm-neutral palette with a single amber accent is defined once in [`app/globals.css`](app/globals.css) and exposed as Tailwind utilities (`bg-ground`, `text-muted`, `text-accent`, …). Dark and light share one token contract.
- **SEO built in.** Metadata API, a generated Open Graph image ([`next/og`](https://nextjs.org/docs/app/api-reference/functions/image-response)), `sitemap.xml`, `robots.txt`, a canonical URL, and JSON-LD `Person` structured data.
- **Accessibility as a baseline.** Skip link, labeled form fields with live status, semantic headings, visible focus states, WCAG-AA contrast, and full `prefers-reduced-motion` support.
- **Motion without dependencies.** Scroll reveals use pure-CSS scroll-driven animations — no animation library, and they degrade gracefully where unsupported.

## Getting started

**Prerequisites:** Node.js **20.9+**

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
#   then add your Web3Forms key (see https://web3forms.com)

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Public access key for the contact form ([Web3Forms](https://web3forms.com)). Safe to expose — it's client-side by design. |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
app/                  Routes, root layout, metadata & SEO files
                      (sitemap, robots, opengraph-image, icons, not-found)
components/
  layout/             Navbar (scroll-spy) and footer
  sections/           Hero, About, Experience, Projects, Skills, Education, Contact
  ui/                 Reusable primitives (button, container, section, …)
  theme-provider.tsx  Thin client wrapper around next-themes
content/              Typed content modules (profile, experience, projects, …)
lib/                  Site config and helpers
public/               Static assets (portrait, CV)
docs/                 Project brief, design language, and content strategy
```

## Deployment

Deployed on Vercel — pushes to the default branch deploy automatically. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in the project's environment variables so the contact form works in production.

---

© 2026 Muhammad Hafizh Fadhlurrahman. Built with Next.js & Tailwind CSS.
