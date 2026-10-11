# Real Estate Website

A premium, fully responsive real-estate website built with **Next.js 14 (App Router)**, **TypeScript (strict)**, **Tailwind CSS 3.4**, **Framer Motion** and **Lucide icons**. The font is **Urbanist** via `next/font/google`.

> All listings, projects, developers, articles and testimonials are **demonstration data**. No backend, CRM or live market data is connected.

---

## 1. Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

| Command             | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Start the dev server                               |
| `npm run build`     | Production build (needs internet for Google Fonts) |
| `npm run start`     | Serve the production build                         |
| `npm run lint`      | ESLint (`next/core-web-vitals`)                    |
| `npm run typecheck` | `tsc --noEmit`                                     |

**Requirements:** Node 18.17+ and npm 9+.

---

## 2. Daily workflow

1. **Pull / branch** from `main`: `git checkout -b feat/<short-name>`.
2. **Run** `npm run dev` and work in `src/`.
3. **Change content first, markup second.** Most edits belong in `src/data/*`, not in JSX.
4. **Before every commit**, run:
   ```bash
   npm run typecheck && npm run lint
   find src -name '*.ts*' | xargs wc -l | awk '$1>70 && $2!="total"'   # must print nothing
   ```
5. **Check responsive behaviour** at 320, 375, 768, 1024, 1280 and wider. There must be no horizontal scroll.
6. **Open a PR** and run `npm run build` in CI or locally before merging.

---

## 3. Project structure

```
src/
  app/
    layout.tsx              Font, header, footer, motion provider
    page.tsx                Home page (sections in order)
    globals.css             Tailwind layers, base styles, reduced-motion
    properties/page.tsx     Search results (filters via URL params)
    properties/[slug]/      Property detail page
    projects/page.tsx       All projects
    insights/page.tsx       All articles
  components/
    layout/   Header, NavItem, MobileNavigation, Footer, FooterBrand,
              FooterColumn, Logo, SectionContainer (Section + Container),
              MotionProvider
    ui/       Button, IconButton, Badge, Photo, Reveal, SectionHeading,
              CategoryTabs, CustomSelect, Accordion, ArrowOverlay
    home/     HeroSection, HeroImages, PropertySearch, SearchInput,
              PropertyCategories, TrendingProjects, ServicesSection,
              MarketInsights, PopularLocations, FeaturedProperties,
              DeveloperShowcase, Testimonials, FAQSection, FinalCTA
    property/ PropertyCard, PropertyRow, PropertyCardDetails, ProjectCard,
              LocationCard, InsightCard, DeveloperCard, PropertyResults
  data/       properties, projects, locations, insights, testimonials,
              faqs, developers, search (filter options), site (nav, categories, footer)
  hooks/      useDropdown, usePropertyFilters
  lib/        utils (cn), motion (shared variants), images, filters
  types/      property.ts, project.ts
```

**Home page order:** Hero, Search panel, Categories, Trending Projects, Services, Insights, Popular Locations, Featured Properties, Developers, Testimonials, FAQ, Final CTA, Footer.

---

## 4. Editing content

| To change...                      | Edit                                                 |
| --------------------------------- | ---------------------------------------------------- |
| Properties and prices             | `src/data/properties.ts`                             |
| Projects (Residential/Commercial) | `src/data/projects.ts`                               |
| Popular locations                 | `src/data/locations.ts`                              |
| Search dropdown options           | `src/data/search.ts`                                 |
| Navigation, categories, footer    | `src/data/site.ts`                                   |
| Articles, FAQs, testimonials      | `src/data/insights.ts`, `faqs.ts`, `testimonials.ts` |
| Developers                        | `src/data/developers.ts`                             |
| Images                            | `src/lib/images.ts`                                  |

**Adding a location:** add it to `locations.ts` and to `LOCATION_OPTIONS` in `search.ts`. Also update the `cities` array in `site.ts` for the footer. Use the same spelling everywhere, because the filter matches on the exact city string.

**Adding a property:** add a record to `properties.ts`. `transaction` must be `Buy`, `Rent` or `Commercial`. `type` must match a value in `CATEGORIES` (`search.ts`). `priceLakh` is a number in lakhs and drives the budget filter. Set `featured: true` to show it in Featured Properties.

**Adding a project:** `type` must be `Residential` or `Commercial`.

---

## 5. How search works

The search panel (`PropertySearch`) validates input (minimum 2 characters, no `<` or `>`) and navigates to:

```
/properties?q=<keyword>&tx=<Buy|Rent|Commercial>&cat=<type>&loc=<city>&budget=<label>
```

