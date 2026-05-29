// Genererer statiske QR-koder som SVG til public/qr/
// Brukes for print/A4 — kjøres manuelt med `npm run qr` ved behov.
// Ingen ekstern QR-tjeneste; bygges lokalt med qrcode-pakken.

import QRCode from "qrcode";
import { writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", "public", "qr");

// URL-ene bruker punycode-form for å være portable for QR-skannere.
const items = [
  { slug: "tall", url: "https://xn--lnekompass-15a.no/tall" },
  { slug: "gjeld", url: "https://xn--lnekompass-15a.no/gjeld" },
  { slug: "start", url: "https://xn--lnekompass-15a.no/start" },
];

await mkdir(outDir, { recursive: true });

for (const { slug, url } of items) {
  const svg = await QRCode.toString(url, {
    type: "svg",
    // Høy feilkorreksjon — robust mot trykkfeil og krøllete A4.
    errorCorrectionLevel: "H",
    // 4 modulers "quiet zone" rundt koden (anbefalt for skanning).
    margin: 4,
    // Sort QR på hvit bakgrunn for høyest kontrast på print.
    color: { dark: "#000000", light: "#FFFFFF" },
  });
  const file = resolve(outDir, `qr-${slug}.svg`);
  await writeFile(file, svg, "utf8");
  console.log(`OK  ${file}  <-  ${url}`);
}
