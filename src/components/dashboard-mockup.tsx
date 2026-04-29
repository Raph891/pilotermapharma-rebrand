import {
  BarChart3,
  Boxes,
  Briefcase,
  ChevronDown,
  FolderLock,
  LayoutGrid,
  Pill,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-brand-900/10">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border bg-white px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-brand-700 text-white">
            <Pill className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-ink-900">
            Piloter<span className="text-brand-700">MaPharma</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-md bg-warning/15 px-2.5 py-1 text-[11px] font-medium text-warning sm:inline-flex">
            <FolderLock className="h-3 w-3" strokeWidth={2.2} />
            Coffre-fort
          </span>
          <span className="text-[11px] text-ink-500">Administrateur</span>
        </div>
      </div>

      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 hidden border-r border-border bg-muted/40 p-3 md:block">
          <SidebarGroup label="Pilotage" defaultOpen>
            <SidebarItem icon={LayoutGrid} label="Tableau de bord" active />
            <SidebarItem icon={Target} label="Objectifs" />
            <SidebarItem icon={Boxes} label="Stock" />
          </SidebarGroup>
          <SidebarGroup label="Activité & Performance">
            <SidebarItem icon={BarChart3} label="Données d'activité" muted />
          </SidebarGroup>
          <SidebarGroup label="Ressources humaines">
            <SidebarItem icon={Users} label="Masse salariale" muted />
          </SidebarGroup>
          <SidebarGroup label="Finance">
            <SidebarItem icon={Briefcase} label="Bilans" muted />
          </SidebarGroup>
          <SidebarGroup label="Conformité">
            <SidebarItem icon={ShieldCheck} label="Coffre-fort" muted />
          </SidebarGroup>
        </aside>

        {/* Content */}
        <div className="col-span-12 space-y-4 p-4 md:col-span-9">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[15px] font-semibold tracking-tight text-ink-900">
                Tableau de bord
              </div>
              <div className="text-[11px] text-ink-500">Comparaison 2026 vs 2025</div>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="inline-flex items-center gap-1 rounded-md border border-border bg-white px-2 py-1 text-[11px] text-ink-900">
                Toutes les pharmacies
                <ChevronDown className="h-3 w-3 text-ink-500" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-brand-700/30 bg-brand-50 px-2 py-1 text-[11px] font-medium text-brand-700">
                2026
                <ChevronDown className="h-3 w-3" />
              </span>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            <KpiCard
              label="CA TTC 2026"
              value="3 248 540 €"
              prev="2025 : 2 994 130 €"
              delta="+8,5 %"
              positive
              accent="brand"
            />
            <KpiCard
              label="Marge 2026"
              value="781 250 €"
              prev="2025 : 695 420 €"
              delta="+12,3 %"
              positive
              accent="success"
            />
            <KpiCard
              label="Clients 2026"
              value="92 480"
              prev="2025 : 84 215"
              delta="+9,8 %"
              positive
              accent="brand"
            />
            <KpiCard
              label="Taux de marge"
              value="24,05 %"
              prev="2025 : 23,22 %"
              delta="+0,8 pt"
              positive
              accent="warning"
            />
          </div>

          {/* Chart */}
          <div className="rounded-xl border border-border bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-ink-500">
                  CA TTC — 2026 vs 2025
                </div>
                <div className="text-sm font-semibold text-ink-900">12 derniers mois</div>
              </div>
              <span className="rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success">
                <TrendingUp className="mr-0.5 inline h-3 w-3" strokeWidth={2.5} />
                +8,5 % vs N-1
              </span>
            </div>
            <CaChart />
            <div className="mt-2 flex justify-between text-[10px] font-mono text-ink-500 tabular-nums">
              {["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"].map(
                (m) => (
                  <span key={m}>{m}</span>
                ),
              )}
            </div>
            <div className="mt-3 flex items-center gap-4 text-[11px] text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-0.5 w-3 bg-brand-700" />
                2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-0.5 w-3 border-t border-dashed border-ink-500" />
                2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarGroup({
  label,
  children,
  defaultOpen,
}: {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <div className="mb-1.5">
      <div className="flex items-center justify-between px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
        <span>{label}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform ${defaultOpen ? "" : "-rotate-90"}`}
        />
      </div>
      {defaultOpen && <div className="space-y-0.5">{children}</div>}
    </div>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  active,
  muted,
}: {
  icon: typeof LayoutGrid;
  label: string;
  active?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] ${
        active
          ? "bg-brand-700 text-white"
          : muted
            ? "text-ink-500"
            : "text-ink-900/80"
      }`}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      <span>{label}</span>
    </div>
  );
}

