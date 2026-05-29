"use client";

import { useState } from "react";
import { Plus, Trash2, Printer, Compass } from "lucide-react";
import { parseNorwegianNumber, formatKr } from "@/lib/format";

function formatNumberCell(raw: string): string {
  if (!raw) return "";
  const n = parseNorwegianNumber(raw);
  return Number.isFinite(n) ? formatKr(n) : "";
}

interface DebtRow {
  id: string;
  navn: string;
  type: string;
  restbelop: string;
  nominellRente: string;
  effektivRente: string;
  manedligBetaling: string;
  gebyrer: string;
  forfall: string;
}

const DEBT_TYPES = [
  "Kredittkort",
  "Forbrukslån",
  "Smålån",
  "Billån",
  "Studielån",
  "Boliglån",
  "Inkasso",
  "Annet",
];

function emptyRow(): DebtRow {
  return {
    id: Math.random().toString(36).slice(2),
    navn: "",
    type: "Kredittkort",
    restbelop: "",
    nominellRente: "",
    effektivRente: "",
    manedligBetaling: "",
    gebyrer: "",
    forfall: "",
  };
}

export function DebtOverview() {
  const [rows, setRows] = useState<DebtRow[]>([emptyRow()]);
  const [printDate, setPrintDate] = useState<string | null>(null);

  const handlePrint = () => {
    setPrintDate(
      new Date().toLocaleDateString("nb-NO", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
    // La React rerendere med datoen før vi åpner print-dialogen
    setTimeout(() => window.print(), 50);
  };

  const update = (id: string, field: keyof DebtRow, value: string) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const addRow = () => setRows((prev) => [...prev, emptyRow()]);
  const removeRow = (id: string) =>
    setRows((prev) =>
      prev.length > 1 ? prev.filter((r) => r.id !== id) : prev
    );

  const sum = (field: keyof DebtRow) =>
    rows.reduce((acc, r) => {
      const n = parseNorwegianNumber(r[field] as string);
      return acc + (Number.isFinite(n) ? n : 0);
    }, 0);

  const totalGjeld = sum("restbelop");
  const totalManedlig = sum("manedligBetaling") + sum("gebyrer");

  return (
    <>
    <div className="no-print space-y-6">
      <div className="space-y-5">
        {rows.map((row, i) => (
          <fieldset key={row.id} className="card p-4 sm:p-5">
            <div className="flex items-center justify-between mb-4">
              <legend className="font-display text-lg text-ink tracking-display">
                Gjeldspost {i + 1}
              </legend>
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                disabled={rows.length === 1}
                className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-caution disabled:opacity-40 disabled:hover:text-muted"
                aria-label={`Fjern gjeldspost ${i + 1}`}
              >
                <Trash2 aria-hidden className="h-4 w-4" />
                Fjern
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="min-w-0">
                <label className="field-label" htmlFor={`navn-${row.id}`}>
                  Navn på gjeld / kreditor
                </label>
                <input
                  id={`navn-${row.id}`}
                  className="field"
                  type="text"
                  inputMode="text"
                  placeholder="F.eks. Bank Norwegian"
                  value={row.navn}
                  onChange={(e) => update(row.id, "navn", e.target.value)}
                />
              </div>

              <div className="min-w-0">
                <label className="field-label" htmlFor={`type-${row.id}`}>
                  Type gjeld
                </label>
                <select
                  id={`type-${row.id}`}
                  className="field"
                  value={row.type}
                  onChange={(e) => update(row.id, "type", e.target.value)}
                >
                  {DEBT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="min-w-0">
                <label className="field-label" htmlFor={`rest-${row.id}`}>
                  Restbeløp (kr)
                </label>
                <input
                  id={`rest-${row.id}`}
                  className="field tabular"
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  value={row.restbelop}
                  onChange={(e) => update(row.id, "restbelop", e.target.value)}
                />
              </div>

              <div className="min-w-0">
                <label className="field-label" htmlFor={`man-${row.id}`}>
                  Månedlig betaling (kr)
                </label>
                <input
                  id={`man-${row.id}`}
                  className="field tabular"
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  value={row.manedligBetaling}
                  onChange={(e) =>
                    update(row.id, "manedligBetaling", e.target.value)
                  }
                />
              </div>

              <div className="min-w-0">
                <label className="field-label" htmlFor={`nom-${row.id}`}>
                  Nominell rente (%)
                </label>
                <input
                  id={`nom-${row.id}`}
                  className="field tabular"
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  value={row.nominellRente}
                  onChange={(e) =>
                    update(row.id, "nominellRente", e.target.value)
                  }
                />
              </div>

              <div className="min-w-0">
                <label className="field-label" htmlFor={`eff-${row.id}`}>
                  Effektiv rente (%)
                </label>
                <input
                  id={`eff-${row.id}`}
                  className="field tabular"
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  value={row.effektivRente}
                  onChange={(e) =>
                    update(row.id, "effektivRente", e.target.value)
                  }
                />
              </div>

              <div className="min-w-0">
                <label className="field-label" htmlFor={`geb-${row.id}`}>
                  Gebyrer per måned (kr)
                </label>
                <input
                  id={`geb-${row.id}`}
                  className="field tabular"
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  value={row.gebyrer}
                  onChange={(e) => update(row.id, "gebyrer", e.target.value)}
                />
              </div>

              <div className="min-w-0">
                <label className="field-label" htmlFor={`forf-${row.id}`}>
                  Forfallsdato
                </label>
                <input
                  id={`forf-${row.id}`}
                  className="field"
                  type="date"
                  value={row.forfall}
                  onChange={(e) => update(row.id, "forfall", e.target.value)}
                />
              </div>
            </div>
          </fieldset>
        ))}
      </div>

      <button
        type="button"
        onClick={addRow}
        className="btn-ghost w-full justify-center"
      >
        <Plus aria-hidden className="h-4 w-4" />
        Legg til en gjeldspost
      </button>

      <div className="card p-5 sm:p-6 bg-accent-soft/30 border-accent-soft">
        <h2 className="font-display text-xl text-ink tracking-display mb-4">
          Din samlede oversikt
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="field-label">Samlet gjeld</p>
            <p className="big-number text-accent tabular">
              {formatKr(totalGjeld)}
            </p>
          </div>
          <div>
            <p className="field-label">Samlet per måned (inkl. gebyrer)</p>
            <p className="big-number text-ink tabular">
              {formatKr(totalManedlig)}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handlePrint}
        className="btn-primary w-full justify-center"
      >
        <Printer aria-hidden className="h-4 w-4" />
        Skriv ut / lagre som PDF
      </button>

      <p className="text-xs text-muted text-center">
        Print eller lagre som PDF rett fra nettleseren. Tallene sendes ingen
        steder.
      </p>
    </div>

    {/* Print-only: ryddig gjeldsrapport som vises kun ved utskrift */}
    <div className="print-only">
      <div className="print-sheet rounded-2xl border border-line shadow-card p-8 sm:p-10">
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
          <span className="text-xs text-ink/60">
            {printDate ? `Dato: ${printDate}` : "Gjeldsrapport"}
          </span>
        </div>

        <header className="pt-5">
          <h2 className="font-display font-bold text-3xl tracking-display text-ink">
            Min gjeldsoversikt
          </h2>
        </header>

        <table className="w-full border-collapse text-sm mt-5">
          <thead>
            <tr>
              <th className="border border-ink/25 px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-wide text-ink/70">
                Kreditor
              </th>
              <th className="border border-ink/25 px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-wide text-ink/70">
                Type
              </th>
              <th className="border border-ink/25 px-2 py-1.5 text-right text-xs font-semibold uppercase tracking-wide text-ink/70">
                Restbeløp
              </th>
              <th className="border border-ink/25 px-2 py-1.5 text-right text-xs font-semibold uppercase tracking-wide text-ink/70">
                Eff. rente
              </th>
              <th className="border border-ink/25 px-2 py-1.5 text-right text-xs font-semibold uppercase tracking-wide text-ink/70">
                Pr. måned
              </th>
              <th className="border border-ink/25 px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-wide text-ink/70">
                Forfall
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="border border-ink/20 px-2 py-2">
                  {r.navn || "—"}
                </td>
                <td className="border border-ink/20 px-2 py-2">{r.type}</td>
                <td className="border border-ink/20 px-2 py-2 text-right tabular">
                  {formatNumberCell(r.restbelop)}
                </td>
                <td className="border border-ink/20 px-2 py-2 text-right tabular">
                  {r.effektivRente ? `${r.effektivRente} %` : ""}
                </td>
                <td className="border border-ink/20 px-2 py-2 text-right tabular">
                  {formatNumberCell(r.manedligBetaling)}
                </td>
                <td className="border border-ink/20 px-2 py-2">
                  {r.forfall || ""}
                </td>
              </tr>
            ))}
            <tr>
              <td
                className="border border-ink/25 px-2 py-3 text-sm font-semibold text-ink"
                colSpan={2}
              >
                Sum
              </td>
              <td className="border border-ink/25 px-2 py-3 text-right font-semibold text-ink tabular">
                {formatKr(totalGjeld)}
              </td>
              <td className="border border-ink/25 px-2 py-3" aria-hidden />
              <td className="border border-ink/25 px-2 py-3 text-right font-semibold text-ink tabular">
                {formatKr(totalManedlig)}
              </td>
              <td className="border border-ink/25 px-2 py-3" aria-hidden />
            </tr>
          </tbody>
        </table>

        <p className="text-xs text-ink/55 mt-2">
          «Pr. måned» inkluderer månedlige gebyrer. Type = kredittkort,
          forbrukslån, smålån, billån, inkasso m.m.
        </p>

        <footer className="mt-6 border-t border-ink/15 pt-4 text-xs text-ink/70 leading-relaxed">
          <p className="font-medium text-ink/80">
            Tallene er fylt inn lokalt i nettleseren din. Lånekompass.no mottar
            eller lagrer ikke informasjonen.
          </p>
          <p className="mt-2 font-mono text-sm text-ink">lånekompass.no/gjeld</p>
        </footer>
      </div>
    </div>
    </>
  );
}
