import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          <strong>{site.name}</strong> · {year}
        </p>
        <p>
          <a href={`tel:+48${site.phone}`}>{site.phoneDisplay}</a>
          {" · "}
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          {" · "}
          <a href={site.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
}
