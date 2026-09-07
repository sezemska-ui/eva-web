import { Eyebrow, H1, H2, P, Section } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Eva Sezemská",
  description:
    "Nejste si jistí, jak vás vyhledávače a AI systémy vnímají? Vyplňte krátký vstupní dotazník, nebo napište přímo.",
  alternates: { canonical: "/kontakt" },
};

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
        <div className="rounded-sm bg-cream p-8 text-ink">
          <H2>Vstupní dotazník</H2>
          <p className="mb-5 text-[15px] text-[#4b4536]">
            Nejrychlejší cesta, jak začít — zabere 10–15 minut a pomůže mi
            připravit náš první rozhovor tak, aby byl užitečný hned od
            začátku.
          </p>
          <a
            href="https://script.google.com/macros/s/AKfycbzP3VLI0hSpFds4PHc9oMsynueY8snUzI_THmtx4B3K8AaZTFh6x-7B7YI1xFBMHg0P/exec"
            className="inline-block rounded-sm bg-navy-deep px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-[#223652]"
          >
            Vyplnit vstupní dotazník →
          </a>
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
          Nebo na{" "}
          <a
            href="https://www.linkedin.com/in/eva-sezemská-466292417/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
          >
            LinkedIn
          </a>
        </P>
      </Section>
    </>
  );
}
