import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9faf9" },
    { media: "(prefers-color-scheme: dark)", color: "#f9faf9" },
  ],
};

export const metadata: Metadata = {
  title: "GS3 — Un parceiro del productor",
  description: "Soluciones financieras con los valores del campo. Crédito y financiamiento para cada etapa del ciclo productivo.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PY">
      <body className="antialiased">{children}</body>
    </html>
  );
}
