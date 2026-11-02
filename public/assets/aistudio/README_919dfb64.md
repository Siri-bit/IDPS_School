# IDPS Website — plain HTML / CSS / JS

Converted from the React + Vite + Tailwind project. Same sections, same data, same behaviour — no build step, no npm.

## Run it
Open `index.html` in a browser, or upload the whole folder to any web host (it also works from `file://`).
An internet connection is needed for: Google Fonts, Leaflet (map), jsPDF (PDF download), canvas-confetti (enquiry confetti) and the Unsplash photos — all loaded from CDNs in `index.html`.

## Structure
```
index.html            Full page markup (pre-rendered) + <script> tags
css/style.css         Compiled Tailwind utilities + custom styles (map markers, ticker, grid patterns)
js/runtime.js         Tiny helper: state, events, DOM updates (replaces React)
js/theme.js           Royal Blue & Gold theme values (was ThemeContext)
js/data.js            Branches, territories, franchise models, services, roadmap, FAQs, gallery
js/india-states.js    India state boundaries (GeoJSON) for the map
js/icons.js           Inline Lucide icons
js/pdf-generator.js   Brochure PDF generator (jsPDF)
js/components/*.js    One file per section/modal (same names and logic as the .tsx files)
js/app.js             Page shell: modal state, floating buttons, start-up
assets/               Logo, chairman photo, hero photos, brochure PDFs
```

## Editing
- Text/numbers/campuses/FAQs: edit `js/data.js`.
- A section's markup/logic: edit its file in `js/components/` (the HTML is in the template strings).
- `index.html` contains the pre-rendered first paint; the scripts take over on load, so keep component edits and `index.html` in sync, or simply clear the contents of `<div id="root">` and the scripts will render everything.
