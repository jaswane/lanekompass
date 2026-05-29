/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Korte, interne redirects ment for QR-koder på trykte A4-ark.
  // 307 (permanent: false) så vi kan repeke dem senere uten cache-problemer.
  // Ingen affiliate eller eksterne mål.
  async redirects() {
    return [
      { source: "/start", destination: "/rydd-okonomien", permanent: false },
      { source: "/tall", destination: "/hvor-finner-du-tallene", permanent: false },
      { source: "/gjeld", destination: "/kalkulator/gjeldsoversikt", permanent: false },
      { source: "/refi", destination: "/kalkulator/refinansiering", permanent: false },
      { source: "/hjelp", destination: "/kilder", permanent: false },
      // Gammel rute beholdt som redirect etter navnebytte 30 → 7 dager.
      {
        source: "/verktoy/30-dagers-ryddeplan-a4",
        destination: "/verktoy/7-dagers-ryddeplan-a4",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
