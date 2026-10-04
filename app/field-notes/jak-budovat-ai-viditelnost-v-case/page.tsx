import Image from "next/image";
import Link from "next/link";
import { H1, H2, P, Section } from "@/components/Ui";
import { ArticleMeta } from "@/components/ArticleParts";
import { ArticleJsonLd, Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

const TITLE = "Jak budovat AI viditelnost v čase — Eva Sezemská";
const DESCRIPTION =
  "Po technickém základu přichází obsah, recenze a lokální autorita. Závěr případové studie AI viditelnosti fotografky z Českého ráje: co dělat průběžně.";
const URL_PATH = "/field-notes/jak-budovat-ai-viditelnost-v-case";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: "article",
    locale: "cs_CZ",
    url: URL_PATH,
    siteName: "Eva Sezemská — AI Search Strategist",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: "2026-10-04",
    authors: ["Eva Sezemská"],
    images: [{ url: "/images/eva-portrait.png", width: 800, height: 800, alt: "Eva Sezemská" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/eva-portrait.png"],
  },
};

const linkClass =
  "text-cream underline decoration-gold/40 underline-offset-4 hover:decoration-gold";
const strongClass = "font-semibold text-cream";
const listItemClass = "text-[15px] text-cream/80";

export default function Article() {
  return (
    <>
      <ArticleJsonLd
        headline="Jak budovat AI viditelnost v čase"
        description={DESCRIPTION}
        url={URL_PATH}
        datePublished="2026-10-04"
      />
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Field Notes", href: "/field-notes" }, { label: "AI viditelnost v čase" }]} />
        <ArticleMeta category="Budování AI viditelnosti · Case Note · část 4/4" date="4. 10. 2026" />
        <H1>Jak budovat AI viditelnost v čase</H1>
        <P>
          <strong className={strongClass}>Autor:</strong> Eva Sezemská, AI Search
          Strategist (
          <Link href="/o-mne" className={linkClass}>
            o autorce
          </Link>
          )
        </P>
        <P>
          <em>
            Toto je poslední díl čtyřdílné případové studie o AI viditelnosti
            fotografky Michaely Čížkové. Předchozí díly:{" "}
            <Link href="/field-notes/proc-ai-zamenila-identitu" className={linkClass}>
              Jak AI zaměnila identitu mé klientky
            </Link>{" "}
            (část 1/4),{" "}
            <Link href="/field-notes/co-jsme-museli-nasadit" className={linkClass}>
              Co jsme museli nasadit, aby AI web přečetla
            </Link>{" "}
            (část 2/4) a{" "}
            <Link href="/field-notes/implementace-a-overeni" className={linkClass}>
              Strategie nestačí – jak jsme ji dostali na živý web
            </Link>{" "}
            (část 3/4). Výsledky měření najdete v samostatném článku{" "}
            <Link href="/field-notes/vysledky-po-31-dnech" className={linkClass}>
              Od záměny identity k 23 z 30 doporučení: případová studie AI
              viditelnosti po 31 dnech
            </Link>
            .
          </em>
        </P>
      </Section>

      <Section>
        <H2>1. Proč nestačí jen technické základy?</H2>
        <P>
          Technický základ webu je <strong className={strongClass}>první vrstva</strong>,
          na které teď může růst Michaelina digitální autorita. Tato první
          vrstva pomáhá AI vůbec pochopit Michaelinu digitální identitu, ale
          dlouhodobou autoritu může budovat obsahem (např. články na blogu) a
          externími signály (zmínky v katalozích a článcích, recenze).
        </P>
        <P>
          Společně s webmasterem Michalem Jirákem jsme{" "}
          <Link href="/field-notes/implementace-a-overeni" className={linkClass}>
            opravili první vrstvu
          </Link>{" "}
          a po 31 dnech máme{" "}
          <Link href="/field-notes/vysledky-po-31-dnech" className={linkClass}>
            první srovnávací výsledky
          </Link>{" "}
          – <strong className={strongClass}>z 20 % doporučení v AI vyhledávačích na 76,7 %.</strong>
        </P>
        <figure className="my-6">
          <Image
            src="/images/ai-viditelnost-pred-a-po-31-dnech.png"
            alt="Srovnání úspěšnosti doporučení Michaely Čížkové v ChatGPT, Google AI Overview a Perplexity: květen 2026 a září 2026, celkově z 20 % na 76,7 %"
            width={1600}
            height={900}
            sizes="(min-width: 896px) 848px, calc(100vw - 48px)"
            className="h-auto w-full rounded-sm"
          />
        </figure>
        <P>
          Testována byla stejná sada dotazů a zlepšení je viditelné na první
          pohled. Nejde ale o izolovaný experiment –{" "}
          <strong className={strongClass}>během těch 31 dnů se měnilo víc věcí najednou</strong>,
          takže nelze s jistotou říct, která konkrétní úprava přispěla nejvíc.
        </P>
        <blockquote className="my-6 rounded-sm border-l-2 border-gold/60 bg-white/5 px-5 py-4">
          <p className="mb-3 text-[15.5px] leading-relaxed text-cream/75">
            <strong className={strongClass}>Zajímavý poznatek z terénu:</strong>
          </p>
          <p className="mb-3 text-[15.5px] leading-relaxed text-cream/75">
            <em>
              Při testování jsem narazila na zajímavý protipříklad – fotografku,
              která teprve začíná podnikat a nemá klasický web, jako web uvádí
              svůj Instagram profil (silnější než ten Michaelin), k tomu aktivní
              Google Business Profile s recenzemi a IČO. V Google AI Overview se
              přesto objevila jako doporučení, zatímco v ostatních AI systémech
              ne.
            </em>
          </p>
          <p className="text-[15.5px] leading-relaxed text-cream/75">
            <em>
              Ukazuje to, že v některých případech{" "}
              <strong className={strongClass}>může Google doporučit podnik i bez klasického webu</strong>,
              pokud má k dispozici jiné silné veřejné signály, například aktivní
              Business Profile a veřejně dostupný obsah. V tomto konkrétním
              případě se však stejný efekt neprojevil v ostatních testovaných AI
              systémech.
            </em>
          </p>
        </blockquote>
      </Section>

      <Section>
        <H2>2. Jak vypadá pyramida vrstev pro AI viditelnost?</H2>
        <P>
          Pro tento projekt jsem si AI viditelnost rozdělila do několika vrstev,
          které mi pomáhají při auditu určit, kde může být problém a co má
          smysl řešit jako první.
        </P>
        <figure className="my-6">
          <Image
            src="/images/pyramida-vrstev-ai-viditelnosti.png"
            alt="Pyramida vrstev AI viditelnosti: technický základ, lokální autorita, obsahová autorita a sociální sítě"
            width={1300}
            height={1250}
            sizes="(min-width: 640px) 576px, calc(100vw - 48px)"
            className="mx-auto h-auto w-full max-w-xl rounded-sm"
          />
        </figure>
        <ul className="flex flex-col gap-3">
          <li className={listItemClass}>
            Technická čitelnost webu,{" "}
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
              className={linkClass}
            >
              strukturovaná data
            </a>{" "}
            a{" "}
            <Link href="/field-notes/co-jsme-museli-nasadit" className={linkClass}>
              on-page SEO
            </Link>{" "}
            tvoří základní vrstvu, na které může další práce s obsahem a
            autoritou stavět.
          </li>
          <li className={listItemClass}>
            Lokální autoritu má Michaela vybudovanou již od doby vzniku svého
            podnikání – byznys profil na Google nebo Firmy.cz a postupně sbírá
            recenze.
          </li>
          <li className={listItemClass}>
            Obsahovou autoritu je potřeba budovat postupně v čase, nelze ji
            nahradit pouze technickou úpravou. Jak ji budovat, popisuji dál v
            tomto článku.
          </li>
          <li className={listItemClass}>
            Sociální sítě jako poslední vrstva, které jsou blíže lidem než
            vyhledávačům. Neznamená ale, že jsou zbytečné – jen nejsou tak
            důležité pro AI jako ostatní vrstvy.
          </li>
        </ul>
      </Section>

      <Section>
        <H2>3. Jak má vypadat budování obsahové autority u fotografky?</H2>
        <P>
          Na budoucí fázi budování autority bylo potřeba myslet už při stavění
          nového webu, kde byla připravena nová stránka blogu s názvem „Fotoblog
          z Ráje&quot;.
        </P>
        <P>
          Do blogu bude Michaela psát{" "}
          <strong className={strongClass}>články a tipy, které budou užitečné jak pro lidi, tak pro AI.</strong>{" "}
          Nemělo by ale jít o obecné tipy, kterých je na internetu plno, ale o{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
            className={linkClass}
          >
            autentické zážitky a zkušenosti z fotografování
          </a>
          , které by mohly být v AI odpovědi citovány. Praktický a konkrétní
          obsah může být formou, jak se do AI odpovědi také dostat.
        </P>
        <P>
          Vzhledem k tomu, že Michaela je lokalizovaná na oblast Českého ráje,
          její články by měly obsahovat jak tipy na focení v různých lokalitách,
          která lokalita je např. vhodná pro rodiny a která pro páry atd., tak i
          praktické rady, jak se např. na focení připravit. Dostala ode mě i
          tyto návrhy na články s doporučením publikovat alespoň jednou za dva
          měsíce:
        </P>
        <ul className="mb-4 flex flex-col gap-3">
          <li className={listItemClass}>Nejkrásnější místa pro focení v Českém ráji</li>
          <li className={listItemClass}>Jak se obléknout na focení – průvodce pro celé rodiny</li>
          <li className={listItemClass}>Kdy je nejlepší světlo na focení na Troskách</li>
          <li className={listItemClass}>Jak probíhá newborn focení doma</li>
          <li className={listItemClass}>Jak se připravit na rodinné focení venku</li>
          <li className={listItemClass}>
            Brandové focení pro podnikatelky – proč je důležité mít kvalitní
            promo fotografie
          </li>
          <li className={listItemClass}>
            Nejlepší místa pro fotky na Instagram v Mladé Boleslavi, Turnově,
            Jičíně a Českém ráji
          </li>
        </ul>
        <P>
          Z{" "}
          <Link href="/field-notes/vysledky-po-31-dnech" className={linkClass}>
            testování po 31 dnech
          </Link>{" "}
          vyšlo jasně najevo, že lokality jako Turnov a Mladá Boleslav je nutné
          posílit a Michaela na ně nebyla doporučována. Blogové články jsou tedy
          místem, kde může Michaela posílit svou lokální autoritu i pro tato
          místa v Českém ráji. Nutno dodat, že se to nestane jedním blog článkem
          a tato autorita bude muset být vybudována až časem.
        </P>
      </Section>

      <Section>
        <H2>4. Jakou roli hrají sociální sítě v AI viditelnosti?</H2>
        <P>
          Sociální sítě mohou pro vizuální obor jako je fotografie fungovat jako
          hlavní poptávkový kanál. Michaelu zde skutečně její klienti nacházejí
          a také přímo kontaktují.
        </P>
        <P>
          Pro stabilní AI viditelnost je ale{" "}
          <strong className={strongClass}>sociální síť spíše doplňkový signál</strong>. AI
          vyhledávače většinou nečtou obsah sociálních sítí v reálném čase,
          některé tam nemají ani přístup a nemohou odtud nasávat informace. To
          důležité čerpají z webu a strukturovaných dat, ne z uzavřených
          platforem určených primárně pro lidi a komunitu.
        </P>
        <P>
          Odkazy na Michaelin Instagram i Facebook jsou uvedené jak ve
          strukturovaných datech na webu, tak i přímo jako prokliky na tyto
          profily.
        </P>
        <P>
          Michaela dále používá geotagy mířené na Český ráj a zmiňuje konkrétní
          lokality u jednotlivých příspěvků.
        </P>
        <P>
          Sociální sítě tak pro Michaelu zůstávají klíčové pro byznys a reálné
          poptávky, ale nejsou hlavní pákou pro AI viditelnost. Při hledání na
          sociálních sítích jsou také lidé odkázáni na to, koho jim algoritmus
          Instagramu zrovna nabídne.
        </P>
        <P>
          Veřejný web má v tomto směru jednu důležitou výhodu: konkrétní
          stránka může být nalezena prostřednictvím konkrétního dotazu a může
          zároveň poskytovat jednoznačné informace o službě, lokalitě nebo
          autorovi.
        </P>
      </Section>

      <Section>
        <H2>5. A co recenze, jsou pro AI důležité?</H2>
        <P>
          Ze své praxe si dovolím říct, že recenze jsou oprávněně hned za
          kvalitně optimalizovaným webem. Pro AI je recenze veřejný signál, že
          to, co o sobě Michaela sama píše na svém webu a jak se prezentuje na
          sociálních sítích, je pravda.
        </P>
        <P>
          Michaela tedy důsledně žádá každého klienta, aby veřejně ohodnotil její
          práci a přístup. Ne jen na Instagramu pod fotografií, ale{" "}
          <strong className={strongClass}>hlavně na veřejných business profilech</strong>, kde
          si recenzi přečte jak AI vyhledávač, tak člověk.
        </P>
        <P>
          Nejde ale jen o to, aby recenze existovala. Čím konkrétnější je, tím
          lépe, protože ze zkušenosti vím, že například{" "}
          <strong className={strongClass}>
            <a
              href="https://developers.google.com/search/docs/appearance/ai-features"
              className={linkClass}
            >
              Google AI Overview
            </a>{" "}
            do odpovědi použije i obsah recenze.
          </strong>{" "}
          Při testování jsem si všimla, že i když se na webu nikde nevyskytují
          informace o tom, že by Michaela fotila rodiny i s domácím mazlíčkem,
          Google to v odpovědi uvedl. Proč? V jedné z recenzí je totiž napsáno,
          že „pejsci nebyli problém.&quot;
        </P>
        <P>
          Vhodné je také na recenze průběžně odpovídat. Pomáhá to udržovat
          komunikaci se zákazníky a zároveň to dobře působí na lidi, kteří si
          profil prohlížejí.
        </P>
      </Section>

      <Section>
        <H2>6. Jak si AI viditelnost udržet v čase?</H2>
        <P>
          Pro udržení AI viditelnosti je potřeba postupovat systematicky tak, aby
          se všechny vrstvy, které AI potřebuje, neustále zpevňovaly.{" "}
          <strong className={strongClass}>Prakticky</strong> to znamená aktivitu, která
          průběžně podporuje Michaelinu digitální identitu a autoritu.
        </P>
        <P>
          V praxi to není jednoduché udržet, ale tyto aktivity by se měly stát
          běžnou součástí moderního marketingu značky. Základní doporučení pro
          Michaelu jsou:
        </P>
        <div className="mb-6 overflow-x-auto">
          <table className="w-full border-collapse text-[14px] text-cream/80">
            <thead>
              <tr className="border-b border-white/10 text-left font-mono text-[11px] uppercase tracking-wider text-cream/45">
                <th scope="col" className="py-3 pr-4 font-normal">Aktivita</th>
                <th scope="col" className="py-3 font-normal">Frekvence</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 text-cream">Žádost o recenzi</td>
                <td className="py-3">Po každém focení</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 text-cream">Odpověď na recenze</td>
                <td className="py-3">Průběžně</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 text-cream">Příspěvek na Instagramu a Facebooku</td>
                <td className="py-3">1–2× týdně</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 text-cream">Příspěvek na Google Business Profile</td>
                <td className="py-3">2× měsíčně</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 text-cream">Nový článek na blogu</td>
                <td className="py-3">1× za 2 měsíce</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 text-cream">Kontrola konzistence jména, adresy a telefonu (NAP)</td>
                <td className="py-3">Pravidelně</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-cream">Aktualizace cen ve schema markupu a v souboru llms.txt</td>
                <td className="py-3">Při každé změně ceníku</td>
              </tr>
            </tbody>
          </table>
        </div>
        <P>
          Nejde o to věnovat tomu několik hodin týdně, jde o pravidelnost. I
          krátká, ale dlouhodobě konzistentní aktivita může být silnější signál
          než jedna obrovská kampaň jednou za půl roku.
        </P>
        <P>
          Z jednoho článku na blogu může vzniknout i několik silných příspěvků na
          sociální sítě – možnosti, jak obsah recyklovat, jsou prakticky
          neomezené.
        </P>
      </Section>

      <Section>
        <H2>7. Je AI viditelnost jednorázová práce, nebo běh na dlouhou trať?</H2>
        <P>
          Budování AI viditelnosti je dlouhodobá práce. Výsledky se mohou měnit
          podle dotazu, lokality, služby i konkrétního AI systému, proto dává
          větší smysl průběžné měření než jednorázový test.
        </P>
        <P>
          Jakmile jsou základní vrstvy postavené, je potřeba je průběžně
          rozvíjet a kontrolovat. U Michaely to znamená především pracovat s
          obsahem, lokálními signály, recenzemi a pravidelně sledovat, kde se ve
          výsledcích objevuje a kde naopak stále chybí.
        </P>
        <P>
          Proto je také velmi vhodné mít někoho, kdo vám výsledky jednou za dva
          měsíce zkontroluje, nebo vám dá konkrétní tipy, na čem dál pracovat.
          Například jaká témata budou přirozeně podporovat principy{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
            className={linkClass}
          >
            E-E-A-T
          </a>{" "}
          (Experience – Expertise – Authoritativeness – Trustworthiness).
        </P>
        <P>
          I to je část mé práce: nejen pomoci značce AI viditelnost vybudovat,
          ale následně sledovat, jak se vyvíjí a kde je potřeba ji dál posilovat.
        </P>
        <P>
          <strong className={strongClass}>Metodická poznámka:</strong> Výsledek 23/30
          představuje podíl testovaných dotazů, ve kterých se Michaela podle
          předem stanovené metodiky objevila v odpovědi AI systému. Nejde o
          obecnou míru AI viditelnosti a z tohoto měření nelze izolovat vliv
          jednotlivých změn provedených během projektu.
        </P>
      </Section>

      <Section>
        <H2>Zdroje</H2>
        <P>Odkazy vedou na anglické originály dokumentace Google Search Central.</P>
        <ul className="flex flex-col gap-3">
          <li className={listItemClass}>
            <a
              href="https://developers.google.com/search/docs/appearance/ai-features"
              className={linkClass}
            >
              AI features and your website
            </a>{" "}
            – jak AI Overviews a AI Mode fungují z pohledu majitele webu. Google
            uvádí, že pro ně není potřeba zvláštní optimalizace a platí běžné
            základy SEO.
          </li>
          <li className={listItemClass}>
            <a
              href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
              className={linkClass}
            >
              Creating helpful, reliable, people-first content
            </a>{" "}
            – zdroj pojmu E-E-A-T a otázek „kdo, jak a proč&quot; při tvorbě
            obsahu.
          </li>
          <li className={listItemClass}>
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
              className={linkClass}
            >
              Introduction to structured data markup in Google Search
            </a>{" "}
            – jak Google používá strukturovaná data.
          </li>
          <li className={listItemClass}>
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/local-business"
              className={linkClass}
            >
              Local business structured data
            </a>{" "}
            – značení lokálního podnikání.
          </li>
          <li className={listItemClass}>
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/review-snippet"
              className={linkClass}
            >
              Review snippet structured data
            </a>{" "}
            – pravidla pro recenze. Podnik, který sám kontroluje recenze o sobě
            (například jejich vložením na vlastní web), nemá nárok na zobrazení
            hvězdiček ve výsledcích vyhledávání.
          </li>
          <li className={listItemClass}>
            <a
              href="https://developers.google.com/search/docs/essentials"
              className={linkClass}
            >
              Google Search Essentials
            </a>{" "}
            – technické požadavky a základní doporučení pro vyhledávání.
          </li>
        </ul>
      </Section>

      <Section>
        <H2>Další díly série</H2>
        <ul className="flex flex-col gap-3">
          <li className={listItemClass}>
            <Link href="/field-notes/proc-ai-zamenila-identitu" className={linkClass}>
              Jak AI zaměnila identitu mé klientky
            </Link>{" "}
            – část 1/4
          </li>
          <li className={listItemClass}>
            <Link href="/field-notes/co-jsme-museli-nasadit" className={linkClass}>
              Co jsme museli nasadit, aby AI web přečetla
            </Link>{" "}
            – část 2/4
          </li>
          <li className={listItemClass}>
            <Link href="/field-notes/implementace-a-overeni" className={linkClass}>
              Strategie nestačí – jak jsme ji dostali na živý web
            </Link>{" "}
            – část 3/4
          </li>
          <li className={listItemClass}>
            <Link href="/field-notes/vysledky-po-31-dnech" className={linkClass}>
              Od záměny identity k 23 z 30 doporučení: případová studie AI
              viditelnosti po 31 dnech
            </Link>
          </li>
        </ul>
      </Section>
    </>
  );
}
