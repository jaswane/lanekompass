"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { href: "/rydd-okonomien", label: "Rydd økonomien" },
  { href: "/kalkulator/gjeldsoversikt", label: "Kalkulatorer" },
  { href: "/verktoy", label: "Arbeidsark" },
  { href: "/kilder", label: "Kilder" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-line/70 bg-bg/85 backdrop-blur">
      <div className="wide-container flex items-center justify-between gap-4 py-4 sm:py-5">
        <Link
          href="/"
          aria-label="Lånekompass.no — til forsiden"
          className="flex items-center gap-3"
        >
          <span
            aria-hidden
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white shadow-md"
          >
            <Compass className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-bold text-xl sm:text-2xl tracking-display text-ink">
              Lånekompass<span className="text-accent">.no</span>
            </span>
            <span className="hidden sm:block text-[0.74rem] font-medium tracking-[0.02em] text-muted">
              Oversikt først. Lån senere.
            </span>
          </span>
        </Link>

        <nav
          aria-label="Hovedmeny"
          className="hidden lg:flex items-center gap-1 text-sm"
        >
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg font-medium transition-colors hover:bg-accent-soft/60 ${
                  active ? "text-accent" : "text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Link href="/rydd-okonomien" className="btn-primary">
              Start med oversikt
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobilmeny"
          className="lg:hidden border-t border-line bg-surface"
        >
          <ul className="wide-container py-3 flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-2 rounded-lg text-ink hover:bg-accent-soft/60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/rydd-okonomien"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Start med oversikt
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