- Default values are omitted from the URL (see `DEFAULTS` in `src/lib/filters.ts`).
- `usePropertyFilters` reads the URL, and `filterProperties` filters the local data.
- Category, location and nav links use the same params, for example `/properties?loc=Sohna`.
- The results page shows a count and an empty state with a "Clear filters" action.

**Moving to a real API later:** replace `filterProperties(properties, filters)` in `usePropertyFilters.ts` with a fetch call. The URL contract and components stay unchanged.

---

## 6. Design system

- **Colours** are defined once in `tailwind.config.ts`:
  `forest #09261D`, `brand #FF6415`, `white`, `line #E5E7E4`, `muted #68756F`.
  `surface` is intentionally `#FFFFFF`, so no grey backgrounds are used.
- **Typography:** Urbanist is applied globally through `--font-urbanist`. Use only the standard Tailwind scale (`text-sm`, `text-base`, `text-lg`, ...). Paragraphs step up at `lg`.
- **Layout:** use `Section` and `Container` (`max-w-7xl`, `px-4 sm:px-6 lg:px-8`, `py-12 md:py-24`). Do not hand-roll section wrappers.
- **Alignment:** headings and hero, services, CTA and footer content are centred below `lg` and left-aligned at `lg` and up.
- **Cards:** borderless "editorial" style (rounded image, title left, price right, orange arrow on hover). Reuse `PropertyCard`, `PropertyRow` and `ProjectCard`. Do not add new boxed cards.
- **Motion:** use the variants in `src/lib/motion.ts` through `Reveal`, `RevealGroup` and `RevealItem`. `MotionProvider` applies `reducedMotion="user"`.

---

## 7. Code conventions (enforced in review)

1. **Every component file is 70 lines or fewer**, including imports. Extract UI, move data to `src/data`, and move logic to hooks or `lib`.
2. **No arbitrary Tailwind values** (`text-[48px]`, `p-[37px]`, ...). Extend the theme instead.
3. **No inline styles** for ordinary layout.
4. **Strict TypeScript.** Type all props and data records, and avoid `any`.
5. **Server components by default.** Add `"use client"` only for state, effects or Framer Motion. Use `Reveal` rather than putting `motion.*` in server files.
6. **One dropdown implementation:** `CustomSelect` plus `useDropdown`. Do not write per-field dropdown logic.
7. **Accessibility:** semantic HTML, labelled controls, `aria-expanded` and `aria-controls` on toggles, visible `focus-visible` rings, and meaningful `alt` text.

---

## 8. Images

Images are loaded from `framerusercontent.com`, which is allowed in `next.config.mjs` under `images.remotePatterns`. They come from the reference template and are **not licensed for production**.

To replace them:

1. Put licensed images in `public/images/`.
2. Update the exports in `src/lib/images.ts` (for example `hero: "/images/hero.jpg"`).
3. Remove the `framerusercontent.com` pattern from `next.config.mjs` once no remote images remain.

---

## 9. Pre-launch checklist

- [ ] Replace demo properties, projects, developers and testimonials with real, approved content.
- [ ] Replace all template images with licensed assets.
- [ ] Add the real logo (`src/components/layout/Logo.tsx`) and brand name.
- [ ] Fill the footer placeholders (phone, email, address) in `FooterBrand.tsx`.
- [ ] Add real social and legal links (`#` placeholders in `FooterBrand.tsx` and `Footer.tsx`).
- [ ] Connect **Talk to an Expert** and **Explore Our Services** to a real contact form or CRM.
- [ ] Decide whether the testimonial section needs a darker orange for AA contrast on small text.
- [ ] Set page metadata and add `sitemap`, `robots` and Open Graph images.
- [ ] Run `typecheck`, `lint` and `build` with no errors.
- [ ] Test on mobile, tablet and desktop, with keyboard-only navigation and reduced motion turned on.

---

## 10. Deployment

**Vercel (recommended):** import the repo, keep the defaults (framework: Next.js), and deploy. No environment variables are required.

**Self-hosted:**

```bash
npm ci
npm run build
npm run start      # PORT=3000 by default
```

The build downloads Urbanist from Google Fonts, so the build machine needs internet access.

---

## 11. Troubleshooting

| Problem                                        | Fix                                                                              |
| ---------------------------------------------- | -------------------------------------------------------------------------------- |
| Build fails fetching the font                  | Allow `fonts.googleapis.com`, or switch to `next/font/local`                     |
| Remote image error ("hostname not configured") | Add the host to `images.remotePatterns` in `next.config.mjs`                     |
| Search returns nothing                         | Check the city or type spelling matches `search.ts` and the data                 |
| Dropdown clipped                               | Remove `overflow-hidden` from the dropdown's ancestors                           |
| Hydration warning                              | Avoid `Date` or `Math.random` in server markup; keep motion in client components |
# ncr-realtor
