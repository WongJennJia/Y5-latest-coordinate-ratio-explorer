# Math Explorer: Coordinates, Ratio & Proportion Adventure

A production-ready, data-driven EdTech learning shell for Malaysian Year 5 students, built on this project's TanStack Start + Tailwind v4 stack. This first build delivers the full navigation shell, design system, centralized content JSON, global progress state, and all 8 page shells with the requested component placeholders.

## Design System (src/styles.css)

Define semantic tokens in oklch so components never hardcode colors:
- `--primary` = Emerald `#10B981`; `--primary-foreground` near-white
- Mint surface scale (`--mint-50` ≈ `#E6F4EA` up through emerald) for backgrounds and roadmap nodes
- `--accent` / a dedicated `--cta` = Vibrant Orange `#F97316`, used ONLY for key buttons/CTAs
- Body text in charcoal/slate; cards spacious with soft shadows and rounded corners
- Friendly modern font pairing (display + clean body), generous spacing, smooth transitions
- Light theme primary; responsive-first (iPad & mobile)

## Architecture

```text
src/
  data/missions.json          # ALL teaching text, quizzes, metadata, DSKP refs
  lib/progress-context.tsx    # global unlock/progress state (React context + localStorage)
  components/
    app-sidebar.tsx           # fixed elegant sidebar nav (8 tabs, active state)
    RoadmapNode.tsx, PedagogyTabs.tsx, ResponsiveIframe.tsx, MissionCard.tsx
  routes/
    __root.tsx                # wrap app in ProgressProvider + SidebarProvider layout
    index.tsx                 # Home — Adventure Roadmap
    getting-started.tsx       # Intro + YouTube + H5P placeholder
    coordinates.tsx           # Topic 7.1 — Learn/Explore/Practice tabs
    ratio.tsx                 # Topic 7.2
    proportion.tsx            # Topic 7.3
    final-challenge.tsx       # Pesta Ria Sekolah carnival simulation
    reflection.tsx            # Teacher-Developer Reflection
    about.tsx                 # Credits & DSKP reference
```

## Data layer — src/data/missions.json

Standardized, easily-editable structure. Shape per mission:
```text
{
  "missions": [
    {
      "id": "coordinates",
      "title": "Coordinates Mission",
      "topicCode": "7.1",
      "standard": "7.1.1 — horizontal & vertical distance between two coordinates",
      "performanceLevels": [
        { "pl": "PL1", "desc": "State the axis" },
        { "pl": "PL2", "desc": "Explain the steps" },
        { "pl": "PL3", "desc": "Justify the answers" }
      ],
      "icon": "Grid3x3",
      "learn": { "intro": "...", "concepts": ["..."] },
      "explore": { "geogebra": "https://www.geogebra.org/classroom/asxd8tzc" },
      "practice": { "questions": [ { "q": "...", "options": [...], "answer": 0 } ] }
    }
    // ratio (7.2: Part-Part / Part-Whole / Whole-Part), proportion (7.3.1)
  ],
  "meta": { "course": "EDUP2112", "audience": "Year 5 (10–11)", "video": "byjmR7JBXKc" }
}
```
All page copy and quiz items are read from this file — nothing hardcoded in components.

## Global navigation & state

- **Sidebar** (shadcn sidebar, `collapsible="icon"`): 8 tabs with Lucide icons, active highlight via `useRouterState` pathname, collapsible with always-visible trigger in a slim header. Brand block at top.
- **ProgressProvider**: holds `{ completed: Record<missionId, boolean> }`, exposes `isUnlocked(id)`, `markComplete(id)`, sequential unlock logic (Coordinates → Ratio → Proportion → Final Challenge), persisted to localStorage. Wrapped in `__root.tsx`.

## Page shells

- **Home (Adventure Roadmap):** 4 milestone nodes (Coordinates, Ratio, Proportion, Final Challenge) on a connected progression path, with badge lock/unlock visuals + overall progress bar driven by ProgressProvider. Student dashboard greeting/stats.
- **Getting Started:** two-column premium layout. Left = instructional card with responsive `aspect-video` YouTube iframe (`byjmR7JBXKc`). Right = styled H5P placeholder card with a loading/shimmer micro-interaction.
- **Coordinates (7.1):** `[Learn] → [Explore] → [Practice]` PedagogyTabs. Learn = placeholder container reserved for the future native coordinate-grid helper + concept text from JSON. Explore = responsive GeoGebra Classroom iframe (`asxd8tzc`). Practice = quiz scaffold from JSON. PL1/PL2/PL3 badges shown.
- **Ratio (7.2) & Proportion (7.3):** same Learn/Explore/Practice scaffold reading their JSON entries, with reserved interactive placeholders.
- **Final Challenge (Pesta Ria Sekolah):** carnival-themed multi-stage layout with placeholder stage cards (e.g. "Gerai Satay" coordinate find, "Sirap Bandung" ratio mixer via future sliders). Locked until prior missions complete.
- **Teacher-Developer Reflection:** academic dashboard with typeset sections — Project Strengths, Areas for Improvement, Pedagogical Design Justifications (KPPB alignment) — dummy editable text from JSON/constants.
- **About Project:** credits + full DSKP reference table (topics, standards, PLs) and EDUP2112 metadata.

## Technical notes
- Each route defines its own `head()` meta (title/description/og) for SEO; only leaf routes add og:image.
- All routes get `errorComponent` / `notFoundComponent`; root already has not-found.
- Icons via `lucide-react`; install if not present. Reuse existing shadcn `sidebar`, `tabs`, `card`, `button`, `progress`, `badge`.
- CTAs use the orange `--cta` token exclusively; everything else mint/slate.

## Out of scope for this build (reserved placeholders)
Native interactive coordinate grid, working ratio sliders, full scored quiz engine, and the live carnival simulation logic — structural placeholders are created now so they slot in later.
