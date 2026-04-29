"use client";

import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Essentiel",
    price: "49,99",
    suffix: "€ / mois",
    description: "Pour démarrer le pilotage de votre officine.",
    cta: "Commencer",
    href: "#demo",
    featured: false,
    features: [
      "Tableau de bord CA mois par mois",
      "Comparaison N-1 et marge brute",
      "Import des synthèses d'1 LGO",
      "Support par e-mail",
    ],
  },
  {
    name: "Automatisation",
    price: "69,99",
    suffix: "€ / mois",
    description: "Le plan le plus choisi par les titulaires.",
    cta: "Choisir Automatisation",
    href: "#demo",
    featured: true,
    badge: "Le plus populaire",
    features: [
      "Tout le plan Essentiel",
      "Suivi masses salariales en temps réel",
      "Alertes stocks & promos automatisées",
      "Coffre-fort documentaire",
      "Module Finances (crédits, contrats, prélèvements)",
      "Support prioritaire 6j / 7",
    ],
  },
  {
    name: "+ Planning",
    price: "10",
    suffix: "€ / mois en plus",
    description: "Module additionnel à coupler avec un autre plan.",
    cta: "Ajouter le module",
    href: "#demo",
    featured: false,
    features: [
      "Planning équipe optimisé",
      "Coût horaire par poste",
      "« Est-ce que je peux embaucher ? » — simulateur",
    ],
  },
];

const TRUST_POINTS = [
  "Sans engagement, résiliation en un clic",
  "Données hébergées en France",
  "Conforme RGPD",
];

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Pricing() {
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.45, ease: EASE_OUT_EXPO, delay },
  });

  const cardEntrance = (i: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.1 + i * 0.08 },
  });

  return (
    <section
      id="tarifs"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-white to-brand-50/40 py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-700/10 blur-3xl"
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.22] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
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
            Tarifs
          </motion.span>

          <motion.h2
            {...fadeUp(0.05)}
            className="mt-4 text-balance text-3xl font-medium tracking-tight text-ink-900 sm:text-5xl"
          >
            Une{" "}
            <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-900 bg-clip-text text-transparent">
              tarification simple
            </span>
            , sans engagement
          </motion.h2>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-4 text-pretty text-lg text-ink-500"
          >
            Choisissez le plan qui correspond à votre officine. Vous pouvez
            arrêter à tout moment, sans frais.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...cardEntrance(i)}
              className={cn(
                "group relative flex flex-col rounded-2xl p-7 transition-shadow duration-300",
                plan.featured
                  ? cn(
                      "bg-gradient-to-b from-white via-white to-brand-50/50",
                      "ring-2 ring-brand-700",
                      "shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25),0_10px_30px_-15px_rgba(15,23,42,0.15)]",
                      "lg:-translate-y-2",
                    )
                  : "border border-border bg-card shadow-sm hover:shadow-md",
              )}
            >
              {plan.featured && plan.badge && (
                <span
                  className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1",
                    "bg-gradient-to-b from-brand-700 to-brand-900 text-white",
                    "text-[11px] font-semibold uppercase tracking-wider",
                    "shadow-lg shadow-brand-900/25",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]",
                  )}
                >
                  {plan.badge}
                </span>
              )}

              {/* Plan header */}
              <div>
                <div
                  className={cn(
                    "text-sm font-semibold tracking-tight",
                    plan.featured ? "text-brand-700" : "text-ink-900",
                  )}
                >
                  {plan.name}
                </div>
                <p className="mt-1.5 text-sm text-ink-500">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-mono text-5xl font-semibold tabular-nums tracking-tight text-ink-900 sm:text-6xl">
                  {plan.price}
                </span>
                <span className="text-base text-ink-500">{plan.suffix}</span>
              </div>

              {/* Divider */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Features */}
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 rounded-md py-0.5 transition-colors"
                  >
                    <span
                      className={cn(
                        "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full",
                        plan.featured
                          ? "bg-success/15"
                          : "bg-success/10",
                      )}
                    >
                      <Check
                        className="h-3 w-3 text-success"
                        strokeWidth={3}
                      />
                    </span>
                    <span className="text-ink-700">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: plan.featured ? "default" : "outline",
                  }),
                  "mt-7 h-11 gap-2 px-5 text-sm transition-all duration-200",
                  plan.featured
                    ? cn(
                        "group/cta bg-gradient-to-b from-brand-700 to-brand-900 text-white",
                        "shadow-lg shadow-brand-900/25 hover:shadow-xl hover:shadow-brand-900/30",
                        "shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
                        "hover:-translate-y-px",
                      )
                    : "border-border hover:border-brand-700/30 hover:bg-muted/60 hover:-translate-y-px",
                )}
              >
                {plan.cta}
                {plan.featured && (
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5"
                    strokeWidth={2.2}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full border border-border bg-card/80 backdrop-blur-sm px-5 py-2.5">
            {TRUST_POINTS.map((point, i) => (
              <span
                key={point}
                className="flex items-center gap-2 text-xs font-medium text-ink-700"
              >
                <ShieldCheck
                  className="h-3.5 w-3.5 shrink-0 text-success"
                  strokeWidth={2.4}
                />
                {point}
                {i !== TRUST_POINTS.length - 1 && (
                  <span
                    aria-hidden
                    className="ml-4 hidden h-1 w-1 rounded-full bg-border sm:inline-block"
                  />
                )}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-5 text-center text-xs text-ink-500"
        >
          Tarifs HT. Mise en route en moins d&apos;une journée.
        </motion.p>
      </div>
    </section>
  );
}
