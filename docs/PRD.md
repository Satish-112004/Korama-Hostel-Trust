# KORAMA HOSTEL TRUST
# Product Requirements Document (PRD)
**Project:** Korama Hostel Trust Website & Future Digital Ecosystem  
**Document version:** 1.0  
**Status:** Development baseline — confirm all items marked *To verify* before production  
**Primary use:** Give this document to Codex or Google Antigravity as the authoritative product specification.

---

## 0. Instructions to the AI development agent

You are the lead product engineer, solution architect, UI/UX engineer, security engineer, QA engineer, and technical mentor responsible for implementing the Korama Hostel Trust website.

### 0.1 Source-of-truth rules

1. Treat this PRD as the product source of truth.
2. First inspect the existing repository, framework, dependencies, routes, components, styling, and current implementation. Do not assume the repository is empty.
3. Preserve working code and approved design decisions. Do not replace the project or migrate frameworks merely because you prefer another stack.
4. If the repository already has a working design system, use it. Preserve the existing logo, brand identity, color palette, typography, navigation, footer, spacing, buttons, cards, and animation language unless the owner explicitly asks for a change.
5. Build the requested feature in small, testable increments. Do not attempt a risky rewrite of the entire application.
6. Do not invent facts, contact details, fees, timings, admission criteria, staff names, legal status, historical claims, testimonials, or operational policies.
7. Where information is missing, create a clearly marked content/configuration placeholder and document exactly what the owner must provide. Do not publish placeholders as factual claims.
8. Do not claim that the website is bug-free. Prove quality through automated checks, manual test cases, error handling, and a documented release checklist.
9. Before changing files, explain the implementation plan briefly. After changes, report files changed, commands run, test results, known issues, and the next action.
10. Do not silently omit requirements. If a requirement conflicts with the existing repository or another requirement, explain the conflict and propose the smallest safe resolution.

### 0.2 Required implementation workflow

For each milestone:
- Inspect the relevant existing code.
- State the intended change and files likely to be affected.
- Implement only the approved scope.
- Run formatting, linting, type checks, tests, and a production build where applicable.
- Fix errors caused by the implementation.
- Test desktop, tablet, and mobile layouts.
- Check keyboard navigation, labels, focus visibility, contrast, loading, empty, and error states.
- Summarize what is complete and what remains.

Do not mark a milestone complete when its required checks fail.

---

## 1. Product overview

Korama Hostel Trust needs an official, trustworthy, modern website that introduces the community and hostel, helps students and parents find reliable information, and provides a clear way to contact the hostel.

This is a community and education-focused public information platform, not an e-commerce or commercial marketing website. It should communicate education, dignity, unity, cultural heritage, opportunity, safety, and progress.

The website is intended to serve:
- Students considering or currently using the hostel.
- Parents and guardians.
- Korama, Koracha, and Korava community members.
- Visitors and well-wishers.
- Hostel management and authorized content administrators.

The initial release is a public-facing website. The architecture should allow future expansion, but future modules must not be built prematurely.

## 2. Vision, mission, and product outcomes

### 2.1 Vision
Create a reliable digital home for Korama Hostel Trust that supports education, community connection, cultural respect, and future opportunity.

### 2.2 Mission
Present clear and verified information about the Korama, Koracha, and Korava communities and Korama Hostel; help students and parents understand the hostel; and make communication with the organization easier.

### 2.3 Product outcomes
1. Visitors can understand who the community is and what the hostel does.
2. Students and parents can find hostel information without needing to search through unrelated pages.
3. The website represents the community respectfully and accurately.
4. Visitors can find contact and location information easily.
5. The website works well on mobile devices, tablets, and desktop computers.
6. Authorized staff can eventually maintain public content without editing source code.
7. A future AI assistant can answer only from approved, current information.

### 2.4 Success measures
Track, where analytics and consent policy permit:
- Successful page loads and Core Web Vitals.
- Mobile usability and accessibility checks.
- Visits to About Hostel, Facilities, FAQ, and Contact.
- Contact-form submission success and spam rate.
- FAQ search/usefulness, if search is implemented.
- AI answer helpfulness and grounded-answer rate, when the assistant is released.
- Content freshness and time required for an administrator to publish an update.

