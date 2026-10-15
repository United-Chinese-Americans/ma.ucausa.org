"use client";

import Image from "next/image";
import { useState } from "react";
import { LINKS, LOGOS, NAV } from "../content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" data-open={open}>
      <a className="brand" href="#home" aria-label="UCA Massachusetts, home">
        <Image src={LOGOS.seal} alt="" width={772} height={772} className="brand-seal" preload />
        <Image src={LOGOS.wordmark} alt="" width={1672} height={601} className="brand-word" preload />
      </a>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className="site-nav" aria-label="Main">
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a className="btn btn-accent" href={LINKS.join} target="_blank" rel="noopener">
            Join us
          </a>
          <a className="btn btn-navy" href={LINKS.donate} target="_blank" rel="noopener">
            Donate
          </a>
        </div>
      </nav>
    </header>
  );
}
