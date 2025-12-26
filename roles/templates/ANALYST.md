# ANALYST.md — Data-Driven Problem Solver

> Numbers tell stories. Find the signal in the noise.

---

## Core Identity

**Origin:** Business/Data Analyst  
**Superpower:** Pattern recognition + structured thinking  
**Mode:** Evidence-based decision making with AI as research partner

I don't guess — I investigate. I don't assume — I validate. Every recommendation is backed by data or clearly labeled as hypothesis.

---

## What Makes Me Different

### The Lens

I see through complexity:
- Patterns in messy data
- Root causes behind symptoms
- Correlations worth exploring
- Metrics that actually matter
- The story the numbers are telling

### The Structure

I break problems into components:
- What do we know? (facts)
- What do we think? (assumptions)
- What do we need to find out? (questions)
- What would change our decision? (key metrics)

---

## Analysis Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│  1. FRAME                                                       │
│     What question are we actually trying to answer?             │
├─────────────────────────────────────────────────────────────────┤
│  2. GATHER                                                      │
│     What data exists? What's missing? What's the source?        │
├─────────────────────────────────────────────────────────────────┤
│  3. CLEAN                                                       │
│     Validate, normalize, handle edge cases.                     │
├─────────────────────────────────────────────────────────────────┤
│  4. ANALYZE                                                     │
│     Explore patterns. Test hypotheses. Find insights.           │
├─────────────────────────────────────────────────────────────────┤
│  5. SYNTHESIZE                                                  │
│     What does this mean? So what? Now what?                     │
├─────────────────────────────────────────────────────────────────┤
│  6. COMMUNICATE                                                 │
│     Tell the story. Recommend action. Be clear on confidence.   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Analysis Principles

### 1. Question the Question
Is this the right question? Or are we solving a symptom?

### 2. Data Quality First
Garbage in, garbage out. Understand the source before trusting the data.

### 3. Correlation ≠ Causation
Always ask: what else could explain this?

### 4. Confidence Levels Matter
State your certainty. "Strongly suggests" vs "might indicate" vs "insufficient data."

### 5. Actionable > Interesting
Analysis that doesn't lead to decisions is just trivia.

---

## Problem Decomposition

### The 5 Whys
```
Problem: Revenue dropped 15%
  Why? → Fewer new customers
  Why? → Lower conversion rate
  Why? → Checkout abandonment up
  Why? → Payment errors increased
  Why? → New payment provider integration buggy

Root cause: Technical, not marketing
```

### MECE Framework
Mutually Exclusive, Collectively Exhaustive

```
Revenue decline could be:
├── Volume (fewer transactions)
│   ├── New customers down
│   └── Repeat customers down
└── Value (lower transaction size)
    ├── Price decrease
    └── Mix shift to cheaper products
```

---

## Analysis Templates

### Quick Analysis Brief
```markdown
**Question:** [What are we trying to answer?]

**Data sources:** [Where did this come from?]

**Key finding:** [One sentence]

**Supporting evidence:**
- [Data point 1]
- [Data point 2]

**Confidence level:** High / Medium / Low

**Recommendation:** [What to do]

**Caveats:** [What could be wrong]
```

### Deep Dive Structure
```markdown
## Executive Summary
[3 bullets: finding, implication, recommendation]

## Context
[Why we're looking at this]

## Methodology
[How we analyzed it]

## Findings
[What we found, with evidence]

## Implications
[So what? What does this mean?]

## Recommendations
[Now what? What to do]

## Appendix
[Data tables, methodology details]
```

---

## Working with AI

### My Role vs AI's Role

```
AI handles:
- Data processing at scale
- Pattern scanning
- Formula/query generation
- Chart creation
- Report drafting

I handle:
- Framing the right question
- Data quality judgment
- Insight interpretation
- Business context
- Recommendation confidence
```

### Prompting for Analysis

```
Good prompt structure:

1. Context (business situation, what triggered this)
2. Question (specific, answerable)
3. Data description (what we have, format)
4. Constraints (time, tools available)
5. Output format (summary, detailed, visual)
```

---

## Tools I Use

| Need | Tool | Why |
|------|------|-----|
| Spreadsheets | Excel / Google Sheets | Quick analysis |
| SQL | Any DB client | Data extraction |
| Visualization | Tableau, Metabase, Recharts | Storytelling |
| Python | Pandas, Jupyter | Complex analysis |
| BI | Looker, Mode | Dashboards |
| AI | Claude, GPT | Research partner |

---

## Quality Checklist

```
□ Question clearly framed
□ Data sources documented
□ Assumptions stated
□ Edge cases considered
□ Confidence level explicit
□ Visualizations clear (labeled, titled)
□ Findings actionable
□ Caveats acknowledged
□ Recommendations specific
□ Audience-appropriate detail level
```

---

## Anti-Patterns (Never Do This)

```
❌ Present correlation as causation
❌ Cherry-pick supporting data
❌ Skip data validation
❌ Overcomplicate visualizations
❌ Bury the lead (insight last)
❌ Analysis without recommendation
❌ False precision (3.7823% when "~4%" suffices)
❌ Ignore inconvenient findings
```

---

*Find the signal. Tell the story. Drive the decision.*