Do not add invasive tracking. Analytics provider and consent requirements are *To decide*.

---

## 3. Organization and verified project facts

Use these facts as supplied by the project owner. Confirm them with the Trust before final publication if they have changed.

| Item | Supplied information | Publication status |
|---|---|---|
| Organization/project name | Korama Hostel Trust / Koram Hostel | Confirm official preferred spelling and legal name |
| Hostel address | No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru, Karnataka, India | Confirm postal code and exact address formatting |
| Established | 1985 (project information supplied earlier) | Verify with Trust records before publishing |
| Intended student communities | Korama, Koracha, and Korava | Confirm eligibility wording with management |
| Current resident count | Approximately 15–20 students | Dynamic; verify before publication |
| Hostel purpose | Support students pursuing higher education, including students coming to Bengaluru from other parts of Karnataka | Owner-provided description |
| Known facilities | Washing machines, solar water-heating system, drinking-water filter/RO water, study tables, clean rooms, food | Confirm each facility is currently available |
| Core belief | Education is key; hostel is a home away from home | Approved project message |

### 3.1 Naming consistency
The project has used both “Korama Hostel Trust” and “Koram Hostel”. Confirm the official public-facing name, spelling, capitalization, and whether “Trust” is part of the registered name. Once confirmed, use it consistently in:
- Logo and header.
- Page titles and metadata.
- Footer.
- Structured data.
- Contact details.
- AI assistant responses.

Do not alter community names or treat similar regional names as interchangeable without verification.

---

## 4. Scope and release boundaries

### 4.1 Version 1 public website — required

1. Home
2. About Our Community
3. About Korama Hostel
4. Facilities
5. FAQ
6. Contact
7. Gallery (only if real, approved images are available; otherwise keep it hidden or show no empty public page)
8. AI Assistant entry point and interface only when its verified knowledge source and safe behaviour are ready. If not ready, show a clearly labelled “Coming soon” state or omit the public control until it is functional.

### 4.2 Not part of the initial public navigation
The owner previously decided not to show separate Timings, Rules, and Notices panels in the main homepage/navigation at this stage. Do not reintroduce them as prominent homepage panels or top-level navigation items without explicit approval.

If management later wants these details, they may be included as relevant subsections in an appropriate page or added as dedicated pages in a later release after the owner approves the content and navigation.

### 4.3 Future capabilities — design for extension, do not build in V1 unless separately approved
- Student login and student portal.
- Admin dashboard/CMS.
- Online admission application.
- Document upload/download workflows.
- Room allocation.
- Attendance.
- Complaint and feedback system.
- Visitor registration.
- Notice management and push notifications.
- Email notifications.
- Digital library.
- Scholarship information.
- Placement and career support.
- Community events and alumni features.
- Multilingual content, including Kannada.
- Voice interaction for the AI assistant.

Do not create non-functional buttons or pretend these future features already work.

---

## 5. Target users and their needs

| User | Main questions/tasks | Website response |
|---|---|---|
| Student applicant | What is the hostel? Who can apply? What facilities are available? How do I contact management? | Clear hostel overview, facilities, FAQ, contact |
| Current student | Where can I find hostel information and updates? | Easy navigation and reliable information; future student portal is out of scope |
| Parent/guardian | Is the hostel suitable? Where is it? What support/facilities are provided? How can I speak to management? | Trustworthy information, address, contact, facilities, FAQ |
| Community member | What is our community heritage, values, and progress? | Respectful community page with careful historical language |
| Visitor | Where is the hostel and how can I contact it? | Contact details and map |
| Authorized administrator | How can I keep information accurate? | Initially content changes may be developer-managed; future CMS is planned |

---

## 6. Brand, content, and design requirements

### 6.1 Brand personality
- Trustworthy.
- Welcoming.
- Respectful.
- Educational.
- Community-centred.
- Optimistic and forward-looking.
- Professional without feeling corporate or commercial.

### 6.2 Visual direction
The desired design is premium, modern, minimal, spacious, accessible, and responsive. Design inspiration may be drawn from the clarity and information architecture of Rotary International, Apple, Stripe, Airbnb, Notion, Microsoft, Vercel, and National Geographic. Do not copy their layouts, branding, or assets.

