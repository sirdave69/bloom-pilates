import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Cenník — Bloom Pilates Studio",
  description: "Cenník lekcií, balíčkov a individuálnych tréningov v štúdiu Bloom Pilates.",
};

const tiers = [
  {
    name: "Jednorázová lekcia",
    subtitle: "Skupinová lekcia (Reformer / Barre)",
    price: "18",
    features: ["60 minút trvania", "Uterák a voda v cene", "Individuálna spätná väzba"],
    note: "Platnosť 30 dní od zakúpenia. Storno lekcie najneskôr 24h vopred.",
    featured: false,
  },
  {
    name: "10-Lekciový Pack",
    subtitle: "10 skupinových lekcií",
    price: "160",
    highlight: "Len 16€ za lekciu",
    features: ["Rezervácia cez systém Reservio", "Prioritný zápis do rozvrhu"],
    note: "Platnosť 3 mesiace od zakúpenia. Najobľúbenejšia voľba pre pravidelné cvičenie.",
    featured: true,
  },
  {
    name: "Individuálny tréning",
    subtitle: "Súkromná lekcia 1-na-1",
    price: "45",
    features: [
      "60 minút zameraných na vaše ciele",
      "Ideálne po zraneniach alebo pre začiatočníkov",
      "Konzultácia stavu v cene",
    ],
    note: "Individuálne termíny po dohode s lektorkou. K dispozícii aj balíky 5 lekcií.",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-x py-20 text-center md:py-24">
          <p className="eyebrow">Cenník</p>
          <h1 className="h-display mt-3 text-[44px] md:text-[58px]">Investujte do svojho zdravia</h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-mute">
            V Bloom Pilates veríme, že kvalita prevyšuje kvantitu. Naše ceny odrážajú
            odbornosť lektorov, špičkové vybavenie a komornú atmosféru nášho štúdia.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x grid items-stretch gap-8 pb-10 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl p-8 md:p-10 ${
                t.featured
                  ? "bg-ink text-cream shadow-xl lg:-mt-4"
                  : "border border-ink/10 bg-beige/40 text-ink"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream">
                  Najobľúbenejšie
                </span>
              )}
              <h3 className={`font-serif text-[28px] ${t.featured ? "text-cream" : "text-ink"}`}>
                {t.name}
              </h3>
              <p className={`mt-1 text-[14px] ${t.featured ? "text-cream/70" : "text-mute"}`}>
                {t.subtitle}
              </p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-serif text-[56px] leading-none">{t.price}</span>
                <span className={`mb-2 text-[22px] ${t.featured ? "text-cream/70" : "text-mute"}`}>€</span>
              </div>
              {t.highlight && (
                <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-gold">
                  {t.highlight}
                </p>
              )}
              <ul className="mt-7 flex flex-col gap-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[14px]">
                    <span className="text-gold">✓</span>
                    <span className={t.featured ? "text-cream/85" : "text-ink/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-7 border-t pt-5 text-[12px] leading-relaxed ${t.featured ? "border-cream/15 text-cream/55" : "border-ink/10 text-mute"}`}>
                {t.note}
              </p>
              <Link
                href="/rozvrh"
                className={`mt-7 ${t.featured ? "btn bg-gold text-cream hover:bg-gold-dark" : "btn-outline"} w-full`}
              >
                Rezervovať
              </Link>
            </div>
          ))}
        </div>
        <div className="container-x pb-20 text-center">
          <p className="text-[15px] text-ink/75">
            Prvá skúšobná lekcia za špeciálnu cenu <strong>10€</strong>. Ponúkame aj
            darčekové poukážky v ľubovoľnej hodnote.
          </p>
          <p className="mt-3 text-[13px] text-mute">
            Všetky platby prebiehajú bezpečne cez platobnú bránu v rezervačnom systéme.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
