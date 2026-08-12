# Nuno Santos Lab

Modern website for the Nuno Santos Lab at GIMM (Gulbenkian Institute for Molecular Medicine).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- Magic UI–inspired components (Bento Grid, Marquee, Number Ticker, Dot Pattern, Shiny Text, Glow Cards)
- EN / PT via locale routing (`/en`, `/pt`)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/en`.

## Update external hubs

Surveillance Network and Insectary link out to dedicated sites. Edit URLs in:

`src/data/site.ts` → `siteConfig.external`

## Deploy

Ready for Vercel. Set the project root to this folder and deploy.
