"use client";

import {
  ArrowRight,
  FileSpreadsheet,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

const STEPS = [
  {
    icon: FileSpreadsheet,
    title: "Importez vos synthèses",
    description:
      "Vous déposez les exports de synthèse d'activité et de stock issus de votre LGO (Winpharma, LGPI, Pharmaland, Smart RX). Pas de connexion à installer, rien à modifier au comptoir.",
  },
  {
    icon: Sparkles,
    title: "Centralisation automatique",
    description:
      "Les fichiers sont parsés, consolidés et historisés. Vos chiffres N et N-1 sont prêts à être comparés, mois par mois, par rayon et par pharmacie.",
  },
  {
    icon: LayoutDashboard,
    title: "Pilotez en 5 minutes par jour",
    description:
      "Tableaux de bord prêts à l'emploi, suivi de la masse salariale, alertes stocks et performance des promotions. Vous prenez les décisions, l'outil fait le travail de fond.",
  },
];

export function HowItWorks() {
  const reducedMotion = useReducedMotion();

  // Per-element entrance helper — collapses to opacity-only on reduced motion.
  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.45, ease: EASE_OUT_EXPO, delay },
  });

  // Per-step staggered entrance — slightly larger offset for the cards.
  const stepEntrance = (i: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.1 + i * 0.1 },
  });

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-white to-brand-50/30 py-16 sm:py-20 lg:py-24">
      {/* Ambient orbs — discreet multi-layer background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 z-0 h-[480px] w-[480px] rounded-full bg-brand-700/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 z-0 h-[420px] w-[420px] rounded-full bg-brand-500/5 blur-3xl"
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.22] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
            Comment ça marche
          </motion.span>

          <motion.h2
            {...fadeUp(0.05)}
            className="mt-4 text-balance text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl lg:text-[44px] lg:leading-[1.08]"
          >
            Opérationnel sans toucher à votre{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
              LGO
            </span>
            .
          </motion.h2>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-4 text-pretty text-lg leading-relaxed text-ink-500"
          >
            Vous importez vos synthèses d&apos;activité et de stock&nbsp;: pas de
            connexion technique, pas d&apos;intervention informatique.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 lg:mt-16">
          {/* Desktop dashed connector running behind cards */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[88px] hidden lg:block"
          >
            <div className="mx-auto max-w-5xl border-t border-dashed border-brand-200" />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === STEPS.length - 1;
              return (
                <div key={step.title} className="relative">
                  <motion.div
                    {...stepEntrance(idx)}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-200"
                  >
                    {/* Background numeral */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-2 -top-3 select-none font-mono text-5xl font-semibold tabular-nums tracking-tight text-brand-700/[0.08] sm:text-6xl"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Icon container */}
                    <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>

                    {/* Step label */}
                    <div className="relative mt-4 flex items-center gap-2">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] tabular-nums text-brand-700">
                        Étape {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden
                        className="h-px flex-1 bg-gradient-to-r from-brand-100 to-transparent"
                      />
                    </div>

                    <h3 className="relative mt-2 text-base font-semibold tracking-tight text-ink-900">
                      {step.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-ink-500">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Inter-card arrow — desktop only, sits over the dashed line */}
                  {!isLast && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-4 top-[76px] hidden h-8 w-8 place-items-center rounded-full border border-brand-100 bg-white shadow-sm lg:grid"
                    >
                      <ArrowRight
                        className="h-3.5 w-3.5 text-brand-700/60"
                        strokeWidth={2.2}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
