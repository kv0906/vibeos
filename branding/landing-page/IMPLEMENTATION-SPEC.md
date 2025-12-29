# vibeOS Landing Page — Implementation Spec

> Full implementation guide for Vite.js + Tailwind CSS + React/TypeScript

---

## Overview

Build a premium, dark-mode landing page for vibeOS with micro-interactions, scroll animations, and a polished developer aesthetic.

**Tech Stack:**
- Vite.js (React + TypeScript)
- Tailwind CSS v3.4+
- Framer Motion (animations)
- React Intersection Observer (scroll reveal)

**Design References:**
- [branding/identity/COLORS.md](../identity/COLORS.md)
- [branding/identity/TYPOGRAPHY.md](../identity/TYPOGRAPHY.md)
- [branding/landing-page/index.html](index.html) — Static reference

---

## 1. Project Setup

### Initialize Project

```bash
npm create vite@latest vibeos-landing -- --template react-ts
cd vibeos-landing
npm install
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion react-intersection-observer
npx tailwindcss init -p
```

### Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vibe: {
          black: '#0A0A0B',
          dark: '#0F0F10',
          elevated: '#18181B',
          border: '#27272A',
        },
        accent: {
          indigo: '#6366F1',
          violet: '#8B5CF6',
          'indigo-light': '#818CF8',
          'violet-light': '#A78BFA',
        },
        text: {
          primary: '#F9FAFB',
          secondary: '#A1A1AA',
          muted: '#71717A',
          disabled: '#52525B',
        },
        role: {
          engineer: '#10B981',
          product: '#3B82F6',
          designer: '#EC4899',
          analyst: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        tiny: ['0.75rem', { lineHeight: '1.4' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.4' }],
        xl: ['1.375rem', { lineHeight: '1.4' }],
        '2xl': ['1.75rem', { lineHeight: '1.3' }],
        '3xl': ['2.25rem', { lineHeight: '1.2' }],
        display: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'typing': 'typing 2s steps(40) forwards',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.06' },
          '50%': { opacity: '0.12' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'subtle-gradient': 'linear-gradient(180deg, #0A0A0B 0%, #0F0F10 100%)',
      },
    },
  },
  plugins: [],
}

export default config
```

### Global CSS

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-vibe-black text-text-primary font-sans antialiased;
  }
  
  ::selection {
    @apply bg-accent-violet/30;
  }
}

@layer components {
  .gradient-text {
    @apply bg-accent-gradient bg-clip-text text-transparent;
  }
  
  .glass-effect {
    @apply bg-vibe-black/80 backdrop-blur-xl;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## 2. Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problems.tsx
│   │   ├── Features.tsx
│   │   ├── Workflow.tsx
│   │   ├── Roles.tsx
│   │   └── CTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Terminal.tsx
│   │   ├── SectionHeader.tsx
│   │   └── Logo.tsx
│   └── shared/
│       ├── ScrollReveal.tsx
│       └── GlowEffect.tsx
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useTypewriter.ts
│   └── useCopyToClipboard.ts
├── lib/
│   └── animations.ts
├── App.tsx
└── main.tsx
```

---

## 3. Section-by-Section Implementation

---

### 3.1 Navbar

**File:** `src/components/layout/Navbar.tsx`

**Behavior:**
- Fixed position, glass morphism background
- Appears after scrolling 50px (starts transparent)
- Logo animates on hover (subtle glow)
- Nav links have underline reveal on hover
- Mobile: hamburger menu with slide-in drawer

**Micro-interactions:**

| Element | Hover | Active |
|---------|-------|--------|
| Logo | Scale 1.02, glow pulse | Scale 0.98 |
| Nav links | Underline slides from left (200ms) | Text color accent-violet |
| GitHub button | Border color → accent-indigo, bg → vibe-elevated | Scale 0.98 |

**Animation specs:**
```typescript
// Navbar reveal on scroll
const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

// Link underline
const linkUnderline = {
  initial: { scaleX: 0, originX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.2 } }
}
```

**Implementation notes:**
- Use `useScrollProgress` hook to detect scroll position
- Add `will-change: transform` for smooth animation
- Backdrop blur: `backdrop-blur-xl`

---

### 3.2 Hero Section

**File:** `src/components/sections/Hero.tsx`

**Layout:**
- Full viewport height (100vh - navbar)
- Left-aligned content (max-width 900px)
- Floating glow orb (absolute positioned, top-right)

