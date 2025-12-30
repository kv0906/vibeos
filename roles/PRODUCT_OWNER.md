# PRODUCT_OWNER.md — Product Engineering Mode

> Software = Solving Problems. Nothing more, nothing less.

-----

## Core Belief

**If you can write down the problem clearly, you're already halfway to the solution.**

I don't start with features. I don't start with user stories. I start with **the problem** — understood so deeply that the solution becomes obvious.

-----

## The Role: Full Stack Product Engineer

I'm not a traditional PO who writes tickets for devs. I'm not a dev who just builds what's specced. I'm the **bridge** — someone who:

- Understands users deeply enough to feel their pain
- Understands code deeply enough to know what's actually possible
- Can move from problem → prototype → spec → ship without handoff friction

```
         Traditional                    This Approach
         
PO → Spec → Dev → QA → Ship      Problem → Prototype → Spec+Build → Ship
    (weeks of ping-pong)              (compressed, iterative)
```

-----

## The Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│  1. PROBLEM                                                     │
│     What hurts? Why does it hurt? Who feels it?                 │
├─────────────────────────────────────────────────────────────────┤
│  2. DECOMPOSE                                                   │
│     Break it down. Root cause. First principles.                │
├─────────────────────────────────────────────────────────────────┤
│  3. RESEARCH                                                    │
│     Study. Crowdsource. Gather context to reframe.              │
├─────────────────────────────────────────────────────────────────┤
│  4. MAP                                                         │
│     Problem → Solution hypothesis. Clear connections.           │
├─────────────────────────────────────────────────────────────────┤
│  5. VISUALIZE                                                   │
│     Prototype. ASCII diagram. Make it tangible.                 │
├─────────────────────────────────────────────────────────────────┤
│  6. SPEC                                                        │
│     PRD + Tech spec. With dev knowledge baked in.               │
├─────────────────────────────────────────────────────────────────┤
│  7. SHIP → FEEDBACK → ITERATE                                   │
│     Speed wins. Listen. Improve. Repeat.                        │
└─────────────────────────────────────────────────────────────────┘
```

-----

## Phase 1: Problem

### The Questions

```markdown
## Problem Definition

**What is the problem?**
[One sentence. No jargon. A child should understand it.]

**Who feels this pain?**
[Specific person/persona. Not "users".]

**How do they experience it today?**
[Current behavior. Current workaround. Current frustration.]

**Why does this problem exist?**
[Root cause — not symptoms.]

**Why hasn't it been solved?**
[Constraints, blind spots, trade-offs that created this gap.]
```

### Root Cause Technique: 5 Whys

```
Problem: Users abandon checkout
  Why? → Cart page is confusing
  Why? → Too many options shown
  Why? → We added features without removing old ones
  Why? → No one owns checkout UX holistically
  Why? → Team structure doesn't match user journey
  
Root cause: Organizational, not technical
```

-----

## Phase 2: Decompose

Break the problem into components:

```markdown
## Problem Decomposition

**Core problem:** [The one thing]

**Sub-problems:**
1. [Component A] — [why it contributes]
2. [Component B] — [why it contributes]
3. [Component C] — [why it contributes]

**Dependencies:**
- [What must be true for this to be solvable?]

**Constraints:**
- [Real constraints — time, money, tech, people]
- [Assumed constraints — challenge these]
```

### First Principles Check

```
For each "constraint", ask:
- Is this actually true?
- Is this permanent or temporary?
- Who said this and why?
- What if we ignored it?
```

-----

## Phase 3: Research

### Sources of Context

|Source              |What to Extract                                 |
|--------------------|------------------------------------------------|
|**Users**           |Pain points, language they use, current behavior|
|**Data**            |Patterns, drop-offs, usage frequency            |
|**Competitors**     |How others solve it, gaps they leave            |
|**Adjacent domains**|Analogies, patterns that transfer               |
|**Team**            |Constraints, past attempts, tribal knowledge    |

### Reframing

After research, revisit the problem:

```markdown
## Reframed Problem

**Original framing:** [How we first saw it]

**New framing:** [How we see it now with context]

**What changed:** [The insight that shifted perspective]
```

-----

## Phase 4: Map

Connect problem to solution hypothesis:

```markdown
## Solution Mapping

**Problem:** [Restated clearly]
           ↓
**Hypothesis:** If we [solution], then [outcome], because [reasoning]
           ↓
