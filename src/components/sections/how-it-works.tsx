import { FileSpreadsheet, LayoutDashboard, Sparkles } from "lucide-react";

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
  return (
    <section className="border-b border-border bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
            Comment ça marche
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Opérationnel sans toucher à votre LGO
          </h2>
          <p className="mt-4 text-pretty text-lg text-ink-500">
            Vous importez vos synthèses d'activité et de stock&nbsp;: pas de
            connexion technique, pas d'intervention informatique.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-700 text-white">
                  <step.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="font-mono text-sm font-semibold tabular-nums text-ink-500">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