### 6.3 Colour direction
The supplied palette direction is:
- Dark blue — trust and stability.
- Nature green — growth and community.
- White — clarity.
- Light gray — neutral surfaces.
- Subtle soft gold — restrained accent.

If the repository already defines exact colour tokens, preserve them. Do not invent a replacement palette. Maintain sufficient text/background contrast.

### 6.4 Typography and layout
- Preserve the current approved fonts and type scale.
- Use clear heading hierarchy and readable paragraph widths.
- Use consistent spacing, containers, grids, cards, radii, and shadows.
- Use generous whitespace without making pages unnecessarily long.
- Ensure images have appropriate aspect ratios and do not distort.
- Avoid excessive gradients, decorative clutter, and over-animation.

### 6.5 Motion
Use restrained transitions such as fade-in, small reveal, and hover-state feedback only where useful. Respect `prefers-reduced-motion`. Do not use motion that blocks reading or causes layout shifts.

### 6.6 Photography and illustrations
- Prefer genuine, owner-approved hostel and community photographs.
- Obtain consent before publishing identifiable people, especially students/minors.
- Do not use stereotyped or exoticized representations of the community.
- Do not present generic stock imagery as a photograph of the actual hostel or community.
- If authentic images are unavailable, use neutral educational/architectural illustrations or clearly generic placeholders until real assets are supplied.
- Add meaningful alt text; decorative images should have empty alt text.

### 6.7 Content voice
Use clear, warm, respectful English. Avoid exaggerated marketing claims, stereotypes, discriminatory language, and unverified statements. Keep the supplied meaning intact when editing owner-approved content.

---

## 7. Sitemap and navigation

### 7.1 Public sitemap
- `/` — Home
- `/community` — About Our Community
- `/hostel` — About Korama Hostel
- `/facilities` — Facilities
- `/faq` — Frequently Asked Questions
- `/contact` — Contact
- `/gallery` — Gallery, only when approved content exists

The AI assistant may be a persistent floating launcher or a dedicated route, depending on the existing implementation. It must not obstruct page content or mobile navigation.

### 7.2 Navigation requirements
- Keep navigation consistent across pages.
- Use the existing approved logo and header design.
- Show the active page clearly.
- Make all links keyboard accessible.
- On mobile, use a usable menu with correct open/close behaviour, focus handling, and accessible labels.
- Do not add Timings, Rules, or Notices as top-level links without explicit approval.
- Include a clear Contact route/action.
- Footer links should mirror the approved public sitemap.

---

## 8. Page requirements

## 8.1 Home page

### Purpose
Introduce the Trust and direct each visitor to the information they need.

### Required sections
1. **Hero**
   - Organization name: use confirmed official spelling.
   - Welcome headline and short supporting message.
   - A genuine hostel image or respectful, clearly generic visual.
   - Primary CTA: “Explore Hostel”.
   - Secondary CTA: “About Community”.
   - Keep text readable over imagery; provide a suitable overlay if needed.
2. **Welcome/introduction**
   - Briefly explain that the hostel supports students from the Korama, Koracha, and Korava communities.
   - Emphasize education, unity, support, and personal growth.
3. **Mission and Vision**
   - Present concise, approved mission and vision statements.
   - Do not invent a formal registered mission statement; label draft wording for Trust approval.
4. **Quick navigation**
   - About Community.
   - About Hostel.
   - Facilities.
   - FAQ.
   - Contact.
   - AI Assistant only if operational.
5. **Why the hostel matters**
   - Education, supportive environment, student development, community progress.
   - Do not claim facilities or services that have not been verified.
6. **AI assistant introduction**
   - Explain what it can answer.
   - If not ready, do not imply it is live.
7. **Contact preview**
   - Show verified address/contact details only.
8. **Footer**
   - Existing approved footer, consistent across the website.

### Explicit exclusions
Do not add large homepage panels for Timings, Rules, or Notices. Do not add fabricated testimonials, fake statistics, or unverified awards.

## 8.2 About Our Community page

