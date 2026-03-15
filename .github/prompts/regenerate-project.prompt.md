---
mode: agent
description: Regenerates the full Pinnacle Dev Studio landing page project from scratch using React 19 + Vite 7.
---

# Regenerate: Pinnacle Dev Studio Landing Page

Scaffold a complete React 19 + Vite 7 landing page project for **Pinnacle Dev Studio** — a digital content delivery and future-ready marketplace brand by **Lesly Max Dsouza**.

---

## Stack & Tooling

- **Framework:** React 19 (`react`, `react-dom`)
- **Bundler:** Vite 7 (`@vitejs/plugin-react`)
- **Linting:** ESLint 9 with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- **Fonts:** Google Fonts — `Space Grotesk` (500, 700) and `Manrope` (400, 600, 700)
- **Form backend:** Formspree (action URL placeholder `https://formspree.io/f/your-form-id`)
- **Deploy target:** Vercel (with SPA rewrite rule) + GitHub Pages (CNAME)

---

## File Structure

```
/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── vercel.json
├── CNAME
├── SECURITY.md
├── README.md
├── public/
│   ├── pinnacle-logo.svg     ← brand mark (orange square / geometric logo)
│   ├── og-image.svg          ← Open Graph social share image
│   └── vite.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── index.css
```

---

## `package.json`

```json
{
  "name": "landing-page",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^7.3.1"
  }
}
```

---

## `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## `CNAME`

```
www.pinnacledevstudio.com
```

---

## `index.html`

Full `<head>` must include:
- `charset`, `viewport`, `robots`, `author`, `keywords`, `description` meta tags
- Favicon: `/pinnacle-logo.svg`
- Open Graph tags: `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url` (`https://www.pinnacledevstudio.com`), `og:image` (`/og-image.svg`)
- Twitter card tags: `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`
- Canonical link: `https://www.pinnacledevstudio.com`
- JSON-LD structured data for `Organization` with name, url, logo, founder (Lesly Max Dsouza), contact email `hello@pinnacledevstudio.com`
- `<title>`: `Pinnacle Dev Studio | Digital Content and Commerce`
- Mount point: `<div id="root"></div>` with `<script type="module" src="/src/main.jsx">`

---

## `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Manrope:wght@400;600;700&display=swap');

