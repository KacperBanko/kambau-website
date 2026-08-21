import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Start">
      <div
        className="hero__media has-image"
        style={{ ["--hero-image" as string]: "url(/images/hero.png)" }}
        aria-hidden
      />
      <div className="hero__grain" aria-hidden />
      <div className="hero__content">
        <h1 className="hero__brand">
          K<span>A</span>MBAU
        </h1>
        <p className="hero__lead">{site.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={`tel:+48${site.phone}`}>
            Zadzwoń · {site.phoneDisplay}
          </a>
          <a
            className="btn btn--ghost"
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <div className="hero__meta">
          <span>{site.address}</span>
          <span>{site.hours}</span>
        </div>
      </div>
    </section>
  );
}