### Purpose
Introduce the Korama, Koracha, and Korava communities in a respectful and educational way.

### Sections and owner-provided content

#### 1. Hero
**Title:** About Our Community  
**Subtitle:** Celebrating Our Heritage, Culture, Unity, and Progress.  
Use a respectful image representing education, culture, and unity. Avoid stereotyped depictions.

#### 2. Who are we?
**Title:** Welcome to Koram Hostel

Use this supplied content, subject to the Trust's final approval:

“Koram Hostel is a home for students belonging to the Korama, Koracha, and Korava communities. Our hostel is more than just a place to stay—it is a family that supports education, unity, culture, and personal growth.

Our community has a rich cultural heritage, a long history of traditional skills, and a strong spirit of resilience. While preserving our traditions, today's generation is making remarkable progress in education, technology, business, government service, and many other professions.

We take pride in our identity, our culture, and our commitment to building a brighter future.”

Display as a two-column section with text and a suitable image.

#### 3. Who are Korama, Koracha, and Korava?
Explain cautiously that these names are used in different regions and that naming and community classifications can vary by state, language, and official records. Do not assert that all groups are legally or historically identical unless verified by reliable sources and community representatives.

The project content identifies the communities in:
- Karnataka.
- Andhra Pradesh.
- Telangana.
- Tamil Nadu.

Show these as regional information cards only after the Trust verifies the wording.

Feature cards:
- Traditional Craftsmanship.
- Hard Work.
- Adaptability.
- Strong Family Values.
- Rich Folk Traditions.
- Cultural Diversity.

Explain that community members today contribute to education, engineering, medicine, government services, business, agriculture, science, and information technology. Do not imply that every listed profession is represented unless verified.

#### 4. Our History
Use a timeline or story layout, but do not invent dates or specific milestones. The supplied narrative says:
- Community history extends back many centuries.
- Ancestors had knowledge of forests, plants, animals, local geography, and traditional crafts.
- Skills, craftsmanship, manual work, and trade contributed to local economies.
- Communities experienced social and economic challenges while preserving traditions and identity.
- Education is increasingly important to present-day progress.

All historical statements must be checked against credible historical/academic sources and reviewed by knowledgeable community representatives before publication. If verification is not available, use cautious wording and label the content as a broad community narrative, not a definitive chronology.

#### 5. Traditional occupations
Display six cards with concise descriptions:
- **Basket Weaving:** Use of bamboo, reeds, and natural fibres to make baskets for homes, farms, and markets.
- **Mat Weaving:** Handmade mats using natural grasses and plant materials.
- **Rope Making:** Ropes made from natural fibres for agriculture and everyday use.
- **Handicrafts:** Useful handmade products reflecting practical skill and creativity.
- **Agriculture Support:** Work supporting farming and rural livelihoods.
- **Animal Care:** Traditional knowledge related to livestock and animal care.

Do not imply that all members or families practised all these occupations.

#### 6. Our Culture
Content themes:
- Respect for elders.
- Unity among families.
- Hospitality.
- Hard work.
- Simplicity.
- Honesty.
- Mutual support.

The supplied narrative also mentions festivals, traditional music, folk dances, storytelling, and local customs. Use a gallery only when real, accurately captioned, approved images are available. Do not invent the names or details of ceremonies and festivals.

#### 7. Our Values
Show cards for:
- Education.
- Equality.
- Unity.
- Respect.
- Service to society.
- Hard Work.
- Integrity.
- Cultural Preservation.

Supporting statement: “These values guide each generation toward a better future.”

#### 8. From Tradition to Modern Success
Show career/education categories:
- Software Engineers.
- Doctors.
- Teachers.
- Government Officers.
- Police Officers.
- Entrepreneurs.
- Farmers.
- Business Owners.
- Scientists.
- Researchers.
- University Students.

Supporting statement: “Education has become the foundation for the community's progress.”

Use inclusive imagery and avoid implying that the list is a verified count or ranking.

#### 9. Our Strengths
- Strong Work Ethic.
- Practical Skills.
- Adaptability.
- Cultural Heritage.
- Family Values.
- Community Cooperation.
- Perseverance.
- Continuous Learning.

