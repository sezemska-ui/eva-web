import { Eyebrow, H1, H2, P, Section } from "@/components/Ui";
import { Breadcrumbs, FAQJsonLd } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Eva Sezemská",
  description:
    "Odpovědi na otázky o AI Search viditelnosti, auditu, strategii, implementaci a digitální autoritě.",
  alternates: { canonical: "/faq" },
};

const categories = [
  { id: "obecne", label: "OBECNÉ" },
  // Další kategorie (AUDIT, STRATEGIE, IMPLEMENTACE, DIGITAL AUTHORITY, KONZULTACE) přibudou postupně.
];

const obecneQuestions = [
  {
    q: "Jak zjistím, jestli mě AI doporučuje a co o mé firmě ví?",
    a: (
      <>
        <P>
          Nejjednodušší způsob je otevřít Google nebo ChatGPT a zeptat se. Je
          ale potřeba dodržet základní kroky pro správné testování:
        </P>
        <ul className="mb-4 flex flex-col gap-2 text-[15px] text-cream/80">
          <li>— odhlaste se z firemní wifi, použijte mobilní data,</li>
          <li>
            — zapněte Google v anonymním režimu (inkognito) a v ChatGPT nový
            nebo nepersonalizovaný chat,
          </li>
          <li>— zakažte přístup k GPS, pokud se vás prohlížeč zeptá,</li>
          <li>
            — zeptejte se tak, jak by vaše služby mohl hledat váš zákazník,
            ale nezmiňujte váš název, např. „Najdi mi místo na svatbu v
            Českém ráji, kde mohu ubytovat 100 lidí“, a klidně dotaz
            opakujte v novém chatu nebo zadejte nový.
          </li>
        </ul>
        <P>
          Pokud se neobjevíte, zadejte tzv. brandový dotaz a zeptejte se
          „Proč jsi mi nedoporučil/a [název firmy]?“
        </P>
        <P>
          Brandový dotaz berte jako doplňkový, který vám může pomoci
          poodhalit, proč jste se do odpovědí nedostali.
        </P>
      </>
    ),
  },
  {
    q: "Co AI potřebuje, aby mohla mou firmu správně pochopit a doporučit?",
    a: (
      <>
        <P>
          Neexistuje jen jeden technický krok, který by vás automaticky
          dostal do AI doporučení, a nikdo by to neměl slibovat. Systémy
          musí zejména pochopit, kdo jste, co nabízíte, pro koho a kde.
        </P>
        <P>V praxi u klientů např. sleduji:</P>
        <ul className="mb-4 flex flex-col gap-2 text-[15px] text-cream/80">
          <li>
            — jak dlouho váš web existuje. U nových webů pozoruji, že může
            trvat déle, než si vyhledávače a AI vytvoří dostatečně jasnou
            představu o firmě a začnou její web stabilně využívat jako
            zdroj,
          </li>
          <li>
            — máte nastavené on-page SEO tak, aby odpovídalo hledání
            zákazníků a napříč webem popisovalo, kdo jste, co nabízíte, kde
            působíte a pro koho,
          </li>
          <li>
            — píšete na svém webu odborný (ne generický) obsah, který AI
            může citovat,
          </li>
          <li>
            — u lokálních firem máte založený min. Google Business Profil a
            sbíráte na něm recenze,
          </li>
          <li>
            — v PR kampaních vytváříte vazby a posilujete svoji digitální
            identitu — zmínky v médiích, diskuzích, článcích, podcastech
            nebo přes backlinky.
          </li>
        </ul>
        <P>
          Jde o to, aby z dostupných informací o vaší firmě vznikl ucelený a
          důvěryhodný obraz napříč internetem.
        </P>
      </>
    ),
  },
  {
    q: "Proč by nás mělo zajímat, jestli nás AI doporučuje, když k nám zákazníci přicházejí hlavně ze sociálních sítí?",
    a: (
      <>
        <P>
          Sociální sítě, jako Instagram a Facebook, jsou skvělé pro
          budování komunity a informování zákazníků o novinkách, akcích
          nebo updatech. Příspěvky na sociální sítě jsou ale často
          zobrazovány lidem, kteří už vás sledují a vědí o vás.
        </P>
        <P>
          AI viditelnost míří na potenciální klienty, kteří o vás nevědí a
          jste pro ně tedy neznámý dodavatel. Díky AI shrnutí se o vás mohou
          dozvědět a stát se vaším zákazníkem.
        </P>
        <P>
          AI viditelnost nezaručuje proklik na váš web, ani že všichni,
          kterým se zobrazíte, budou vaši zákazníci. Konečné rozhodnutí
          stejně musí udělat člověk. Pokud vás AI doporučí, můžete se
          dostat mezi firmy, které potenciální zákazník začne zvažovat. Bez
          tohoto doporučení o vás nemusí ani vědět a vybere konkurenci.
        </P>
      </>
    ),
  },
  {
    q: "Nevím, jestli potřebujeme celý audit. Můžeme se nejdříve sejít a probrat naši situaci?",
    a: (
      <P>
        Samozřejmě. Ne vždy je potřeba začít kompletním AI Search
        Visibility Auditem. Nejdříve se můžeme sejít na krátkou konzultaci,
        ujasnit si situaci a podle toho zvolit další postup.
      </P>
    ),
  },
  {
    q: "Jak dlouho trvá, než se změny projeví v AI Search?",
    a: (
      <>
        <P>
          Záleží na několika faktorech. Důležité je stáří domény. U nové
          domény mohou nasazené změny trvat měsíce, než se vaše firma
          objeví v AI doporučení. Z vlastní praxe mám zkušenost, že dobře
          nastavené on-page SEO např. na starší doméně se může projevit
          během několika dnů a týdnů. Nelze to ale zobecnit, ani slíbit.
        </P>
        <P>
          Změny sleduji jak u testovacích dotazů, tak i v analytických
          nástrojích, které na web nasazujeme, pokud již nejsou.
        </P>
      </>
    ),
  },
  {
    q: "Musíme na AI viditelnosti pracovat sami i po ukončení spolupráce?",
    a: (
      <>
        <P>
          Ano. Strategie AI viditelnosti je práce, kterou vytvořím,
          společně schválíme a v rámci implementace ji pro vás mohu
          zajistit s vaším webmasterem tak, abyste se o technické kroky
          nemuseli starat.
        </P>
        <P>
          Pro udržení AI viditelnosti je potřeba stále pracovat na odborném
          obsahu na svém webu a budovat digitální identitu i mimo web,
          např. na LinkedInu, článcích, rozhovorech atd. Toto by se mělo
          stát běžnou součástí marketingových strategií.
        </P>
      </>
    ),
  },
  {
    q: "Co když máme vlastního webmastera nebo marketingový tým?",
    a: (
      <P>
        To je běžný způsob spolupráce, na který jsem zvyklá. S vaším
        webmasterem nebo marketingovým týmem mohu spolupracovat na dálku i
        osobně. Vždy ale potřebuji alespoň jednu odpovědnou osobu, se
        kterou mohu konzultovat a koordinovat celý projekt.
      </P>
    ),
  },
  {
    q: "Pomůžete nám i s budováním digitální autority mimo náš web?",
    a: (
      <>
        <P>Ano. Web je pouze jedním ze zdrojů informací o firmě.</P>
        <P>
          V rámci strategie mohu navrhnout, kde má smysl posílit vaši
          digitální autoritu mimo vlastní web. Podle oboru a cílových
          zákazníků může jít například o relevantní odborné články, média,
          rozhovory, partnerské weby, oborové katalogy, profesní profily
          nebo další důvěryhodné zdroje.
        </P>
        <P>
          Nejde o co největší počet zmínek nebo odkazů. Důležité je, aby
          jednotlivé zdroje dávaly smysl pro váš obor a společně
          podporovaly konzistentní obraz vaší firmy.
        </P>
      </>
    ),
  },
  {
    q: "Začínám nové podnikání, za jak dlouho se dostanu do AI doporučení?",
    a: (
      <>
        <P>
          Budování nové digitální identity je záležitost na několik
          měsíců. U nové firmy proto může trvat déle, než se její informace
          začnou stabilně objevovat ve vyhledávání a AI doporučeních, nejde
          ale o nemožný cíl.
        </P>
        <P>
          Naprostým základem je web, ze kterého může AI vyhledávač čerpat
          informace o nabídce, lokalitě a o cílových zákaznících. Podle
          oboru je také důležité založit Google Business Profil, sbírat
          recenze a budovat zmínky a registrace v odborných katalozích
          napříč internetem.
        </P>
        <P>
          Neexistuje ale přesná lhůta, po které se nová firma automaticky
          objeví v AI doporučeních. U nového podnikání proto pracuji spíše
          s budováním digitální identity jako s dlouhodobějším procesem než
          s jednorázovou optimalizací.
        </P>
      </>
    ),
  },
];

