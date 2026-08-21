import { BrandMark } from "@/components/BrandMark";

export function Header() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <BrandMark />
        <nav aria-label="Główne">
          <ul className="nav__links">
            <li>
              <a href="#uslugi">Usługi</a>
            </li>
            <li>
              <a href="#realizacje">Realizacje</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
