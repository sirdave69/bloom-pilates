import Link from "next/link";
import ReservioWidget from "@/components/ReservioWidget";

export const metadata = {
  title: "Rozvrh & Rezervácie — Bloom Pilates Studio",
  description: "Rezervujte si lekciu online cez rezervačný systém Reservio.",
};

const steps = [
  "Vyberte si typ lekcie a vhodný termín v rozvrhu.",
  "Prihláste sa do svojho konta alebo sa zaregistrujte.",
  "Uhraďte lekciu pohodlne online kartou.",
  "Termín máte potvrdený! Tešíme sa na vás v štúdiu.",
];

const bring = [
  "Protišmykové ponožky (povinné z hygienických dôvodov)",
  "Pohodlné športové oblečenie (bez zipsov)",
  "Vlastný uterák a fľašu na vodu",
  "Dobrú náladu a chuť pracovať na sebe",
];

export default function SchedulePage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-x py-20 text-center md:py-24">
          <p className="eyebrow">Rezervácie</p>
          <h1 className="h-display mt-3 text-[44px] md:text-[58px]">Rozvrh &amp; Rezervácie</h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-mute">
            Rezerváciu a platbu lekcie vybavíte pohodlne online cez náš rezervačný
            systém Reservio.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x pb-20">
          <ReservioWidget />
        </div>
      </section>

      <section className="bg-beige">
        <div className="container-x py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Ako to funguje</p>
              <h2 className="h-display mt-3 text-[36px] md:text-[44px]">Rezervácia v 4 krokoch</h2>
              <ol className="mt-9 flex flex-col gap-6">
                {steps.map((s, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold font-serif text-[18px] text-cream">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-[16px] leading-relaxed text-ink/80">{s}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-cream p-10">
              <p className="eyebrow">Pred lekciou</p>
              <h3 className="h-display mt-3 text-[30px]">Čo si priniesť</h3>
              <ul className="mt-7 flex flex-col gap-4">
                {bring.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] text-ink/80">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x flex flex-col items-center gap-6 py-20 text-center">
          <h2 className="h-display text-[34px] md:text-[42px]">Máte otázky k rezervácii?</h2>
          <Link href="/kontakt" className="btn-primary">Kontaktujte nás</Link>
        </div>
      </section>
    </>
  );
}
