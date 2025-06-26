import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Curso Micropigmentação - Mayara Schrodi",
  description:
    "Aprenda a técnica Shadow Line com a especialista Mayara Schrodi. Curso completo de micropigmentação com certificado.",
  keywords: "micropigmentação, shadow line, curso, sobrancelha, Mayara Schrodi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
