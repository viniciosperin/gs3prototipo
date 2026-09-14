import type { Metadata } from "next";
import "./globals.css";

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
