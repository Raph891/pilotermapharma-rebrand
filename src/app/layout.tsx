import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pilotermapharma.fr"),
  title: {
    default: "PiloterMaPharma | Logiciel de pilotage pour pharmaciens titulaires",
    template: "%s | PiloterMaPharma",
  },
  description:
    "Pilotez votre officine en temps réel : suivi du chiffre d'affaires mois par mois, masses salariales, stocks et promotions. Outil pensé pour les pharmaciens titulaires. Sans engagement.",
  keywords: [
    "logiciel pharmacie",
    "pilotage officine",
    "tableau de bord pharmacie",
    "gestion pharmacie",
    "indicateurs pharmacie",
    "suivi stocks pharmacie",
    "masse salariale pharmacie",
    "Winpharma",
    "LGPI",
    "Pharmaland",
    "Smart RX",
  ],
  authors: [{ name: "PiloterMaPharma" }],
  alternates: {
    canonical: "https://pilotermapharma.fr/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://pilotermapharma.fr/",
    siteName: "PiloterMaPharma",
    title: "PiloterMaPharma | Pilotez votre officine en temps réel",
    description:
      "Tableaux de bord, suivi du CA, masses salariales, stocks et promotions. L'outil de pilotage pensé pour les pharmaciens titulaires.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PiloterMaPharma | Pilotez votre officine en temps réel",
    description:
      "Tableaux de bord, suivi du CA, masses salariales, stocks et promotions pour pharmaciens titulaires.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
