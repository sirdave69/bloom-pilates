import ContactForm from "@/components/ContactForm";
import { studio } from "@/lib/site";

export const metadata = {
  title: "Kontakt — Bloom Pilates Studio",
  description: "Nájdete nás na Námestí hrdinov 12 v Nových Zámkoch. Napíšte nám.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-x py-20 md:py-24">
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Info */}
            <div>
              <p className="eyebrow">Kde nás nájdete</p>
              <h1 className="h-display mt-3 text-[44px] md:text-[56px]">
                Budeme sa tešiť na návštevu
              </h1>

              <div className="mt-10 space-y-7">
                <div>
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">
                    Adresa
                  </h3>
                  <p className="mt-2 text-[16px] text-ink/80">{studio.address}</p>
                </div>
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">
                      Telefón
                    </h3>
                    <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="mt-2 block text-[16px] text-ink/80 hover:text-ink">
                      {studio.phone}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">
                      E-mail
                    </h3>
                    <a href={`mailto:${studio.email}`} className="mt-2 block text-[16px] text-ink/80 hover:text-ink">
                      {studio.email}
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">
                    Otváracie hodiny
                  </h3>
                  <div className="mt-2 space-y-1 text-[16px] text-ink/80">
                    <p className="flex justify-between border-b border-ink/10 py-1.5">
                      <span>Pondelok – Piatok</span>
                      <span>07:00 – 20:00</span>
                    </p>
                    <p className="flex justify-between py-1.5">
                      <span>Sobota – Nedeľa</span>
                      <span>Podľa rozvrhu lekcií</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="arch mt-10 overflow-hidden">
                <iframe
                  title="Mapa — Bloom Pilates Studio"
                  className="h-[300px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=18.15%2C47.98%2C18.18%2C48.00&layer=mapnik&marker=47.99%2C18.165"
                />
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-ink/10 bg-beige/40 p-8 md:p-10">
              <p className="eyebrow">Napíšte nám</p>
              <h2 className="h-display mt-3 text-[30px] md:text-[36px]">
                Máte otázky? Sme tu pre vás
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
