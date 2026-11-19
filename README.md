# MBI Manual – field reference (prototype)

A phone and tablet web app for the LADOTD *Movable Bridge Inspection Manual* (February 2026).
It installs to the home screen, searches the whole manual, and works with no connection once the manual is downloaded.

**Prototype. Not an official LADOTD publication.** Where this app and the official manual differ, the official manual governs.

## What it does
- Full-text search that works offline, including section numbers (3.16.4), element numbers (882), figures (3-21), pages (p 128) and acronyms (ATS)
- All 204 sections with text reflowed for small screens, and all 180 figures with pinch-zoom
- Element cards for ADEs 840–892: condition states CS1–CS4 and feasible actions from Appendix B
- One tap to the original PDF page for any section, figure or element
- Bookmarks, recently viewed, text size, and light, dark and bright-sun display modes
- "Download for offline use" saves the figures and the original PDF on the device (about 28 MB)

## Updating the site
After changing any file, open `sw.js` and raise `VERSION` (for example 1.0.0 to 1.0.1), then upload the changed files.
Phones pick up the new version the next time the app is opened with a connection.

## Files
- `index.html`, `app.js`, `app.css` – the app
- `sw.js` – offline support
- `data/content.json` – the manual's text, sections, tables and element data
- `data/f-*.bin` – figure images, packed into bundles
- `data/manual.pdf` – the original manual, for the "Original page" view
- `lib/` – search (MiniSearch, MIT), zoom (Panzoom, MIT) and PDF rendering (PDF.js, Apache-2.0)
- `fonts/` – Barlow and Barlow Condensed (SIL Open Font License)
