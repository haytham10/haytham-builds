# Haytham Builds

Credibility site for Haytham Builds — a founder-led outbound systems partner for expertise-led businesses selling into organisations.

## What is included

- Responsive single-page site
- Interactive WebGL Resolved Frame hero
- Scroll and pointer motion with reduced-motion support
- Real founder portrait and Haytham Builds production marks
- Verified company logo assets with a unified neutral treatment
- Google Calendar booking links
- Accessible navigation, labels, and responsive layouts

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Then open the local address printed by Vite.

## Production build

```bash
npm run build
```

## Main files

- `app/page.tsx` — page content and interactions
- `app/globals.css` — visual system, layout, motion, and 3D treatment
- `app/layout.tsx` — document metadata and font setup
- `app/components/Icons.tsx` — the shared 24px line-icon set
- `public/brand/` — Haytham Builds production logos
- `public/logos/` — third-party company marks used in the experience section

## Brand

Charcoal `#171717`, warm off-white `#F3F0E8`, muted sand `#C7A96B`, stone grey `#8E8B84`, and warm ivory `#F5F2EA`.

Type is set in Inter Tight (headings, UI, body) with Instrument Serif italic reserved for the accent words inside headings and the founder pull quote. Icons share one 24px grid with a 1.5px hairline stroke and a single solid sand element, echoing the sand block in the logo.

## Third-party marks

Company names and logos remain the property of their respective owners. They are shown only to identify organisations connected to Haytham's professional experience and do not imply sponsorship or endorsement. Source details are recorded in `public/logos/NOTICE.md`.
