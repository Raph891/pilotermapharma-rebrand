import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Download,
  FileText,
  FolderLock,
  GitBranch,
  Plus,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";

const BULLETS = [
  {
    icon: CalendarDays,
    text: "Plannings hebdomadaires par pharmacie : matin / après-midi, contraintes minimum, alertes sous-effectif.",
  },
  {
    icon: ClipboardList,
    text: "Distribution des tâches : qui fait quoi cette semaine — back-office, commandes, MDL, livraisons.",
  },
  {
    icon: FileText,
    text: "Fiches de poste claires par rôle : pharmacien, préparateur, rayonniste, étudiant.",
  },
  {
    icon: GitBranch,
    text: "Organigramme de l'officine, à jour automatiquement quand l'équipe change.",
  },
  {
    icon: FolderLock,
    text: "Coffre-fort par employé : contrat de travail, RIB, carte d'identité, diplômes — conformité prête en cas de contrôle.",
  },
];

const TABS = [
  { label: "Planning", icon: CalendarDays, active: true },
  { label: "Distribution des tâches", icon: ClipboardList },
  { label: "Fiches de poste", icon: FileText },
  { label: "Coffre fort", icon: FolderLock },
  { label: "Organigramme", icon: GitBranch },
];

const DAYS = [
  { name: "Lundi", date: "27/4" },
  { name: "Mardi", date: "28/4" },
  { name: "Mercredi", date: "29/4" },
  { name: "Jeudi", date: "30/4" },
  { name: "Vendredi", date: "1/5" },
  { name: "Samedi", date: "2/5" },
  { name: "Dimanche", date: "3/5", off: true },
];

type GroupKey = "pharmaciens" | "preparateurs" | "rayonnistes" | "etudiants";

const GROUPS: Record<
  GroupKey,
  { label: string; count: number; bg: string; fg: string; ring: string }
> = {
  pharmaciens: {
    label: "Pharmaciens",
    count: 1,
    bg: "bg-warning/10",
    fg: "text-warning",
    ring: "bg-warning",
  },
  preparateurs: {
    label: "Préparateurs",
    count: 2,
    bg: "bg-success/10",
    fg: "text-success",
    ring: "bg-success",
  },
  rayonnistes: {
    label: "Rayonnistes",
    count: 1,
    bg: "bg-red-500/10",
    fg: "text-red-600",
    ring: "bg-red-500",
  },
  etudiants: {
    label: "Étudiants",
    count: 2,
    bg: "bg-purple-100/60",
    fg: "text-purple-700",
    ring: "bg-purple-500",
  },
};

type ShiftKind = "M" | "AM" | "J";
type ShiftCellData = { kind: ShiftKind; range: string } | null;

const SHIFT_M: ShiftCellData = { kind: "M", range: "09h-13h" };
const SHIFT_AM: ShiftCellData = { kind: "AM", range: "14h-19h" };
const SHIFT_J: ShiftCellData = { kind: "J", range: "09h-19h" };

const ROW_DATA: {
  group: GroupKey;
  initials: string;
  name: string;
  hours: string;
  shifts: ShiftCellData[];
  total: string;
  avatarBg: string;
}[] = [
  {
    group: "pharmaciens",
    initials: "ML",
    name: "Marie L.",
    hours: "36h/sem",
    shifts: [SHIFT_J, SHIFT_J, SHIFT_J, SHIFT_J, null, null, null],
    total: "36h",
    avatarBg: "bg-warning",
  },
  {
    group: "preparateurs",
    initials: "JD",
    name: "Julie D.",
    hours: "35h/sem",
    shifts: [SHIFT_J, SHIFT_M, SHIFT_J, SHIFT_AM, SHIFT_M, SHIFT_M, null],
    total: "35h",
    avatarBg: "bg-success",
  },
  {
    group: "preparateurs",
    initials: "TR",
    name: "Thomas R.",
    hours: "11h/sem",
    shifts: [null, SHIFT_AM, null, SHIFT_AM, null, null, null],
    total: "10h",
    avatarBg: "bg-success",
  },
  {
    group: "rayonnistes",
    initials: "KB",
    name: "Karim B.",
    hours: "35h/sem",
    shifts: [SHIFT_J, SHIFT_M, SHIFT_J, SHIFT_M, SHIFT_J, null, null],
    total: "35h",
    avatarBg: "bg-red-500",
  },
  {
    group: "etudiants",
    initials: "LM",
    name: "Léa M.",
    hours: "21h/sem",
    shifts: [null, null, SHIFT_AM, null, SHIFT_AM, SHIFT_J, null],
    total: "19h",
    avatarBg: "bg-purple-500",
  },
];

