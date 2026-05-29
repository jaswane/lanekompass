import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Recycle,
  Tag,
  Scissors,
  PiggyBank,
  CreditCard,
  Scale,
  Wrench,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Slik kan du unngå å låne",
  description:
    "Enkle grep før du tar opp lån eller bruker kreditt: vent litt, sjekk bruktmarkedet, kutt abonnementer, bygg en liten buffer og sammenlign priser.",
  path: "/unngaa-lan",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Slik kan du unngå å låne", href: "/unngaa-lan" },
];

const TIPS = [
  {
    icon: Clock,
    title: "Vent 24 timer før større kjøp",
    body: "Sov på det. Mye av lysten til å kjøpe forsvinner av seg selv, og da slipper du å låne til noe du egentlig ikke trengte.",
  },
  {
    icon: Recycle,
    title: "Sjekk bruktmarkedet først",
    body: "Mye finnes brukt til en brøkdel av prisen. Et søk på Finn eller i lokale grupper tar fem minutter.",
  },
  {
    icon: Tag,
    title: "Selg noe før du kjøper",
    body: "Har du noe du ikke bruker? Å selge det først kan dekke deler av kjøpet, så du slipper å låne hele summen.",
  },
  {
    icon: Scissors,
    title: "Kutt abonnementer du ikke bruker",
    body: "Gå gjennom faste trekk i nettbanken. Noen hundrelapper i måneden blir fort til penger du kan bruke på det viktige.",
  },
  {
    icon: PiggyBank,
    title: "Bygg en liten buffer",
    body: "Selv en liten sum til side gjør at uventede regninger ikke trenger å bli til ny gjeld. Start smått.",
  },
  {
    icon: CreditCard,
    title: "Vær forsiktig med delbetaling",
    body: "«Kjøp nå, betal senere» er fortsatt kreditt. Hopp over det hvis du ikke har en konkret plan for å betale.",
  },
  {
    icon: Scale,
    title: "Sammenlign priser",
    body: "Samme vare koster ofte ulikt fra sted til sted. Et raskt prissøk kan spare deg for mer enn du tror.",
  },
  {
    icon: Wrench,
    title: "Reparer før du kjøper nytt",
    body: "En reparasjon er som regel billigere enn å kjøpe nytt — og ofte raskere enn du tror.",
  },
];

export default function UnngaaLanPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/unngaa-lan`,
            name: "Slik kan du unngå å låne",
            description:
              "Enkle grep før du tar opp lån eller bruker kreditt.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Før du låner"
        title="Slik kan du unngå å låne"
        lede="Noen ganger er det smartere å vente, selge eller spare litt enn å låne. Her er enkle grep du kan prøve før du tar opp lån eller bruker kreditt. Ingen pekefinger — bare praktiske tips."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {TIPS.map((t) => {
            const Icon = t.icon;
            return (
              <article key={t.title} className="card p-5 flex flex-col">
                <span
                  aria-hidden
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green-soft text-green mb-3"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="font-display font-bold text-lg text-ink tracking-display leading-snug">
                  {t.title}
                </h2>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {t.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="card p-6 sm:p-7">
          <h2 className="font-display font-bold text-xl text-ink tracking-display">
            Må du likevel vurdere lån?
          </h2>
          <p className="mt-2 text-muted leading-relaxed">
            Hvis du allerede har gjeld eller vurderer å låne, er det lurt å
            starte med oversikt. Da ser du hele bildet før du tar et valg.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Link href="/rydd-okonomien" className="btn-primary">
              Rydd økonomien på 7 steg
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <Link href="/verktoy" className="btn-ghost">
              Se gratis arbeidsark
            </Link>
          </div>
        </div>

        <OfficialSourcesBox
          ids={["forbrukerradet", "finansportalen", "nav"]}
          intro="Vil du sammenligne priser og lån, eller trenger du hjelp med økonomien? Disse offentlige tjenestene er gratis å bruke."
        />

        <DisclaimerBox />
      </div>
    </>
  );
}
