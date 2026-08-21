import { services } from "@/content/site";

export function Services() {
  return (
    <section className="section services" id="uslugi">
      <div className="wrap">
        <div className="section__head">
          <h2>Usługi</h2>
          <p>Specjalizujemy się w pracach terenowych — od wykopu po utwardzenie i odwodnienie.</p>
        </div>
        <ul className="services__list">
          {services.map((item) => (
            <li className="services__item" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
