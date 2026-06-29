import CTASection from "@/components/CTASection";
import { img } from "@/lib/site";

export const metadata = {
  title: "O nás — Bloom Pilates Studio",
  description: "Príbeh štúdia Bloom Pilates a hodnoty, na ktorých nám záleží.",
};

const values = [
  { title: "Pohyb", text: "Základ vitality a zdravia." },
  { title: "Sila", text: "Prevencia a sila vychádzajúca z vnútra." },
  { title: "Čas pre seba", text: "Čas venovaný len sebe." },
  { title: "Odbornosť", text: "Neustále vzdelávanie a certifikácie." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-x grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
          <div className="arch overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.founder} alt="Barbora Tóthová" className="arch h-[520px] w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Náš príbeh</p>
            <h1 className="h-display mt-3 text-[44px] md:text-[60px]">Zrodené z vášne</h1>
            <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-mute">
              <p>
                Bloom Pilates vznikol zo sna o mieste, kde sa pohyb stáva terapiou.
                Moja cesta k pilatesu začala pred desiatimi rokmi a odvtedy som
                vedela, že Nové Zámky si zaslúžia priestor, ktorý dýcha pokojom a
                profesionalitou.
              </p>
              <p>
                Naším cieľom nie je len cvičenie, ale vybudovanie komunity, kde sa
                každá žena a každý muž bude cítiť videný a podporený.
              </p>
            </div>
            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="font-serif text-[24px] text-ink">Barbora Tóthová</p>
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">
                Zakladateľka &amp; Lektorka
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige">
        <div className="container-x py-20 md:py-28">
          <div className="text-center">
            <p className="eyebrow">Hodnoty</p>
            <h2 className="h-display mt-3 text-[40px] md:text-[48px]">Na čom nám záleží</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl bg-cream p-8">
                <span className="font-serif text-[28px] text-gold">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-[24px] text-ink">{v.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mute">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Pridajte sa k nám na lekciu" buttonLabel="Rezervovať teraz" />
    </>
  );
}
