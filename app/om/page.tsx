import { PageHeader } from "@/components/PageHeader";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Om Lånekompass.no",
  description:
    "Lånekompass.no er et uavhengig veiledningsverktøy som hjelper deg å få oversikt over gjeld og faste utgifter. Vi er ikke bank, låneformidler eller økonomisk rådgiver.",
  path: "/om",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Om", href: "/om" },
];

export default function OmPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/om`,
            name: "Om Lånekompass.no",
            description:
              "Om Lånekompass.no — uavhengig veiledning for å få oversikt over økonomien.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Om oss"
        title="Om Lånekompass.no"
        lede="Et rolig sted å begynne når økonomien føles uoversiktlig."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-6 prose-soft text-ink/90 leading-relaxed">
        <p>
          Lånekompass.no hjelper folk å få oversikt over dyr gjeld,
          kredittkort, smålån og faste utgifter — før de vurderer neste steg.
          Vi tror at gode økonomiske valg starter med oversikt, ikke med et nytt
          lån.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Hva vi er — og ikke er
        </h2>
        <p>
          Lånekompass.no er et uavhengig veiledningsverktøy. Vi er{" "}
          <strong>ikke</strong> bank, låneformidler, megler eller personlig
          økonomisk rådgiver, og vi gir ikke personlig økonomisk rådgivning.
          Innholdet vårt er generell informasjon og veiledning som du kan bruke
          til å forstå din egen situasjon bedre.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Slik jobber vi
        </h2>
        <ul className="space-y-2">
          <li>
            Vi starter alltid med oversikt — refinansiering og andre løsninger
            kommer eventuelt etterpå, som ett mulig verktøy blant flere.
          </li>
          <li>
            Vi bruker et rolig og menneskelig språk, og unngår press og
            skremsel.
          </li>
          <li>
            Vi bygger på offentlige kilder, slik at du selv kan etterprøve det
            vi skriver.
          </li>
          <li>
            Verktøyene våre regner ut lokalt i nettleseren din. Vi samler ikke
            inn personopplysninger for å bruke dem.
          </li>
        </ul>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Hvem står bak?
        </h2>
        <p>
          Lånekompass.no er et prosjekt fra{" "}
          <a
            href={SITE.company.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE.company.name}
          </a>
          . Har du spørsmål eller innspill, kan du kontakte oss på{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        </p>
      </div>

      <div className="narrow-container pb-10 space-y-6">
        <OfficialSourcesBox
          ids={["finanstilsynet", "forbrukerradet", "nav"]}
          intro="Vi henviser gjerne videre til offentlige instanser når du trenger mer hjelp enn et verktøy kan gi."
        />
        <DisclaimerBox />
      </div>
    </>
  );
}
