import Image from "next/image";
import ContactForm from "./components/ContactForm";
import EventPost from "./components/EventPost";
import HeroSlider from "./components/HeroSlider";
import Icon from "./components/Icon";
import Reveal from "./components/Reveal";
import SiteHeader from "./components/SiteHeader";
import {
  ABOUT,
  EVENT,
  HERO_SLIDES,
  LEADERS,
  LINKS,
  LOGOS,
  MISSION,
  NAV,
  SUMMARY,
  VALUES,
  VALUES_NOTE,
  VISION,
  WORK,
} from "./content";

const photo = (p: { src: string; alt: string }) => ({ ...p, w: 640, h: 480 });

const STRIP = [
  photo(EVENT.photos[4]),
  { src: HERO_SLIDES[2].src, alt: HERO_SLIDES[2].caption, w: HERO_SLIDES[2].w, h: HERO_SLIDES[2].h },
  photo(EVENT.photos[1]),
  photo(EVENT.photos[6]),
  { src: HERO_SLIDES[1].src, alt: HERO_SLIDES[1].caption, w: HERO_SLIDES[1].w, h: HERO_SLIDES[1].h },
  photo(EVENT.photos[2]),
  photo(EVENT.photos[7]),
  photo(EVENT.photos[0]),
  photo(EVENT.photos[5]),
  photo(EVENT.photos[3]),
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        {/* Hero: the photograph carries Greater Boston, the magenta band carries the name */}
        <HeroSlider>
          <h1 className="hero-title lines">
            <span className="line">
              <span data-line style={{ "--i": 0 } as React.CSSProperties}>
                UCA
              </span>
            </span>{" "}
            <span className="line">
              <span data-line style={{ "--i": 1 } as React.CSSProperties}>
                Massachusetts
              </span>
            </span>
          </h1>
          <div className="hero-foot">
            <p className="hero-sub">{SUMMARY}</p>
            <div className="hero-actions">
              <a className="btn btn-light" href={LINKS.join} target="_blank" rel="noopener">
                Become a member
              </a>
              <a className="btn btn-navy" href={LINKS.donate} target="_blank" rel="noopener">
                Donate
              </a>
            </div>
          </div>
        </HeroSlider>

        {/* Mission and vision: statement tiles */}
        <section className="mosaic" aria-labelledby="mission-title">
          <div className="tile tile-a" data-reveal>
            <h2 id="mission-title" className="display">
              A thriving
              <br />
              community
            </h2>
          </div>
          <div className="tile tile-b" data-reveal>
            <p className="display" aria-label="Founded in 2016">
              2016
            </p>
            <p className="small">Founded in Greater Boston</p>
          </div>
          <div className="tile tile-c" data-reveal>
            <video
              className="tile-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/boston-harbor-1-2019-12-11-poster.jpg"
              width={854}
              height={480}
              aria-hidden="true"
            >
              <source src="/media/boston-harbor-1-2019-12-11.webm" type="video/webm" />
            </video>
          </div>
          <div className="tile tile-text">
            <dl className="facts" data-reveal>
              <div>
                <dt>Formal name</dt>
                <dd>United Chinese Americans, Massachusetts Chapter</dd>
              </div>
              <div>
                <dt>Also known as</dt>
                <dd>UCA MA, UCA Massachusetts</dd>
              </div>
              <div>
                <dt>Founded</dt>
                <dd>2016</dd>
              </div>
              <div>
                <dt>Service area</dt>
                <dd>Massachusetts and Greater Boston</dd>
              </div>
            </dl>
            <div className="mission-text" data-reveal>
              <p>
                <strong>Our mission.</strong> {MISSION}
              </p>
              <p>
                <strong>Our vision.</strong> {VISION}
              </p>
            </div>
          </div>
        </section>

        {/* About: inset panel, shaped portrait */}
        <section id="about" className="about" aria-labelledby="about-title">
          <div className="about-panel">
            <div className="about-left">
              <h2 id="about-title" className="head" data-reveal>
                Rooted in Greater Boston
              </h2>
              <div className="moon" data-reveal>
                <Image
                  src={EVENT.photos[4].src}
                  alt="Musicians of the Xi Yang Yang folk ensemble in traditional dress"
                  width={640}
                  height={480}
                  sizes="(min-width: 900px) 38vw, 86vw"
                />
              </div>
            </div>
            <div className="about-right">
              {ABOUT.map((block) => (
                <div key={block.title} className="about-block" data-reveal>
                  <h3 className="lead">{block.title}</h3>
                  <p>{block.text}</p>
                </div>
              ))}
              <a className="btn btn-accent" href={LINKS.join} target="_blank" rel="noopener" data-reveal>
                Become a member
              </a>
            </div>
          </div>
        </section>

        {/* Values: one item per poster line */}
        <section className="values" aria-labelledby="values-title">
          <h2 id="values-title" className="sr-only">
            Our values
          </h2>
          <ul className="poster">
            {VALUES.map((v) => (
              <li key={v.word} data-reveal>
                <span className="display">{v.word}</span>
                <span className="poster-detail">{v.detail}</span>
              </li>
            ))}
          </ul>
          <p className="values-note" data-reveal>
            {VALUES_NOTE}
          </p>
        </section>

        {/* Leadership: two portraits */}
        <section id="leadership" className="leaders" aria-labelledby="leaders-title">
          <div className="leaders-intro" data-reveal>
            <h2 id="leaders-title" className="head">
              Leadership
            </h2>
            <p>
              Volunteer leaders who connect the Massachusetts chapter with United Chinese Americans
              nationally.
            </p>
          </div>
          {LEADERS.map((p) => (
            <figure key={p.name} className="leader" data-reveal>
              <div className="leader-photo">
                <Image src={p.photo} alt={`Portrait of ${p.name}`} width={p.size} height={p.size} sizes="(min-width: 900px) 30vw, 92vw" />
              </div>
              <figcaption>
                <span className="lead leader-name">
                  {p.name} <span lang="zh-Hans">{p.zh}</span>
                </span>
                <span className="leader-title">{p.title}</span>
              </figcaption>
            </figure>
          ))}
        </section>

        {/* Our work: stacked folders with tabs */}
        <section id="work" className="work" aria-labelledby="work-title">
          <div className="work-intro" data-reveal>
            <h2 id="work-title" className="head">
              Our work
            </h2>
            <p>
              Six program areas. Five are running now, and Health and Wellness is being planned.
            </p>
          </div>
          <div className="folders">
            {WORK.map((w, i) => (
              <article
                key={w.name}
                className="folder"
                data-tone={["mist", "magenta", "navy"][i % 3]}
                style={{ "--n": i } as React.CSSProperties}
                aria-labelledby={`work-${i}`}
              >
                <div className="folder-strip">
                  <h3 id={`work-${i}`} className="folder-tab">
                    <Icon name={w.icon} />
                    {w.name}
                  </h3>
                  <span className="folder-status">{w.active ? "Running now" : "To be confirmed"}</span>
                </div>
                <div className="folder-body">
                  <div className="folder-photo" data-reveal>
                    <Image src={w.photo} alt={w.alt} width={1600} height={1000} sizes="(min-width: 900px) 55vw, 100vw" />
                  </div>
                  <div className="folder-text" data-reveal>
                    <p>{w.text}</p>
                    {w.past.length > 0 && (
                      <>
                        <h4 className="folder-sub">Past events</h4>
                        <ul className="folder-list">
                          {w.past.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Events: square plate, spare text */}
        <section id="events" className="events" aria-labelledby="events-title">
          <div className="events-head" data-reveal>
            <h2 id="events-title" className="head">
              Events
            </h2>
            <p>
              From the chapter&apos;s archive. More events are being added.
            </p>
          </div>
          <EventPost />
        </section>

        {/* Contact: photo strip, form bar */}
        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="strip" aria-hidden="true">
            <div className="strip-track">
              {[...STRIP, ...STRIP].map((p, i) => (
                <div key={`${p.src}-${i}`} className="strip-item" data-shape={i % 3}>
                  <Image src={p.src} alt="" width={p.w} height={p.h} sizes="240px" />
                </div>
              ))}
            </div>
          </div>
          <div className="contact-inner">
            <div className="contact-head" data-reveal>
              <h2 id="contact-title" className="head">
                Write to the chapter
              </h2>
              <p>
                Questions, partnership ideas or volunteering: email{" "}
                <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a> or use the form.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer: contact as the headline */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-logos">
            <Image src={LOGOS.seal} alt="UCA Massachusetts seal" width={772} height={772} className="footer-seal" />
            <Image src={LOGOS.wordmarkWhite} alt="UCA Massachusetts, United Chinese Americans Massachusetts Chapter" width={1672} height={601} className="footer-word" />
          </div>
          <nav className="footer-links" aria-label="Quick links">
            <h2 className="footer-sub">Quick links</h2>
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-subscribe">
            <h2 className="footer-sub">Subscribe</h2>
            <p>Stay updated with our latest news and events.</p>
            <a className="btn btn-light" href={LINKS.subscribe} target="_blank" rel="noopener">
              Subscribe
            </a>
          </div>
          <a className="footer-top-link" href="#home">
            Back to top
          </a>
        </div>

        <div className="footer-contact">
          <h2 className="footer-sub">Contact us</h2>
          <a className="display footer-email" href={`mailto:${LINKS.email}`}>
            communications
            <wbr />
            @ucausa.org
          </a>
        </div>

        <div className="footer-meta small">
          <span>Nonprofit and nonpartisan. A chapter of United Chinese Americans.</span>
          <span>
            Event photographs: 波士顿中文网. Harbor clip: &ldquo;Boston Harbor 1 2019-12-11&rdquo; by F ASTILY,{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Boston_Harbor_1_2019-12-11.webm">CC BY-SA 4.0</a>. Youth and
            wellness photographs: Unsplash via Picsum, to be replaced.
          </span>
          <span>Massachusetts, since 2016</span>
        </div>
      </footer>
      <Reveal />
    </>
  );
}