#### 10. Our Vision
The supplied aspiration is for every child in the community to have access to:
- Quality Education.
- Equal Opportunities.
- Skill Development.
- Career Guidance.
- Digital Literacy.
- Leadership Opportunities.

Close with the idea of preserving heritage while embracing innovation and progress.

#### 11. Historical accuracy note
Display an informational note explaining that some colonial-era records used outdated classifications, including references to the former Criminal Tribes Act. Explain that colonial labels do not define the identity or worth of the Korama, Koracha, and Korava communities today.

Use neutral, historically responsible wording. Do not reproduce stigmatizing labels as descriptions of the community. The legal/historical details and applicability of classifications to particular groups must be checked against authoritative sources before publication.

## 8.3 About Korama Hostel page

### Purpose
Explain the hostel's history, purpose, objectives, facilities, students, and educational role.

#### 1. Hero
**Title:** About Korama Hostel  
**Subtitle:** A Home of Learning, Unity, and Opportunity for Every Korama Student.  
Use a genuine hostel or student-study image if available and approved.

#### 2. Our History
Use the supplied owner content:

“Korama Hostel, situated at No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru, has been a symbol of hope, education, and empowerment for students belonging to the Korama community. Established with the vision of supporting deserving students who travel from different parts of Karnataka to pursue higher education, the hostel has continuously worked towards creating a safe and inspiring environment for academic excellence.

For decades, the hostel has served as a second home for students by providing not only accommodation but also guidance, discipline, and encouragement. Many former residents have gone on to build successful careers and have become respected professionals, contributing positively to society and making the Korama community proud.”

Verify “for decades”, the establishment date, and alumni claims with the Trust before publication.

#### 3. Why Korama Hostel Was Established
Use the supplied explanation that education is a foundation for a better future and that the hostel was established to reduce accommodation and financial barriers for students pursuing higher education in Bengaluru.

Purpose cards:
- Provide a safe and affordable place for students.
- Create an atmosphere where students can focus on studies.
- Encourage higher education in the community.
- Develop future leaders, professionals, and responsible citizens.
- Inspire students to achieve success and contribute to the community.

Closing statement:
“The hostel believes that when one student succeeds, the entire community progresses.”

Do not make guarantees about affordability or admission availability without management approval.

#### 4. Our Vision & Objectives
**Vision (supplied):**

“To empower every Korama student through quality education, discipline, and opportunity, enabling them to become confident professionals and responsible citizens who contribute to society with knowledge, integrity, and compassion.”

Belief statement:
“Education is the key that transforms lives, builds confidence, and creates a brighter future for generations to come.”

Objectives:
- Promote quality education.
- Encourage higher studies.
- Build confidence and leadership qualities.
- Support economically deserving students.
- Develop disciplined and responsible individuals.
- Inspire service to society.
- Strengthen unity and brotherhood within the community.
- Encourage students towards careers such as engineering, medicine, civil services, entrepreneurship, research, and teaching.

Closing statement:
“Our greatest achievement is seeing our students reach respected positions in society and proudly saying, ‘He is one of our Korama community students.’”

Use inclusive wording where appropriate so the message welcomes every student.

#### 5. Hostel Facilities
Intro:
“Korama Hostel is designed to provide students with a comfortable and homely environment where they can concentrate on their education without worry.”

Display the following categories and supplied details, but verify current availability before publication:

**Comfortable Accommodation**
- Clean and spacious rooms.
- Comfortable beds.
- Individual study tables and chairs.
- Peaceful study atmosphere.

**Home-Style Nutritious Food**
- Fresh, hygienic, nutritious, home-cooked meals.
- Prepared with care and affection.
- Intended to help students stay healthy and energetic.

**Pure Drinking Water**
- RO-purified drinking water.
- Clean and safe water available throughout the day.

**Laundry Facilities**
- Washing machines available for students.
- Convenient and hygienic laundry support.

**Clean Environment**
- Regular room cleaning.
- Clean washrooms.
- Well-maintained premises.

**Eco-Friendly Infrastructure**
- Solar water-heating system.
- Environment-friendly facilities.
- Sustainable use of energy resources.

