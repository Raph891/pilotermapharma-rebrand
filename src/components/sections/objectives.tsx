import {
  ArrowRight,
  Boxes,
  ChevronDown,
  FileText,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const BULLETS = [
  "Au moment du bilan avec votre expert-comptable, vous fixez les cibles de l'année : croissance CA HT, ratio masse salariale, ratio stock.",
  "Vous suivez la trajectoire mois par mois, en direct — contre l'objectif et contre N-1.",
  "Annotez et commentez vos objectifs : les décisions restent traçables toute l'année.",
];

export function Objectives() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Texte */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              <Target className="h-3.5 w-3.5" strokeWidth={2.2} />
              Suivi des objectifs
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Fixez vos objectifs au bilan, tenez le cap toute l'année.
            </h2>
            <p className="mt-4 text-pretty text-lg text-ink-500">
              Au moment de votre bilan avec votre expert-comptable, vous
              définissez vos cibles de l'année — croissance, frais de
              personnel, stock. Et vous les suivez ensuite mois par mois, sans
              attendre le bilan suivant.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-ink-900">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#demo"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline"
            >
              Voir le module Objectifs en démo
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>

          {/* Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card shadow-xl shadow-brand-900/5">
              {/* Header */}
              <div className="flex flex-col items-start justify-between gap-3 border-b border-border bg-white p-5 sm:flex-row sm:items-center">
                <div>
                  <div className="text-base font-semibold tracking-tight text-ink-900">
                    Objectifs 2026
                  </div>
                  <div className="text-[11px] text-ink-500">
                    Définissez vos objectifs de performance
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md border border-border bg-white px-2.5 py-1 text-[11px] text-ink-900">
                    Pharmacie du Parc
                    <ChevronDown className="h-3 w-3 text-ink-500" />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md border border-brand-700/30 bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
                    2026
                    <ChevronDown className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* 3 objectifs */}
              <div className="grid gap-4 p-5 lg:grid-cols-3">
                <ObjectiveCard
                  icon={TrendingUp}
                  iconBg="bg-brand-50"
                  iconFg="text-brand-700"
                  name="Progression du CA HT"
                  description="Croissance annuelle CA hors taxes"
                  target="5 %"
                  current="+6,2 %"
                  status="ahead"
                  progress={124}
                />
                <ObjectiveCard
                  icon={Users}
                  iconBg="bg-purple-100/60"
                  iconFg="text-purple-700"
                  name="Frais de Personnel"
                  description="Ratio masse salariale / CA HT"
                  target="12 %"
                  current="12,9 %"
                  status="behind"
                  progress={92}
                />
                <ObjectiveCard
                  icon={Boxes}
                  iconBg="bg-warning/15"
                  iconFg="text-warning"
                  name="Stock"
                  description="Ratio stock / CA HT"
                  target="12 %"
                  current="11,4 %"
                  status="ahead"
                  progress={106}
                />
              </div>

              {/* Notes */}
              <div className="border-t border-border bg-muted/40 p-5">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-card text-ink-500">
                    <FileText className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="text-[12px] font-semibold text-ink-900">
                      Notes
                    </div>
                    <div className="text-[10px] text-ink-500">
                      Vos commentaires sur les objectifs de l'année
                    </div>
                  </div>
                </div>
                <div className="mt-3 rounded-lg border border-dashed border-border bg-card p-3 text-xs italic text-ink-500">
                  « Embauche d'une préparatrice prévue en septembre — à
                  réévaluer au T3 si croissance CA dépasse 8 %. »
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ObjectiveCard({
  icon: Icon,
  iconBg,
  iconFg,
  name,
  description,
  target,
  current,
  status,
  progress,
}: {
  icon: typeof Target;
  iconBg: string;
  iconFg: string;
  name: string;
  description: string;
  target: string;
  current: string;
  status: "ahead" | "behind";
  progress: number;
}) {
  const isAhead = status === "ahead";
  const barColor = isAhead ? "bg-success" : "bg-warning";
  const badgeBg = isAhead ? "bg-success/10" : "bg-warning/15";
  const badgeFg = isAhead ? "text-success" : "text-warning";
  const badgeText = isAhead ? "En avance" : "À surveiller";
  const cappedProgress = Math.min(progress, 100);

  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <div className="flex items-start justify-between">
        <span className={`grid h-9 w-9 place-items-center rounded-lg ${iconBg} ${iconFg}`}>
          <Icon className="h-4 w-4" strokeWidth={2} />
        </span>
        <span className={`rounded-full ${badgeBg} px-2 py-0.5 text-[10px] font-medium ${badgeFg}`}>
          {badgeText}
        </span>
      </div>

      <div className="mt-3 text-sm font-semibold text-ink-900">{name}</div>
      <div className="text-[11px] text-ink-500">{description}</div>

      {/* Valeur actuelle vs objectif */}
      <div className="mt-4 flex items-baseline justify-between">
        <span className="font-mono text-2xl font-semibold tabular-nums text-ink-900">
          {current}
        </span>
        <span className="text-[11px] text-ink-500 tabular-nums">
          objectif <span className="font-medium text-ink-900">{target}</span>
        </span>
      </div>

      {/* Barre */}
      <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${cappedProgress}%` }}
        />
      </div>
      <div className="mt-1.5 text-right font-mono text-[10px] tabular-nums text-ink-500">
        {progress} % de l'objectif
      </div>
    </div>
  );
}
