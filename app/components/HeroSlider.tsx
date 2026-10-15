"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_SLIDES } from "../content";

const INTERVAL = 6000;

export function HeroMedia({ index }: { index: number }) {
  return (
    <div className="hero-media">
      {HERO_SLIDES.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={i === index ? s.caption : ""}
          aria-hidden={i !== index}
          width={s.w}
          height={s.h}
          sizes="100vw"
          preload={i === 0}
          loading={i === 0 ? undefined : "eager"}
          className="hero-slide"
          data-active={i === index}
        />
      ))}
    </div>
  );
}

export default function HeroSlider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
      return;
    }
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [playing]);

  return (
    <section id="home" className="hero" aria-label="Welcome">
      <HeroMedia index={index} />
      <div className="hero-band">
        {children}
        <div className="hero-controls">
          <p className="hero-caption" aria-live="polite">
            {HERO_SLIDES[index].caption}
          </p>
          <div className="hero-dots" role="group" aria-label="Choose a photograph">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className="dot"
                aria-label={s.caption}
                aria-pressed={i === index}
                onClick={() => {
                  setIndex(i);
                  setPlaying(false);
                }}
              />
            ))}
            <button type="button" className="hero-pause" onClick={() => setPlaying((p) => !p)}>
              {playing ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
