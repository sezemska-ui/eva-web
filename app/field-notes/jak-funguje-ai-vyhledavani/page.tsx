import Link from "next/link";
import { H1, H2, P, Section, CtaBox } from "@/components/Ui";
import { ArticleMeta, AuthorBox } from "@/components/ArticleParts";
import { ArticleJsonLd, Breadcrumbs, FAQJsonLd } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { getNote } from "@/lib/fieldNotes";

const TITLE = "Jak funguje AI vyhledávání a čím se liší od Googlu — Eva Sezemská";
const HEADLINE = "Jak funguje AI vyhledávání a čím se liší od klasického Googlu?";
const DESCRIPTION =
  "Klasický Google vám dá seznam odkazů, AI rovnou odpověď a doporučení. Co to mění pro firmy a jak zjistit, jestli vás AI zákazníkům doporučuje.";
const URL_PATH = "/field-notes/jak-funguje-ai-vyhledavani";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: URL_PATH,
  article: {
    publishedTime: getNote(URL_PATH).datePublished,
    modifiedTime: getNote(URL_PATH).dateModified,
  },
});

const linkClass =
  "text-cream underline decoration-gold/40 underline-offset-4 hover:decoration-gold";
const strongClass = "font-semibold text-cream";
const listItemClass = "text-[15px] text-cream/80";
const h3Class = "mb-3 mt-8 font-serif text-lg text-cream";

// Stejný text jako ve viditelné sekci „Časté otázky“, pro FAQPage schema
const faq = [
  {
    q: "Nahradí AI vyhledávání Google?",
    a: "Zatím ne. Lidé používají obojí a AI často čerpá právě z výsledků Googlu.",
  },
  {
    q: "Dá se zaplatit, aby mě AI doporučila?",
    a: "Ne přímo. Doporučení se nedá koupit, záleží na tom, co o vás AI najde a čemu věří. Reklama se v AI ale už objevuje: v ChatGPT se zobrazuje pod odpovědí, označená a oddělená od samotné odpovědi. Kde a komu se zobrazuje, se liší podle země a typu účtu. Placená reklama a doporučení jsou tedy dvě různé věci.",
  },
  {
    q: "Týká se to i malých lokálních firem?",
    a: "Ano, často nejvíc. Dotazy typu „kde v okolí…“ jsou přesně ty, na které AI odpovídá doporučením.",
  },
];

