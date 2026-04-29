"use client";

import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

const AVATARS = [
  { initials: "JM", bg: "bg-brand-700" },
  { initials: "CL", bg: "bg-brand-600" },
  { initials: "SD", bg: "bg-brand-500" },
  { initials: "AR", bg: "bg-brand-400" },
];

export function FinalCta() {
  const reducedMotion = useReducedMotion();

  // Per-element entrance — collapse to opacity-only on reduced motion.
  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.5, ease: EASE_OUT_EXPO, delay },
  });

  const cardEntrance = reducedMotion
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.15 },
      }
    : {
        initial: { opacity: 0, y: 24, scale: 0.985 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, ease: EASE_OUT_EXPO },
      };

  return (
    <section
      id="demo"
      className="relative overflow-hidden border-b border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...cardEntrance}
          className={cn(
            "relative mx-auto max-w-5xl overflow-hidden rounded-3xl",
            "bg-gradient-to-br from-brand-700 via-brand-900 to-[#06122a]",
            "ring-1 ring-white/10",
            "shadow-[0_40px_100px_-30px_rgba(10,31,68,0.45)]",
            "px-8 py-14 text-center sm:px-12 sm:py-20",
          )}
        >
          {/* Ambient orb — top right */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-3xl"
          />
          {/* Ambient orb — bottom left, subtle */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-brand-700/30 blur-3xl"
          />

          {/* Subtle grid pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.6] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Top inner highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          <div className="relative">
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
              Démo personnalisée
            </motion.span>

            <motion.h2
              {...fadeUp(0.05)}
              className="mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Prêt à reprendre la main sur{" "}
              <span className="bg-gradient-to-r from-white via-brand-100 to-white bg-clip-text text-transparent">
                votre officine&nbsp;?
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.1)}
              className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70"
            >
              30 minutes de démo personnalisée avec un membre de l&apos;équipe.
              <br className="hidden sm:block" />
              Sans engagement, résiliation en un clic.
            </motion.p>

            <motion.div
              {...fadeUp(0.15)}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link
                href="https://app.pilotermapharma.fr/demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-11 gap-2 px-6 text-sm",
                  "bg-white text-brand-900 hover:bg-white",
                  "shadow-xl hover:shadow-2xl hover:-translate-y-px",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]",
                  "transition-all duration-200",
                )}
              >
                Réserver ma démo
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.2}
                />
              </Link>
              <Link
                href="tel:0659210350"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 gap-2 px-6 text-sm",
                  "border border-white/20 bg-white/5 text-white hover:text-white",
                  "backdrop-blur-sm hover:bg-white/10 hover:border-white/30",
                  "transition-all duration-200",
                )}
              >
                <Phone className="h-4 w-4" strokeWidth={2.2} />
                06 59 21 03 50
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.2)}
              className="mt-6 text-xs text-white/50"
            >
              Lundi - Vendredi · 9h - 20h
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              {...fadeUp(0.25)}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <div
                    key={a.initials}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white/30 text-white font-mono tabular-nums text-[10px] font-semibold transition-transform duration-200 hover:-translate-y-0.5",
                      a.bg,
                    )}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm font-medium text-white">
                  Plus de 30 titulaires nous font confiance
                </span>
                <span className="flex items-center gap-1 text-xs text-white/60">
                  <Star
                    className="h-3.5 w-3.5 fill-warning text-warning drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]"
                    strokeWidth={2.2}
                  />
                  Note 4,9/5 · 30 avis
                </span>
              </div>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              {...fadeUp(0.3)}
              className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60"
            >
              <ShieldCheck
                className="h-4 w-4 text-success"
                strokeWidth={2.2}
              />
              Données hébergées en France · RGPD · sans engagement
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
