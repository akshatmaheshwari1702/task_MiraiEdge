# FE Dashboard (CRA) — Chakra + Tailwind + Zustand + Recharts + Excel Export

## Setup
1. `npm install`
2. `npm start`

## Features
- CRA + TypeScript
- Chakra UI (layout, theming, dark mode)
- Tailwind utilities (works alongside Chakra)
- Zustand store for UI state (sidebar visibility, search query)
- Users page: fetch from ReqRes dummy API, search, pagination, Export to Excel
- Reports: fetch from dummy reports API (`fetchReports`), two charts (Line + Bar), Download Report (Excel)

## Notes
- Replace `fetchReports()` with a real endpoint when available.
- Excel export uses SheetJS (xlsx).
