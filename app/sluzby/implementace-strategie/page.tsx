import { Eyebrow, H1, H2, P, Section, CtaBox, FactBox, DashList } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Implementace — Eva Sezemská",
  description:
    "Pomáhám dostat změny ze strategie na web. Rozdělíme si, co uděláte vy, co váš webmaster a co já, a nasazení koordinuji od struktury po Schema.org.",
  path: "/sluzby/implementace-strategie",
});

export default function Implementace() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby", href: "/sluzby" }, { label: "Implementace" }]} />
        <Eyebrow>Implementace</Eyebrow>
        <H1>Strategie bez implementace nic nezmění.</H1>
        <P>
          Proto nekončím u doporučení. Ve spolupráci s vaším webmasterem
          pomáhám změny dostat do webu a digitálního ekosystému firmy. Na
          začátku si rozdělíme, co uděláte vy, co váš webmaster a co já.
        </P>
        <FactBox
          rows={[
            ["Cena", "Podle rozsahu, vždy ji řeknu předem."],
          ]}
        />
      </Section>

      <Section>
        <H2>Co dostanete</H2>
        <P>
          Úpravy můžete udělat sami nebo s vaším webmasterem. Pokud nechcete řešit
          technické detaily, převezmu komunikaci s webmasterem za vás – vím, co
          přesně potřebuje, a ušetříte si vysvětlování i čas:
        </P>
        <DashList
          items={[
            "předám webmasterovi zadání a podklady a zodpovím jeho dotazy,",
            "zkontroluji, že je vše nasazené správně (texty, strukturovaná data, technická nastavení),",
            "upravím profily na Googlu, Firmy.cz a dalších místech, pokud mi k nim dáte přístup,",
            "po nasazení ověřím, jak se změny projevují v odpovědích AI.",
          ]}
        />
      </Section>

      <Section>
        <H2>Mluvím oběma jazyky.</H2>
        <P>
          Klientovi vysvětluji technická rozhodnutí webmastera srozumitelně,
          bez žargonu. Webmasterovi překládám byznysové priority klienta do
          konkrétního zadání.
        </P>
        <P>Výsledkem je, že se obě strany nemusí učit jazyk té druhé — a implementace jde rychleji.</P>
      </Section>

      <Section>
        <H2>Co společně nasazujeme</H2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 font-serif text-lg text-ink">Technické základy</h3>
            <p className="text-[14px] text-ink-2">Schema.org, strukturovaná data, technická SEO infrastruktura, indexace, interní struktura.</p>
          </div>
          <div>
            <h3 className="mb-2 font-serif text-lg text-ink">Obsah</h3>
            <p className="text-[14px] text-ink-2">Stránky služeb, lokální stránky, FAQ, obsahové clustery, obsah postavený na entitách.</p>
          </div>
          <div>
            <h3 className="mb-2 font-serif text-lg text-ink">Lokální viditelnost</h3>
            <p className="text-[14px] text-ink-2">Profil firmy na Googlu, jednotné údaje o firmě (název, adresa, telefon), místní katalogy a zdroje.</p>
          </div>
          <div>
            <h3 className="mb-2 font-serif text-lg text-ink">Čitelnost pro AI</h3>
            <p className="text-[14px] text-ink-2">Struktura informací, konzistence entity, llms.txt (pokud dává smysl), strojově čitelný obsah.</p>
          </div>
        </div>
      </Section>

      <Section>
        <H2>Priorita před objemem.</H2>
        <P>Nejde o to udělat co nejvíc změn. Jde o to udělat správnou věc, na správném místě, ve správném pořadí.</P>
      </Section>

      <Section>
        <CtaBox title="Máte strategii. Teď ji uvedeme do reality.">
          Pojďme probrat, jak by implementace mohla vypadat u vás.
        </CtaBox>
      </Section>
    </>
  );
}
