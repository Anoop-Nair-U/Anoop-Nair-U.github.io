# Anoop Nair — Portfolio (Vite + React) — Dark mode + Animations

## What's included
- Dark mode toggle (persisted to localStorage)
- Framer Motion animations for section reveals
- Tailwind CSS configured (`darkMode: 'class'`)
- Build outputs to `docs/` for GitHub Pages

## Local setup (you said Node is OK)
1. Install Node.js (LTS) from https://nodejs.org/
2. Extract the zip and open a terminal in the project folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run dev server:
   ```bash
   npm run dev
   ```
   Open the printed URL (usually http://localhost:5173).

## Build & Deploy to GitHub Pages (username repo)
1. Build:
   ```bash
   npm run build
   ```
   This will generate a `docs/` folder.
2. Commit & push everything (including `docs/`) to the repository `https://github.com/Anoop-Nair-U/Anoop-Nair-U.github.io.git`
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio with dark mode & animations"
   git branch -M main
   git remote add origin https://github.com/Anoop-Nair-U/Anoop-Nair-U.github.io.git
   git push -u origin main
   ```
3. In GitHub repo Settings → Pages, set Source to `main` branch and folder `/docs` (save). The site will be available at:
   `https://Anoop-Nair-U.github.io/`

## Notes
- Replace `public/resume.pdf` with your real resume file before building.
- Update links in `src/Portfolio.jsx` if you want different GitHub/LinkedIn URLs.
