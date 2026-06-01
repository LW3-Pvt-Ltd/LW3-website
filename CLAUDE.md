# LW3 Business Site — Agent Context

This file is automatically read by the Claude agent at the start of every session.
**Always update this file** when new decisions, plans, or conventions are established.

---

## Project Overview

- **Project:** New LW3 Business Website
- **Owner:** Arohan Neog (arohan@logisticsw3.com)
- **Purpose:** Public-facing business site for Logistics W3 (LW3)
- **Workspace:** `/Users/arohanneog/Documents/WORK/New-LW3-Business-site/new-LW3-business-site`
- **Started:** 2026-05-20

---

## Agent Instructions

- Save all work to this workspace folder.
- After every meaningful decision or plan, update this `CLAUDE.md` file AND the memory file at `memory/project_lw3_business_site.md`.
- Keep a running **Decisions Log** at the bottom of this file.
- When building new pages or components, follow the conventions already established in this codebase (check existing files first).
- Never leave plans undocumented — if we discuss something, write it here.

---

## Tech Stack

- [x] **Framework:** React + Vite
- [x] **UI Components:** shadcn/ui (built on Radix UI + Tailwind CSS)
- [x] **Styling:** Tailwind CSS (via shadcn)
- [x] **Package Manager:** pnpm
- [x] **Hosting / Deployment:** Vercel
- [x] **Responsive:** Fully adaptive, mobile-first design
- [ ] **CMS:** TBD
- [ ] **Analytics:** TBD

### Conventions
- Use shadcn/ui components as the base for all UI elements
- Custom components go in `src/components/`
- Page-level components go in `src/pages/`
- Shared utilities go in `src/lib/`
- Always use Tailwind utility classes for styling; avoid inline styles
- Design from Figma — designs will be shared via Figma MCP link

---

## Agent Workflow Rules

- **Never re-read CLAUDE.md or memory files** — they are auto-loaded into context
- **Never re-read component files** unless about to edit them
- **New session per section conversion** — user provides Figma link, read once, build once
- **SVG → CSS conversion approach:** strip text paths from SVG (Python), overlay CSS text at Figma coords
- **Do not hallucinate font sizes** — always get them from Figma MCP screenshot + node metadata

---

## Site Structure / Pages Planned

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Home | `/` | in progress | All sections added as SVGs, Gap section partially converted |

---

## Design Conventions

- **Source of truth:** Figma (designs shared via Figma MCP link)
- Colors: Black background, white text throughout
- Fonts: D-DIN Bold, D-DIN Condensed, Cormorant Garamond Italic, SF Pro
- Breakpoints: Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px)
- Component naming: PascalCase for components, kebab-case for files (e.g., `HeroSection.tsx` in `hero-section.tsx`)

## Section-Specific Notes

### Hero & Nav
- **Navbar**: static image background (blurred dark texture), always visible, not a dropdown
- **Hero**: full-screen video background (autoplay, loop, muted) — video file to be provided by user
- Nav has 4 columns: Technology, Regulations, Statistics, Our Pilots — each with icon box + title + sub-links
- Hero text stack: "POST QUANTUM SECURED" → "BATTERY PASSPORT" → "for REGULATION (EU) 2023/1542" → description → "BOOK A DEMO" button

---

## Fonts

Full D-DIN family saved to `src/assets/fonts/` (OTF):
- D-DIN, D-DIN-Bold, D-DIN-Italic
- D-DINCondensed, D-DINCondensed-Bold
- D-DINExp, D-DINExp-Bold, D-DINExp-Italic
- Cormorant Garamond — Google Fonts (italic, used in hero "for" text)
- SF Pro — system font (logo tagline)

## Build Plan

### Phase 1 — Scaffold ✅ DONE
- Scaffolded manually (Vite interactive prompt blocked stdin in sandbox)
- `npm` used instead of `pnpm` (pnpm unavailable in sandbox; user runs pnpm locally)
- Tailwind CSS + PostCSS + Autoprefixer configured
- shadcn/ui CSS variables + `tailwindcss-animate` wired up
- Global CSS: @font-face for D-DIN family, Cormorant Garamond Google Font import, black bg / white text reset

