# Pinnacle Dev Studio Landing Page

React + Vite landing page for **Pinnacle Dev Studio** by **Lesly Max Dsouza**.

## Tech Stack

- React 19
- Vite 7
- Plain CSS (custom responsive layout)

## Local Development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
npm run preview
```

The production-ready output is generated in the `dist/` folder.

## Lead Form Setup (Formspree)

1. Create a free form at [Formspree](https://formspree.io/).
2. Copy your form endpoint id (example: `xqabcvde`).
3. Open `src/App.jsx` and replace:
	- `https://formspree.io/f/your-form-id`
	with
	- `https://formspree.io/f/<your-id>`
4. Redeploy on Vercel.

After this, submissions from the landing page form go directly to your Formspree inbox.
