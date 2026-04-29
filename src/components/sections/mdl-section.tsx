import { Gem } from "lucide-react";
import { MdlMockup } from "@/components/mdl-mockup";

export function MdlSection() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
            <Gem className="h-3.5 w-3.5" strokeWidth={2.2} />
            Produit Cher (MDL)
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Le suivi MDL des produits chers, mois par mois.
          </h2>
          <p className="mt-4 text-pretty text-lg text-ink-500">
            Cassez votre activité par tranches de prix, comparez à N-1 et
            visualisez exactement ce qui pèse dans votre marge brute.
          </p>
        </div>

        <div className="mt-12">
          <MdlMockup />
        </div>
      </div>
    </section>
  );
}
