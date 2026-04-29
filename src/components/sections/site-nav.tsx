import Link from "next/link";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#integrations", label: "Intégrations" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#avis", label: "Avis" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Accueil PiloterMaPharma">
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-ink-900/80 transition-colors hover:bg-muted hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="https://app.pilotermapharma.fr"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "hidden h-9 px-3 text-sm sm:inline-flex",
            )}
          >
            Connexion
          </Link>
          <Link
            href="#demo"
            className={cn(buttonVariants({ size: "sm" }), "h-9 px-3.5 text-sm")}
          >
            Demander une démo
          </Link>
        </div>
      </div>
    </header>
  );
}
