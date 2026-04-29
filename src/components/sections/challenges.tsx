import { ArrowRight, Crown, Target, Trophy, Users } from "lucide-react";

const BULLETS = [
  {
    icon: Target,
    text: "Configurez prix par boîte, minimum par personne et total équipe en quelques clics.",
  },
  {
    icon: Trophy,
    text: "Suivez en direct le classement de chaque collaborateur, boîte par boîte.",
  },
  {
    icon: Users,
    text: "Cumulez les primes labo et validez la prime mensuelle d'un seul geste.",
  },
];

const RANKING = [
  { name: "Marie L.", initials: "ML", boxes: 22, rank: 1 },
  { name: "Karim B.", initials: "KB", boxes: 18, rank: 2 },
  { name: "Léa M.", initials: "LM", boxes: 14, rank: 3 },
  { name: "Vous (Thomas R.)", initials: "TR", boxes: 8, rank: 4, isYou: true },
];

const CHALLENGE_TOTAL = 80;
const CHALLENGE_DONE = RANKING.reduce((sum, r) => sum + r.boxes, 0);
const CHALLENGE_PCT = Math.round((CHALLENGE_DONE / CHALLENGE_TOTAL) * 100);
const TOP_BOXES = Math.max(...RANKING.map((r) => r.boxes));

export function Challenges() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Mockup à gauche */}
          <div className="lg:col-span-7 lg:order-1">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              {/* En-tête challenge */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-ink-900">
                    Challenge Pileje · Avril 2026
                  </div>
                  <div className="mt-0.5 text-[11px] text-ink-500 tabular-nums font-mono">
                    Prix par boîte 1 € · Min 10/pers · Total 80
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  En cours
                </span>
              </div>

              {/* Progress global */}
              <div className="mt-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-ink-500">
                    Progression équipe
                  </span>
                  <span className="font-mono text-sm font-semibold tabular-nums text-ink-900">
                    {CHALLENGE_DONE} / {CHALLENGE_TOTAL} boîtes ·{" "}
                    <span className="text-brand-700">{CHALLENGE_PCT} %</span>
                  </span>
                </div>
                <div className="mt-2 relative h-2.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-brand-700"
                    style={{ width: `${CHALLENGE_PCT}%` }}
                  />
                </div>
              </div>

              {/* Classement */}
              <div className="mt-6 space-y-3 border-t border-border pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-ink-500">
                    Classement collaborateurs
                  </span>
                  <span className="text-[11px] font-mono tabular-nums text-ink-500">
                    Boîtes
                  </span>
                </div>

                {RANKING.map((p) => {
                  const pct = Math.round((p.boxes / TOP_BOXES) * 100);
                  return (
                    <div key={p.name} className="flex items-center gap-3">
                      {/* Rang */}
                      <RankBadge rank={p.rank} />

                      {/* Avatar */}
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold ${
                          p.isYou
                            ? "bg-brand-900 text-white"
                            : "bg-brand-50 text-brand-900"
                        }`}
                      >
                        {p.initials}
                      </span>

                      {/* Nom + barre */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`truncate text-sm ${
                              p.isYou
                                ? "font-semibold text-ink-900"
                                : "text-ink-900"
                            }`}
                          >
                            {p.name}
                          </span>
                          <span className="font-mono text-sm font-semibold tabular-nums text-ink-900">
                            {p.boxes}
                          </span>
                        </div>
                        <div className="mt-1.5 relative h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className={`absolute left-0 top-0 h-full rounded-full ${
                              p.rank === 1
                                ? "bg-warning"
                                : p.isYou
                                ? "bg-brand-700"
                                : "bg-brand-700/60"
                            }`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer cumul */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-[11px] uppercase tracking-wider text-ink-500">
                  Cumul prime labo
                </span>
                <span className="font-mono text-base font-semibold tabular-nums text-success">
                  {CHALLENGE_DONE} €
                </span>
              </div>
            </div>
          </div>

          {/* Texte à droite */}
          <div className="lg:col-span-5 lg:order-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/20 bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
              <Trophy className="h-3.5 w-3.5" strokeWidth={2.2} />
              Challenges Labo
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Motivez l'équipe avec des challenges qui marchent.
            </h2>
            <p className="mt-4 text-pretty text-lg text-ink-500">
              Lancez un challenge avec un laboratoire (Pileje, Bioderma,
              La Roche-Posay, Avène…) en deux minutes. L'équipe joue ensemble,
              chacun voit sa contribution, et la prime tombe automatiquement.
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

            <a
              href="#demo"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline"
            >
              Voir le module en démo
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-warning/15 text-warning">
        <Crown className="h-3.5 w-3.5" strokeWidth={2.4} />
      </span>
    );
  }
  return (
    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-muted font-mono text-[11px] font-semibold tabular-nums text-ink-500">
      {rank}
    </span>
  );
}
