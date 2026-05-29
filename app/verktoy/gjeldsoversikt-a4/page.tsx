import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PrintButton } from "@/components/print/PrintButton";
import {
  PrintSheet,
  PrintSection,
  PrintHelpBox,
} from "@/components/print/PrintKit";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Gjeldsoversikt – gratis A4-arbeidsark",
  description:
    "Skriv ut et gratis A4-ark for å samle alle lån, kredittkort og smålån med restbeløp, effektiv rente og månedlig betaling. Du trenger ikke oppgi e-post.",
  path: "/verktoy/gjeldsoversikt-a4",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Verktøy", href: "/verktoy" },
  { name: "Gjeldsoversikt (A4)", href: "/verktoy/gjeldsoversikt-a4" },
];

const COLS = [
  "Kreditor",
  "Type",
  "Restbeløp",
  "Eff. rente",
  "Pr. måned",
  "Forfall",
];

const ROWS = 9;

export default function GjeldsoversiktA4Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/verktoy/gjeldsoversikt-a4`,
            name: "Gjeldsoversikt – A4-arbeidsark",
            description:
              "Gratis A4-ark for å samle all gjeld med restbeløp, rente og månedlig betaling.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <div className="no-print site-container pt-8 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Breadcrumbs crumbs={CRUMBS} />
        <PrintButton />
      </div>

      <div className="site-container pb-16">
        <PrintSheet
          title="Gjeldsoversikt"
          intro="Samle alle lån, kredittkort og smålån på ett ark. Sorter gjerne etter effektiv rente — den dyreste gjelden står øverst."
          shortLink="lånekompass.no/gjeld"
          qrSrc="/qr/qr-gjeld.svg"
          qrCaption="Skann for å åpne gjeldskalkulatoren og regne ut samlet gjeld."
          sourcesNote={
            <>
              Hvor finner du tallene? Logg inn på Gjeldsregisteret for samlet
              usikret gjeld. Effektiv rente og gebyrer står i låneavtalen.
              Finanstilsynet og Forbrukerrådet forklarer begrepene.
            </>
          }
        >
          <PrintHelpBox
            items={[
              "Gjeldsregisteret.com (BankID): forbrukslån og kredittkort samlet — gratis",
              "Effektiv rente og gebyrer: låneavtalen eller nedbetalingsplanen",
              "Saldo og minste innbetaling: kredittkortappen eller siste faktura",
            ]}
          />

          <PrintSection title="Dine gjeldsposter">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    {COLS.map((c) => (
                      <th
                        key={c}
                        className="border border-ink/25 px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-wide text-ink/70"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: ROWS }).map((_, i) => (
                    <tr key={i}>
                      {COLS.map((c) => (
                        <td
                          key={c}
                          className="border border-ink/20 px-2 py-3"
                          aria-hidden
                        />
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td
                      className="border border-ink/25 px-2 py-3 text-sm font-semibold text-ink"
                      colSpan={2}
                    >
                      Sum
                    </td>
                    <td className="border border-ink/25 px-2 py-3" aria-hidden />
                    <td className="border border-ink/25 px-2 py-3" aria-hidden />
                    <td className="border border-ink/25 px-2 py-3" aria-hidden />
                    <td className="border border-ink/25 px-2 py-3" aria-hidden />
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-ink/60 mt-2">
              Type = kredittkort, forbrukslån, smålån, billån, inkasso m.m.
              «Pr. måned» er det du faktisk betaler hver måned.
            </p>
          </PrintSection>

          <PrintSection title="Neste steg">
            <p className="text-sm text-ink/80 leading-relaxed">
              Med oversikten på plass kan du betale ned den dyreste gjelden
              først, eller vurdere om refinansiering er aktuelt. Husk:
              sammenlign alltid total kostnad — ikke bare månedsbeløpet.
            </p>
          </PrintSection>
        </PrintSheet>
      </div>
    </>
  );
}
