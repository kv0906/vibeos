# DESIGNER.md — Design-First Builder

> See the experience before the code. Ship beautiful, usable products.

---

## Core Identity

**Origin:** UI/UX Designer  
**Superpower:** Visual thinking + user empathy  
**Mode:** Design-led development with AI as execution layer

I don't just make things look good — I make things *feel* right. Every pixel serves a purpose. Every interaction tells a story.

---

## What Makes Me Different

### The Eye

I see what others miss:
- Hierarchy that guides attention
- Whitespace that creates breathing room
- Color that communicates meaning
- Motion that adds life, not noise
- The 4px that makes a button feel off

### The Empathy

I think in user journeys:
- What's the user feeling right now?
- What do they need to see first?
- What friction can I remove?
- Does this spark joy or frustration?

---

## Design-First Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│  1. UNDERSTAND                                                  │
│     Who is this for? What problem are they solving?             │
├─────────────────────────────────────────────────────────────────┤
│  2. REFERENCE                                                   │
│     Find inspiration. Study best-in-class examples.             │
├─────────────────────────────────────────────────────────────────┤
│  3. SKETCH                                                      │
│     Low-fi first. Layout, hierarchy, flow.                      │
├─────────────────────────────────────────────────────────────────┤
│  4. DESIGN                                                      │
│     High-fi mockups. Visual system. Micro-interactions.         │
├─────────────────────────────────────────────────────────────────┤
│  5. BUILD                                                       │
│     AI implements. You QC the details.                          │
├─────────────────────────────────────────────────────────────────┤
│  6. POLISH                                                      │
│     Animations, states, edge cases. Make it feel alive.         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Design Principles

### 1. Hierarchy is Everything
The user should know where to look instantly. If everything is important, nothing is.

### 2. Consistency Builds Trust
Same patterns, same spacing, same interactions. Predictability is comfort.

### 3. Motion with Purpose
Every animation should communicate something. No gratuitous effects.

### 4. Accessible by Default
Color contrast, keyboard nav, screen readers. Design for everyone.

### 5. Mobile-First Thinking
Constraints breed creativity. Start small, expand gracefully.

---

## Visual Systems

### Spacing Scale
```
Base: 4px

- 4px   — tight (icons, badges)
- 8px   — compact (list items)
- 16px  — default (cards, sections)
- 24px  — loose (major sections)
- 48px  — breathing room (page sections)
```

### Typography Scale
```
- Display: 48-72px — Hero headlines
- H1: 32-40px — Page titles
- H2: 24-28px — Section headers
- Body: 16-18px — Reading text
- Caption: 12-14px — Secondary info
```

### Color Usage
```
- Primary: Main actions, key elements
- Secondary: Supporting actions
- Neutral: Text, backgrounds, borders
- Success/Warning/Error: Feedback states
- Never: More than 3-4 colors in one view
```

---

## Working with AI

### My Role vs AI's Role

```
AI handles:
- Generating component code
- Responsive layouts
- Accessibility attributes
- Animation syntax

I handle:
- Visual direction
- User experience decisions
- Micro-interaction design
- Quality control
- "Does this feel right?"
```

### Prompting for Design

```
Good prompt structure:

1. Context (what exists, design system in use)
2. Reference (similar designs, mood)
3. Constraints (responsive needs, accessibility)
4. Goal (what feeling/experience we want)
5. Ask for implementation matching the vision
```

---

## Polish Checklist

```
□ Visual hierarchy clear — user knows where to look
□ Spacing consistent — follows the system
□ Typography readable — contrast, size, line-height
□ Colors accessible — WCAG contrast ratios
□ States complete — hover, focus, active, disabled, loading, error
□ Responsive — works on all screen sizes
□ Animations smooth — 60fps, purposeful
□ Empty states designed — not just "No data"
□ Edge cases handled — long text, missing images
□ Feels intentional — not generated
```

---

## Tools I Use

| Need | Tool | Why |
|------|------|-----|
| Design | Figma | Collaboration, components |
| Prototyping | Figma / Framer | Interactive previews |
| Icons | Lucide, Heroicons | Clean, consistent |
| UI Library | shadcn/ui | Own the code, customize |
| Animation | Framer Motion | Declarative, powerful |
| Inspiration | Dribbble, Awwwards, Mobbin | Reference hunting |

---

## Anti-Patterns (Never Do This)

```
❌ Design in code without reference
❌ Skip mobile considerations
❌ Ignore accessibility
❌ Add animation for animation's sake
❌ Use more than 2-3 fonts
❌ Accept AI output without visual QC
❌ Prioritize aesthetics over usability
```

---

*Beauty serves function. Design is how it works.*
