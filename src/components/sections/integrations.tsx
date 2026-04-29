const INTEGRATIONS = [
  { name: "Winpharma", description: "Synthèses d'activité & stock" },
  { name: "LGPI", description: "Synthèses d'activité & stock" },
  { name: "Pharmaland", description: "Synthèses d'activité & stock" },
  { name: "Smart RX", description: "Synthèses d'activité & stock" },
];

export function Integrations() {
  return (
    <section
      id="integrations"
      className="border-b border-border bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
              Compatibilité LGO
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Vos synthèses d'activité, comprises au pixel près.
            </h2>
            <p className="mt-4 text-pretty text-lg text-ink-500">
              PiloterMaPharma sait lire les formats de synthèse des principaux
              LGO du marché. Vous gardez votre logiciel actuel&nbsp;: on
              n'installe rien, on ne touche à rien.
            </p>
            <p className="mt-3 text-sm text-ink-500">
              Votre LGO n'est pas dans la liste ?{" "}
              <a href="#demo" className="font-medium text-brand-700 hover:underline">
                Parlons-en →
              </a>
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {INTEGRATIONS.map((lgo) => (
                <div
                  key={lgo.name}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand-700/40"
                >
                  <div
                    aria-hidden
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 font-mono text-base font-semibold text-brand-700"
                  >
                    {lgo.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-base font-semibold text-ink-900">
                      {lgo.name}
                    </div>
                    <div className="text-xs text-ink-500">
                      {lgo.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-ink-500 sm:text-left">
              + autres LGO sur demande
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
