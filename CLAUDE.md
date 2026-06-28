@AGENTS.md

# hapiss.dev — portfolio rebuild

The full brief, design language, content strategy, and collaboration rules live
in `docs/`. **Read these before working:**

- `docs/AGENTS.md` — how to collaborate: think → plan → **get approval** → implement.
- `docs/PROJECT.md` · `docs/DESIGN.md` · `docs/CONTENT.md` · `docs/TECH.md` — vision, design, copy, and tech direction.

## Conventions

- **Stack:** Next.js (App Router) · TypeScript strict · Tailwind CSS v4. Prefer Server Components; mark Client Components with `"use client"`.
- **Theming:** `next-themes` (class strategy), **dark is default**. Tokens live in `app/globals.css` (`--ground`, `--surface`, `--hairline`, `--accent`, …) and are exposed as Tailwind utilities: `bg-ground`, `bg-surface`, `border-hairline`, `text-foreground`, `text-muted`, `text-accent`. Never hardcode hex in components.
- **Type:** Geist Sans (body/display) + Geist Mono (`font-mono`, used for eyebrows, dates, tags).
- **Icons:** `lucide-react` only.
- **Content/UI separation:** typed content modules in `content/*` feed presentational components (CMS-ready). UI primitives in `components/ui`, sections in `components/sections`.
- **Dependencies:** approved set is `lucide-react` + `next-themes`. Ask before adding any other package.
- **Motion:** CSS/Tailwind only; honor `prefers-reduced-motion`.