**Content:**
```
Title: "Turn your AI coding tool into a"
       "workspace, knowledge hub," (gradient)
       "and build engine."

Subtitle: "vibeOS is a cognitive operating system that makes AI work 
          as an extension of YOU — not a generic assistant."

CTA: [Get Started →] [Learn More]

Terminal: Animated typewriter demo
```

**Animations:**

| Element | Animation | Delay | Duration |
|---------|-----------|-------|----------|
| Title line 1 | fadeUp | 0ms | 600ms |
| Title line 2 (gradient) | fadeUp | 100ms | 600ms |
| Title line 3 | fadeUp | 200ms | 600ms |
| Subtitle | fadeUp | 400ms | 600ms |
| CTA buttons | fadeUp | 500ms | 600ms |
| Terminal | scaleIn + fadeIn | 700ms | 500ms |
| Glow orb | glowPulse | 0ms | infinite 4s |

**Terminal Component:**

```typescript
// Typewriter effect hook
const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  // Implementation...
}
```

**Terminal behavior:**
1. Initial: Empty terminal with blinking cursor
2. After 1s: Type user prompt character by character (50ms/char)
3. After prompt complete + 500ms: AI response appears line by line (200ms per line)
4. Cursor blinks throughout

**Terminal micro-interactions:**
- Header dots: subtle hover glow (red, yellow, green)
- Terminal body: subtle inner shadow, slight scale on hover (1.01)

**Glow orb specs:**
```css
/* Positioned top-right, behind content */
.glow-orb {
  position: absolute;
  top: 20%;
  right: 10%;
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  opacity: 0.06;
  filter: blur(120px);
  border-radius: 50%;
  pointer-events: none;
  animation: glowPulse 4s ease-in-out infinite;
}
```

**CTA Button variants:**

```typescript
// Primary button
<Button variant="primary">
  Get Started
  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
</Button>

// Ghost button
<Button variant="ghost">Learn More</Button>
```

**Button hover states:**
| Variant | Hover | Active |
|---------|-------|--------|
| Primary | opacity 0.9, translateY(-1px), shadow-lg | translateY(0), shadow-none |
| Ghost | text-primary, bg-vibe-elevated/50 | scale 0.98 |

---

### 3.3 Problems Section

**File:** `src/components/sections/Problems.tsx`

**Layout:**
- Section header (centered)
- 4-column grid (responsive: 1 → 2 → 4)

**Content:**
```
Label: "The Problem"
Title: "You have powerful AI tools.
        But without a system, you're prompting into the void."

Cards:
1. 📁 Scattered Workspace — Files everywhere, no structure, context lost every session.
2. 🧠 Fragmented Context — AI forgets everything between sessions. You repeat yourself constantly.
3. 🎯 No System Thinking — Jumping to solutions without understanding the real problem.
4. 🚀 Can't Ship Fast — Stuck in loops, never finishing, prompts that go nowhere.
```

**Scroll Reveal:**
- Cards stagger in from bottom (100ms delay between each)
- Use Intersection Observer, trigger at 20% visibility

```typescript
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] // custom easing
    }
  })
}
```

**Card micro-interactions:**

| Element | Hover | 
|---------|-------|
| Card | translateY(-4px), border-color → text-muted, shadow |
| Icon | scale 1.1, slight bounce |
| Title | color → text-primary (if was secondary) |

**Card structure:**
```tsx
<Card className="group">
  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
    {icon}
  </div>
  <h3 className="text-lg font-semibold mb-2">{title}</h3>
  <p className="text-text-secondary text-small">{description}</p>
</Card>
```

---

### 3.4 Features Section

**File:** `src/components/sections/Features.tsx`

**Background:** `bg-vibe-dark` (alternating section)

**Content:**
```
Label: "The Solution"
Title: "vibeOS makes AI work as an extension of YOU"

Cards:
01. Problem-First — Never start with solutions. Understand the problem so deeply that the solution becomes obvious.
02. Context That Compounds — IDENTITY.md, NOTES.md, handoff logs — your context persists and grows across sessions.
03. Systems Over Goals — Build repeatable processes that compound. Every manual task is a system waiting to be born.
04. Ship and Iterate — 80% shipped beats 100% planned. Learn in production, not in theory.
```

**Scroll Reveal:**
- Same stagger pattern as Problems
- Feature numbers count up when visible (01, 02, 03, 04)

**Card micro-interactions:**

| Element | Hover |
|---------|-------|
| Card | border-color → accent-violet, subtle glow |
| Number | color intensity increases, slight scale |
| Title | gradient text reveal (optional advanced) |

