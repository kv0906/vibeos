# vibeOS

> A framework for AI-assisted product building. Not the holy grail — just one way that works.

---

## Disclaimer

This is not the only way. It's not perfect for all projects, team sizes, or contexts.

This is simply **my workflow** — how I think, build, and ship with AI as a cognitive extension. I'm sharing it because it helped me, and it might help you.

There are many ways to build workflows and maintain context. This is the simplest approach I could articulate. Take what works, ignore what doesn't, make it yours.

---

## Prerequisites

Before using vibeOS, you need an AI coding environment:

| Tool | Setup |
|------|-------|
| **Cursor** | [cursor.com](https://cursor.com) → Download → Open folder with `cursor .` |
| **Windsurf** | [codeium.com/windsurf](https://codeium.com/windsurf) → Download → Open folder |
| **Claude Code** | `npm install -g @anthropic-ai/claude-code` → Run `claude` in terminal |
| **VS Code + Copilot** | Works, but less integrated — paste prompts manually |

### Quick Setup

```bash
# Clone vibeOS
git clone https://github.com/kv0906/vibeos.git
cd vibeos

# Open with your AI editor
cursor .        # or
windsurf .      # or
claude          # for Claude Code
```

The AI will automatically read `AGENTS.md` (or `CLAUDE.md`) and understand how to operate.

---

## Before / After

**Without vibeOS:**
```
You: Build me a sales dashboard

AI: Here's a React dashboard with charts...
    [500 lines of generic code]
    
You: Wait, that's not what I meant...
```

**With vibeOS:**
```
You: vibeOS — I want to build a sales dashboard

AI: Let's start with the problem.
    - What pain are you solving? (manual reporting? slow insights?)
    - Who needs this dashboard?
    - What decisions will it drive?

You: I spend 4 hours every Monday making reports manually...

AI: Got it. Let me create your PROBLEM.md:
    [Creates focused problem definition]
    
    Before we build, let's plan the phases...
```

The difference: **context-aware building** instead of generic code generation.

---

## What This Is

A modular "operating system" for product engineers who:
- Understand problems deeply
- Ship fullstack with AI assistance
- Want a repeatable process, not just prompts

## What You Get

- **Universal principles** (SYSTEM.md) — mindset that applies everywhere
- **Personal identity** (IDENTITY.md) — your flavor, your voice
- **Role skills** (ENGINEER, PRODUCT_OWNER, DESIGNER, ANALYST, GENERALIST)
- **Project workflow** (PROBLEM → PRD → Build → Ship)
- **Artifact templates** that create resumable context

## Quick Start

```bash
# 1. Copy identity template
cp os/IDENTITY.template.md os/IDENTITY.md

# 2. Fill in your details
# 3. Start a project
mkdir -p projects/my-project

# 4. Say "vibeOS" to your AI and start building
```

See [QUICKSTART.md](QUICKSTART.md) for the full 5-minute setup.

---

## Structure

```
vibeos/
├── os/
│   ├── SYSTEM.md              ← Universal principles
│   ├── IDENTITY.template.md   ← Personal flavor (copy this)
│   ├── MANIFEST.md            ← How it works together
│   ├── WORKFLOW.md            ← Project lifecycle
│   └── TOOLBOX.md             ← Curated tools
│
├── roles/                      ← Pick your mode
│   ├── ENGINEER.md
│   ├── PRODUCT_OWNER.md
│   └── templates/
│       ├── DESIGNER.md
│       ├── ANALYST.md
│       └── GENERALIST.md
│
├── examples/                   ← See it in action
│   ├── designer-portfolio/
│   └── analyst-dashboard/
│
└── projects/                   ← Your work goes here
```

---

## The Core Loop

```
PROBLEM → RESEARCH → PLAN → BUILD → ITERATE
```

Every session ends with a handoff. Context is never lost.

---

## Who This Is For

- Solo builders shipping with AI
- Product engineers who own problem → code → ship
- Anyone tired of "prompt tips" who wants a real workflow

## Who This Is NOT For

- Large enterprise teams needing governance
- Complete beginners who need fundamentals first
- People looking for magic prompts

---

*Think deeply. Build simply. Let systems carry the weight.*
