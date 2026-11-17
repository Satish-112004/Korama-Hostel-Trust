# Korama Hostel Trust — Local Development & Deployment Setup

## 1. Prerequisites
- Node.js: 18.x or later (tested on Node v24.11.1)
- npm: 9.x or later (tested on npm 11.6.2)

## 2. Local Installation
Clone or download the repository into your workspace, then run:

```bash
npm install
```

## 3. Running Development Server
Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 4. Production Build & Quality Checks
To build for production and verify all TypeScript types:

```bash
# Type check
npm run type-check

# Next.js production build
npm run build

# Start production server
npm run start
```

## 5. Environment Variables
No third-party secrets or external paid APIs are required for baseline V1 operation. All knowledge grounding and contact handling are built with local zero-cost verified engines.

If connecting external SMTP or PostgreSQL in future releases, copy `.env.example` to `.env.local`:
```env
# Optional external configs (for future V2 CMS or SMTP integration)
DATABASE_URL=
SMTP_HOST=
SMTP_USER=
SMTP_PASS=
```

## 6. Architecture Overview
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with custom Trust Palette (Navy Blue, Nature Green, Soft Gold)
- **Interactive Assistant:** Grounded against `src/content/knowledgeBase.ts` via `/api/assistant`
- **Interactive Contact:** Validated with Zod via `/api/contact` with persistence in `data/submissions.json`
- **Management Console:** `/admin` provides immediate visibility into recorded enquiries
