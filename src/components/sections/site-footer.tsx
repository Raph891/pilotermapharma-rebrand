import Link from "next/link";
import { Logo } from "@/components/logo";

const COLUMNS = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#fonctionnalites" },
      { label: "Intégrations", href: "#integrations" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "Demander une démo", href: "#demo" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Avis titulaires", href: "#avis" },
      { label: "FAQ", href: "#faq" },
      { label: "Blog", href: "/blog" },
      { label: "Centre d'aide", href: "/aide" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "CGU", href: "/cgu" },
      { label: "Politique RGPD", href: "/rgpd" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "06 59 21 03 50", href: "tel:0659210350" },
      { label: "WhatsApp", href: "https://wa.me/33659210350" },
      { label: "contact@pilotermapharma.fr", href: "mailto:contact@pilotermapharma.fr" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo invert />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              L'outil de pilotage créé par un pharmacien titulaire, pour les
              pharmaciens titulaires.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" />
              Service opérationnel
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/75 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} PiloterMaPharma — Tous droits réservés.</div>
          <div className="flex gap-4">
            <span>Hébergement France</span>
            <span aria-hidden>·</span>
            <span>RGPD</span>
            <span aria-hidden>·</span>
            <span>SIRET à compléter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
