# WORKFLOW.md — Project Lifecycle

> How projects are born, built, and shipped.

---

## The Flow

```
PROMPT → CLARIFY → UNDERSTAND → CREATE → BUILD → ITERATE
```

---

## Project Initiation

### The Opening Question

> "What problem are you solving?"

Follow-ups if needed:
- "Who feels this pain?"
- "What does success look like?"

### Intention Modes

| Mode | Signal | Approach |
|------|--------|----------|
| **Solve** | Clear problem, specific pain | Problem-first, ship fast |
| **Explore** | Curiosity, "what if" | Prototype-first, discover scope |
| **Learn** | Skill-building | Build to learn, docs as notes |

---

## Project Structure

Start minimal, grow as needed:

```
projects/{name}/
├── PROBLEM.md     ← Vision anchor (always)
├── PRD.md         ← Product: what/why/how, user stories
├── TECH_SPEC.md   ← Engineer: stack, architecture (when needed)
└── NOTES.md       ← Decisions, progress
```

| Complexity | Files Needed |
|------------|--------------|
| Simple | PROBLEM.md → PRD.md |
| Medium | PROBLEM.md → PRD.md → TECH_SPEC.md |
| Complex | All + features/ subfolder |

---

## PROBLEM.md Template

```markdown
# {Project Name}

## Problem
**What's the problem?**
[One sentence. Clear.]

**Who feels it?**
[Specific person]

**How do they cope today?**
[Current workaround]

## Intention
**Mode:** Solve / Explore / Learn
**Success looks like:** [What "done" means]

---
*Status: Active*
```

---

## PRD.md Template

```markdown
# {Feature/Project Name}

## Why
[One sentence: why this matters]

## What
[What we're building — user perspective]

## User Stories
- As a [user], I want [action], so that [outcome]

## Scope
**In:** [list]
**Out:** [list]

## Flow
[User journey in one line]

## Wireframe
[ASCII diagram — visualize the UI/structure]

---
*Status: Draft / In Progress / Done*
```

---

## TECH_SPEC.md Template (When Needed)

```markdown
# {Feature/Project Name} — Tech Spec

## Stack
- Frontend: [x]
- Backend: [x]
- Database: [x]

## Architecture
[ASCII diagram or brief description]

## Key Decisions
| Decision | Choice | Why |

## Implementation Notes
[Anything engineer needs to know]

---
*Status: Draft / In Progress / Done*
```

---

## NOTES.md Template

```markdown
# Notes — {Project Name}

## Handoff Log

| Date | Session Summary | Decisions Made | Next Actions |
|------|-----------------|----------------|--------------|
| 2024-01-15 | Setup project, created PROBLEM.md, researched competitors | Stack: Astro + Tailwind | Build hero section |
| 2024-01-16 | Built hero + work grid, deployed to Vercel | Dark mode default | Write case study 1 |
| ... | ... | ... | ... |

## Open Questions
- [Question that needs resolving]

## Decisions Archive
- **[Date]** Decided X because Y
- **[Date]** Changed from A to B after learning C
```

---

## Session Handoff Rule

**At the end of every working session, always:**

1. Summarize what was done
2. Record decisions made
3. Note what's next
4. Add row to NOTES.md handoff table

Prompt the user: *"Want me to add a handoff summary to NOTES.md before we wrap?"*

This ensures:
- Context is never lost between sessions
- Anyone (including future you) can resume instantly
- Decisions are traceable

---

## Quick Reference

**Start a project:**
```
1. "What problem are you solving?"
2. Create projects/{name}/PROBLEM.md
3. Build
```

**Resume a project:**
```
1. Read PROBLEM.md (the vision)
2. Read NOTES.md handoff table (where we left off)
3. Continue from last "Next Actions"
```

**End a session:**
```
1. Summarize progress
2. Add handoff row to NOTES.md
3. Clear next actions
```

---

*Projects are vehicles for learning. The code is a side effect.*
