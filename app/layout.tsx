import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Geffen FlexCo – Professionelle Websites für Unternehmen in Wien",
  description:
    "Wir erstellen professionelle Websites für kleine und mittlere Unternehmen in Wien und Österreich. Schnell, persönlich, ohne technischen Aufwand. Ab 690 €.",
  keywords: [
    "Website erstellen Wien",
    "Webdesign Wien",
    "Website für Kleinunternehmen Österreich",
    "professionelle Website",
    "Geffen FlexCo",
  ],
  openGraph: {
    title: "Geffen FlexCo – Professionelle Websites für Unternehmen in Wien",
    description:
      "Wir erstellen professionelle Websites für kleine und mittlere Unternehmen in Wien und Österreich. Schnell, persönlich, ohne technischen Aufwand.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
