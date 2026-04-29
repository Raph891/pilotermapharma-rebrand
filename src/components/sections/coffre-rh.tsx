import {
  ChevronDown,
  CreditCard,
  FilePlus,
  FileText,
  FolderLock,
  GraduationCap,
  IdCard,
  Lock,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";

const BULLETS = [
  {
    icon: FolderLock,
    text: "5 catégories par employé : Contrat de travail, Diplôme, Carte d'identité, RIB, Autre.",
  },
  {
    icon: Users,
    text: "Vue par employé : tous ses documents en 1 clic, plus de chasse aux PDF dans les sous-dossiers Drive.",
  },
  {
    icon: ShieldCheck,
    text: "Accès par profil : titulaire, adjoint, RH externe — chacun voit ce qu'il doit voir.",
  },
];

const CATEGORIES = [
  { icon: FileText, label: "Contrat" },
  { icon: GraduationCap, label: "Diplôme" },
  { icon: IdCard, label: "ID" },
  { icon: CreditCard, label: "RIB" },
  { icon: FilePlus, label: "Autre" },
];

const EMPLOYEES = [
  {
    initials: "ML",
    name: "Marie L.",
    role: "Préparatrice",
    counts: [1, 2, 1, 1, 3],
  },
  {
    initials: "JD",
    name: "Julie D.",
    role: "Adjoint",
    counts: [1, 3, 1, 1, 0],
  },
  {
    initials: "TR",
    name: "Thomas R.",
    role: "Apprentie BP",
    counts: [1, 1, 1, 1, 2],
  },
];

export function CoffreRh() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Texte */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/20 bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
              <FolderLock className="h-3.5 w-3.5" strokeWidth={2.2} />
              Coffre-fort RH
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Tous les documents de l'équipe, sécurisés et toujours à portée.
            </h2>
            <p className="mt-4 text-pretty text-lg text-ink-500">
              Plus besoin de fouiller dans 5 dossiers Drive pour retrouver le
              contrat de Marie ou le diplôme de Julie. Le coffre-fort RH
              centralise, par employé, tous les documents officiels — accessibles
              en un clic, sans chasse au PDF.
            </p>

            <ul className="mt-7 space-y-3.5 text-sm text-ink-900">
              {BULLETS.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-warning/10 text-warning">
                    <b.icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-1.5 text-xs text-ink-500">
              <Lock className="h-3.5 w-3.5" strokeWidth={2.2} />
              Conforme RGPD · chiffrement au repos
            </div>
          </div>

          {/* Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card shadow-sm">
              {/* Header card */}
              <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-warning/15 text-warning">
                    <FolderLock className="h-4.5 w-4.5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-ink-900">
                        Coffre-fort RH
                      </span>
                      <span className="rounded-full bg-warning/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-warning">
                        RH
                      </span>
                    </div>
                    <div className="text-[11px] text-ink-500">
                      Documents officiels par employé
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-ink-900 hover:bg-muted"
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={2.4} />
                  Ajouter
                </button>
              </div>

              {/* Sous-header : sélecteurs */}
              <div className="flex flex-wrap items-center gap-2 border-b border-border bg-muted/40 px-5 py-3">
                <Pill active>Pharmacie du Parc</Pill>
                <Pill>Tous les employés</Pill>
              </div>

              {/* Liste employés */}
              <ul className="divide-y divide-border">
                {EMPLOYEES.map((emp) => (
                  <li
                    key={emp.name}
                    className="flex items-center gap-4 px-5 py-4"
                  >
                    {/* Avatar */}
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-700 text-xs font-semibold text-white">
                      {emp.initials}
                    </span>

                    {/* Identité */}
                    <div className="min-w-0 w-32 shrink-0">
                      <div className="truncate text-sm font-semibold text-ink-900">
                        {emp.name}
                      </div>
                      <div className="truncate text-[11px] text-ink-500">
                        {emp.role}
                      </div>
                    </div>

                    {/* Catégories */}
                    <div className="flex flex-1 items-center gap-1.5">
                      {CATEGORIES.map((cat, idx) => {
                        const count = emp.counts[idx];
                        const empty = count === 0;
                        return (
                          <div
                            key={cat.label}
                            className={`flex flex-1 items-center justify-between gap-1 rounded-md border px-2 py-1.5 ${
                              empty
                                ? "border-dashed border-border bg-muted/40 text-ink-500"
                                : "border-border bg-muted/40 text-ink-900"
                            }`}
                            title={cat.label}
                          >
                            <cat.icon
                              className={`h-3.5 w-3.5 shrink-0 ${
                                empty ? "text-ink-500" : "text-brand-700"
                              }`}
                              strokeWidth={2.2}
                            />
                            <span className="font-mono text-[11px] font-semibold tabular-nums">
                              {count}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Voir */}
                    <button
                      type="button"
                      className="ml-1 shrink-0 rounded-md px-2.5 py-1 text-xs font-medium text-brand-700 hover:bg-brand-50"
                    >
                      Voir
                    </button>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-ink-500">
                <span>
                  <span className="font-mono tabular-nums text-ink-900">12</span>{" "}
                  employés ·{" "}
                  <span className="font-mono tabular-nums text-ink-900">47</span>{" "}
                  documents archivés
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck
                    className="h-3.5 w-3.5 text-success"
                    strokeWidth={2.4}
                  />
                  Chiffré au repos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
        active
          ? "border border-border bg-card text-ink-900"
          : "border border-transparent bg-muted text-ink-500 hover:text-ink-900"
      }`}
    >
      {children}
      <ChevronDown className="h-3 w-3" strokeWidth={2.4} />
    </button>
  );
}
