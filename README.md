# The Notebook — React Blog UI (Mini Project)

A small, fully responsive React + Vite blog UI with real-time search and
category filtering, built from a local `posts.json` file (no backend).

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Folder structure

```
react-blog-ui/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx              # React entry point, mounts <App />
    ├── App.jsx                # Owns search/filter state, composes the page
    ├── App.css                # Hero, controls bar, footer, layout styles
    ├── index.css              # Global reset + design tokens (CSS variables)
    ├── data/
    │   └── posts.json         # 12 sample blog posts across 10 categories
    ├── assets/                 # (empty — reserved for images/icons if added)
    └── components/
        ├── Navbar.jsx / Navbar.module.css           # Sticky top navigation
        ├── SearchBar.jsx / SearchBar.module.css     # Real-time title search input
        ├── Filter.jsx / Filter.module.css           # Category pill buttons
        ├── BlogCard.jsx / BlogCard.module.css       # Single post card + Read More
        ├── BlogList.jsx / BlogList.module.css       # Responsive grid of cards
        └── EmptyState.jsx / EmptyState.module.css   # "No Posts Found" message
```

Every file above goes exactly where it's listed — this is the complete
project root. Copy the whole `react-blog-ui/` folder as-is.

## How search + filter work together

`App.jsx` holds two pieces of state: `searchTerm` and `activeCategory`.
On every render, `filteredPosts` is recalculated with a single
`.filter()` call that checks **both** conditions — a post only shows up
if its title matches the search text **and** its category matches the
active filter (or the filter is set to "All"). This is why search and
filter compose correctly instead of fighting each other.

## Design notes

- Palette: ink navy + aged gold on a warm paper background, meant to feel
  like a printed journal rather than a generic dashboard.
- Type: Fraunces (display serif) for headings, Inter for body text,
  JetBrains Mono for small meta labels (dates, eyebrows) — a deliberate
  three-role type system.
- Signature element: the postmark-style dashed category "stamp" on each
  card, which rotates slightly on hover.
- Fully responsive grid: 3 columns desktop → 2 columns tablet (≤900px) →
  1 column mobile (≤580px).
