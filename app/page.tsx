import Image from "next/image";
import Link from "next/link";
import Fx from "./components/Fx";
import {
  IconBars,
  IconBrief,
  IconCalendar,
  IconCheckCircle,
  IconCheckFrame,
  IconEnvelope,
  IconList,
  IconOrgChart,
  IconPeople,
  IconRoute,
  IconScope,
} from "./components/Icons";

const bookingUrl = "https://calendar.app.google/XCpJyd1jZ4tvqL3C9";

const funnel = [
  { stage: "Accounts researched", value: "120", width: "100%" },
  { stage: "Outreach written and sent", value: "96", width: "78%" },
  { stage: "Conversations opened", value: "24", width: "34%" },
  { stage: "Calls booked", value: "6", width: "16%" },
];

const steps = [
  {
    number: "01",
    tag: "Research",
    title: "Define the market",
    copy: "We get specific about the companies that should care, the problem you solve, and the signals that make an account worth pursuing.",
    icon: <IconScope />,
  },
  {
    number: "02",
    tag: "Targeting",
    title: "Build the account list",
    copy: "You get a focused list of organisations with a real reason to buy, not a database export dressed up as research.",
    icon: <IconList />,
  },
  {
    number: "03",
    tag: "Outreach",
    title: "Reach the right people",
    copy: "We identify the people who own the problem and the budget, verify the route in, and write outreach around what matters to them.",
    icon: <IconEnvelope />,
  },
  {
    number: "04",
    tag: "Booking",
    title: "Turn interest into calls",
    copy: "We run the follow-up, handle replies, and put a meeting on your calendar when the problem, timing, and fit are real.",
    icon: <IconCalendar />,
  },
];

const proofItems = [
  {
    title: "Account fit",
    copy: "The evidence that this company belongs on your list. A reason, not a hunch.",
    icon: <IconCheckFrame />,
  },
  {
    title: "Buyer map",
    copy: "Who owns the problem, who can move the budget, and how the two relate.",
    icon: <IconOrgChart />,
  },
  {
    title: "Message brief",
    copy: "A relevant reason to start this particular conversation, written down before anything is sent.",
    icon: <IconBrief />,
  },
  {
    title: "Contact path",
    copy: "A verified route in, across email and LinkedIn, so nothing lands in the wrong inbox.",
    icon: <IconRoute />,
  },
];

