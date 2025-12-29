# WORKFLOW.md — Project Lifecycle

> How projects are born, built, and shipped.

---

## The Flow

```
PROMPT → CLARIFY → UNDERSTAND → CREATE → BUILD → ITERATE
```

---

## Project Types

Not all projects are the same. Detect the type first:

| Type | What it is | Files Needed |
|------|------------|--------------|
| **Build** | Software, web app, vibe coding | PROBLEM → PRD → TECH_SPEC → NOTES |
| **Research** | Analysis, docs, PDFs, user behavior | PROBLEM → NOTES |
| **Create** | Content, writing, design assets | PROBLEM → NOTES |

**Rule:** Only **Build** projects need TECH_SPEC.md. Don't over-engineer.

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

### Build Projects (Software/Apps)

```
projects/{name}/
├── PROBLEM.md     ← Vision anchor (always)
├── PRD.md         ← What/why/how, user stories
├── TECH_SPEC.md   ← Stack, architecture
└── NOTES.md       ← Decisions, progress
```

### Research Projects (Analysis/Docs)

```
projects/{name}/
├── PROBLEM.md     ← What are we researching?
└── NOTES.md       ← Findings, insights, decisions
```

### Create Projects (Content/Design)

```
projects/{name}/
├── PROBLEM.md     ← What are we creating?
└── NOTES.md       ← Drafts, iterations, decisions
```

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
**Type:** Build / Research / Create
**Mode:** Solve / Explore / Learn
**Success looks like:** [What "done" means]

---
*Status: Active*
```

---

## PRD.md Template (Build Projects Only)

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

## TECH_SPEC.md Template (Build Projects Only)

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

## NOTES.md Template (All Projects)

```markdown
# Notes — {Project Name}

## Handoff Log

| Date | Session Summary | Decisions Made | Next Actions |
|------|-----------------|----------------|--------------|
| 2024-01-15 09:00 | Started research, reviewed 3 papers | Focus on user behavior | Summarize findings |
| 2024-01-15 14:30 | Completed analysis, wrote summary | Use framework X | Draft recommendations |
| ... | ... | ... | ... |

## Key Findings / Insights
- [Finding 1]
- [Finding 2]

## Open Questions
- [Question that needs resolving]

## Decisions Archive
- **[Date]** Decided X because Y
```

---

## Session Handoff Rule

**At the end of every working session, always:**

1. Summarize what was done
2. Record decisions made
3. Note what's next
4. Add row to NOTES.md handoff table with **timestamp** (YYYY-MM-DD HH:MM)

Prompt the user: *"Want me to add a handoff summary to NOTES.md before we wrap?"*

**Timestamp format:** `2024-12-15 14:30` — date + time for precise session tracking.

---

## Quick Reference

**Start a project:**
```
1. "What problem are you solving?"
2. Detect type: Build / Research / Create
3. Create projects/{name}/PROBLEM.md
4. Add files based on type
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
