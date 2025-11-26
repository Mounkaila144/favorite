# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 static site for "Favourite Beauty Spa", a spa and wellness center in Niamey, Niger. The site is configured for static export (`output: 'export'`) and is heavily optimized for SEO and local business discovery. The site is bilingual (primarily French) and includes structured data for local business search optimization.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (outputs to /out directory)
npm run build

# Start production server (for testing the build)
npm start

# Run linter
npm run lint
```

## Build Configuration

- **Static Export**: The site uses `output: 'export'` in next.config.js, which means it generates static HTML files in the `/out` directory (not `.next`)
- **Images**: Image optimization is disabled (`unoptimized: true`) for static export compatibility
- **Trailing Slash**: All routes use trailing slashes (`trailingSlash: true`)
- **ESLint**: Disabled during builds (`ignoreDuringBuilds: true`)

## Architecture

### Directory Structure

```
app/                    # Next.js 13 app directory
├── layout.tsx          # Root layout with metadata, fonts, and SEO
├── page.tsx            # Home page with sections and JSON-LD structured data
├── massage/page.tsx    # Services detail page
├── globals.css         # Global styles and Tailwind setup
├── robots.ts           # Dynamic robots.txt generation
└── sitemap.ts          # Dynamic sitemap generation

components/
├── layout/             # Layout components (Header, Footer, HeaderWithCart)
├── sections/           # Page sections (Hero, Contact, Massage, Stats, Store)
└── ui/                 # shadcn/ui components and custom UI elements

lib/
└── utils.ts            # Utility functions (cn helper for class merging)

public/
├── image/              # Static images
├── manifest.json       # PWA manifest
├── google-business.json
└── seo-keywords.json
```

### UI Component System

The project uses **shadcn/ui** (configured in components.json):
- Base color: neutral
- CSS variables enabled for theming
- All UI components are in `components/ui/`
- Custom components: Cart, CartButton, LazyImage, WhatsAppButton

### Styling

- **Tailwind CSS** with custom configuration (tailwind.config.ts)
- **CSS Variables** for theming (HSL color system)
- **Fonts**:
  - Inter (sans-serif, variable font)
  - Playfair Display (serif, for headings)
- **Animation**: tailwindcss-animate plugin for accordion and other animations

### Path Aliases

TypeScript paths are configured with `@/*` pointing to the root:
```typescript
import Header from '@/components/layout/Header';
import { cn } from '@/lib/utils';
```

## Key Features

### SEO Optimization

The site is heavily optimized for local SEO in Niamey, Niger:
- Comprehensive metadata in app/layout.tsx with Open Graph and Twitter cards
- JSON-LD structured data (LocalBusiness schema) in app/page.tsx
- Geo-location metadata (coordinates: 13.5116, 2.1254)
- Hidden SEO content in `<div className="sr-only">` for screen readers and crawlers
- Dynamic robots.txt and sitemap generation

### Static Export Considerations

When working with this project, remember:
1. No server-side features (API routes, ISR, etc.)
2. All pages must be pre-rendered at build time
3. Images use `unoptimized: true` - manual optimization needed
4. External images allowed from: favourite-beauty-spa.com, images.pexels.com

### Client-Side Features

- Home page (app/page.tsx) uses `'use client'` directive
- Hash-based anchor link handling with smooth scrolling
- Image carousel/slider functionality in HeroSection
- WhatsApp integration button (floating)

## Important Notes

- The site targets French-speaking users in Niger
- Business hours: Mo-Fr 08:00-18:00, Sa 09:00-17:00
- Contact numbers: +227 85 46 30 56, +227 80 66 29 25
- Location: Bobiel Ecole, Bakalleyezé Gawado, Niamey, Niger
- When modifying SEO content, ensure consistency across layout.tsx, page.tsx, and hidden SEO text
- The `/out` directory contains the built static site (not tracked in git based on git status)