export default function Article() {
  return (
    <>
      <ArticleJsonLd
        headline={HEADLINE}
        description={DESCRIPTION}
        url={URL_PATH}
      />
      <FAQJsonLd items={faq} />
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Field Notes", href: "/field-notes" }, { label: "Jak funguje AI vyhledávání" }]} />
        <ArticleMeta category="Průvodce" href="/field-notes/jak-funguje-ai-vyhledavani" />
        <H1>{HEADLINE}</H1>
        <P>
          <strong className={strongClass}>Autorka:</strong> Eva Sezemská, AI Search
          Strategist (
          <Link href="/o-mne" className={linkClass}>
            o autorce
          </Link>
          )
        </P>

        <div className="my-6 rounded-sm border border-gold/30 bg-white/5 p-5 sm:p-6">
          <p className="mb-3 text-[15px] font-semibold text-cream">Ve zkratce</p>
          <ul className="flex flex-col gap-2 text-[14px] text-cream/70">
            <li>
              Klasický Google vám ukáže seznam odkazů a vybíráte vy. AI
              vyhledávání informace porovná a rovnou vám doporučí několik
              možností.
            </li>
            <li>
              AI se snaží pochopit, co opravdu potřebujete, rozloží dotaz na
              menší hledání a porovná web, recenze, firemní profily, katalogy i
              média.
            </li>
            <li>
              Vysoká pozice v Googlu nezaručuje, že vás AI doporučí. AI vybírá
              firmy, o kterých má nejvíc potvrzených informací.
            </li>
            <li>
              AI s vámi může naložit čtyřmi způsoby: vůbec vás nezmíní, čerpá z
              vás, ale doporučí konkurenci, doporučí vás s chybami, nebo vás
              doporučí přesně.
            </li>
            <li>
              SEO je pořád základ. K tomu ale potřebujete, aby vás AI pochopila
              a věřila vám.
            </li>
          </ul>
        </div>

        <P>
          AI vyhledávání a klasické vyhledávání stojí na stejném základu: obojí
          čerpá z internetu. Liší se v tom, kdo za vás hledá a jak vám výsledek
          předá. Klasický Google vám ukáže seznam odkazů a vybíráte vy. AI
          asistent informace z více zdrojů porovná, spojí do jedné odpovědi a
          rovnou vám doporučí několik možností. Často se ho můžete i v rámci
          konverzace doptat a výběr zpřesnit.
        </P>
      </Section>

      <Section>
        <H2>Rozdíl mezi AI vyhledáváním a klasickým Googlem na příkladu</H2>
        <P>
          Představte si internet jako obrovskou knihovnu. V hlavním sále jsou
          katalogy, tedy weby všech firem. Ve vedlejším oddělení najdete
          brožury s recenzemi na tyto katalogy. A o kus dál je oddělení, kde o
          nich nezávisle píšou jiní: média, průvodci, katalogy firem.
        </P>
        <P>
          Řeknete, co hledáte: „Potřebuji wellness hotel v Českém ráji s
          výhledem.“ Obsloužit vás může knihovník A (klasický Google), nebo
          knihovník B (AI asistent, například režim AI v Googlu nebo ChatGPT).
        </P>

        <h3 className={h3Class}>Knihovník A (klasický Google)</h3>
        <ul className="flex flex-col gap-3">
          <li className={listItemClass}>
            najde katalogy, které odpovídají vašim slovům
          </li>
          <li className={listItemClass}>
            přinese vám jich sto, seřazené podle toho, jak dobře odpovídají
            vašemu dotazu a jak kvalitní jsou
          </li>
          <li className={listItemClass}>
            řekne vám, ať si je projdete a vyberete, a odejde
          </li>
          <li className={listItemClass}>
            případně vás pošle na srovnávač, kde je všechno pohromadě, ale
            proklikat se musíte stejně
          </li>
        </ul>

        <h3 className={h3Class}>Knihovník B (AI asistent)</h3>
        <ul className="flex flex-col gap-3">
          <li className={listItemClass}>
            nejdřív se zamyslí nad tím, co opravdu chcete: wellness s výhledem
            nejspíš znamená romantiku, ne služební cestu, a možná i dobrou
            restauraci
          </li>
          <li className={listItemClass}>
            projde katalogy hotelů, recenze i zmínky v ostatních odděleních
          </li>
          <li className={listItemClass}>
            přinese vám několik hotelů, které podle něj sedí
          </li>
          <li className={listItemClass}>
            doptá se, co je pro vás důležité, a výběr zpřesní
          </li>
          <li className={listItemClass}>
            za pár minut máte hotel, na který byste v seznamu stovky katalogů
            možná vůbec nenarazili
          </li>
        </ul>

        <h3 className={h3Class}>Proč na tom záleží</h3>
        <P>
          Knihovník B vám nepřinese všechno, jen pár hotelů. Když váš katalog
          chybí, když si recenze a zmínky protiřečí, když o vás nikdo jinde
          nepíše, nebo když pro dané zadání nejste nejlepší volba, nepřinese
          vás, i kdybyste byli nejlepší ve městě.
        </P>
      </Section>

      <Section>
        <H2>Jak funguje AI vyhledávání?</H2>
        <P>
          AI vyhledávání nehledá jen správná klíčová slova. Snaží se pochopit,
          co opravdu potřebujete a proč to hledáte. Podle konkrétního nástroje
          přitom využívá vlastní znalosti, vyhledávání na internetu, nebo
          obojí.
        </P>
        <P>
          <strong className={strongClass}>1. Pochopí váš záměr.</strong> Když
          hledáte wellness hotel v Českém ráji s výhledem, AI z toho vyčte víc
          než jen slova: chcete klid, odpočinek a hezké místo, ne hotel u
          dálnice.
        </P>
        <P>
          <strong className={strongClass}>2. Rozdělí dotaz na menší hledání.</strong>{" "}
          Z jedné otázky udělá několik dílčích a pošle je do indexu, tedy do
          katalogu stránek, které má vyhledávač uložené. V naší knihovně je to
          katalog, podle kterého se knihovník orientuje. Bude hledat hotely s
          wellness v Českém ráji, hotely, které o sobě píšou, že leží v klidu
          nebo mají výhled na skály, a k nim recenze. Může ověřit i
          restauraci, parkování a to, jak o hotelu mluví hosté napříč
          internetem.
        </P>
        <P>
          <strong className={strongClass}>3. Porovná, co našla.</strong>{" "}
          Vyřadí hotely, které zadání neodpovídají nebo o kterých nemá dost
          informací. Víc věří tomu, co si zdroje potvrzují navzájem.
        </P>
        <P>
          <strong className={strongClass}>4. Předá odpověď.</strong> Několik
          hotelů, které podle dostupných informací nejlépe odpovídají vašemu
          zadání, většinou i s odkazy na zdroje, ze kterých čerpala.
        </P>

        <h3 className={h3Class}>Kde se s AI vyhledáváním v Česku setkáte</h3>
        <ul className="flex flex-col gap-3">
          <li className={listItemClass}>
            <strong className={strongClass}>Google AI Overviews (Přehledy od AI):</strong>{" "}
            souhrn nahoře ve výsledcích Googlu. Neobjeví se u každého dotazu a
            doptat se v něm nedá.{" "}
            <a
              href="https://blog.google/intl/cs-cz/produkty-sluzby/objevujte-ziskavejte-odpovedi/google-spousti-v-cesku-prehledy-od-ai/"
              target="_blank"
              rel="noopener"
              className={linkClass}
            >
              V Česku od května 2025.
            </a>
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Režim AI v Googlu:</strong>{" "}
            samostatná záložka ve vyhledávání, kde se můžete doptávat.{" "}
            <a
              href="https://www.mediaguru.cz/clanky/2025/10/google-uvadi-i-v-cesku-revolucni-vyhledavani-ai-mode/"
              target="_blank"
              rel="noopener"
              className={linkClass}
            >
              V Česku od října 2025.
            </a>
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>ChatGPT:</strong> odpovídá z
            vlastních znalostí a podle potřeby hledá na internetu.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Perplexity:</strong> hledá na
            internetu a u odpovědi ukazuje zdroje.
          </li>
        </ul>
      </Section>

      <Section>
        <H2>Rozdíly v jedné tabulce</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[14px] text-cream/80">
            <thead>
              <tr className="border-b border-white/10 text-left font-mono text-[11px] uppercase tracking-wider text-cream/45">
                <th className="py-3 pr-4">
                  <span className="sr-only">Otázka</span>
                </th>
                <th className="py-3 pr-4">Klasické vyhledávání</th>
                <th className="py-3">AI vyhledávání</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 text-left font-normal text-cream">Co dostanete?</th>
                <td className="py-3 pr-4">seznam modrých odkazů</td>
                <td className="py-3">hotovou odpověď s doporučením a popisem</td>
              </tr>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 text-left font-normal text-cream">Kdo vybírá?</th>
                <td className="py-3 pr-4">vy</td>
                <td className="py-3">AI, vy jen upřesňujete</td>
              </tr>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 text-left font-normal text-cream">Jak se ptáte?</th>
                <td className="py-3 pr-4">spíš klíčovými slovy</td>
                <td className="py-3">konverzačně, klidně celou větou</td>
              </tr>
              <tr className="border-b border-white/10">
                <th scope="row" className="py-3 pr-4 text-left font-normal text-cream">Odkud se bere obsah?</th>
                <td className="py-3 pr-4">hlavně z webů</td>
                <td className="py-3">
                  z celého internetu: weby, recenze, katalogy, firemní profily,
                  média
                </td>
              </tr>
              <tr>
                <th scope="row" className="py-3 pr-4 text-left font-normal text-cream">Jak může dopadnout vaše firma?</th>
                <td className="py-3 pr-4">jste na první straně, nebo na druhé a dál</td>
                <td className="py-3">čtyři možnosti, viz níže</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={h3Class}>Čtyři způsoby, jak s vámi AI může naložit</h3>
        <ol className="flex list-decimal flex-col gap-3 pl-5 marker:text-gold">
          <li className={listItemClass}>
            <strong className={strongClass}>V odpovědi vůbec nejste.</strong> AI
            o vás neví dost, nebo vás pro dané zadání nepovažuje za relevantní.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Čerpá z vás, ale doporučí jiné.</strong>{" "}
            Použije informace z vašeho webu, ale mezi doporučenými uvede
            konkurenci.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Doporučí vás, ale s chybami.</strong>{" "}
            Špatná adresa nebo neaktuální služby, případně vás{" "}
            <Link href="/field-notes/proc-ai-zamenila-identitu" className={linkClass}>
              zamění s někým jiným
            </Link>
            . Řídí se tím, co o vás najde napříč internetem.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Doporučí vás přesně.</strong> Ví,
            kdo jste, co nabízíte, kde a pro koho.
          </li>
        </ol>
      </Section>

      <Section>
        <H2>Proč vás AI nemusí doporučit, i když jste na Googlu vidět?</H2>
        <P>
          Můžete mít hezký nový web, a AI vás nedoporučí. Můžete mít
          dlouholetou praxi v oboru, a AI vás nedoporučí. Můžete být přesně
          tím, co zákazník hledá, a AI vás přesto nedoporučí.
        </P>
        <P>
          Google řadí stránky. AI vybírá firmy. Proto vám vysoká pozice ve
          výsledcích Googlu doporučení od AI nezaručí. AI potřebuje o vás, vaší
          firmě, službách a produktech mnohem víc signálů, než se na první
          pohled zdá. Pokud jste v reálném světě profesionál s dlouholetou
          praxí, ale na internetu o tom není ani zmínka, AI to nemá odkud
          vědět.
        </P>
        <P>
          „Myšlení“ AI se v něčem podobá tomu lidskému. Když se zeptáte
          kamaráda na dobrou restauraci ve městě, kde bydlí, nepošle vás do té
          nejhorší. Automaticky mu naskočí ta, kde se dobře najedl a kde je
          útulno. A protože se ptáte ve 20 hodin, doporučí vám tu, o které ví,
          že ještě vaří. Kamarád to ví z vlastní zkušenosti. AI si to musí
          poskládat z toho, co o restauraci najde na internetu: z otevírací
          doby, recenzí a zmínek. Když máte na webu starou otevírací dobu,
          pošle zákazníka k zavřeným dveřím, nebo raději jinam.
        </P>
        <P>
          Stejný paradox zažila na začátku naší spolupráce moje klientka,
          fotografka Michaela Čížková. Kvalitní portfolio, spokojení klienti, a
          přesto ji při testu 10 zákaznických dotazů ve třech AI systémech
          doporučily jen v 6 z 30 odpovědí. Jednou ji dokonce zaměnily s jinou
          fotografkou stejného jména. Po 31 dnech úprav ji doporučovaly ve 23 z
          30 odpovědí.{" "}
          <Link href="/field-notes/vysledky-po-31-dnech" className={linkClass}>
            Jak jsme to napravili, popisuji v případové studii.
          </Link>
        </P>
        <P>
          <strong className={strongClass}>
            AI doporučí firmu, o které má nejvíc potvrzených informací a která
            zároveň odpovídá na dotaz zákazníka.
          </strong>
        </P>
      </Section>

      <Section>
        <H2>Co z toho plyne pro vaši firmu?</H2>
        <P>
          Pokud jste už investovali do klasického SEO, nezahazujte to, stavíte
          na tom dál. AI často hledá přes stejný vyhledávač, proto je SEO pořád
          důležité.
        </P>
        <P>
          Rozdíl je v tom, kdo vybírá a podle čeho. Nestačí být vidět,
          potřebujete, aby vás AI pochopila a věřila vám. Základy SEO se dají
          nastavit poměrně rychle, ale důvěru AI budujete postupně. V tom je
          hlavní rozdíl.
        </P>
        <P>
          Pokud nevíte, jak s vámi AI dnes zachází, jestli vás nevynechává,
          nezaměňuje, nebo nedoporučuje konkurenci místo vás, začněte tím, že
          to zjistíte. Teprve potom má smysl rozhodovat, co změnit a kam
          investovat čas a peníze.
        </P>
      </Section>

      <Section>
        <CtaBox title="Jak vás AI vidí dnes?">
          Zjistěte, jestli vás AI doporučuje, nebo místo vás vybírá konkurenci.
        </CtaBox>
      </Section>

      <Section>
        <H2>Časté otázky</H2>
        {faq.map((item) => (
          <div key={item.q}>
            <h3 className={h3Class}>{item.q}</h3>
            <P>{item.a}</P>
          </div>
        ))}
        <AuthorBox />
      </Section>
    </>
  );
}
