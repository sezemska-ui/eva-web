import { Eyebrow, H1, H2, P, Section, ConsultationButton } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata({
  title: "Kontakt — Eva Sezemská",
  description:
    "Nejste si jistí, jak vás vyhledávače a AI systémy vnímají? Domluvte si konzultaci, nebo napište přímo.",
  path: "/kontakt",
});
export default function Kontakt() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Kontakt" }]} />
        <Eyebrow>Contact</Eyebrow>
        <H1>Začněme tím, co dnes nefunguje.</H1>
        <P>
          Pokud si nejste jistí, jak vás vyhledávače a AI systémy vnímají,
          první krok nemusí být další marketingová aktivita. Nejprve
          zjistíme, kde skutečně stojíte.
        </P>
      </Section>
      <Section>
        <div className="rounded-sm bg-cream p-6 text-ink">
          <h2 className="mb-2 font-serif text-2xl text-ink">Strategická konzultace</h2>
          <p className="mb-4 text-[15px] text-[#4b4536]">
            Nejrychlejší cesta, jak začít — 60 minut na to, abychom společně
            zjistili, kde je problém a jaký další krok dává smysl.
          </p>
          <ConsultationButton />
        </div>
      </Section>
      <Section>
        <H2>Co bude následovat</H2>
        <div className="flex flex-col gap-4">
          {[
            ["01", "Prohlédnu si vaši situaci a web."],
            ["02", "Ozvu se vám s tím, zda a jak vám mohu pomoci."],
            ["03", "Pokud dává spolupráce smysl, domluvíme další postup."],
          ].map(([n, t]) => (
            <div key={n} className="flex gap-4 border-b border-white/10 pb-4 last:border-b-0">
              <span className="font-mono text-[13px] text-gold">{n}</span>
              <span className="text-[15px] text-cream/80">{t}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <P>
          Nebo napište přímo:{" "}
          <a
            href="mailto:sezemska@searchstrategy.cz"
            className="font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
          >
            sezemska@searchstrategy.cz
          </a>
        </P>
        <P>
          Nebo přes{" "}
          <a
            href="https://www.linkedin.com/in/eva-sezemská-466292417/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
          >
            LinkedIn
          </a>{" "}
          nebo{" "}
          <a
            href="https://www.instagram.com/searchstrategy.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
          >
            Instagram
          </a>
        </P>
        <p className="mt-2 font-mono text-[12px] text-cream/50">Mladá Boleslav</p>
      </Section>
    </>
  );
}
