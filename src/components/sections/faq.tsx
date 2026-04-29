import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    q: "Qui a créé PiloterMaPharma ?",
    a: "PiloterMaPharma a été conçu par un pharmacien titulaire en exercice. L'outil est né d'un besoin terrain : piloter une officine sans dépendre d'un cabinet ou de tableurs Excel. Chaque fonctionnalité est issue d'un cas réel rencontré derrière le comptoir.",
  },
  {
    q: "Comment PiloterMaPharma récupère-t-il mes chiffres ?",
    a: "Vous importez les synthèses d'activité et les exports de stock issus de votre LGO. Aucune connexion technique à votre logiciel d'officine, aucune installation au comptoir, aucune intervention de votre prestataire informatique.",
  },
  {
    q: "Avec quels LGO êtes-vous compatibles ?",
    a: "Aujourd'hui Winpharma, LGPI, Pharmaland et Smart RX. D'autres LGO peuvent être ajoutés sur demande dès lors qu'ils permettent d'exporter une synthèse d'activité et un état de stock.",
  },
  {
    q: "Combien de temps pour être opérationnel ?",
    a: "Moins d'une journée dans la grande majorité des cas. Vos historiques sur 24 mois sont consolidés en moins d'une heure et les dashboards sont prêts à l'emploi.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "Hébergement en France, chiffrement TLS sur les connexions, chiffrement au repos. Le traitement est conforme RGPD : vous restez propriétaire des données et pouvez les exporter à tout moment.",
  },
  {
    q: "Y a-t-il un coffre-fort pour mes documents ?",
    a: "Oui. KBIS, statuts, RIB, baux, bilans, assurances, pactes d'associés, contrats obligatoires… vous centralisez les documents de chaque pharmacie dans un coffre-fort chiffré, avec gestion des accès par profil.",
  },
  {
    q: "Y a-t-il un engagement ?",
    a: "Non. Tous les plans sont sans engagement, résiliables en un clic depuis votre espace.",
  },
  {
    q: "Comment se passe le support ?",
    a: "Support par e-mail sur le plan Essentiel, support prioritaire 6 jours sur 7 sur les plans Automatisation et +Planning. Vous échangez avec une équipe qui connaît le métier d'officine.",
  },
  {
    q: "Puis-je gérer plusieurs pharmacies ?",
    a: "Oui. Les groupements et titulaires multi-officines disposent d'une vue consolidée et de comparatifs entre points de vente, avec un coffre-fort documentaire par pharmacie.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
            FAQ
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Les questions les plus fréquentes
          </h2>
        </div>

        <Accordion className="mt-12">
          {FAQ.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-ink-900">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-ink-500">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
