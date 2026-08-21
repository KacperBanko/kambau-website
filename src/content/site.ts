/** Dane strony KamBau — treści z Facebooka */

export const site = {
  name: "KamBau",
  tagline: "Prace ziemne, przeciski i solidne realizacje w terenie",
  description:
    "Firma budowlana ze specjalizacją w pracach ziemnych, przeciskach kretem, wykopy liniowych, brukarstwie, niwelacji i odwodnieniach.",
  phone: "798433749",
  phoneDisplay: "798 433 749",
  whatsapp: "48798433749",
  address: "Starogardzka 39, Rywałd, 83-200",
  hours: "Czynne całą dobę",
  facebook: "https://www.facebook.com/profile.php?id=61591842403321",
} as const;

export const services = [
  {
    id: "prace-ziemne",
    title: "Prace ziemne",
    text: "Wykopy, niwelacja i przygotowanie terenu pod inwestycje — ze sprzętem i dokładnymi pomiarami.",
  },
  {
    id: "przeciski",
    title: "Przeciski kretem",
    text: "Bezwykopowe układanie rur i kabli bez naruszania jezdni i ogrodu. Krety: 45, 55, 65 i 75 mm.",
  },
  {
    id: "wykopy",
    title: "Wykopy liniowe i przyłącza",
    text: "Przygotowanie trasy instalacji i przyłączy — czysto, zgodnie z poziomami i wymaganiami.",
  },
  {
    id: "brukarstwo",
    title: "Brukarstwo",
    text: "Utwardzenia i nawierzchnie podjazdy, place i ciągi komunikacyjne.",
  },
  {
    id: "niwelacja",
    title: "Niwelacja terenu",
    text: "Wyrównanie działki pod budowę, ogród lub plac — z kontrolą wysokości na każdym etapie.",
  },
  {
    id: "odwodnienia",
    title: "Odwodnienia",
    text: "Drenaż i odprowadzenie wody, żeby teren był stabilny i suchy na lata.",
  },
] as const;

export const projects = [
  {
    id: "sciany-oporowe",
    title: "Ściany oporowe typu L",
    text: "Prace ziemne i montaż prefabrykowanych ścian oporowych — głęboki wykop, wypoziomowanie i precyzyjne ustawienie elementów.",
    image: "/images/realizacja-sciany.png",
  },
  {
    id: "elki-betonowe",
    title: "Montaż elek betonowych",
    text: "Od wytyczenia i ławy fundamentowej po izolację, drenaż i zasypkę — krok po kroku do gotowego murka.",
    image: "/images/realizacja-elki.png",
  },
  {
    id: "przeciski-kretem",
    title: "Przeciski kretem",
    text: "Nowe przyłącza bez rozkopywania całego ogrodu i utwardzonej nawierzchni.",
    image: "/images/realizacja-przeciski.png",
  },
  {
    id: "plac-maszyny",
    title: "Plac pod maszyny",
    text: "Zdjęcie humusu, niwelacja, geowłóknina, podbudowa i zagęszczenie pod duże obciążenia.",
    image: "/images/realizacja-plac.png",
  },
] as const;
