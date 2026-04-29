"use client";

import { Quote, Star, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const REVIEWS = [
  {
    name: "Raphaël Oziel",
    role: "Pharmacien titulaire",
    location: "Achères (78)",
    initials: "RO",
    quote:
      "Avant, je faisais mes points mensuels sur Excel le dimanche. Maintenant, j'ouvre PiloterMaPharma à 8h, j'ai mes chiffres en 2 minutes et je peux passer la journée sur le comptoir. La masse salariale en temps réel a clairement changé ma façon de gérer les plannings.",
    metric: "−4 h / semaine sur le pilotage",
    featured: true,
  },
  {
    name: "Jennifer Allali",
    role: "Pharmacienne titulaire",
    location: "Rosny-sous-Bois (93)",
    initials: "JA",
    quote:
      "Le suivi des promos m'a fait gagner concrètement de la marge. Je vois enfin précisément ce qui marche et ce qui cannibalise mes ventes classiques. Et le branchement à mon LGO s'est fait sans toucher à rien dans l'officine.",
    metric: "+6,2 % de marge brute en 4 mois",
    featured: false,
  },
];

const TRUST_STATS = [
  { value: "4,9", suffix: "/5", label: "Note moyenne" },
  { value: "30", suffix: "+", label: "Avis vérifiés" },
  { value: "98", suffix: "%", label: "Recommandent l'outil" },
];

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Testimonials() {
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.5, ease: EASE_OUT_EXPO, delay },
  });

  const cardEntrance = (i: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.15 + i * 0.1 },
  });

  return (
    <section
      id="avis"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-white to-brand-50/30 py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 z-0 h-[500px] w-[500px] rounded-full bg-brand-700/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-32 z-0 h-[400px] w-[400px] rounded-full bg-brand-100/40 blur-3xl"
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.2] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
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
            <Star
              className="h-3.5 w-3.5 fill-warning text-warning drop-shadow-[0_0_4px_rgba(245,158,11,0.3)]"
              strokeWidth={2.2}
            />
            Ils nous font confiance
          </motion.span>

          <motion.h2
            {...fadeUp(0.05)}
            className="mt-5 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl"
          >
            Des titulaires qui pilotent leur officine{" "}
            <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
              autrement.
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-5 text-pretty text-base leading-relaxed text-ink-500 sm:text-lg"
          >
            Pas de témoignages mis en scène. Des pharmaciens qui utilisent
            l&apos;outil tous les jours, et qui mesurent les résultats.
          </motion.p>
        </div>

        {/* Trust stats strip */}
        <motion.div
          {...fadeUp(0.15)}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-border bg-card/60 px-6 py-4 backdrop-blur-sm shadow-sm"
        >
          {/* Stars block */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-warning text-warning drop-shadow-[0_0_4px_rgba(245,158,11,0.3)]"
                  strokeWidth={2.2}
                />
              ))}
            </div>
            <span className="font-mono text-sm font-semibold tabular-nums text-ink-900">
              4,9
            </span>
            <span className="text-xs text-ink-500">sur 5</span>
          </div>

          <span aria-hidden className="hidden h-4 w-px bg-border sm:block" />

          {TRUST_STATS.slice(1).map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold tabular-nums text-ink-900">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="text-xs text-ink-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Reviews grid */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-7">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              {...cardEntrance(i)}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-border bg-card/70 p-7 backdrop-blur-sm shadow-sm transition-all duration-200",
                "hover:shadow-md hover:-translate-y-0.5 hover:border-brand-700/20",
                r.featured &&
                  "ring-1 ring-brand-700/15 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.18)]",
              )}
            >
              {/* Decorative quote mark */}
              <Quote
                aria-hidden
                className="absolute right-6 top-6 h-6 w-6 text-brand-700/15"
                strokeWidth={2.2}
              />

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-warning text-warning drop-shadow-[0_0_4px_rgba(245,158,11,0.3)]"
                    strokeWidth={2.2}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-ink-900">
                « {r.quote} »
              </blockquote>

              {/* Metric pill */}
              <div className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-3 py-1 text-xs font-medium text-success">
                <TrendingUp className="h-3 w-3" strokeWidth={2.4} />
                <span className="font-mono tabular-nums">{r.metric}</span>
              </div>

              {/* Author */}
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-full font-mono text-sm font-semibold tabular-nums text-white ring-2 ring-white shadow-sm",
                    r.featured ? "bg-brand-700" : "bg-brand-600",
                  )}
                >
                  {r.initials}
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-ink-900">
                    {r.name}
                  </div>
                  <div className="text-xs text-ink-500">
                    {r.role} · {r.location}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur-sm px-4 py-2 text-xs text-ink-500">
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-success"
            />
            Avis vérifiés — pharmaciens titulaires en exercice
          </div>
        </motion.div>
      </div>
    </section>
  );
}