// Plochý text odpovědí pro FAQPage schema (bez formátování, pro AI a vyhledávače)
const obecnePlain = [
  {
    q: obecneQuestions[0].q,
    a: "Nejjednodušší způsob je otevřít Google nebo ChatGPT a zeptat se, ideálně odhlášeni z firemní wifi, v anonymním režimu a bez GPS. Zeptejte se tak, jak by vaše služby hledal zákazník, bez uvedení názvu firmy. Pokud se neobjevíte, zkuste brandový dotaz typu Proč jsi mi nedoporučil/a [název firmy]?",
  },
  {
    q: obecneQuestions[1].q,
    a: "AI systémy musí pochopit, kdo jste, co nabízíte, pro koho a kde. Roli hraje stáří domény, nastavení on-page SEO, odborný obsah na webu, Google Business Profil s recenzemi a PR aktivity budující digitální identitu napříč internetem.",
  },
  {
    q: obecneQuestions[2].q,
    a: "Sociální sítě oslovují hlavně lidi, kteří vás už znají. AI viditelnost cílí na potenciální zákazníky, kteří o vás ještě nevědí, a může vás dostat mezi firmy, které zvažují, i když finální rozhodnutí vždy dělá člověk.",
  },
  {
    q: obecneQuestions[3].q,
    a: "Ne vždy je potřeba začít kompletním AI Search Visibility Auditem. Nejdříve se lze sejít na krátkou konzultaci, ujasnit situaci a podle toho zvolit další postup.",
  },
  {
    q: obecneQuestions[4].q,
    a: "Záleží na stáří domény a dalších faktorech. U nové domény to může trvat měsíce, u starší domény se dobře nastavené on-page SEO může projevit během dnů až týdnů. Nelze to zobecnit ani slíbit.",
  },
  {
    q: obecneQuestions[5].q,
    a: "Ano, dlouhodobá AI viditelnost vyžaduje průběžnou práci na odborném obsahu a budování digitální identity i mimo web. Implementaci lze zajistit společně s vaším webmasterem.",
  },
  {
    q: obecneQuestions[6].q,
    a: "Ano, spolupráce s vlastním webmasterem nebo marketingovým týmem je běžná, na dálku i osobně, vždy s jednou odpovědnou kontaktní osobou.",
  },
  {
    q: obecneQuestions[7].q,
    a: "Ano, v rámci strategie lze navrhnout posílení digitální autority mimo web — odborné články, média, rozhovory, partnerské weby, katalogy nebo profesní profily, podle oboru a cílových zákazníků.",
  },
  {
    q: obecneQuestions[8].q,
    a: "U nové firmy může trvat déle, než se informace stabilně objeví ve vyhledávání a AI doporučeních. Základem je web s jasnými informacemi, Google Business Profil, recenze a zmínky napříč internetem. Přesnou lhůtu nelze slíbit.",
  },
];

export default function FAQ() {
  return (
    <>
      <FAQJsonLd items={obecnePlain} />
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "FAQ" }]} />
        <Eyebrow>FAQ</Eyebrow>
        <H1>Máte otázku? Začněme tady.</H1>
        <P>
          Od toho, jak AI vidí vaši firmu, přes průběh auditu až po
          implementaci a dlouhodobé budování digitální autority.
        </P>

        <nav className="mb-2 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-widest text-cream/50">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="transition-colors duration-200 hover:text-gold-light"
            >
              {c.label}
            </a>
          ))}
        </nav>
      </Section>

      <Section>
        <div id="obecne">
          <H2>Obecné otázky</H2>
          <div className="flex flex-col">
            {obecneQuestions.map((item, i) => (
              <details
                key={i}
                className="group border-b border-white/10 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span className="text-[15px] text-cream/90">{item.q}</span>
                  <span className="shrink-0 font-mono text-lg text-gold transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 pr-8">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
