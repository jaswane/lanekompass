"use client";

import { useState } from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";
import {
  parseNorwegianNumber,
  formatKr,
  monthlyPayment,
} from "@/lib/format";

function num(s: string): number {
  const n = parseNorwegianNumber(s);
  return Number.isFinite(n) ? n : 0;
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder = "0",
  suffix,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  suffix?: string;
}) {
  return (
    <div className="min-w-0">
      <label className="field-label" htmlFor={id}>
        {label}
        {suffix ? ` (${suffix})` : ""}
      </label>
      <input
        id={id}
        className="field tabular"
        type="text"
        inputMode="decimal"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function RefinanceCalculator() {
  // Dagens situasjon
  const [dagensGjeld, setDagensGjeld] = useState("");
  const [dagensManedlig, setDagensManedlig] = useState("");
  const [dagensMaaneder, setDagensMaaneder] = useState("");

  // Nytt refinansieringslån
  const [nyttBelop, setNyttBelop] = useState("");
  const [nyRente, setNyRente] = useState("");
  const [etablering, setEtablering] = useState("");
  const [termingebyr, setTermingebyr] = useState("");
  const [nyMaaneder, setNyMaaneder] = useState("");

  // Dagens
  const dManedlig = num(dagensManedlig);
  const dMaaneder = num(dagensMaaneder);
  const dagensTotal = dManedlig * dMaaneder;

  // Nytt lån
  const belop = num(nyttBelop) || num(dagensGjeld);
  const rente = num(nyRente);
  const nMaaneder = num(nyMaaneder);
  const termin = num(termingebyr);
  const etabl = num(etablering);

  const nyAnnuitet = monthlyPayment(belop, rente, nMaaneder);
  const nyManedligTotal = Number.isFinite(nyAnnuitet)
    ? nyAnnuitet + termin
    : NaN;
  const nyTotal = Number.isFinite(nyManedligTotal)
    ? nyManedligTotal * nMaaneder + etabl
    : NaN;

  const harDagens = dManedlig > 0 && dMaaneder > 0;
  const harNytt = belop > 0 && nMaaneder > 0 && Number.isFinite(nyTotal);

  const lavereManedlig =
    harDagens && harNytt && nyManedligTotal < dManedlig;
  const hoyereTotal = harDagens && harNytt && nyTotal > dagensTotal;
  const fellen = lavereManedlig && hoyereTotal;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <fieldset className="card p-5">
          <legend className="font-display text-lg text-ink tracking-display mb-4">
            Dagens gjeld
          </legend>
          <div className="space-y-4">
            <Field
              id="dagens-gjeld"
              label="Samlet restgjeld i dag"
              suffix="kr"
              value={dagensGjeld}
              onChange={setDagensGjeld}
            />
            <Field
              id="dagens-manedlig"
              label="Det du betaler per måned i dag"
              suffix="kr"
              value={dagensManedlig}
              onChange={setDagensManedlig}
            />
            <Field
              id="dagens-maaneder"
              label="Måneder igjen før alt er nedbetalt"
              suffix="mnd"
              value={dagensMaaneder}
              onChange={setDagensMaaneder}
            />
          </div>
        </fieldset>

        <fieldset className="card p-5">
          <legend className="font-display text-lg text-ink tracking-display mb-4">
            Mulig refinansieringslån
          </legend>
          <div className="space-y-4">
            <Field
              id="nytt-belop"
              label="Lånebeløp"
              suffix="kr"
              placeholder={
                num(dagensGjeld) > 0 ? String(num(dagensGjeld)) : "0"
              }
              value={nyttBelop}
              onChange={setNyttBelop}
            />
            <Field
              id="ny-rente"
              label="Nominell rente"
              suffix="%"
              value={nyRente}
              onChange={setNyRente}
            />
            <Field
              id="ny-maaneder"
              label="Løpetid"
              suffix="mnd"
              value={nyMaaneder}
              onChange={setNyMaaneder}
            />
            <div className="grid grid-cols-2 gap-4">
              <Field
                id="etablering"
                label="Etableringsgebyr"
                suffix="kr"
                value={etablering}
                onChange={setEtablering}
              />
              <Field
                id="termingebyr"
                label="Termingebyr"
                suffix="kr/mnd"
                value={termingebyr}
                onChange={setTermingebyr}
              />
            </div>
          </div>
        </fieldset>
      </div>

      {(harDagens || harNytt) && (
        <div className="card p-5 sm:p-6 bg-accent-soft/30 border-accent-soft">
          <h2 className="font-display text-xl text-ink tracking-display mb-4">
            Sammenligning
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm tabular">
              <thead>
                <tr className="text-left text-muted">
                  <th className="font-medium py-2 pr-4">&nbsp;</th>
                  <th className="font-medium py-2 px-4">Per måned</th>
                  <th className="font-medium py-2 pl-4">Total kostnad</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                <tr className="border-t border-line/70">
                  <th scope="row" className="font-medium py-3 pr-4 text-left">
                    Dagens gjeld
                  </th>
                  <td className="py-3 px-4">
                    {harDagens ? formatKr(dManedlig) : "–"}
                  </td>
                  <td className="py-3 pl-4">
                    {harDagens ? formatKr(dagensTotal) : "–"}
                  </td>
                </tr>
                <tr className="border-t border-line/70">
                  <th scope="row" className="font-medium py-3 pr-4 text-left">
                    Refinansieringslån
                  </th>
                  <td className="py-3 px-4">
                    {harNytt ? formatKr(nyManedligTotal) : "–"}
                  </td>
                  <td className="py-3 pl-4">
                    {harNytt ? formatKr(nyTotal) : "–"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {harNytt && (
            <p className="mt-4 text-sm text-muted">
              Av total kostnad på {formatKr(nyTotal)} er omtrent{" "}
              <strong className="text-ink">
                {formatKr(Math.max(nyTotal - belop, 0))}
              </strong>{" "}
              renter og gebyrer.
            </p>
          )}
        </div>
      )}

      {fellen && (
        <div className="rounded-2xl border border-caution/40 bg-caution-soft/70 px-5 py-5 flex gap-3">
          <AlertTriangle
            aria-hidden
            className="h-5 w-5 mt-0.5 shrink-0 text-caution"
          />
          <div className="text-sm text-ink/90 leading-relaxed">
            <p className="font-semibold text-ink">
              Lavere månedsbeløp — men høyere total kostnad
            </p>
            <p className="mt-1">
              Et lavere beløp per måned kan se lettere ut, men her betaler du{" "}
              <strong>{formatKr(nyTotal - dagensTotal)}</strong> mer totalt
              fordi løpetiden er lengre. Lengre nedbetaling gir mer renter over
              tid. Vurder hva som er viktigst for deg, og sammenlign alltid
              total kostnad — ikke bare månedsbeløpet.
            </p>
          </div>
        </div>
      )}

      <div className="rounded-2xl border border-line bg-surface px-5 py-4 text-sm text-muted leading-relaxed">
        <p className="flex items-start gap-2">
          <ArrowRight aria-hidden className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
          <span>
            Dette er en veiledende sammenligning. Refinansiering er ett mulig
            verktøy blant flere. Sjekk alltid de faktiske vilkårene, effektiv
            rente og gebyrer hos den enkelte tilbyderen før du vurderer noe.
          </span>
        </p>
      </div>
    </div>
  );
}
