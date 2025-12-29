# vibeOS Landing Page

> Premium landing page built with Vite + React + TypeScript + Tailwind CSS

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Vite** — Fast build tool
- **React 18** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first CSS
- **Framer Motion** — Animations
- **React Intersection Observer** — Scroll reveal

## Project Structure

```
src/
├── components/
│   ├── layout/        ← Navbar, Footer
│   ├── sections/      ← Hero, Problems, Features, Workflow, Roles, CTA
│   ├── ui/            ← Button, Card, Terminal, Logo, SectionHeader
│   └── shared/        ← ScrollReveal, GlowEffect
├── hooks/             ← useScrollProgress, useTypewriter, useCopyToClipboard
├── lib/               ← animations.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Design System

Colors, typography, and animations are defined in:
- `tailwind.config.ts` — Design tokens
- `src/index.css` — Global styles
- `src/lib/animations.ts` — Framer Motion variants

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode by default
- ✅ Scroll reveal animations
- ✅ Micro-interactions on hover
- ✅ Terminal typewriter effect
- ✅ Copy to clipboard
- ✅ Reduced motion support
- ✅ Semantic HTML & accessibility

---

*Think deeply. Build simply. Let systems carry the weight.*
