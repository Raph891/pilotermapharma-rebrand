import { Building2, FileText, FolderLock, Lock, MapPin, ShieldCheck } from "lucide-react";

const COFFRE_DOCS = [
  "KBIS",
  "Statuts",
  "RIB",
  "Bail",
  "Bilans",
  "Assurance du local",
  "Pacte d'associé",
  "Contrats obligatoires",
];

const TRUST_ITEMS = [
  {
    icon: MapPin,
    title: "Hébergement français",
    description: "Données stockées en France, datacenters certifiés.",
  },
  {
    icon: ShieldCheck,
    title: "Conforme RGPD",
    description: "Politique claire, droit d'accès et d'export à tout moment.",
  },
  {
    icon: Lock,
    title: "Chiffrement bout en bout",
    description: "TLS sur les connexions, chiffrement au repos.",
  },
  {
    icon: FileText,
    title: "Vous restez propriétaire",
    description: "Vos fichiers, vos données. Aucune lecture dans votre LGO.",
  },
];

export function Security() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-brand-900 px-6 py-12 sm:px-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Coffre-fort */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
                <FolderLock className="h-3.5 w-3.5" strokeWidth={2.2} />
                Coffre-fort intégré
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Tous vos documents officiels, au même endroit.
              </h2>
              <p className="mt-3 text-pretty text-base text-white/70">
                KBIS, statuts, baux, bilans, contrats… Vous centralisez les
                documents de chacune de vos pharmacies dans un coffre-fort
                chiffré. Plus jamais de chasse aux PDF dans 12 dossiers.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {COFFRE_DOCS.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/85"
                  >
                    <FileText className="h-3 w-3 text-white/50" strokeWidth={2.2} />
                    {d}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs text-white/70">
                <Building2 className="h-3.5 w-3.5 text-white/60" strokeWidth={2.2} />
                Multi-pharmacies&nbsp;: une vue par officine, accès par profil.
              </div>
            </div>

            {/* Sécurité */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.2} />
                Sécurité &amp; conformité
              </span>
              <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Vos données restent les vôtres.
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {TRUST_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-white/10 text-white">
                      <item.icon className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <div className="mt-3 text-sm font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-white/65">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
