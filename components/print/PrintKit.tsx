import { Compass, QrCode } from "lucide-react";

/**
 * Print-kit for A4-arbeidsark. Alt er rene server-komponenter.
 * Designet for lavt blekkforbruk: hvit flate, tynne linjer, ingen fyll.
 */

export function PrintSheet({
  title,
  intro,
  shortLink,
  sourcesNote,
  children,
}: {
  title: string;
  intro?: string;
  /** Kortlenke som vises ved QR-boksen, f.eks. "lanekompass.no/gjeld". */
  shortLink: string;
  /** Kort kilde-/hjelpetekst nederst. */
  sourcesNote: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="print-sheet rounded-2xl border border-line shadow-card p-8 sm:p-10">
      {/* Topp: diskret logo + tittel */}
      <div className="flex items-center justify-between gap-4 border-b border-ink/15 pb-4">
        <div className="flex items-center gap-2 text-ink/70">
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-ink/20"
          >
            <Compass className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Lånekompass.no
          </span>
        </div>
        <span className="text-xs text-ink/50">Arbeidsark · A4</span>
      </div>

      {/* Tittel */}
      <header className="pt-6">
        <h1 className="font-display font-bold text-3xl tracking-display text-ink">
          {title}
        </h1>
        {intro && (
          <p className="mt-2 text-sm text-ink/70 leading-relaxed max-w-2xl">
            {intro}
          </p>
        )}
      </header>

      {/* Innhold */}
      <div className="pt-5 space-y-5">{children}</div>

      {/* Bunn: personvern + QR + kilder */}
      <footer className="mt-6 border-t border-ink/15 pt-4">
        <div className="flex flex-col sm:flex-row gap-5 sm:items-start sm:justify-between">
          <div className="text-xs text-ink/70 leading-relaxed max-w-md space-y-2">
            <p className="font-medium text-ink/80">
              Dette arket fylles ut av deg. Lånekompass.no mottar eller lagrer
              ikke informasjonen.
            </p>
            <p>{sourcesNote}</p>
          </div>

          <QrBox shortLink={shortLink} />
        </div>
      </footer>
    </div>
  );
}

/** QR-boks med kortlenke. Selve QR-bildet settes inn ved PDF-eksport. */
export function QrBox({ shortLink }: { shortLink: string }) {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <span
        aria-hidden
        className="inline-flex h-20 w-20 items-center justify-center rounded-lg border-2 border-ink/25 text-ink/40"
      >
        <QrCode className="h-12 w-12" />
      </span>
      <div className="text-xs text-ink/70 leading-tight">
        <p className="font-semibold text-ink">Mer hjelp:</p>
        <p className="mt-0.5">Skann eller skriv inn</p>
        <p className="mt-0.5 font-mono text-sm text-ink">{shortLink}</p>
      </div>
    </div>
  );
}

/** Seksjonsblokk med overskrift. */
export function PrintSection({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="break-inside-avoid">
      <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-1.5 mb-3">
        <h2 className="font-display font-bold text-lg tracking-display text-ink">
          {title}
        </h2>
        {hint && <span className="text-xs text-ink/55">{hint}</span>}
      </div>
      {children}
    </section>
  );
}

/** Rad med etikett til venstre og skrivelinje til høyre. */
export function PrintLineField({
  label,
  suffix,
}: {
  label: string;
  suffix?: string;
}) {
  return (
    <div className="flex items-end gap-3 py-1.5">
      <span className="text-sm text-ink/80 shrink-0 min-w-[8.5rem]">
        {label}
      </span>
      <span className="write-line flex-1" aria-hidden />
      {suffix && <span className="text-sm text-ink/50 shrink-0">{suffix}</span>}
    </div>
  );
}

/** Avkrysningspunkt med tekst og valgfri skrivelinje. */
export function PrintCheckItem({
  children,
  withLine = false,
}: {
  children: React.ReactNode;
  withLine?: boolean;
}) {
  return (
    <div className="flex items-start gap-2.5 py-1">
      <span className="check-box mt-0.5" aria-hidden />
      <div className="flex-1 min-w-0">
        <span className="text-sm text-ink/85 leading-snug">{children}</span>
        {withLine && <span className="write-line block mt-2" aria-hidden />}
      </div>
    </div>
  );
}

/** "Hvor finner du tallene?"-hjelpeboks (tynn ramme, ikke fylt). */
export function PrintHelpBox({
  title = "Hvor finner du tallene?",
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-ink/20 px-4 py-3 break-inside-avoid">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink/70 mb-1.5">
        {title}
      </p>
      <ul className="text-xs text-ink/75 leading-relaxed space-y-1">
        {items.map((it, i) => (
          <li key={i} className="flex gap-1.5">
            <span aria-hidden>·</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
