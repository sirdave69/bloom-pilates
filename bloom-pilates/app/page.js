import Link from "next/link";
import CTASection from "@/components/CTASection";
import { img, studio } from "@/lib/site";

const offers = [
  {
    title: "Reformer lekcie",
    text: "Zvýšte svoju silu a flexibilitu na strojoch, ktoré rešpektujú vaše telo.",
    image: img.reformer,
    href: "/lekcie",
  },
  {
    title: "Barre",
    text: "Kombinácia baletu, pilatesu a posilňovania pre dlhé a štíhle svaly.",
    image: img.barre,
    href: "/lekcie",
  },
  {
    title: "Individuálny tréning",
    text: "Osobný prístup zameraný na vaše špecifické potreby a ciele.",
    image: img.individual,
    href: "/lekcie",
  },
];

const why = [
  { title: "Osobný prístup", text: "Každý pohyb prispôsobujeme vašej úrovni a potrebám." },
  { title: "Kvalita", text: "Špičkové stroje Balanced Body a certifikovaní lektori." },
  { title: "Pohoda", text: "Prostredie, v ktorom si oddýchnete od každodenného stresu." },
  { title: "Komunita", text: "Miesto, kde stretnete rovnako naladených ľudí." },
];

const schedule = [
  { time: "07:30", name: "Reformer Flow", spots: "2 voľné", full: false },
  { time: "09:00", name: "Barre Sculpt", spots: "Plné", full: true },
  { time: "17:00", name: "Individual", spots: "1 voľné", full: false },
  { time: "18:30", name: "Reformer Power", spots: "3 voľné", full: false },
];

const reviews = [
  { text: "Štúdio Bloom je pre mňa oázou pokoja. Lekcie sú výborne vedené a prostredie je nádherné.", name: "Martina S." },
  { text: "Konečne som v Nových Zámkoch našla pilates, ktorý má svetovú úroveň. Reformer je závislosť!", name: "Zuzana K." },
  { text: "Individuálne tréningy mi pomohli s bolesťami chrbta už po mesiaci. Profesionálny prístup.", name: "Peter L." },
];

const igImages = [img.ig1, img.ig2, img.ig3, img.ig4, img.ig5, img.ig6];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.hero} alt="Bloom Pilates Studio" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/25 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-x">
              <div className="max-w-xl text-cream">
                <h1 className="font-serif text-[52px] font-normal leading-[1.04] md:text-[72px]">
                  Pohyb, ktorý vás premení
                </h1>
                <p className="mt-6 max-w-md font-sans text-[16px] leading-relaxed text-cream/85">
                  Skupinové reformer lekcie, barre a individuálny tréning v Nových
                  Zámkoch. Zažite pilates v novom svetle.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/rozvrh" className="btn-primary">Rezervovať lekciu</Link>
                  <Link href="/lekcie" className="btn-outline border-cream/40 text-cream hover:border-cream">
                    Naše lekcie
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-28">
          <div className="text-center">
            <p className="eyebrow">Naša ponuka</p>
            <h2 className="h-display mt-3 text-[40px] md:text-[52px]">Nájdite svoju lekciu</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {offers.map((o) => (
              <Link key={o.title} href={o.href} className="group block">
                <div className="overflow-hidden arch">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={o.image}
                    alt={o.title}
                    className="arch h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-6 font-serif text-[26px] text-ink">{o.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mute">{o.text}</p>
                <span className="mt-4 inline-block text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">
                  Zistiť viac →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bloom */}
      <section className="grid items-stretch md:grid-cols-2">
        <div className="min-h-[420px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.why} alt="Interiér štúdia" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center gap-10 bg-beige p-12 md:p-20">
          <div>
            <p className="eyebrow">Prečo Bloom?</p>
            <h2 className="h-display mt-3 text-[40px] md:text-[48px]">Wellness s dušou</h2>
          </div>
          <ul className="flex flex-col gap-7">
            {why.map((w) => (
              <li key={w.title} className="flex gap-5">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <div>
                  <p className="font-sans text-[18px] font-semibold text-ink">{w.title}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-mute">{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Today's schedule */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Rozvrh</p>
              <h2 className="h-display mt-3 text-[40px] md:text-[48px]">Dnešné lekcie</h2>
            </div>
            <Link href="/rozvrh" className="btn-outline">Zobraziť celý rozvrh</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {schedule.map((s) => (
              <div key={s.time} className="rounded-2xl border border-ink/10 bg-beige/40 p-6">
                <p className="font-serif text-[34px] text-ink">{s.time}</p>
                <p className="mt-1 text-[15px] font-medium text-ink">{s.name}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[13px] text-mute">
                  <span className={`h-2 w-2 rounded-full ${s.full ? "bg-ink/30" : "bg-gold"}`} />
                  {s.spots}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-beige">
        <div className="container-x py-20 md:py-28">
          <div className="text-center">
            <p className="eyebrow">Spokojnosť</p>
            <h2 className="h-display mt-3 text-[40px] md:text-[48px]">Vaše skúsenosti</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl bg-cream p-8">
                <span className="font-serif text-[44px] leading-none text-gold">&ldquo;</span>
                <blockquote className="mt-3 text-[15px] leading-relaxed text-ink/80">{r.text}</blockquote>
                <figcaption className="mt-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-mute">
                  {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-24">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="h-display text-[34px] md:text-[42px]">Inšpirácia @bloompilates</h2>
            <a href={studio.instagram} target="_blank" rel="noreferrer" className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">
              Sledovať na Instagrame →
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-3 md:grid-cols-6">
            {igImages.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt={`Instagram ${i + 1}`} className="aspect-square w-full rounded-lg object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Location strip */}
      <section className="bg-beige">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow">Kde nás nájdete</p>
            <h2 className="h-display mt-3 text-[36px] md:text-[44px]">Navštívte nás v Nových Zámkoch</h2>
            <div className="mt-6 space-y-1.5 text-[15px] text-mute">
              <p>{studio.address}</p>
              <p>{studio.hoursWeek}</p>
              <p>{studio.hoursWeekend}</p>
            </div>
            <Link href="/kontakt" className="btn-outline mt-8">Napíšte nám</Link>
          </div>
          <div className="arch overflow-hidden">
            <iframe
              title="Mapa — Bloom Pilates Studio"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.15%2C47.98%2C18.18%2C48.00&layer=mapnik&marker=47.99%2C18.165"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
