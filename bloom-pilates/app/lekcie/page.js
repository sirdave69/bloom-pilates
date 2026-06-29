import CTASection from "@/components/CTASection";
import { FaqJsonLd } from "@/components/StructuredData";
import { img } from "@/lib/site";

export const metadata = {
  title: "Lekcie — Bloom Pilates Studio",
  description: "Reformer skupinové lekcie, barre a individuálny tréning v štúdiu Bloom.",
};

const lessons = [
  {
    title: "Reformer skupinové lekcie",
    text: "Naše vlajkové lekcie na strojoch Allegro 2. Cvičenie na reformeri využíva odpor pružín, čo umožňuje posilňovať svaly bez preťaženia kĺbov. Lekcie sú limitované na 6 osôb pre zachovanie maximálnej kvality.",
    forWhom: "Pre každého, kto hľadá efektívny tréning celého tela.",
    level: "Všetky úrovne",
    image: img.reformer,
  },
  {
    title: "Barre",
    text: "Energické cvičenie pri baletnej tyči, ktoré spája prvky tanca, jogy a pilatesu. Zameriavame sa na vysoké opakovania a malé, presné pohyby pre formovanie postavy.",
    forWhom: "Pre milovníkov dynamického pohybu a baletnej estetiky.",
    level: "Pokročilí / Začiatočníci",
    image: img.barre,
  },
  {
    title: "Individuálny tréning",
    text: "Maximálne sústredenie na vaše telo. Ideálne pre klientov po zraneniach, tehotné ženy, alebo pre tých, ktorí vyžadujú 100% pozornosť lektora.",
    forWhom: "Pre individuálne ciele a rehabilitáciu.",
    level: "Personalizované",
    image: img.individual,
  },
];

const faqs = [
  {
    q: "Potrebujem predchádzajúce skúsenosti s pilatesom?",
    a: "Vôbec nie. Naše lekcie sú prispôsobené pre všetky úrovne a naši lektori vám všetko vysvetlia.",
  },
  {
    q: "Čo si mám priniesť na prvú lekciu?",
    a: "Pohodlné športové oblečenie a protišmykové ponožky (môžete si ich zakúpiť aj u nás). Podložky aj vybavenie máme k dispozícii.",
  },
  {
    q: "Môžem cvičiť pilates ak mám bolesti chrbta?",
    a: "Pilates je výborný pre zdravý chrbát, ale vždy odporúčame najprv konzultáciu s lekárom a začatie individuálnym tréningom.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <section className="bg-cream">
        <div className="container-x py-20 text-center md:py-24">
          <p className="eyebrow">Naše lekcie</p>
          <h1 className="h-display mx-auto mt-3 max-w-2xl text-[44px] md:text-[58px]">
            Vyberte si lekciu, ktorá najlepšie zodpovedá vašim potrebám a rytmu života.
          </h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x flex flex-col gap-16 pb-24">
          {lessons.map((l, i) => (
            <div key={l.title} className="grid items-center gap-10 md:grid-cols-2">
              <div className={`arch overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.image} alt={l.title} className="arch h-[420px] w-full object-cover" />
              </div>
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                  {l.level}
                </span>
                <h2 className="h-display mt-3 text-[36px] md:text-[44px]">{l.title}</h2>
                <p className="mt-5 text-[16px] leading-relaxed text-mute">{l.text}</p>
                <p className="mt-5 border-l-2 border-gold pl-4 text-[15px] italic text-ink/70">
                  {l.forWhom}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-beige">
        <div className="container-x py-20 md:py-28">
          <div className="text-center">
            <p className="eyebrow">Otázky</p>
            <h2 className="h-display mt-3 text-[40px] md:text-[48px]">Často kladené otázky</h2>
          </div>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-sans text-[17px] font-medium text-ink">
                  {f.q}
                  <span className="ml-4 text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Pozrite si naše cenové balíčky" buttonLabel="Zobraziť cenník" href="/cennik" />
    </>
  );
}
