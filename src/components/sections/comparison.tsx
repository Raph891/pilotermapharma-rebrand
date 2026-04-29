"use client";

import Link from "next/link";
import { ArrowRight, Check, Minus, Sparkles, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CellType = "yes" | "no" | "partial" | "text";

type Cell = { type: CellType; text?: string };

type Row = {
  label: string;
  excel: Cell;
  cabinet: Cell;
  pmp: Cell;
};

const rows: Row[] = [
  {
    label: "Tableau de bord temps reel",
    excel: { type: "no" },
    cabinet: { type: "partial" },
    pmp: { type: "yes" },
  },
  {
    label: "Suivi masse salariale en direct",
    excel: { type: "no" },
    cabinet: { type: "no" },
    pmp: { type: "yes" },
  },
  {
    label: "Module Finances (credits, contrats, prelevements)",
    excel: { type: "partial" },
    cabinet: { type: "partial" },
    pmp: { type: "yes" },
  },
  {
    label: "Coffre-fort documents officiels",
    excel: { type: "no" },
    cabinet: { type: "no" },
    pmp: { type: "yes" },
  },
  {
    label: "Vue multi-pharmacies consolidee",
    excel: { type: "no" },
    cabinet: { type: "partial" },
    pmp: { type: "yes" },
  },
  {
    label: "Pense par et pour titulaires",
    excel: { type: "no" },
    cabinet: { type: "no" },
    pmp: { type: "yes" },
  },
  {
    label: "Mise a jour des chiffres",
    excel: { type: "text", text: "Manuelle" },
    cabinet: { type: "text", text: "A J+30" },
    pmp: { type: "text", text: "Temps reel" },
  },
  {
    label: "Cout mensuel",
    excel: { type: "text", text: "Gratuit" },
    cabinet: { type: "text", text: "300+ EUR" },
    pmp: { type: "text", text: "50-70 EUR" },
  },
];

const COMPETITORS = [
  {
    key: "excel" as const,
    name: "Excel maison",
    caption: "Generique, faible",
  },
  {
    key: "cabinet" as const,
    name: "Cabinet comptable seul",
    caption: "Lent, J+30",
  },
];

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

function CellIcon({
  cell,
  highlight = false,
}: {
  cell: Cell;
  highlight?: boolean;
}) {
  if (cell.type === "yes") {
    return (
      <span
        className={cn(
          "inline-flex h-7 w-7 items-center justify-center rounded-full",
          highlight
            ? "bg-success/15 text-success shadow-[0_0_18px_rgba(16,185,129,0.25)]"
            : "bg-success/10 text-success",
        )}
        aria-label="Inclus"
      >
        <Check className="h-4 w-4" strokeWidth={2.4} />
      </span>
    );
  }
  if (cell.type === "no") {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-ink-500/60"
        aria-label="Non inclus"
      >
        <X className="h-4 w-4" strokeWidth={2.2} />
      </span>
    );
  }
  if (cell.type === "partial") {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-ink-500/70"
        aria-label="Partiel"
      >
        <Minus className="h-4 w-4" strokeWidth={2.4} />
      </span>
    );
  }
  return (
    <span
      className={cn(
        "font-mono tabular-nums text-sm tracking-tight",
        highlight ? "font-semibold text-brand-900" : "text-ink-500",
      )}
    >
      {cell.text}
    </span>
  );
}

function MobileCellLine({
  label,
  cell,
  highlight = false,
}: {
  label: string;
  cell: Cell;
  highlight?: boolean;
}) {
  return (
    <li className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-sm text-ink-900">{label}</span>
      <span className="shrink-0">
        <CellIcon cell={cell} highlight={highlight} />
      </span>
    </li>
  );
}