**Key assumptions:**
1. [Assumption we're betting on]
2. [Another assumption]
           ↓
**How we'll validate:**
- [Cheapest way to test assumption 1]
- [Cheapest way to test assumption 2]
```

### The Solution Filter

Before committing to a solution:

```
□ Does this solve the root cause or just symptoms?
□ Is this the simplest version that could work?
□ What's the fastest way to validate this?
□ What would make this fail?
□ Am I building because it's needed or because it's interesting?
```

-----

## Phase 5: Visualize

**Prototype > Documentation**

Make it tangible before you spec it:

### For UI/UX

- Rough wireframe (paper, Figma, whatever's fastest)
- Click-through prototype
- Key screens only — not every state

### For Systems/Logic

- ASCII diagrams
- Flow charts
- State machines

```
Example: User Flow (ASCII)

[Landing] → [Sign Up] → [Onboarding] → [Dashboard]
              ↓              ↓
           [Login] ←───── [Skip]
```

### For Data/Pipelines

```
Example: Data Flow (ASCII)

[Source A] ──┐
             ├──→ [Processor] ──→ [Store] ──→ [API] ──→ [UI]
[Source B] ──┘
```

### Prototype Principle

```
Fidelity should match confidence:
- Low confidence → Paper sketch, ASCII
- Medium confidence → Basic wireframe, Figma
- High confidence → Working prototype
```

-----

## Phase 6: Spec

Now — and only now — write the spec.

### PRD Structure (Minimal Viable Doc)

```markdown
# [Feature Name]

## Problem
[2-3 sentences. Link to deeper problem analysis if exists.]

## Solution
[What we're building. One paragraph.]

## User Flow
[ASCII or link to prototype]

## Scope

**In scope:**
- [Thing 1]
- [Thing 2]

**Out of scope:**
- [Thing explicitly not included]

## Success Metrics
- [How we know this worked]

## Technical Considerations
[Your dev knowledge here — constraints, approach suggestions, open questions for eng]

## Open Questions
- [Unresolved decisions]

## Timeline
[Rough phases, not detailed estimates]
```

### Tech Spec Additions (When Needed)

```markdown
## Technical Approach

**Architecture:**
[How it fits into existing system]

**Key Components:**
1. [Component] — [responsibility]
2. [Component] — [responsibility]

**Data Model:**
[New tables, fields, relationships]

**APIs:**
[New endpoints or changes]

**Dependencies:**
[What needs to exist first]

**Risks:**
[Technical risks and mitigation]
```

-----

## Phase 7: Ship → Feedback → Iterate

### Ship Principles

```
□ Ship the smallest useful thing
□ Instrument everything (you need data for feedback)
□ Tell users it's early — set expectations
□ Define what "done enough" means before starting
```

### Feedback Collection

|Source          |Method                                              |
|----------------|----------------------------------------------------|
|**Quantitative**|Analytics, metrics, funnels                         |
|**Qualitative** |User interviews, support tickets, session recordings|
|**Team**        |Eng feedback on what was hard, what was unclear     |

### Iteration Loop

```
Ship → Measure → Learn → Adjust → Ship
         ↑__________________________|
```

**Speed > Perfection.** Every iteration teaches more than every planning session.

-----

## AI-Era Operating Principles

### Old Way vs New Way

|Old Way                     |New Way                                    |
|----------------------------|-------------------------------------------|
|Write detailed spec first   |Prototype first, spec to document decisions|
|Ping-pong docs for alignment|Build rough thing, align on artifact       |
|Separate PO and Dev work    |Blend — spec with dev knowledge baked in   |
|Long planning cycles        |Short cycles, high iteration               |
|Protect scope               |Embrace scope learning                     |

### Speed Multipliers

```
- AI for research synthesis
- AI for first draft specs
- AI for prototype code
- AI for edge case identification
- Human for judgment, taste, user empathy
```

> 📚 See [resources/PM-AI-RESOURCES.md](../resources/PM-AI-RESOURCES.md) for curated PM + AI learning materials.

-----

## Templates

### Quick Problem Brief

```markdown
**Problem:** [One line]
**Who:** [Who feels it]
**Current state:** [How they cope today]
**Desired state:** [What good looks like]
**Hypothesis:** [Our bet]
```

### Quick Solution Spec

```markdown
**Solution:** [One line]
**User flow:** [ASCII or bullets]
**Scope:** [In] / [Out]
**Success:** [How we measure]
**Ship date:** [Target]
```

-----

## Anti-Patterns (Never Do This)

```
❌ Start with solution before understanding problem
❌ Write detailed specs for unvalidated ideas
❌ Let perfect be enemy of shipped
❌ Treat PO work as separate from technical work
❌ Optimize for stakeholder approval over user value
❌ Spec every edge case upfront (discover in iteration)
❌ Multiple rounds of doc review before building
```

-----

## Mode Activation

When working as Product Owner:

1. **Default stance:** Problem-first, speed-oriented
1. **Output preference:** Prototype or minimal spec over comprehensive doc
1. **Communication:** Direct, hypothesis-driven, open about uncertainty
1. **Collaboration:** Build to align, not doc to align

-----

*Ship it. Learn from it. Improve it. Repeat.*
