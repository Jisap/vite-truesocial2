# Artistic — Social Media Marketing Agency (React + Vite + Tailwind)

A complete React conversion of the "Artistic" HTML template (17 pages),
rebuilt as a componentized, data-driven Vite app styled with Tailwind CSS v4.

**Status: complete.** Every page from the original theme is converted:
Home, About, Services, Service Details, Team, Team Details, Pricing,
Testimonials, FAQs, Blog, Blog Details, Projects, Project Details, Image
Gallery, Video Gallery, Contact, 404.

See `SETUP.txt` for install/run instructions.

## Folder structure

```
src/
├── App.jsx                    Route table (react-router-dom, lazy-loaded pages)
├── main.jsx                   Entry point
├── index.css                  Tailwind import + design tokens (@theme block)
├── components/
│   ├── layout/                 Header, Footer, MobileMenu, HeaderSidebar,
│   │                           Preloader, Layout (wraps every route)
│   ├── ui/                     Generic, reusable building blocks used across
│   │                           many pages: Button, SectionTitle, Reveal,
│   │                           AnimatedText, RevealImage, Counter, Marquee,
│   │                           AccordionItem, PageHeader, Pagination,
│   │                           TeamCard, BlogCard, ProjectCard, PricingCard,
│   │                           SidebarCta, VideoModal, CustomCursor
│   └── sections/
│       ├── shared/             Sections reused verbatim across pages
│       │                       (AboutUs, WhyChooseUs, KeyFacts,
│       │                       OurTestimonial, OurFaqs, ScrollingTicker)
│       └── <page>/             Sections unique to one page, e.g.
│                               sections/home/Hero.jsx,
│                               sections/projects/ProjectFilterGrid.jsx
├── pages/                      One file per route — composes that page's
│                               sections in the original HTML's order
├── data/                       Plain-JS content (nav, services, team, blog
│                               posts, projects, testimonials, FAQs...).
│                               Editing content never means touching JSX.
├── hooks/                      Small hooks replacing the original jQuery/
│                               GSAP plugins (see table below)
├── lib/                        Framework-agnostic helpers (text splitting)
└── test/                       Vitest setup + shared test utilities

e2e/                            Playwright end-to-end specs (run separately
                                from the Vitest unit suite — see Testing below)
```

**The rule of thumb:** if a piece of markup appears more than once (a card, a
button, a section heading), it's a component in `ui/`. If a whole *section*
is reused across pages, it lives in `sections/shared/`. If it's unique to one
page but has repeated *data* (6 service cards, 9 projects...), the markup is
a small section component in `sections/<page>/` and the repeated data lives
in `data/`, rendered with `.map()`.

## Original plugins → React replacements

| Original                              | Replacement                                                  |
|----------------------------------------|---------------------------------------------------------------|
| WOW.js (`.wow fadeInUp`)               | `hooks/useReveal.js` + `<Reveal>` (IntersectionObserver)      |
| jquery.counterup                       | `hooks/useCountUp.js` + `<Counter>`                           |
| GSAP `SplitText` + ScrollTrigger       | `<AnimatedText>` (manual word/char split, no paid plugin)     |
| GSAP `.reveal` image wipe              | `<RevealImage>`                                                |
| Swiper (hero/testimonial sliders)      | Real `swiper` npm package (`swiper/react`)                     |
| SlickNav (mobile menu)                 | `components/layout/MobileMenu.jsx` (React accordion)           |
| Bootstrap Offcanvas (info sidebar)     | `components/layout/HeaderSidebar.jsx`                          |
| Magnific Popup (image lightbox)        | `ImageGalleryGrid.jsx` — `yet-another-react-lightbox`          |
| Magnific Popup (video popup)           | `components/ui/VideoModal.jsx` — custom YouTube-embed modal    |
| Isotope (project filtering)            | `ProjectFilterGrid.jsx` — plain React state + `.filter()`      |
| jQuery `.validator` (contact forms)    | Native HTML5 validation + controlled inputs                    |
| Custom cursor (magiccursor.js)         | `components/ui/CustomCursor.jsx`                                |
| Sticky header scroll logic             | `hooks/useStickyHeader.js`                                      |
| Bootstrap accordion (FAQs)             | `components/ui/AccordionItem.jsx`                                |

## Design tokens

All of the original `:root` CSS variables (colors, font) are mapped 1:1 to
Tailwind theme tokens in `src/index.css` via the `@theme` block, so
`bg-accent`, `text-primary`, `border-divider`, etc. are available everywhere
instead of hard-coded hex values.

## Testing

- **Unit/component** — Vitest + React Testing Library, in `*.test.jsx` files
  co-located next to the component they test (e.g.
  `components/ui/Button.test.jsx`). Shared helpers (a router-wrapped
  `render`, an IntersectionObserver trigger for reveal/counter components)
  live in `src/test/`. Run with `npm test`.
- **End-to-end** — Playwright, in `e2e/*.spec.js`, run against a production
  build via `npm run test:e2e`. Requires a one-time `npx playwright install`
  to download browser binaries.

See `SETUP.txt` section 6 for full details, including what each suite covers.

## Known content quirks (kept faithful to the source, worth knowing about)

- **`data/faqCategories.js`** (full FAQs page) — the source `faqs.html`
  mixes construction-industry question text ("permits required for
  construction," etc.) under otherwise on-brand category headers. This looks
  like a copy-paste leftover from a different template by the original
  theme author. Kept verbatim per the fidelity requirement — you'll likely
  want to rewrite this copy.
- **`data/teamDetail.js`** — the source `team-single.html` ships with an
  unfilled bracket placeholder in its first bio paragraph (`"...over [X]
  years of experience in [industry or field]..."`). Real values were filled
  in here since shipping literal `[X]` text isn't functional; edit
  `getTeamBio()` if you'd rather use different copy.
- **`data/gallery.js`** — every thumbnail on the source `video-gallery.html`
  links to the *same* placeholder YouTube video. Kept as-is; swap
  `galleryVideoId` (or extend the data shape per-thumbnail) once you have
  real videos.
