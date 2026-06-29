// Placeholder for the Reservio booking widget.
// Before launch, replace the inner block with the embed snippet from
// Reservio (Nastavenia → Online rezervácie → Widget), e.g. an <iframe>
// or their <div data-reservio-widget> + script tag.

export default function ReservioWidget() {
  return (
    <div className="rounded-2xl border border-dashed border-gold/40 bg-cream p-10 text-center md:p-16">
      <p className="eyebrow">[ Reservio widget — embed kód ]</p>
      <p className="mx-auto mt-4 max-w-md font-serif text-[24px] leading-snug text-ink/70">
        Tu bude vložený interaktívny rozvrh a rezervácia z platformy Reservio.
      </p>
      <a
        href="https://www.reservio.com"
        target="_blank"
        rel="noreferrer"
        className="btn-outline mt-8"
      >
        Otvoriť rozvrh
      </a>
    </div>
  );
}
