# ENGINEER.md — Vibe Coding Mode

> Curator with vibe. Know the right tool for the right purpose.

-----

## Core Identity

**Origin:** Frontend Engineer  
**Superpower:** Pattern recognition + taste  
**Mode:** Vibe coding with AI as execution layer

I don't memorize syntax. I recognize patterns. I don't implement everything — I *curate* the right tools and guide AI to execute with my standards.

-----

## What Makes Me Different

### The Eye

I see what others miss:

- Micro-interactions that feel *right*
- Transitions that breathe vs transitions that jump
- Typography that serves purpose
- Spacing systems that create rhythm
- The 4px that makes a button feel off

### The Recognition

I can instantly identify:

- "That's shadcn" — clean, composable, Radix-based
- "That's Ant Design" — enterprise, opinionated, heavy
- "That's Next.js" — file-based routing, RSC patterns
- "That's Tailwind" — utility-first, design tokens in classes

This isn't trivia. It's **knowing the right tool for the right job**.

### The Curator Mindset

```
I don't build from scratch → I assemble from best-in-class
I don't memorize docs → I know where to look and what to ask
I don't compete with AI on speed → I compete on taste and judgment
```

-----

## Vibe Coding Methodology

### The Rhythm

```
┌─────────────────────────────────────────────────────────────────┐
│  1. RESEARCH                                                    │
│     How do others do this? What's the standard?                 │
├─────────────────────────────────────────────────────────────────┤
│  2. PLAN                                                        │
│     Let AI think first. Iterate on approach. Finalize.          │
├─────────────────────────────────────────────────────────────────┤
│  3. DECOMPOSE                                                   │
│     Break into phases. Context is always limited.               │
├─────────────────────────────────────────────────────────────────┤
│  4. EXECUTE                                                     │
│     Phase by phase. Handoff summaries between each.             │
├─────────────────────────────────────────────────────────────────┤
│  5. POLISH                                                      │
│     QC the slop. Add soul. Meet the standard.                   │
└─────────────────────────────────────────────────────────────────┘
```

-----

## Phase 1: Research

**Never reinvent the wheel.**

Before building anything:

```markdown
## Research Checklist

□ How do best-in-class projects do this?
□ What's the established pattern/convention?
□ What libraries/tools exist for this?
□ What are the trade-offs of each approach?
□ Any examples I can reference?
```

### Where to Look

|Need          |Source                                |
|--------------|--------------------------------------|
|UI patterns   |shadcn, Radix, headless UI libs       |
|Architecture  |GitHub repos of respected projects    |
|Best practices|Official docs, then community patterns|
|Edge cases    |GitHub issues, Stack Overflow         |

### Output

```markdown
## Research Summary

**Problem:** [What I'm trying to build]

**How others do it:**
- [Approach A] — used by [X], trade-off: [Y]
- [Approach B] — used by [X], trade-off: [Y]

**Chosen approach:** [A/B] because [reasoning]

**Reference examples:**
- [Link/code snippet]
```

-----

## Phase 2: Plan

**Don't jump to execute. Let AI think first.**

### The Planning Loop

```
1. Give AI the context + goal
2. Ask for approach/plan (not code yet)
3. Review the plan
4. Ask clarifying questions
5. Iterate until plan is solid
6. THEN execute
```

### Plan Mode Prompt Pattern

```
I want to build [X].

Context:
- [Current state]
- [Constraints]
- [References/examples]

Before writing any code:
1. Explain your understanding of the task
2. Propose an approach
3. Break it into phases
4. Identify risks or open questions

Let's align on the plan first.
```

### Plan Quality Check

```
□ Does AI understand the actual goal?
□ Is the approach aligned with my research?
□ Are phases small enough to fit context?
□ Are dependencies between phases clear?
□ What could go wrong?
```

-----

## Phase 3: Decompose

**Context is always limited. Work in phases.**

### Decomposition Principles

```
- Each phase = one coherent chunk of work
- Each phase should be completable in one session
- Each phase has clear input and output
- Phases can be handed off (to future you, or another session)
```

### Phase Structure

```markdown
## Phase [N]: [Name]

**Goal:** [What this phase achieves]

**Input:** [What we're starting with]

**Output:** [What we'll have when done]

**Tasks:**
1. [Task 1]
2. [Task 2]
3. [Task 3]

**Dependencies:** [What must exist before this phase]
```

-----

## Phase 4: Execute

**Phase by phase. Handoff between each.**

### Execution Rhythm

```
For each phase:
  1. Set context (what we're doing, what exists)
  2. Execute tasks
  3. Verify output matches goal
  4. Write handoff summary
  5. Move to next phase
```

### The Handoff Summary (Critical)

After each phase, create a handoff:

```markdown
## Handoff: Phase [N] Complete

**What was done:**
- [Completed item 1]
- [Completed item 2]

**Current state:**
- [What exists now]
- [What's working]

**What's next:**
- [Next phase goal]
- [Key tasks]

**Open issues:**
- [Anything unresolved]
```

**Why this matters:**

- Mimics human workflow
- Recoverable if context resets
- Clear progress tracking
- Can resume in new session

-----

## Phase 5: Polish

**AI writes slop. You add soul.**

### The Speed → Polish Pattern

```
Stage 1: SPEED
- Happy path first
- Get it working
- See the concept
- Don't obsess on details

Stage 2: POLISH  
- QC the output
- Fix the slop
- Add micro-interactions
- Tune the feel
- Meet your standards
```

### Polish Checklist (Frontend)

```
□ Transitions feel smooth (not jarring)
□ Spacing follows system (4px/8px base)
□ Typography hierarchy is clear
□ Interactive states complete (hover, focus, active, disabled)
□ Loading states exist
□ Error states exist
□ Responsive breakpoints work
□ Accessibility basics (focus rings, aria labels)
□ No visual jank
□ Feels intentional, not generated
```

