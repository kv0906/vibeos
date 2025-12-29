# Quickstart — vibeOS in 5 Minutes

> Get your AI working as YOUR cognitive extension.

---

## What is vibeOS?

vibeOS is a **framework** that makes any AI coding assistant work as an extension of YOU — not a generic helper.

```
┌─────────────────────────────────────────────────────────┐
│                        vibeOS                           │
├─────────────────────────────────────────────────────────┤
│  SYSTEM.md      → What we believe (principles)          │
│  IDENTITY.md    → Who YOU are (your flavor)             │
│  MANIFESTO.md   → How AI operates (routing)             │
│  WORKFLOW.md    → How projects flow (lifecycle)         │
├─────────────────────────────────────────────────────────┤
│  roles/         → Skill modes (Engineer, Analyst, etc.) │
│  projects/      → Your actual work                      │
└─────────────────────────────────────────────────────────┘
```

**Works with:** Claude Code, Cursor, Windsurf, Cline, or any AI that reads context files.

---

## How it Works

```
You prompt → AI detects intent → Loads right mode → Responds as YOU would
```

The AI will:
1. Detect what you're doing (Build / Research / Create)
2. Load the right role (Engineer / Analyst / etc.)
3. Follow your workflow (not generic AI patterns)
4. Match your voice and style

---

## Step 1: Copy your identity template (1 min)

```bash
cp .os/IDENTITY.template.md .os/IDENTITY.md
```

Open `IDENTITY.md` and fill in:
- Your background
- Your archetype (2-3 words describing you)
- Your communication style

**Don't overthink it.** Refine later.

---

## Step 2: Choose your primary role (30 sec)

| You are... | Use this role |
|------------|---------------|
| Building products + code | `roles/ENGINEER.md` |
| Defining products, prioritizing | `roles/PRODUCT_OWNER.md` |
| UI/UX focused | `roles/templates/DESIGNER.md` |
| Data/business analysis | `roles/templates/ANALYST.md` |
| A bit of everything | `roles/templates/GENERALIST.md` |

The AI detects from context — you can switch anytime.

---

## Step 3: Understand Project Types

Not all work needs the same structure:

| Type | What it is | Files You Need |
|------|------------|----------------|
| **Build** | Web app, software, vibe coding | PROBLEM → PRD → TECH_SPEC |
| **Research** | Analysis, docs, PDFs, data | PROBLEM → NOTES only |
| **Create** | Content, writing, design | PROBLEM → NOTES only |

**Key insight:** Don't create TECH_SPEC.md for research projects. Only Build projects need it.

---

## Step 4: Activate vibeOS (30 sec)

Type this in your AI conversation:

```
vibeOS — I want to [your goal]
```

**Examples:**
- "vibeOS — I want to build a habit tracker app" → **Build** flow
- "vibeOS — I want to research user onboarding patterns" → **Research** flow
- "vibeOS — I want to write a blog post about AI" → **Create** flow

The AI will detect your project type and guide you accordingly.

---

## Step 5: Start Working

**For Build projects:**
```
1. Create projects/{name}/PROBLEM.md
2. Build PRD.md (what/why)
3. Build TECH_SPEC.md (how)
4. Code and iterate
```

**For Research/Create projects:**
```
1. Create projects/{name}/PROBLEM.md
2. Work and capture in NOTES.md
3. That's it — no over-engineering
```

---

## Quick Commands

| Say this | AI does this |
|----------|--------------|
| "vibeOS" | Reload operating system |
| "Engineer mode" | Switch to ENGINEER.md |
| "Product mode" | Switch to PRODUCT_OWNER.md |
| "Analyst mode" | Switch to ANALYST.md |

---

## File Reference

```
vibeos/
├── .os/
│   ├── SYSTEM.md            ← Core beliefs
│   ├── IDENTITY.md          ← Your personal flavor (create this)
│   ├── MANIFESTO.md         ← How AI operates
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

1. **Create IDENTITY.md** — Make it actually you
2. **Read SYSTEM.md** — Understand the principles
3. **Start a project** — Learn by doing

---

*5 minutes to setup. Lifetime to master. Start shipping.*