export function Comparison() {
  const reducedMotion = useReducedMotion();

  // Total "yes" cells in the PMP column → headline coverage stat.
  const pmpYesCount = rows.filter((r) => r.pmp.type === "yes").length;
  const pmpTotalBinary = rows.filter(
    (r) => r.pmp.type === "yes" || r.pmp.type === "no" || r.pmp.type === "partial",
  ).length;
  const coveragePct = pmpTotalBinary
    ? Math.round((pmpYesCount / pmpTotalBinary) * 100)
    : 100;

  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.45, ease: EASE_OUT_EXPO, delay },
  });

  const tableEntrance = reducedMotion
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.15 },
      }
    : {
        initial: { opacity: 0, y: 20, scale: 0.99 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.15 },
      };

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white via-white to-brand-50/30 py-16 sm:py-20 lg:py-24">
      {/* Ambient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-1/2 z-0 h-[520px] w-[520px] translate-x-1/2 rounded-full bg-brand-700/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
            Pourquoi PiloterMaPharma
          </motion.span>

          <motion.h2
            {...fadeUp(0.05)}
            className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl"
          >
            Le seul outil qui combine{" "}
            <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-900 bg-clip-text text-transparent">
              pilotage, RH, finances et coffre-fort.
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-5 text-pretty text-base leading-relaxed text-ink-500 sm:text-lg"
          >
            Excel devient vite illisible, le cabinet comptable arrive trop tard.
            PiloterMaPharma centralise vos chiffres et vos documents au meme
            endroit, en temps reel, pour que vous decidiez vite et bien.
          </motion.p>
        </div>

        {/* Desktop table */}
        <motion.div
          {...tableEntrance}
          className="mt-12 hidden sm:block"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)]">
            {/* Header row */}
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1.15fr] items-stretch border-b border-border bg-muted/40">
              <div className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                Critere
              </div>
              {COMPETITORS.map((c) => (
                <div
                  key={c.key}
                  className="border-l border-border px-4 py-4 text-center"
                >
                  <p className="text-sm font-semibold text-ink-900">
                    {c.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-ink-500">{c.caption}</p>
                </div>
              ))}
              <div className="relative border-l border-border bg-gradient-to-b from-brand-700 to-brand-900 px-4 py-4 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <div className="flex items-center justify-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />
                  <p className="text-sm font-semibold">PiloterMaPharma</p>
                </div>
                <p className="mt-0.5 text-[11px] text-white/75">
                  Tout en un, temps reel
                </p>
              </div>
            </div>

            {/* Body rows */}
            <div role="table" aria-label="Comparaison des solutions">
              {rows.map((row, idx) => {
                const isLast = idx === rows.length - 1;
                return (
                  <motion.div
                    key={row.label}
                    initial={
                      reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={
                      reducedMotion
                        ? { duration: 0.15 }
                        : {
                            duration: 0.35,
                            ease: EASE_OUT_EXPO,
                            delay: 0.2 + idx * 0.04,
                          }
                    }
                    role="row"
                    className={cn(
                      "group grid grid-cols-[1.5fr_1fr_1fr_1.15fr] items-stretch transition-colors",
                      !isLast && "border-b border-border",
                    )}
                  >
                    <div className="flex items-center px-5 py-4 text-sm text-ink-900 transition-colors group-hover:bg-muted/30">
                      {row.label}
                    </div>
                    <div className="flex items-center justify-center border-l border-border px-4 py-4 transition-colors group-hover:bg-muted/30">
                      <CellIcon cell={row.excel} />
                    </div>
                    <div className="flex items-center justify-center border-l border-border px-4 py-4 transition-colors group-hover:bg-muted/30">
                      <CellIcon cell={row.cabinet} />
                    </div>
                    <div className="flex items-center justify-center border-l border-border bg-brand-50/40 px-4 py-4 transition-colors group-hover:bg-brand-50/70">
                      <CellIcon cell={row.pmp} highlight />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Mobile : stacked cards */}
        <motion.div
          {...tableEntrance}
          className="mt-10 space-y-4 sm:hidden"
        >
          {/* PMP card — featured first */}
          <div className="overflow-hidden rounded-2xl border border-brand-700/30 bg-card shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] ring-1 ring-brand-700/10">
            <div className="bg-gradient-to-b from-brand-700 to-brand-900 px-5 py-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" strokeWidth={2.4} />
                <p className="text-sm font-semibold">PiloterMaPharma</p>
              </div>
              <p className="mt-0.5 text-xs text-white/75">
                Tout en un, temps reel
              </p>
            </div>
            <ul className="divide-y divide-border bg-brand-50/30 px-5 py-1">
              {rows.map((row) => (
                <MobileCellLine
                  key={row.label}
                  label={row.label}
                  cell={row.pmp}
                  highlight
                />
              ))}
            </ul>
          </div>

          {/* Competitor cards */}
          {COMPETITORS.map((c) => (
            <div
              key={c.key}
              className="overflow-hidden rounded-2xl border border-border bg-card/80"
            >
              <div className="border-b border-border bg-muted/40 px-5 py-4">
                <p className="text-sm font-semibold text-ink-900">{c.name}</p>
                <p className="mt-0.5 text-xs text-ink-500">{c.caption}</p>
              </div>
              <ul className="divide-y divide-border px-5 py-1">
                {rows.map((row) => (
                  <MobileCellLine
                    key={row.label}
                    label={row.label}
                    cell={row[c.key]}
                  />
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col items-center gap-5 text-center sm:mt-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-medium text-brand-700">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.6)]"
            />
            {coveragePct}% des fonctions critiques couvertes
          </span>

          <p className="max-w-2xl text-pretty text-sm text-ink-500 sm:text-base">
            Resultat&nbsp;: moins d&apos;Excel, moins d&apos;allers-retours avec
            le cabinet, plus de temps pour developper vos pharmacies.
          </p>

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
            Demander une demo
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2.2}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
