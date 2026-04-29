"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Star, User } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { cn } from "@/lib/utils";

const LGO_LOGOS = ["Winpharma", "LGPI", "Pharmaland", "Smart RX"];

const AVATARS = [
  { initials: "JM", bg: "bg-brand-700" },
  { initials: "CL", bg: "bg-brand-600" },
  { initials: "SD", bg: "bg-brand-500" },
  { initials: "AR", bg: "bg-brand-400" },
];

const HERO_KPIS = [
  { value: "30+", label: "Pharmacies équipées" },
  { value: "+8%", label: "Marge brute moyenne gagnée" },
  { value: "4 h", label: "Économisées chaque semaine" },
  { value: "<1 j", label: "Pour être opérationnel" },
];

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Hero() {
  const reducedMotion = useReducedMotion();

  // Build per-element entrance helpers — collapse to opacity-only on reduced motion.
  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.45, ease: EASE_OUT_EXPO, delay },
  });

  const mockupEntrance = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.15 },
      }
    : {
        initial: { opacity: 0, y: 24, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.1 },
      };

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-white to-brand-50/40">
      {/* Ambient orbs — multi-layer background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 z-0 h-[600px] w-[600px] rounded-full bg-brand-700/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 z-0 h-[400px] w-[400px] rounded-full bg-warning/5 blur-3xl"
      />

      {/* Grille subtile en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Colonne texte */}
          <div className="lg:col-span-6 lg:pt-6">
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
            >
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
              Créé par un pharmacien, pour les pharmaciens.
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-[56px]"
            >
              Pilotez votre officine{" "}
              <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-900 bg-clip-text text-transparent">
                en temps réel.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-500"
            >
              CA mois par mois, masse salariale, stocks, performance des
              promos&nbsp;: importez vos synthèses d'activité et reprenez la
              main sur vos chiffres.
            </motion.p>

            <motion.div
              {...fadeUp(0.15)}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-11 gap-2 px-6 text-sm",
                  "bg-gradient-to-b from-brand-700 to-brand-900 text-white",
                  "shadow-lg shadow-brand-900/25 hover:shadow-xl hover:shadow-brand-900/30",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
                  "transition-all duration-200 hover:-translate-y-px",
                )}
              >
                Demander une démo
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.2}
                />
              </Link>
              <Link
                href="#tarifs"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 px-6 text-sm",
                  "transition-colors hover:bg-muted/60 hover:border-brand-700/30",
                )}
              >
                Voir les tarifs
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.2)}
              className="mt-6 flex items-center gap-2 text-xs text-ink-500"
            >
              <ShieldCheck className="h-4 w-4 text-success" strokeWidth={2.2} />
              Données hébergées en France · RGPD · sans engagement
            </motion.div>

            <motion.div
              {...fadeUp(0.25)}
              className="mt-6 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <div
                    key={a.initials}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white text-white font-mono tabular-nums text-[10px] font-semibold transition-transform duration-200 hover:-translate-y-0.5",
                      a.bg,
                    )}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-ink-900">
                  Plus de 30 titulaires nous font confiance
                </span>
                <span className="flex items-center gap-1 text-xs text-ink-500">
                  <Star
                    className="h-3.5 w-3.5 fill-warning text-warning drop-shadow-[0_0_4px_rgba(245,158,11,0.3)]"
                    strokeWidth={2.2}
                  />
                  Note 4,9/5 · 30 avis
                </span>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.3)}
              className="mt-10 border-t border-border pt-6"
            >
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                Compatible avec les synthèses d'activité de
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-7 gap-y-2">
                {LGO_LOGOS.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-medium text-ink-900/70 grayscale transition-all duration-200 hover:translate-y-[-1px] hover:text-ink-900"
                  >
                    {name}
                  </span>
                ))}
                <span className="text-xs text-ink-500">+ autres LGO</span>
              </div>
            </motion.div>
          </div>

          {/* Colonne mockup */}
          <div className="lg:col-span-6">
            <motion.div {...mockupEntrance} className="relative">
              {/* Multi-layer ambient halo */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-700/15 via-transparent to-brand-900/10 blur-3xl"
              />
              {/* Premium ring + layered shadow chrome */}
              <div className="relative rounded-3xl ring-1 ring-brand-700/10 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25),0_10px_30px_-15px_rgba(15,23,42,0.15)]">
                <DashboardMockup />
              </div>
            </motion.div>
          </div>
        </div>

        {/* KPI strip — premium card chrome */}
        <div className="mt-12 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-sm">
          <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-4">
            {HERO_KPIS.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reducedMotion
                    ? { duration: 0.15 }
                    : {
                        duration: 0.4,
                        ease: EASE_OUT_EXPO,
                        delay: 0.45 + i * 0.06,
                      }
                }
                className={cn(
                  "px-4 py-5 sm:px-6 transition-colors hover:bg-muted/40",
                  i !== 0 && "sm:border-l sm:border-border",
                  i === 0 && "rounded-l-2xl",
                  i === HERO_KPIS.length - 1 && "rounded-r-2xl",
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-[3px] w-[3px] shrink-0 rounded-full bg-brand-700"
                  />
                  <div className="font-mono text-3xl font-semibold tabular-nums tracking-tight text-ink-900">
                    {kpi.value}
                  </div>
                </div>
                <div className="mt-1 text-xs text-ink-500">{kpi.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder strip — pill */}
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reducedMotion
              ? { duration: 0.15 }
              : { duration: 0.45, ease: EASE_OUT_EXPO, delay: 0.7 }
          }
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur-sm px-4 py-2 text-sm">
            <User
              className="h-4 w-4 shrink-0 text-brand-700"
              strokeWidth={2.2}
            />
            <span className="text-ink-500">
              <span className="font-medium text-ink-900">
                Conçu par un pharmacien titulaire en exercice
              </span>
              {" — "}à partir de besoins réels rencontrés derrière le comptoir.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
