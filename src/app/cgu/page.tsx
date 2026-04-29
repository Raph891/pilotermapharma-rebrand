import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — PiloterMaPharma",
  description:
    "Conditions Générales d'Utilisation du service PiloterMaPharma : objet, accès, tarifs, résiliation et responsabilités.",
};

export default function CguPage() {
  return (
    <>
      <SiteNav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-ink-900 leading-relaxed">
        <h1 className="text-4xl font-semibold tracking-tight">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="mt-4 text-ink-700">
          Dernière mise à jour&nbsp;: [À COMPLÉTER]
        </p>

        <section>
          <h2 className="text-2xl font-semibold mt-10">1. Objet</h2>
          <p className="mt-3">
            Les présentes Conditions Générales d&apos;Utilisation (ci-après &laquo;&nbsp;CGU&nbsp;&raquo;)
            ont pour objet de définir les modalités et conditions dans lesquelles
            PiloterMaPharma SAS (ci-après &laquo;&nbsp;PiloterMaPharma&nbsp;&raquo;) met à
            disposition son service de pilotage et d&apos;analyse pour les pharmacies
            d&apos;officine, ainsi que les conditions d&apos;accès et d&apos;utilisation
            par l&apos;Utilisateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">2. Acceptation</h2>
          <p className="mt-3">
            L&apos;utilisation du service implique l&apos;acceptation pleine et entière
            des présentes CGU. À défaut d&apos;acceptation, l&apos;Utilisateur doit
            renoncer à utiliser le service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">3. Description du service</h2>
          <p className="mt-3">
            PiloterMaPharma propose une plateforme SaaS permettant aux titulaires et
            équipes de pharmacie de centraliser, suivre et analyser leurs indicateurs de
            performance, leurs achats, leurs marges, leur trésorerie et leur paie. Le
            service est accessible via une interface web sécurisée.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">4. Compte utilisateur</h2>
          <p className="mt-3">
            L&apos;accès au service nécessite la création d&apos;un compte. L&apos;Utilisateur
            s&apos;engage à fournir des informations exactes, à jour, et à préserver la
            confidentialité de ses identifiants. Toute action effectuée depuis le compte
            est réputée l&apos;avoir été par l&apos;Utilisateur titulaire du compte.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">5. Tarifs et facturation</h2>
          <p className="mt-3">
            Les tarifs en vigueur sont indiqués sur la page Tarifs du site. L&apos;abonnement
            est <strong>sans engagement</strong>&nbsp;: l&apos;Utilisateur peut le résilier
            à tout moment en <strong>1 clic</strong> depuis son espace de gestion. La
            résiliation prend effet à la fin de la période en cours déjà payée, sans
            remboursement au prorata sauf disposition légale contraire.
          </p>
          <p className="mt-3">
            Les paiements sont prélevés mensuellement ou annuellement selon la formule
            choisie. Toute modification tarifaire sera notifiée par e-mail au moins
            30 jours avant son entrée en vigueur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">6. Propriété intellectuelle</h2>
          <p className="mt-3">
            PiloterMaPharma demeure seul titulaire des droits de propriété intellectuelle
            relatifs à la plateforme, son code, son design et ses contenus. L&apos;Utilisateur
            bénéficie d&apos;un droit d&apos;usage personnel, non exclusif et non
            transférable, limité à la durée de son abonnement. Les données saisies par
            l&apos;Utilisateur restent sa propriété pleine et entière.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">7. Données personnelles</h2>
          <p className="mt-3">
            Le traitement des données personnelles est régi par notre&nbsp;
            <Link href="/rgpd" className="underline">
              Politique de protection des données (RGPD)
            </Link>
            , à laquelle l&apos;Utilisateur est invité à se référer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">8. Responsabilités</h2>
          <p className="mt-3">
            PiloterMaPharma met en œuvre les moyens techniques pour assurer la
            disponibilité et la sécurité du service, sans pour autant garantir une
            disponibilité absolue. La responsabilité de PiloterMaPharma ne saurait être
            engagée en cas de force majeure, de défaillance des réseaux de communication,
            ou d&apos;un usage non conforme du service par l&apos;Utilisateur.
          </p>
          <p className="mt-3">
            L&apos;Utilisateur reste seul responsable de l&apos;exactitude des données
            qu&apos;il saisit et des décisions de gestion qu&apos;il prend sur la base des
            analyses fournies par le service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">9. Modification des CGU</h2>
          <p className="mt-3">
            PiloterMaPharma se réserve le droit de modifier les présentes CGU à tout
            moment. Les Utilisateurs seront informés de toute modification par e-mail ou
            via une notification dans l&apos;application. La poursuite de l&apos;utilisation
            du service vaut acceptation des CGU modifiées.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">10. Loi applicable et juridiction</h2>
          <p className="mt-3">
            Les présentes CGU sont soumises au <strong>droit français</strong>. Tout
            litige relatif à leur interprétation ou à leur exécution relèvera de la
            compétence exclusive des tribunaux français, sauf disposition légale
            contraire.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
