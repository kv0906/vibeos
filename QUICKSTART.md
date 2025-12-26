# Quickstart — vibeOS in 5 Minutes

> Get your AI working as YOUR cognitive extension.

---

## Step 1: Copy your identity template (1 min)

```bash
cp os/IDENTITY.template.md os/IDENTITY.md
```

Open `IDENTITY.md` and fill in the basics:
- Your background
- Your archetype (2-3 words describing you)
- Your communication style
- Your tools

**Don't overthink it.** You can refine later.

---

## Step 2: Choose your primary role (30 sec)

Pick the role that matches your main work:

| You are... | Use this role |
|------------|---------------|
| Building products + code | `roles/ENGINEER.md` |
| Defining products, prioritizing | `roles/PRODUCT_OWNER.md` |
| UI/UX focused | `roles/templates/DESIGNER.md` |
| Data/business analysis | `roles/templates/ANALYST.md` |
| A bit of everything | `roles/templates/GENERALIST.md` |

You can use multiple roles — the AI will detect from context.

---

## Step 3: Start a project (2 min)

Create your first project folder:

```bash
mkdir -p projects/my-first-project
```

Create a `PROBLEM.md`:

```markdown
# My First Project

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

## Step 4: Activate vibeOS (30 sec)

In your AI conversation, type this **exactly**:

```
vibeOS — I want to build [your idea in 5 words or less]
```

**Examples:**
- "vibeOS — I want to build a habit tracker app"
- "vibeOS — I want to build my portfolio website"
- "vibeOS — I want to automate my weekly reports"

The AI will now:
1. Ask about the problem you're solving
2. Help you create PROBLEM.md
3. Plan and build with you

---

## Step 5: Build

Follow the workflow:

```
PROBLEM → RESEARCH → PLAN → BUILD → ITERATE
```

Use these files as you go:
- `PROBLEM.md` — Your north star
- `PRD.md` — What you're building (if needed)
- `TECH_SPEC.md` — How you're building (if needed)
- `NOTES.md` — Decisions and progress

---

## Quick Commands

| Say this | AI does this |
|----------|--------------|
| "vibeOS" | Reload operating system |
| "Run as me" | Same as vibeOS |
| "Engineer mode" | Switch to ENGINEER.md |
| "Product mode" | Switch to PRODUCT_OWNER.md |
| "What's my workflow?" | Show WORKFLOW.md steps |

---

## Example First Session

```
You: vibeOS — I want to build a habit tracker app.

AI: [Loads your OS] 
    Let's start with the problem.
    - What habit-tracking pain are you solving?
    - Who is this for — you or others?
    - How do you/they track habits today?

You: It's for me. I forget to track my daily habits. 
     I use notes app but never open it.

AI: Got it. Let me create your PROBLEM.md...
    [Creates problem definition]
    
    Before we build, let's research:
    - What makes existing habit apps work/fail?
    - What's the minimum version that solves YOUR problem?
    
    Want me to research, or do you have a solution in mind?
```

---

## File Reference

```
vibeos/
├── os/
│   ├── SYSTEM.md            ← Universal principles (read this)
│   ├── IDENTITY.md          ← Your personal flavor (create this)
│   ├── MANIFEST.md          ← How it all works together
│   ├── WORKFLOW.md          ← Project lifecycle
│   └── TOOLBOX.md           ← Curated tools
│
├── roles/
│   ├── ENGINEER.md          ← Vibe coding
│   ├── PRODUCT_OWNER.md     ← Product thinking
│   └── templates/           ← More roles
│
└── projects/                ← Your work goes here
```

---

## Next Steps

1. **Customize IDENTITY.md** — Make it actually you
2. **Read SYSTEM.md** — Understand the principles
3. **Start building** — Learn by doing
4. **Refine as you go** — The OS evolves with you

---

*5 minutes to setup. Lifetime to master. Start shipping.*
