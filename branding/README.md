# vibeOS Branding Assets

> Complete brand identity and marketing assets for vibeOS.

---

## Structure

```
branding/
├── identity/               ← Visual Identity Kit
│   ├── BRAND-GUIDELINES.md ← Core brand strategy & voice
│   ├── COLORS.md           ← Full color system
│   ├── TYPOGRAPHY.md       ← Type scale & fonts
│   ├── logo-primary.svg    ← Full logo (icon + wordmark)
│   ├── logo-icon.svg       ← Standalone icon
│   ├── logo-wordmark.svg   ← Wordmark only (dark bg)
│   └── logo-wordmark-light.svg ← Wordmark (light bg)
│
├── assets/                 ← Brand Assets
│   ├── social-banner-twitter.svg   ← Twitter/X (1200x630)
│   ├── social-banner-linkedin.svg  ← LinkedIn (1584x396)
│   ├── social-preview-github.svg   ← GitHub preview (1280x640)
│   ├── readme-header.svg           ← README header
│   ├── readme-workflow.svg         ← Workflow diagram
│   └── readme-before-after.svg     ← Before/after comparison
│
└── landing-page/           ← Landing Page
    ├── index.html          ← Complete HTML
    └── styles.css          ← All CSS styles
```

---

## Quick Start

### Use the logo
```html
<img src="branding/identity/logo-primary.svg" alt="vibeOS">
```

### Use brand colors
```css
:root {
  --accent-gradient: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  --bg-black: #0A0A0B;
  --text-primary: #F9FAFB;
}
```

### Preview landing page
```bash
cd branding/landing-page
open index.html  # or use live-server
```

---

## Design Tokens

### Colors at a Glance

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-indigo` | `#6366F1` | Primary accent |
| `--accent-violet` | `#8B5CF6` | Gradient end |
| `--bg-black` | `#0A0A0B` | Main background |
| `--text-primary` | `#F9FAFB` | Primary text |

### Role Colors

| Role | Color |
|------|-------|
| Engineer | `#10B981` (Green) |
| Product | `#3B82F6` (Blue) |
| Designer | `#EC4899` (Pink) |
| Analyst | `#F59E0B` (Amber) |

---

## Usage Guidelines

1. **Logo** — Use primary logo for most cases, icon-only for favicons/avatars
2. **Colors** — Dark mode is default; maintain contrast ratios
3. **Typography** — Inter for UI, JetBrains Mono for code
4. **Voice** — Direct, confident, builder-centric, no fluff

See [BRAND-GUIDELINES.md](identity/BRAND-GUIDELINES.md) for full details.

---

*Think deeply. Build simply. Let systems carry the weight.*
