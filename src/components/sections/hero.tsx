import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Star, User } from "lucide-react";
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

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white to-muted">
      {/* Grille subtile en fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Colonne texte */}
          <div className="lg:col-span-6 lg:pt-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
              Créé par un pharmacien, pour les pharmaciens.
            </span>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-[56px]">
              Pilotez votre officine{" "}
              <span className="text-brand-700">en temps réel.</span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-500">
              CA mois par mois, masse salariale, stocks, performance des
              promos&nbsp;: importez vos synthèses d'activité et reprenez la
              main sur vos chiffres.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 gap-2 px-6 text-sm",
                )}
              >
                Demander une démo
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </Link>
              <Link
                href="#tarifs"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 px-6 text-sm",
                )}
              >
                Voir les tarifs
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-ink-500">
              <ShieldCheck className="h-4 w-4 text-success" strokeWidth={2.2} />
              Données hébergées en France · RGPD · sans engagement
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <div
                    key={a.initials}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white text-white font-mono tabular-nums text-[10px] font-semibold",
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
                    className="h-3.5 w-3.5 fill-warning text-warning"
                    strokeWidth={2.2}
                  />
                  Note 4,9/5 · 30 avis
                </span>
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                Compatible avec les synthèses d'activité de
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                {LGO_LOGOS.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-medium text-ink-900/70 grayscale hover:text-ink-900"
                  >
                    {name}
                  </span>
                ))}
                <span className="text-xs text-ink-500">+ autres LGO</span>
              </div>
            </div>
          </div>

          {/* Colonne mockup */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-x-6 -top-6 -bottom-6 rounded-3xl bg-brand-700/5 blur-2xl" aria-hidden />
              <DashboardMockup />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-y-4 border-t border-border pt-10 sm:grid-cols-4">
          {HERO_KPIS.map((kpi, i) => (
            <div
              key={kpi.label}
              className={cn(
                "px-4 sm:px-6",
                i !== 0 && "sm:border-l sm:border-border",
              )}
            >
              <div className="font-mono text-2xl font-semibold tabular-nums text-ink-900">
                {kpi.value}
              </div>
              <div className="mt-1 text-xs text-ink-500">{kpi.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <div className="flex items-start gap-2 text-sm text-ink-500 sm:items-center">
            <User
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-700 sm:mt-0"
              strokeWidth={2.2}
            />
            <span>
              <span className="font-medium text-ink-900">
                Conçu par un pharmacien titulaire en exercice
              </span>
              {" — "}à partir de besoins réels rencontrés derrière le comptoir.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
