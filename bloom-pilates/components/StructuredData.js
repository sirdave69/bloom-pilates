import { studio, siteUrl, img } from "@/lib/site";

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // Schema.org JSON-LD for search engines and AI answer engines.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Sitewide business entity — the core signal for local + GEO discovery.
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "LocalBusiness"],
    "@id": `${siteUrl}/#studio`,
    name: "Bloom Pilates Studio",
    description: studio.description,
    url: siteUrl,
    email: studio.email,
    telephone: studio.phone,
    image: img.hero,
    priceRange: studio.priceRange,
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.streetAddress,
      addressLocality: studio.city,
      postalCode: studio.postalCode,
      addressCountry: studio.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: studio.geo.lat,
      longitude: studio.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    sameAs: [studio.instagram, studio.facebook],
    makesOffer: [
      { "@type": "Offer", name: "Jednorázová skupinová lekcia (Reformer / Barre)", price: "18", priceCurrency: "EUR" },
      { "@type": "Offer", name: "10-Lekciový Pack", price: "160", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Individuálny tréning", price: "45", priceCurrency: "EUR" },
    ],
  };
  return <JsonLd data={data} />;
}

// FAQ entities — eligible for FAQ rich results and easy for LLMs to quote.
export function FaqJsonLd({ faqs }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <JsonLd data={data} />;
}
