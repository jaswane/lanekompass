import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PrintButton } from "@/components/print/PrintButton";
import {
  PrintSheet,
  PrintSection,
  PrintLineField,
  PrintHelpBox,
} from "@/components/print/PrintKit";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Økonomioversikt – gratis A4-arbeidsark",
  description:
    "Skriv ut et gratis A4-ark for å føre opp inntekt og faste utgifter for hånd, og se hva du har igjen hver måned. Du trenger ikke oppgi e-post.",
  path: "/verktoy/okonomioversikt-a4",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Verktøy", href: "/verktoy" },
  { name: "Økonomioversikt (A4)", href: "/verktoy/okonomioversikt-a4" },
];

const INNTEKT = [
  "Lønn (etter skatt)",
  "Ytelser fra NAV",
  "Andre inntekter",
];

const UTGIFTER = [
  "Bolig (husleie / lån)",
  "Strøm og oppvarming",
  "Forsikringer",
  "Mobil og internett",
  "Transport / bil",
  "Mat og dagligvarer",
  "Abonnementer",
  "Andre faste utgifter",
];

export default function OkonomioversiktA4Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/verktoy/okonomioversikt-a4`,
            name: "Økonomioversikt – A4-arbeidsark",
            description:
              "Gratis A4-ark for å føre opp inntekt og faste utgifter for hånd.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      {/* Skjerm-verktøylinje (skjules ved utskrift) */}
      <div className="no-print site-container pt-8 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Breadcrumbs crumbs={CRUMBS} />
        <PrintButton />
      </div>

      <div className="site-container pb-16">
        <PrintSheet
          title="Økonomioversikt"
          intro="Før opp inntekten din og de faste utgiftene dine, og regn ut hva du har igjen hver måned. Bruk blyant — det er lett å justere."
          shortLink="lånekompass.no/tall"
          qrSrc="/qr/qr-tall.svg"
          qrCaption="Står du fast? Skann for å se hvor du finner inntekt, faste utgifter og tallene du trenger."
          sourcesNote={
            <>
              Hvor finner du tallene? Se NAV (utbetalinger), lønnsslipp og
              nettbank. Sammenlign priser hos Forbrukerrådet / Finansportalen.
            </>
          }
        >
          <PrintHelpBox
            items={[
              "Inntekt: lønnsslipp, NAV-utbetalinger eller siste 3 måneder i nettbanken",
              "Faste utgifter: AvtaleGiro og eFaktura i nettbanken, og kontoutskrift",
              "Bruk et snitt hvis beløpene varierer fra måned til måned",
            ]}
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <PrintSection title="Inntekter per måned" hint="kr">
              {INNTEKT.map((l) => (
                <PrintLineField key={l} label={l} suffix="kr" />
              ))}
              <div className="mt-2 flex items-end gap-3 py-1.5 border-t border-ink/15">
                <span className="text-sm font-semibold text-ink shrink-0 min-w-[8.5rem]">
                  Sum inntekter
                </span>
                <span className="write-line flex-1" aria-hidden />
                <span className="text-sm text-ink/50 shrink-0">kr</span>
              </div>
            </PrintSection>

            <PrintSection title="Faste utgifter per måned" hint="kr">
              {UTGIFTER.map((l) => (
                <PrintLineField key={l} label={l} suffix="kr" />
              ))}
              <div className="mt-2 flex items-end gap-3 py-1.5 border-t border-ink/15">
                <span className="text-sm font-semibold text-ink shrink-0 min-w-[8.5rem]">
                  Sum utgifter
                </span>
                <span className="write-line flex-1" aria-hidden />
                <span className="text-sm text-ink/50 shrink-0">kr</span>
              </div>
            </PrintSection>
          </div>

          <PrintSection title="Til overs hver måned" hint="inntekter − utgifter">
            <div className="flex items-end gap-3 py-2">
              <span className="text-sm text-ink/80 shrink-0">
                Sum inntekter − sum utgifter =
              </span>
              <span className="write-box flex-1 max-w-[12rem]" aria-hidden />
              <span className="text-sm text-ink/50">kr</span>
            </div>
            <p className="text-xs text-ink/60 mt-1">
              Er tallet negativt, er det et tegn på at det er verdt å lage en
              full gjeldsoversikt og en ryddeplan.
            </p>
          </PrintSection>
        </PrintSheet>
      </div>
    </>
  );
}
