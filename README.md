# Peter Goodwin Portfolio Website

A custom personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui.  
The site is designed as a multi-page experience with strong visual styling, theme switching, and motion-heavy interactions.

## Overview

This project presents Peter Goodwin's work, background, and skills through a mix of structured content and interactive UI.  
The codebase focuses on reusable UI sections, theme-aware styling, and animated page sections rather than backend services.

## Features

- Multi-page portfolio with dedicated routes for Home, Projects, Work, Resume, and Contact.
- Responsive top navigation with active-link states and mobile menu.
- Theme switching powered by `next-themes` with:
  - Light
  - Dark
  - System
  - Custom color themes (`red`, `green`, `blue`)
- Animated hero and section transitions using Framer Motion + CSS keyframes.
- Global loading overlay for internal navigation transitions.
- Visual interaction effects (bubble-hover spotlight, hover glows, reveal effects).
- Work/skills pages with:
  - Animated skill galaxy
  - Categorized skill badges
- Resume sections with scroll-driven reveal and card-based layout.
- Contact page with a stylized, interactive form shell (currently UI-only, no submit backend wired).

## Pages And Routes

- `/` - Home (hero, identity section, featured projects, and "About the Site" cards)
- `/projects` - Project cards and links
- `/work` - Skills showcase (animated galaxy + grouped badges)
- `/resume` - About, skills marquee, certifications, and work experience
- `/contact` - Contact form UI and interactive border reveal

## Tech Stack

### Framework And Runtime

- Next.js 15 (App Router)
- React 18
- TypeScript (strict mode enabled)

### Styling And UI

- Tailwind CSS
- Global CSS variables and handcrafted CSS animation layers in `app/globals.css`
- SCSS/CSS for contact page styling (`app/contact/contact.scss` compiled to `contact.css`)
- shadcn/ui component set (`components/ui`)
- Radix UI primitives (via shadcn)

### Motion And Interaction

- Framer Motion
- Custom DOM-based hover effect utility in `lib/bubble-effect.ts`

### Theming

- `next-themes` provider with class-based themes
- Tailwind `darkMode: ["class"]`
- Theme tokens defined in CSS variables (`:root`, `.dark`, `.red`, `.green`, `.blue`)

### Deployment / CI Signals

- `amplify.yml` is included for AWS Amplify build/deploy workflows.

## Why This Stack Fits This Project

- Next.js App Router keeps page routing and layout composition straightforward for a content-driven portfolio.
- Tailwind + shadcn/ui enables rapid UI iteration while still allowing full control of component code.
- Framer Motion and custom CSS animations support the site's interaction-first design.
- `next-themes` and CSS variables make theme changes consistent across custom and utility-based styles.

## Project Structure

```text
.
|-- app/
|   |-- layout.tsx              # Root layout, theme/loading providers, nav/footer
|   |-- page.tsx                # Home route
|   |-- globals.css             # Global styles, theme tokens, motion styles
|   |-- projects/page.tsx       # Projects route
|   |-- work/
|   |   |-- page.tsx            # Work route
|   |   |-- SkillGalaxy.tsx
|   |   `-- SkillBadges.tsx
|   |-- resume/
|   |   |-- page.tsx
|   |   |-- About.tsx
|   |   |-- Skills.tsx
|   |   |-- Certifications.tsx
|   |   `-- Work.tsx
|   `-- contact/
|       |-- page.tsx
|       |-- contact.scss
|       `-- contact.css
|-- components/
|   |-- navigation/             # Header nav + route links
|   |-- ui/                     # shadcn/ui components
|   |-- Hero2.tsx
|   |-- Scroll-Work.tsx
|   |-- ProjectShowcase.tsx
|   |-- AboutSiteCards.tsx
|   |-- Footer.tsx
|   |-- ModeToggle.tsx
|   |-- theme-provider.tsx
|   `-- global-loading-provider.tsx
|-- hooks/
|   |-- use-global-loading.ts
|   `-- use-mobile.tsx
|-- lib/
|   |-- bubble-effect.ts
|   `-- utils.ts
|-- public/                     # Portfolio images, backgrounds, skill icons, media
|-- tailwind.config.js
|-- next.config.ts
|-- package.json
`-- amplify.yml
```

## Getting Started

### Prerequisites

- Node.js LTS (a current version compatible with Next.js 15)
- npm (this repo includes `package-lock.json`)

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production app (`next build`)
- `npm run start` - Start production server from a build
- `npm run lint` - Run Next.js ESLint checks

## Production SEO Setup

- Set `NEXT_PUBLIC_SITE_URL` to your deployed domain (for example: `https://your-domain.com`).
- This value is used for:
  - canonical URLs
  - `robots.txt` host/sitemap entries
  - `sitemap.xml` route URLs
  - Open Graph and Twitter metadata URLs

## Styling, Theming, And UX Notes

- `app/globals.css` is a major part of the design system:
  - Theme variables and color tokens
  - Shared surfaces (`content-surface`, glass styles)
  - Section-level animation helpers
  - Responsive behavior and reduced-motion fallbacks
- Typography uses local Geist variable fonts (loaded in `app/layout.tsx`) plus Montserrat via Google Fonts import.
- Many components use a `.bubble-hover` class, with cursor-position tracking injected by `initBubbleEffect()`.
- Navigation and route transitions are wrapped by a global loading provider that shows an animated overlay during internal navigation events.

## Backend, APIs, And Data

- No API routes are currently defined in `app/api`.
- No database or auth flow is implemented in this repository.
- No required environment variables are currently referenced in app code.
- Contact form is presentational at this stage (inputs + button UI, no submission handler/service integration).

## Deployment

- `amplify.yml` is configured to:
  - Install dependencies with `npm ci`
  - Run `npm run build`
  - Publish from `.next`
- This indicates the project is prepared for AWS Amplify hosting workflows.

## Maintenance Notes

- `components/ui/` contains a broad shadcn/ui component set; not every component is used by the current pages.
- `app/heros/` and some standalone components (for example, `components/Transition.tsx`, `components/ProjectCarousel.tsx`) appear to be experimental or legacy iterations.
- Current navigation links point to `/projects` for the full portfolio list; keep this aligned with any future route changes.

## Future Improvements

- Wire the contact form to an email/API backend with validation and success/error feedback.
- Add automated tests (unit/integration/e2e) for critical page flows and interactions.
- Add a dedicated `typecheck` script and optional formatting workflow.
- Prune or archive experimental/legacy components to reduce maintenance overhead.