function KpiCard({
  label,
  value,
  prev,
  delta,
  positive,
  accent,
}: {
  label: string;
  value: string;
  prev: string;
  delta: string;
  positive: boolean;
  accent: "brand" | "success" | "warning";
}) {
  const accentBg =
    accent === "brand" ? "bg-brand-50" : accent === "success" ? "bg-success/10" : "bg-warning/15";
  const accentFg =
    accent === "brand" ? "text-brand-700" : accent === "success" ? "text-success" : "text-warning";

  return (
    <div className="rounded-xl border border-border bg-white p-3.5">
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <div className="text-[11px] uppercase tracking-wider text-ink-500">{label}</div>
          <div className="mt-1 truncate font-mono text-base font-semibold tabular-nums text-ink-900">
            {value}
          </div>
        </div>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-md ${accentBg} ${accentFg}`}
        >
          <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.4} />
        </span>
      </div>
      <div className="mt-1.5 flex items-center justify-between text-[10px]">
        <span className="text-ink-500">{prev}</span>
        <span
          className={`font-medium tabular-nums ${
            positive ? "text-success" : "text-rose-600"
          }`}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}

function CaChart() {
  // 2026 (solid) + 2025 (dashed)
  const y26 = [42, 48, 45, 52, 58, 55, 62, 68, 64, 72, 78, 84];
  const y25 = [38, 41, 40, 44, 49, 47, 52, 56, 54, 60, 64, 70];
  const w = 600;
  const h = 160;
  const pad = 8;
  const all = [...y26, ...y25];
  const max = Math.max(...all);
  const min = Math.min(...all);
  const range = max - min || 1;
  const step = (w - pad * 2) / (y26.length - 1);

  const toCoords = (arr: number[]) =>
    arr.map((v, i) => {
      const x = pad + i * step;
      const y = pad + (1 - (v - min) / range) * (h - pad * 2);
      return [x, y] as const;
    });

  const c26 = toCoords(y26);
  const c25 = toCoords(y25);

  const path = (coords: ReadonlyArray<readonly [number, number]>) =>
    coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

  const area = path(c26) + ` L${c26[c26.length - 1][0].toFixed(1)},${h - pad} L${pad},${h - pad} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mt-3 h-36 w-full"
      preserveAspectRatio="none"
      role="img"
      aria-label="Évolution du chiffre d'affaires sur 12 mois"
    >
      <defs>
        <linearGradient id="caGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((t) => (
        <line
          key={t}
          x1={pad}
          x2={w - pad}
          y1={pad + t * (h - pad * 2)}
          y2={pad + t * (h - pad * 2)}
          stroke="#E2E8F0"
          strokeDasharray="2 4"
          strokeWidth="1"
        />
      ))}
      <path d={area} fill="url(#caGrad)" />
      <path
        d={path(c25)}
        fill="none"
        stroke="#94A3B8"
        strokeWidth="1.6"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <path
        d={path(c26)}
        fill="none"
        stroke="#1E3A8A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {c26.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === c26.length - 1 ? 3.5 : 2}
          fill={i === c26.length - 1 ? "#1E3A8A" : "#FFFFFF"}
          stroke="#1E3A8A"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
