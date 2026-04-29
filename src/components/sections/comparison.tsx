import { Check, X, HelpCircle, Sparkles } from "lucide-react";

type CellType = "yes" | "no" | "partial" | "text";

type Row = {
  label: string;
  excel: { type: CellType; text?: string };
  cabinet: { type: CellType; text?: string };
  pmp: { type: CellType; text?: string };
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

function Cell({
  cell,
  highlight = false,
}: {
  cell: { type: CellType; text?: string };
  highlight?: boolean;
}) {
  if (cell.type === "yes") {
    return (
      <Check
        className={`h-5 w-5 ${highlight ? "text-warning" : "text-success"}`}
        aria-label="Inclus"
      />
    );
  }
  if (cell.type === "no") {
    return <X className="h-5 w-5 text-rose-300/60" aria-label="Non inclus" />;
  }
  if (cell.type === "partial") {
    return (
      <HelpCircle
        className="h-5 w-5 text-white/40"
        aria-label="Partiel"
      />
    );
  }
  return (
    <span
      className={`font-mono tabular-nums text-sm ${
        highlight ? "text-white" : "text-white/70"
      }`}
    >
      {cell.text}
    </span>
  );
}

export function Comparison() {
  return (
    <section className="bg-brand-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-warning">
            Pourquoi PiloterMaPharma
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Le seul outil qui combine pilotage, RH, finances et coffre-fort.
          </h2>
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            Excel devient vite illisible, le cabinet comptable arrive trop tard.
            PiloterMaPharma centralise vos chiffres et vos documents au meme
            endroit, en temps reel, pour que vous decidiez vite et bien.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto sm:mt-16">
          <div className="min-w-[720px]">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-3">
              <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/50">
                Critere
              </div>
              <div className="rounded-t-xl border border-white/10 border-b-0 bg-white/5 px-4 py-3 text-center">
                <p className="text-sm font-semibold text-white">Excel maison</p>
                <p className="mt-1 text-xs text-white/50">Generique, faible</p>
              </div>
              <div className="rounded-t-xl border border-white/10 border-b-0 bg-white/5 px-4 py-3 text-center">
                <p className="text-sm font-semibold text-white">
                  Cabinet comptable seul
                </p>
                <p className="mt-1 text-xs text-white/50">Lent, J+30</p>
              </div>
              <div className="rounded-t-xl border border-white/10 border-b-0 bg-white/10 px-4 py-3 text-center ring-1 ring-warning/40">
                <div className="flex items-center justify-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-warning" />
                  <p className="text-sm font-semibold text-white">
                    PiloterMaPharma
                  </p>
                </div>
                <p className="mt-1 text-xs text-warning/80">
                  Tout en un, temps reel
                </p>
              </div>
            </div>

            {/* Rows */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-3">
              {rows.map((row, idx) => {
                const isLast = idx === rows.length - 1;
                return (
                  <div key={row.label} className="contents">
                    <div className="flex items-center px-4 py-4 text-sm text-white/80 border-t border-white/10">
                      {row.label}
                    </div>
                    <div
                      className={`flex items-center justify-center border-x border-white/10 bg-white/5 px-4 py-4 ${
                        isLast ? "rounded-b-xl border-b" : "border-t"
                      }`}
                    >
                      <Cell cell={row.excel} />
                    </div>
                    <div
                      className={`flex items-center justify-center border-x border-white/10 bg-white/5 px-4 py-4 ${
                        isLast ? "rounded-b-xl border-b" : "border-t"
                      }`}
                    >
                      <Cell cell={row.cabinet} />
                    </div>
                    <div
                      className={`flex items-center justify-center border-x border-white/10 bg-white/10 px-4 py-4 ring-1 ring-warning/40 ${
                        isLast ? "rounded-b-xl border-b" : "border-t"
                      }`}
                    >
                      <Cell cell={row.pmp} highlight />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/60 sm:text-left">
          Resultat : moins d&apos;Excel, moins d&apos;allers-retours avec le
          cabinet, plus de temps pour developper vos pharmacies.
        </p>
      </div>
    </section>
  );
}
