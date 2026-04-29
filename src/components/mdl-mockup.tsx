import { ChevronDown, FileUp, Gem, Settings, TrendingDown, TrendingUp } from "lucide-react";

type Cell = {
  amount: string;
  delta: string; // signed percentage, e.g. "+6,2 %" or "-3,4 %"
};

type Row = {
  month: string;
  t1: Cell;
  t2: Cell;
  t3: Cell;
  t4: Cell;
  t5: Cell;
  delta: string;
};

const ROWS: Row[] = [
  {
    month: "Janvier",
    t1: { amount: "84 320,40", delta: "+3,1 %" },
    t2: { amount: "61 240,15", delta: "-2,4 %" },
    t3: { amount: "42 180,90", delta: "+5,8 %" },
    t4: { amount: "118 450,25", delta: "+6,2 %" },
    t5: { amount: "32 120,00", delta: "-1,7 %" },
    delta: "+4,2 %",
  },
  {
    month: "Février",
    t1: { amount: "79 815,60", delta: "-3,5 %" },
    t2: { amount: "58 970,30", delta: "+2,9 %" },
    t3: { amount: "39 720,55", delta: "-4,8 %" },
    t4: { amount: "124 980,70", delta: "+8,4 %" },
    t5: { amount: "28 540,00", delta: "+1,2 %" },
    delta: "+6,8 %",
  },
  {
    month: "Mars",
    t1: { amount: "92 450,10", delta: "+7,6 %" },
    t2: { amount: "65 310,80", delta: "+4,3 %" },
    t3: { amount: "47 890,45", delta: "-1,9 %" },
    t4: { amount: "146 215,60", delta: "+11,5 %" },
    t5: { amount: "35 980,00", delta: "+5,1 %" },
    delta: "+9,1 %",
  },
  {
    month: "Avril",
    t1: { amount: "88 920,75", delta: "+2,2 %" },
    t2: { amount: "63 480,20", delta: "-6,7 %" },
    t3: { amount: "44 350,15", delta: "+3,4 %" },
    t4: { amount: "232 204,44", delta: "+13,8 %" },
    t5: { amount: "41 760,00", delta: "+9,4 %" },
    delta: "+12,4 %",
  },
];

const TOTALS = {
  t1: "345 506,85",
  t2: "249 001,45",
  t3: "174 142,05",
  t4: "621 850,99",
  t5: "138 400,00",
};

function CellValue({ cell, emphasis = false }: { cell: Cell; emphasis?: boolean }) {
  const isPositive = cell.delta.trim().startsWith("+");
  const Icon = isPositive ? TrendingUp : TrendingDown;
  const deltaColor = isPositive ? "text-success" : "text-red-600";
  return (
    <div className="flex flex-col items-end leading-tight">
      <span
        className={
          emphasis
            ? "font-mono font-semibold tabular-nums text-ink-900"
            : "font-mono tabular-nums text-ink-500"
        }
      >
        {cell.amount} €
      </span>
      <span
        className={`mt-0.5 inline-flex items-center gap-0.5 font-mono text-[10px] tabular-nums ${deltaColor}`}
      >
        <Icon className="h-3 w-3" strokeWidth={2.4} />
        {cell.delta}
      </span>
    </div>
  );
}

