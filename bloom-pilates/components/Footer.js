import Link from "next/link";
import { studio } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-xs">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[26px] font-medium text-cream">
              {studio.name}
            </span>
            <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-cream/60">
              {studio.tagline}
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/60">
            {studio.description}
          </p>
        </div>

        <div>
          <h4 className="eyebrow text-cream/50">Navigácia</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link href="/o-nas" className="hover:text-cream">O nás</Link></li>
            <li><Link href="/lekcie" className="hover:text-cream">Lekcie</Link></li>
            <li><Link href="/rozvrh" className="hover:text-cream">Rozvrh</Link></li>
            <li><Link href="/cennik" className="hover:text-cream">Cenník</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-cream/50">Kontakt</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li>{studio.addressShort}</li>
            <li><a href={`mailto:${studio.email}`} className="hover:text-cream">{studio.email}</a></li>
            <li><a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="hover:text-cream">{studio.phone}</a></li>
          </ul>
          <div className="mt-5 flex gap-5 text-sm">
            <a href={studio.instagram} className="hover:text-cream" target="_blank" rel="noreferrer">Instagram</a>
            <a href={studio.facebook} className="hover:text-cream" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x py-6 text-xs text-cream/40">
          © {new Date().getFullYear()} Bloom Pilates Studio. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
}
