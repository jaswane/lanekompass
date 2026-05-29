import { PageHeader } from "@/components/PageHeader";
import { CalculatorShell } from "@/components/CalculatorShell";
import { DebtOverview } from "@/components/DebtOverview";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { WhereToFindBox } from "@/components/WhereToFindBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Gjeldsoversikt-kalkulator",
  description:
    "Samle kredittkort, forbrukslån og smålån ett sted og se samlet gjeld og månedlig betaling. Tallene lagres ikke — alt regnes ut lokalt i nettleseren.",
  path: "/kalkulator/gjeldsoversikt",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Gjeldsoversikt", href: "/kalkulator/gjeldsoversikt" },
];

export default function GjeldsoversiktPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/kalkulator/gjeldsoversikt`,
            name: "Gjeldsoversikt-kalkulator",
            description:
              "Legg inn gjeldsposter og se samlet gjeld og månedlig betaling.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <div className="no-print">
        <PageHeader
          kicker="Kalkulator"
          title="Gjeldsoversikt"
          lede="Legg inn én linje per gjeldspost — kredittkort, forbrukslån, smålån og annet. Du ser samlet gjeld og hva du betaler hver måned. Ingenting lagres."
          crumbs={CRUMBS}
        />
      </div>

      <div className="narrow-container pb-10 space-y-8">
        <div className="no-print">
          <WhereToFindBox
            title="Vet du ikke restbeløp og renter?"
            items={[
              "Logg inn på Gjeldsregisteret.com med BankID — gratis oversikt over forbrukslån og kredittkort",
              "Nedbetalingsplanen fra hver långiver viser restbeløp og effektiv rente",
              "Kredittkortappen viser saldo og minste innbetaling",
            ]}
          />
        </div>

        <CalculatorShell>
          <DebtOverview />
        </CalculatorShell>

        <div className="no-print">
          <OfficialSourcesBox
            ids={["gjeldsregisteret", "forbrukerradet", "finansportalen", "nav"]}
            intro="Bruk offentlige kilder for å fylle inn riktige tall og forstå hva gjelden faktisk koster."
          />
        </div>
      </div>
    </>
  );
}