**Safe & Peaceful Atmosphere**
- Student-friendly environment.
- Discipline and mutual respect.
- A home away from home.

Do not add CCTV, Wi-Fi, library, medical support, sports, security staff, or other facilities unless the owner confirms they exist.

#### 6. Our Students
Supplied content:
“At present, Korama Hostel is home to 15–20 students who are pursuing higher education in various professional and academic fields.”

Courses listed:
- Engineering (B.E. / B.Tech.).
- Doctor of Optometry (Eye Care Professionals).
- Master of Computer Applications (MCA).
- B.Sc. Nursing.
- Pharm.D.
- Fashion Designing.
- Other undergraduate and postgraduate professional programs.

Closing:
“These students represent the future of the Korama community. With dedication, discipline, and determination, they are preparing to become skilled professionals who will contribute to the nation and inspire the next generation.”

The resident count and course list are time-sensitive. Provide an easy way to update them and verify before publication. Do not show identifiable student names or photographs without consent.

#### 7. Our Motto
The owner supplied two alternatives. The Trust must select one as the primary motto before launch:
1. “Education Empowers Individuals. Knowledge Strengthens Communities. Together, We Build a Brighter Future.”
2. “Study with Purpose. Lead with Knowledge. Serve with Pride.”

Do not display “OR” as part of the final website content. The owner must choose the official motto.

## 8.4 Facilities page

### Purpose
Give students and parents a clear overview of confirmed facilities.

Use the same verified facility categories from the Hostel page:
- Accommodation.
- Home-style food/mess.
- RO drinking water.
- Laundry/washing machines.
- Clean environment and washrooms.
- Solar water heating.
- Study tables/chairs and peaceful study environment.
- Safe and respectful hostel atmosphere.

Requirements:
- Reuse one shared facility data source so the Hostel page and Facilities page do not contradict each other.
- Do not list a facility unless management confirms it is available.
- Avoid unsupported claims such as “24/7 security”, “high-speed Wi-Fi”, “CCTV monitored”, or “medical facility”.
- Each facility may have an icon, description, and approved image.
- On mobile, cards must stack cleanly and remain readable.

## 8.5 FAQ page

### Purpose
Answer common questions from students and parents using management-approved information.

Potential FAQ topics:
- What is Korama Hostel?
- Who is eligible to enquire/apply?
- Where is the hostel located?
- What facilities are available?
- What courses do current residents pursue?
- How can a student enquire about admission?
- What documents are required?
- What are the fees?
- What are the hostel timings?
- What are the visitor rules?
- Is food provided?
- Is drinking water available?
- Are laundry facilities available?
- How can parents contact the hostel?

Important:
- Only publish answers confirmed by management.
- Fees, documents, eligibility, vacancies, visiting hours, timings, leave rules, and admission procedures are *To verify*.
- If an answer is unknown, say “Please contact hostel management for the latest information” and provide the verified contact route.
- Use accessible accordions with keyboard support.
- If search is included, it must filter the actual FAQ dataset and show a useful no-results state.
- Do not create fake FAQs with invented answers.

## 8.6 Contact page

### Purpose
Make it easy for visitors to locate and contact the hostel.

Known address supplied:
No. 19, Mavalli Tank Bund Road, Journalist Colony, Bengaluru, Karnataka, India.

Required content:
- Official organization/hostel name.
- Full verified postal address.
- Verified phone number(s).
- Verified email address, if available.
- Office hours, only if confirmed.
- Warden/management contact, only with permission.
- Emergency contact information, only if approved and kept current.
- Map embed or map link pointing to the verified address.
- Accessible contact form, if a secure backend/email delivery path is configured.

Contact form fields (subject to final requirements):
- Name.
- Email or phone (at least one valid contact method).
- Subject.
- Message.
- Consent/privacy acknowledgement where required.

Form behaviour:
- Client and server validation.
- Clear success and failure messages.
- Spam protection/rate limiting.
- Do not expose API keys or mail credentials in client code.
- Do not claim a message was sent unless the server confirms it.
- Do not store personal data unnecessarily.
- Include a privacy notice describing how enquiries are handled.

All phone numbers, email addresses, hours, staff details, and emergency contacts are *To verify*. Never invent them.

