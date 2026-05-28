import { PageHeader } from "@/components/PageHeader";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Annonser og samarbeid",
  description:
    "Slik tenker Lånekompass.no om annonser, partnere og åpenhet. I dag har vi ingen affiliatepartnere, og oversikt kommer alltid før kommersielle lenker.",
  path: "/annonser-og-samarbeid",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Annonser og samarbeid", href: "/annonser-og-samarbeid" },
];

export default function AnnonserOgSamarbeidPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/annonser-og-samarbeid`,
            name: "Annonser og samarbeid",
            description:
              "Åpenhet om annonser og samarbeid på Lånekompass.no.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Åpenhet"
        title="Annonser og samarbeid"
        lede="Vi mener du har rett til å vite hvordan en tjeneste som dette tjener penger — og hva som styrer det du ser."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-6 prose-soft text-ink/90 leading-relaxed">
        <h2 className="font-display text-2xl text-ink tracking-display">
          Slik er det i dag
        </h2>
        <p>
          Lånekompass.no er i en tidlig fase. Vi har i dag{" "}
          <strong>ingen affiliatepartnere</strong>, ingen betalte lenker til
          långivere og ingen kommersielle samarbeid. Verktøyene og innholdet er
          gratis å bruke.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Hvis vi får partnere senere
        </h2>
        <p>
          Skulle vi på sikt inngå samarbeid eller bruke partnerlenker, vil vi
          følge disse prinsippene:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Oversikt først.</strong> Å forstå egen økonomi kommer alltid
            før eventuelle kommersielle lenker. Vi vil aldri presse deg mot et
            lån.
          </li>
          <li>
            <strong>Tydelig merking.</strong> Annonser og partnerlenker vil
            være tydelig merket, slik at du alltid vet hva som er kommersielt.
          </li>
          <li>
            <strong>Innenfor regelverket.</strong> Markedsføring av kreditt er
            strengt regulert. Vi følger Forbrukertilsynets og Finanstilsynets
            føringer, og bruker ikke uttrykk som lover noe vi ikke kan holde.
          </li>
          <li>
            <strong>Ingen «søk nå»-press.</strong> Vi bruker ikke formuleringer
            som «garantert lån», «lån uansett» eller «beste lån».
          </li>
        </ul>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Kontakt
        </h2>
        <p>
          Vil du diskutere et mulig samarbeid? Ta kontakt på{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          Lånekompass.no er et prosjekt fra {SITE.company.name}.
        </p>
      </div>

      <div className="narrow-container pb-10">
        <DisclaimerBox />
      </div>
    </>
  );
}
