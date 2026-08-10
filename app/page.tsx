import Image from "next/image";
import Fx from "./components/Fx";

const bookingUrl = "https://calendar.app.google/XCpJyd1jZ4tvqL3C9";

const steps = [
  {
    number: "01",
    title: "Define the market",
    copy: "We get specific about the companies that should care, the problem you solve, and the signals that make an account worth pursuing.",
    tag: "Research",
  },
  {
    number: "02",
    title: "Build the account list",
    copy: "You get a focused list of organisations with a real reason to buy — not a database export dressed up as research.",
    tag: "Targeting",
  },
  {
    number: "03",
    title: "Reach the right people",
    copy: "We identify the people who own the problem and the budget, verify the route in, and write outreach around what matters to them.",
    tag: "Outreach",
  },
  {
    number: "04",
    title: "Turn interest into calls",
    copy: "We run the follow-up, handle replies, and put a meeting on your calendar when the problem, timing, and fit are real.",
    tag: "Booking",
  },
];

const proofItems = [
  ["Account fit", "The evidence that this company belongs on the list — not a hunch, a reason."],
  ["Buyer map", "Who owns the problem, who can move the budget, and how they relate."],
  ["Message brief", "A relevant reason to start this particular conversation, in writing."],
  ["Contact path", "A verified route in, across email and LinkedIn."],
];

const logos = [
  ["CoachBase", "/logos/coachbase.svg"],
  ["McKinsey & Company", "/logos/mckinsey.svg"],
  ["Oliver Wyman", "/logos/oliver-wyman.svg"],
  ["WWA Corporate Coaching", "/logos/wwa.svg"],
  ["BCG", "/logos/bcg.svg"],
  ["Stanton Chase", "/logos/stanton-chase.svg"],
];

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="arrow">
      <path d="M3.5 14.5 14.5 3.5M6 3.5h8.5V12" />
    </svg>
  );
}

