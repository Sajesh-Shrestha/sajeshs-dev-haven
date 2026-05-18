# Portfolio Redesign Plan

A large multi-section visual overhaul of `src/components/portfolio-site.tsx` + `src/styles/portfolio.css`. Five distinct subsystems, each non-trivial.

## 1. Hero Header
- Keep existing serif/geometric type mix; upgrade the teal underline on "Shrestha" into an accent baseline anchor (thicker, offset, with a left/right cap tick).
- CTAs: "Download CV" → solid teal fill, subtle glass highlight. "Get in touch" → translucent glass border (backdrop-blur, 1px border, low contrast).
- Background: add a fixed absolutely-positioned SVG layer behind the hero with low-opacity wireframe cubes + grid lines (pure SVG, no deps), masked with radial fade.

## 2. Skills — Asymmetric Bento + Accordion
Replace current `IconCardGrid` usage for technicalSkills + softSkills with a two-column layout:
- **Left (Core QA Strengths)**: CSS-grid bento, 4 cells with mixed col/row spans.
  - API Testing card → wide; inline mini diagram `[GET /users] → [200 OK {...}]` using two pill blocks + arrow.
  - Automation card → contains a faux IDE window (traffic-light dots, monospace snippet: `const test = async ({ page }) => { await page.goto('/'); };`).
  - Manual Testing + SQL → standard bento tiles.
  - Load + Security → smaller stacked tiles.
- **Right (Soft Skills)**: Accordion list (use existing Radix `@/components/ui/accordion` — already in project). Each item shows icon + title collapsed; expands to bullet points (extend `softSkills` data with `points: string[]`).

## 3. Tools Marquee
- Replace existing tools grid with a single horizontal row, no card containers.
- Monochrome icons (use `currentColor` at muted opacity).
- Hover: icon brightens, soft radial glow behind it, tooltip pops above with existing `detail` text. Pure CSS (`:hover` + `::after` for tooltip).
- Keep it static row (not auto-scrolling) per mockup ("single horizontal line").

## 4. Journey — Vertical Split Timeline
Rebuild `AutoTimeline`:
- 2-column grid: left = dates (sticky-ish, right-aligned), right = content.
- Center: thin vertical gradient line (teal→transparent), with glowing dot nodes per milestone.
- Keep existing expand/collapse via chevron; collapsed shows role only, expanded shows company + bullet points.

## 5. Projects — Wireframes + Tags
Replace auto-scrolling marquee with a static responsive grid:
- Each card gets a small abstract SVG wireframe header (~80px tall) representative of the project type (news layout = header bar + 3 cols; registration = form box w/ fields; eKYC = ID card outline; CMS = sidebar + grid; BPM = flow nodes; in-house = stacked panels).
- Status pill top-right with a `tag` field added per project (e.g., `API-Dense`, `Auth-Heavy`, `Content-Heavy`, `Form-Heavy`, `Workflow`, `Multi-System`).

## Technical Notes
- No new dependencies; reuse `@/components/ui/accordion` for soft skills.
- All new styles append to `src/styles/portfolio.css` using existing `qa-*` naming convention and theme tokens (no hard-coded raw colors except where teal accent already lives).
- SVG wireframes inlined as small React components inside `portfolio-site.tsx`.
- Preserve all existing data, copy, section IDs, nav anchors, and dock/footer contact section (untouched).
- Responsive: bento collapses to single column under 768px; timeline collapses to single column with line on left under 640px; marquee wraps under 480px.

## Files Touched
- `src/components/portfolio-site.tsx` — restructure hero, skills, tools, journey, projects sections; add small SVG/wireframe subcomponents; extend softSkills data with `points`.
- `src/styles/portfolio.css` — new classes for bento, ide-window, marquee row + tooltip, split timeline, project wireframes + tag pills, hero bg wireframe.

Proceed?