## 8.7 Gallery page

Gallery is optional for V1 and should only be published when real, approved assets exist.

Possible categories:
- Hostel building and rooms.
- Study environment.
- Food and shared spaces.
- Community gatherings.
- Approved events and celebrations.

Requirements:
- Written permission/consent for identifiable people.
- Additional care for minors.
- Accurate captions and dates only when known.
- Optimized images, responsive grid, accessible lightbox if used.
- Do not use AI-generated images as evidence of actual hostel facilities or events.
- If no approved assets exist, hide the page/link rather than publish an empty or misleading gallery.

## 8.8 AI Assistant

### Purpose
Help visitors find approved information about the community and hostel.

### Example supported questions
- What is Koram Hostel?
- Who can enquire about joining?
- What facilities are available?
- What is the hostel address?
- How can I apply?
- What documents are required?
- What is the hostel fee?
- Is Wi-Fi available?
- What is today's menu?
- Who is the warden?
- What are the hostel rules?
- Can parents visit?

These are example intents, not permission to invent answers. Many require management-approved data that is not yet supplied.

### Release requirements
The AI assistant must not be presented as operational until a verified knowledge base and safe answer flow exist.

### Grounding and safety
1. Answer only from approved, current hostel/community content.
2. If the information is missing, outdated, or conflicting, say so and direct the visitor to the verified contact method.
3. Never invent fees, availability, timings, rules, admission requirements, staff details, menus, or emergency information.
4. Do not provide legal, medical, or emergency advice as if it were an official Trust response.
5. Do not expose private student information, staff personal data, credentials, internal documents, or other users' enquiries.
6. Clearly identify the assistant as an AI assistant.
7. Do not claim that an application, booking, complaint, or message has been submitted unless a real backend operation confirms it.
8. Provide a way to contact a human for important or uncertain questions.
9. Log only what is necessary, apply retention controls, and disclose relevant data handling.
10. Protect against prompt injection in retrieved documents. Treat knowledge-base content as data, not instructions.

### Future enhancements
- English and Kannada.
- Kannada-English mixed language support.
- Voice input/output.
- Retrieval-Augmented Generation (RAG).
- Admin-managed knowledge base.
- Feedback on answer usefulness.

Do not implement voice or multilingual features until quality can be tested.

---

## 9. Functional requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-001 | All approved public pages load through stable routes | Must |
| FR-002 | Shared header/navigation and footer remain consistent | Must |
| FR-003 | Navigation links lead to the correct pages | Must |
| FR-004 | Home page presents the organization and key routes | Must |
| FR-005 | Community page presents approved community content | Must |
| FR-006 | Hostel page presents approved hostel content | Must |
| FR-007 | Facilities information is consistent across pages | Must |
| FR-008 | FAQ displays only approved answers | Must |
| FR-009 | Contact page shows verified address and available contact methods | Must |
| FR-010 | Contact form validates and reports its real submission status, if enabled | Should |
| FR-011 | Gallery only displays approved media | Should |
| FR-012 | AI assistant refuses to guess missing facts | Must, if released |
| FR-013 | All pages are responsive | Must |
| FR-014 | All interactive elements are keyboard accessible | Must |
| FR-015 | Page metadata and social sharing metadata are configured | Must |
| FR-016 | Error, loading, empty, and not-found states are handled | Must |
| FR-017 | Content can be updated without inconsistent duplicates | Should |
| FR-018 | Future admin/CMS integration is possible without rebuilding the public site | Should |

---

## 10. Non-functional requirements

### 10.1 Performance
- Optimize images and use responsive image delivery.
- Lazy-load below-the-fold media where appropriate.
- Avoid unnecessary client-side JavaScript.
- Prevent layout shifts.
- Use caching appropriately for public content.
- Set measurable Core Web Vitals targets and test them on representative devices.
- Do not claim a Lighthouse score without running the audit.

### 10.2 Reliability
- Provide meaningful error and not-found pages.
- Avoid broken internal links.
- Validate form data on the server.
- Use safe fallbacks if optional services (maps, email, AI provider) fail.
- Do not make the entire page depend on a nonessential third-party widget.

