import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/StructuredData";
import { siteUrl, studio } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

// Inter stands in for Geist (visually near-identical, guaranteed available).
// To use the real Geist, `npm i geist` and import GeistSans from "geist/font/sans".
const geist = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bloom Pilates Studio — Nové Zámky",
    template: "%s · Bloom Pilates Studio",
  },
  description: studio.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: "Bloom Pilates Studio",
    title: "Bloom Pilates Studio — Nové Zámky",
    description: studio.description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom Pilates Studio — Nové Zámky",
    description: studio.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk" className={`${cormorant.variable} ${geist.variable}`}>
      <body className="font-sans">
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
