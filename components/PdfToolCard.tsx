import Link from "next/link";
import { FileText, QrCode, ArrowRight } from "lucide-react";

/**
 * Kort for et gratis arbeidsark/PDF. QR-koden er en plassholder med intern
 * lenke til riktig side (PDF-ene lages senere).
 */
export function PdfToolCard({
  title,
  description,
  href,
  cta = "Gå til verktøyet",
}: {
  title: string;
  description: string;
  href: string;
  cta?: string;
}) {
  return (
    <article className="card p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span
            aria-hidden
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-warm-soft text-warm mb-3"
          >
            <FileText className="h-5 w-5" />
          </span>
          <h3 className="font-display text-lg text-ink tracking-display">
            {title}
          </h3>
          <p className="mt-1.5 text-sm text-muted leading-relaxed">
            {description}
          </p>
        </div>

        <div
          className="shrink-0 flex flex-col items-center gap-1"
          aria-label="QR-kode kommer"
        >
          <span
            aria-hidden
            className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-dashed border-line bg-bg text-muted"
          >
            <QrCode className="h-7 w-7" />
          </span>
          <span className="text-[0.62rem] uppercase tracking-wide text-muted">
            QR kommer
          </span>
        </div>
      </div>

      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
      >
        {cta}
        <ArrowRight aria-hidden className="h-4 w-4" />
      </Link>
    </article>
  );
}