export function Planning() {
  return (
    <section className="border-b border-border bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            <CalendarDays className="h-3.5 w-3.5" strokeWidth={2.2} />
            Planning &amp; RH
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Tout votre RH dans un seul module.
          </h2>
          <p className="mt-4 text-pretty text-lg text-ink-500">
            Plannings, tâches hebdo, fiches de poste, organigramme et
            coffre-fort par employé&nbsp;: l'équipe est cadrée, les documents
            officiels sont au bon endroit, et vous êtes prêt en cas de contrôle.
          </p>
        </div>

        {/* Bullets */}
        <ul className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2">
          {BULLETS.map((b) => (
            <li
              key={b.text}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700">
                <b.icon className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span className="text-sm text-ink-900">{b.text}</span>
            </li>
          ))}
        </ul>

        {/* Mockup */}
        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-brand-900/5">
          {/* Top bar : sélecteur pharmacie + actions */}
          <div className="flex flex-col items-start justify-between gap-3 border-b border-border bg-white px-5 py-3 sm:flex-row sm:items-center">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2.5 py-1.5 text-xs font-medium text-ink-900">
              Pharmacie du Parc
              <ChevronDown className="h-3 w-3 text-ink-500" />
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md bg-success px-2.5 py-1.5 text-xs font-medium text-white"
              >
                <CalendarDays className="h-3.5 w-3.5" strokeWidth={2.4} />
                Planifier
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-ink-900"
              >
                <Settings className="h-3.5 w-3.5" strokeWidth={2.2} />
                Paramètres
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md bg-purple-600 px-2.5 py-1.5 text-xs font-medium text-white"
              >
                <UserPlus className="h-3.5 w-3.5" strokeWidth={2.4} />
                Employé
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1 border-b border-border bg-white px-5 pt-2">
            {TABS.map((tab) => (
              <button
                key={tab.label}
                type="button"
                className={`-mb-px inline-flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-medium transition-colors ${
                  tab.active
                    ? "border-brand-700 text-brand-700"
                    : "border-transparent text-ink-500 hover:text-ink-900"
                }`}
              >
                <tab.icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Toolbar : navigation semaine + exports */}
          <div className="flex flex-col items-start justify-between gap-3 border-b border-border bg-white px-5 py-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="grid h-7 w-7 place-items-center rounded-md border border-border text-ink-500 hover:text-ink-900"
                aria-label="Semaine précédente"
              >
                <ChevronLeft className="h-3.5 w-3.5" strokeWidth={2.2} />
              </button>
              <button
                type="button"
                className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-ink-900"
              >
                Aujourd'hui
              </button>
              <button
                type="button"
                className="grid h-7 w-7 place-items-center rounded-md border border-border text-ink-500 hover:text-ink-900"
                aria-label="Semaine suivante"
              >
                <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.2} />
              </button>
            </div>
            <div className="text-sm font-semibold text-ink-900">
              Semaine 18 — du 27 avril au 3 mai 2026
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-[11px] font-medium text-ink-900 hover:bg-muted"
              >
                <Download className="h-3 w-3" strokeWidth={2.2} />
                PDF Semaine
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-[11px] font-medium text-ink-900 hover:bg-muted"
              >
                <Download className="h-3 w-3" strokeWidth={2.2} />
                PDF Mois
              </button>
            </div>
          </div>

          {/* Tableau planning */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-xs">
              <thead>
                <tr className="bg-muted/40 text-left text-ink-500">
                  <th className="sticky left-0 z-10 w-[180px] bg-muted/40 px-4 py-3 font-medium">
                    Employé
                  </th>
                  {DAYS.map((d) => (
                    <th
                      key={d.name}
                      className={`px-2 py-3 text-center font-medium ${
                        d.off ? "text-ink-500/60" : "text-ink-900"
                      }`}
                    >
                      <div>{d.name}</div>
                      <div className="font-mono text-[10px] tabular-nums text-ink-500">
                        {d.date}
                      </div>
                    </th>
                  ))}
                  <th className="px-3 py-3 text-right font-medium">Total</th>
                </tr>
                {/* Ligne contraintes */}
                <tr className="border-y border-border bg-muted/20 text-[11px] text-ink-500">
                  <td className="sticky left-0 z-10 bg-muted/20 px-4 py-2">
                    <div className="text-brand-700">Matin (min: 2)</div>
                    <div className="text-brand-700">Après-midi (min: 3)</div>
                  </td>
                  {DAYS.map((d, i) => (
                    <td
                      key={i}
                      className="px-2 py-2 text-center font-mono tabular-nums text-red-600"
                    >
                      <div>0</div>
                      <div>0</div>
                    </td>
                  ))}
                  <td />
                </tr>
              </thead>
              <tbody>
                {(Object.keys(GROUPS) as GroupKey[]).map((key) => {
                  const group = GROUPS[key];
                  const rows = ROW_DATA.filter((r) => r.group === key);
                  return (
                    <>
                      {/* Header groupe */}
                      <tr key={`g-${key}`} className={`${group.bg}`}>
                        <td
                          colSpan={9}
                          className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-wider ${group.fg}`}
                        >
                          <span className="inline-flex items-center gap-2">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${group.ring}`}
                            />
                            {group.label}{" "}
                            <span className="font-mono tabular-nums">
                              ({group.count})
                            </span>
                          </span>
                        </td>
                      </tr>
                      {/* Lignes employés */}
                      {rows.map((r) => (
                        <tr
                          key={r.name}
                          className="border-b border-border last:border-0"
                        >
                          <td className="sticky left-0 z-10 w-[180px] bg-card px-4 py-3">
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold text-white ${r.avatarBg}`}
                              >
                                {r.initials}
                              </span>
                              <div className="min-w-0">
                                <div className="truncate text-[13px] font-semibold text-ink-900">
                                  {r.name}
                                </div>
                                <div className="font-mono text-[10px] tabular-nums text-ink-500">
                                  {r.hours}
                                </div>
                              </div>
                            </div>
                          </td>
                          {r.shifts.map((s, i) => (
                            <td
                              key={i}
                              className="border-l border-border/60 px-1.5 py-2 align-middle"
                            >
                              <ShiftCell shift={s} />
                            </td>
                          ))}
                          <td className="px-3 py-2 text-right font-mono text-[11px] font-semibold tabular-nums text-ink-900">
                            {r.total}
                          </td>
                        </tr>
                      ))}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer : récap équipe */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-muted/30 px-5 py-3 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" strokeWidth={2.2} />
              <span className="font-mono tabular-nums text-ink-900">6</span>{" "}
              employés ·{" "}
              <span className="font-mono tabular-nums text-ink-900">135h</span>{" "}
              planifiées cette semaine
            </span>
            <span className="inline-flex items-center gap-1.5 text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Contraintes respectées
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShiftCell({ shift }: { shift: ShiftCellData }) {
  if (!shift) {
    return (
      <button
        type="button"
        className="grid h-9 w-full place-items-center rounded-md border border-dashed border-border bg-muted/30 text-ink-500/60 hover:border-brand-700/50 hover:text-brand-700"
        aria-label="Ajouter un créneau"
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={2.2} />
      </button>
    );
  }
  const clsMap: Record<ShiftKind, string> = {
    M: "bg-brand-50 text-brand-700 border-brand-100",
    AM: "bg-purple-50 text-purple-700 border-purple-100",
    J: "bg-brand-700 text-white border-brand-700",
  };
  return (
    <div
      className={`grid h-9 place-items-center rounded-md border text-[10px] font-semibold tabular-nums ${clsMap[shift.kind]}`}
    >
      {shift.range}
    </div>
  );
}
