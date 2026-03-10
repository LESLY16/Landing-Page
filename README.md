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

## Vercel Deployment

### Option 1: Vercel Dashboard

1. Push this project to GitHub.
2. In Vercel, choose **Add New Project** and import the repository.
3. Keep defaults (Vercel auto-detects Vite):
	- Build command: `npm run build`
	- Output directory: `dist`
4. Click **Deploy**.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

This repo includes `vercel.json` with SPA rewrite support for production routing.

After your domain is connected on Vercel, update `index.html`:
- `og:url` should match your final live URL.

## Lead Form Setup (Formspree)

1. Create a free form at [Formspree](https://formspree.io/).
2. Copy your form endpoint id (example: `xqabcvde`).
3. Open `src/App.jsx` and replace:
	- `https://formspree.io/f/your-form-id`
	with
	- `https://formspree.io/f/<your-id>`
4. Redeploy on Vercel.

After this, submissions from the landing page form go directly to your Formspree inbox.
