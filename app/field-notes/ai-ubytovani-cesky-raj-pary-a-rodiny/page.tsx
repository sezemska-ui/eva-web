import Image from "next/image";
import { H1, H2, P, Section, CtaBox } from "@/components/Ui";
import { ArticleMeta, AuthorBox } from "@/components/ArticleParts";
import { ArticleJsonLd, Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";
import { getNote } from "@/lib/fieldNotes";

const TITLE = "Páry dostanou hotel, rodiny penzion: 30 odpovědí AI z Českého ráje — Eva Sezemská";
const HEADLINE = "Kam vás AI pošle na víkend v Českém ráji? 1. část: páry a rodiny";
const DESCRIPTION =
  "Test 30 odpovědí ChatGPT, Přehledu od AI v Googlu a Perplexity: párům AI doporučuje hlavně hotel, rodinám penzion. Koho doporučuje, odkud čerpá, kde chybuje a co si může ověřit každý ubytovatel.";
const URL_PATH = "/field-notes/ai-ubytovani-cesky-raj-pary-a-rodiny";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: URL_PATH,
  article: {
    publishedTime: getNote(URL_PATH).datePublished,
    modifiedTime: getNote(URL_PATH).dateModified,
  },
});

const strongClass = "font-semibold text-cream";
const listClass = "mb-4 flex max-w-[65ch] list-disc flex-col gap-2 pl-5 marker:text-gold";
const olClass =
  "mb-4 flex max-w-[65ch] list-decimal flex-col gap-3 pl-5 marker:font-mono marker:text-gold";
const listItemClass = "text-[15px] leading-relaxed text-cream/80";
const h3Class = "mb-3 mt-6 text-[16px] font-semibold text-cream";

