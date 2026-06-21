# Adri Katyayan — Portfolio

React + Vite + Tailwind + Framer Motion. Dark "engineering dashboard" theme — terminal boot sequence,
filterable project grid, monospace metric readouts pulled straight from the resume.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Edit your content

Everything text-based lives in one file: `src/data/data.js` — profile info, hero stats, experience,
projects (with tags), publications, skills. Edit that file and the whole site updates. No need to touch
component code unless you want to change layout/design.

To swap the downloadable resume, replace `public/resume.pdf` with your own file (keep the filename).

## Deploy free — Vercel (recommended)

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub (free).
3. Click **Add New → Project**, select the repo. Vercel auto-detects Vite — leave defaults, click **Deploy**.
4. You get a free URL like `your-portfolio.vercel.app` in ~1 minute. Every future `git push` auto-redeploys.
5. Optional: add a custom domain later in Project Settings → Domains (domain itself costs ~$10/yr,
   Vercel hosting stays free).

## Deploy free — GitHub Pages (alternative)

1. `npm install -D gh-pages`
2. In `package.json` add: `"homepage": "https://<your-username>.github.io/portfolio"` and a script:
   `"deploy": "vite build && gh-pages -d dist"`
3. In `vite.config.js` set `base: '/portfolio/'`.
4. Run `npm run deploy`. Site goes live at the homepage URL above in a few minutes.

## Put it on LinkedIn

LinkedIn profile → **Featured** section → **Add → Link**. Paste your live Vercel/GitHub Pages URL directly —
no PDF upload needed, LinkedIn auto-generates a preview card from the page.

## Stack

- React 18 + Vite
- Tailwind CSS (custom palette — see `tailwind.config.js`)
- Framer Motion (boot sequence, scroll reveals, filter transitions)
- Fonts: Space Grotesk (display), IBM Plex Sans (body), JetBrains Mono (data/labels)
