"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Prototype only — wire to an email service / form backend before launch.
    setSent(true);
  }

  const field =
    "w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 font-sans text-[14px] text-ink outline-none transition-colors placeholder:text-mute/70 focus:border-gold";

  if (sent) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-beige p-8 text-center">
        <p className="font-serif text-[26px] text-ink">Ďakujeme!</p>
        <p className="mt-2 text-sm text-mute">
          Vaša správa bola odoslaná. Ozveme sa vám čo najskôr.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="mb-1.5 block text-[13px] font-medium text-ink">
          Meno a priezvisko
        </label>
        <input required className={field} placeholder="Vaše meno" />
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] font-medium text-ink">
          E-mail
        </label>
        <input required type="email" className={field} placeholder="vas@email.sk" />
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] font-medium text-ink">
          Správa
        </label>
        <textarea
          required
          rows={5}
          className={field}
          placeholder="Napíšte nám čokoľvek vás zaujíma..."
        />
      </div>
      <button type="submit" className="btn-primary mt-2 self-start">
        Odoslať správu
      </button>
    </form>
  );
}