function LogoTrack({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={hidden || undefined}>
      {logos.map(([name, src]) => (
        <div className="marquee-item" key={name}>
          <Image src={src} alt={hidden ? "" : name} width={180} height={56} unoptimized />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Fx />
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <div className="site-header-inner">
          <a href="#top" className="brand" aria-label="Haytham Builds home">
            <Image
              src="/brand/haytham-builds-horizontal-black.svg"
              alt="Haytham Builds"
              width={184}
              height={42}
              unoptimized
            />
          </a>
          <nav aria-label="Primary navigation">
            <a href="#process">How it works</a>
            <a href="#proof">The work</a>
            <a href="#about">About</a>
          </nav>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="header-cta">
            Book a call <Arrow />
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="status-pill" data-reveal>
            <span className="status-dot" aria-hidden="true" />
            Taking on new clients — founder-led outbound for B2B services
          </p>
          <h1 data-reveal style={{ transitionDelay: ".08s" }}>
            A calendar full of the <em>right</em> conversations.
          </h1>
          <p className="hero-lead" data-reveal style={{ transitionDelay: ".16s" }}>
            Haytham Builds finds the companies that should care, reaches the people who own
            the problem, and turns relevant outreach into qualified sales calls.
          </p>
          <div className="hero-actions" data-reveal style={{ transitionDelay: ".24s" }}>
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="button button-primary">
              Talk to Haytham <Arrow />
            </a>
            <a href="#process" className="button button-secondary">See how it works</a>
          </div>
        </div>

        <aside className="dossier" aria-label="Sample account dossier" data-reveal style={{ transitionDelay: ".2s" }}>
          <div className="dossier-head">
            <span className="dossier-label">Account dossier</span>
            <span className="dossier-badge">Illustrative sample</span>
          </div>
          <div className="dossier-title">
            <span className="dossier-dot" aria-hidden="true" />
            <strong>Meridian Advisory Group</strong>
            <span className="dossier-fit">Fit — strong</span>
          </div>
          <dl className="dossier-rows">
            <div><dt>Why they made the list</dt><dd>Opened a second market, no outbound motion in place</dd></div>
            <div><dt>Buyer</dt><dd>Managing partner — owns growth, controls budget</dd></div>
            <div><dt>Message brief</dt><dd>Anchored to their expansion, not a generic pitch</dd></div>
            <div><dt>Route in</dt><dd>Verified email + LinkedIn, warm angle via shared network</dd></div>
          </dl>
          <div className="dossier-status">
            <span>Status</span>
            <strong>Reply received → call booked</strong>
          </div>
          <p className="dossier-note">Every account we contact is researched to this depth — and you can see all of it.</p>
        </aside>
      </section>

      <section className="marquee" aria-label="Selected organisations">
        <p>Experience includes work with or alongside teams at</p>
        <div className="marquee-viewport">
          <LogoTrack />
          <LogoTrack hidden />
        </div>
      </section>

      <section className="results" aria-label="Selected client results">
        <div className="results-inner">
          <p data-reveal>Results across two years of client pipeline work</p>
          <div data-reveal style={{ transitionDelay: ".05s" }}>
            <strong><span data-count="416" data-prefix="AED " data-suffix="K+">AED 416K+</span></strong>
            <span>revenue from pipeline</span>
          </div>
          <div data-reveal style={{ transitionDelay: ".12s" }}>
            <strong><span data-count="120" data-suffix="+">120+</span></strong>
            <span>qualified meetings booked</span>
          </div>
          <div data-reveal style={{ transitionDelay: ".19s" }}>
            <strong><span data-count="50" data-suffix="+">50+</span></strong>
            <span>clients closed</span>
          </div>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="process-rail">
          <div className="process-rail-inner" data-reveal>
            <p className="eyebrow">How it works</p>
            <h2>Research first.<br />Outreach second.<br /><em>Meetings that count.</em></h2>
            <p className="rail-copy">
              A meeting only goes on your calendar when the problem, the timing, and the fit are real.
            </p>
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="text-link">
              Walk through it with me <Arrow />
            </a>
          </div>
        </div>
        <div className="steps">
          {steps.map((step, i) => (
            <article key={step.number} className="step" data-reveal style={{ transitionDelay: `${i * 0.06}s` }}>
              <span className="step-number" aria-hidden="true">{step.number}</span>
              <div className="step-body">
                <span className="step-tag">{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof section" id="proof">
        <div className="proof-heading" data-reveal>
          <p className="eyebrow">The work</p>
          <h2>You can see why every account made the list.</h2>
          <p className="proof-lead">
            No mystery list and no generic sequence. The research behind the outreach is
            visible, so you know who we are contacting, why they fit, and what gives us a
            credible route in. Every account ships with four things:
          </p>
        </div>
        <div className="proof-grid">
          {proofItems.map(([title, copy], index) => (
            <article key={title} data-reveal style={{ transitionDelay: `${index * 0.07}s` }}>
              <span className="proof-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-image" data-reveal>
          <Image
            src="/portrait-haytham.webp"
            alt="Haytham Mokhtari, founder of Haytham Builds"
            width={720}
            height={820}
            unoptimized
          />
          <span className="about-caption">Haytham Mokhtari — Casablanca</span>
        </div>
        <div className="about-copy" data-reveal style={{ transitionDelay: ".1s" }}>
          <p className="eyebrow">Founder / operator</p>
          <h2>Hi, I&apos;m Haytham.</h2>
          <p className="about-lead">
            I do the research, build the lists, write the outreach, and keep the system moving.
          </p>
          <p>
            My background is in software and systems. It taught me to pay attention to the whole
            process, not just the final message. You will not be handed to an account manager
            after the first call — you work with me directly, from research to booked meeting.
          </p>
          <a
            href="https://www.linkedin.com/in/haytham-mokhtari/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Find me on LinkedIn <Arrow />
          </a>
        </div>
      </section>

      <section className="final-cta section">
        <div data-reveal>
          <p className="eyebrow">Have an offer in mind?</p>
          <h2>Let&apos;s see if outbound <em>makes sense</em> for it.</h2>
          <p>
            Send me the offer, who it is for, and where you want to sell it.
            I&apos;ll give you a direct answer — even if that answer is no.
          </p>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="button button-light">
            Book a conversation <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <Image
              src="/brand/haytham-builds-horizontal-inverse.svg"
              alt="Haytham Builds"
              width={170}
              height={39}
              unoptimized
            />
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/haytham-mokhtari/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={bookingUrl} target="_blank" rel="noreferrer">Book a call</a>
            </div>
          </div>
          <p className="footer-wordmark" aria-hidden="true">Haytham Builds</p>
          <div className="footer-bottom">
            <span>Casablanca / Working across markets</span>
            <span>© {new Date().getFullYear()} Haytham Builds</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
