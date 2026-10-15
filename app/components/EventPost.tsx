"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { EVENT, LUNAR_NEW_YEARS } from "../content";

const DAY = 86_400_000;

function nextNewYear(now: Date) {
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  for (const ny of LUNAR_NEW_YEARS) {
    const [y, m, d] = ny.date.split("-").map(Number);
    const days = Math.round((Date.UTC(y, m - 1, d) - today) / DAY);
    if (days >= 0) return { ...ny, days };
  }
  return null;
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function Countdown() {
  // The first entry is the fallback for the server render and for visitors without script.
  const [next, setNext] = useState<ReturnType<typeof nextNewYear>>(null);
  useEffect(() => setNext(nextNewYear(new Date())), []);
  const target = next ?? LUNAR_NEW_YEARS[0];

  return (
    <div className="cell cell-tone" aria-live="polite">
      <span className="cell-label">Next Lunar New Year, Year of the {target.animal}</span>
      <span className="cell-value">
        {next
          ? next.days === 0
            ? "Today. Happy New Year!"
            : `${next.days} ${next.days === 1 ? "day" : "days"} away`
          : formatDate(target.date)}
      </span>
      {next && <span className="cell-label">{formatDate(next.date)}</span>}
    </div>
  );
}

export default function EventPost() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const [photo, setPhoto] = useState(0);
  const current = EVENT.photos[photo];

  return (
    <article className="event">
      <div className="event-plate" data-reveal>
        <div className="plate">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={640}
            height={480}
            sizes="(min-width: 900px) 45vw, 100vw"
            className="plate-img"
          />
        </div>
        <div className="thumbs" role="group" aria-label="Photographs from the luncheon">
          {EVENT.photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              className="thumb"
              aria-pressed={i === photo}
              aria-label={`Show photograph: ${p.alt}`}
              onClick={() => setPhoto(i)}
            >
              <Image src={p.src} alt="" width={640} height={480} sizes="96px" />
            </button>
          ))}
        </div>
        <p className="small credit">{EVENT.credit}</p>
      </div>

      <div className="event-text">
        <div className="tabs" role="tablist" aria-label="Language">
          <button
            type="button"
            role="tab"
            id="tab-en"
            aria-selected={lang === "en"}
            aria-controls="event-body"
            onClick={() => setLang("en")}
          >
            English
          </button>
          <button
            type="button"
            role="tab"
            id="tab-zh"
            aria-selected={lang === "zh"}
            aria-controls="event-body"
            onClick={() => setLang("zh")}
          >
            中文
          </button>
        </div>

        <div data-reveal>
          <h3 className="event-title">{lang === "en" ? EVENT.title : "UCA MA 新春联谊午餐会"}</h3>
          <p className="event-meta">
            {EVENT.date}
            <br />
            {EVENT.place}
          </p>
          <div
            id="event-body"
            role="tabpanel"
            aria-labelledby={lang === "en" ? "tab-en" : "tab-zh"}
            lang={lang === "zh" ? "zh-Hans" : "en"}
            className="event-body"
          >
            {EVENT[lang].map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>

        <div className="cells" data-reveal>
          <a className="cell cell-ink" href={EVENT.source} target="_blank" rel="noopener">
            <span className="cell-label">Original report, in Chinese</span>
            <span className="cell-value">Read the article</span>
          </a>
          <Countdown />
        </div>
      </div>
    </article>
  );
}