// Tabulka s libovolným počtem sloupců. První sloupec je záhlaví řádku.
// Na mobilu se posouvá uvnitř rámečku, stránka do strany neuteče.
function DataTable({
  head,
  rows,
  minWidth = 0,
  highlight = [],
}: {
  head: string[];
  rows: ReactNode[][];
  minWidth?: number;
  highlight?: number[];
}) {
  return (
    <div className="mb-6 max-w-[760px] overflow-x-auto">
      <table
        className="w-full border-collapse text-[14.5px] text-cream/80"
        style={minWidth ? { minWidth } : undefined}
      >
        <thead>
          <tr className="border-b border-white/10 text-left align-bottom font-mono text-[11px] uppercase tracking-wider text-cream/45">
            {head.map((h, i) => (
              <th key={i} className="py-3 pr-4 font-normal">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr
              key={r}
              className={`border-b border-white/10 align-top last:border-b-0 ${
                highlight.includes(r) ? "font-semibold text-cream" : ""
              }`}
            >
              {row.map((cell, c) =>
                c === 0 ? (
                  <th
                    key={c}
                    scope="row"
                    className={`py-3 pr-4 text-left text-cream ${
                      highlight.includes(r) ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={c} className="py-3 pr-4 tabular-nums">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Screenshot({
  src,
  alt,
  width,
  height,
  maxWidth,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  maxWidth: number;
  caption: string;
}) {
  return (
    <figure className="my-8" style={{ maxWidth }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={`(max-width: 896px) 100vw, ${maxWidth}px`}
        className="h-auto w-full rounded-sm border border-white/10"
      />
      <figcaption className="mt-3 text-[13px] italic leading-relaxed text-cream/55">{caption}</figcaption>
    </figure>
  );
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className={listClass}>
      {items.map((item, i) => (
        <li key={i} className={listItemClass}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Article() {
  return (
    <>
      <ArticleJsonLd headline={HEADLINE} description={DESCRIPTION} url={URL_PATH} />
      <Section>
        <Breadcrumbs
          items={[
            { label: "Domů", href: "/" },
            { label: "Field Notes", href: "/field-notes" },
            { label: "Český ráj: páry a rodiny" },
          ]}
        />
        <ArticleMeta category="Výzkum · AI a ubytování" href={URL_PATH} />
        <H1>{HEADLINE}</H1>
        <p className="mb-6 font-mono text-[12px] uppercase tracking-wider text-cream/55">
          Test: 1.–19. 11. 2026 · 3 nástroje · 30 odpovědí v hlavním testu · 1. část ze 2
        </p>

        <P>
          Párům AI doporučuje hlavně hotel, rodinám penzion. Ve 30 odpovědích
          ChatGPT, Přehledu od AI v Googlu a Perplexity se hotel objevil ve 13
          z 15 odpovědí pro páry, ale jen v 5 z 15 pro rodiny.
        </P>
        <P>
          U párů má AI jasného vítěze. U rodin doporučila 43 různých podniků a
          i stejný nástroj se stejným dotazem poslal rodinu při opakování
          pokaždé jinam.
        </P>
        <P>
          Proč to řešit právě teď: plánování dovolené už nemusí začínat na
          rezervačních portálech, kde host stráví spoustu času filtrováním a
          proklikáváním. Může své potřeby podrobně popsat umělé inteligenci a
          ta za něj hledá. Výsledek má za pár sekund.
        </P>
      </Section>

      <Section>
        <H2>Jak jsem testovala?</H2>
        <P>
          Při testování se vždy ptám tak, jak by se zeptal host, a simuluji
          jeho potřeby. Pro páry i pro rodiny jsem položila pět dotazů, každý
          jinak konkrétní: obecný, s požadavky, s důrazem na cenu, plánovací a
          s konkrétním místem. Každý dotaz jsem zadala do tří AI vyhledávačů:
          ChatGPT, Přehled od AI ve vyhledávání Google a Perplexity.
        </P>
        <Bullets
          items={[
            "Hlavní test: 15 odpovědí pro páry a 15 pro rodiny.",
            "Kontrolní opakování: první dotaz každé skupiny jsem v každém nástroji položila třikrát, abych ověřila, jak stabilní jsou odpovědi. Abych hlavní čísla nezkreslila, opakování do nich nepočítám.",
            "Každý dotaz v novém chatu a v anonymním okně, přesně podle znění, bez doplňujících otázek.",
          ]}
        />
        <P>
          Příklad dotazu pro rodiny: „Chceme s dětmi 4 a 8 let na víkend do
          Českého ráje. Doporuč nám ubytování.“ Pro páry: „Kam na romantický
          víkend ve dvou do Českého ráje? Doporuč nám ubytování.“ Všechna
          znění a omezení testu uvádím v{" "}
          <a
            href="#metodika"
            className="text-cream underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            metodice na konci
          </a>
          .
        </P>
      </Section>

      <Section>
        <H2>Páry</H2>
        <P>
          U doporučení pro páry vyhrává EA Zámecký hotel Hrubá Skála. Objevil
          se v 9 z 15 odpovědí a v 7 z nich byl na prvním místě, a to ve všech
          třech nástrojích. Druhá nejčastější byla Biokolna (Apartmány Český
          ráj v Lomnici nad Popelkou; 5 z 15, třikrát na prvním místě).
        </P>
        <Bullets
          items={[
            "Hotel byl aspoň v jedné odpovědi ve 13 z 15 případů, na prvním místě v 7 z 15.",
            "Pět podniků doporučily všechny tři nástroje: EA Zámecký hotel, Biokolna, Vila Čapek, Penzion Recall a Penzion na Krásné Vyhlídce.",
            "U dvou dotazů z pěti se všechny tři nástroje shodly na prvním místě.",
            "Při opakování stejného dotazu dal Přehled od AI v Googlu třikrát ze tří stejný hotel na první místo, ChatGPT a Perplexity dvakrát ze tří.",
          ]}
        />
        <P>
          Ověřovala jsem, proč EA Zámecký hotel vítězí tak stabilně. Překvapilo
          mě, že úvodní stránka jeho webu o párech ani romantice nemluví.
          Nástroje ho pravděpodobně znají hlavně ze silné značky zámeckého
          hotelu a ze zmínek v cizích zdrojích, například v nabídkách
          zámeckých hotelů a na wellness portálech. Pomáhá mu i poloha: leží
          přímo v jádru Českého ráje.
        </P>
      </Section>

      <Section>
        <H2>Rodiny</H2>
        <P>
          U rodin jasný vítěz není. V 15 odpovědích zaznělo 43 různých podniků
          a 33 z nich zaznělo jen jednou. Nejčastěji se objevil Penzion
          Michelle (7 z 15, pětkrát na prvním místě), jako jediný podnik ve
          všech třech nástrojích.
        </P>
        <Bullets
          items={[
            "Hotel byl v odpovědi jen v 5 z 15 případů, na prvním místě ve 3 z 15.",
            "Rozdíl nezpůsobil cenový dotaz („nechceme nic luxusního“). Bez něj byl hotel na prvním místě jen ve 2 z 12 odpovědí.",
            "U žádného rodinného dotazu se všechny tři nástroje neshodly na prvním místě.",
            "Při opakování stejného dotazu se první místo nezopakovalo v žádném nástroji. Devět odpovědí, osm různých vítězů.",
          ]}
        />
        <DataTable
          head={["", "Páry", "Rodiny"]}
          minWidth={420}
          rows={[
            ["Různých podniků", "29", "43"],
            ["Zmíněných jen jednou", "15", "33"],
            ["Hotel v odpovědi", "13 z 15", "5 z 15"],
            ["Hotel na 1. místě", "7 z 15", "3 z 15"],
            ["Shoda 1. místa ve všech třech nástrojích", "2 dotazy z 5", "ani jednou"],
          ]}
        />
        <P>
          Ze 66 podniků, které v testu zazněly, se jen šest objevilo u párů i u
          rodin.
        </P>
      </Section>

      <Section>
        <H2>Kolik ubytování v Českém ráji je</H2>
        <P>
          Pro srovnání jsem dohledala, kolik ubytování v Českém ráji nabízejí
          katalogy a co uvádí statistika.
        </P>
        <DataTable
          head={["Zdroj", "Ubytování celkem", "Z toho hotely"]}
          minWidth={520}
          highlight={[3]}
          rows={[
            [
              "Český statistický úřad, 2025 (zařízení od 5 pokojů, oblast Český ráj ve třech krajích)",
              "194",
              "–",
            ],
            ["Katalog ceskeubytovani.cz", "160", "23 (14 %)"],
            ["Katalog MegaUbytko", "116", "4 (3 %)"],
            ["AI v hlavním testu (30 odpovědí)", "66 různých podniků", "11 různých (17 %)"],
            ["z toho doporučení rodinám", "43", "5 (12 %)"],
            ["z toho doporučení párům", "29", "7 (24 %)"],
          ]}
        />
        <P>
          Hotel počítám podle slova „hotel“ v názvu. EA Zámecký hotel se
          objevil u párů i u rodin, proto je různých hotelů celkem 11, ne 12.
        </P>
        <Bullets
          items={[
            "Ve 30 odpovědích zazněla zhruba třetina ubytování v regionu, ale doporučení se točí kolem několika jmen. U párů obsadily dva podniky 10 z 15 prvních míst.",
            "U rodin podíl hotelů zhruba odpovídá nabídce. V katalogu ceskeubytovani.cz tvoří hotely přibližně 14 % ubytování, v doporučeních pro rodiny 12 %. Penzionů, chalup a apartmánů je v Českém ráji prostě víc.",
            "U párů je hotelů víc: 24 % doporučení, zhruba dvojnásobek jejich podílu v katalogu ceskeubytovani.cz.",
            "Perplexity v rodinných odpovědích pokaždé citoval MegaUbytko, kde jsou mezi 116 podniky jen 4 hotely. Jestli proto u něj vítězí penziony, z testu nepoznám.",
          ]}
        />
        <P>
          Čísla berte jako řád, ne přesný údaj: každý zdroj vymezuje Český ráj
          trochu jinak, kategorie v katalozích se překrývají a statistika
          nezahrnuje malé soukromé chalupy.
        </P>
      </Section>

      <Section>
        <H2>Co mají doporučované podniky na webu</H2>
        <P>
          Nejčastěji doporučované podniky mají na webu přímo napsané, pro koho
          jsou a co tam host najde. Kolikrát má web napsané „Český ráj“,
          nerozhoduje: na úvodní stránce ho mají podniky z testu 25×, 18×, 6× i
          ani jednou, a nejčastěji doporučovaný hotel pro páry patří k těm, kde
          se Český ráj na úvodní stránce vůbec nevyskytuje.
        </P>
        <P>
          <strong className={strongClass}>Konkrétní popis pro konkrétního hosta.</strong>{" "}
          Vítěz rodin Penzion Michelle vyjmenovává dětské vybavení (trampolína,
          bazén, brouzdaliště, pískoviště) a ceník má jako text, včetně slev
          pro děti. ChatGPT z něj při dotazu na cenu ověřil konkrétní částky.
          Biokolna u párů nabízí „wellness pobyt pro dva“, tedy přesně to, na
          co se pár ptá.
        </P>
        <P>
          <strong className={strongClass}>Vlastní stránka pro konkrétní službu.</strong>{" "}
          Hotel reSTART má vlastní stránku Dětská herna. Přehled od AI v Googlu
          z ní doslova převzal otevírací dobu, věk dětí i cenu. Penzion Recall
          se do odpovědi dostal přes vlastní článek o výletech s dětmi v
          Českém ráji.
        </P>
        <P>
          <strong className={strongClass}>Nástroje čerpají z různých zdrojů.</strong>{" "}
          U rodin citoval Perplexity katalog MegaUbytko v každé odpovědi, u
          párů ani jednou. Penzion Michelle na MegaUbytku není a v Perplexity
          nebyl na prvním místě ani jednou, přestože v ChatGPT a Googlu
          vyhrával. Jestli za to může právě chybějící zápis v katalogu, z testu
          nepoznám.
        </P>
        <P>
          <strong className={strongClass}>
            Recenze můžou rozhodnout, pro koho podnik je.
          </strong>{" "}
          Jeden penzion má rodiny na webu dobře popsané, jeho recenze ale
          mluví hlavně o školách v přírodě a skupinách. ChatGPT ho na neutrální
          dotaz popsal jako areál pro sport a větší skupiny. Rodinám ho pak
          nedoporučil.
        </P>
      </Section>

      <Section>
        <H2>Srovnání se třemi méně doporučovanými hotely</H2>
        <P>
          Po vyhodnocení jsem prošla weby a zmínky o čtyřech nejčastěji
          doporučovaných podnicích a porovnala je se třemi čtyřhvězdičkovými
          hotely s wellness, které se v hlavním testu objevily nanejvýš
          dvakrát.
        </P>
        <DataTable
          head={[
            "",
            "Vítězové (EA Zámecký hotel, Biokolna, Vila Čapek, Penzion Michelle)",
            "Méně doporučované hotely (3)",
          ]}
          minWidth={640}
          rows={[
            [
              "Jak se dají popsat",
              "jednou větou: zámek na skále, apartmány jen pro dospělé, secesní vila, penzion s trampolínou a bazénem",
              "„ubytování, wellness, restaurace a konference“",
            ],
            [
              "Pro koho jsou",
              "řečeno přímo („Wellness pobyt pro dva“, „adults only“, výčet hostů a dětského vybavení)",
              "páry, rodiny, firmy i svatby vedle sebe; nabídka pro páry v podstránkách",
            ],
            [
              "Kdo o nich mluví",
              "ocenění (Amazing Places), média, specializované katalogy zámeckých hotelů a wellness pro páry",
              "hlavně slevové a rezervační portály",
            ],
            [
              "Hodnocení hostů",
              "dobré",
              "stejně dobré nebo lepší (jeden z nich 4,7 z více než 1 200 recenzí na Googlu)",
            ],
            [
              "Technika úvodní stránky",
              "strukturovaná data nemá ani jeden; nadpis H1 v kódu stránky má jen EA Zámecký hotel",
              "dva ze tří mají strukturovaná data (jeden typ Hotel s adresou a vybavením), všechny tři mají nadpis H1",
            ],
          ]}
        />
        <Bullets
          items={[
            "Méně doporučované hotely nástroje znají a popisují je správně: jeden jako hotel pro pohodlí se slaným bazénem, druhý jako rodinný hotel s hernou a aquaparkem, třetí jako romantický pobyt s bazénem a večeří. Jen je volí méně často.",
            "Hodnocení hostů ani základní technika webu rozdíl nevysvětlují, méně doporučované hotely jsou na tom technicky dokonce o něco lépe. Rozdíl vidím spíš v tom, že vítěze jde popsat jednou větou a totéž o nich píšou i jiné weby.",
            "Silnou techniku ale nemá nikdo. Ani jeden ze sedmi webů nemá pokročilá strukturovaná data, která by hotel propojila s jeho profily jinde (sameAs) nebo popsala, v čem je odborník (knowsAbout). Jestli by pomohla, tenhle test neukáže.",
            "Dva ze tří párových vítězů spojuje stejný cizí zdroj: web zaměřený na wellness pro páry. Nástroje ho citovaly u EA Zámeckého hotelu a Biokolny (a také u Pivních lázní Český ráj).",
          ]}
        />
        <P>Jde o sedm podniků, takže je to souvislost, ne důkaz příčiny.</P>
      </Section>

      <Section>
        <H2>Pivní lázně</H2>
        <P>
          Hotel Malý Pivovar nabízí pivní lázně pro dva. V hlavním testu ho
          doporučil jen Perplexity, dvakrát z pěti párových dotazů. 19. 11. jsem
          proto položila jeden doplňkový dotaz: „Chceme romantický pobyt s
          pivními lázněmi a dobrou večeří v Českém ráji.“
        </P>
        <DataTable
          head={["Nástroj", "1. místo", "2. místo"]}
          minWidth={460}
          rows={[
            ["ChatGPT", "Hotel Malý Pivovar", "Pivní lázně Český Ráj"],
            ["Přehled od AI v Googlu", "Pivní lázně Český Ráj", "Hotel Malý Pivovar"],
            ["Perplexity", "Hotel Malý Pivovar", "Pivní lázně Český Ráj"],
          ]}
        />
        <Bullets
          items={[
            "Oba podniky s pivními lázněmi byly v odpovědi všech tří nástrojů. Jiný podnik jim nekonkuroval.",
            "Ceny a název balíčku Malého Pivovaru převzaly nástroje hlavně ze zážitkových portálů (pobytyvcesku.cz, romantickevikendy.cz), ne z jeho webu, kde jsou balíčky až v podstránkách.",
          ]}
        />
      </Section>

      <Section>
        <H2>Chyby v odpovědích</H2>
        <P>
          Nejvíc chyb vzniklo u podniků, jejichž jméno se kryje s něčím jiným.
          Našla jsem tři takové případy.
        </P>
        <h3 className={h3Class}>Záměny jména</h3>
        <P>
          <strong className={strongClass}>Hotel Pošta:</strong> Přehled od AI v
          Googlu doporučil hotel rodinám, ale připojil odkaz, logo a fotku
          pobočky České pošty v Rovensku pod Troskami.
        </P>
        <Screenshot
          src="/images/cesky-raj-google-hotel-posta-ceska-posta.webp"
          alt="Přehled od AI v Googlu s doporučením Hotelu Pošta a připojenou kartou pobočky České pošty v Rovensku pod Troskami."
          width={952}
          height={848}
          maxWidth={640}
          caption="Přehled od AI v Googlu doporučuje rodinám Hotel Pošta, odkaz ale vede na pobočku České pošty. Rodinný dotaz, 3. opakování, 16. 11. 2026."
        />
        <P>
          <strong className={strongClass}>Zámek Hrubá Skála:</strong> ChatGPT
          doporučil „Zámek Hrubá Skála“ jako ubytování, ale ukázal kartu zámku
          jako památky se stavem „Zavřeno“, vstupenkami od 50 Kč a reklamou
          konkurence. Hotel přitom má na Googlu vlastní profil.
        </P>
        <Screenshot
          src="/images/cesky-raj-chatgpt-zamek-hruba-skala-zavreno.webp"
          alt="Odpověď ChatGPT s doporučením zámku Hrubá Skála a kartou památky se stavem Zavřeno."
          width={1000}
          height={822}
          maxWidth={680}
          caption="ChatGPT doporučuje „Zámek Hrubá Skála“ jako ubytování, ale připojí profil zámku jako památky se stavem „Zavřeno“. Doplňkový rodinný dotaz, 19. 11. 2026."
        />
        <P>
          <strong className={strongClass}>Penzion pojmenovaný po přírodní památce:</strong>{" "}
          Přehled od AI začíná jeskyní, penzion zmíní až druhý.
        </P>

        <h3 className={h3Class}>Vymyšlené a chybné údaje</h3>
        <Bullets
          items={[
            "ChatGPT doporučil penzion pod názvem, který neexistuje. Ve skutečnosti jde o roubenku jiného jména.",
            "Perplexity radil rodinám na deštivé dny „aquapark v Turnově“. V Turnově je jen venkovní koupaliště.",
            "Perplexity umístil zámek Staré Hrady do Turnova, leží u Libáně.",
            "U jednoho penzionu odpověď uváděla restauraci, má jen samoobslužný bar.",
          ]}
        />
        <P>
          <strong className={strongClass}>Mimo region:</strong> Perplexity
          doporučil resort u Kralup nad Vltavou a v 8 z 10 hlavních odpovědí
          citoval zdroje z jiných krajů: Ostravska, Beskyd, Pálavy nebo
          Kokořínska.
        </P>
        <P>
          <strong className={strongClass}>Hodnocení:</strong> dvakrát odpověď
          ukázala hodnocení z nejmenšího počtu recenzí a stovky jiných
          pominula. U jednoho hotelu 8,5/10 ze 7 recenzí v katalogu, přestože
          na Googlu má 3,0 z 570. U jednoho penzionu naopak 4,1 z 8 recenzí na
          Tripadvisoru, přestože na Bookingu má 8,8 ze 491.
        </P>
        <P>
          <strong className={strongClass}>Skryté zdroje:</strong> karta podniku
          v ChatGPT přebírá text recenzí z Tripadvisoru, ale mezi zdroji ho
          neuvádí. Hodnocení z Tripadvisoru ukázal ChatGPT ve třech případech a
          pokaždé bylo horší než na Googlu:
        </P>
        <DataTable
          head={["Podnik", "ChatGPT (Tripadvisor)", "Google"]}
          minWidth={460}
          rows={[
            ["Penzion (rodinný dotaz)", "4,1 z 8 recenzí", "4,6 z 364"],
            ["Týž penzion (doplňkový dotaz)", "4,1", "4,6 z 364"],
            ["Hotel Malý Pivovar (mapa)", "4,3", "4,7 z 1 246"],
          ]}
        />
        <Screenshot
          src="/images/cesky-raj-chatgpt-maly-pivovar-hodnoceni.webp"
          alt="Odpověď ChatGPT s Hotelem Malý Pivovar a mapou, kde má hotel hodnocení 4,3."
          width={1000}
          height={1171}
          maxWidth={600}
          caption="ChatGPT ukazuje u Hotelu Malý Pivovar hodnocení 4,3 z Tripadvisoru. Na Googlu má hotel 4,7 z 1 246 recenzí. Doplňkový dotaz na pivní lázně, 19. 11. 2026."
        />
      </Section>

      <Section>
        <H2>Kdy rodina dostane hotel</H2>
        <P>
          Na obecný rodinný dotaz se hotel na první místo dostal jen
          výjimečně. Po vyhodnocení hlavního testu jsem proto položila tři další
          dotazy. Dva se od původního rodinného dotazu liší jen několika slovy,
          třetí se ptá přímo na rodinný hotel.
        </P>
        <DataTable
          head={["Dotaz", "Odpovědí", "Hotel na 1. místě"]}
          minWidth={520}
          rows={[
            [
              "„Chceme s dětmi 4 a 8 let na víkend do Českého ráje. Doporuč nám ubytování.“ (všechna opakování)",
              "9",
              "1",
            ],
            ["… + „Cena nehraje roli.“", "4", "2"],
            ["… + „Cena nehraje roli. Kam bys nás poslal?“", "4", "4"],
            [
              "„Hledáme rodinný hotel s wellness a programem pro děti v Českém ráji. Cena nehraje roli.“",
              "3",
              "3",
            ],
          ]}
        />
        <Bullets
          items={[
            "Bez zmínky o ceně nástroje rodinám doporučovaly hlavně penziony a chalupy, zhruba v poměru, v jakém jsou v nabídce regionu. Věta „cena nehraje roli“ posunula výběr k dražšímu ubytování, ne nutně k hotelu.",
            "Bez výslovného požadavku na hotel vyhrál hotel až s otázkou „Kam bys nás poslal?“, ve všech čtyřech odpovědích. Vzorek je malý, berte to jako náznak, ne závěr.",
            "Na dotaz po rodinném hotelu s programem pro děti dal hotel reSTART na první místo ChatGPT, Přehled od AI v Googlu i Perplexity. V hlavním testu se u rodin všechny tři nástroje neshodly ani jednou.",
          ]}
        />
        <P>
          Přehled od AI v Googlu k tomu sám napsal, že hotelů s animačním
          programem je v Českém ráji málo, a rodinám doporučil i Krkonoše a
          Jizerské hory. Moje hypotéza: v regionu je mezera v nabídce
          rodinných hotelů s programem nebo animacemi pro děti.
        </P>
      </Section>

      <Section>
        <H2>Co si můžete ověřit u svého podniku</H2>
        <P>
          Šest otázek, které zaberou půl hodiny. Ptejte se v anonymním okně bez
          přihlášení a ve více nástrojích, protože každý čerpá odjinud.
        </P>
        <ol className={olClass}>
          <li className={listItemClass}>
            <strong className={strongClass}>Zeptejte se jako váš host.</strong>{" "}
            „Chceme s dětmi na víkend do [regionu]. Doporuč nám ubytování.“ Pak
            totéž za pár, cyklisty nebo firemní akci. Jste v odpovědi u hosta, o
            kterého stojíte?
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Zeptejte se, za koho vás AI považuje.</strong>{" "}
            „Co víš o [název podniku]? Pro koho je vhodný?“ Pokud odpověď
            nesedí s tím, koho chcete ubytovat, podívejte se, o čem mluví vaše
            recenze.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Zadejte jen svůj název.</strong>{" "}
            Mluví AI o vás, nebo o místě, památce či jiné firmě stejného jména?
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Podívejte se na zdroje.</strong>{" "}
            Odkud AI o vás čerpá a jaké hodnocení ukazuje? Pokud bere číslo z
            málo recenzí v jednom katalogu nebo na zapomenutém profilu na
            Tripadvisoru, víte, kde začít.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Přidejte „cena nehraje roli“.</strong>{" "}
            Pokud se objevíte až pak, AI vás má za dražší volbu. Na webu pak
            stojí za to výslovně napsat, pro koho jste a proč stojíte za svou
            cenu.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Zeptejte se na svůj unikát.</strong>{" "}
            Pokud vás AI najde jen na přesný dotaz („pivní lázně“, „slaný
            bazén“), patří ta věc do první věty vašeho webu.
          </li>
        </ol>
      </Section>

      <Section>
        <div id="metodika" className="scroll-mt-24">
          <H2>Jak jsem testovala: metodika a omezení</H2>
        </div>
        <P>
          Výsledek není žebříček kvality ubytování ani důkaz, že doporučené
          podniky mají víc rezervací. Je to sonda: měření toho, koho konkrétní
          AI nástroje doporučovaly v konkrétním období.
        </P>
        <Bullets
          items={[
            <>
              <strong className={strongClass}>Kdy:</strong> páry 1.–10. 11. 2026,
              rodiny 14.–18. 11. 2026, doplňkové dotazy 18.–19. 11. 2026. Mezi
              páry a rodinami jsou téměř dva týdny a AI se mezitím mohla změnit.
            </>,
            <>
              <strong className={strongClass}>Nástroje:</strong> ChatGPT bez
              přihlášení v anonymním okně. Přehled od AI ve vyhledávání Google s
              přihlášeným účtem, Perplexity (bezplatná verze) většinou s
              přihlášeným účtem. Obojí může odpovědi ovlivnit.
            </>,
            <>
              <strong className={strongClass}>Hlavní čísla:</strong> 15 odpovědí
              na typ hosta (5 dotazů × 3 nástroje). Kontrolní opakování a
              doplňkové dotazy do nich nepočítám.
            </>,
            <>
              <strong className={strongClass}>Hotel:</strong> podnik se slovem
              „hotel“ v názvu. Vily, apartmány a resorty bez tohoto slova jsem
              ověřila a za hotel nepovažuji.
            </>,
            <>
              <strong className={strongClass}>Co se počítá:</strong> podniky
              doporučené v hlavním textu odpovědi. Podniky jen na mapě
              nepočítám. Za první místo považuji podnik, který AI uvedla jako
              první v hlavním textu odpovědi.
            </>,
            <>
              <strong className={strongClass}>Zdroje:</strong> zapisuji podle
              citací v odpovědi. Nástroj mohl čerpat i z dalších zdrojů, které
              neuvádí.
            </>,
            <>
              <strong className={strongClass}>Chyby AI</strong> uvádím z celého
              testu, včetně kontrolních opakování a doplňkových dotazů.
            </>,
            <>
              <strong className={strongClass}>Srovnání webů</strong> (vítězové a
              méně doporučované hotely, počet „Český ráj“) jsem dělala 19. 11.
              2026 na úvodních stránkách a vybraných podstránkách a ze zmínek
              dohledatelných ve vyhledávání. Technické prvky (titulek, meta
              popis, nadpisy, strukturovaná data) jsem četla ze zdrojového kódu
              české úvodní stránky.
            </>,
            <>
              <strong className={strongClass}>Doplňkový dotaz na pivní lázně</strong>{" "}
              (19. 11. 2026) je jediný běh v každém nástroji, mimo hlavní čísla.
            </>,
            <>
              <strong className={strongClass}>Počty ubytování v regionu</strong>{" "}
              (19. 11. 2026): Český statistický úřad, data za rok 2025 (přes
              obsazenost.cz, součet tří částí oblasti Český ráj), katalogy
              ceskeubytovani.cz a MegaUbytko podle jejich vlastních kategorií.
            </>,
            <>
              <strong className={strongClass}>Jména:</strong> doporučené podniky
              jmenuji, protože jsou součástí odpovědi AI. Podniky, které v
              odpovědích chyběly nebo se objevily jen výjimečně, ve srovnání
              nejmenuji.
            </>,
            <>
              <strong className={strongClass}>Data:</strong> tabulku 42 odpovědí
              (30 z hlavního testu a 12 z kontrolních opakování: dotaz, nástroj,
              datum, doporučené podniky v pořadí, zdroje) sem doplním ke
              stažení. Screenshoty všech odpovědí mám archivované a na vyžádání
              je ukážu.
            </>,
            <>
              <strong className={strongClass}>Nezávislost:</strong> test jsem
              dělala na vlastní náklady. Žádný z podniků za zmínku neplatil a s
              žádným z nich nespolupracuji.
            </>,
          ]}
        />

        <h3 className={h3Class}>Dotazy pro páry</h3>
        <ol className={olClass}>
          <li className={listItemClass}>
            Kam na romantický víkend ve dvou do Českého ráje? Doporuč nám
            ubytování.
          </li>
          <li className={listItemClass}>
            Hledáme hotel s wellness v Českém ráji na víkend pro dva. Ideálně s
            privátní vířivkou nebo saunou.
          </li>
          <li className={listItemClass}>
            Chci manželku překvapit víkendem k výročí v okolí Trosek nebo Hrubé
            Skály. Kde se ubytovat, aby tam byla dobrá večeře a wellness?
          </li>
          <li className={listItemClass}>
            Jaké ubytování pro páry v Českém ráji má nejlepší poměr ceny a
            kvality? Chceme klid a dobré jídlo, ale nemusí to být luxus.
          </li>
          <li className={listItemClass}>
            Naplánuj nám romantický víkend v Českém ráji: kde spát, kam na
            večeři a jednu pěknou procházku.
          </li>
        </ol>

        <h3 className={h3Class}>Dotazy pro rodiny</h3>
        <ol className={olClass}>
          <li className={listItemClass}>
            Chceme s dětmi 4 a 8 let na víkend do Českého ráje. Doporuč nám
            ubytování.
          </li>
          <li className={listItemClass}>
            Hledáme v Českém ráji ubytování pro rodinu s dětmi 4 a 8 let.
            Potřebujeme rodinný pokoj, hřiště nebo zahradu a ideálně restauraci
            přímo na místě.
          </li>
          <li className={listItemClass}>
            Jedeme s dětmi na víkend do okolí Hrubé Skály a Valdštejna. Kde se
            ubytovat, abychom to měli na výlety kousek?
          </li>
          <li className={listItemClass}>
            Jaké ubytování v Českém ráji má nejlepší poměr ceny a kvality pro
            rodinu se dvěma dětmi? Nechceme nic luxusního.
          </li>
          <li className={listItemClass}>
            Naplánuj nám rodinný víkend v Českém ráji s dětmi 4 a 8 let: kde
            spát a jeden nebo dva výlety, které děti zvládnou.
          </li>
        </ol>
      </Section>

      <Section>
        <H2>Co z toho plyne</H2>
        <P>
          Stejný podnik může být doporučený pro pár, ale v odpovědích pro
          rodiny se vůbec neobjevit. EA Zámecký hotel byl párům doporučen v 9 z
          15 odpovědí, rodinám jen ve 2 z 15. Přesně proto je potřeba sledovat
          viditelnost zvlášť pro každý typ hosta, o kterého podnik stojí.
        </P>
        <P>
          Hotely s wellness a hodnocením například 4,7 nástroje znají, ale
          doporučují je méně často než podniky, o kterých se dá říct jedna
          jasná věta pro jeden typ hosta a kterou potvrzuje i někdo jiný.
        </P>
        <P>
          Rodinné hotely to mají nejtěžší. Při obecném dotazu byly rodinám
          doporučeny hlavně penziony a chalupy, kterých je v regionu většina.
          Hotel se na první místo dostával častěji, až když host dodal, že na
          ceně nezáleží, nebo se zeptal přímo na rodinný hotel.
        </P>
        <P>
          Hotelům určitě doporučuji napsat na webu výslovně a detailně, pro
          koho hotel je, co tam host zažije, co je v okolí a proč stojí za svou
          cenu. A postarat se, aby totéž o hotelu psaly i další weby: průvodce
          jako Amazing Places, turistické portály jako Kudy z nudy, cestovatelské
          blogy a weby zaměřené na stejného hosta. Portál Kudy z nudy se mezi
          zdroji objevil v 6 ze 30 hlavních odpovědí, blogy také v 6.
        </P>
        <P>
          Ve 2. části testu se zaměřím na cyklisty a pěší turisty, včetně
          dotazu na Jičín a Prachovské skály. Na výsledky jsem zvědavá.
        </P>
        <p className="mb-8 max-w-[65ch] text-[14px] italic leading-relaxed text-cream/55">
          Pro úplnost: audity AI viditelnosti nabízím jako službu. Proto je
          výše přesně popsaná metodika, abyste si zjištění mohli ověřit sami.
        </p>
        <CtaBox title="Jak AI doporučuje váš podnik a proč dává přednost konkurenci?">
          Napište mi. Společně probereme, zda je pro vás v této fázi vhodný
          audit AI viditelnosti.
        </CtaBox>
        <p className="mt-6 text-[13px] italic text-cream/50">
          Eva Sezemská, searchstrategy.cz · Test proběhl 1.–19. 11. 2026.
        </p>
        <AuthorBox />
      </Section>
    </>
  );
}
