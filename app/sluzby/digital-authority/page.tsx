import { Eyebrow, H1, H2, P, Section, CtaBox } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import { FORM_URL } from "@/components/SiteJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Authority — Eva Sezemská",
  description:
    "Budování digitální autority skrze obsah a signály důvěryhodnosti — web, Google, média, katalogy a recenze skládané do konzistentního obrazu firmy.",
  alternates: { canonical: "/sluzby/digital-authority" },
};

export default function DigitalAuthority() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby", href: "/sluzby" }, { label: "Digital Authority" }]} />
        <Eyebrow>Digital Authority</Eyebrow>
        <H1>Vaše firma má autoritu. Je vidět i digitálně?</H1>
        <P>Dobrá firma nemusí být automaticky dobře pochopitelná digitálními systémy.</P>
      </Section>

      <Section>
        <H2>Autorita nevzniká na jednom webu.</H2>
        <P>Vzniká z množství vzájemně propojených signálů:</P>
        <p className="text-[14px] font-mono text-cream/60">
          WEBSITE + GOOGLE + REVIEWS + MEDIA + DIRECTORIES + PARTNERS + MENTIONS = DIGITAL AUTHORITY
        </p>
      </Section>

      <Section>
        <H2>Co budujeme</H2>
        <div className="flex flex-col gap-4">
          {[
            ["Consistency", "Kdo jste a co nabízíte."],
            ["Relevance", "S čím jste spojováni."],
            ["Trust", "Kdo vás potvrzuje."],
            ["Context", "V jakých situacích jste relevantní."],
            ["Connections", "Jak jste propojeni s místy, službami, lidmi a tématy."],
          ].map(([t, d]) => (
            <div key={t} className="border-l border-white/15 pl-5">
              <h3 className="mb-1 font-serif text-lg text-cream">{t}</h3>
              <p className="text-[15px] text-cream/75">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <H2>Nestačí říct systémům, kdo jste.</H2>
        <P>Potřebujete, aby to potvrzoval i zbytek internetu.</P>
      </Section>

      <Section>
        <CtaBox
          title="Budujte autoritu, kterou lze digitálně dohledat."
          href={FORM_URL}
          ctaLabel="Probrat Digital Authority →"
        >
          Pojďme probrat, jaké signály vaší firmě dnes chybí.
        </CtaBox>
      </Section>
    </>
  );
}
