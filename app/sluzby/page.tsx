import Link from "next/link";
import { Eyebrow, H1, H2, P, Section, CtaBox } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import ServicePath from "@/components/ServicePath";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Služby — Eva Sezemská",
  description:
    "Úvodní konzultace, audit, strategie, implementace a budování důvěryhodnosti — kroky k tomu, aby vás vyhledávače a AI dohledaly, pochopily a doporučily.",
  path: "/sluzby",
});

export default function Sluzby() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby" }]} />
        <Eyebrow>Služby / 00–04</Eyebrow>
        <H1>Od prvního zjištění k dlouhodobé digitální autoritě.</H1>
        <P>
          Pomáhám firmám zjistit, co se děje ve chvíli, kdy jejich zákazník
          hledá bez znalosti jejich jména.
        </P>
        <P>
          Testuji, jak je v těchto situacích vidí Google a AI, proč doporučují
          jiné firmy místo nich a co je potřeba změnit, aby se jejich značka
          stala dohledatelnou, pochopitelnou a doporučitelnou.
        </P>
        <Link
          href="/pro-koho"
          className="inline-block text-sm font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
        >
          Pro koho pracuji →
        </Link>
      </Section>

      <Section>
        <H2>SEO a AI viditelnost: jak vám mohu pomoci</H2>
        <ServicePath />
      </Section>

      <Section>
        <CtaBox title="Kde začít?">
          Nevíte, proč vás zákazníci nenacházejí nebo nedostávají mezi
          doporučeními? Začněte konzultací. Zjistíme, jestli je pro vás dalším
          krokem audit AI viditelnosti s akčním plánem.
        </CtaBox>
      </Section>
    </>
  );
}
