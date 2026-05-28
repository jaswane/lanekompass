import { PageHeader } from "@/components/PageHeader";
import { CalculatorShell } from "@/components/CalculatorShell";
import { RefinanceCalculator } from "@/components/RefinanceCalculator";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Refinansieringskalkulator",
  description:
    "Sammenlign dagens gjeld mot et mulig refinansieringslån. Se månedlig betaling, total kostnad og effekten av lengre løpetid. Veiledende — ingen anbefaling om å søke.",
  path: "/kalkulator/refinansiering",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Refinansiering", href: "/kalkulator/refinansiering" },
];

export default function RefinansieringPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/kalkulator/refinansiering`,
            name: "Refinansieringskalkulator",
            description:
              "Sammenlign dagens gjeld mot et mulig refinansieringslån.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Kalkulator"
        title="Refinansiering"
        lede="Refinansiering er ett mulig verktøy — best vurdert når du allerede har full oversikt. Her kan du sammenligne dagens gjeld mot et mulig nytt lån og se hele kostnaden, ikke bare månedsbeløpet."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-8">
        <div className="card-soft px-5 py-4 text-sm text-ink/90 leading-relaxed">
          <p>
            <strong className="font-semibold text-ink">Slik bruker du den:</strong>{" "}
            Fyll inn dagens situasjon til venstre, og et mulig
            refinansieringstilbud til høyre. Kalkulatoren regner ut og
            sammenligner. Den gir ingen anbefaling om å søke — bruk den til å{" "}
            <em>vurdere</em>, <em>sammenligne</em> og finne ut hvilke vilkår du
            bør sjekke.
          </p>
        </div>

        <CalculatorShell>
          <RefinanceCalculator />
        </CalculatorShell>

        <OfficialSourcesBox
          ids={["finansportalen", "forbrukerradet", "finanstilsynet", "lovdata"]}
          intro="Sammenlign reelle tilbud og les om dine rettigheter før du vurderer refinansiering."
        />
      </div>
    </>
  );
}
