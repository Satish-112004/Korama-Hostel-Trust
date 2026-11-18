# Korama Hostel Trust Website

> A trustworthy, modern, and accessible public website for **Korama Hostel Trust** — a community hostel supporting students from the Korama, Koracha, and Korava communities who come to Bengaluru for higher education.

*Education is the key. The hostel is a home away from home.*

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Status](#project-status)
- [Features (Version 1)](#features-version-1)
- [Site Map](#site-map)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Design Principles](#design-principles)
- [Accessibility, SEO and Performance](#accessibility-seo-and-performance)
- [Security and Privacy](#security-and-privacy)
- [Testing and Quality](#testing-and-quality)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [Contact](#contact)
- [License](#license)

---

## About the Project

This is a **community and education-focused information website**, not a commercial or e-commerce site. It helps:

- **Students** understand the hostel and how to reach management
- **Parents and guardians** find reliable information about facilities and location
- **Community members** learn about the heritage, values, and progress of the community
- **Visitors and well-wishers** find the hostel and contact it easily
- **Hostel management** keep public information accurate over time

The first release (V1) is a **public information website**. The architecture is built so future modules (admin panel, student portal, etc.) can be added later without rebuilding the public site.

## Project Status

**In development** — V1 public website.

> **Important:** Some content (fees, phone numbers, email, timings, admission rules, etc.) must be **verified by the Trust** before going live. Unverified details are never published as facts. See [`docs/CONTENT_VERIFICATION.md`](docs/CONTENT_VERIFICATION.md).

## Features (Version 1)

- Responsive pages for mobile, tablet, and desktop
- Respectful, carefully worded community and hostel content
- Single source of truth for facilities and FAQ data (no contradictions between pages)
- Accessible FAQ accordion (keyboard friendly)
- Contact page with verified address and map link
- Contact form with client and server validation, spam protection, and honest success/failure messages *(only when a secure email backend is configured)*
- Gallery page *(only shown when real, approved photos exist)*
- AI assistant entry point *(only shown when it can answer from approved information; otherwise a clear "Coming soon" state)*
- SEO basics: page titles, meta descriptions, Open Graph tags, sitemap, robots, custom 404 page
- Accessibility: semantic HTML, visible focus, alt text, reduced-motion support

## Site Map

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero, introduction, mission and vision, quick navigation, contact preview |
| `/community` | About Our Community | Heritage, culture, values, history (cautiously worded) |
| `/hostel` | About Korama Hostel | History, purpose, vision, facilities, students, motto |
| `/facilities` | Facilities | Confirmed facilities only |
| `/faq` | FAQ | Management-approved answers only |
| `/contact` | Contact | Address, map, contact details, optional form |
| `/gallery` | Gallery | Hidden until approved media is available |

> Timings, Rules, and Notices are intentionally **not** top-level navigation items or homepage panels at this stage.

## Tech Stack

Preferred stack from the PRD (adapt to what the repository already uses):

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI primitives | shadcn/ui |
| Icons | Lucide React |
| Animation | Framer Motion (used sparingly) |
| Forms | React Hook Form + Zod |
| Backend | Next.js Route Handlers (only for real server endpoints) |
| Database | PostgreSQL + Prisma *(only when persistent data is truly needed)* |
| Hosting | Vercel *(subject to owner approval)* |
| Source control | Git and GitHub |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm, pnpm, or yarn (use the one the project already uses)
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# 2. Go into the project folder
cd <your-repo-name>

# 3. Install dependencies
npm install

# 4. Create your local environment file
cp .env.example .env.local

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values. **Never commit real secrets to GitHub.**

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public website URL (used for SEO and sitemap) | Yes (production) |
| `CONTACT_EMAIL_TO` | Where contact-form messages are delivered | Only if contact form is enabled |
| `EMAIL_PROVIDER_API_KEY` | API key for the email delivery service | Only if contact form is enabled |

> These names are examples. Update this table to match your actual `.env.example`.

## Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Check code style and common errors |
| `npm run typecheck` | Run TypeScript type checks |
| `npm test` | Run automated tests |

> Adjust this table to match the scripts in your `package.json`.

## Project Structure

```text
src/
  app/                 # Routes (pages)
    community/
    hostel/
    facilities/
    faq/
    contact/
    gallery/           # optional, only with approved media
    api/               # only for real server endpoints
  components/
    layout/            # header, footer, page container
    navigation/
    ui/                # buttons, cards, accordion, etc.
    sections/          # page sections
  content/             # approved content (community, hostel, facilities, faq)
  lib/
    validation/
    utils/
    config/
  services/            # external services (email, AI, etc.)
  types/
public/
  images/
  icons/
docs/
  PRD.md
  CONTENT_VERIFICATION.md
  SETUP.md
  TEST_PLAN.md
```

## Content Management

In V1, approved content is stored in **typed local data files** (or MDX), not in a database. This keeps the site simple and fast.

Rules for editing content:

1. **Do not invent facts.** Fees, timings, phone numbers, eligibility, staff names, and facilities must come from the Trust.
2. **Use one source of truth.** Facilities and FAQ data live in `src/content/` and are reused across pages.
3. **Update time-sensitive details** (resident count, courses) before each publication.
4. **Photos need consent.** Never publish identifiable students without written permission, with extra care for minors.
5. **No fake content.** No fake testimonials, statistics, awards, or dead buttons.

## Design Principles

- Premium, modern, minimal, and spacious
- Palette direction: **dark blue** (trust), **green** (growth), **white**, **light gray**, and a **soft gold** accent
- Preserve the existing approved logo, colors, fonts, navigation, and footer
- Restrained animation that respects `prefers-reduced-motion`
- Respectful representation — no stereotypes, no generic stock photos passed off as the real hostel

## Accessibility, SEO and Performance

**Accessibility (target: WCAG 2.2 AA)**
- Semantic HTML and logical heading order
- Full keyboard navigation and visible focus
- Proper labels, alt text, and sufficient color contrast
- Accessible menu, accordion, and form controls

**SEO**
- Unique title and meta description for every page
- Canonical URLs, Open Graph tags, XML sitemap, robots file
- Custom 404 page
- Structured data only when accurate (no false ratings or reviews)

**Performance**
- Optimized, lazy-loaded images
- Minimal client-side JavaScript
- No layout shifts
- Lighthouse and Core Web Vitals should be measured, not assumed

## Security and Privacy

- HTTPS in production
- Secrets and API keys stay server-side
- All user input validated and sanitized
- Rate limiting and spam protection on the contact endpoint
- Secure headers and a considered Content Security Policy
- Collect only the personal data that is truly needed
- A privacy notice is required before collecting any personal information

## Testing and Quality

Before any release, the following must pass:

- [ ] Dependencies install from the documented steps
- [ ] `npm run build` succeeds
- [ ] Type check and lint pass
- [ ] Unit tests (validation and utilities) pass
- [ ] End-to-end tests for core navigation pass
- [ ] Responsive checks on mobile, tablet, laptop, and desktop
- [ ] Keyboard-only navigation works
- [ ] No broken links or missing assets
- [ ] Contact form shows real success and failure states
- [ ] Unknown routes show a helpful 404 page
- [ ] No placeholder or fake content is visible

See [`docs/TEST_PLAN.md`](docs/TEST_PLAN.md) for the full list of manual test journeys.

## Deployment

Preferred host: **Vercel** (with owner approval).

1. Confirm the repository and production branch
2. Set environment variables in the hosting dashboard
3. Verify the domain and HTTPS
4. Test all routes, metadata, and the contact form in production
5. Document how to roll back a failed deployment
6. Record who owns the domain, hosting, and email accounts

Detailed steps will be kept in [`docs/SETUP.md`](docs/SETUP.md).

## Roadmap

| Version | Focus |
|---|---|
| **V1** | Public information website (Home, Community, Hostel, Facilities, FAQ, Contact, optional Gallery, AI assistant when ready) |
| **V2** | Content administration — secure admin login, manage FAQs, facilities, and gallery |
| **V3** | Student services — accounts, admission enquiries, room allocation, attendance, complaints, visitor registration |
| **V4** | Community and learning — scholarships, careers, alumni directory, events, digital library, Kannada support, AI RAG and voice |

Roadmap items are **not** V1 commitments. Each needs its own requirements, privacy review, and testing.

## Contributing

1. Read [`docs/PRD.md`](docs/PRD.md) first — it is the source of truth.
2. Inspect existing code before changing anything; do not replace working code or redesign approved pages without approval.
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make small, testable changes.
5. Run lint, type check, tests, and build before opening a pull request.
6. Describe what changed, which files were touched, and how you tested it.

## Documentation

| File | Purpose |
|---|---|
| [`docs/PRD.md`](docs/PRD.md) | Full Product Requirements Document |
| [`docs/CONTENT_VERIFICATION.md`](docs/CONTENT_VERIFICATION.md) | Checklist of details the Trust must confirm |
| [`docs/SETUP.md`](docs/SETUP.md) | Setup and deployment instructions |
| [`docs/TEST_PLAN.md`](docs/TEST_PLAN.md) | Test cases and release checklist |

## Contact

**Korama Hostel Trust**
No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru, Karnataka, India

> Postal code, phone, and email will be added here once verified by the Trust.

## License

*To be decided by the project owner.* Add a `LICENSE` file and update this section. Until then, all rights are reserved.

---

<p align="center"><i>When one student succeeds, the entire community progresses.</i></p>
