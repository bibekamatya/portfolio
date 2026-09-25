# Hom Narayan Amatya — Portfolio

Frontend Developer portfolio built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion.

Live: https://hom-narayan.vercel.app/

## Stack

- React + TypeScript + Vite
- Tailwind CSS (dark mode via `class`)
- Framer Motion, react-scroll, react-simple-typewriter
- Formspree for contact form (`VITE_FORMSPREE_ID`)

## Develop

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Env

```bash
cp .env.example .env
# VITE_FORMSPREE_ID=xblqjokv
# VITE_GA_ID=G-DHX693GT74
```

## Structure

- `src/components/landingPage/` — hero, experiences, skills, education, projects, contact, navbar
- `src/dataSheet.ts` — all portfolio content (edit here)
- `src/assets/` — images, icons, CV
- `public/` — favicon, robots.txt
