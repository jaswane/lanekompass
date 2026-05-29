"use client";

import { Printer } from "lucide-react";

/**
 * Skriv ut-knapp for A4-arkene. Skjules ved selve utskriften (.no-print).
 */
export function PrintButton({ label = "Skriv ut arket" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-primary no-print"
    >
      <Printer aria-hidden className="h-4 w-4" />
      {label}
    </button>
  );
}
