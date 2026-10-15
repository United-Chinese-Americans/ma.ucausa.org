"use client";

import { useEffect } from "react";

// Marks [data-reveal] parts as shown once their section enters the viewport.
// Content is only hidden while the html element carries the "js" class, so it stays visible without script.
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("video").forEach((v) => v.pause());
    }
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    items.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.querySelectorAll(":scope > [data-reveal]")) : [];
      el.style.setProperty("--i", String(Math.max(0, siblings.indexOf(el))));
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
