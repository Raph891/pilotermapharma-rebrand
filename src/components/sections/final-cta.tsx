import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section id="demo" className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand-700/20 bg-brand-900 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(59,95,224,0.5) 0, transparent 40%), radial-gradient(circle at 70% 70%, rgba(16,185,129,0.25) 0, transparent 40%)",
            }}
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Prêt à reprendre la main sur votre officine ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-white/70 sm:text-lg">
              30 minutes de démo personnalisée avec un membre de l'équipe.
              <br className="hidden sm:block" />
              Sans engagement, résiliation en un clic.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://app.pilotermapharma.fr/demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 gap-2 bg-white px-6 text-sm text-brand-900 hover:bg-white/90",
                )}
              >
                Réserver ma démo
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </Link>
              <Link
                href="tel:0659210350"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-11 gap-2 border-white/20 bg-transparent px-6 text-sm text-white hover:bg-white/10 hover:text-white",
                )}
              >
                <Phone className="h-4 w-4" strokeWidth={2.2} />
                06 59 21 03 50
              </Link>
            </div>

            <div className="mt-6 text-xs text-white/50">
              Lundi - Vendredi · 9h - 20h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
