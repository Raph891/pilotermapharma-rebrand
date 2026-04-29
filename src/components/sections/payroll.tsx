import {
  AlertCircle,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Target,
  UserPlus,
  Users,
} from "lucide-react";

const BULLETS = [
  {
    icon: Target,
    text: "Ratio masse salariale / CA en temps réel — comparé à votre seuil cible.",
  },
  {
    icon: Users,
    text: "Coût horaire par poste, par jour, par mois — détecté automatiquement.",
  },
  {
    icon: UserPlus,
    text: "« Est-ce que je peux embaucher ? » — modélisez un recrutement et voyez l'impact futur sur la masse.",
  },
];

export function Payroll() {
  return (
    <section className="border-b border-border bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Texte */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/10 px-3 py-1 text-xs font-medium text-success">
              <Users className="h-3.5 w-3.5" strokeWidth={2.2} />
              Masse salariale
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Le poste qui pèse le plus, enfin sous contrôle.
            </h2>
            <p className="mt-4 text-pretty text-lg text-ink-500">
              Suivez le ratio masse salariale / CA en direct et, surtout,
              simulez l'impact de chaque embauche avant de signer le contrat.
            </p>

            <ul className="mt-7 space-y-3.5 text-sm text-ink-900">
              {BULLETS.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-success/10 text-success">
                    <b.icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#demo"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline"
            >
              Voir le module RH en démo
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>

          {/* Mockup */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {/* Card haut : ratio MS/CA */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-ink-500">
                      Masse salariale / CA
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-mono text-4xl font-semibold tabular-nums text-ink-900">
                        12,9 %
                      </span>
                      <span className="text-sm text-ink-500">ce mois</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.4} />
                    Sous seuil cible (13 %)
                  </span>
                </div>

                {/* Barre */}
                <div className="mt-5">
                  <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full bg-success"
                      style={{ width: "80.6%" }}
                    />
                    {/* Marqueur seuil cible 13% / 16% max scale */}
                    <div
                      className="absolute top-0 h-full w-px bg-ink-900"
                      style={{ left: "81.25%" }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] font-mono text-ink-500 tabular-nums">
                    <span>0 %</span>
                    <span className="text-ink-900">cible 13 %</span>
                    <span>16 %</span>
                  </div>
                </div>

                {/* 3 mois précédents */}
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-5">
                  {[
                    { m: "Janvier", v: "13,4 %", up: true },
                    { m: "Février", v: "13,2 %", up: false },
                    { m: "Mars", v: "12,9 %", up: false },
                  ].map((row) => (
                    <div key={row.m}>
                      <div className="text-[11px] uppercase tracking-wider text-ink-500">
                        {row.m}
                      </div>
                      <div className="mt-0.5 font-mono text-sm font-semibold tabular-nums text-ink-900">
                        {row.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card bas : Est-ce que je peux embaucher ? */}
              <div className="rounded-2xl border border-brand-700/30 bg-card p-6 shadow-sm ring-1 ring-brand-700/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-700 text-white">
                      <Calculator className="h-4.5 w-4.5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink-900">
                        Est-ce que je peux embaucher&nbsp;?
                      </div>
                      <div className="text-[11px] text-ink-500">
                        Simulez l'impact avant de signer
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                    Simulation
                  </span>
                </div>

                {/* Inputs simulés */}
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <SimInput label="Poste" value="Préparateur" />
                  <SimInput label="Temps" value="35 h / sem" />
                  <SimInput label="Brut mensuel" value="2 350 €" />
                </div>

                <div className="my-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
                    Impact projeté
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Output */}
                <div className="grid gap-3 sm:grid-cols-3">
                  <SimOutput
                    label="Nouveau ratio MS/CA"
                    value="13,8 %"
                    delta="+0,9 pt"
                    tone="warning"
                  />
                  <SimOutput
                    label="Coût total chargé"
                    value="3 290 €"
                    delta="/ mois"
                    tone="ink"
                  />
                  <SimOutput
                    label="Impact marge"
                    value="−0,4 pt"
                    delta="vs aujourd'hui"
                    tone="warning"
                  />
                </div>

                <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-warning/10 p-3 text-xs text-ink-900">
                  <AlertCircle
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning"
                    strokeWidth={2.4}
                  />
                  <span>
                    L'embauche fait passer le ratio au-dessus de votre seuil
                    cible (13 %). À pondérer avec la croissance prévue du CA
                    sur les 3 prochains mois.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SimInput({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/40 p-3">
      <div className="text-[10px] uppercase tracking-wider text-ink-500">
        {label}
      </div>
      <div className="mt-0.5 truncate text-sm font-medium text-ink-900">
        {value}
      </div>
    </div>
  );
}

function SimOutput({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone: "success" | "warning" | "ink";
}) {
  const valueColor = {
    success: "text-success",
    warning: "text-warning",
    ink: "text-ink-900",
  }[tone];

  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="text-[10px] uppercase tracking-wider text-ink-500">
        {label}
      </div>
      <div className={`mt-0.5 font-mono text-base font-semibold tabular-nums ${valueColor}`}>
        {value}
      </div>
      <div className="text-[10px] text-ink-500 tabular-nums">{delta}</div>
    </div>
  );
}
