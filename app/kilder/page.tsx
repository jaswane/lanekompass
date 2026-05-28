import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { ALL_SOURCES } from "@/lib/sources";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Kilder",
  description:
    "Offentlige kilder Lånekompass.no bygger på: Finanstilsynet, Forbrukerrådet/Finansportalen, NAV, Gjeldsregisteret, Forbrukertilsynet og Lovdata.",
  path: "/kilder",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Kilder", href: "/kilder" },
];

export default function KilderPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/kilder`,
            name: "Kilder",
            description:
              "Offentlige kilder Lånekompass.no bygger på.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Trygghet og etterprøvbarhet"
        title="Våre kilder"
        lede="Lånekompass.no bruker offentlige og uavhengige kilder for å gjøre innholdet tryggere og mer etterprøvbart. Vi har ikke noe å selge deg — målet er at du selv skal kunne sjekke det vi skriver."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-8">
        <ul className="space-y-4">
          {ALL_SOURCES.map((s) => (
            <li key={s.id} className="card p-5">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-display text-lg text-accent tracking-display hover:underline underline-offset-4"
              >
                {s.name}
                <ExternalLink aria-hidden className="h-4 w-4 opacity-70" />
              </a>
              <p className="mt-1.5 text-ink/90 leading-relaxed">{s.blurb}</p>
            </li>
          ))}
        </ul>

        <div className="card-soft px-5 py-4 text-sm text-muted leading-relaxed">
          <p>
            Lenkene fører til de offisielle nettstedene. Lånekompass.no er
            uavhengig av disse instansene og gjengir informasjonen for å gjøre
            den lettere tilgjengelig. Ved tvil gjelder alltid den offisielle
            kilden.
          </p>
        </div>

        <DisclaimerBox />
      </div>
    </>
  );
}
