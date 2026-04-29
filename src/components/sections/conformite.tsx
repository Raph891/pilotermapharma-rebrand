import {
  AlertTriangle,
  Briefcase,
  Building2,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Flame,
  FlaskConical,
  Lock,
  Pill,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Thermometer,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = {
  icon: LucideIcon;
  title: string;
  total: number;
  done: number;
  iconBg: string;
  iconFg: string;
  borderAccent: string;
  barColor: string;
  major?: boolean;
};

const CATEGORIES: Category[] = [
  {
    icon: Building2,
    title: "Exercice Pharmaceutique - ARS",
    total: 15,
    done: 12,
    iconBg: "bg-brand-50",
    iconFg: "text-brand-700",
    borderAccent: "bg-brand-700",
    barColor: "bg-brand-700",
  },
  {
    icon: Pill,
    title: "Circuit du Médicament",
    total: 12,
    done: 8,
    iconBg: "bg-success/10",
    iconFg: "text-success",
    borderAccent: "bg-success",
    barColor: "bg-success",
  },
  {
    icon: AlertTriangle,
    title: "Stupéfiants & Assimilés",
    total: 10,
    done: 10,
    iconBg: "bg-red-100/70",
    iconFg: "text-red-700",
    borderAccent: "bg-red-600",
    barColor: "bg-red-600",
    major: true,
  },
  {
    icon: AlertTriangle,
    title: "Alertes Sanitaires - Rappels/Retraits",
    total: 9,
    done: 5,
    iconBg: "bg-warning/15",
    iconFg: "text-warning",
    borderAccent: "bg-warning",
    barColor: "bg-warning",
  },
  {
    icon: Thermometer,
    title: "Chaîne du Froid (2-8°C)",
    total: 9,
    done: 9,
    iconBg: "bg-cyan-100/70",
    iconFg: "text-cyan-700",
    borderAccent: "bg-cyan-500",
    barColor: "bg-cyan-500",
  },
  {
    icon: FlaskConical,
    title: "Préparations",
    total: 9,
    done: 4,
    iconBg: "bg-purple-100/60",
    iconFg: "text-purple-700",
    borderAccent: "bg-purple-500",
    barColor: "bg-purple-500",
  },
];

const REMAINING_CATEGORIES = [
  { icon: Stethoscope, label: "Dispositifs Médicaux & Actes" },
  { icon: Users, label: "Personnel" },
  { icon: Briefcase, label: "Inspection du Travail" },
  { icon: ShieldCheck, label: "Santé & Sécurité au Travail" },
  { icon: Flame, label: "Sécurité Incendie - ERP" },
  { icon: Zap, label: "Électricité & Technique" },
  { icon: ShoppingCart, label: "DGCCRF - Consommateur" },
  { icon: Sparkles, label: "Hygiène Générale" },
  { icon: FileText, label: "Affichages Obligatoires" },
];

const BULLETS = [
  {
    icon: ShieldCheck,
    text: "155 points de contrôle structurés sur 15 rubriques officielles : ARS, DGCCRF, inspection du travail, ERP.",
  },
  {
    icon: ClipboardCheck,
    text: "Cochez à votre rythme, sauvegardez votre progression — vos collaborateurs peuvent contribuer.",
  },
  {
    icon: AlertTriangle,
    text: "Les rubriques majeures (stupéfiants, chaîne du froid) sont signalées en priorité.",
  },
];

export function Conformite() {
  return (
    <section className="border-b border-border bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Texte */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              <ClipboardCheck className="h-3.5 w-3.5" strokeWidth={2.2} />
              Conformité ARS
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Soyez prêt pour le contrôle ARS, sans le redouter.
            </h2>
            <p className="mt-4 text-pretty text-lg text-ink-500">
              L'inspection peut tomber n'importe quand. PiloterMaPharma intègre
              un audit interne structuré en 15 rubriques et 155 points de
              contrôle — couvrant l'exercice pharmaceutique, le circuit du
              médicament, les stupéfiants, le froid, le personnel, l'hygiène,
              l'incendie, l'affichage. Vous savez à tout moment où vous en
              êtes.
            </p>

            <ul className="mt-7 space-y-3.5 text-sm text-ink-900">
              {BULLETS.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700">
                    <b.icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-1.5 text-xs text-ink-500">
              <Lock className="h-3.5 w-3.5" strokeWidth={2.2} />
              Données conservées chez vous · audit interne uniquement
            </div>
          </div>

          {/* Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">
                    <ClipboardCheck className="h-4.5 w-4.5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      Contrôle Conformité
                    </div>
                    <div className="text-[11px] text-ink-500">
                      Vérification complète de la pharmacie
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-900"
                >
                  Sauvegarder
                </button>
              </div>

              {/* Progression globale */}
              <div className="border-b border-border bg-muted/40 px-5 py-4">
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-sm font-semibold text-ink-900">
                        Progression globale
                      </div>
                      <div className="mt-0.5 text-[11px] text-ink-500">
                        <span className="font-mono tabular-nums text-ink-900">
                          99
                        </span>{" "}
                        /{" "}
                        <span className="font-mono tabular-nums text-ink-900">
                          155
                        </span>{" "}
                        points vérifiés
                      </div>
                    </div>
                    <span className="font-mono text-3xl font-semibold tabular-nums text-brand-700">
                      64 %
                    </span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-brand-700"
                      style={{ width: "64%" }}
                    />
                  </div>
                </div>
              </div>

              {/* Liste catégories */}
              <ul className="divide-y divide-border">
                {CATEGORIES.map((cat) => {
                  const pct = Math.round((cat.done / cat.total) * 100);
                  return (
                    <li
                      key={cat.title}
                      className="flex items-center gap-3 px-5 py-3"
                    >
                      <span
                        aria-hidden
                        className={`h-9 w-1 shrink-0 rounded-full ${cat.borderAccent}`}
                      />

                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${cat.iconBg} ${cat.iconFg}`}
                      >
                        <cat.icon className="h-4 w-4" strokeWidth={2.2} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-sm font-semibold text-ink-900">
                            {cat.title}
                          </span>
                          {cat.major ? (
                            <span className="shrink-0 rounded-full bg-red-100/80 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-red-700">
                              Majeur
                            </span>
                          ) : null}
                        </div>
                        <div className="mt-0.5 text-[11px] text-ink-500">
                          <span className="font-mono tabular-nums">
                            {cat.done}
                          </span>
                          /
                          <span className="font-mono tabular-nums">
                            {cat.total}
                          </span>{" "}
                          ·{" "}
                          <span className="font-mono tabular-nums">{pct}</span>{" "}
                          %
                        </div>
                      </div>

                      <div className="hidden w-24 shrink-0 sm:block">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className={`h-full rounded-full ${cat.barColor}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>

                      <ChevronDown
                        className="h-4 w-4 shrink-0 text-ink-500"
                        strokeWidth={2.2}
                      />
                    </li>
                  );
                })}
              </ul>

              {/* + 9 autres rubriques */}
              <div className="border-t border-border bg-muted/40 px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1.5">
                    {REMAINING_CATEGORIES.slice(0, 5).map((r) => (
                      <span
                        key={r.label}
                        className="grid h-7 w-7 place-items-center rounded-md border border-border bg-card text-ink-500"
                        title={r.label}
                      >
                        <r.icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-ink-500">
                    +{" "}
                    <span className="font-mono tabular-nums text-ink-900">
                      9
                    </span>{" "}
                    autres rubriques (Personnel, Inspection du travail, ERP,
                    DGCCRF, Hygiène, Affichages…)
                  </span>
                  <ChevronDown
                    className="ml-auto h-4 w-4 shrink-0 text-ink-500"
                    strokeWidth={2.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
