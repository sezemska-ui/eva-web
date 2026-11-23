import type { Metadata } from "next";
import { Newsreader, Manrope, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalyticsConsent from "@/components/GoogleAnalyticsConsent";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SiteJsonLd from "@/components/SiteJsonLd";
import "./globals.css";
import { pageMetadata } from "@/lib/metadata";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

const TITLE = "SEO pro AI vyhledávání | Eva Sezemská, Mladá Boleslav";
const DESCRIPTION =
  "Zjistím, jestli vás ChatGPT a Google AI doporučují zákazníkům, proč dávají přednost konkurenci a co změnit. SEO pro AI vyhledávání.";

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
      className={`${newsreader.variable} ${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteJsonLd />
        <NavBar />
        <main className="mx-auto w-full max-w-[848px] flex-1 px-4 py-16 sm:px-6 md:py-24">{children}</main>
        <Footer />
        <GoogleAnalyticsConsent />
        <Analytics />
      </body>
    </html>
  );
}
