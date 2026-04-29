const STATS = [
  { value: "30+", label: "Pharmacies équipées" },
  { value: "+8 %", label: "Marge brute moyenne gagnée" },
  { value: "4 h", label: "Économisées chaque semaine" },
  { value: "4,9 / 5", label: "Note moyenne titulaires" },
];

export function SocialProof() {
  return (
    <section className="border-b border-border bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-3xl font-semibold tabular-nums text-brand-700 sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-ink-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