**Feature card structure:**
```tsx
<Card className="group hover:border-accent-violet transition-colors">
  <span className="font-mono text-small font-semibold text-accent-violet mb-4 block">
    {number.toString().padStart(2, '0')}
  </span>
  <h3 className="text-xl font-semibold mb-2">{title}</h3>
  <p className="text-text-secondary">{description}</p>
</Card>
```

---

### 3.5 Workflow Section

**File:** `src/components/sections/Workflow.tsx`

**Layout:**
- Horizontal flow diagram
- Responsive: horizontal on desktop, vertical stack on mobile

**Content:**
```
Label: "Workflow"
Title: "From idea to shipped product"

Steps:
1. PROBLEM (red #EF4444) — Understand the why
2. PRD (blue #3B82F6) — Define the what
3. TECH_SPEC (green #10B981) — Plan the how
4. SHIP (violet #8B5CF6) — Execute & iterate [ACTIVE/highlighted]
```

**Scroll Reveal:**
- Steps reveal left-to-right with 150ms delay each
- Arrows animate in after their preceding step
- Active step (SHIP) has pulsing glow

```typescript
const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.4 }
  })
}

const arrowVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { 
    opacity: 1, 
    scaleX: 1,
    transition: { duration: 0.3 }
  }
}
```

**Step micro-interactions:**

| Element | Hover | Active State |
|---------|-------|--------------|
| Step icon | scale 1.1, border glow intensifies | filled bg (gradient), white text |
| Step label | text color matches step color | — |
| Arrow | opacity 1 (from 0.5) | — |

**Active step (SHIP) styling:**
```tsx
<div className="relative">
  {/* Glow behind */}
  <div className="absolute inset-0 bg-accent-gradient opacity-20 blur-xl rounded-xl" />
  
  {/* Step content */}
  <div className="relative bg-accent-gradient rounded-xl p-4">
    <span className="text-white font-bold">4</span>
  </div>
</div>
```

**Connecting arrows:**
- Use SVG or CSS pseudo-elements
- Animated dash pattern (optional: flowing dots)

```css
.workflow-arrow {
  @apply text-text-muted text-2xl;
  animation: arrowPulse 2s ease-in-out infinite;
}

@keyframes arrowPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
```

---

### 3.6 Roles Section

**File:** `src/components/sections/Roles.tsx`

**Background:** `bg-vibe-dark`

**Content:**
```
Label: "Roles"
Title: "AI adapts to your mode"

Cards:
- 🛠️ Engineer (green) — Build, code, architect, debug, implement
- 📋 Product Owner (blue) — PRD, features, requirements, user stories
- 🎨 Designer (pink) — UI, UX, mockups, wireframes, prototypes
- 📊 Analyst (amber) — Data, research, metrics, analysis
```

**Scroll Reveal:**
- Cards scale in from center with stagger

```typescript
const roleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' }
  })
}
```

**Card micro-interactions:**

| Element | Hover |
|---------|-------|
| Card | translateY(-4px), border-color → role color, subtle role-colored glow |
| Icon | bouncy scale (1.15 with spring) |
| Title | color → role color |

**Role card with dynamic color:**
```tsx
interface RoleCardProps {
  icon: string
  title: string
  description: string
  color: 'engineer' | 'product' | 'designer' | 'analyst'
}

const colorMap = {
  engineer: 'border-role-engineer hover:shadow-role-engineer/20',
  product: 'border-role-product hover:shadow-role-product/20',
  designer: 'border-role-designer hover:shadow-role-designer/20',
  analyst: 'border-role-analyst hover:shadow-role-analyst/20',
}
```

---

### 3.7 CTA Section

**File:** `src/components/sections/CTA.tsx`

**Background:** Gradient from vibe-black to vibe-dark

**Content:**
```
Title: "Ready to ship faster?"
Subtitle: "Clone vibeOS and start building in 2 minutes."

Terminal: git clone https://github.com/kv0906/vibeos.git [Copy button]

CTA: [View on GitHub]
```

**Scroll Reveal:**
- Content fades up as single group

**Terminal/code block:**
- Inline code with copy button
- Copy button: shows checkmark on success (2s), then reverts

```typescript
const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false)
  
  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return { copied, copy }
}
```

**Copy button micro-interactions:**

| State | Appearance |
|-------|------------|
| Default | Copy icon, text-muted |
| Hover | text-primary, bg-vibe-elevated |
| Copied | Checkmark icon (green), scale bounce |

**CTA button:**
- Large variant of primary button
- Arrow icon translates right on hover
- Subtle shadow on hover

---

### 3.8 Footer

**File:** `src/components/layout/Footer.tsx`

**Content:**
```
Tagline: "Think deeply. Build simply. Let systems carry the weight."
Copyright: "© 2024 vibeOS. Take what works. Make it yours."
```

