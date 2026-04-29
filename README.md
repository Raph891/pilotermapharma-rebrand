# PiloterMaPharma — Landing page

Site marketing du logiciel de pilotage pour pharmaciens titulaires.

## Stack

- Next.js 16 (App Router, server components)
- React 19
- Tailwind CSS v4 (avec @theme)
- shadcn/ui sur Base UI
- lucide-react pour les icônes
- Inter + JetBrains Mono via next/font

## Démarrer en local

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000.

## Build de production

```bash
npm run build
npm run start
```

## Structure

- `src/app/` — App Router : layout, page racine, pages légales (mentions, CGU, RGPD, cookies), routes metadata (sitemap, robots, opengraph-image, twitter-image).
- `src/components/sections/` — sections de la landing (Hero, Features, Objectives, Payroll, Planning, Showcase, MDL, Challenges, HowItWorks, Integrations, MultiPharma, Comparison, Testimonials, Security, Conformité, CoffreRh, Pricing, FAQ, FinalCta, SiteFooter).
- `src/components/ui/` — primitives shadcn (button, card, accordion, badge, separator).
- `public/` — logo SVG, favicon SVG.

## Sections principales

- **Pilotage** — CA mois par mois, marges, KPIs.
- **Suivi des objectifs** — fixés au bilan de l'expert-comptable, suivis mois par mois.
- **Masse salariale** — ratio MS/CA avec simulateur « Est-ce que je peux embaucher ? ».
- **Planning & RH** — plannings hebdo, fiches de poste, organigramme, coffre-fort employé.
- **Conformité ARS** — 155 points de contrôle structurés sur 15 rubriques.
- **Coffre-fort officine** — documents officiels par pharmacie, chiffrés au repos.

## Sécurité

- Headers de sécurité configurés dans `next.config.ts` (X-Frame-Options, HSTS, Permissions-Policy, Referrer-Policy).
- Aucun secret en dur, `.env*` gitignoré.
- JSON-LD SoftwareApplication + Organization pour le SEO.
- Sitemap.ts et robots.ts générés via les conventions App Router.

## Déploiement

Pensé pour Vercel. Aucune variable d'environnement requise pour le moment.

## Licence

Propriétaire — tous droits réservés.
