import type { Metadata } from "next";
import { Instrument_Serif, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalyticsConsent from "@/components/GoogleAnalyticsConsent";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SiteJsonLd from "@/components/SiteJsonLd";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
});

const TITLE = "Eva Sezemská — AI Search Strategist";
const DESCRIPTION =
  "Buďte tam, kde vás zákazníci hledají. Pomáhám firmám být vidět, když je zákazník hledá – ve vyhledávači, v AI odpovědích i na mapách a platformách, kde se rozhoduje.";

export const metadata: Metadata = {
  metadataBase: new URL("https://searchstrategy.cz"),
  title: { default: TITLE, template: "%s" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://searchstrategy.cz",
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/eva-portrait.png", width: 800, height: 800, alt: "Eva Sezemská" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/eva-portrait.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="cs"
      className={`${instrumentSerif.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteJsonLd />
        <NavBar />
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-14">{children}</main>
        <Footer />
        <GoogleAnalyticsConsent />
        <Analytics />
      </body>
    </html>
  );
}
