import type { Metadata } from "next";
import { Instrument_Serif, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalyticsConsent from "@/components/GoogleAnalyticsConsent";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SiteJsonLd from "@/components/SiteJsonLd";
import "./globals.css";
import { pageMetadata } from "@/lib/metadata";

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
  "Buďte tam, kde vás zákazníci hledají. Pomáhám firmám být vidět v AI vyhledávání, AI odpovědích i na mapách a platformách, kde se rozhoduje.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.searchstrategy.cz"),
  // Úvodní stránka nemá vlastní metadata, náhledy pro sdílení bere odsud
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" }),
  title: { default: TITLE, template: "%s" },
  robots: { index: true, follow: true },
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
