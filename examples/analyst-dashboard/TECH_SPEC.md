# Sales Analytics Dashboard — Tech Spec

## Stack

- **Framework:** Next.js (need API routes for data fetching)
- **UI:** shadcn/ui + Tailwind
- **Charts:** Recharts (React-native, composable)
- **Database:** Supabase (Postgres) — sync from source systems
- **Hosting:** Vercel
- **Scheduling:** Vercel Cron (daily data sync)

## Why This Stack?

| Choice | Reason |
|--------|--------|
| Next.js | API routes for data, SSR for fast load |
| Supabase | SQL I already know, easy to query |
| Recharts | Good docs, works with React |
| Vercel Cron | Free tier, simple scheduling |

## Architecture

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│ Source Data │ ───→ │  Supabase   │ ───→ │  Next.js    │
│ (CSV/API)   │ sync │  (Postgres) │ query│  Dashboard  │
└─────────────┘      └─────────────┘      └─────────────┘
                           ↑
                     Vercel Cron
                     (daily sync)
```

## Data Model

```sql
-- Core tables (simplified from source)

CREATE TABLE orders (
  id UUID PRIMARY KEY,
  order_date DATE,
  revenue DECIMAL(10,2),
  channel VARCHAR(50),      -- 'web', 'app', 'marketplace'
  category VARCHAR(100),
  region VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE daily_metrics (
  date DATE PRIMARY KEY,
  revenue DECIMAL(10,2),
  orders INTEGER,
  sessions INTEGER,         -- from analytics
  aov DECIMAL(10,2),        -- calculated
  conversion_rate DECIMAL(5,4),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX idx_orders_date ON orders(order_date);
CREATE INDEX idx_orders_channel ON orders(channel);
```

## API Routes

```
GET /api/metrics/summary
  → Returns: { revenue, orders, aov, conversionRate, changes }
  → Params: startDate, endDate

GET /api/metrics/trend
  → Returns: [{ date, revenue, orders }]
  → Params: startDate, endDate, granularity (day/week/month)

GET /api/metrics/breakdown
  → Returns: { byChannel: [...], byCategory: [...], byRegion: [...] }
  → Params: startDate, endDate

GET /api/products/top
  → Returns: [{ name, revenue, change }]
  → Params: startDate, endDate, limit
```

## Key Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Data sync | Daily batch via Cron | Real-time not needed, simpler |
| Auth | Basic password or none | Internal tool, trusted network |
| Caching | ISR (60 min) | Data is daily, no need for fresh |
| Date handling | date-fns | Lightweight, good API |

## Phases

### Phase 1: Data Foundation (Day 1-3)
- [ ] Setup Supabase, create tables
- [ ] Manual CSV import of sample data
- [ ] Test queries for all metrics
- [ ] Setup Next.js project

### Phase 2: API Layer (Day 4-6)
- [ ] Build /api/metrics/summary
- [ ] Build /api/metrics/trend
- [ ] Build /api/metrics/breakdown
- [ ] Test with Postman/curl

### Phase 3: Dashboard UI (Day 7-12)
- [ ] Layout with shadcn
- [ ] Metric cards (KPIs)
- [ ] Line chart (trend)
- [ ] Pie chart (channels)
- [ ] Bar chart (categories)
- [ ] Date range picker
- [ ] Mobile responsive

### Phase 4: Automation (Day 13-15)
- [ ] Vercel Cron job for daily sync
- [ ] Data sync script (from source)
- [ ] Error handling / alerts

### Phase 5: Polish & Launch (Day 16-21)
- [ ] Loading states
- [ ] Error states
- [ ] Empty states
- [ ] Performance optimization
- [ ] Share with stakeholders
- [ ] Gather feedback
- [ ] Iterate

## Data Sync Script (Pseudocode)

```javascript
// /api/cron/sync-data.ts
// Runs daily at 6am via Vercel Cron

export async function GET() {
  // 1. Fetch yesterday's orders from source (API or file)
  const orders = await fetchOrdersFromSource(yesterday);
  
  // 2. Upsert into Supabase
  await supabase.from('orders').upsert(orders);
  
  // 3. Recalculate daily_metrics
  await supabase.rpc('calculate_daily_metrics', { date: yesterday });
  
  // 4. Log success
  return Response.json({ synced: orders.length });
}
```

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Source data format changes | Schema validation on sync |
| Sync job fails | Slack alert, manual fallback |
| Slow queries | Pre-aggregated daily_metrics table |
| Stakeholders want more | Scope doc, v2 backlog |

---
*Status: Ready to Build*
