import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/sections/site-nav";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata: Metadata = {
  title: "Politique de protection des données (RGPD) — PiloterMaPharma",
  description:
    "Politique de protection des données personnelles de PiloterMaPharma : finalités, base légale, durées de conservation, droits et contact DPO.",
};

export default function RgpdPage() {
  return (
    <>
      <SiteNav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-ink-900 leading-relaxed">
        <h1 className="text-4xl font-semibold tracking-tight">
          Politique de protection des données
        </h1>
        <p className="mt-4 text-ink-700">
          PiloterMaPharma s&apos;engage à protéger les données personnelles de ses
          utilisateurs, conformément au Règlement (UE) 2016/679 du 27 avril 2016
          (&laquo;&nbsp;RGPD&nbsp;&raquo;) et à la loi Informatique et Libertés modifiée.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Responsable de traitement</h2>
          <p className="mt-3">
            Le responsable de traitement est&nbsp;: <strong>PiloterMaPharma SAS</strong>,
            dont le siège social est situé [À COMPLÉTER], SIRET [À COMPLÉTER].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Données collectées</h2>
          <p className="mt-3">Nous collectons les catégories de données suivantes&nbsp;:</p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Données d&apos;identification (nom, prénom, e-mail professionnel, téléphone)</li>
            <li>Données de la pharmacie (raison sociale, SIRET, adresse, FINESS)</li>
            <li>Données d&apos;activité (chiffre d&apos;affaires, marges, achats, paie agrégée)</li>
            <li>Données de connexion et techniques (logs, adresse IP, type de navigateur)</li>
            <li>Données de facturation (coordonnées de paiement traitées par notre prestataire)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Finalités</h2>
          <p className="mt-3">Les données sont traitées pour&nbsp;:</p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Fournir et maintenir le service souscrit</li>
            <li>Gérer la facturation et la relation contractuelle</li>
            <li>Assurer le support et la communication avec l&apos;Utilisateur</li>
            <li>Améliorer le service et produire des statistiques d&apos;usage agrégées</li>
            <li>Respecter les obligations légales et comptables</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Base légale</h2>
          <p className="mt-3">
            Les traitements reposent sur l&apos;<strong>exécution du contrat</strong>{" "}
            (article 6.1.b RGPD) pour la fourniture du service, le{" "}
            <strong>respect d&apos;obligations légales</strong> (article 6.1.c) pour la
            facturation et la conservation comptable, et l&apos;
            <strong>intérêt légitime</strong> (article 6.1.f) pour l&apos;amélioration
            du service et la sécurité. Le <strong>consentement</strong> (article 6.1.a)
            est sollicité pour les usages optionnels (cookies non essentiels,
            communications marketing).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Destinataires</h2>
          <p className="mt-3">
            Les données sont accessibles aux équipes habilitées de PiloterMaPharma et à
            ses sous-traitants techniques (hébergeur, prestataire de paiement, outil
            d&apos;e-mail transactionnel), liés par des engagements contractuels de
            confidentialité et de conformité RGPD. Aucune donnée n&apos;est revendue à
            des tiers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Durée de conservation</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Données de compte&nbsp;: pendant la durée du contrat, puis 3 ans après le dernier contact</li>
            <li>Données de facturation&nbsp;: 10 ans (obligation comptable)</li>
            <li>Logs techniques&nbsp;: 12 mois maximum</li>
            <li>Cookies&nbsp;: voir <Link href="/cookies" className="underline">la page Cookies</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Hébergement</h2>
          <p className="mt-3">
            Les données applicatives et de production sont hébergées en{" "}
            <strong>France</strong> (ou au sein de l&apos;Union européenne) chez des
            prestataires conformes au RGPD. Le site marketing est hébergé sur Vercel
            (voir <Link href="/mentions-legales" className="underline">mentions légales</Link>).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Sécurité</h2>
          <p className="mt-3">
            PiloterMaPharma met en œuvre des mesures techniques et organisationnelles
            appropriées&nbsp;: <strong>chiffrement TLS</strong> en transit,{" "}
            <strong>chiffrement au repos</strong> des bases de données, contrôles
            d&apos;accès stricts, journalisation des accès, sauvegardes régulières et
            tests de restauration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Droits des utilisateurs</h2>
          <p className="mt-3">
            Conformément au RGPD, l&apos;Utilisateur dispose des droits suivants sur ses
            données&nbsp;:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>Droit d&apos;accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (&laquo;&nbsp;droit à l&apos;oubli&nbsp;&raquo;)</li>
            <li>Droit à la portabilité</li>
            <li>Droit d&apos;opposition</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit de définir des directives post-mortem</li>
          </ul>
          <p className="mt-3">
            Ces droits peuvent être exercés en écrivant à&nbsp;
            <a href="mailto:contact@pilotermapharma.fr" className="underline">
              contact@pilotermapharma.fr
            </a>
            . En cas de réponse insatisfaisante, l&apos;Utilisateur peut introduire une
            réclamation auprès de la <strong>CNIL</strong> (
            <a href="https://www.cnil.fr" className="underline">www.cnil.fr</a>).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Cookies</h2>
          <p className="mt-3">
            La gestion des cookies fait l&apos;objet d&apos;une page dédiée&nbsp;:&nbsp;
            <Link href="/cookies" className="underline">
              voir la politique cookies
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-10">Contact DPO</h2>
          <p className="mt-3">
            Pour toute question relative à la protection de vos données, vous pouvez
            contacter notre Délégué à la Protection des Données&nbsp;:&nbsp;
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
