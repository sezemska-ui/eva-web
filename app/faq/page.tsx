import { Eyebrow, H1, H2, P, Section } from "@/components/Ui";
import { Breadcrumbs, FAQJsonLd } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "FAQ — Eva Sezemská",
  description:
    "Odpovědi na otázky o AI viditelnosti, cenách, auditu, strategii, implementaci a budování důvěryhodnosti.",
  path: "/faq",
});

type Category = "obecne" | "ceny" | "technicke";

const categories: { id: Category | "slovnicek"; label: string; title: string }[] = [
  { id: "obecne", label: "Obecné", title: "Obecné otázky" },
  { id: "ceny", label: "Ceny a průběh", title: "Ceny a průběh spolupráce" },
  { id: "technicke", label: "Technické", title: "Technické otázky" },
  { id: "slovnicek", label: "Slovníček", title: "Slovníček" },
];

const questions = [
  {
    cat: "obecne" as Category,
    lead: "Zeptejte se Googlu nebo ChatGPT tak, jak by se ptal váš zákazník, ale bez názvu vaší firmy.",
    q: "Jak zjistím, jestli mě AI doporučuje a co o mé firmě ví?",
    a: (
      <>
        <P>
          Nejjednodušší způsob je otevřít Google nebo ChatGPT a zeptat se. Je
          ale potřeba dodržet základní kroky pro správné testování:
        </P>
        <ul className="mb-4 flex flex-col gap-2 text-[15px] text-ink-2">
          <li>— odpojte se od firemní wifi, použijte mobilní data,</li>
          <li>
            — zapněte Google v anonymním režimu (inkognito) a v ChatGPT nový
            nebo nepersonalizovaný chat,
          </li>
          <li>— zakažte přístup k GPS, pokud se vás prohlížeč zeptá,</li>
          <li>
            — zeptejte se tak, jak by vaše služby mohl hledat váš zákazník,
            ale nezmiňujte svůj název, např. „Najdi mi místo na svatbu v
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
    cat: "obecne" as Category,
    lead: "GEO a AEO jsou jiné názvy pro SEO pro AI vyhledávání: práci na tom, aby vás AI jmenovala ve svých odpovědích.",
    q: "Co je GEO a AEO a jak se liší od SEO?",
    a: (
      <>
        <P>
          GEO (Generative Engine Optimization) a AEO (Answer Engine
          Optimization) jsou nové názvy pro práci na tom, aby vás AI systémy,
          jako ChatGPT, Perplexity nebo AI v Googlu, uváděly ve svých
          odpovědích. V praxi jde o totéž, čemu říkám SEO pro AI vyhledávání.
        </P>
        <P>
          Klasické SEO řeší, na kolikáté pozici jste ve výsledcích
          vyhledávání. GEO a AEO řeší, jestli vás AI v odpovědi vůbec
          jmenuje a jestli o vás říká správné věci. Základ je ale společný:
          srozumitelný a technicky funkční web a důvěryhodné zmínky o vás i
          mimo něj. Dobré SEO je proto pro AI viditelnost základem, ne
          protikladem.
        </P>
      </>
    ),
  },
  {
    cat: "technicke" as Category,
    lead: "AI musí z webu i z dalších zdrojů jasně pochopit, kdo jste, co nabízíte, pro koho a kde.",
    q: "Co AI potřebuje, aby mohla mou firmu správně pochopit a doporučit?",
    a: (
      <>
        <P>
          Neexistuje jen jeden technický krok, který by vás automaticky
          dostal do AI doporučení, a nikdo by to neměl slibovat. Systémy
          musí zejména pochopit, kdo jste, co nabízíte, pro koho a kde.
        </P>
        <P>V praxi u klientů např. sleduji:</P>
        <ul className="mb-4 flex flex-col gap-2 text-[15px] text-ink-2">
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
    cat: "obecne" as Category,
    lead: "Protože AI vás ukáže lidem, kteří o vás zatím nevědí, kdežto sociální sítě hlavně těm, kdo vás už znají.",
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
    cat: "ceny" as Category,
    lead: "Ano, můžeme začít úvodní konzultací a o auditu rozhodnout až potom.",
    q: "Nevím, jestli potřebujeme celý audit. Můžeme se nejdříve sejít a probrat naši situaci?",
    a: (
      <P>
        Ano. Ne vždy je potřeba začít kompletním auditem AI
        viditelnosti. Nejdříve se můžeme sejít na krátkou konzultaci,
        ujasnit si situaci a podle toho zvolit další postup.
      </P>
    ),
  },
  {
    cat: "technicke" as Category,
    lead: "Na starší doméně někdy během dnů až týdnů, u nové domény spíš za měsíce, a slíbit se to nedá.",
    q: "Jak dlouho trvá, než se změny projeví v AI vyhledávání?",
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
    cat: "ceny" as Category,
    lead: "Ano, na obsahu a digitální identitě je potřeba pracovat i dál, technické kroky mohu zajistit já.",
    q: "Musíme na AI viditelnosti pracovat sami i po ukončení spolupráce?",
    a: (
      <>
        <P>
          Ano, na obsahu a digitální identitě. Technické kroky mohu v rámci
          implementace zajistit s vaším webmasterem. Na začátku si vždy
          rozdělíme, co uděláte vy, co webmaster a co já.
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
    cat: "ceny" as Category,
    lead: "To je běžné, spolupracuji s nimi na dálku i osobně přes jednu odpovědnou osobu.",
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
    cat: "technicke" as Category,
    lead: "Ano, ve strategii navrhnu, kde má smysl posílit vaši důvěryhodnost mimo web.",
    q: "Pomůžete nám i s budováním důvěryhodnosti mimo náš web?",
    a: (
      <>
        <P>Ano. Web je pouze jedním ze zdrojů informací o firmě.</P>
        <P>
          V rámci strategie mohu navrhnout, kde má smysl posílit vaši
          důvěryhodnost mimo vlastní web. Podle oboru a cílových
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
    cat: "technicke" as Category,
    lead: "Počítejte s několika měsíci, protože nová firma si musí digitální identitu teprve vybudovat.",
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
  {
    cat: "ceny" as Category,
    lead: "Obvykle 20 000–40 000 Kč podle velikosti firmy a webu.",
    q: "Kolik stojí audit AI viditelnosti?",
    a: (
      <P>
        Obvykle 20 000–40 000 Kč podle velikosti firmy a webu.
        Živnostníci a malé firmy jsou u spodní hranice, hotely s
        vícejazyčným webem nebo firmy s více provozovnami u horní.
        Přesnou cenu řeknu po úvodní konzultaci a cenu konzultace
        z auditu odečtu.
      </P>
    ),
  },
  {
    cat: "ceny" as Category,
    lead: "Ne, audit vám sám ukáže, co a v jakém pořadí řešit.",
    q: "Musím si po auditu objednat strategii?",
    a: (
      <P>
        Ne. Audit vám sám ukáže, co a v jakém pořadí řešit.
        Některé kroky zvládnete sami nebo s webmasterem. Strategie
        dává smysl, když chcete doporučení rozpracovat do hotových
        textů a technických podkladů.
      </P>
    ),
  },
  {
    cat: "ceny" as Category,
    lead: "Váš webmaster, já dodám hotové podklady a na přání převezmu i komunikaci s ním.",
    q: "Kdo provede úpravy na webu?",
    a: (
      <P>
        Úpravy nejsou součástí auditu ani strategie. Ve strategii
        dodám hotové podklady, které váš webmaster jen vloží na web.
        Pokud chcete, převezmu komunikaci s webmasterem a kontrolu
        nasazení jako samostatnou službu.
      </P>
    ),
  },
  {
    cat: "ceny" as Category,
    lead: "U auditu téměř žádný, jen úvodní konzultaci a hodinové projití výsledků.",
    q: "Kolik mi spolupráce zabere času?",
    a: (
      <P>
        U auditu téměř žádný. Nepotřebuji přístupy do webu, vycházím z
        veřejně dostupných zdrojů. Váš čas zabere úvodní
        konzultace a hodinové projití výsledků.
      </P>
    ),
  },
  {
    cat: "obecne" as Category,
    lead: "Ne, to nemůže poctivě zaručit nikdo.",
    q: "Zaručíte mi první místo v odpovědích AI?",
    a: (
      <P>
        Ne, to nemůže poctivě zaručit nikdo. Zaručím vám, že
        budete vědět, na čem vaše viditelnost v AI stojí, kde je
        slabá a co ji může posílit.
      </P>
    ),
  },
];

// Plochý text odpovědí pro FAQPage schema (bez formátování, pro AI a vyhledávače)
const questionsPlain = [
  {
    q: questions[0].q,
    a: "Nejjednodušší způsob je otevřít Google nebo ChatGPT a zeptat se, ideálně odpojeni od firemní wifi, v anonymním režimu a bez GPS. Zeptejte se tak, jak by vaše služby hledal zákazník, bez uvedení názvu firmy. Pokud se neobjevíte, zkuste brandový dotaz typu Proč jsi mi nedoporučil/a [název firmy]?",
  },
  {
    q: questions[1].q,
    a: "GEO (Generative Engine Optimization) a AEO (Answer Engine Optimization) jsou nové názvy pro práci na tom, aby vás AI systémy jako ChatGPT, Perplexity nebo AI v Googlu uváděly ve svých odpovědích. V praxi jde o SEO pro AI vyhledávání. Klasické SEO řeší pozici ve výsledcích vyhledávání, GEO a AEO to, jestli vás AI v odpovědi jmenuje a co o vás říká. Základ je společný: srozumitelný a technicky funkční web a důvěryhodné zmínky i mimo něj.",
  },
  {
    q: questions[2].q,
    a: "AI systémy musí pochopit, kdo jste, co nabízíte, pro koho a kde. Roli hraje stáří domény, nastavení on-page SEO, odborný obsah na webu, Google Business Profil s recenzemi a PR aktivity budující digitální identitu napříč internetem.",
  },
  {
    q: questions[3].q,
    a: "Sociální sítě oslovují hlavně lidi, kteří vás už znají. AI viditelnost cílí na potenciální zákazníky, kteří o vás ještě nevědí, a může vás dostat mezi firmy, které zvažují, i když finální rozhodnutí vždy dělá člověk.",
  },
  {
    q: questions[4].q,
    a: "Ne vždy je potřeba začít kompletním auditem AI viditelnosti. Nejdříve se lze sejít na krátkou konzultaci, ujasnit situaci a podle toho zvolit další postup.",
  },
  {
    q: questions[5].q,
    a: "Záleží na stáří domény a dalších faktorech. U nové domény to může trvat měsíce, u starší domény se dobře nastavené on-page SEO může projevit během dnů až týdnů. Nelze to zobecnit ani slíbit.",
  },
  {
    q: questions[6].q,
    a: "Ano, na obsahu a digitální identitě. Technické kroky mohu v rámci implementace zajistit s vaším webmasterem. Na začátku si vždy rozdělíme, co uděláte vy, co webmaster a co já. Pro udržení AI viditelnosti je potřeba stále pracovat na odborném obsahu a budovat digitální identitu i mimo web.",
  },
  {
    q: questions[7].q,
    a: "Ano, spolupráce s vlastním webmasterem nebo marketingovým týmem je běžná, na dálku i osobně, vždy s jednou odpovědnou kontaktní osobou.",
  },
  {
    q: questions[8].q,
    a: "Ano, v rámci strategie lze navrhnout posílení důvěryhodnosti mimo web — odborné články, média, rozhovory, partnerské weby, katalogy nebo profesní profily, podle oboru a cílových zákazníků.",
  },
  {
    q: questions[9].q,
    a: "U nové firmy může trvat déle, než se informace stabilně objeví ve vyhledávání a AI doporučeních. Základem je web s jasnými informacemi, Google Business Profil, recenze a zmínky napříč internetem. Přesnou lhůtu nelze slíbit.",
  },
  {
    q: questions[10].q,
    a: "Obvykle 20 000–40 000 Kč podle velikosti firmy a webu. Živnostníci a malé firmy jsou u spodní hranice, hotely s vícejazyčným webem nebo firmy s více provozovnami u horní. Přesnou cenu řeknu po úvodní konzultaci a cenu konzultace z auditu odečtu.",
  },
  {
    q: questions[11].q,
    a: "Ne. Audit vám sám ukáže, co a v jakém pořadí řešit. Některé kroky zvládnete sami nebo s webmasterem. Strategie dává smysl, když chcete doporučení rozpracovat do hotových textů a technických podkladů.",
  },
  {
    q: questions[12].q,
    a: "Úpravy nejsou součástí auditu ani strategie. Ve strategii dodám hotové podklady, které váš webmaster jen vloží na web. Pokud chcete, převezmu komunikaci s webmasterem a kontrolu nasazení jako samostatnou službu.",
  },
  {
    q: questions[13].q,
    a: "U auditu téměř žádný. Nepotřebuji přístupy do webu, vycházím z veřejně dostupných zdrojů. Váš čas zabere úvodní konzultace a hodinové projití výsledků.",
  },
  {
    q: questions[14].q,
    a: "Ne, to nemůže poctivě zaručit nikdo. Zaručím vám, že budete vědět, na čem vaše viditelnost v AI stojí, kde je slabá a co ji může posílit.",
  },
];


// Slovníček odborných pojmů, které se na webu objevují
const glossary = [
  {
    term: "SEO pro AI vyhledávání",
    def: "Práce na tom, aby vás AI systémy jako ChatGPT, Perplexity nebo Přehled od AI v Googlu jmenovaly ve svých odpovědích, když se zákazník zeptá na váš obor.",
  },
  {
    term: "AI vyhledávání (AI Search)",
    def: "Hledání, při kterém místo seznamu odkazů dostanete hotovou odpověď od AI, často i s doporučením konkrétních firem.",
  },
  {
    term: "GEO a AEO",
    def: "Generative Engine Optimization a Answer Engine Optimization, anglické názvy pro SEO pro AI vyhledávání.",
  },
  {
    term: "Přehled od AI (AI Overview)",
    def: "Shrnutí od AI, které Google zobrazuje nad běžnými výsledky vyhledávání.",
  },
  {
    term: "Důvěryhodnost (digitální autorita)",
    def: "Míra, do jaké vyhledávače a AI věří, že jste skutečná a uznávaná firma, podle recenzí, zmínek v médiích, katalogů a odkazů z jiných webů.",
  },
  {
    term: "Digitální identita (entita)",
    def: "Firma tak, jak ji chápou vyhledávače: jméno, adresa, obor a vazby na další zdroje, které se navzájem potvrzují.",
  },
  {
    term: "On-page SEO",
    def: "Úpravy přímo na vašem webu, tedy texty, nadpisy, struktura stránek a popisky, aby bylo jasné, kdo jste a co nabízíte.",
  },
  {
    term: "Strukturovaná data",
    def: "Skrytý popis firmy v kódu webu, ze kterého vyhledávače a AI přesně vyčtou název, adresu, služby nebo ceny.",
  },
  {
    term: "Brandový dotaz",
    def: "Dotaz, ve kterém zákazník uvede název vaší firmy. Opakem je dotaz na obor nebo situaci, kde jméno nezazní.",
  },
];

export default function FAQ() {
  return (
    <>
      <FAQJsonLd
        items={[
          ...questionsPlain.map((item, i) => ({ q: item.q, a: `${questions[i].lead} ${item.a}` })),
          ...glossary.map((g) => ({ q: `Co znamená ${g.term}?`, a: g.def })),
        ]}
      />
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "FAQ" }]} />
        <Eyebrow>FAQ</Eyebrow>
        <H1>Máte otázku? Začněme tady.</H1>
        <P>
          Od toho, jak AI vidí vaši firmu, po to, co pro svou viditelnost
          můžete udělat.
        </P>

        <nav aria-label="Kategorie otázek" className="mt-4 flex flex-wrap gap-x-6 font-mono text-[13px] tracking-[0.04em] text-muted">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="py-3 underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
            >
              {c.label}
            </a>
          ))}
        </nav>
      </Section>

      {categories
        .filter((c) => c.id !== "slovnicek")
        .map((c) => (
          <Section key={c.id}>
            <div id={c.id} className="scroll-mt-28">
              <H2>{c.title}</H2>
              <div className="flex flex-col border-t border-rule">
                {questions
                  .filter((item) => item.cat === c.id)
                  .map((item) => (
                    <details key={item.q} className="group border-b border-rule">
                      <summary className="flex min-h-11 items-center justify-between gap-4 py-5">
                        <span className="font-serif text-[20px] leading-[1.35] text-ink md:text-[22px]">{item.q}</span>
                        <span
                          aria-hidden="true"
                          className="shrink-0 font-mono text-[20px] text-muted transition-transform duration-200 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <div className="pb-4 pr-8">
                        <p className="mb-5 max-w-[62ch] text-[18px] font-semibold leading-[1.6] text-ink">{item.lead}</p>
                        {item.a}
                      </div>
                    </details>
                  ))}
              </div>
            </div>
          </Section>
        ))}

      <Section>
        <div id="slovnicek" className="scroll-mt-28">
          <H2>Slovníček</H2>
          <P>Odborné pojmy, které na webu používám, vysvětlené jednou větou.</P>
          <dl className="mt-6 border-t border-rule">
            {glossary.map((g) => (
              <div key={g.term} className="flex flex-col gap-1 border-b border-rule py-5 sm:flex-row sm:gap-8">
                <dt className="flex-none font-serif text-[20px] leading-[1.35] text-ink sm:w-56">{g.term}</dt>
                <dd className="max-w-[56ch] text-[17px] leading-[1.65] text-ink-2">{g.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </>
  );
}
