import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Personvern",
  description:
    "Slik håndterer Lånekompass.no personvern. Kalkulatorene lagrer ingenting på server, og vi krever ingen e-post eller personopplysninger for å bruke verktøyene.",
  path: "/personvern",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Personvern", href: "/personvern" },
];

export default function PersonvernPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/personvern`,
            name: "Personvern",
            description: "Personvernerklæring for Lånekompass.no.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Personvern"
        title="Personvern"
        lede="Kort fortalt: vi samler inn så lite som mulig, og verktøyene dine forblir dine."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-6 prose-soft text-ink/90 leading-relaxed">
        <h2 className="font-display text-2xl text-ink tracking-display">
          Tallene dine lagres ikke hos oss
        </h2>
        <p>
          Kalkulatorene på Lånekompass.no — som gjeldsoversikt og
          refinansiering — regner ut alt lokalt i nettleseren din. Tallene du
          skriver inn sendes ikke til oss og lagres ikke på noen server.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Lagring i nettleseren (localStorage)
        </h2>
        <p>
          Noen verktøy, som sjekklisten «Når bør du ta tak?», husker valgene
          dine ved hjelp av nettleserens localStorage. Disse dataene blir
          liggende kun på din egen enhet, og du kan når som helst nullstille
          dem eller tømme nettleserdataene dine.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Vi krever ingen e-post eller registrering
        </h2>
        <p>
          Du trenger ikke oppgi e-postadresse, navn eller andre
          personopplysninger for å bruke innholdet og verktøyene våre. Vi har i
          dag ingen leadsskjema, søknadsflyt eller innsamling av
          personopplysninger.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Statistikk og informasjonskapsler
        </h2>
        <p>
          Dersom vi bruker anonym, aggregert besøksstatistikk for å forstå
          hvilke sider som er nyttige, gjøres dette uten å identifisere deg som
          enkeltperson. Eventuelle informasjonskapsler vil i så fall være
          begrenset til dette formålet.
        </p>

        <h2 className="font-display text-2xl text-ink tracking-display pt-2">
          Kontakt
        </h2>
        <p>
          Har du spørsmål om personvern, kontakt oss på{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          Lånekompass.no er et prosjekt fra {SITE.company.name}.
        </p>

        <p className="text-sm text-muted">
          Dette er en foreløpig personvernerklæring for en MVP. Den vil bli
          oppdatert dersom funksjonaliteten på siden endres.
        </p>
      </div>
    </>
  );
}
