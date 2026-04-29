"use client";

import { ChevronDown, Mail, MessageCircleQuestion } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
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

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Faq() {
  const reducedMotion = useReducedMotion();

  // Per-element entrance — collapses to opacity-only when reduced motion is set.
  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : { duration: 0.45, ease: EASE_OUT_EXPO, delay },
  });

  const itemFade = (i: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: reducedMotion
      ? { duration: 0.15 }
      : {
          duration: 0.4,
          ease: EASE_OUT_EXPO,
          delay: 0.1 + i * 0.05,
        },
  });

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      {/* Ambient orb — subtle brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-700/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Column 1 — header */}
          <div className="lg:col-span-5 lg:pt-2">
            <motion.span
              {...fadeUp(0)}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
            >
              <MessageCircleQuestion
                className="h-3.5 w-3.5"
                strokeWidth={2.2}
              />
              FAQ
            </motion.span>

            <motion.h2
              {...fadeUp(0.05)}
              className="mt-5 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-[44px]"
            >
              Les{" "}
              <span className="bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent">
                questions fréquentes
              </span>{" "}
              des titulaires.
            </motion.h2>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-4 max-w-md text-pretty text-base leading-relaxed text-ink-500"
            >
              Compatibilité, sécurité, mise en route, support&nbsp;: l&apos;essentiel
              pour vous décider en quelques minutes.
            </motion.p>

            {/* CTA — "Une autre question ?" */}
            <motion.a
              {...fadeUp(0.15)}
              href="mailto:contact@pilotermapharma.fr"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 transition-all duration-200 hover:-translate-y-px hover:border-brand-700/30 hover:shadow-sm"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={2.2} />
              Une autre question ? Écrivez-nous.
            </motion.a>
          </div>

          {/* Column 2 — accordion */}
          <div className="lg:col-span-7">
            <Accordion className="space-y-3">
              {FAQ.map((item, i) => (
                <motion.div key={item.q} {...itemFade(i)}>
                  <AccordionItem
                    value={`item-${i}`}
                    className="group/item rounded-xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-200 hover:border-brand-700/20 has-[[data-panel-open]]:border-brand-700/30 has-[[data-panel-open]]:bg-card has-[[data-panel-open]]:shadow-sm has-[[data-panel-open]]:ring-1 has-[[data-panel-open]]:ring-brand-700/10 not-last:border-b"
                  >
                    <AccordionTrigger className="group/trigger items-center gap-4 rounded-xl border-transparent px-5 py-4 text-base font-medium text-ink-900 transition-colors hover:no-underline focus-visible:rounded-xl [&>[data-slot=accordion-trigger-icon]]:hidden">
                      <span className="text-left">{item.q}</span>
                      <ChevronDown
                        aria-hidden
                        className="ml-auto h-4 w-4 shrink-0 text-ink-500 transition-transform duration-300 ease-out group-aria-expanded/trigger:rotate-180 group-aria-expanded/trigger:text-brand-700"
                        strokeWidth={2.2}
                      />
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pt-0 pb-5 text-sm leading-relaxed text-ink-500">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
