# Bloom Pilates Studio — web (prototyp)

Funkčný prototyp webu pre **Bloom Pilates Studio** (Nové Zámky), postavený podľa
Figma návrhu. Stack: **Next.js 14 (App Router) + Tailwind CSS**. Pripravené na
nasadenie na **Vercel**.

## Stránky

| Cesta | Stránka |
|-------|---------|
| `/` | Domov (hero, ponuka, prečo Bloom, dnešné lekcie, recenzie, Instagram, mapa) |
| `/o-nas` | O nás — príbeh zakladateľky a hodnoty |
| `/lekcie` | Lekcie — reformer, barre, individuál + FAQ |
| `/cennik` | Cenník — 3 balíčky (18€ / 160€ / 45€) |
| `/rozvrh` | Rozvrh & rezervácie — miesto pre Reservio widget |
| `/kontakt` | Kontakt — údaje, otváracie hodiny, formulár, mapa |

---

## 1. Spustenie lokálne

Potrebuješ Node.js 18.18+.

```bash
npm install
npm run dev
# otvor http://localhost:3000
```

Produkčný build (to isté, čo spustí Vercel):

```bash
npm run build
npm start
```

> Pozn.: projekt sa nedal nainštalovať/zostaviť v prostredí, kde bol generovaný
> (zablokovaný prístup k npm registru). Build prebehne štandardne na tvojom
> počítači aj na Verceli, ktoré majú plný prístup k npm.

---

## 2. Nasadenie na Vercel

### Varianta A — cez GitHub (odporúčané)

1. Vytvor nový GitHub repozitár a nahraj doň obsah tohto priečinka:
   ```bash
   git init
   git add .
   git commit -m "Bloom Pilates web — prototyp"
   git branch -M main
   git remote add origin https://github.com/<ucet>/bloom-pilates.git
   git push -u origin main
   ```
2. Na [vercel.com](https://vercel.com) → **Add New… → Project** → importuj repozitár.
3. Vercel automaticky rozpozná Next.js. Framework Preset: **Next.js**, Build
   Command a Output nechaj predvolené. Klikni **Deploy**.
4. Po nasadení dostaneš URL typu `bloom-pilates.vercel.app`. Vlastnú doménu
   pridáš v **Project → Settings → Domains**.

### Varianta B — cez Vercel CLI

```bash
npm i -g vercel
vercel        # prihlásenie + prvý (preview) deploy
vercel --prod # produkčný deploy
```

---

## 3. Čo dotiahnuť pred ostrým spustením

**Fotografie** — teraz sú dočasné placeholdery z Unsplash (definované v
`lib/site.js`, objekt `img`). Nahraď ich vlastnými fotkami štúdia (ideálne do
`public/` a odkazuj `/foto.jpg`).

**Písmo Geist** — návrh používa Geist; prototyp dočasne používa vizuálne
takmer identický Inter. Pre presný Geist:
```bash
npm i geist
```
a v `app/layout.js` použi `import { GeistSans } from "geist/font/sans"`.

**Rezervácie + platby (Reservio)** — viď nižšie.

**Kontaktný formulár** — teraz iba zobrazí potvrdenie (prototyp). Pred spustením
napoj na e-mailovú službu (napr. Resend, Formspree, alebo Vercel + serverless
funkcia). Súbor: `components/ContactForm.js`.

**Mapa** — vložená OpenStreetMap s približnou polohou. Uprav súradnice/marker na
presnú adresu, prípadne nahraď Google Maps embedom.

**Právne** — pred spustením doplň stránky *Zásady ochrany osobných údajov*,
*Obchodné podmienky*, *Storno podmienky* a cookie lištu (GDPR).

---

## 4. Rezervačný systém a platobná brána — na čo si dať pozor

Prototyp počíta s **Reservio** (české/slovenské riešenie, vhodné pre menšie
štúdiá) — miesto preň je na stránke `/rozvrh` v komponente
`components/ReservioWidget.js`.

**Integrácia:** nestaviame vlastnú rezervačnú ani platobnú logiku. Reservio
poskytuje **embed widget** (iframe / script), ktorý sa vloží do stránky. V
`ReservioWidget.js` stačí nahradiť placeholder embed kódom z Reservia
(*Nastavenia → Online rezervácie → Widget*).

**Na čo myslieť pri výbere/nastavení:**

- **Kapacita a waitlist** — reformer lekcie sú limitované (6 miest). Systém musí
  blokovať preplnenie a ideálne ponúkať náhradníkov.
- **Cenové modely** — jednorazové lekcie, 10-balíček, individuály. Pri členstvách
  s opakovanou platbou over, či to daný systém podporuje.
- **Storno politika** — storno 24h vopred je už uvedené v cenníku; nastav ho aj
  v rezervačnom systéme, nech sa rieši automaticky.
- **Platby** — kartu nikdy nespracúvame sami. Reservio má integrovanú platobnú
  bránu (Stripe/GoPay/ComGate); platba beží na ich strane (PCI DSS rieši
  poskytovateľ). My len vkladáme widget.
- **Notifikácie** — zapni e-mail/SMS pripomienky, znižujú no-show.
- **Alternatívy k zváženiu:** Fitssey (SK/CZ, cielené na fitness), bsport alebo
  Momence (silnejšie členstvá a recurring platby pre boutique štúdiá).

---

## 5. GEO / SEO (viditeľnosť pre AI a vyhľadávače)

Web je pripravený na citovanie v AI odpovediach (ChatGPT, Perplexity, Google AI
Overviews) aj na klasické SEO:

- **Štruktúrované dáta (JSON-LD)** — `HealthClub`/`LocalBusiness` s adresou,
  GPS, hodinami, cenami a sociálnymi sieťami (sitewide) + `FAQPage` na `/lekcie`.
  Súbor: `components/StructuredData.js`.
- **robots.txt** (`app/robots.js`) — explicitne povoľuje AI crawlerov (GPTBot,
  ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended…).
- **sitemap.xml** (`app/sitemap.js`) — všetkých 6 stránok.
- **Open Graph + canonical + metadataBase** — v `app/layout.js`.
- **llms.txt** (`public/llms.txt`) — čistý faktický súhrn pre LLM.

> **Dôležité:** uprav `siteUrl` v `lib/site.js` na reálnu doménu — riadi
> canonical, sitemap, robots aj OG adresy. Po nasadení over štruktúrované dáta cez
> [Google Rich Results Test](https://search.google.com/test/rich-results) a
> pridaj web do Google Search Console.

Pre maximálny GEO efekt po spustení: získať konzistentné NAP (názov/adresa/
telefón) na Google Business Profile a v lokálnych katalógoch, a doplniť reálne
recenzie.

## Štruktúra projektu

```
app/                 # stránky (App Router)
  layout.js          # spoločný layout, fonty, Header + Footer
  page.js            # domov
  o-nas/ lekcie/ cennik/ rozvrh/ kontakt/
components/          # Header, Footer, Logo, CTASection, ContactForm, ReservioWidget
lib/site.js          # kontaktné údaje, navigácia, fotky (jedno miesto na úpravy)
tailwind.config.js   # farby a fonty z Figma návrhu
```

Najčastejšie úpravy (adresa, e-mail, telefón, odkazy, fotky) sú centralizované v
**`lib/site.js`**.
