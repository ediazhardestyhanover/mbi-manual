# MBI Manual – field reference (prototype)

A phone and tablet web app for the LADOTD *Movable Bridge Inspection Manual* (February 2026).
It installs to the home screen, searches the whole manual, and works with no connection once the manual is downloaded.

**Prototype. Not an official LADOTD publication.** Where this app and the official manual differ, the official manual governs.

## What it does
- Full-text search that works offline, including section numbers (3.16.4), element numbers (882), figures (3-21), pages (p 128) and acronyms (ATS)
- All 204 sections with text reflowed for small screens, and all 180 figures with pinch-zoom
- Element cards for ADEs 840–892: condition states CS1–CS4 and feasible actions from Appendix B, filterable by discipline
- Field reference by bridge type (swing, vertical lift, bascule, pontoon), plus critical findings, measurements and limits, a component picker and an inspection workflow; every line links to the manual section and the official page
- Field terms in search: "gearbox" also finds the manual's term, speed reducer
- One tap to the official manual page for any section, figure or element
- Report a problem: prefills the app version, manual edition, page and device
- Bookmarks, recently viewed, text size, and light, dark and bright-sun display modes
- "Download for offline use" saves the figures and the original PDF on the device (about 28 MB)

## Updating the site
After changing any app file, open `sw.js` and raise `VERSION` (for example 1.1.0 to 1.1.1), then upload the changed files.
Phones pick up the new version the next time the app is opened with a connection.

## Settings you can change without rebuilding: `config.json`
Edit `config.json` on GitHub (pencil icon, then Commit changes). Phones read it each time the app opens with a connection; no version bump is needed.
- `notice`: a message shown at the top of the home screen, for example `"Revision 1 of the manual was issued 06/15/2027. Use the official manual until the app is updated."` Leave it as `""` for no message.
- `latestEdition`: the newest manual edition, as year-month (`"2026-02"`). If it differs from the edition built into the app, users see "A newer manual revision is available" with a button to check for an app update.
- `reportEmail`: the address that "Report a problem" sends to. While it is `""`, reports can still be shared or copied.

## Files
- `index.html`, `app.js`, `app.css` – the app
- `sw.js` – offline support
- `config.json` – notice, newest edition and report address (see above)
- `data/content.json` – the manual's text, sections, tables and element data
- `data/f-*.bin` – figure images, packed into bundles
- `data/thumbs.bin` – small photos for the bridge-type and component pickers
- `data/manual.pdf` – the official manual, for the "View official manual" page view
- `lib/` – search (MiniSearch, MIT), zoom (Panzoom, MIT) and PDF rendering (PDF.js, Apache-2.0)
- `fonts/` – Barlow and Barlow Condensed (SIL Open Font License)
