import Link from "next/link";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  QrCode,
  AlertTriangle,
  FileText,
  ClipboardList,
  Calculator,
  Search,
  ExternalLink,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, faqSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Få oversikt over dyr gjeld før du vurderer neste steg",
  description:
    "Lånekompass.no hjelper deg å få oversikt over dyr gjeld, kredittkort, smålån og faste utgifter — med arbeidsark, kalkulatorer og offentlige kilder. Oversikt først.",
  path: "/",
});

const TRUST_POINTS = ["Ingen innlogging", "Ingen lagring hos oss", "Offentlige kilder"];

const STARTPACK = [
  { title: "Inntekt", hint: "Hvor finner du tallet?", href: "/tall" },
  { title: "Faste utgifter", hint: "Sjekk AvtaleGiro og eFaktura", href: "/tall" },
  { title: "Kredittkort", hint: "Se saldo, rente og minstebeløp", href: "/gjeld" },
  { title: "Smålån", hint: "Finn effektiv rente og gebyrer", href: "/gjeld" },
];

const STEPS = [
  {
    no: "01",
    tag: "Start her",
    title: "Finn frem det du trenger",
    body: "Start rolig. Nettbank, BankID, lønnsslipp, eFaktura, kredittkortapp og eventuelle inkassobrev er nok for å komme i gang.",
  },
  {
    no: "02",
    tag: "Hvor finner du tallet?",
    title: "Finn inntekten din",
    body: "Se hva som faktisk kommer inn på konto hver måned. Bruk snitt av 3 måneder hvis inntekten varierer.",
  },
  {
    no: "03",
    tag: "Faste trekk",
    title: "Skriv ned faste utgifter",
    body: "Gå gjennom AvtaleGiro, eFaktura og kontoutskrift. Ikke vær perfekt — målet er å se mønsteret.",
  },
  {
    no: "04",
    tag: "Viktigste steg",
    title: "Lag gjeldsoversikt",
    body: "Skriv ned restbeløp, rente, gebyr, minstebeløp og forfallsdato for hvert lån, kort eller handlekonto.",
  },
];

const TOOLS = [
  {
    icon: FileText,
    title: "Økonomioversikt A4",
    body: "Et enkelt ark for å skrive ned inntekt og faste utgifter for hånd. Print og fyll ut ved kjøkkenbordet.",
    href: "/verktoy",
    cta: "Til arbeidsarkene",
  },
  {
    icon: ClipboardList,
    title: "Gjeldsoversikt",
    body: "Fyll inn kredittkort, forbrukslån og smålån og se samlet beløp og månedlig betaling. Lagrer ingenting.",
    href: "/kalkulator/gjeldsoversikt",
    cta: "Åpne kalkulatoren",
  },
  {
    icon: Calculator,
    title: "Refinansieringskalkulator",
    body: "Se om lavere månedsbeløp faktisk lønner seg — eller om total kostnad blir høyere med lengre løpetid.",
    href: "/kalkulator/refinansiering",
    cta: "Sammenlign kostnad",
  },
];

const FINDOUT = [
  {
    title: "Inntekt",
    body: "Se lønnsslipp, nettbank, NAV-utbetalinger eller Skatteetatens rapporterte inntekter.",
  },
  {
    title: "Kredittkortsaldo",
    body: "Se kredittkortappen eller siste faktura. Skill mellom brukt kreditt og kredittramme.",
  },
  {
    title: "Effektiv rente",
    body: "Se låneavtale eller faktura. Effektiv rente inkluderer gebyrer og kostnader.",
  },
  {
    title: "Faste trekk",
    body: "Sjekk AvtaleGiro, eFaktura og faste betalinger i nettbanken.",
  },
];

const TERMS = [
  {
    term: "Effektiv rente",
    body: "Den ekte prisen på lånet: renter pluss alle gebyrer, samlet i ett tall. Bruk den når du sammenligner lån.",
  },
  {
    term: "Gebyrer",
    body: "Småbeløp som etablerings- og termingebyr. De legger seg oppå renten og blir fort mye over tid.",
  },
  {
    term: "Nominell rente",
    body: "Renten uten gebyrer. Ser lavere ut enn den effektive renten — derfor kan den lure deg.",
  },
  {
    term: "Refinansiering",
    body: "Å samle flere lån i ett nytt lån. Kan gi lavere månedsbeløp, men sjekk alltid om totalen blir dyrere.",
  },
];

const SOURCE_CHIPS = ["NAV", "Forbrukerrådet", "Finanstilsynet", "Gjeldsregisteret"];

