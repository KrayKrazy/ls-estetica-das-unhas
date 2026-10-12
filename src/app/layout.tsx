import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ls Estética das Unhas | Alongamento, Esmaltação em Gel & Nail Art em Águas Lindas",
  description: "Especialista em estética e saúde das unhas em Águas Lindas de Goiás. Alongamento em gel, fibra de vidro, blindagem, banho de gel e nail design de alto padrão.",
  keywords: ["estética das unhas", "unhas em gel", "nail designer aguas lindas", "alongamento de unhas", "banho de gel", "esmaltação em gel", "ls estética das unhas"],
  openGraph: {
    title: "Ls Estética das Unhas - Elegância & Alta Precisão",
    description: "Alongamento em gel, fibra de vidro, banho de gel e nail art personalizada. Pérola 2, Águas Lindas de Goiás.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#0d080a] text-[#fcf8f9] selection:bg-[#c9828f] selection:text-white">
        {children}
      </body>
    </html>
  );
}
