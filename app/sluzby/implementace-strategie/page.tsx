import { Eyebrow, H1, H2, P, Section, CtaBox } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implementace strategie — Eva Sezemská",
  description:
    "Koordinuji s vaším webmasterem technické nasazení doporučených změn — od struktury po Schema.org — aby vás AI skutečně začala doporučovat.",
  alternates: { canonical: "/sluzby/implementace-strategie" },
};

export default function Implementace() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby", href: "/sluzby" }, { label: "Implementace strategie" }]} />
        <Eyebrow>Implementace strategie</Eyebrow>
        <H1>Strategie bez implementace nic nezmění.</H1>
        <P>
          Proto nekončím u doporučení. Ve spolupráci s vaším webmasterem
          pomáhám změny dostat do webu a digitálního ekosystému firmy.
        </P>
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
        <H2>Co implementuji</H2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 font-serif text-lg text-cream">Technical</h3>
            <p className="text-[14px] text-cream/70">Schema.org, strukturovaná data, technická SEO infrastruktura, indexace, interní struktura.</p>
          </div>
          <div>
            <h3 className="mb-2 font-serif text-lg text-cream">Content</h3>
            <p className="text-[14px] text-cream/70">Stránky služeb, lokální stránky, FAQ, obsahové clustery, entity-based content.</p>
          </div>
          <div>
            <h3 className="mb-2 font-serif text-lg text-cream">Local</h3>
            <p className="text-[14px] text-cream/70">Google Business Profile, NAP, lokální signály a zdroje.</p>
          </div>
          <div>
            <h3 className="mb-2 font-serif text-lg text-cream">AI Readability</h3>
            <p className="text-[14px] text-cream/70">Struktura informací, konzistence entity, llms.txt (pokud dává smysl), strojově čitelný obsah.</p>
          </div>
        </div>
      </Section>

      <Section>
        <H2>Priorita před objemem.</H2>
        <P>Nejde o to udělat co nejvíc změn. Jde o to udělat správnou věc, na správném místě, ve správném pořadí.</P>
      </Section>

      <Section>
        <CtaBox
          title="Máte strategii. Teď ji uvedeme do reality."
          href="https://script.google.com/macros/s/AKfycbzP3VLI0hSpFds4PHc9oMsynueY8snUzI_THmtx4B3K8AaZTFh6x-7B7YI1xFBMHg0P/exec"
          ctaLabel="Probrat implementaci →"
        >
          Pojďme probrat, jak by implementace mohla vypadat u vás.
        </CtaBox>
      </Section>
    </>
  );
}