export function MdlMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-brand-900/10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-white px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-brand-700 text-white">
            <Gem className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-ink-900">
            Produit Cher <span className="text-ink-500">(MDL)</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-md border border-border bg-white px-2 py-1 text-[11px] text-ink-900">
            Pharmacie du Parc
            <ChevronDown className="h-3 w-3 text-ink-500" />
          </span>
          <span className="inline-flex items-center gap-1 rounded-md border border-brand-700/30 bg-brand-50 px-2 py-1 text-[11px] font-medium text-brand-700">
            2026
            <ChevronDown className="h-3 w-3" />
          </span>
        </div>
      </div>

      <div className="space-y-4 p-4">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-xl border border-brand-900/40 bg-brand-900 p-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-white/60">
                Total Produit Cher (450 € et plus)
              </div>
              <div className="mt-1.5 font-mono text-3xl font-semibold tabular-nums text-white">
                621 850,99 €
              </div>
              <div className="mt-1 text-[11px] text-white/60">Année 2026</div>
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-md bg-white/10 text-white/90 ring-1 ring-white/15">
              <Gem className="h-4 w-4" strokeWidth={2} />
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-md bg-brand-700 px-3 py-1.5 text-[11px] font-medium text-white hover:bg-brand-900 transition-colors">
            <FileUp className="h-3.5 w-3.5" strokeWidth={2.2} />
            Importer PDF/Excel
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-md bg-success/15 px-3 py-1.5 text-[11px] font-medium text-success">
            <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.2} />
            Évolution N-1
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 text-[11px] font-medium text-ink-500">
            <Settings className="h-3.5 w-3.5" strokeWidth={2.2} />
            Paramètres
          </button>
        </div>

        {/* Tableau */}
        <div className="overflow-x-auto rounded-xl border border-border bg-white">
          <table className="w-full min-w-[640px] border-collapse text-[11px]">
            <thead>
              <tr className="border-b border-border bg-muted/60">
                <th className="px-3 py-2.5 text-left font-semibold text-ink-500 uppercase tracking-wider text-[10px]">
                  Mois
                </th>
                <th className="px-3 py-2.5 text-right font-semibold text-ink-500 uppercase tracking-wider text-[10px]">
                  0 — 22,90 €
                </th>
                <th className="px-3 py-2.5 text-right font-semibold text-ink-500 uppercase tracking-wider text-[10px]">
                  22,90 — 150 €
                </th>
                <th className="px-3 py-2.5 text-right font-semibold text-ink-500 uppercase tracking-wider text-[10px]">
                  150 — 450 €
                </th>
                <th className="px-3 py-2.5 text-right font-semibold uppercase tracking-wider text-[10px] text-brand-700">
                  <span className="inline-flex items-center gap-1">
                    <Gem className="h-3 w-3" strokeWidth={2.4} />
                    450 — 1 500 €
                  </span>
                </th>
                <th className="px-3 py-2.5 text-right font-semibold uppercase tracking-wider text-[10px] text-brand-700">
                  <span className="inline-flex items-center gap-1">
                    <Gem className="h-3 w-3" strokeWidth={2.4} />
                    +1 500 €
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr
                  key={r.month}
                  className="border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-3 py-2.5 align-top">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-medium text-ink-900">{r.month}</span>
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-success tabular-nums">
                        <TrendingUp className="h-2.5 w-2.5" strokeWidth={2.5} />
                        {r.delta}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-right align-top">
                    <CellValue cell={r.t1} />
                  </td>
                  <td className="px-3 py-2.5 text-right align-top">
                    <CellValue cell={r.t2} />
                  </td>
                  <td className="px-3 py-2.5 text-right align-top">
                    <CellValue cell={r.t3} />
                  </td>
                  <td className="px-3 py-2.5 text-right align-top">
                    <CellValue cell={r.t4} emphasis />
                  </td>
                  <td className="px-3 py-2.5 text-right align-top">
                    <CellValue cell={r.t5} emphasis />
                  </td>
                </tr>
              ))}
              <tr className="bg-muted/50">
                <td className="px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-ink-900">
                  Total
                </td>
                <td className="px-3 py-2.5 text-right font-mono font-semibold tabular-nums text-ink-900">
                  {TOTALS.t1} €
                </td>
                <td className="px-3 py-2.5 text-right font-mono font-semibold tabular-nums text-ink-900">
                  {TOTALS.t2} €
                </td>
                <td className="px-3 py-2.5 text-right font-mono font-semibold tabular-nums text-ink-900">
                  {TOTALS.t3} €
                </td>
                <td className="px-3 py-2.5 text-right font-mono font-semibold tabular-nums text-brand-700">
                  {TOTALS.t4} €
                </td>
                <td className="px-3 py-2.5 text-right font-mono font-semibold tabular-nums text-brand-700">
                  {TOTALS.t5} €
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
