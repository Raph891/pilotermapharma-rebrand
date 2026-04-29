"use client";

import {
  CalendarDays,
  ClipboardCheck,
  FolderLock,
  Gem,
  Target,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  useCallback,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactElement,
} from "react";
import { ChallengesMockup } from "@/components/modules/challenges-mockup";
import { CoffreRhMockup } from "@/components/modules/coffre-rh-mockup";
import { ConformiteMockup } from "@/components/modules/conformite-mockup";
import { FinancesMockup } from "@/components/modules/finances-mockup";
import { MdlMockup } from "@/components/modules/mdl-mockup-card";
import { ObjectivesMockup } from "@/components/modules/objectives-mockup";
import { PayrollMockup } from "@/components/modules/payroll-mockup";
import { PlanningMockup } from "@/components/modules/planning-mockup";

type ModuleTab = {
  id: string;
  label: string;
  caption: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  Mockup: () => ReactElement;
};

const MODULES: ModuleTab[] = [
  {
    id: "objectives",
    label: "Objectifs",
    caption: "Cibles annuelles, suivies au mois.",
    icon: Target,
    title: "Fixez vos objectifs au bilan, tenez le cap toute l'année.",
    description:
      "Au moment du bilan avec votre expert-comptable, vous définissez vos cibles — croissance, frais de personnel, stock — et vous les suivez ensuite mois par mois.",
    bullets: [
      "Cibles fixées au bilan : croissance CA, ratio masse salariale, ratio stock.",
      "Trajectoire mois par mois, contre objectif et contre N-1.",
      "Annotez et commentez vos objectifs : décisions traçables toute l'année.",
    ],
    Mockup: ObjectivesMockup,
  },
  {
    id: "payroll",
    label: "Masse salariale",
    caption: "Le poste qui pèse le plus, sous contrôle.",
    icon: Users,
    title: "Le poste qui pèse le plus, enfin sous contrôle.",
    description:
      "Suivez le ratio masse salariale / CA en direct et simulez l'impact de chaque embauche avant de signer le contrat.",
    bullets: [
      "Ratio masse salariale / CA en temps réel, comparé au seuil cible.",
      "Coût horaire par poste, par jour, par mois — détecté automatiquement.",
      "Modélisez un recrutement et voyez l'impact futur sur la masse.",
    ],
    Mockup: PayrollMockup,
  },
  {
    id: "planning",
    label: "Planning & RH",
    caption: "Plannings, tâches, fiches de poste.",
    icon: CalendarDays,
    title: "Tout votre RH dans un seul module.",
    description:
      "Plannings, tâches hebdo, fiches de poste, organigramme et coffre-fort par employé : l'équipe est cadrée et vous êtes prêt en cas de contrôle.",
    bullets: [
      "Plannings hebdo par pharmacie : matin / après-midi, alertes sous-effectif.",
      "Distribution des tâches : qui fait quoi cette semaine.",
      "Fiches de poste, organigramme à jour, coffre-fort par employé.",
    ],
    Mockup: PlanningMockup,
  },
  {
    id: "finances",
    label: "Finances",
    caption: "Crédits, leasings, contrats, charges.",
    icon: Wallet,
    title: "Tous vos engagements financiers, en un coup d'œil.",
    description:
      "Crédits, leasings, contrats, prélèvements fixes : importez vos PDF et l'outil reconstitue automatiquement la photographie mensuelle de vos sorties.",
    bullets: [
      "Import PDF des échéanciers de prêt et contrats.",
      "Total mensuel consolidé par pharmacie.",
      "Alertes auto-renouvellement des contrats.",
    ],
    Mockup: FinancesMockup,
  },
  {
    id: "mdl",
    label: "Produit cher MDL",
    caption: "Tranches de prix, suivi N-1.",
    icon: Gem,
    title: "Le suivi MDL des produits chers, mois par mois.",
    description:
      "Cassez votre activité par tranches de prix, comparez à N-1 et visualisez exactement ce qui pèse dans votre marge brute.",
    bullets: [
      "Découpage par tranches de prix : 0–22,90 €, 22,90–150 €, 150–450 €, 450–1 500 €, +1 500 €.",
      "Comparaison automatique avec N-1, mois par mois.",
      "Total annuel produit cher mis en évidence dans la marge brute.",
    ],
    Mockup: MdlMockup,
  },
  {
    id: "challenges",
    label: "Challenges labo",
    caption: "Motivez l'équipe en deux minutes.",
    icon: Trophy,
    title: "Motivez l'équipe avec des challenges qui marchent.",
    description:
      "Lancez un challenge avec un laboratoire (Pileje, Bioderma, La Roche-Posay, Avène…) en deux minutes. L'équipe joue ensemble et la prime tombe automatiquement.",
    bullets: [
      "Configurez prix par boîte, minimum par personne et total équipe en quelques clics.",
      "Suivez en direct le classement de chaque collaborateur.",
      "Cumulez les primes labo et validez la prime mensuelle d'un seul geste.",
    ],
    Mockup: ChallengesMockup,
  },
  {
    id: "coffre",
    label: "Coffre-fort RH",
    caption: "Documents officiels par employé.",
    icon: FolderLock,
    title: "Tous les documents de l'équipe, sécurisés et à portée.",
    description:
      "Plus besoin de fouiller dans 5 dossiers Drive. Le coffre-fort RH centralise, par employé, tous les documents officiels — accessibles en un clic.",
    bullets: [
      "5 catégories par employé : contrat, diplôme, carte d'identité, RIB, autre.",
      "Vue par employé : tous ses documents en 1 clic, plus de chasse aux PDF.",
      "Accès par profil : titulaire, adjoint, RH externe — chacun voit ce qu'il doit voir.",
    ],
    Mockup: CoffreRhMockup,
  },
  {
    id: "conformite",
    label: "Conformité ARS",
    caption: "155 points sur 15 rubriques.",
    icon: ClipboardCheck,
    title: "Soyez prêt pour le contrôle ARS, sans le redouter.",
    description:
      "Audit interne structuré en 15 rubriques et 155 points de contrôle : exercice pharmaceutique, circuit du médicament, stupéfiants, froid, personnel, hygiène, incendie, affichage.",
    bullets: [
      "155 points de contrôle structurés sur 15 rubriques officielles.",
      "Cochez à votre rythme, sauvegardez votre progression — l'équipe peut contribuer.",
      "Rubriques majeures (stupéfiants, chaîne du froid) signalées en priorité.",
    ],
    Mockup: ConformiteMockup,
  },
];