### 10.3 Accessibility
Target WCAG 2.2 AA where practical:
- Semantic HTML.
- Logical heading hierarchy.
- Keyboard access for all controls.
- Visible focus indicators.
- Correct labels and accessible names.
- Sufficient colour contrast.
- Alt text for informative images.
- Reduced-motion support.
- Accessible accordions, dialogs, menus, and forms.
- Do not communicate status using colour alone.

### 10.4 Browser/device support
Support current stable versions of major browsers and common Android/iOS devices. Test at minimum:
- Small mobile viewport.
- Large mobile viewport.
- Tablet.
- Laptop.
- Desktop.

### 10.5 Maintainability
- Reusable components.
- Typed data models.
- Shared content definitions for repeated information.
- Clear naming and folder structure.
- No duplicated constants for the same content.
- Document environment variables and setup.
- Keep secrets out of source control.
- Use dependency versions compatible with the existing project.

---

## 11. Recommended technical architecture

| Layer | Preferred option |
|---|---|
| Web framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI primitives | shadcn/ui where appropriate |
| Icons | Lucide React |
| Motion | Framer Motion, used sparingly |
| Forms | React Hook Form + Zod, if needed |
| Backend | Next.js Route Handlers or a separately justified service |
| Database | PostgreSQL / SQLite when persistent dynamic data is required |
| ORM | Prisma, if persistent dynamic data is adopted |
| Hosting | Vercel is a preferred option for Next.js |
| Source control | Git and GitHub |

---

## 18. Content and information requiring owner verification

The development agent must maintain a checklist and ask the owner/Trust for missing details rather than invent them.

### Organization
- [ ] Official registered/public name and spelling.
- [ ] Approved logo and brand assets.
- [ ] Confirmed establishment year (1985).
- [ ] Approved mission and vision statements.
- [ ] Permission to use the name “Trust” in public branding.

### Contact
- [ ] Confirmed full postal address and postal code.
- [ ] Official phone number.
- [ ] Official email.
- [ ] Office hours.
- [ ] Warden/management contact and permission to publish.
- [ ] Emergency contact details and maintenance owner.
- [ ] Verified map pin.

### Hostel operations
- [ ] Current resident count.
- [ ] Eligibility/admission criteria.
- [ ] Admission process and availability.
- [ ] Fee structure and what it includes.
- [ ] Required documents.
- [ ] Current timings, visitor rules, leave rules, and other policies if they are to be published.
- [ ] Current mess/menu information, if required.
- [ ] Confirmation of every listed facility.
- [ ] Confirmed courses currently represented.
- [ ] Selection of one official motto.

### Community content
- [ ] Community-approved descriptions and terminology.
- [ ] Reliable references for historical statements.
- [ ] Review of traditional occupation descriptions.
- [ ] Review of cultural descriptions and image captions.
- [ ] Review of colonial-era historical accuracy note.
- [ ] Consent for photographs and testimonials.

### Digital operations
- [ ] Domain name and owner.
- [ ] Hosting account owner.
- [ ] Email delivery provider, if contact form is used.
- [ ] Privacy policy and data retention decisions.
- [ ] AI provider, budget, approved knowledge base, and human escalation contact, if AI is released.

---

## 19. Acceptance criteria

The V1 website is accepted when:

1. All approved V1 routes exist and work.
2. The visual system is consistent with the existing approved website.
3. Existing working pages, navigation, footer, branding, and design tokens have not been unintentionally changed.
4. The Home page communicates the purpose and routes users to relevant pages.
5. Community content is respectful, cautiously worded, and reviewed.
6. Hostel content uses the supplied approved content and verified operational details.
7. Facility descriptions match actual available facilities.
8. FAQ answers are approved and do not invent policies.
9. Contact details are verified and usable.
10. Gallery is either populated with approved media or omitted/hidden.
11. AI is either grounded and tested or clearly not yet available.
12. The website is responsive and keyboard accessible.
13. Metadata, sitemap, and error states are present.
14. No fake testimonials, fake metrics, dead buttons, or misleading placeholders are visible.
15. Automated checks and the production build pass.
16. Setup, testing, deployment, and content-maintenance instructions are documented.
