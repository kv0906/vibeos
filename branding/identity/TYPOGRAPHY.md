# vibeOS Typography System

> Technical credibility meets readability.

---

## Type Scale

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| **Display** | 48px / 3rem | 700 | 1.1 | Hero headlines |
| **H1** | 36px / 2.25rem | 600 | 1.2 | Page titles |
| **H2** | 28px / 1.75rem | 600 | 1.3 | Section headers |
| **H3** | 22px / 1.375rem | 600 | 1.4 | Subsections |
| **H4** | 18px / 1.125rem | 600 | 1.4 | Card titles |
| **Body** | 16px / 1rem | 400 | 1.6 | Paragraphs |
| **Small** | 14px / 0.875rem | 400 | 1.5 | Captions, metadata |
| **Tiny** | 12px / 0.75rem | 500 | 1.4 | Labels, badges |

---

## Font Families

### Primary: Inter

Clean, modern sans-serif for UI and body text.

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Weights used:**
- 400 Regular — Body text
- 500 Medium — Emphasis, labels
- 600 Semibold — Headings
- 700 Bold — Display, strong emphasis

### Monospace: JetBrains Mono

For code, technical content, and terminal-style elements.

```css
font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
```

**Weights used:**
- 400 Regular — Code blocks
- 500 Medium — Inline code emphasis

---

## CSS Implementation

```css
/* Base typography */
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
}

body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: #F9FAFB;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Headings */
h1, h2, h3, h4 {
  font-weight: 600;
  letter-spacing: -0.02em;
}

h1 { font-size: 2.25rem; line-height: 1.2; }
h2 { font-size: 1.75rem; line-height: 1.3; }
h3 { font-size: 1.375rem; line-height: 1.4; }
h4 { font-size: 1.125rem; line-height: 1.4; }

/* Display */
.display {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

/* Code */
code, pre, .mono {
  font-family: var(--font-mono);
}

code {
  font-size: 0.875em;
  padding: 0.125em 0.375em;
  background: #27272A;
  border-radius: 4px;
}

pre {
  font-size: 0.875rem;
  line-height: 1.6;
  padding: 1rem;
  background: #18181B;
  border-radius: 8px;
  overflow-x: auto;
}
```

---

## Tailwind Config

```javascript
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
    },
    fontSize: {
      'tiny': ['0.75rem', { lineHeight: '1.4' }],
      'small': ['0.875rem', { lineHeight: '1.5' }],
      'base': ['1rem', { lineHeight: '1.6' }],
      'lg': ['1.125rem', { lineHeight: '1.4' }],
      'xl': ['1.375rem', { lineHeight: '1.4' }],
      '2xl': ['1.75rem', { lineHeight: '1.3' }],
      '3xl': ['2.25rem', { lineHeight: '1.2' }],
      'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
    },
  }
}
```

---

## Usage Guidelines

### Do
- Use Inter for all UI elements and body copy
- Use monospace for code, commands, and technical identifiers
- Maintain consistent hierarchy with the type scale
- Use semibold (600) for headings, regular (400) for body

### Don't
- Mix more than 2 font families
- Use weights outside the defined set
- Set body text smaller than 14px
- Use all caps for long text (OK for short labels)

---

## Web Font Loading

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

*Typography creates hierarchy. Hierarchy creates clarity.*
