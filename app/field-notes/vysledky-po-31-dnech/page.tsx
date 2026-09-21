import Link from "next/link";
import { H1, H2, P, Section } from "@/components/Ui";
import { ArticleMeta, WhatThisMeans, RelatedNotes } from "@/components/ArticleParts";
import { ArticleJsonLd, Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Od záměny identity k 23 z 30 doporučení — Eva Sezemská",
  description:
    "Případová studie: jak se AI viditelnost fotografky Michaely Čížkové zvýšila z 20 % na 76,7 % za 31 dní po nasazení strukturovaných dat a NAP konzistence.",
  alternates: { canonical: "/field-notes/vysledky-po-31-dnech" },
};

export default function Article() {
  return (
    <>
      <ArticleJsonLd
        headline="Od záměny identity k 23 z 30 doporučení: případová studie AI viditelnosti po 31 dnech"
        description="Případová studie o tom, jak se AI viditelnost fotografky Michaely Čížkové zvýšila z 20 % na 76,7 % za 31 dní."
        url="/field-notes/vysledky-po-31-dnech"
        datePublished="2026-09-18"
      />
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Field Notes", href: "/field-notes" }, { label: "Výsledky po 31 dnech" }]} />
        <ArticleMeta category="Výsledky a měření · Case Note" date="18. 9. 2026" />
        <H1>Od záměny identity k 23 z 30 doporučení: případová studie AI viditelnosti po 31 dnech</H1>
        <P>
          Michaela Čížková je profesionální fotografka od roku 2022, žije v
          Mladějově v Čechách a fotí rodinné, těhotenské, newborn a svatební
          focení v Českém ráji. Kvalitní portfolio, skvělé reference — a
          přesto ji AI systémy buď nedoporučovaly vůbec, nebo si ji pletly s
          někým jiným. Tohle je záznam toho, co se změnilo za 31 dní po
          nasazení nového webu.
        </P>
      </Section>

      <Section>
        <div className="rounded-sm border border-gold/30 bg-white/5 p-6 sm:p-8">
          <h2 className="mb-4 font-serif text-xl text-cream">
            Rychlý přehled případové studie
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-cream/80">
            <p>
              <span className="font-semibold text-cream">Klient:</span>{" "}
              Michaela Čížková – profesionální fotografka z Českého ráje
              (Jičín, Turnov, Sobotka, Mladá Boleslav).
            </p>
            <p>
              <span className="font-semibold text-cream">Problém:</span> V
              květnovém testu se objevila pouze v 6 z 30 případů (20 %).
              Google AI Overview ji navíc v jedné odpovědi zaměnil za jinou
              fotografku a školitelku spojenou s Foto Škoda.
            </p>
            <p>
              <span className="font-semibold text-cream">Řešení:</span> Web
              prošel kompletní přestavbou (Next.js + Sanity CMS na Vercelu),
              ke které jsme přidali strukturovaná data, sjednocení NAP
              konzistence a nasazení analytických nástrojů.
            </p>
            <p>
              <span className="font-semibold text-cream">
                Výsledek po 31 dnech:
              </span>{" "}
              Celková AI viditelnost vzrostla na 76,7 % (23/30 dotazů).
              ChatGPT dosáhl 90 %, Google AI Overview 80 %, Perplexity 60 %.
              V klasickém vyhledávání Google dosáhla hlavní strana CTR
              17,24 % — i když je potřeba mít na paměti, že se tahle čísla
              zatím dělí mezi několik duplicitních variant URL, které ještě
              čekají na sjednocení.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <H2>1. Příběh na začátku: Když skvělá práce vyhledávačům nestačí</H2>
        <P>
          Michaela Čížková je profesionální fotografka od roku 2022. Žije v
          Mladějově v Čechách a její parketou je přirozená rodinná,
          těhotenská, newborn a svatební fotografie v malebných kulisách
          Českého ráje. Má cit pro detail, skvělé reference a věrné klienty.
        </P>
        <P>
          Přesto se potýkala s klasickým problémem sezónnosti: „Přes léto
          mám práce dost, ale v zimě nevím, co dělat, i když jsem na
          sociálních sítích aktivní," svěřila se Michaela při našem prvním
          rozhovoru.
        </P>
        <P>
          Michaela měla kvalitní portfolio, zkušenosti, recenze a aktivní
          sociální sítě. Přesto se při některých dotazech v AI odpovědích
          objevovala jiná fotografka nebo Michaela nebyla uvedena vůbec.
        </P>
        <P>
          Problém proto nebyl jednoduše v tom, že by její práce nebyla
          online. Otázkou bylo, jak jednoznačně mohou vyhledávače a AI
          systémy propojit její identitu, služby, lokalitu a jednotlivé
          zdroje informací.
        </P>
      </Section>

      <Section>
        <H2>2. Audit v květnu 2026: Proč AI klientku nedoporučovala?</H2>
        <P>
          Před zahájením jakýchkoliv prací jsme v květnu 2026 provedli audit
          AI viditelnosti. Otestovali jsme 10 reálných zákaznických dotazů
          napříč třemi AI systémy: ChatGPT, Google AI Overview a Perplexity.
          Výsledek byl studenou sprchou:
        </P>
        <ul className="flex flex-col gap-3">
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">
              Původní skóre viditelnosti
            </span>{" "}
            — pouze 6 ze 30 případů (20 %), z toho 3 na branded dotazy.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">
              Záměna identity u Google AI
            </span>{" "}
            — na branded dotaz „Michaela Čížková fotografka – je dobrá?"
            Google AI Overview zobrazil informace o jiné fotografce a
            školitelce spojené s Foto Škoda. Michaele tak přisoudil cizí
            identitu.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">
              Slabá viditelnost u ChatGPT
            </span>{" "}
            — ChatGPT Michaelu doporučil jen v jednom z deseti dotazů a u
            lokálních dotazů na Jičín, Turnov či Sobotku ji nezmínil vůbec.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">
              Nepřesné informace u Perplexity
            </span>{" "}
            — Perplexity tvrdila, že Michaela nemá studio, a odkazovala na
            cizí doménu (orlovefotografie).
          </li>
        </ul>
        <P>
          <span className="font-semibold text-cream">
            V čem byl technický problém?
          </span>{" "}
          Problém nebyl v kvalitě fotografií ani v recenzích (Michaela má na
          GBP i Firmy.cz hodnocení 5/5). Problém spočíval v technickém a
          sémantickém dluhu původního webu:
        </P>
        <ul className="flex flex-col gap-3">
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">
              Pomalé načítání (LCP 14,5 s, naměřeno v dubnu 2026)
            </span>{" "}
            — podle PageSpeed Insights vykazovala mobilní verze skóre
            výkonu pouze 57/100.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">
              Chybějící strukturovaná data
            </span>{" "}
            — na webu neexistoval žádný schema markup (JSON-LD), který by AI
            systémům pomohl pochopit, kdo je autorka, jaké nabízí služby a v
            jaké oblasti působí.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">
              Nekonzistentní NAP údaje
            </span>{" "}
            — jméno, adresa a telefon se na webu a sociálních sítích mírně
            lišily.
          </li>
        </ul>
        <P>
          Podobný problém se záměnou identity jsme popsali dřív v článku{" "}
          <Link href="/field-notes/proc-ai-zamenila-identitu" className="text-cream underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
            Jak AI zaměnila identitu mé klientky
          </Link>
          .
        </P>
      </Section>

      <Section>
        <H2>3. Strategický plán: Jak jsme postavili novou digitální identitu?</H2>
        <P>
          Abychom Michaelu v očích AI vyhledávačů ukotvili jako důvěryhodnou
          volbu pro Český ráj, postupovali jsme takto:
        </P>
        <P>
          <span className="font-semibold text-cream">
            Krok 1: Technický základ na Next.js (Vercel).
          </span>{" "}
          V době, kdy jsem vstoupila do projektu, Michaela už spolupracovala
          s webmasterem Michalem Jirákem na novém webu, který přebudoval na
          Next.js + Sanity CMS, hostovaný na Vercelu, s důrazem na rychlost a
          čistý kód. Jak přesně spolupráce s webmasterem probíhala, popisuju
          v článku{" "}
          <Link href="/field-notes/implementace-a-overeni" className="text-cream underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
            Strategie nestačí — jak jsme ji dostali na živý web
          </Link>
          .
        </P>
        <P>
          <span className="font-semibold text-cream">
            Krok 2: Strukturovaná data (JSON-LD Schema Markup).
          </span>{" "}
          Do kódu jsme přidali propojenou síť strukturovaných dat:
        </P>
        <ul className="flex flex-col gap-3">
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">Person</span> —
            definice Michaely s propojením na její oficiální profily
            (sameAs).
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">LocalBusiness</span>{" "}
            — označení studia v Mladějově s geo-souřadnicemi a spádovou
            oblastí (Jičín, Turnov, Sobotka, Mladá Boleslav).
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">OfferCatalog</span> —
            strukturovaný ceník a přehled hlavních služeb.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">WebSite</span> —
            definice webu jako celku a jeho základních vlastností.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">WebPage</span> —
            označení jednotlivých podstránek, aby AI rozuměla struktuře webu.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">ImageObject</span> —
            popisky fotografií v portfoliu, jasný důkaz, že reálně fotí to,
            co web tvrdí.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">FAQPage</span> —
            strukturovaná data k nejčastějším klientským dotazům.
          </li>
        </ul>
        <P>
          <span className="font-semibold text-cream">
            Krok 3: Nasazení souboru llms.txt.
          </span>{" "}
          Do kořenového adresáře webu jsme nahráli strukturovaný markdown
          soubor. Žádný z hlavních poskytovatelů AI se zatím veřejně
          nezavázal tento formát využívat, takže jsme ho nasadili jako
          nízkonákladový doplněk, ne jako klíčové opatření.
        </P>
        <P>
          <span className="font-semibold text-cream">
            Krok 4: Sjednocení NAP konzistence.
          </span>{" "}
          Upravili jsme zápis jména, telefonu, e-mailu a IČO na Google
          Business Profilu, Firmy.cz, Facebooku i Instagramu tak, aby
          odpovídal webu.
        </P>
        <P>
          <span className="font-semibold text-cream">
            Krok 5: Analytická kontrola (GSC, GA4, Bing, Clarity).
          </span>{" "}
          Nasadili jsme Google Search Console, Bing Webmaster Tools, GA4 a
          Microsoft Clarity, abychom měli přehled o chování robotů i
          reálných návštěvníků.
        </P>
      </Section>

      <Section>
        <H2>4. Výsledky po 31 dnech: Z 20 % na 76,7 %</H2>
        <P>
          Web byl v nové verzi spuštěn 18. srpna 2026. Přesně po 31 dnech
          provozu (18. září 2026) jsem provedla kontrolní test na identické
          sadě dotazů.
        </P>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[14px] text-cream/80">
            <thead>
              <tr className="border-b border-white/10 text-left font-mono text-[11px] uppercase tracking-wider text-cream/45">
                <th className="py-3 pr-4">AI systém</th>
                <th className="py-3 pr-4">Květen 2026 (před)</th>
                <th className="py-3 pr-4">Září 2026 (po 31 dnech)</th>
                <th className="py-3">Změna</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 text-cream">ChatGPT</td>
                <td className="py-3 pr-4">10 % (1/10)</td>
                <td className="py-3 pr-4 text-gold-light">90 % (9/10)</td>
                <td className="py-3">+80 %</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 text-cream">Google AI Overview</td>
                <td className="py-3 pr-4">30 % (3/10)</td>
                <td className="py-3 pr-4 text-gold-light">80 % (8/10)</td>
                <td className="py-3">+50 %</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 text-cream">Perplexity</td>
                <td className="py-3 pr-4">20 % (2/10)</td>
                <td className="py-3 pr-4 text-gold-light">60 % (6/10)</td>
                <td className="py-3">+40 %</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-cream">Celková úspěšnost</td>
                <td className="py-3 pr-4 font-semibold text-cream">20 % (6/30)</td>
                <td className="py-3 pr-4 font-semibold text-gold-light">76,7 % (23/30)</td>
                <td className="py-3 font-semibold text-cream">+56,7 %</td>
              </tr>
            </tbody>
          </table>
        </div>
        <P>
          Jde o výrazné zlepšení — ale nejde o izolovaný experiment. Během
          těch 31 dnů se změnilo víc věcí najednou (nový web, schema markup,
          NAP konzistence, čas na indexaci), takže nelze s jistotou říct,
          která konkrétní úprava přispěla nejvíc. Jedno je ale jasně
          měřitelné: k žádné další záměně identity už nedošlo.
        </P>
      </Section>

      <Section>
        <H2>5. Konkrétní příklady z AI vyhledávačů</H2>
        <P>
          Konec záměny identity. U branded dotazu „Michaela Čížková
          fotografka – je dobrá? Co fotí?" ji teď všechny tři systémy
          uvádějí správně, bez záměny s jinou osobou.
        </P>
        <P>
          ChatGPT jako aktivní doporučení. Na dotaz „Doporuč mi dobrou
          fotografku na rodinné focení v Českém ráji" ChatGPT odpověděl: „Za
          mě bych se nejdřív podívala na portfolio Michaely Čížkové – na
          rodinné focení v přírodě Českého ráje se její styl podle
          dostupných informací hodí opravdu dobře."
        </P>
      </Section>

      <Section>
        <H2>6. Souvislost s klasickým SEO: Prvních 28 dní v Google Search Console</H2>
        <P>
          Optimalizace pro AI viditelnost nefunguje izolovaně — souvisí i s
          klasickým vyhledáváním Google. Data z prvních 28 dní ukázala: CTR
          hlavní strany 17,24 % (20 prokliků ze 116 zobrazení), průměrná
          pozice hlavní strany 3,0, a většina prokliků přichází z mobilních
          zařízení.
        </P>
        <P>
          Tahle čísla jsou nadějná, ale je fér dodat, že web se momentálně
          objevuje pod několika duplicitními variantami URL (s www i bez, s
          velkými i malými písmeny v cestách).
        </P>
      </Section>

      <Section>
        <H2>7. Co si z této případové studie odnést pro váš byznys?</H2>
        <P>
          Zajímá vás audit AI viditelnosti pro váš web? Napište mi na
          LinkedIn nebo přes web a podíváme se, jak na tom vaše značka je.
        </P>
      </Section>

      <Section>
        <WhatThisMeans
          points={[
            "Web zůstává klíčovým zdrojem pravdy. Sociální sítě jsou skvělé pro budování komunity, ale AI systémy potřebují strukturovaná fakta přímo na vašem webu.",
            "Strukturovaná data pomáhají, ale nejsou zázrak. Schema markup dává AI systémům jasnější kontext — nejde ale o jedinou ani zaručenou cestu k viditelnosti.",
            "NAP konzistence je základ. Pokud se vaše adresa nebo telefon liší napříč katalogy, AI si vás může hůř ověřit jako důvěryhodnou entitu.",
            "Změny mohou být vidět rychle. Technická optimalizace může přinést měřitelný posun během měsíce — i když jde spíš o souhrn víc změn najednou, ne o jednu kouzelnou úpravu.",
          ]}
          ctaLabel="Probrat AI Search Visibility Audit →"
          ctaHref="/sluzby/ai-search-visibility-audit"
        />
      </Section>

      <Section>
        <RelatedNotes
          notes={[
            { title: "Jak AI zaměnila identitu mé klientky", href: "/field-notes/proc-ai-zamenila-identitu" },
            { title: "Co jsme museli nasadit, aby AI web přečetla", href: "/field-notes/co-jsme-museli-nasadit" },
            { title: "Strategie nestačí — jak jsme ji dostali na živý web", href: "/field-notes/implementace-a-overeni" },
          ]}
        />
      </Section>
    </>
  );
}
