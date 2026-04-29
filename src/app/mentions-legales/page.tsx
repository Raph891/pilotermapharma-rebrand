import type { Metadata } from "next";
import { SiteNav } from "@/components/sections/site-nav";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata: Metadata = {
  title: "Mentions légales — PiloterMaPharma",
  description:
    "Mentions légales de PiloterMaPharma : éditeur, hébergeur, contact et informations réglementaires.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <SiteNav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-ink-900 leading-relaxed">
        <h1 className="text-4xl font-semibold tracking-tight">Mentions légales</h1>
        <p className="mt-4 text-ink-700">
          Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du
          21 juin 2004 pour la Confiance dans l&apos;économie numérique (LCEN), il est porté
          à la connaissance des utilisateurs du site PiloterMaPharma les présentes mentions
          légales.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Éditeur du site</h2>
          <p className="mt-3">
            Le site <strong>pilotermapharma.fr</strong> est édité par&nbsp;:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Raison sociale&nbsp;: <strong>PiloterMaPharma SAS</strong> [À COMPLÉTER]</li>
            <li>Forme juridique&nbsp;: SAS au capital de [À COMPLÉTER] €</li>
            <li>Siège social&nbsp;: [À COMPLÉTER]</li>
            <li>SIRET&nbsp;: [À COMPLÉTER]</li>
            <li>RCS&nbsp;: [À COMPLÉTER]</li>
            <li>Numéro de TVA intracommunautaire&nbsp;: [À COMPLÉTER]</li>
            <li>Adresse e-mail&nbsp;: contact@pilotermapharma.fr</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Directeur de la publication</h2>
          <p className="mt-3">
            Le directeur de la publication est&nbsp;: <strong>[À COMPLÉTER]</strong>, en
            sa qualité de représentant légal de PiloterMaPharma SAS.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Hébergeur</h2>
          <p className="mt-3">
            Le site est hébergé par&nbsp;:
          </p>
          <address className="mt-3 not-italic">
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Avenue #4133
            <br />
            Covina, CA 91723
            <br />
            États-Unis
            <br />
            <a href="https://vercel.com" className="underline">vercel.com</a>
          </address>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Propriété intellectuelle</h2>
          <p className="mt-3">
            L&apos;ensemble des éléments présents sur le site (textes, images, logos,
            marques, code source, charte graphique) est protégé par le droit d&apos;auteur
            et le droit des marques. Toute reproduction, représentation ou diffusion, totale
            ou partielle, sans autorisation écrite préalable de PiloterMaPharma SAS est
            interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Contact</h2>
          <p className="mt-3">
            Pour toute question relative au site ou à son contenu, vous pouvez nous écrire
            à&nbsp;
            <a href="mailto:contact@pilotermapharma.fr" className="underline">
              contact@pilotermapharma.fr
            </a>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