const FAQ = [
  {
    q: "Er Lånekompass.no en bank eller låneformidler?",
    a: "Nei. Lånekompass.no er et uavhengig veiledningsverktøy som hjelper deg å få oversikt over egen økonomi. Vi er ikke bank, låneformidler, megler eller økonomisk rådgiver.",
  },
  {
    q: "Koster det noe, og må jeg oppgi opplysninger?",
    a: "Nei. Verktøyene og arbeidsarkene er gratis, og du trenger ikke oppgi e-post eller personopplysninger. Tall du skriver inn i kalkulatorene regnes ut lokalt i nettleseren din.",
  },
  {
    q: "Er refinansiering alltid lurt?",
    a: "Ikke nødvendigvis. Refinansiering er ett mulig verktøy etter at du har skaffet oversikt. Lavere månedsbeløp kan bety høyere total kostnad over tid. Sammenlign alltid vilkår og total kostnad.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: SITE.url,
            name: "Lånekompass.no",
            description: SITE.description,
          }),
          faqSchema(FAQ),
        ]}
      />

      {/* Hero — stor, premium, to kolonner */}
      <section className="hero-soft border-b border-line/60">
        <span aria-hidden className="hero-blob hero-blob--blue" />
        <span aria-hidden className="hero-blob hero-blob--green" />
        <span aria-hidden className="hero-blob hero-blob--warm" />

        <div className="wide-container relative py-16 sm:py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Venstre kolonne */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green-soft/60 px-4 py-2 text-sm font-medium text-green mb-7">
                <ShieldCheck aria-hidden className="h-4 w-4" />
                Start med oversikt – ikke et nytt lån
              </span>
              <h1 className="font-hero text-5xl sm:text-6xl lg:text-7xl text-ink text-balance">
                Få oversikt over dyr gjeld før du vurderer neste steg.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-xl">
                Lånekompass.no hjelper deg å sortere inntekt, faste utgifter,
                kredittkort, smålån og gebyrer — med enkle arbeidsark,
                kalkulatorer og offentlige kilder. Ingen søknad. Ingen mas. Bare
                oversikt først.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/rydd-okonomien" className="btn-primary btn-lg">
                  Rydd økonomien på 7 steg
                  <ArrowRight aria-hidden className="h-5 w-5" />
                </Link>
                <Link href="/verktoy" className="btn-ghost btn-lg">
                  Last ned gratis A4-ark
                </Link>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm sm:text-base text-ink/90">
                {TRUST_POINTS.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-soft text-green"
                    >
                      <Check className="h-4 w-4" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Høyre kolonne — Startpakken (hovedvisual) */}
            <div>
              <div className="card-lift p-5 sm:p-6">
                <div className="paper-inset p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-display text-ink">
                        Startpakken
                      </h2>
                      <p className="text-sm sm:text-base text-muted mt-1">
                        Print, fyll ut, skann videre
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface border border-line text-accent shadow-sm"
                    >
                      <QrCode className="h-8 w-8" />
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {STARTPACK.map((it) => (
                      <li key={it.title}>
                        <Link
                          href={it.href}
                          className="group flex items-center justify-between gap-3 rounded-2xl bg-surface border border-line px-5 py-4 shadow-sm transition-colors hover:border-accent hover:bg-accent-soft/40"
                        >
                          <span className="min-w-0">
                            <span className="block font-semibold text-ink text-lg">
                              {it.title}
                            </span>
                            <span className="block text-sm text-muted mt-0.5">
                              {it.hint}
                            </span>
                          </span>
                          <ArrowRight
                            aria-hidden
                            className="h-5 w-5 shrink-0 text-line transition-colors group-hover:text-accent"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Gul varselboks */}
                  <div className="mt-6 rounded-2xl bg-warn-soft border border-warn/30 px-5 py-5 flex gap-3.5">
                    <AlertTriangle
                      aria-hidden
                      className="h-6 w-6 mt-0.5 shrink-0 text-warn"
                    />
                    <div>
                      <p className="font-semibold text-ink">
                        Lavere månedsbeløp er ikke alltid billigere.
                      </p>
                      <p className="mt-1.5 text-sm text-ink/80 leading-relaxed">
                        Sammenlign alltid total kostnad, effektiv rente, gebyrer
                        og løpetid før du vurderer refinansiering.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/rydd-okonomien"
                    className="btn-primary w-full justify-center mt-6"
                  >
                    Start her
                    <ArrowRight aria-hidden className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rydd økonomien på 7 steg */}
      <section className="wide-container py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-green mb-3">
              Hovedflyt
            </p>
            <h2 className="font-hero text-4xl sm:text-5xl text-ink">
              Rydd økonomien på 7 steg
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">
              En rolig, konkret prosess som forklarer hva du skal gjøre, hvor du
              finner tallene og hva neste steg kan være.
            </p>
          </div>
          <Link
            href="/rydd-okonomien"
            className="btn-ghost shrink-0 self-start lg:self-auto"
          >
            Se hele opplegget
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <article key={s.no} className="card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold text-2xl text-accent tracking-display">
                  {s.no}
                </span>
                <span className="inline-flex items-center rounded-full bg-green-soft px-3 py-1 text-xs font-semibold text-green">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-ink leading-snug tracking-display">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Lån forklart enkelt */}
      <section className="wide-container pb-4 sm:pb-8">
        <div className="max-w-2xl mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-green mb-3">
            Lån forklart enkelt
          </p>
          <h2 className="font-hero text-4xl sm:text-5xl text-ink">
            Vanskelige ord, forklart på vanlig norsk
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Renter, gebyrer, effektiv rente og refinansiering trenger ikke være
            vanskelig. Vi forklarer det i klartekst — uten finansprat.
          </p>
        </div>

        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TERMS.map((t) => (
            <div key={t.term} className="card p-6">
              <dt className="font-display font-bold text-lg text-ink tracking-display">
                {t.term}
              </dt>
              <dd className="mt-2 text-sm text-muted leading-relaxed">
                {t.body}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/hvor-finner-du-tallene"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
          >
            Se hvor du finner tallene i din egen økonomi
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <Link
            href="/unngaa-lan"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
          >
            Slik kan du unngå å låne
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Arbeidsark og kalkulatorer */}
      <section className="bg-surface/60 border-y border-line/60">
        <div className="wide-container py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-green mb-3">
                Arbeidsark og kalkulatorer
              </p>
              <h2 className="font-hero text-4xl sm:text-5xl text-ink text-balance">
                Papir når du vil tenke. Digitalt når du vil regne.
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Bruk det som passer deg. Arbeidsarkene kan printes, kalkulatorene
                regner i nettleseren — uten å lagre noe om deg.
              </p>
            </div>

            <div className="lg:col-span-8 grid gap-5 sm:grid-cols-3">
              {TOOLS.map((t) => {
                const Icon = t.icon;
                return (
                  <article key={t.title} className="card p-6 flex flex-col">
                    <span
                      aria-hidden
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent mb-4"
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display font-bold text-lg text-ink tracking-display leading-snug">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                      {t.body}
                    </p>
                    <Link
                      href={t.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
                    >
                      {t.cta}
                      <ArrowRight aria-hidden className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mikro-UX + offentlige kilder */}
      <section className="wide-container py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
          {/* Hvor finner du dette? */}
          <div className="card p-7 sm:p-9">
            <span
              aria-hidden
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-soft text-green mb-4"
            >
              <Search className="h-6 w-6" />
            </span>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-green mb-2">
              Mikro-UX
            </p>
            <h2 className="font-hero text-3xl sm:text-4xl text-ink">
              Hvor finner du dette?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Hver kalkulator og PDF forklarer nøyaktig hvor du finner tallene.
              Det er forskjellen på en side folk leser — og en side folk faktisk
              får brukt.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {FINDOUT.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-warm-soft/60 border border-warm/15 px-5 py-4"
                >
                  <p className="font-semibold text-ink">{f.title}</p>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/hvor-finner-du-tallene"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
              Se hele oversikten
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>

          {/* Alltid offentlige kilder */}
          <div className="rounded-3xl bg-accent text-white p-7 sm:p-9 flex flex-col">
            <span
              aria-hidden
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white mb-4"
            >
              <ShieldCheck className="h-6 w-6" />
            </span>
            <h2 className="font-hero text-3xl sm:text-4xl text-white">
              Alltid offentlige kilder
            </h2>
            <p className="mt-4 text-white/85 leading-relaxed max-w-md">
              Alle sider om lån, kreditt, refinansiering og betalingsproblemer
              har en kildeboks nederst. Det bygger tillit og holder innholdet
              nøkternt — du kan selv etterprøve det vi skriver.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {SOURCE_CHIPS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium text-white"
                >
                  <ShieldCheck aria-hidden className="h-4 w-4 text-white/70" />
                  {c}
                </span>
              ))}
            </div>

            <Link
              href="/kilder"
              className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline underline-offset-4"
            >
              Se kildesiden
              <ExternalLink aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
