import { BTN_PRIMARY, LABEL } from "./Ui";

// Skutečná odpověď ChatGPT, zapsaná 23. 11. 2026. Na webu jen názvy podniků.
export const TEST_QUERY = "Romantický wellness hotel v Českém ráji";
export const TEST_TOOL = "ChatGPT";
export const TEST_RECORDED = "Eva Sezemská dne 23. 11. 2026";

const recommended = [
  "EA Zámecký hotel Hrubá Skála",
  "Cihloffka",
  "Černá louže",
  "Vila Čapek",
  "Biokolna – Suites & Spa",
  "Hotel Pošta",
];

export const TEST_COUNT = recommended.length;

export default function RecommendationTest() {
  return (
    <div className="flex flex-col gap-6 border border-rule bg-paper p-6 sm:p-10">
      <p className={LABEL}>odpověď {TEST_TOOL}</p>

      {/* <details> funguje i bez JavaScriptu a seznam je ve zdrojovém kódu stránky */}
      <details className="group">
        <summary className="group-open:hidden">
          <span className="flex flex-col items-start gap-6">
            <span className="font-serif text-[26px] leading-[1.3] text-ink sm:text-[28px]">
              Koho by {TEST_TOOL} doporučil vašemu zákazníkovi?
            </span>
            <span className="text-base leading-[1.6] text-ink-2">
              Zkuste si nejdřív tipnout. Pak se podívejte na skutečnou odpověď.
            </span>
            <span className={BTN_PRIMARY}>Zobrazit, koho AI doporučila</span>
          </span>
        </summary>

        {/* Vlastní obal: při otevření se zobrazí znovu, takže se řádky vypíšou postupně jako odpověď AI */}
        <div className="hidden group-open:block">
          <ol>
            {recommended.map((name, i) => (
              <li
                key={name}
                style={{ "--i": i } as React.CSSProperties}
                className="typed-row flex items-baseline justify-between gap-6 border-t border-rule py-4"
              >
                <span className="text-[18px] font-medium text-ink">{name}</span>
                <span className={LABEL}>{String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
            {/* Prázdné místo na seznamu: tady chybí firma návštěvníka */}
            <li
              style={{ "--i": recommended.length + 1 } as React.CSSProperties}
              className="typed-row flex items-baseline justify-between gap-6 border-y border-dashed border-muted py-4"
            >
              <span className="font-mono text-[15px] tracking-[0.04em] text-muted">vaše firma?</span>
              <span className={LABEL}>{String(recommended.length + 1).padStart(2, "0")}</span>
            </li>
          </ol>
          <p
            style={{ "--i": recommended.length + 3 } as React.CSSProperties}
            className="typed-row mt-5 text-[15px] leading-[1.6] text-ink-2"
          >
            Ke každému podniku AI automaticky vygenerovala vlastní popis atmosféry a doporučení —
            zdarma, bez jakékoli reklamy. Podnik, který na tomhle seznamu není, o&nbsp;tenhle moment
            přichází úplně.
          </p>
        </div>
      </details>
    </div>
  );
}
