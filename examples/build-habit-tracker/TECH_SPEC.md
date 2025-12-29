# Habit Tracker — Tech Spec

## Stack
- Frontend: Vanilla HTML/CSS/JS (keep it simple)
- Backend: None (local storage only)
- Database: localStorage
- Hosting: Vercel (static)

## Architecture
```
┌──────────────┐
│   Browser    │
├──────────────┤
│  index.html  │ ← Single page
│  style.css   │ ← Minimal styles
│  app.js      │ ← All logic
├──────────────┤
│ localStorage │ ← Persist habits
└──────────────┘
```

## Key Decisions
| Decision | Choice | Why |
|----------|--------|-----|
| Framework | None (vanilla) | Simplest. No build step. Ships in hours. |
| Storage | localStorage | No backend needed. Works offline. |
| Styling | CSS only | No Tailwind overhead for 1 page |
| Hosting | Vercel | Free, instant deploys |

## Implementation Notes
- Habits stored as JSON array in localStorage
- Each habit: `{ id, name, completedToday: boolean }`
- Reset completions at midnight (check date on load)
- Mobile-first responsive design

---
*Status: Done*
