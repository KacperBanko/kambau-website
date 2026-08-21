"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";

export function BrandMark() {
  const [logoOk, setLogoOk] = useState(true);

  return (
    <a className="nav__brand" href="#top" aria-label={site.name}>
      {logoOk ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="nav__logo"
          src={asset("/logo.png")}
          alt=""
          width={44}
          height={44}
          onError={() => setLogoOk(false)}
        />
      ) : (
        <span className="nav__logo nav__logo--fallback" aria-hidden>
          KB
        </span>
      )}
      <span className="nav__name">
        K<span>A</span>MBAU
      </span>
    </a>
  );
}
