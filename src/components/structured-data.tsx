const SITE_URL = "https://pilotermapharma.fr";
const LOGO_URL = `${SITE_URL}/logo.png`;
const PHONE_NUMBER = "+33659210350";

export default function StructuredData() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PiloterMaPharma",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Logiciel de pilotage pour pharmaciens titulaires : tableaux de bord en temps réel, suivi du chiffre d'affaires, masses salariales, stocks et promotions. Compatible Winpharma, LGPI, Pharmaland et Smart RX.",
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      price: "49.99",
      priceCurrency: "EUR",
      description: "À partir de 49,99 € / mois — sans engagement",
      availability: "https://schema.org/InStock",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_NUMBER,
      contactType: "sales",
      areaServed: "FR",
      availableLanguage: ["French"],
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PiloterMaPharma",
    url: SITE_URL,
    logo: LOGO_URL,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_NUMBER,
      contactType: "sales",
      areaServed: "FR",
      availableLanguage: ["French"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplication),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />
    </>
  );
}
