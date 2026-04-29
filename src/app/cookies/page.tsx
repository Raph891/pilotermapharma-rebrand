import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata: Metadata = {
  title: "Politique cookies — PiloterMaPharma",
  description:
    "Politique relative aux cookies utilisés sur PiloterMaPharma : cookies essentiels, mesure d'audience anonymisée, et options pour les refuser.",
};

export default function CookiesPage() {
  return (
    <>
      <SiteNav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-ink-900 leading-relaxed">
        <h1 className="text-4xl font-semibold tracking-tight">Politique cookies</h1>
        <p className="mt-4 text-ink-700">
          La présente politique précise les cookies et traceurs utilisés sur le site
          PiloterMaPharma, leur finalité, leur durée et la manière de les refuser.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Qu&apos;est-ce qu&apos;un cookie&nbsp;?</h2>
          <p className="mt-3">
            Un <strong>cookie</strong> est un petit fichier déposé sur votre terminal
            (ordinateur, tablette, smartphone) lors de la visite d&apos;un site web. Il
            permet notamment au site de mémoriser des informations relatives à votre
            navigation, à vos préférences ou à votre session, pour une durée déterminée.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Cookies utilisés</h2>
          <p className="mt-3">
            PiloterMaPharma utilise uniquement des cookies <strong>strictement
            nécessaires</strong> au bon fonctionnement du site, ainsi qu&apos;un outil
            de <strong>mesure d&apos;audience anonymisée</strong> (Plausible Analytics
            et/ou Vercel Web Analytics, selon configuration), exempté de consentement
            préalable car conforme aux recommandations de la CNIL.
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>
              <strong>Cookies essentiels</strong>&nbsp;: session, authentification,
              sécurité, équilibrage de charge. Sans ces cookies, le site ne peut pas
              fonctionner correctement.
            </li>
            <li>
              <strong>Mesure d&apos;audience anonymisée</strong>&nbsp;: comptage de
              visites, pages consultées, sources de trafic. Aucune donnée personnelle
              identifiante n&apos;est collectée, aucun profilage n&apos;est effectué,
              et aucune donnée n&apos;est partagée avec des tiers commerciaux.
            </li>
          </ul>
          <p className="mt-3">
            Aucun cookie publicitaire ni traceur tiers de profilage n&apos;est déposé
            sur ce site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Comment refuser les cookies</h2>
          <p className="mt-3">
            Vous pouvez à tout moment paramétrer votre navigateur pour refuser
            l&apos;ensemble des cookies ou être prévenu lorsqu&apos;un cookie est déposé.
            Les liens ci-dessous expliquent la marche à suivre selon votre navigateur&nbsp;:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/fr/kb/effacer-cookies-pour-supprimer-information-sites-web-stockees"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/fr-fr/microsoft-edge"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p className="mt-3">
            Le refus des cookies essentiels peut empêcher l&apos;accès à certaines
            fonctionnalités du site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Durée de conservation</h2>
          <p className="mt-3">
            Les cookies de session sont supprimés à la fermeture du navigateur. Les
            cookies persistants nécessaires sont conservés au maximum{" "}
            <strong>13 mois</strong>, conformément aux recommandations de la CNIL. Les
            informations collectées via la mesure d&apos;audience anonymisée sont
            conservées au maximum <strong>25 mois</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Modification de la politique</h2>
          <p className="mt-3">
            PiloterMaPharma se réserve le droit de modifier la présente politique à
            tout moment, notamment pour refléter une évolution de la réglementation ou
            des outils utilisés. La version en vigueur est celle publiée sur cette page.
            Pour toute question, contactez-nous à&nbsp;
            <a href="mailto:contact@pilotermapharma.fr" className="underline">
              contact@pilotermapharma.fr
            </a>
            &nbsp;ou consultez notre&nbsp;
            <Link href="/rgpd" className="underline">
              politique RGPD
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
