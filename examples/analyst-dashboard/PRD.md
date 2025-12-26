# Sales Analytics Dashboard — PRD

## Why

4 hours/week × 52 weeks = 208 hours/year wasted on manual reporting. That's 5 weeks of my life. A dashboard pays for itself in month one.

## What

A self-serve sales dashboard that:
- Shows key metrics at a glance (revenue, orders, AOV, conversion)
- Compares current period vs previous
- Breaks down by channel, product category, region
- Updates automatically (daily or real-time)
- Sends weekly summary email (optional)

## User Stories

- As a **Sales Manager**, I want to see today's revenue vs target, so I can adjust tactics
- As the **CEO**, I want a weekly snapshot without asking anyone, so I stay informed
- As **Minh (me)**, I want the data to update itself, so I can focus on insights, not data entry

## Scope

**In:**
- Revenue, Orders, AOV, Conversion Rate
- Daily/Weekly/Monthly views
- Channel breakdown (Web, App, Marketplace)
- Product category breakdown
- Region breakdown
- Period comparison (vs last week, vs last month, vs last year)
- Mobile-friendly

**Out:**
- Real-time updates (daily refresh is fine)
- Predictive analytics (v2)
- Custom report builder (v2)
- User authentication (internal tool, basic protection)

## Key Metrics

| Metric | Definition | Source |
|--------|------------|--------|
| Revenue | Total sales (after discounts, before tax) | Orders DB |
| Orders | Count of completed orders | Orders DB |
| AOV | Revenue / Orders | Calculated |
| Conversion Rate | Orders / Sessions | Analytics |
| Revenue by Channel | Revenue grouped by source | Orders DB |
| Revenue by Category | Revenue grouped by product category | Orders DB |

## Flow

```
Open Dashboard → See today's snapshot → Drill into channel/category → Compare periods → Export if needed
```

## Wireframe

```
┌─────────────────────────────────────────────────────────────────┐
│  Sales Dashboard                    [Date Range ▼] [Refresh]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ Revenue  │  │ Orders   │  │ AOV      │  │ Conv.    │        │
│  │ $124,500 │  │ 1,245    │  │ $100     │  │ 3.2%     │        │
│  │ ↑ 12%    │  │ ↑ 8%     │  │ ↑ 4%     │  │ ↓ 0.2%   │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  Revenue Trend                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │     📈 Line chart: Daily revenue, 30 days              │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
├──────────────────────────┬──────────────────────────────────────┤
│  By Channel              │  By Category                         │
│  ┌────────────────────┐  │  ┌────────────────────────────────┐ │
│  │ 🥧 Pie chart       │  │  │ 📊 Bar chart                   │ │
│  │ Web: 45%           │  │  │ Electronics: $50K              │ │
│  │ App: 35%           │  │  │ Fashion: $40K                  │ │
│  │ Marketplace: 20%   │  │  │ Home: $34K                     │ │
│  └────────────────────┘  │  └────────────────────────────────┘ │
│                          │                                      │
├──────────────────────────┴──────────────────────────────────────┤
│  Top Products This Period                                       │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ 1. Product A - $12,000 (↑ 25%)                          │   │
│  │ 2. Product B - $10,500 (↑ 10%)                          │   │
│  │ 3. Product C - $8,200 (↓ 5%)                            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Success Metrics

- Time saved: 4 hours/week → <30 min/week
- Stakeholder satisfaction: No more "where's the report?" messages
- Data freshness: Dashboard updates daily by 8am

---
*Status: In Progress*