### Polish Checklist (Code Quality)

```
□ No obvious duplication
□ Naming makes sense
□ Logic is readable
□ Edge cases handled
□ No hardcoded magic values
□ Would I be embarrassed if someone read this?
```

### The Soul Test

> "Does this feel like something I made, or something AI generated?"

If it feels generic, keep polishing.

-----

## Mental Models for Systems

I'm not a backend engineer. But I understand how systems connect.

### How I Learn Unknown Domains

```
1. Start with WHY — what problem does this solve?
2. Find a working example
3. Reverse engineer: code → concepts
4. Map components and their relationships
5. Ask AI to explain the fundamentals
6. Try to break it, see what happens
7. Build intuition through iteration + failure
```

### System Components I Understand Conceptually

|Component    |Mental Model                                                                                 |
|-------------|---------------------------------------------------------------------------------------------|
|**API**      |Contract between systems. Request → Response. REST = resources, GraphQL = query what you need|
|**Database** |Structured storage. Tables = entities, Relations = connections. Query to retrieve            |
|**Auth**     |Identity + permissions. Token = proof of who you are. Session = temporary state              |
|**Streaming**|Data over time, not all at once. Chunks arriving. SSE, WebSocket, HTTP streaming             |
|**AI SDK**   |Wrapper around model API. Handle streaming, tool calls, message format                       |
|**Queue**    |Async processing. Producer → Queue → Consumer. Decouple sender from processor                |
|**Container**|Isolated environment. Package code + dependencies. Runs same anywhere                        |

### Architecture Thinking Pattern

```
When designing a system:

1. What are the components?
2. How do they talk to each other?
3. Where does data live?
4. What happens when X fails?
5. What's the bottleneck?
6. What's the simplest version?
```

-----

## Frontend Craft Standards

### Spacing System

```
Base: 4px

Spacing scale:
- 4px  (0.25rem) — tight
- 8px  (0.5rem)  — compact  
- 12px (0.75rem) — comfortable
- 16px (1rem)    — default
- 24px (1.5rem)  — loose
- 32px (2rem)    — section gap
- 48px (3rem)    — major section
```

### Typography Scale

```
Purpose-driven type:

- Display: Hero headlines, marketing
- Heading: Section titles, h1-h3
- Body: Reading content, 16px base
- Caption: Secondary info, smaller
- Code: Monospace for technical
```

### Transition Defaults

```css
/* Quick interactions (buttons, hovers) */
transition: all 150ms ease-out;

/* State changes (modals, reveals) */
transition: all 200ms ease-in-out;

/* Layout shifts (accordions, panels) */
transition: all 300ms ease-in-out;

/* Never: no transition (jarring) */
/* Never: > 500ms (feels slow) */
```

### Responsive Breakpoints

```
Mobile first:

- < 640px   — mobile
- 640px+    — tablet (sm)
- 1024px+   — desktop (lg)
- 1280px+   — large desktop (xl)
```

-----

## Tool Selection Framework

### When to Use What

|Need                      |Tool                |Why                         |
|--------------------------|--------------------|----------------------------|
|Component library (custom)|shadcn/ui           |Composable, own the code    |
|Component library (speed) |Ant Design, MUI     |Complete, opinionated       |
|Styling                   |Tailwind            |Utility-first, design tokens|
|Framework                 |Next.js             |Full-stack, RSC, ecosystem  |
|State (simple)            |useState, useReducer|Built-in, no overhead       |
|State (complex)           |Zustand             |Simple API, minimal         |
|Forms                     |React Hook Form     |Performance, validation     |
|Data fetching             |TanStack Query      |Caching, sync, devtools     |
|Animation                 |Framer Motion       |Declarative, powerful       |
|Charts                    |Recharts            |Composable, React-native    |

### Selection Criteria

```
1. Does it solve my specific problem?
2. What's the learning curve vs value?
3. How's the DX (docs, TypeScript, ecosystem)?
4. Is it maintained?
5. Does it match my project's complexity level?
```

-----

## Working with AI (Vibe Coding Principles)

### My Role vs AI's Role

```
AI handles:
- Boilerplate
- Syntax
- Implementation details
- Finding solutions in docs
- Generating variations

I handle:
- Taste and judgment
- Architecture decisions
- UX intuition
- Quality control
- Polish and soul
```

### Effective AI Prompting

```
Good prompt structure:

1. Context (what exists, what I'm working in)
2. Goal (what I want to achieve)
3. Constraints (what to avoid, what to maintain)
4. Examples (reference code, similar patterns)
5. Ask for plan before execution
```

### When AI Output is Wrong

```
1. Don't just accept — verify against your taste
2. Ask "why did you do it this way?"
3. Provide counter-example
4. Constrain more specifically
5. Break into smaller asks
```

-----

## Anti-Patterns (Never Do This)

```
❌ Jump straight to coding without research
❌ Execute without plan alignment
❌ Try to do everything in one context/session
❌ Skip handoff summaries
❌ Accept AI slop as final
❌ Ignore the micro-details that create feel
❌ Use wrong tool because it's familiar
❌ Over-engineer what should be simple
❌ Reinvent what already exists and works
```

-----

## Mode Activation

When working as Engineer:

1. **Default stance:** Research-first, plan before execute
1. **Rhythm:** Decompose → Phase → Handoff → Repeat
1. **Quality bar:** Polish until it has soul
1. **Learning mode:** Reverse engineer, understand conceptually, iterate

-----

*Know the tools. Trust your taste. Let AI handle the syntax.*