export function ModulesTabs() {
  const [activeId, setActiveId] = useState<string>(MODULES[0].id);
  const active = MODULES.find((m) => m.id === activeId) ?? MODULES[0];
  const ActiveMockup = active.Mockup;
  const reducedMotion = useReducedMotion();
  const baseId = useId();

  // Refs for focus management on keyboard navigation.
  const desktopTabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const mobileTabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const focusTab = useCallback(
    (id: string, orientation: "vertical" | "horizontal") => {
      setActiveId(id);
      const map =
        orientation === "vertical" ? desktopTabRefs.current : mobileTabRefs.current;
      const node = map[id];
      if (node) {
        // Defer to after state flush so tabindex updates first.
        requestAnimationFrame(() => node.focus());
      }
    },
    [],
  );

  const handleKeyDown = useCallback(
    (
      event: KeyboardEvent<HTMLButtonElement>,
      orientation: "vertical" | "horizontal",
    ) => {
      const next = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      const prev = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";

      if (
        event.key !== next &&
        event.key !== prev &&
        event.key !== "Home" &&
        event.key !== "End"
      ) {
        return;
      }
      event.preventDefault();
      const idx = MODULES.findIndex((m) => m.id === activeId);
      let target = idx;
      if (event.key === next) target = (idx + 1) % MODULES.length;
      else if (event.key === prev)
        target = (idx - 1 + MODULES.length) % MODULES.length;
      else if (event.key === "Home") target = 0;
      else if (event.key === "End") target = MODULES.length - 1;
      focusTab(MODULES[target].id, orientation);
    },
    [activeId, focusTab],
  );

  // Animation tunings — collapsed when reduced motion is preferred.
  const indicatorTransition = reducedMotion
    ? { duration: 0.15 }
    : { type: "spring" as const, stiffness: 280, damping: 30 };

  const paneInitial = reducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 12, scale: 0.985 };
  const paneAnimate = reducedMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, scale: 1 };
  const paneExit = reducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: -8, scale: 0.99 };
  const paneTransition = reducedMotion
    ? { duration: 0.15 }
    : { duration: 0.32, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  const stagger = (i: number) => ({
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: reducedMotion
      ? { duration: 0.15 }
      : {
          duration: 0.4,
          delay: 0.04 + i * 0.06,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
  });

  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-24">
      {/* Dot/grid ambient pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            Modules
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium tracking-tight text-ink-900 sm:text-5xl">
            Tous vos modules dans un seul outil.
          </h2>
          <p className="mt-4 text-pretty text-lg text-ink-500">
            Pilotage, RH, conformité, coffre-fort&nbsp;: changez de module sans
            changer d'écran. Choisissez ce que vous voulez voir, le reste est
            rangé.
          </p>
        </div>

        {/* Mobile/tablet : horizontal scrollable strip */}
        <div className="mt-10 lg:hidden">
          <div
            className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2"
            role="tablist"
            aria-orientation="horizontal"
            aria-label="Modules"
          >
            {MODULES.map((m) => {
              const isActive = m.id === activeId;
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  ref={(el) => {
                    mobileTabRefs.current[m.id] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-mobile-tab-${m.id}`}
                  aria-selected={isActive}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(m.id)}
                  onKeyDown={(e) => handleKeyDown(e, "horizontal")}
                  className={`relative inline-flex shrink-0 snap-start items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-tight transition-colors ${
                    isActive
                      ? "border-brand-700 bg-brand-50 text-brand-700"
                      : "border-border bg-card text-ink-900 hover:bg-muted"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                  {m.label}
                  {isActive && (
                    <motion.span
                      aria-hidden
                      layoutId="active-module-tab-mobile"
                      className="pointer-events-none absolute inset-x-2 -bottom-[3px] h-[2px] rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#0A1F44] shadow-[0_0_10px_rgba(30,58,138,0.45)]"
                      transition={indicatorTransition}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid : tabs nav (lg) + active pane */}
        <div className="mt-6 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          {/* Tab nav (lg+ only — vertical) */}
          <div className="hidden lg:col-span-4 lg:block">
            <div
              className="relative flex flex-col gap-1"
              role="tablist"
              aria-orientation="vertical"
              aria-label="Modules"
            >
              {MODULES.map((m) => {
                const isActive = m.id === activeId;
                const Icon = m.icon;
                return (
                  <button
                    key={m.id}
                    ref={(el) => {
                      desktopTabRefs.current[m.id] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`${baseId}-tab-${m.id}`}
                    aria-selected={isActive}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(m.id)}
                    onKeyDown={(e) => handleKeyDown(e, "vertical")}
                    className={`group relative flex items-start gap-3 rounded-lg pl-4 pr-4 py-3 text-left transition-all duration-200 will-change-transform ${
                      isActive
                        ? "bg-gradient-to-r from-brand-50 to-transparent scale-[1.01]"
                        : "hover:bg-muted/60 hover:translate-x-0.5"
                    }`}
                  >
                    {/* Sliding active indicator */}
                    {isActive && (
                      <motion.span
                        aria-hidden
                        layoutId="active-module-tab"
                        className="pointer-events-none absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#0A1F44] shadow-[0_0_12px_rgba(30,58,138,0.4)]"
                        transition={indicatorTransition}
                      />
                    )}

                    <span
                      className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md transition-colors duration-200 ${
                        isActive
                          ? "bg-brand-700 text-white shadow-md shadow-brand-700/30"
                          : "bg-muted text-ink-500"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-sm font-semibold tracking-tight transition-colors duration-200 ${
                          isActive ? "text-brand-700" : "text-ink-900"
                        }`}
                      >
                        {m.label}
                      </span>
                      <span className="mt-0.5 block text-[11.5px] tracking-tight text-ink-500">
                        {m.caption}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active pane */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                role="tabpanel"
                id={`${baseId}-panel`}
                aria-labelledby={`${baseId}-tab-${active.id}`}
                tabIndex={0}
                initial={paneInitial}
                animate={paneAnimate}
                exit={paneExit}
                transition={paneTransition}
                className="focus:outline-none"
              >
                {/* Header */}
                <div>
                  <motion.h3
                    {...stagger(0)}
                    className="text-balance text-2xl font-semibold tracking-tight text-ink-900"
                  >
                    <span aria-hidden className="mr-2 text-brand-700">
                      •
                    </span>
                    {active.title}
                  </motion.h3>
                  <motion.p
                    {...stagger(1)}
                    className="mt-2 text-pretty text-sm text-ink-500 sm:text-base"
                  >
                    {active.description}
                  </motion.p>
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-2.5 text-sm text-ink-900">
                  {active.bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      {...stagger(2 + i)}
                      className="flex items-start gap-3"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700"
                      />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Mockup — premium card chrome */}
                <div className="relative mt-8">
                  {/* Ambient glow orb behind the card */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-8 -inset-y-6 rounded-[2.5rem] bg-brand-700/10 blur-3xl"
                  />

                  {/* Gradient border wrapper */}
                  <div className="relative rounded-3xl bg-gradient-to-br from-brand-100 via-border to-border p-px shadow-[0_24px_60px_-20px_rgba(15,23,42,0.18),0_8px_24px_-12px_rgba(15,23,42,0.10)]">
                    <div className="relative overflow-hidden rounded-3xl bg-card">
                      {/* Radial spotlight at top */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-48"
                        style={{
                          background:
                            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(30,58,138,0.08), transparent 70%)",
                        }}
                      />
                      <div className="relative">
                        <ActiveMockup />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
