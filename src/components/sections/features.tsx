"use client";

import {
  ArrowRight,
  Banknote,
  Boxes,
  CalendarRange,
  FolderLock,
  Gem,
  LayoutGrid,
  LineChart,
  Tag,
  Trophy,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const MODULES = [
  {
    icon: LineChart,
    name: "Pilotage CA & marge",
    bullets: [
      "Tableau de bord N vs N-1",
      "Objectifs annuels par pharmacie",
      "CA TTC, HT, marge, taux de marge",
    ],
    accent: "brand",
  },
  {
    icon: Boxes,
    name: "Stocks & Produit Cher",
    bullets: [
      "Suivi MDL par tranches de prix",
      "Stocks dormants valorisés",
      "Alertes ruptures personnalisables",
    ],
    accent: "brand",
    flag: <Gem className="h-3 w-3" strokeWidth={2.4} />,
  },
  {
    icon: Tag,
    name: "Promos & Challenges Labo",
    bullets: [
      "Zones de promo (gondole, comptoir, cross)",
      "Simulation de remise",
      "Challenges Pileje, Bioderma…",
    ],
    accent: "warning",
    flag: <Trophy className="h-3 w-3" strokeWidth={2.4} />,
  },
  {
    icon: Users,
    name: "RH & Planning",
    bullets: [
      "Masse salariale en temps réel",
      "Planning équipe + distribution des tâches",
      "Fiches de poste, organigramme",
    ],
    accent: "success",
    flag: <CalendarRange className="h-3 w-3" strokeWidth={2.4} />,
  },
  {
    icon: Banknote,
    name: "Finances & Engagements",
    bullets: [
      "Crédits, leasings, contrats, charges fixes",
      "Import PDF des prélèvements",
      'Vision "Total mensuel" consolidée',
    ],
    accent: "success",
  },
  {
    icon: FolderLock,
    name: "Coffre-fort documentaire",
    bullets: [
      "KBIS, statuts, RIB, bail, bilans, pacte",
      "Coffre-fort RH (contrats, diplômes, RIB)",
      "Multi-pharmacies, accès par profil",
    ],
    accent: "warning",
  },
];

const accentClasses: Record<
  string,
  { iconBg: string; iconFg: string; ring: string; dot: string; flagBg: string; flagFg: string }
> = {
  brand: {
    iconBg: "bg-brand-50",
    iconFg: "text-brand-700",
    ring: "ring-brand-100",
    dot: "bg-brand-700",
    flagBg: "bg-brand-50",
    flagFg: "text-brand-700",
  },
  success: {
    iconBg: "bg-success/10",
    iconFg: "text-success",
    ring: "ring-success/20",
    dot: "bg-success",
    flagBg: "bg-success/10",
    flagFg: "text-success",
  },
  warning: {
    iconBg: "bg-warning/15",
    iconFg: "text-warning",
    ring: "ring-warning/25",
    dot: "bg-warning",
    flagBg: "bg-warning/15",
    flagFg: "text-warning",
  },
};

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Features() {
  const reducedMotion = useReducedMotion();

  // Per-element entrance helpers — collapse to opacity-only on reduced motion.
  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.45, ease: EASE_OUT_EXPO, delay },
  });

  const cardEntrance = (i: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : {
          duration: 0.5,
          ease: EASE_OUT_EXPO,
          delay: 0.15 + i * 0.05,
        },
  });

  return (
    <section
      id="fonctionnalites"
      className="relative overflow-hidden border-b border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient orbs — multi-layer background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] z-0 h-[520px] w-[520px] rounded-full bg-brand-700/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] z-0 h-[460px] w-[460px] rounded-full bg-brand-500/8 blur-3xl"
      />

      {/* Subtle grid masked at the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.22] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
          >
            <LayoutGrid className="h-3.5 w-3.5" strokeWidth={2.2} />
            Tous les modules
          </motion.span>

          <motion.h2
            {...fadeUp(0.05)}
            className="mt-4 text-balance text-4xl font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-5xl"
          >
            Un seul outil pour piloter{" "}
            <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-900 bg-clip-text text-transparent">
              toute la pharmacie.
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-5 text-pretty text-lg leading-relaxed text-ink-500"
          >
            Du chiffre d&apos;affaires à la masse salariale, des engagements
            financiers aux documents officiels&nbsp;: tout au même endroit.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-4 sm:gap-5 lg:mt-16 lg:grid-cols-3">
          {MODULES.map((module, i) => {
            const accent = accentClasses[module.accent];
            const Icon = module.icon;
            return (
              <motion.div
                key={module.name}
                {...cardEntrance(i)}
                className="group relative flex flex-col rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-700/20 hover:shadow-md hover:shadow-brand-700/5"
              >
                {/* Subtle top sheen on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-700/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accent.iconBg} ${accent.iconFg} ring-1 ${accent.ring} transition-transform duration-200 group-hover:scale-[1.04]`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  {module.flag && (
                    <span
                      className={`inline-flex items-center gap-1 rounded-full ${accent.flagBg} px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${accent.flagFg}`}
                    >
                      {module.flag}
                      Métier
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink-900">
                  {module.name}
                </h3>

                <ul className="mt-3 flex-1 space-y-2 text-sm leading-relaxed text-ink-500">
                  {module.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent.dot}`}
                      />
                      <span className="text-pretty">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Footer link */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-12 flex justify-center"
        >
          <a
            href="#demo"
            className="group inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50/60 px-4 py-2 text-sm font-medium text-brand-700 backdrop-blur-sm transition-all duration-200 hover:-translate-y-px hover:border-brand-700/30 hover:bg-brand-50 hover:shadow-sm hover:shadow-brand-700/10"
          >
            Voir tous les modules en démo
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2.2}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