### Phase 2 — Navbar (`src/components/Navbar/`) ✅ DONE → UPDATED
- `Navbar.tsx` — fixed header; desktop uses Figma SVG layer; mobile uses CSS hamburger + drawer
- `NavbarSVG.tsx` — renders the exact Figma navbar as an inline SVG (all text, logo, icons as vector paths via useRef+innerHTML). viewBox extended to `0 0 2060 164` (155px padding right) so Book a Demo button fits cleanly.
- `public/navbar-content.svg` — stripped SVG (base64 background image replaced with `/navbar-bg.jpg` placeholder)
- **Desktop (xl+):** NavbarSVG fills full width; "Book a Demo" CSS button absolutely positioned `right: 24px`
- **Mobile (<xl):** CSS logo mark + hamburger + 2-col grid drawer with nav items
- Old files kept (NavColumn.tsx, LogoSVG.tsx, icon SVGs) — no longer used on desktop but kept for reference
- Background image: drop `/public/navbar-bg.jpg` when ready (referenced by the SVG's pattern fill)

### Phase 3 — Hero (`src/components/Hero/`) ✅ DONE
- `HeroSection.tsx` — full-viewport, video placeholder (CSS dark gradient + grid), dark overlay
- Text stack: POST QUANTUM SECURED → BATTERY PASSPORT → for REGULATION (EU) 2023/1542 → description → CTA
- `BookDemoButton.tsx` — outlined white button, hover inverts, animated arrow
- Scroll indicator, bottom fade-to-black gradient

### Phase 4 — Wire Up ✅ DONE
- `App.tsx` composes Navbar + HeroSection
- `npm run build` passes cleanly (✓ built in 1.84s)

## Placeholders (swap later)
- Logo SVG
- Navbar background image
- Hero video file

## Current Sections in App.tsx (in order)

| Component | File | SVG Source | Status |
|-----------|------|-----------|--------|
| NavbarCSS | Navbar/NavbarCSS.tsx | navbar-vectors.svg | Built but NOT in App.tsx (reverted) — nav still SVG img |
| HeroNavSection | HeroNav/HeroNavSection.tsx | nav-hero-v2.svg | SVG img |
| GapSection | Gap/GapSection.tsx | gap-section-notxt.svg + gap-bg.jpg | SVG + CSS description text |
| BPAPSection | BPAP/BPAPSection.tsx | bpap-section-notxt.svg + CSS text/buttons | SVG bg + CSS overlay |
| MADPPSection | MADPP/MADPPSection.tsx | madpp-section-final.svg + full CSS overlay | SVG bg only (all text/capsules/triangles in CSS) |
| UYBPCERSection | UYBPCER/UYBPCERSection.tsx | uybpcer-section.svg | SVG img |
| KWWSOTWIDSection | KWWSOTWID/KWWSOTWIDSection.tsx | kwwsotwid-section-v2.svg | SVG img |
| YDNLYCSection | YDNLYC/YDNLYCSection.tsx | ydnlyc-section.svg | SVG img |
| InsightSection | Insight/InsightSection.tsx | insight-section-final.svg | SVG img |
| StatisticsSection | Statistics/StatisticsSection.tsx | statistics-section-v2.svg | SVG img |
| PartnersSection | Partners/PartnersSection.tsx | partners-section.svg | SVG img |
| BQEGVIRSection | BQEGVIR/BQEGVIRSection.tsx | bqegvir-section.svg | SVG img |
| BatteryStorySection | BatteryStory/BatteryStorySection.tsx | battery-story-section.svg | SVG img |
| FooterSection | Footer/FooterSection.tsx | footer.svg | SVG img |

## Assets in /public

- `nav-hero-v2.svg` — navbar + hero combined SVG
- `navbar-vectors.svg` — navbar without text (39KB, for future navbar CSS conversion)
- `gap-section-notxt.svg` — gap section SVG without description text (18MB)
- `gap-section-final2.svg` — original gap SVG (full, with all text as paths)
- `gap-bg.jpg` — extracted gap left-panel background texture (98KB)
- `gap-2b-block.svg` — $2B block SVG paths only (19.6KB, for future state-2 carousel)
- `gap-vectors.svg` — gap section vectors only, no text no bg (1.8KB)
- All other section SVGs named as `[section-name]-section.svg`

## Placeholders (swap later)
- Logo SVG (currently placeholder paths in LogoSVG.tsx)
- Navbar background image → drop `/public/navbar-bg.jpg`
- Hero video → drop `/public/hero-video.mp4`, uncomment `<video>` in HeroNavSection.tsx

---

## SEO Status

**Audit Date:** 2026-06-01  
**Audit Source:** www.lw3.world_issues_20260601.xlsx (90+ issues found)  
**Foundation Built:** ✅ robots.txt, sitemap.xml, meta tag utility, index.html enhanced  
**Critical Issues:** 5xx errors, duplicate titles/descriptions, HTTPS certs, mixed content, broken JS/CSS  
**Next:** Fix critical issues per `SEO_ACTION_PLAN.md`

---

## Decisions Log

| Date | Decision | Reason |
|------|----------|--------|
| 2026-05-20 | Project folder created, CLAUDE.md initialized | Starting point for the new LW3 site |
| 2026-05-20 | Memory + CLAUDE.md system established | Ensure agent retains full context across all sessions |
| 2026-05-20 | Tech stack confirmed: React + Vite + shadcn/ui + pnpm + Vercel | User decision; mobile-first adaptive site |
| 2026-05-20 | Design source: Figma (MCP link to be shared) | User has existing Figma designs per section; SVG exports as fallback |
| 2026-05-20 | Full D-DIN font family uploaded, saved to src/assets/fonts/ | Commercial font, provided by user as OTF files |
| 2026-05-20 | Nav icons to be built as inline SVG (white line-art) | User requested all components in CSS, no external images |
| 2026-05-20 | Logo, navbar bg image, hero video are placeholders for now | User will provide these assets later |
| 2026-05-20 | Scaffold done via manual file creation (npm, not pnpm) | pnpm unavailable in sandbox; user runs pnpm locally for dev |
| 2026-05-20 | Hero & Nav section fully built and build verified clean | Phase 1-4 complete; next: swap placeholders + add more sections |
| 2026-05-20 | Navbar rebuilt: Figma SVG export used as exact visual (NavbarSVG.tsx via innerHTML), Book a Demo is CSS-only overlaid right:24px | User uploaded nav bar.svg — all text/icons must be SVG paths, only button is CSS |
| 2026-05-20 | NavbarSVG viewBox extended to 2060 (from 1905) to give ~155px clean right margin for Book a Demo button | SVG paths end at ~x=1750; extension adds empty background space only |
| 2026-05-20 | "Book a Demo" removed from navbar entirely (desktop + mobile) | User decision — button not needed in nav |
| 2026-05-20 | NavbarSVG viewBox reverted to 0 0 1905 164 (no longer needs extra right padding) | Button removed so padding unnecessary |
| 2026-05-20 | Hero background grid removed permanently | User decision — not required ever |
| 2026-05-20 | HeroSection rebuilt pixel-perfect from SVG export (hero & nav section.svg) | User uploaded SVG; all positions, font sizes, and spacings reverse-engineered from SVG bounding boxes |
| 2026-05-20 | Hero layout: two absolute-positioned clusters (upper text + lower description+CTA) | Derived from SVG: text group at y≈221–384, description+button at y≈811–967 on 1117px canvas — large gap intentional for video |
| 2026-05-20 | "BATTERY PASSPORT" renders on one line (not two) per SVG evidence | SVG path [2] spans x=151–945 (794px wide), cap height 56px — single-line condensed bold |
| 2026-05-20 | All hero positions use vw/vh ratios: LEFT=7.98vw, tops as % of 1117px canvas | Keeps proportions exact at any viewport size matching reference aspect ratio |
| 2026-05-20 | BookDemoButton replaced with inline <a> in HeroSection for precise dimension control | Button rect in SVG: 208×57px (10.92vw × 5.1vh), text vertically centered |
| 2026-05-20 | Navbar desktop rebuilt: logo stays SVG (paths), all column text is real CSS | User request — NavbarSVG.tsx kept for reference, Navbar.tsx now uses inline SVG for logo+icons, CSS text for titles+sub-links |
| 2026-05-20 | Navbar column layout: left=29.32vw, right=7.4vw, 4 flex columns with icon+text | Derived from SVG: col icons at x=559,869,1187,1520; text titles at y=23, sub-links at bottom y≈130-150 |
| 2026-05-20 | Navbar column title font: D-DINCondensed-Bold, 1.15vw; sub-links: D-DINCondensed, 0.78vw | Cap heights from SVG paths: title ~20px, sub-links ~12px at 1905px canvas |
| 2026-05-21 | MADPP section fully converted to CSS — SVG is background only | Final SVG: madpp-section-final.svg (circles, connector lines, background rects only). All text/buttons/capsules/triangles in MADPPSection.tsx as CSS. Heading: D-DIN-Bold 3.67vw. Description + Book a Demo button: D-DIN 1.26vw. Data panel labels: D-DINCondensed 1.05vw rgba(255,255,255,0.5). Big numbers: Winter Sans Trial 3.15vw. Capsules: CSS pill (border 1px #1D9E75, borderRadius 9999px) centered on number midpoint using font_pct=5.64% of section height. Triangle: CSS border trick 0.296vw×0.512vw. Insight label + body: D-DIN 0.84vw. Button hover: white bg, black text. Bottom border + vertical divider (x=34.88%): 1px solid white CSS. Cache-busting: rename SVG on each strip pass to avoid browser caching. |
| 2026-05-21 | BPAP section text + buttons converted to CSS overlay | Stripped 7 elements from SVG (2x #F5F2EC text paths, 2x rects + text for each button) → saved bpap-section-notxt.svg. "AGENTIC" (2.1vw, D-DIN), "BATTERY PASSPORT" (3.67vw bold, two lines), "Book a Demo" (outlined white, 10.92%×5.56%), "See Patent Here" (solid white bg, 10.15%×5.69%) all positioned as % of 1905×1026 canvas. Video + passport card placeholders left for user to swap in. |
| 2026-05-21 | MADPP circles panel text converted to CSS — madpp-section-v2.svg | Stripped all 8 path-text glyphs (Post Quantum Security, Agentic AI, Block chain, 30%, 2.8%, Automation in reverse logistics, Component Circularity). Frame at x=1031,y=74 in 1905×1064. Circle labels: D-DINCondensed 1.05vw, center left:73.81%. 30%: Winter Sans Trial 2.73vw. 2.8%: 1.58vw. Connector labels: 1.05vw left-aligned. |
| 2026-06-01 | SEO foundation built: robots.txt, sitemap.xml, src/lib/seo.ts utility, index.html enhanced | Audit found 90+ issues; foundation prevents future crawl/indexing problems. App.tsx now calls setSeoMeta() on homepage load. |
