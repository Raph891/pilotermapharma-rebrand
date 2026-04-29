import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Essentiel",
    price: "49,99",
    suffix: "€ / mois",
    description: "Pour démarrer le pilotage de votre officine.",
    cta: "Commencer",
    href: "#demo",
    featured: false,
    features: [
      "Tableau de bord CA mois par mois",
      "Comparaison N-1 et marge brute",
      "Import des synthèses d'1 LGO",
      "Support par e-mail",
    ],
  },
  {
    name: "Automatisation",
    price: "69,99",
    suffix: "€ / mois",
    description: "Le plan le plus choisi par les titulaires.",
    cta: "Choisir Automatisation",
    href: "#demo",
    featured: true,
    badge: "Le plus populaire",
    features: [
      "Tout le plan Essentiel",
      "Suivi masses salariales en temps réel",
      "Alertes stocks & promos automatisées",
      "Coffre-fort documentaire",
      "Module Finances (crédits, contrats, prélèvements)",
      "Support prioritaire 6j / 7",
    ],
  },
  {
    name: "+ Planning",
    price: "10",
    suffix: "€ / mois en plus",
    description: "Module additionnel à coupler avec un autre plan.",
    cta: "Ajouter le module",
    href: "#demo",
    featured: false,
    features: [
      "Planning équipe optimisé",
      "Coût horaire par poste",
      "« Est-ce que je peux embaucher ? » — simulateur",
    ],
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="border-b border-border bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
            Tarifs
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Un tarif simple, sans engagement
          </h2>
          <p className="mt-4 text-pretty text-lg text-ink-500">
            Sans engagement. Vous pouvez arrêter à tout moment.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-7 shadow-sm",
                plan.featured
                  ? "border-brand-700 shadow-brand-700/15 ring-1 ring-brand-700/20"
                  : "border-border"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm">
                  {plan.badge}
                </span>
              )}

              <div>
                <div className="text-sm font-semibold text-ink-900">{plan.name}</div>
                <p className="mt-1 text-xs text-ink-500">{plan.description}</p>
              </div>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-mono text-4xl font-semibold tabular-nums text-ink-900">
                  {plan.price}
                </span>
                <span className="text-sm text-ink-500">{plan.suffix}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-ink-900">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        plan.featured ? "text-brand-700" : "text-success"
                      )}
                      strokeWidth={2.5}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: plan.featured ? "default" : "outline",
                  }),
                  "mt-7 h-11 px-5 text-sm",
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-500">
          Tarifs HT. Sans engagement, résiliation en un clic.
        </p>
      </div>
    </section>
  );
}
