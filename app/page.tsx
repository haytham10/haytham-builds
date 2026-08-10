import Image from "next/image";

const bookingUrl = "https://calendar.app.google/XCpJyd1jZ4tvqL3C9";

const steps = [
  {
    number: "01",
    title: "Define the market",
    copy: "We get specific about the companies that should care, the problem you solve, and the signals that make an account worth pursuing.",
  },
  {
    number: "02",
    title: "Build the account list",
    copy: "You get a focused list of organisations with a real reason to buy, not a database export dressed up as research.",
  },
  {
    number: "03",
    title: "Reach the right people",
    copy: "We identify the people who own the problem and the budget, verify the route in, and write outreach around what matters to them.",
  },
  {
    number: "04",
    title: "Turn interest into calls",
    copy: "We run the follow-up, handle replies, and put a meeting on your calendar when the problem, timing, and fit are real.",
  },
];

const proofItems = [
  ["Account fit", "The evidence that this company belongs on the list."],
  ["Buyer map", "Who owns the problem and who can move the budget."],
  ["Message brief", "A relevant reason to start this particular conversation."],
  ["Contact path", "A verified route across email and LinkedIn."],
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

export default function Home() {
  return (
    <main>
      <header className="site-header">
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
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Founder-led outbound for B2B services</p>
          <h1>Build a reliable outbound pipeline.</h1>
          <p className="hero-lead">
            Haytham Builds finds the right companies, reaches the people who own the problem,
            and turns relevant outreach into qualified sales conversations.
          </p>
          <div className="hero-actions">
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="button button-primary">
              Talk to Haytham <Arrow />
            </a>
            <a href="#process" className="button button-secondary">See how it works</a>
          </div>
        </div>

        <aside className="hero-card" aria-label="What Haytham Builds handles">
          <p>What we handle</p>
          <ul>
            <li><span>01</span>Account research</li>
            <li><span>02</span>Decision-maker mapping</li>
            <li><span>03</span>Personalised outreach</li>
            <li><span>04</span>Reply handling and booking</li>
          </ul>
          <p className="hero-card-note">You work directly with Haytham from research to booked call.</p>
        </aside>
      </section>

      <section className="results" aria-label="Selected client results">
        <p>Results across two years of client pipeline work</p>
        <div><strong>AED 416K+</strong><span>revenue from pipeline</span></div>
        <div><strong>120+</strong><span>qualified meetings</span></div>
        <div><strong>50+</strong><span>clients closed</span></div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>A straightforward outbound system.</h2>
          <p>Research first. Outreach second. A meeting only counts when there is a genuine fit.</p>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <article key={step.number} className="step">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof section" id="proof">
        <div className="proof-copy">
          <p className="eyebrow">The work</p>
          <h2>You can see why every account made the list.</h2>
          <p>
            No mystery list and no generic sequence. The research behind the outreach is visible,
            so you know who we are contacting, why they fit, and what gives us a credible route in.
          </p>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="text-link">
            Talk through your market <Arrow />
          </a>
        </div>
        <div className="proof-list">
          {proofItems.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-image">
          <Image
            src="/portrait-haytham.webp"
            alt="Haytham Mokhtari, founder of Haytham Builds"
            width={720}
            height={820}
            unoptimized
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Founder / operator</p>
          <h2>Hi, I&apos;m Haytham.</h2>
          <p className="about-lead">
            I do the research, build the lists, write the outreach, and keep the system moving.
          </p>
          <p>
            My background is in software and systems. It taught me to pay attention to the whole
            process, not just the final message. You will not be handed to an account manager after
            the first call. You work with me directly.
          </p>
          <a href="https://www.linkedin.com/in/haytham-mokhtari/" target="_blank" rel="noreferrer" className="text-link">
            Find me on LinkedIn <Arrow />
          </a>
        </div>
      </section>

      <section className="experience section" aria-label="Selected organisations">
        <div className="experience-heading">
          <p>Experience includes work with or alongside teams at</p>
          <span>Selected organisations</span>
        </div>
        <div className="logo-grid">
          {logos.map(([name, src]) => (
            <div className="logo-item" key={name}>
              <Image src={src} alt={name} width={180} height={56} unoptimized />
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta section">
        <p className="eyebrow">Have an offer in mind?</p>
        <h2>Let&apos;s see if outbound makes sense for it.</h2>
        <p>Send me the offer, who it is for, and where you want to sell it. I&apos;ll give you a direct answer.</p>
        <a href={bookingUrl} target="_blank" rel="noreferrer" className="button button-light">
          Book a conversation <Arrow />
        </a>
      </section>

      <footer>
        <Image src="/brand/haytham-builds-horizontal-inverse.svg" alt="Haytham Builds" width={170} height={39} unoptimized />
        <p>Casablanca / Working across markets</p>
        <div>
          <a href="https://www.linkedin.com/in/haytham-mokhtari/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={bookingUrl} target="_blank" rel="noreferrer">Book a call</a>
        </div>
        <span>© {new Date().getFullYear()} Haytham Builds</span>
      </footer>
    </main>
  );
}
