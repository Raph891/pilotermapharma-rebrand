import { Banknote, FileUp, Plus } from "lucide-react";

export function FinancesMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-brand-900/5">
      {/* Header de page */}
      <div className="flex items-start justify-between border-b border-border bg-white p-5">
        <div>
          <div className="text-base font-semibold tracking-tight text-ink-900">
            Finances
          </div>
          <div className="text-[11px] text-ink-500">
            Gestion des engagements financiers
          </div>
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-success px-2.5 py-1 text-[11px] font-medium text-white">
            <FileUp className="h-3 w-3" strokeWidth={2.4} />
            Importer PDF
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-brand-700 px-2.5 py-1 text-[11px] font-medium text-white">
            <Plus className="h-3 w-3" strokeWidth={2.6} />
            Ajouter
          </span>
        </div>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-2 gap-3 border-b border-border bg-muted/40 p-4 lg:grid-cols-4">
        <FinanceKpi label="Crédits / Leasings" value="16 048,80 €" tone="brand" />
        <FinanceKpi label="Contrats" value="3 226,80 €" tone="violet" />
        <FinanceKpi label="Charges fixes" value="14 240,58 €" tone="warning" />
        <FinanceKpi label="Total mensuel" value="33 516,18 €" tone="success" />
      </div>

      {/* Tabs */}
      <div className="flex gap-5 border-b border-border bg-white px-5 py-2 text-[12px] font-medium">
        <span className="border-b-2 border-brand-700 pb-2 text-brand-700">
          Crédits / Leasings <span className="ml-1 rounded-full bg-brand-50 px-1.5 py-0.5 text-[10px] tabular-nums">2</span>
        </span>
        <span className="pb-2 text-ink-500">
          Contrats <span className="ml-1 rounded-full bg-muted px-1.5 py-0.5 text-[10px] tabular-nums">10</span>
        </span>
        <span className="pb-2 text-ink-500">
          Prélèvements fixes <span className="ml-1 rounded-full bg-muted px-1.5 py-0.5 text-[10px] tabular-nums">6</span>
        </span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border bg-white">
        {[
          {
            label: "Crédit travaux",
            badge: "Crédit",
            montant: "201 000,00 €",
            mens: "477,80 €",
            taux: "2,75 %",
            fin: "16/03/2031",
            org: "LCL",
          },
          {
            label: "Crédit acquisition pharmacie",
            badge: "Crédit",
            montant: "1 894 400,00 €",
            mens: "15 571,00 €",
            taux: "2,75 %",
            fin: "29/12/2037",
            org: "LCL",
          },
        ].map((row) => (
          <div key={row.label} className="grid grid-cols-2 gap-4 px-5 py-4 lg:grid-cols-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-brand-50 px-1.5 py-0.5 text-[10px] font-semibold text-brand-700">
                  {row.badge}
                </span>
                <span className="text-sm font-semibold text-ink-900">
                  {row.label}
                </span>
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-ink-500">
                Organisme : {row.org}
              </div>
            </div>
            <FinanceCell label="Montant" value={row.montant} />
            <FinanceCell label="Mensualité" value={row.mens} />
            <FinanceCell label="Taux" value={row.taux} />
            <FinanceCell label="Échéance" value={row.fin} />
          </div>
        ))}
      </div>
    </div>
  );
}

function FinanceKpi({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "brand" | "violet" | "warning" | "success";
}) {
  const toneClasses = {
    brand: { bg: "bg-brand-50", fg: "text-brand-700" },
    violet: { bg: "bg-purple-100/60", fg: "text-purple-700" },
    warning: { bg: "bg-warning/15", fg: "text-warning" },
    success: { bg: "bg-success/10", fg: "text-success" },
  }[tone];

  return (
    <div className="rounded-xl border border-border bg-white p-3.5">
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <div className="text-[11px] uppercase tracking-wider text-ink-500">
            {label}
          </div>
          <div className="mt-1 truncate font-mono text-base font-semibold tabular-nums text-ink-900">
            {value}
            <span className="text-xs font-normal text-ink-500">/mois</span>
          </div>
        </div>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-md ${toneClasses.bg} ${toneClasses.fg}`}
        >
          <Banknote className="h-4 w-4" strokeWidth={2} />
        </span>
      </div>
    </div>
  );
}

function FinanceCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-ink-500">
        {label}
      </div>
      <div className="mt-0.5 font-mono text-sm font-semibold tabular-nums text-ink-900">
        {value}
      </div>
    </div>
  );
}
