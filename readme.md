# Allstars Indoor Playland — Design System

Brand system for **Allstars Indoor Playland**, Edmonton's largest indoor playground (9510 - 12 Ave SW, Edmonton, AB), built to redesign allstarsplayland.com with a strong local-SEO / GEO (AI answer-engine) focus.

Source: business facts gathered from the live site (allstarsplayland.com) and public listings (Yelp, Facebook, TravelAlberta, Instagram @allstarsyeg). No original logo file was supplied — the wordmark in `assets/logo/` is a fresh interpretation built from the brand name and existing colour story (red/yellow/blue "star" theme); swap in the real logo file whenever it's available.

## Content fundamentals
- **Voice:** warm, plain, parent-to-parent. Leads with concrete facts (square footage, zipline length, prices) over vague adjectives.
- **Person:** "we / you" — talking to a parent planning a visit or party.
- **Casing:** sentence case for headlines and body. Short eyebrow labels may go uppercase.
- **Local-first:** every page names Edmonton explicitly and ties claims to the neighbourhood (Heritage Valley / SW Edmonton) — this is deliberate for local search and AI-overview citations.
- **No emoji** in body copy.

## Visual foundations
- **Colour:** bright primary "candy playground" palette — cherry red (#EF3340) as the primary/CTA colour, sunshine yellow (#FFC93C) as the accent/highlight, sky blue (#1E88E5) as secondary/links, grass green (#3CB878) for success/open-now states. Ink navy (#1B1B2F) for text and dark sections; warm cream (#FFF8EC) as the alternate background — never more than white + cream as base fields.
- **Type:** **Fredoka** (rounded, bold, playful) for all display/headline type; **Nunito Sans** for body and UI text.
- **Shape language:** big, soft, huggable — 18–28px radii on cards, fully-pill buttons and tags. Nothing sharp.
- **Shadows:** soft ink shadow under cards (`--shadow-card`); a warm red-tinted lift shadow under primary CTAs (`--shadow-lift`).
- **Imagery:** bright, candid, kid-in-motion photography (climbing, sliding, laughing) — never staged corporate stock. Currently placeholdered; drop in real venue photography.
- **Motion:** light and bouncy — small scale/lift on hover, no aggressive parallax.

## Iconography
No icon set was supplied. A small number of simple line glyphs (star, pin, clock, phone) are drawn directly in components as inline SVG since no source icon library exists — keep any additions to this same single-line, rounded style.

## Index
- `styles.css`, `tokens/` — foundations
- `components/core/` — Button, Badge, Card
- `components/navigation/` — NavBar
- `guidelines/` — Colors, Type, Spacing, Brand specimen cards
- `assets/logo/` — wordmark lockup (placeholder, see note above)
- `ui_kits/marketing/` — the actual redesigned allstarsplayland.com pages (8 static HTML pages, SEO/GEO-optimized: unique titles/meta, LocalBusiness + FAQPage JSON-LD, sitemap.xml, robots.txt)
