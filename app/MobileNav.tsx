"use client";

import { useEffect, useState } from "react";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Aya Garden, I would like to discuss a commercial landscaping project in Mauritius.",
);

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="mobileNav">
      <button
        className="menuButton"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      {open ? (
        <div className="mobileMenuLayer" id="mobile-menu">
          <button className="mobileBackdrop" type="button" onClick={() => setOpen(false)} aria-label="Close navigation" />
          <div className="mobileMenuPanel">
            <p>Commercial landscaping · Mauritius</p>
            <nav aria-label="Mobile navigation">
              <a href="#services" onClick={() => setOpen(false)}><span>01</span>Capabilities</a>
              <a href="#sectors" onClick={() => setOpen(false)}><span>02</span>Sectors</a>
              <a href="#approach" onClick={() => setOpen(false)}><span>03</span>How we work</a>
              <a href="#contact" onClick={() => setOpen(false)}><span>04</span>Contact</a>
            </nav>
            <a className="mobileWhatsApp" href={`https://wa.me/?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noreferrer">
              <span>WA</span><b>Start on WhatsApp</b><small>Project details ready in minutes</small>
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
