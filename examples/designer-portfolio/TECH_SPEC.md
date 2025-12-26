# Portfolio Website — Tech Spec

## Stack

- **Framework:** Astro (static, fast, good for portfolio)
- **Styling:** Tailwind CSS
- **Components:** Custom (simple enough)
- **Animations:** Framer Motion (subtle)
- **Icons:** Lucide
- **Hosting:** Vercel
- **Domain:** linhnguyen.design (to buy)

## Why Astro?

- Static = fast loading (good for first impressions)
- Markdown for case studies (easy to update)
- No backend complexity
- Great Lighthouse scores

## Architecture

```
/
├── src/
│   ├── layouts/
│   │   └── Base.astro         ← Shared layout, nav, footer
│   ├── pages/
│   │   ├── index.astro        ← Home (hero + work grid + about + contact)
│   │   └── work/
│   │       ├── [slug].astro   ← Dynamic case study pages
│   │       └── project-1.md   ← Case study content
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── WorkGrid.astro
│   │   ├── CaseStudy.astro
│   │   ├── About.astro
│   │   └── Contact.astro
│   └── styles/
│       └── global.css
├── public/
│   └── images/                ← Project screenshots
└── astro.config.mjs
```

## Key Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| SSG vs SSR | SSG (Astro) | Portfolio is static, SEO matters |
| CSS approach | Tailwind | Fast to style, consistent |
| Animation lib | Framer Motion | Declarative, not heavy |
| Image handling | Astro Image | Optimized, lazy loading |
| Contact form | Formspree or mailto | No backend needed |

## Design Tokens

```css
/* Colors */
--bg-primary: #0a0a0a;        /* Dark mode default */
--bg-secondary: #141414;
--text-primary: #fafafa;
--text-secondary: #a1a1a1;
--accent: #3b82f6;            /* Blue for links/buttons */

/* Spacing - 4px base */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;

/* Typography */
--font-display: 'Inter', sans-serif;
--font-body: 'Inter', sans-serif;
```

## Phases

### Phase 1: Foundation (Day 1-2)
- [ ] Setup Astro + Tailwind
- [ ] Create base layout
- [ ] Build Hero component
- [ ] Deploy to Vercel (empty site live)

### Phase 2: Content Structure (Day 3-4)
- [ ] Build WorkGrid component
- [ ] Create case study template
- [ ] Add placeholder content
- [ ] Mobile responsive pass

### Phase 3: Case Studies (Day 5-8)
- [ ] Write case study 1
- [ ] Write case study 2
- [ ] Write case study 3
- [ ] Add real images

### Phase 4: Polish (Day 9-12)
- [ ] Add animations (subtle entrance, hover states)
- [ ] Dark/light mode toggle
- [ ] About section
- [ ] Contact section
- [ ] SEO meta tags
- [ ] Favicon, OG images

### Phase 5: Launch (Day 13-14)
- [ ] Buy domain
- [ ] Final QA
- [ ] Share with friends for feedback
- [ ] Launch!

---
*Status: Ready to Build*
