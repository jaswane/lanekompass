import Link from "next/link";
import { FileText, Printer } from "lucide-react";

/**
 * Kort for et gratis A4-arbeidsark. Lenker til en printvennlig HTML-side som
 * kan skrives ut nå, og senere lastes ned som PDF.
 */
export function PdfToolCard({
  title,
  description,
  href,
  cta = "Åpne og skriv ut",
}: {
  title: string;
  description: string;
  href: string;
  cta?: string;
}) {
  return (
    <article className="card p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-warm-soft text-warm"
        >
          <FileText className="h-5 w-5" />
        </span>
        <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
          A4 · for utskrift
        </span>
      </div>

      <div className="min-w-0">
        <h3 className="font-display font-bold text-lg text-ink tracking-display">
          {title}
        </h3>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
      >
        <Printer aria-hidden className="h-4 w-4" />
        {cta}
      </Link>
    </article>
  );
}
