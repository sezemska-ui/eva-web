"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-WGZSN42B17";
const CLARITY_PROJECT_ID = "zfi6uqi202";
const CONSENT_KEY = "cookie-consent";

export default function GoogleAnalyticsConsent() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  function handleChoice(choice: "granted" | "denied") {
    window.localStorage.setItem(CONSENT_KEY, choice);
    setConsent(choice);
  }

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
              window.clarity('consentv2', { ad_Storage: "denied", analytics_Storage: "granted" });
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-paper py-4">
          <div className="mx-auto box-content flex max-w-[1200px] flex-col gap-3 px-[clamp(16px,6vw,96px)] sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <p className="max-w-[70ch] text-[14px] leading-[1.6] text-ink-2">
              Tento web používá cookies pro měření návštěvnosti (Google
              Analytics) a pro anonymní záznam používání stránek (Microsoft
              Clarity). Souhlasíte s jejich použitím?
            </p>
            <div className="flex flex-none gap-3">
              <button
                type="button"
                onClick={() => handleChoice("denied")}
                className="min-h-11 border border-ink px-5 text-[15px] font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
              >
                Odmítnout
              </button>
              <button
                type="button"
                onClick={() => handleChoice("granted")}
                className="min-h-11 border border-navy bg-navy px-5 text-[15px] font-semibold text-on-navy transition-colors duration-200 hover:bg-navy-2"
              >
                Přijmout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
