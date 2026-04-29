import {
  ArrowRight,
  Banknote,
  Boxes,
  CalendarRange,
  FolderLock,
  Gem,
  LineChart,
  Tag,
  Trophy,
  Users,
} from "lucide-react";

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
      "Vision \"Total mensuel\" consolidée",
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

const accentClasses: Record<string, { bg: string; fg: string }> = {
  brand: { bg: "bg-brand-50", fg: "text-brand-700" },
  success: { bg: "bg-success/10", fg: "text-success" },
  warning: { bg: "bg-warning/15", fg: "text-warning" },
};

export function Features() {
  return (
    <section
      id="fonctionnalites"
      className="border-b border-border bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
            Tous les modules
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Un seul outil pour piloter toute la pharmacie.
          </h2>
          <p className="mt-4 text-pretty text-lg text-ink-500">
            Du chiffre d'affaires à la masse salariale, des engagements
            financiers aux documents officiels&nbsp;: tout au même endroit.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:gap-5 lg:grid-cols-3 lg:mt-16">
          {MODULES.map((module) => {
            const accent = accentClasses[module.accent];
            return (
              <div
                key={module.name}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand-700/40 hover:shadow-lg hover:shadow-brand-700/5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-lg ${accent.bg} ${accent.fg}`}
                  >
                    <module.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  {module.flag && (
                    <span
                      className={`inline-flex items-center gap-1 rounded-full ${accent.bg} px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${accent.fg}`}
                    >
                      {module.flag}
                      Métier
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink-900">
                  {module.name}
                </h3>
                <ul className="mt-3 flex-1 space-y-2 text-sm text-ink-500">
                  {module.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        aria-hidden
                        className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                          module.accent === "brand"
                            ? "bg-brand-700"
                            : module.accent === "success"
                              ? "bg-success"
                              : "bg-warning"
                        }`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline"
          >
            Voir tous les modules en démo
            <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
