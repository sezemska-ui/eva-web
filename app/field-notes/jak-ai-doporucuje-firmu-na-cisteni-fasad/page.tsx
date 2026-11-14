import Link from "next/link";
import Image from "next/image";
import { H1, H2, P, Section, CtaBox } from "@/components/Ui";
import { ArticleMeta, AuthorBox } from "@/components/ArticleParts";
import { ArticleJsonLd, Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { getNote } from "@/lib/fieldNotes";

const TITLE = "Jak AI vyhledávače doporučují firmu na čištění fasád — Eva Sezemská";
const HEADLINE = "Případová studie: Jak AI vyhledávače doporučují firmu na čištění fasád";
const DESCRIPTION =
  "Audit AI viditelnosti firmy Přijedeme Umyjeme: 111 odpovědí ChatGPT, Google Režimu AI a Perplexity. Kdy AI firmu doporučí, odkud o ní čerpá a co si z toho mohou vzít místní řemeslníci.";
const URL_PATH = "/field-notes/jak-ai-doporucuje-firmu-na-cisteni-fasad";

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
const listClass = "mb-4 flex max-w-[65ch] list-disc flex-col gap-2 pl-5 marker:text-gold";
const listItemClass = "text-[15px] leading-relaxed text-cream/80";
const thClass = "py-3 pr-4";
const tdClass = "py-3 pr-4 tabular-nums";

function DataTable({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="mb-6 max-w-[520px] overflow-x-auto">
      <table className="w-full border-collapse text-[14.5px] text-cream/80">
        <thead>
          <tr className="border-b border-white/10 text-left font-mono text-[11px] uppercase tracking-wider text-cream/45">
            <th className={thClass}>{head[0]}</th>
            <th className="py-3 text-right">{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a} className="border-b border-white/10 last:border-b-0">
              <th scope="row" className="py-3 pr-4 text-left font-normal text-cream">
                {a}
              </th>
              <td className={`${tdClass} pr-0 text-right`}>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Screenshot z testu s popiskem
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

export default function Article() {
  return (
    <>
      <ArticleJsonLd headline={HEADLINE} description={DESCRIPTION} url={URL_PATH} />
      <Section>
        <Breadcrumbs
          items={[
            { label: "Domů", href: "/" },
            { label: "Field Notes", href: "/field-notes" },
            { label: "AI a čištění fasád" },
          ]}
        />
        <ArticleMeta category="Audit AI viditelnosti · Případová studie" href={URL_PATH} />
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
          <p className="mb-3 text-[15px] font-semibold text-cream">Shrnutí</p>
          <ul className="flex flex-col gap-2 text-[14.5px] leading-relaxed text-cream/75">
            <li>
              — V říjnu 2026 jsem pro firmu Přijedeme Umyjeme otestovala, jak ji
              doporučují ChatGPT, Google Režim AI a Perplexity. Celkem 111
              odpovědí.
            </li>
            <li>
              — Když zákazník hledal konkrétní službu, AI firmu doporučila ve
              46 % odpovědí. Když chtěl ověřenou a spolehlivou firmu, jen v
              9 %.
            </li>
            <li>
              — Nejčastějším zdrojem byl katalog Firmy.cz (62 % odpovědí). Firma
              v něm ale měla automaticky založený profil se špatným oborem,
              takže mezi firmami na čištění fasád chyběla.
            </li>
            <li>
              — Všechna doporučení stála na webu firmy. Vlastní profily firmě
              nepomohly ani jednou.
            </li>
            <li>
              — Firma teď profily převzala a sjednocuje údaje. Za pár měsíců
              test zopakuji a výsledky porovnám.
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <H2>O jakou firmu jde a co chtěla vědět?</H2>
        <P>
          Přijedeme Umyjeme je firma na šetrné čištění fasád, střech a dlažeb
          ze Středočeského kraje. Čistí horkou vodou a nízkým tlakem, bez
          chloru. To je její hlavní odlišnost od konkurence, která často
          používá vysoký tlak nebo chemii.
        </P>
        <P>
          Majitel chtěl vědět, jestli ho zákazníci najdou, když se místo
          Googlu zeptají umělé inteligence. A pokud ne, co mu chybí.
        </P>
      </Section>

      <Section>
        <H2>Jak jsem testovala?</H2>
        <div className="mb-6 max-w-[70ch] border-l-2 border-gold pl-5">
          <ul className="flex flex-col gap-2 text-[15px] leading-relaxed text-cream/80">
            <li>
              — 15 dotazů, které by mohl položit skutečný zákazník: od „kdo
              vyčistí fasádu v Mladé Boleslavi“ po „je tahle firma spolehlivá?“
            </li>
            <li>— Tři nástroje: ChatGPT, Google Režim AI a Perplexity</li>
            <li>
              — Bez přihlášení, v anonymním okně, s polohou Mladá Boleslav,
              každý pokus jako nová konverzace
            </li>
            <li>
              — Každý dotaz dvakrát, a když se výsledky lišily, potřetí. Celkem
              111 odpovědí.
            </li>
            <li>
              — U každé odpovědi jsem zapsala, jestli AI firmu{" "}
              <strong className={strongClass}>doporučila</strong> (vybrala ji
              nebo se za ni zaručila),{" "}
              <strong className={strongClass}>zmínila</strong> (uvedla ji, ale
              nedoporučila), nebo jen{" "}
              <strong className={strongClass}>použila její web jako zdroj</strong>{" "}
              a doporučila jinou firmu. Ke každé odpovědi mám screenshot.
            </li>
          </ul>
        </div>
        <P>
          <strong className={strongClass}>Pro koho tato zjištění platí:</strong>{" "}
          jde o jednu firmu z jednoho řemeslného oboru. U firem, které zákazník
          hledá podle služby a místa (řemeslníci, úklid, opravy), čekám podobné
          vzorce. U jiných oborů to může být jinak. Při testech hotelů se
          například jednotlivé firmy v odpovědích AI objevovaly výrazně méně.
          Odpovědi AI se navíc mění v čase. Berte čísla jako příklad, ne jako
          pravidlo.
        </P>
      </Section>

      <Section>
        <H2>Jak často AI firmu doporučila?</H2>
        <P>
          U dotazů, kde zákazník vybíral firmu, byla Přijedeme Umyjeme
          doporučena ve 28 z 86 odpovědí, tedy zhruba v každé třetí.
        </P>
        <P>Mezi nástroji byly velké rozdíly:</P>
        <DataTable
          head={["Nástroj", "Doporučení"]}
          rows={[
            ["ChatGPT", "4 z 27 (15 %)"],
            ["Google Režim AI", "12 z 30 (40 %)"],
            ["Perplexity", "12 z 29 (41 %)"],
          ]}
        />
        <P>
          Stejná firma, stejný web, a jeden nástroj ji doporučí skoro třikrát
          častěji než jiný. Už tohle ukazuje, že „být vidět v AI“ neznamená jen
          jednu věc.
        </P>
      </Section>

      <Section>
        <H2>Kdy AI firmu doporučí a kdy ne?</H2>
        <P>Rozhodovalo hlavně to, na co se zákazník ptal.</P>
        <P>
          <strong className={strongClass}>Když hledal konkrétní službu</strong>,
          například „Kdo dělá impregnaci zámkové dlažby v okolí Mladé
          Boleslavi?“, byla firma doporučena ve 25 z 54 odpovědí (46 %). U
          dotazu na čištění zelené fasády bez chloru ji ChatGPT i Google
          doporučily na prvním místě. U dotazu na čištění protihlukových stěn,
          městského mobiliáře a sportovišť dokonce v 6 ze 6 odpovědí, vždy jako
          první.
        </P>
        <P>
          <strong className={strongClass}>Když chtěl jistotu</strong>, například
          „Doporuč mi ověřenou firmu“ nebo „Která firma je nejlepší, když mi jde
          hlavně o kvalitu?“, byla doporučena jen ve 3 z 32 odpovědí (9 %).
          ChatGPT ani Google ji tu nedoporučily ani jednou.
        </P>
        <P>
          Funguje to jako ve výloze. Když má obchod v okně přesně to, co
          zákazník hledá, zastaví se. Když se ale zeptá, jestli je obchod
          spolehlivý, výloha mu neodpoví. Na to se ptá jiných lidí.
        </P>
      </Section>

      <Section>
        <H2>Co AI řekla, když se zákazník zeptal přímo na firmu?</H2>
        <P>
          Na dotaz „Přijedeme Umyjeme: jaké má recenze a zkušenosti zákazníků?
          Je to spolehlivá firma?“ odpovídaly nástroje různě:
        </P>
        <ul className={listClass}>
          <li className={listItemClass}>
            <strong className={strongClass}>ChatGPT</strong> firmu jen zmínil:
            „malý počet hodnocení je důvod k opatrnosti, ne důkaz problému“.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Perplexity</strong> ji také jen
            zmínila a doporučila si firmu pečlivě ověřit.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Google</strong> ji doporučil. Stačila
            mu čtyři kladná hodnocení.
          </li>
        </ul>
        <Screenshot
          src="/images/chatgpt-spolehlivost-prijedeme-umyjeme.webp"
          alt="Odpověď ChatGPT na dotaz, jestli je Přijedeme Umyjeme spolehlivá firma: malý počet hodnocení je důvod k opatrnosti, ne důkaz problému"
          width={1100}
          height={1058}
          maxWidth={720}
          caption="Odpověď ChatGPT na dotaz, jestli je firma spolehlivá (říjen 2026): firmu jen zmínil, čtyři hodnocení mu nestačila."
        />
        <P>
          Pro srovnání jsem stejnou otázku položila u konkurenta, který má přes
          150 hodnocení na Firmy.cz. Všechny tři nástroje ho doporučily,
          Perplexity jako „spolehlivou a dobře hodnocenou firmu“.
        </P>
        <P>
          Zajímavý byl i druhý kontrolní případ: firma se 127 hodnoceními na
          Googlu, které ale byly vedené pod jiným názvem než firma. Dopadla
          stejně jako Přijedeme Umyjeme. Hodnocení, která AI nedokáže spojit se
          jménem firmy, jí nepomohou.
        </P>
      </Section>

      <Section>
        <H2>Odkud AI informace o firmách bere?</H2>
        <P>
          U dotazů, kde zákazník vybíral firmu, se mezi zdroji nejčastěji
          objevovaly:
        </P>
        <DataTable
          head={["Zdroj", "Podíl odpovědí"]}
          rows={[
            ["Firmy.cz", "62 %"],
            ["Web firmy", "40 %"],
            ["Profil na Googlu a mapy", "22 %"],
            ["nejremeslnici.cz", "18 %"],
          ]}
        />
        <P>Každý nástroj přitom čerpal jinak:</P>
        <ul className={listClass}>
          <li className={listItemClass}>
            <strong className={strongClass}>ChatGPT</strong> sahal hlavně po
            profilech a katalozích. Profil na Googlu a mapy použil v 55 %
            odpovědí, web firmy jen ve 4 z 27.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Google</strong> četl hlavně weby a
            jejich podstránky.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Perplexity</strong> kombinovala weby
            s katalogy. Firmy.cz použila v 82 % odpovědí, nejremeslnici.cz v
            37 %. Profil na Googlu necitovala vůbec.
          </li>
        </ul>
        <P>Firmy.cz byl jediný zdroj, který silně využívaly všechny tři nástroje.</P>
      </Section>

      <Section>
        <H2>Proč firmě nepomohl katalog, ze kterého AI čerpala nejvíc?</H2>
        <P>
          Ve všech 28 doporučeních byl mezi zdroji web firmy. Její vlastní
          profily na Googlu a Firmy.cz se mezi nimi neobjevily ani jednou. AI
          Firmy.cz citovala často, ale u konkurence.
        </P>
        <P>
          Důvod byl jednoduchý. Firmy.cz zakládá profily automaticky z
          obchodního rejstříku. Profil Přijedeme Umyjeme byl neověřený, bez
          telefonu a webu a měl špatně zařazený obor: poradenství a
          velkoobchod místo čištění fasád. Mezi 354 firmami v kategorii čištění
          fasád tak vůbec nebyl. Když AI hledala firmu na čištění fasád, sahala
          do této kategorie, jenže tam chyběl.
        </P>
        <Screenshot
          src="/images/firmy-cz-neovereny-profil-prijedeme-umyjeme.webp"
          alt="Profil Přijedeme Umyjeme na Firmy.cz s upozorněním Zatím neověřená firma a činnostmi poradenství, příprava staveniště a velkoobchod"
          width={705}
          height={730}
          maxWidth={520}
          caption="Profil firmy na Firmy.cz před převzetím (23. 10. 2026): neověřený, údaje jen z rejstříku a obor mimo čištění fasád."
        />
        <P>
          Firma tak stála na jedné noze. Když AI její web našla, doporučila ji
          ve 28 z 35 případů. Jiná cesta k doporučení ale nevedla.
        </P>
      </Section>

      <Section>
        <H2>Proč firma prohrávala doma, v Mladé Boleslavi?</H2>
        <P>
          U dotazů na Mladou Boleslav byla firma doporučena v 9 z 27 odpovědí.
          Nejsilnější místní konkurent byl jmenován 17krát, tedy skoro dvakrát
          častěji.
        </P>
        <P>
          Profil firmy na Googlu, Firmy.cz, Apple Mapy, Bing i patička webu
          přitom ukazovaly virtuální sídlo v Praze, ne základnu u Mladé
          Boleslavi. Jiný místní konkurent se stejným počtem hodnocení, ale s
          adresou v Mladé Boleslavi, v testu vyhrával.
        </P>
        <P>
          Že je hlavní příčinou právě adresa, zatím s jistotou nevím. Může hrát
          roli i web nebo katalogy. Ověří to opakovaný test po opravě profilů.
        </P>
      </Section>

      <Section>
        <H2>Co AI o firmě tvrdila, i když to nebyla pravda?</H2>
        <P>Když AI chyběly doklady, nemlčela. Domýšlela si:</P>
        <ul className={listClass}>
          <li className={listItemClass}>
            „velký celorepublikový operátor s průmyslovými referencemi“,
            přestože reference byly na webu teprve „ve výstavbě“,
          </li>
          <li className={listItemClass}>
            „pobočky v Praze, Mladé Boleslavi a Brně“, protože si městské
            stránky webu vyložila jako pobočky,
          </li>
          <li className={listItemClass}>
            a jednou dokonce „tlakové a chemické čištění“, tedy opak toho, čím
            se firma odlišuje.
          </li>
        </ul>
        <P>
          ChatGPT navíc firmě jednou přiřadil hodnocení jiné firmy s podobným
          názvem.
        </P>
        <P>
          Přikrášlení může dnes k doporučení pomoct. Jakmile si ale zákazník
          začne firmu ověřovat a důkaz nenajde, důvěra padá.
        </P>
      </Section>

      <Section>
        <H2>Záleží na tom, na jaké pozici je web v Googlu?</H2>
        <P>
          Pro Google Režim AI v tomto testu ne. Stránka firmy pro Zlín byla v
          klasickém Googlu průměrně na 32. pozici, tedy na čtvrté stránce
          výsledků. Na dotaz na šetrné čištění zateplené fasády ve Zlíně ji
          přesto Google v Režimu AI doporučil, jednou jako první. Stránka
          odpovídala na otázku skoro doslova.
        </P>
        <P>
          Stejně dopadl dotaz v Brně a Karlových Varech: Google firmu doporučil
          v 6 ze 6 odpovědí ve městech, kde vůbec nepůsobí.
        </P>
        <P>
          Protizkouška: stejné město, ale obecný dotaz „Hledám firmu ve Zlíně
          na čištění fasády“. Firma nebyla doporučena ani jednou. Vyhrály
          místní firmy s adresou a hodnocením.
        </P>
        <P>
          ChatGPT firmu v žádném z těchto měst nedoporučil a sahal po místních
          firmách.
        </P>
        <P>
          Pro firmu z toho plyne, že svou odlišnost může „vyhrát“ i daleko od
          základny. Obecné dotazy ale vyhrávají firmy, které jsou v daném místě
          opravdu doma.
        </P>
      </Section>

      <Section>
        <H2>Co se v testu nepotvrdilo?</H2>
        <ul className={listClass}>
          <li className={listItemClass}>
            <strong className={strongClass}>Ověřený profil na Googlu nerozhodoval.</strong>{" "}
            Neměl ho nikdo z pěti srovnávaných firem, ani ty, které vyhrávaly.
            Ověřit ho je ale potřeba, aby měla firma profil pod kontrolou.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Sociální sítě hrály malou roli.</strong>{" "}
            Objevily se v 7 ze 111 odpovědí, a to jen tam, kde nesly doklad
            práce, například video ze zakázky. Instagram ani jednou.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>
              Počet hodnocení na Googlu sám vítěze neodlišoval.
            </strong>{" "}
            U místních dotazů vyhrávaly i firmy se čtyřmi nebo žádnými
            hodnoceními, pokud měly správné místo. Hodnocení rozhodovala hlavně
            ve chvíli, kdy se zákazník ptal na spolehlivost.
          </li>
        </ul>
      </Section>

      <Section>
        <H2>Co firma dělá teď?</H2>
        <P>
          Přijedeme Umyjeme převzala a ověřuje profily na Googlu a Firmy.cz,
          zakládá profily v oborových katalozích a sjednocuje údaje: všude
          stejný název, místo, telefon a web. Sídlo firmy se přesouvá k
          základně, odkud skutečně vyjíždí. Na web postupně přidává reference s
          fotkou, obcí a popisem zakázky a začíná sbírat hodnocení.
        </P>
        <P>
          Až budou profily hotové, zkontroluji, jestli všude sedí stejné údaje.
          Za pár měsíců zopakuji stejný test stejnou metodou a výsledky sem
          doplním.
        </P>
      </Section>

      <Section>
        <H2>Co si z toho mohou vzít jiní místní řemeslníci?</H2>
        <P>
          Pokud jste místní řemeslník nebo služba, z tohoto testu plynou čtyři
          kroky:
        </P>
        <ol className="mb-4 flex max-w-[65ch] list-decimal flex-col gap-3 pl-5 marker:font-mono marker:text-gold">
          <li className={listItemClass}>
            <strong className={strongClass}>Zkontrolujte svůj profil na Firmy.cz.</strong>{" "}
            Pokud vidíte „Zatím neověřená firma“, převezměte ho (přes „Přidat
            firmu“ a své IČO) a vyplňte správný obor, co děláte, kde, kontakty
            a fotky.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Mějte všude stejné údaje.</strong>{" "}
            Název, místo, telefon a web na Googlu, Firmy.cz i v oborových
            katalozích.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>
              Žádejte o hodnocení všechny zákazníky,
            </strong>{" "}
            na Googlu i na Firmy.cz. Nic za ně nenabízejte, Google odměny za
            hodnocení zakazuje.
          </li>
          <li className={listItemClass}>
            <strong className={strongClass}>Ukažte na webu skutečné zakázky:</strong>{" "}
            fotku, obec, co jste řešili a jak.
          </li>
        </ol>
      </Section>

      <Section>
        <H2>Co říká klient?</H2>
        <figure className="rounded-sm border-l-2 border-gold/60 bg-white/5 px-5 py-5 sm:px-6">
          <blockquote className="text-[15.5px] leading-relaxed text-cream/80">
            <p>
              „Ještě předtím, než nás vůbec kontaktovala, si sama udělala
              předběžný audit firmy, aby nám mohla ukázat konkrétní poznatky a
              důkazy, jak si naše firma stojí z pohledu umělé inteligence. To
              nás přesvědčilo, že přesně ví, co dělá.“
            </p>
          </blockquote>
          <figcaption className="mt-4 font-mono text-[12px] text-cream/55">
            — Lukáš Kaudl, Přijedeme Umyjeme s.r.o.
          </figcaption>
        </figure>
      </Section>

      <Section>
        <CtaBox title="Chcete vědět, co o vaší firmě říká AI, když se zákazník zeptá, jestli jste spolehliví?" />
        <p className="mt-6 text-[13px] italic text-cream/50">
          Eva Sezemská, searchstrategy.cz · Test proběhl v říjnu 2026.
        </p>
        <AuthorBox />
      </Section>
    </>
  );
}
