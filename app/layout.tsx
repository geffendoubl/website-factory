import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
