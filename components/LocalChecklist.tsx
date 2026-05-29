"use client";

import { useCallback, useSyncExternalStore } from "react";
import { CheckCircle2, Circle, LifeBuoy, Phone, RotateCcw } from "lucide-react";

export interface ChecklistItem {
  id: string;
  label: string;
}

export interface ResultTier {
  /** Laveste antall avkryssede svar for at denne tilbakemeldingen vises. */
  minChecked: number;
  tone: "calm" | "attention" | "serious";
  title: string;
  body: string;
  /** Vis NAV økonomi- og gjeldsveiledning tydelig. */
  showNav?: boolean;
}

type Checked = Record<string, boolean>;

const EVENT = "lk-localchecklist";

function readRaw(storageKey: string): string {
  if (typeof window === "undefined") return "{}";
  try {
    return window.localStorage.getItem(storageKey) ?? "{}";
  } catch {
    return "{}";
  }
}

const toneStyles: Record<
  ResultTier["tone"],
  { wrap: string; icon: string }
> = {
  calm: {
    wrap: "border-accent-soft bg-accent-soft/40",
    icon: "text-accent",
  },
  attention: {
    wrap: "border-warm/40 bg-warm-soft/60",
    icon: "text-warm",
  },
  serious: {
    wrap: "border-caution/40 bg-caution-soft/70",
    icon: "text-caution",
  },
};

export function LocalChecklist({
  storageKey,
  items,
  tiers,
}: {
  storageKey: string;
  items: ChecklistItem[];
  tiers: ResultTier[];
}) {
  const subscribe = useCallback((onChange: () => void) => {
    const handler = () => onChange();
    window.addEventListener(EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const getSnapshot = useCallback(
    () => readRaw(storageKey),
    [storageKey]
  );
  const getServerSnapshot = useCallback(() => "{}", []);

  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  let checked: Checked = {};
  try {
    checked = JSON.parse(raw) as Checked;
  } catch {
    checked = {};
  }

  const checkedCount = items.filter((it) => checked[it.id]).length;

  const setChecked = (next: Checked) => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      /* ignorer (privat modus e.l.) */
    }
    window.dispatchEvent(new Event(EVENT));
  };

  const toggle = (id: string) => {
    setChecked({ ...checked, [id]: !checked[id] });
  };

  const reset = () => setChecked({});

  // Finn riktig tilbakemelding: høyeste tier hvis terskel er nådd.
  const tier =
    [...tiers]
      .sort((a, b) => b.minChecked - a.minChecked)
      .find((t) => checkedCount >= t.minChecked) ?? tiers[0];

  const hasAny = checkedCount > 0;
  const style = toneStyles[tier.tone];

  return (
    <div className="space-y-6">
      <ul className="card divide-y divide-line/70">
        {items.map((it) => {
          const isOn = !!checked[it.id];
          return (
            <li key={it.id}>
              <button
                type="button"
                onClick={() => toggle(it.id)}
                aria-pressed={isOn}
                className="w-full flex items-start gap-3 px-4 py-3.5 text-left hover:bg-accent-soft/30 transition-colors"
              >
                {isOn ? (
                  <CheckCircle2
                    aria-hidden
                    className="h-5 w-5 mt-0.5 shrink-0 text-accent"
                  />
                ) : (
                  <Circle
                    aria-hidden
                    className="h-5 w-5 mt-0.5 shrink-0 text-muted/60"
                  />
                )}
                <span className="text-ink/90">{it.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="text-muted">
          {checkedCount} av {items.length} kjenner du deg igjen i.
        </p>
        {hasAny && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-muted hover:text-accent"
          >
            <RotateCcw aria-hidden className="h-4 w-4" />
            Nullstill
          </button>
        )}
      </div>

      {hasAny && (
        <section
          aria-live="polite"
          className={`rounded-2xl border px-5 py-5 ${style.wrap}`}
        >
          <h2 className="flex items-center gap-2 font-display text-xl text-ink tracking-display">
            <LifeBuoy aria-hidden className={`h-5 w-5 ${style.icon}`} />
            {tier.title}
          </h2>
          <p className="mt-2 text-ink/90 leading-relaxed">{tier.body}</p>

          {tier.showNav && (
            <a
              href="https://www.nav.no/okonomi-gjeld"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-surface border border-caution/40 px-4 py-3 text-sm text-ink hover:border-caution"
            >
              <Phone aria-hidden className="h-4 w-4 text-caution" />
              <span>
                <strong className="font-semibold">
                  NAV økonomi- og gjeldsrådgivning
                </strong>{" "}
                — gratis og uforpliktende. Telefon 55 55 33 39.
              </span>
            </a>
          )}
        </section>
      )}

      <p className="text-xs text-muted">
        Svarene dine lagres kun i denne nettleseren (localStorage) og sendes
        aldri til Lånekompass.no.
      </p>
    </div>
  );
}
