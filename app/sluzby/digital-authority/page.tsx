import { Eyebrow, H1, H2, P, Section, CtaBox, FactBox, DashList } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Budování důvěryhodnosti — Eva Sezemská",
  description:
    "Budování digitální autority skrze obsah a signály důvěryhodnosti — web, Google, média, katalogy a recenze skládané do konzistentního obrazu firmy.",
  path: "/sluzby/digital-authority",
});

export default function DigitalAuthority() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby", href: "/sluzby" }, { label: "Budování důvěryhodnosti" }]} />
        <Eyebrow>Budování důvěryhodnosti</Eyebrow>
        <H1>Vaše firma má autoritu. Je vidět i digitálně?</H1>
        <P>Dobrá firma nemusí být automaticky dobře pochopitelná digitálními systémy.</P>
        <FactBox
          rows={[
            ["Cena", "Individuálně, obvykle jako měsíční spolupráce."],
            ["Doba", "Minimálně 3 měsíce. AI reaguje na změny postupně, proto má smysl měřit delší dobu."],
          ]}
        />
      </Section>

      <Section>
        <H2>Co dostanete</H2>
        <P>Každý měsíc:</P>
        <DashList
          items={[
            "zopakuji test klíčových dotazů a ukážu, jak se počet doporučení mění,",
            "pomohu s recenzemi – jak o ně žádat a jak na ně odpovídat,",
            "udržím aktuální údaje na Googlu, Firmy.cz a v oborových katalozích,",
            "navrhnu, kde a jak získat zmínky mimo váš web (místní média, oborové portály, partneři),",
            "navrhnu obsah, který vaši odbornost dokládá – případové studie, reference s čísly,",
            "shrnu výsledky a domluvíme další kroky.",
          ]}
        />
      </Section>

      <Section>
        <H2>Autorita nevzniká na jednom webu.</H2>
        <P>Vzniká z množství vzájemně propojených signálů:</P>
        <p className="text-[14px] font-mono text-cream/60">
          WEB + GOOGLE + RECENZE + MÉDIA + KATALOGY + PARTNEŘI + ZMÍNKY = DŮVĚRYHODNOST
        </p>
      </Section>

      <Section>
        <H2>Co budujeme</H2>
        <div className="flex flex-col gap-4">
          {[
            ["Konzistence", "Kdo jste a co nabízíte."],
            ["Relevance", "S čím jste spojováni."],
            ["Důvěra", "Kdo vás potvrzuje."],
            ["Kontext", "V jakých situacích jste relevantní."],
            ["Propojení", "Jak jste propojeni s místy, službami, lidmi a tématy."],
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
        <CtaBox title="Budujte autoritu, kterou lze digitálně dohledat.">
          Pojďme probrat, jaké signály vaší firmě dnes chybí.
        </CtaBox>
      </Section>
    </>
  );
}
