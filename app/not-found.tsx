import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Siden finnes ikke",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="narrow-container py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
        404
      </p>
      <h1 className="font-display text-3xl sm:text-4xl text-ink tracking-display">
        Vi fant ikke siden
      </h1>
      <p className="mt-4 text-muted leading-relaxed max-w-md mx-auto">
        Siden kan ha flyttet, eller lenken kan være feil. Gå tilbake til
        forsiden, så hjelper vi deg videre.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Til forsiden
        <ArrowRight aria-hidden className="h-4 w-4" />
      </Link>
    </div>
  );
}
