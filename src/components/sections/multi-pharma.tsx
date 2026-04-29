import {
  ArrowUpRight,
  BarChart3,
  Building2,
  FileText,
  Layers,
  Users,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Layers,
    title: "Vue consolidée du groupe",
    description:
      "Agrégez CA, marge et masse salariale de toutes vos officines en une seule vue temps réel.",
  },
  {
    icon: BarChart3,
    title: "Comparaison entre pharmacies",
    description:
      "Identifiez la meilleure performeuse, repérez les écarts de marge, alignez les pratiques.",
  },
  {
    icon: Users,
    title: "Accès par profil",
    description:
      "Collaborateurs, associés, experts-comptables : chacun voit ce dont il a besoin, rien de plus.",
  },
  {
    icon: FileText,
    title: "Coffre-fort par officine",
    description:
      "Chaque pharmacie dispose de son coffre-fort documentaire (KBIS, statuts, baux, bilans, contrats).",
  },
];

const PHARMACIES = [
  {
    name: "Pharmacie du Parc",
    city: "Vincennes",
    ca: "312 480",
    marge: "24,1",
    ms: "12,9",
    accent: "text-ink-900",
  },
  {
    name: "Pharmacie de l'Étoile",
    city: "Levallois",
    ca: "248 720",
    marge: "22,8",
    ms: "13,4",
    accent: "text-ink-900",
  },
  {
    name: "Pharmacie du Marché",
    city: "Courbevoie",
    ca: "408 210",
    marge: "25,6",
    ms: "11,8",
    accent: "text-ink-900",
  },
];

export function MultiPharma() {
  return (
    <section
      id="multi-pharmacies"
      className="border-b border-border bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Texte — 5 cols */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
              <Building2 className="h-3.5 w-3.5" strokeWidth={2.4} />
              Multi-officines & groupements
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Pensé pour les titulaires qui pilotent plusieurs pharmacies.
            </h2>
            <p className="mt-4 text-pretty text-lg text-ink-500">
              SPFPL, groupement, holding&nbsp;: pilotez l'ensemble de votre
              groupe sans jongler entre dix tableurs et trois logiciels
              d'officine.
            </p>

            <ul className="mt-8 space-y-5">
              {BENEFITS.map((benefit) => (
                <li key={benefit.title} className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                    <benefit.icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-500">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#demo"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline"
              >
                Demander une démo groupe
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
            </div>
          </div>

          {/* Visuel — 7 cols */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
              {/* En-tête KPI consolidé */}
              <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                    Total groupe ce mois
                  </p>
                  <p className="mt-2 font-mono text-3xl font-semibold tabular-nums tracking-tight text-ink-900">
                    969 410 <span className="text-ink-500">€</span>
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">
                    <ArrowUpRight className="h-3 w-3" strokeWidth={2.4} />
                    <span className="font-mono tabular-nums">+4,2 %</span>
                  </span>
                  <span className="text-[11px] text-ink-500">vs mois N-1</span>
                </div>
              </div>

              {/* Tableau / cards comparatif */}
              <div className="mt-5">
                {/* En-tête colonnes (caché mobile) */}
                <div className="hidden grid-cols-12 gap-3 px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-ink-500 sm:grid">
                  <span className="col-span-5">Officine</span>
                  <span className="col-span-3 text-right">CA</span>
                  <span className="col-span-2 text-right">Marge</span>
                  <span className="col-span-2 text-right">MS</span>
                </div>

                <ul className="space-y-2">
                  {PHARMACIES.map((p) => (
                    <li
                      key={p.name}
                      className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-muted/40 px-3 py-3 sm:grid-cols-12 sm:items-center sm:py-3.5"
                    >
                      <div className="col-span-2 flex items-center gap-3 sm:col-span-5">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-700 text-[11px] font-semibold text-white">
                          {p.name.split(" ").pop()?.charAt(0).toUpperCase()}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink-900">
                            {p.name}
                          </p>
                          <p className="text-[11px] text-ink-500">{p.city}</p>
                        </div>
                      </div>

                      <div className="sm:col-span-3 sm:text-right">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500 sm:hidden">
                          CA
                        </p>
                        <p
                          className={`font-mono text-sm font-semibold tabular-nums ${p.accent}`}
                        >
                          {p.ca} <span className="text-ink-500">€</span>
                        </p>
                      </div>

                      <div className="sm:col-span-2 sm:text-right">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500 sm:hidden">
                          Marge
                        </p>
                        <p className="font-mono text-sm font-semibold tabular-nums text-ink-900">
                          {p.marge}
                          <span className="text-ink-500"> %</span>
                        </p>
                      </div>

                      <div className="sm:col-span-2 sm:text-right">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500 sm:hidden">
                          MS
                        </p>
                        <p className="font-mono text-sm font-semibold tabular-nums text-ink-900">
                          {p.ms}
                          <span className="text-ink-500"> %</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer carte */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
                <p className="text-[11px] text-ink-500">
                  Données démo — cumul du mois en cours
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-brand-700">
                  <FileText className="h-3.5 w-3.5" strokeWidth={2.2} />
                  Vue consolidée multi-pharmacies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
