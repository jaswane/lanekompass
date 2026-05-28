"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { parseNorwegianNumber, formatKr } from "@/lib/format";

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
    <div className="space-y-6">
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
    </div>
  );
}