**Styling:**
- Minimal, centered
- Border top (vibe-border)
- Text muted, tagline slightly brighter

**Optional additions:**
- Social links with hover effects
- Back to top button (appears on scroll)

---

## 4. Shared Components

### 4.1 ScrollReveal Wrapper

```tsx
// src/components/shared/ScrollReveal.tsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  threshold?: number
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 0.6,
  threshold = 0.2 
}: ScrollRevealProps) {
  const [ref, inView] = useInView({ 
    threshold, 
    triggerOnce: true 
  })
  
  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  }
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

### 4.2 Button Component

```tsx
// src/components/ui/Button.tsx
import { motion } from 'framer-motion'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'default' | 'large'
  children: React.ReactNode
  href?: string
  onClick?: () => void
}

const variants = {
  primary: 'bg-accent-gradient text-white hover:opacity-90',
  outline: 'border border-vibe-border hover:border-text-muted hover:bg-vibe-elevated',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-vibe-elevated/50',
}

const sizes = {
  default: 'px-5 py-2.5 text-small',
  large: 'px-7 py-3.5 text-base',
}

export function Button({ 
  variant = 'primary', 
  size = 'default',
  children,
  href,
  onClick 
}: ButtonProps) {
  const className = `
    inline-flex items-center gap-2 rounded-lg font-medium
    transition-all duration-200 ease-out
    active:scale-[0.98]
    ${variants[variant]}
    ${sizes[size]}
  `
  
  const Component = href ? motion.a : motion.button
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={className}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  )
}
```

### 4.3 Card Component

```tsx
// src/components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`
      bg-vibe-dark border border-vibe-border rounded-xl p-6
      ${hover ? 'hover:-translate-y-1 hover:border-text-muted transition-all duration-200' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}
```

---

## 5. Custom Hooks

### 5.1 useScrollProgress

```typescript
// src/hooks/useScrollProgress.ts
import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(window.scrollY / maxScroll)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return { scrollY, scrollProgress }
}
```

### 5.2 useTypewriter

```typescript
// src/hooks/useTypewriter.ts
import { useState, useEffect } from 'react'

export function useTypewriter(
  text: string, 
  speed: number = 50,
  startDelay: number = 0
) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  
  useEffect(() => {
    const startTimeout = setTimeout(() => setIsStarted(true), startDelay)
    return () => clearTimeout(startTimeout)
  }, [startDelay])
  
  useEffect(() => {
    if (!isStarted) return
    
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)
    
    return () => clearInterval(interval)
  }, [text, speed, isStarted])
  
  return { displayText, isComplete, isStarted }
}
```

---

## 6. Animation Library

```typescript
// src/lib/animations.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// Spring animation for bouncy effects
export const springBounce = {
  type: 'spring',
  stiffness: 400,
  damping: 15
}
```

---

## 7. Performance Considerations

### Optimization Checklist

- [ ] Use `will-change: transform` sparingly
- [ ] Lazy load below-fold sections
- [ ] Preload fonts with `<link rel="preload">`
- [ ] Use `transform` and `opacity` for animations (GPU accelerated)
- [ ] Debounce scroll handlers
- [ ] Use `triggerOnce: true` for scroll reveal animations
- [ ] Optimize images (if any) with next-gen formats

### Font Loading Strategy

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 8. Responsive Breakpoints

```typescript
// Tailwind defaults, customize if needed
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px

// Key responsive patterns:
// - Nav: hamburger menu below md
// - Grids: 1 col → 2 col → 4 col
// - Workflow: vertical stack below md
// - Hero: full width, scaled typography
```

---

## 9. Accessibility

- [ ] All interactive elements have focus states (ring-2 ring-accent-violet)
- [ ] Color contrast meets WCAG AA (text-secondary on vibe-dark passes)
- [ ] Reduce motion media query support
- [ ] Semantic HTML (nav, main, section, footer)
- [ ] Skip to content link
- [ ] Alt text for any images/icons

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Deliverables Checklist

- [ ] Vite project initialized
- [ ] Tailwind configured with design tokens
- [ ] All 6 sections implemented
- [ ] Navbar with scroll behavior
- [ ] Footer
- [ ] Scroll reveal animations
- [ ] Micro-interactions on all interactive elements
- [ ] Terminal typewriter effect
- [ ] Copy to clipboard functionality
- [ ] Responsive design (mobile-first)
- [ ] Performance optimized
- [ ] Accessibility reviewed

---

*Think deeply. Build simply. Let systems carry the weight.*
