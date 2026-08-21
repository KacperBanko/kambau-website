# KamBau — strona firmowa

Wizytówka firmy budowlanej na podstawie treści z Facebooka.

## Status

- Projekt osobny (oddzielony od ecommerce-chatbot-saas)
- Etap: **na GitHubie** — https://github.com/KacperBanko/kambau-website
- Kolejny krok do „pokazania online”: deploy Vercel (GitHub ≠ żywa strona)
- Fanpage: https://www.facebook.com/profile.php?id=61591842403321
- Assets: `public/logo.png` + `public/images/*`

## Marka

- **Nazwa:** KamBau
- **Branża:** firma budowlana
- **Kolory:** czerń `#121212`, papier `#f7f5f2`, pomarańcz `#e85d04`
- **Fonty:** Barlow Condensed (nagłówki) + Barlow (tekst)

## Kontakt

- **Adres:** Starogardzka 39, Rywałd, 83-200
- **Telefon / WhatsApp:** 798 433 749
- **Godziny:** czynne całą dobę

## Sekcje strony

1. Hero — marka + CTA telefon/WhatsApp
2. Usługi — 6 pozycji z bio FB
3. Realizacje — 4 bloki z postów (placeholdery na zdjęcia)
4. O nas — precyzja / pomiary
5. Kontakt — dane + mapa Google

## Assets do wrzucenia

Patrz `public/ASSETS.md`:
- `public/logo.png`
- `public/images/hero.jpg`
- `public/images/realizacja-*.jpg` (4 pliki)

## Stack

- Next.js 15 + TypeScript
- Deploy docelowo: Vercel

## Jak odpalić

```bash
npm install
npm run dev
```

## Notatki sesji

- 2026-08-21: osobny projekt
- 2026-08-21: brief z FB
- 2026-08-21: scaffold MVP (layout + treści + placeholdery)
