import { Quote, Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Raphaël Oziel",
    role: "Pharmacien titulaire",
    location: "Achères (78)",
    initials: "RO",
    quote:
      "Avant, je faisais mes points mensuels sur Excel le dimanche. Maintenant, j'ouvre PiloterMaPharma à 8h, j'ai mes chiffres en 2 minutes et je peux passer la journée sur le comptoir. La masse salariale en temps réel a clairement changé ma façon de gérer les plannings.",
    metric: "−4 h / semaine sur le pilotage",
  },
  {
    name: "Jennifer Allali",
    role: "Pharmacienne titulaire",
    location: "Rosny-sous-Bois (93)",
    initials: "JA",
    quote:
      "Le suivi des promos m'a fait gagner concrètement de la marge. Je vois enfin précisément ce qui marche et ce qui cannibalise mes ventes classiques. Et le branchement à mon LGO s'est fait sans toucher à rien dans l'officine.",
    metric: "+6,2 % de marge brute en 4 mois",
  },
];

export function Testimonials() {
  return (
    <section id="avis" className="border-b border-border bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
            Ils nous font confiance
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Des titulaires qui pilotent leur officine autrement
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex items-center gap-1 text-warning">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-700/10" aria-hidden />
              <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed text-ink-900">
                « {r.quote} »
              </blockquote>
              <div className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                {r.metric}
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-700 font-mono text-sm font-semibold text-white">
                  {r.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink-900">{r.name}</div>
                  <div className="text-xs text-ink-500">
                    {r.role} · {r.location}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
