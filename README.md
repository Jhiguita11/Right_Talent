# Right Talent — Pro Services

Bilingual (EN/ES) marketing site for **Right Talent Pro Services**, built with React + Vite.
Design inspired by the brand deck and aimbridgehospitality.com — deep navy + gold, serif display type, premium hospitality feel.

## Stack
- React 18 + Vite 6
- Bun as package manager / runtime
- Plain CSS design system (`src/styles.css`), no UI framework

## Commands
```bash
bun install      # install dependencies
bun run dev      # start dev server (http://localhost:5173)
bun run build    # production build → dist/
bun run preview  # preview the production build
```

## Structure
- `src/data/content.js` — **all copy lives here**, as `{ en, es }` pairs. Edit text here.
- `src/data/images.js` — Unsplash hospitality imagery (swap for real brand photos).
- `src/context/LanguageContext.jsx` — language state, persisted to `localStorage`, with `t()` helper.
- `src/components/` — one file per section (Hero, Leadership, Purpose, Challenge, Solution, Services, Value, Philosophy, Contact, Footer) + Navbar.

## Sections (from the brand deck)
Hero → 14 Years of Leadership (120+ partners) → Human Purpose → Hospitality Challenge → Solution → Core Services → Differentiating Value (100/0/95) → Philosophy → Contact (Ready to raise your standards?) → Footer.

## Notes
- The contact form opens the visitor's mail client (`mailto:`) — no backend yet. Wire it to a form service (Formspree, Resend, etc.) when ready.
- Replace the Unsplash images in `src/data/images.js` with licensed brand photography before launch.
- Contact: hello@rtproservices.com · www.rtproservices.co
