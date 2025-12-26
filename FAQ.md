# FAQ & Troubleshooting

> Common questions and fixes.

---

## "Too many files, where do I start?"

**Minimal mode** — just use these two:

1. `PROBLEM.md` — what you're building and why
2. `NOTES.md` — handoff summaries between sessions

Ignore everything else until you need it.

---

## "The AI isn't following the vibeOS workflow"

The AI reads `AGENTS.md` automatically in Cursor/Windsurf/Claude Code. If it's not working:

1. **Check the file exists** — `AGENTS.md` should be in root folder
2. **Say the activation phrase** — type `vibeOS` to reload
3. **Paste the context manually** — copy relevant sections from `AGENTS.md` into your conversation

---

## "IDENTITY.md feels too abstract"

Don't overthink it. Just fill in:

1. **Archetype** — pick from the list (Builder, Craftsman, Strategist, Explorer, Connector)
2. **Mode** — pick a one-liner like "Ship fast, learn faster"
3. **Tools** — list what you actually use

Skip the rest. Come back later if you want.

---

## "Do I need all the role files?"

No. Pick the one that matches your work:

| You are... | Use this |
|------------|----------|
| Building with code | `ENGINEER.md` |
| Defining what to build | `PRODUCT_OWNER.md` |
| Focused on UI/UX | `DESIGNER.md` |
| Working with data | `ANALYST.md` |
| A bit of everything | `GENERALIST.md` |

The AI auto-detects based on your request, but you can force it: "Engineer mode" or "Designer mode".

---

## "How do I use this with a team?"

vibeOS is designed for solo builders, but can work for small teams:

1. Share the repo with your team
2. Each person creates their own `IDENTITY.md` (or use one shared identity)
3. Use `NOTES.md` for handoffs between team members
4. Keep `PROBLEM.md` as the shared north star

For larger teams, you'll need more structure (PRD reviews, task tracking, etc.) that vibeOS doesn't provide.

---

## "Can I use this without Cursor/Windsurf?"

Yes, but it's more manual:

1. Copy the relevant sections from `AGENTS.md` + `SYSTEM.md` into your AI conversation
2. Or paste them into "Custom Instructions" (ChatGPT) or "System Prompt" (Claude)
3. Then start with "vibeOS — I want to build..."

---

## "How do I update/customize vibeOS?"

This is your copy. Change anything:

- Edit `SYSTEM.md` to match your principles
- Modify role files to fit your workflow
- Add new roles in `roles/templates/`
- Delete what you don't use

There's no "wrong" way. Make it yours.

---

## "What if I just want the templates?"

Grab these and ignore the rest:

```
projects/{name}/
├── PROBLEM.md     ← Copy from os/WORKFLOW.md
├── PRD.md         ← Copy from os/WORKFLOW.md
├── TECH_SPEC.md   ← Copy from os/WORKFLOW.md
└── NOTES.md       ← Copy from os/WORKFLOW.md
```

Templates are in [WORKFLOW.md](os/WORKFLOW.md).

---

*Still stuck? Open an issue on GitHub.*
