import { PageHeader } from "@/components/PageHeader";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Ansvarsfraskrivelse",
  description:
    "Innhold og beregninger på Lånekompass.no er veiledende og generell informasjon. Vi er ikke bank, låneformidler eller økonomisk rådgiver og gir ikke personlig rådgivning.",
  path: "/ansvarsfraskrivelse",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Ansvarsfraskrivelse", href: "/ansvarsfraskrivelse" },
];

export default function AnsvarsfraskrivelsePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/ansvarsfraskrivelse`,
            name: "Ansvarsfraskrivelse",
            description: "Ansvarsfraskrivelse for Lånekompass.no.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Viktig å vite"
        title="Ansvarsfraskrivelse"
        lede="Vi vil at du skal vite nøyaktig hva Lånekompass.no er — og hva det ikke er."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-6 prose-soft text-ink/90 leading-relaxed">
        <h2 className="font-display text-2xl text-ink tracking-display">
          Generell veiledning, ikke personlig rådgivning
        </h2>
        <p>
          Alt innhold på Lånekompass.no er generell informasjon og veiledning.
          Det er ikke personlig økonomisk rådgivning, og det er ikke tilpasset
          din konkrete situasjon. Du er selv ansvarlig for de valgene du tar.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Vi er ikke bank eller låneformidler
        </h2>
        <p>
          Lånekompass.no er ikke bank, finansforetak, låneformidler, megler
          eller autorisert økonomisk rådgiver. Vi formidler ikke lån og
          behandler ikke lånesøknader.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Beregninger er veiledende
        </h2>
        <p>
          Kalkulatorene våre gir forenklede, veiledende anslag basert på tallene
          du selv legger inn. De faktiske kostnadene, rentene og vilkårene kan
          avvike. Sjekk alltid den effektive renten, gebyrene og de fullstendige
          vilkårene hos den enkelte tilbyderen før du tar valg.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Refinansiering er ett mulig verktøy
        </h2>
        <p>
          Når vi omtaler refinansiering, er det som ett mulig verktøy etter at
          du har skaffet deg oversikt — ikke som en anbefaling om å søke. Lavere
          månedsbeløp kan bety høyere total kostnad over tid. Vurder og
          sammenlign nøye.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Trenger du hjelp?
        </h2>
        <p>
          Hvis gjeld går ut over hverdagen din, finnes det gratis hjelp å få.
          NAV tilbyr økonomi- og gjeldsrådgivning på telefon 55 55 33 39.
        </p>
      </div>

      <div className="narrow-container pb-10">
        <OfficialSourcesBox
          ids={["finanstilsynet", "forbrukertilsynet", "nav", "lovdata"]}
          intro="For autoritativ informasjon, se de offentlige instansene som regulerer og veileder på dette området."
        />
      </div>
    </>
  );
}
