# vibeOS Color System

> Dark-mode first. Builder aesthetic. Role-aware accents.

---

## Primary Palette

### Background Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Black** | `#0A0A0B` | 10, 10, 11 | Primary background |
| **Dark** | `#0F0F10` | 15, 15, 16 | Card backgrounds |
| **Elevated** | `#18181B` | 24, 24, 27 | Elevated surfaces |
| **Border** | `#27272A` | 39, 39, 42 | Subtle borders |

### Text Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Primary** | `#F9FAFB` | 249, 250, 251 | Headings, primary text |
| **Secondary** | `#A1A1AA` | 161, 161, 170 | Body text, descriptions |
| **Muted** | `#71717A` | 113, 113, 122 | Tertiary text, placeholders |
| **Disabled** | `#52525B` | 82, 82, 91 | Disabled states |

---

## Brand Accent

### Primary Gradient
```css
background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
```

| Name | Hex | Usage |
|------|-----|-------|
| **Indigo** | `#6366F1` | Gradient start, links |
| **Violet** | `#8B5CF6` | Gradient end, hover states |
| **Indigo Light** | `#818CF8` | Light accent variant |
| **Violet Light** | `#A78BFA` | Light accent variant |

---

## Role Colors

Each role has a distinct color for visual differentiation:

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Engineer** | Green | `#10B981` | Build, code, implement |
| **Product** | Blue | `#3B82F6` | PRD, features, strategy |
| **Designer** | Pink | `#EC4899` | UI, UX, visual design |
| **Analyst** | Amber | `#F59E0B` | Data, research, metrics |
| **Generalist** | Gray | `#6B7280` | General tasks |

---

## Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success** | `#10B981` | Completed, shipped, positive |
| **Warning** | `#F59E0B` | Caution, in-progress |
| **Error** | `#EF4444` | Errors, failures |
| **Info** | `#3B82F6` | Informational |

---

## CSS Variables

```css
:root {
  /* Backgrounds */
  --bg-black: #0A0A0B;
  --bg-dark: #0F0F10;
  --bg-elevated: #18181B;
  --bg-border: #27272A;
  
  /* Text */
  --text-primary: #F9FAFB;
  --text-secondary: #A1A1AA;
  --text-muted: #71717A;
  --text-disabled: #52525B;
  
  /* Brand */
  --accent-indigo: #6366F1;
  --accent-violet: #8B5CF6;
  --accent-gradient: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  
  /* Roles */
  --role-engineer: #10B981;
  --role-product: #3B82F6;
  --role-designer: #EC4899;
  --role-analyst: #F59E0B;
  --role-generalist: #6B7280;
  
  /* Semantic */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
}
```

---

## Tailwind Config

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'vibe': {
          'black': '#0A0A0B',
          'dark': '#0F0F10',
          'elevated': '#18181B',
          'border': '#27272A',
        },
        'accent': {
          'indigo': '#6366F1',
          'violet': '#8B5CF6',
        },
        'role': {
          'engineer': '#10B981',
          'product': '#3B82F6',
          'designer': '#EC4899',
          'analyst': '#F59E0B',
        }
      }
    }
  }
}
```

---

## Light Mode (Optional)

For contexts requiring light backgrounds:

| Name | Hex | Usage |
|------|-----|-------|
| **Background** | `#FFFFFF` | Primary background |
| **Surface** | `#F9FAFB` | Card backgrounds |
| **Border** | `#E5E7EB` | Borders |
| **Text Primary** | `#111827` | Headings |
| **Text Secondary** | `#4B5563` | Body text |

---

*Dark mode is the default. Light mode only when necessary.*
