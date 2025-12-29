<p align="right">
  <strong>English</strong> •
  <a href="README.vi.md">Tiếng Việt</a>
</p>

<p align="center">
  <img src="branding/assets/readme-header.svg" alt="vibeOS" width="100%">
</p>

> Turn your AI coding tool into a workspace, knowledge hub, and build engine.

---

## Disclaimer

**This is not gospel. This is not the holy grail.**

vibeOS is simply one way that works — a guideline and mindset shift, not a rigid rulebook.

The core beliefs in `.os/SYSTEM.md` and `.os/MANIFESTO.md` might resonate with you, or they might not. That's fine. **Take what works. Ignore what doesn't. Make it yours.**

You'll figure out how to use this effectively through practice. The framework adapts to you, not the other way around.

---

## Who Uses vibeOS

| Role | How They Use It |
|------|-----------------|
| **Product Managers / Product Owners** | Spec features, write PRDs, align with engineering |
| **Engineers (Junior → Senior)** | Build apps, architect systems, ship faster |
| **UI/UX Designers** | Design systems, prototypes, handoff to dev |
| **Marketing** | Campaign planning, content creation, research |
| **Business Analysts / Data Analysts** | Data analysis, research, reporting |

The framework detects your intent and adapts — you don't need to be technical.

---

## The Problem

Most people struggle with AI coding tools:

- **Scattered workspace** — files everywhere, no structure
- **Fragmented context** — AI forgets everything between sessions
- **No system thinking** — jumping to solutions without understanding problems
- **Prompt paralysis** — don't know how to plan and iterate with AI
- **Can't ship fast** — stuck in loops, never finishing

You have powerful AI tools. But without a system, you're just prompting into the void.

---

## The Solution

vibeOS is a **framework** that makes AI work as an extension of YOU:

```
┌─────────────────────────────────────────────────────────┐
│                        vibeOS                           │
├─────────────────────────────────────────────────────────┤
│  Your prompt: "I want to build a habit tracker"         │
│                         ↓                               │
│  AI detects intent → Loads your context → Guides you    │
│                         ↓                               │
│  PROBLEM → PLAN → BUILD → SHIP                          │
└─────────────────────────────────────────────────────────┘
```

**What changes:**
- Workspace stays organized (projects/, templates, handoffs)
- Context persists across sessions (NOTES.md, handoff logs)
- AI thinks like you (IDENTITY.md, your principles)
- Clear path from idea to shipped product

---

## Before / After

**Without vibeOS:**
```
You: Build me a habit tracker

AI: Here's a React app with 500 lines...
    [Generic code you didn't ask for]
    
You: That's not what I meant...
     [Starts over, frustrated]
```

**With vibeOS:**
```
You: vibeOS — I want to build a habit tracker

AI: Let's start with the problem.
    - What habit-tracking pain are you solving?
    - Is this for you or others?
    - What does "done" look like?

You: I keep forgetting to track. Apps are too complex.

AI: Got it. Creating PROBLEM.md...
    [Guides you step by step to shipped product]
```

---

## Works With

| Tool | Status |
|------|--------|
| Claude Code | ✓ Reads CLAUDE.md automatically |
| Cursor | ✓ Reads AGENTS.md automatically |
| Windsurf | ✓ Reads context files |
| Cline | ✓ Reads context files |
| Any AI that reads files | ✓ Just point to AGENTS.md |

---

## Quick Start (2 minutes)

```bash
# Clone vibeOS
git clone https://github.com/kv0906/vibeos.git
cd vibeos

# Open with your AI editor
cursor .     # or windsurf . or claude

# Start building
# Just say: "vibeOS — I want to build [your idea]"
```

The AI will guide you from there.

See [QUICKSTART.md](QUICKSTART.md) for the full setup.

---

## How It Works

### 1. You say what you want
```
"I want to build a landing page"
"I want to research competitor pricing"
"I want to write a blog post about AI"
```

### 2. AI detects your project type

| Type | What it is | Flow |
|------|------------|------|
| **Build** | Software, app, website | PROBLEM → PRD → TECH_SPEC → Ship |
| **Research** | Analysis, docs, learning | PROBLEM → NOTES |
| **Create** | Content, writing, design | PROBLEM → NOTES |

### 3. AI guides you step by step

- Asks the right questions
- Creates the right files
- Keeps context across sessions
- Helps you ship, not just code

---

## Structure

```
vibeos/
├── .os/                        ← The operating system
│   ├── SYSTEM.md               ← Core beliefs & principles
│   ├── MANIFESTO.md            ← How AI operates
│   ├── WORKFLOW.md             ← Project lifecycle
│   ├── IDENTITY.template.md    ← Your personal flavor (copy this)
│   └── TOOLBOX.md              ← Curated tools
│
├── roles/                      ← Skill modes
│   ├── ENGINEER.md             ← Build software
│   ├── PRODUCT_OWNER.md        ← Define products
│   └── templates/              ← More roles
│
├── examples/                   ← Real project journeys
│   ├── build-habit-tracker/    ← Full Build example
│   └── research-user-behavior/ ← Research example
│
└── projects/                   ← Your work goes here
```

---

## Who This Is For

- **Solo builders** shipping with AI
- **Product engineers** who own problem → code → ship
- **Anyone tired of scattered prompts** who wants a real system

## Who This Is NOT For

- Large enterprise teams needing governance
- Complete beginners who need fundamentals first
- People looking for magic prompts

---

## Core Principles

From [SYSTEM.md](.os/SYSTEM.md):

1. **Problem-first** — Understand before you build
2. **Simplicity** — Compress complexity, ship clean
3. **Systems over goals** — Build repeatable processes
4. **Ship and iterate** — 80% shipped beats 100% planned

---

## Examples

See real project journeys in [examples/](examples/):

- **[build-habit-tracker](examples/build-habit-tracker/)** — Full Build project: idea → shipped app
- **[research-user-behavior](examples/research-user-behavior/)** — Research project: question → insights

---

## Customize It

vibeOS is meant to be forked and customized:

- **`.os/SYSTEM.md`** — Edit the principles to match your beliefs
- **`.os/IDENTITY.md`** — Add your personal voice and style
- **`.os/MANIFESTO.md`** — Adjust how the AI operates
- **`roles/`** — Create custom roles for your workflow

The best version of vibeOS is the one you make your own.

---

*Think deeply. Build simply. Let systems carry the weight.*
