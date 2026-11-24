import { Eyebrow, H1, H2, P, Section, CtaBox, FactBox, DashList } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Budování důvěryhodnosti — Eva Sezemská",
  description:
    "Recenze, katalogy, místní média a zmínky na jiných webech, aby AI věděla, že vám lidé věří. Měsíční spolupráce s pravidelným měřením doporučení.",
  path: "/sluzby/digital-authority",
});

export default function DigitalAuthority() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby", href: "/sluzby" }, { label: "Budování důvěryhodnosti" }]} />
        <Eyebrow>Budování důvěryhodnosti</Eyebrow>
        <H1>Vaše firma má dobrou pověst. Ví o ní i AI?</H1>
        <P>
          AI doporučuje hlavně firmy, o kterých píšou i jiné weby: recenze,
          katalogy, místní média a partneři. Pomáhám, aby se tam vaše pověst
          objevila a zůstala aktuální.
        </P>
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
        <H2>Proč nestačí jen váš web</H2>
        <P>
          Co o sobě napíšete jen na vlastním webu, tomu AI věří méně. Když
          totéž potvrzují recenze, katalogy, místní média a partneři, jmenuje
          vás častěji.
        </P>
      </Section>

      <Section>
        <H2>Co budujeme</H2>
        <div className="flex flex-col gap-4">
          {[
            ["Stejné údaje všude", "Název, adresa, telefon a nabídka se shodují na webu, na Googlu i v katalozích."],
            ["Recenze", "Pravidelně nové recenze a vaše odpovědi na ně."],
            ["Zmínky jinde", "Články v místních médiích, oborové portály a weby partnerů."],
            ["Důkazy odbornosti", "Případové studie a reference s konkrétními čísly."],
          ].map(([t, d]) => (
            <div key={t} className="border-l border-rule pl-5">
              <h3 className="mb-1 font-serif text-lg text-ink">{t}</h3>
              <p className="text-[15px] text-ink-2">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CtaBox title="Zjistěte, co o vás dnes píšou jiné weby.">
          Na konzultaci projdeme, kde o vaší firmě na internetu chybí zmínky.
        </CtaBox>
      </Section>
    </>
  );
}