const results = [
  {
    value: "416",
    prefix: "AED ",
    suffix: "K+",
    label: "Revenue closed from pipeline we built",
    note: "Across client engagements in outbound-led services",
    icon: <IconBars />,
  },
  {
    value: "120",
    prefix: "",
    suffix: "+",
    label: "Qualified meetings booked",
    note: "Counted only when problem, timing and fit were real",
    icon: <IconCheckCircle />,
  },
  {
    value: "50",
    prefix: "",
    suffix: "+",
    label: "Clients closed from those meetings",
    note: "Conversations that started completely cold",
    icon: <IconPeople />,
  },
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
            <a href="#results">Results</a>
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
            Taking on new clients
            <span className="pill-sep" aria-hidden="true" />
            <span className="pill-soft">Founder-led outbound for B2B services</span>
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

        <aside className="panel" aria-label="Sample pipeline snapshot" data-reveal style={{ transitionDelay: ".2s" }}>
          <div className="panel-head">
            <span className="panel-label">
              <span className="panel-mark" aria-hidden="true" />
              Pipeline snapshot
            </span>
            <span className="panel-badge">Illustrative</span>
          </div>
          <p className="panel-sub">One offer, one month of work, start to finish.</p>

          <ul className="funnel">
            {funnel.map((row, i) => (
              <li key={row.stage} className="funnel-row">
                <span className="funnel-stage">{row.stage}</span>
                <span className="funnel-value">{row.value}</span>
                <span className="funnel-bar" aria-hidden="true">
                  <span style={{ width: row.width, transitionDelay: `${0.35 + i * 0.09}s` }} />
                </span>
              </li>
            ))}
          </ul>

          <div className="panel-foot">
            <div>
              <span>Reply rate</span>
              <strong>25%</strong>
            </div>
            <div>
              <span>Research to call</span>
              <strong>5%</strong>
            </div>
            <div>
              <span>Reporting</span>
              <strong>Weekly</strong>
            </div>
          </div>
          <p className="panel-note">
            This is the view you get each week, with every account named and every reason written down.
          </p>
        </aside>
      </section>

      <section className="marquee" aria-label="Selected organisations">
        <p>Experience includes work with or alongside teams at</p>
        <div className="marquee-viewport">
          <LogoTrack />
          <LogoTrack hidden />
        </div>
      </section>

      <section className="results section" id="results" aria-label="Results to date">
        <div className="results-head" data-reveal>
          <p className="eyebrow">Results to date</p>
          <h2>Two years of pipeline work, in <em>three numbers</em>.</h2>
          <p className="results-lead">
            Built the same way every time: research first, then outreach, then a call that
            was worth putting on the calendar.
          </p>
        </div>
        <div className="results-grid">
          {results.map((item, i) => (
            <article key={item.label} className="stat" data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="stat-icon" aria-hidden="true">{item.icon}</span>
              <strong>
                <span data-count={item.value} data-prefix={item.prefix} data-suffix={item.suffix}>
                  {item.prefix}{item.value}{item.suffix}
                </span>
              </strong>
              <span className="stat-label">{item.label}</span>
              <span className="stat-note">{item.note}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="process">
        <div className="process-rail">
          <div className="process-rail-inner" data-reveal>
            <p className="eyebrow">How it works</p>
            <h2>Research first.<br />Outreach second.<br /><em>Meetings that count.</em></h2>
            <p className="rail-copy">
              Four steps, run in order, with nothing skipped. A meeting only goes on your
              calendar when the problem, the timing, and the fit are real.
            </p>
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="text-link">
              Walk through it with me <Arrow />
            </a>
          </div>
        </div>
        <ol className="steps">
          {steps.map((step, i) => (
            <li key={step.number} className="step" data-reveal style={{ transitionDelay: `${i * 0.06}s` }}>
              <span className="step-icon" aria-hidden="true">{step.icon}</span>
              <div className="step-body">
                <p className="step-meta">
                  <span className="step-number">{step.number}</span>
                  <span className="step-tag">{step.tag}</span>
                </p>
                <h3>{step.title}</h3>
                <p className="step-copy">{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="proof section" id="proof">
        <div className="proof-heading" data-reveal>
          <p className="eyebrow">The work</p>
          <h2>You can see why every account <em>made the list</em>.</h2>
          <p className="proof-lead">
            No mystery list and no generic sequence. The research behind the outreach is
            visible, so you know who we are contacting, why they fit, and what gives us a
            credible route in. Every account ships with four things.
          </p>
        </div>
        <div className="proof-grid">
          {proofItems.map((item, index) => (
            <article key={item.title} data-reveal style={{ transitionDelay: `${index * 0.07}s` }}>
              <span className="proof-icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span className="proof-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
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
          <span className="about-caption">Haytham Mokhtari, Casablanca</span>
        </div>
        <div className="about-copy" data-reveal style={{ transitionDelay: ".1s" }}>
          <p className="eyebrow">Founder and operator</p>
          <h2>Hi, I&apos;m Haytham.</h2>
          <p className="about-lead">
            I run Haytham Builds LLC myself. I do the research, build the lists, write the
            outreach, and keep the system moving.
          </p>
          <p>
            My background is in software and systems. It taught me to pay attention to the whole
            process, not just the final message. You will not be handed to an account manager
            after the first call. You work with me directly, from research to booked meeting.
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
            I&apos;ll give you a direct answer, even if that answer is no.
          </p>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="button button-light">
            Book a conversation <Arrow />
          </a>
        </div>
      </section>

      <footer className="site-footer">
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
              <a href="https://www.linkedin.com/company/haytham-builds" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={bookingUrl} target="_blank" rel="noreferrer">Book a call</a>
              <a href="mailto:haythammokhtari@haythambuilds.com">Email</a>
              <a href="tel:+19145065175">+1 914 506 5175</a>
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/refund-policy">Refunds</Link>
              <Link href="/terms-of-service">Terms</Link>
            </div>
          </div>
          <p className="footer-wordmark" aria-hidden="true">Haytham Builds</p>
          <div className="footer-bottom">
            <span>Casablanca / Working across markets</span>
            <span>© {new Date().getFullYear()} Haytham Builds LLC</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