:root {
  font-family: 'Manrope', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #161616;
  background-color: #f4efe8;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-width: 320px;
  background: radial-gradient(circle at 85% 15%, #ffd7a2 0%, #f4efe8 50%, #ece7df 100%);
}

#root { min-height: 100vh; }

p { color: #292824; }
```

---

## `src/App.css` — Key Design Tokens

| Token | Value |
|---|---|
| Brand orange | `#f4a340` |
| Near-black | `#121417` |
| Warm off-white | `#fff8ef` |
| Page background | `#f4efe8` |
| Card border | `#e8e5dd` |
| Body text | `#292824` |
| Eyebrow text | `#ffd7a2` |

### Layout

- `.page-shell`: `max-width: 1120px; margin: 0 auto; padding: 2rem 1.25rem 3rem`
- `.hero`: radial gradient `circle at top right, #ffc67a → #f4a340 → #121417`; `border-radius: 24px`; `box-shadow: 0 30px 55px rgba(18,20,23,0.3)`
- `.top-nav`: flexbox, space-between, `margin-bottom: 4rem`
- `.hero-content`: `max-width: 760px`; entrance animation `rise-up` (translateY 24px → 0, opacity 0 → 1, 0.65s ease-out)
- `.section`: `margin-top: 2.25rem; padding: 1.25rem 0.1rem`
- `.grid`: `repeat(auto-fit, minmax(210px, 1fr))`; gap `1rem`
- `.card`: white bg, `border-radius: 16px`, `box-shadow: 0 14px 28px rgba(22,22,22,0.06)`
- `.roadmap`: warm gradient bg, `border-radius: 20px`
- `.timeline`: `repeat(auto-fit, minmax(220px, 1fr))`
- `.lead-section`: 2-column grid, white bg, `border-radius: 20px`
- `.footer`: flexbox, space-between, align-center

### Typography

- `h1`: `Space Grotesk`; `clamp(2rem, 5vw, 4rem)`; `line-height: 1.05`; color `#fff8ef`
- `h2`: `Space Grotesk`; `clamp(1.5rem, 3.2vw, 2.2rem)`; color `#111`
- `h3`: `Space Grotesk`; `1.15rem`
- `.eyebrow`: `0.76rem`; uppercase; `letter-spacing: 0.14em`; color `#ffd7a2`
- `.lead`: `clamp(1rem, 2.5vw, 1.2rem)`; color `#fff2e4`; `max-width: 67ch`

### Buttons

- `.btn`: `border-radius: 12px`; `font-weight: 700`; `padding: 0.75rem 1.15rem`; hover lifts `-2px` with shadow
- `.btn-primary`: bg `#121417`, text `#fff8ef`
- `.btn-secondary`: bg `#fff8ef`, text `#121417`

### Form

- Inputs/textareas: `border-radius: 10px`; border `#d8d2c8`; bg `#fffdf8`; font `Manrope`
- `.submit-btn`: full width, `margin-top: 0.4rem`

### Media Query (`max-width: 620px`)

- `.lead-section` collapses to single column
- `.hero` padding adjusts

---

## `src/App.jsx` — Component Structure

### Page shell: `<div className="page-shell">`

#### `<header className="hero">`
- **Nav** (`.top-nav`): brand logo + name left | "Start a Project" anchor-link `#contact` right
- **Hero content** (`.hero-content`):
  - Eyebrow: `Built by Lesly Max Dsouza`
  - `<h1>`: `Deliver Digital Content Today. Expand Into Commerce Tomorrow.`
  - `.lead` paragraph explaining Pinnacle Dev Studio's mission
  - Two CTA buttons: `Explore Services → #services` (primary), `View Roadmap → #roadmap` (secondary)

#### `<main>`

**Section: `#services` — "What We Deliver"** (3 cards)
| Card | Title | Description |
|---|---|---|
| 1 | Digital Content Distribution | Fast, secure delivery of ebooks, courses, design assets, and premium downloads with flexible access controls. |
| 2 | Conversion-Focused Web Presence | Landing pages and storefront-ready experiences designed to convert visitors into loyal paying customers. |
| 3 | Business Automation | Integrated workflows for onboarding, delivery notifications, customer support, and payment lifecycle visibility. |

**Section: `#roadmap` — "Growth Roadmap"** (3 timeline items)
| Phase | Title | Description |
|---|---|---|
| Phase 1 | Digital-First Platform | Launch and scale content delivery products with robust performance and customer analytics. |
| Phase 2 | Hybrid Commerce Layer | Add secure buyer-seller flows for physical and digital goods, inventory touchpoints, and transaction confidence tools. |
| Phase 3 | Marketplace Expansion | Enable multi-vendor growth, recurring revenue channels, and global customer reach from one scalable platform. |

**Section: `#leads` — "Get Early Access Updates"** (`.lead-section` 2-col grid)
- Left col (`.lead-copy`): heading + description paragraph
- Right col: `<form>` POST to `https://formspree.io/f/your-form-id`
  - Hidden field `_subject = "New Landing Page Lead"`
  - Fields: `fullName` (text, required), `email` (email, required), `message` (textarea 4 rows, required)
  - Submit button: "Join the List"
  - Note `<p>` reminding developer to replace `your-form-id`

#### `<footer id="contact" className="footer">`
- Left: brand logo + name, byline "Lesly Max Dsouza"
- Right: primary button mailto `hello@pinnacledevstudio.com` — "Contact Us"

---

## After Scaffolding

Run:
```powershell
npm install
npm run dev
```

Replace `your-form-id` in `App.jsx` with the actual Formspree form ID before deploying.

Deploy to Vercel by connecting the GitHub repository. The `vercel.json` handles SPA routing automatically.
