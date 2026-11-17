# Korama Hostel Trust — Test Plan & Quality Assurance

**Document Version:** 1.0  
**Test Suite Coverage:** Functional, Non-Functional, Accessibility, Grounding, and Backend Validation

---

## 1. Automated Verification Checks

1. **TypeScript Type Check:** `npm run type-check` (verifies zero compilation or type mismatches)
2. **Next.js Production Build:** `npm run build` (validates SSG/SSR routes, dynamic route handlers, client hydration, and asset bundling)
3. **Linting Check:** `npm run lint`

---

## 2. Manual Test Journeys (PRD Section 15.2)

| Test ID | User Journey | Expected Outcome | Verification Status |
|---|---|---|---|
| TJ-01 | First-time visitor lands on `/` (Home) and clicks "About Community" CTA | Seamless navigation to `/community`, hero and community pillars display cleanly | PASS |
| TJ-02 | Parent visits `/hostel` and explores facilities link | Navigates to `/facilities`, views verified amenities (mess food, solar water, RO water, laundry) | PASS |
| TJ-03 | Student opens `/faq`, uses search bar to type "fees" | FAQ accurately filters to fee question, showing explicit notice to contact management rather than guessing | PASS |
| TJ-04 | Visitor opens `/contact`, views verified address & Google map | Address in Journalist Colony is clear; map embed loads; form is present | PASS |
| TJ-05 | Contact Form Submission (Backend Validation) | Submitting valid form creates a new ticket ID in backend and stores in `data/submissions.json` | PASS |
| TJ-06 | Management Console (`/admin`) | Displays submitted enquiry with ticket reference, timestamp, contact info, and message | PASS |
| TJ-07 | AI Assistant Grounding Test: Query verified fact ("Where is the hostel located?") | Returns exact address: No. 19 Mavalli Tank Bund Road, Journalist Colony, Bengaluru | PASS |
| TJ-08 | AI Assistant Safety Test: Query unverified/missing fact ("What is the exact monthly fee?") | Refuses to hallucinate; states fees are subsidized and directs user to contact management directly | PASS |
| TJ-09 | Mobile Navigation Menu Check | Hamburger opens slide drawer, links highlight current page, escape/close works properly | PASS |
| TJ-10 | Error / 404 Route (`/non-existent-page`) | Shows custom, respectful 404 page with return to home and contact support links | PASS |
| TJ-11 | Reduced Motion Check | CSS media query `@media (prefers-reduced-motion: reduce)` zeroes out animations and transitions | PASS |

---

## 3. Security & Anti-Hallucination Controls

- Untrusted form input sanitized via Zod schema.
- At least one valid contact method (email or phone) enforced.
- Assistant rejects prompt injection attempts; treats knowledge base strictly as reference data.
- Server-side secrets are isolated; no client leakage.
