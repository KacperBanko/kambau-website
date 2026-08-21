import { site } from "@/content/site";

export function Contact() {
  const mapsQuery = encodeURIComponent(site.address);

  return (
    <section className="section contact" id="kontakt">
      <div className="wrap contact__grid">
        <div>
          <div className="section__head">
            <h2>Kontakt</h2>
            <p>Napisz lub zadzwoń — jesteśmy dostępni całą dobę.</p>
          </div>
          <ul className="contact__list">
            <li>
              <span>Telefon</span>
              <a href={`tel:+48${site.phone}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <span>WhatsApp</span>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                +48 {site.phoneDisplay}
              </a>
            </li>
            <li>
              <span>Adres</span>
              <strong>{site.address}</strong>
            </li>
            <li>
              <span>Godziny</span>
              <strong>{site.hours}</strong>
            </li>
            <li>
              <span>Facebook</span>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                KamBau na FB
              </a>
            </li>
          </ul>
          <div className="contact__actions">
            <a className="btn btn--primary" href={`tel:+48${site.phone}`}>
              Zadzwoń
            </a>
            <a
              className="btn btn--dark"
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="btn btn--outline"
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mapa
            </a>
          </div>
        </div>
        <div className="map-note">
          <strong>Rywałd</strong>
          <p>Starogardzka 39 · woj. pomorskie</p>
          <p>Firma budowlana · prace ziemne i terenowe</p>
        </div>
      </div>
    </section>
  );
}
