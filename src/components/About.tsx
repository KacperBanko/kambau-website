import { asset } from "@/lib/asset";

export function About() {
  return (
    <section className="section about" id="o-nas" aria-labelledby="about-title">
      <div className="wrap about__inner">
        <div>
          <h2 id="about-title">Dokładność na każdym etapie</h2>
          <p>
            Przy realizacjach liczy się oś, wysokość i poziom. Pracujemy ze sprzętem, zabezpieczeniem
            wykopów i pomiarami — krok po kroku do gotowego efektu.
          </p>
        </div>
        <div
          className="about__photo"
          style={{ backgroundImage: `url(${asset("/images/extra-ekipa.png")})` }}
          role="img"
          aria-label="Ekipa KamBau w trakcie prac"
        />
      </div>
    </section>
  );
}
