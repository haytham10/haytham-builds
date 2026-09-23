import Image from "next/image";
import Link from "next/link";
import Fx from "./components/Fx";
import HeroRoute from "./components/HeroRoute";
import StartDates from "./components/StartDates";
import { Blocks, Gauge, ProblemArt, Waffle } from "./components/Visuals";
import {
  IconBrief,
  IconCalendar,
  IconCheckFrame,
  IconEnvelope,
  IconFilter,
  IconInbox,
  IconList,
  IconReply,
  IconScope,
} from "./components/Icons";
import {
  bonuses,
  bookingUrl,
  clientPart,
  comparison,
  email,
  faqs,
  fitNo,
  fitYes,
  included,
  linkedInCompany,
  linkedInPersonal,
  nav,
  phoneHref,
  phoneLabel,
  problems,
  timeline,
} from "./content";

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

const timelineIcons = [<IconFilter key="f" />, <IconInbox key="i" />, <IconEnvelope key="e" />, <IconCalendar key="c" />];
const includedIcons = [
  <IconList key="l" />,
  <IconScope key="s" />,
  <IconInbox key="i" />,
  <IconEnvelope key="e" />,
  <IconReply key="r" />,
  <IconBrief key="b" />,
];

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="arrow">
      <path d="M3.5 14.5 14.5 3.5M6 3.5h8.5V12" />
    </svg>
  );
}

function Tick() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mark mark-yes">
      <path d="m5 10.5 3.2 3.2L15 6.8" />
    </svg>
  );
}

function Cross() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mark mark-no">
      <path d="m6 6 8 8M14 6l-8 8" />
    </svg>
  );
}

function BookButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: string }) {
  return (
    <a href={bookingUrl} target="_blank" rel="noreferrer" className={`button button-${variant}`}>
      {children} <Arrow />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  return (
    <main>
      <Fx />

      <header className="site-header">
        <div className="site-header-inner">
          <a href="#top" className="brand" aria-label="Haytham Builds home">
            <Image src="/brand/haytham-builds-horizontal-black.svg" alt="Haytham Builds" width={184} height={42} unoptimized />
          </a>
          <nav aria-label="Primary navigation" className="nav-desktop">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-right">
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="header-cta">
              Book a call <Arrow />
            </a>
            <details className="nav-mobile">
              <summary aria-label="Open menu">
                <span />
                <span />
              </summary>
              <nav aria-label="Mobile navigation">
                {nav.map(([label, href]) => (
                  <a key={href} href={href}>
                    {label}
                  </a>
                ))}
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="nav-mobile-cta">
                  Book a call <Arrow />
                </a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="status-pill" data-reveal>
            <span className="status-sq" aria-hidden="true" />
            The First Five
            <span className="pill-soft">A 30-day outbound pilot for coaches</span>
          </p>
          <h1 data-reveal>
            You keep coaching.
            <span className="accent"> I run the outbound.</span>
          </h1>
          <p className="hero-lead" data-reveal>
            For coaches who want corporate clients in the UAE and the Gulf. I find the leaders who fit, reach them
            with researched emails I check myself, and work the replies until five qualified calls happen.
          </p>
          <div className="hero-actions" data-reveal>
            <BookButton>Book a call with Haytham</BookButton>
            <a href="#process" className="button button-secondary">
              See how it works
            </a>
          </div>
          <dl className="hero-facts" data-reveal>
            <div>
              <dt>Price</dt>
              <dd>$1,500 for 30&nbsp;days</dd>
            </div>
            <div>
              <dt>Guarantee</dt>
              <dd>5 calls or I keep sending free</dd>
            </div>
            <div>
              <dt>Next starts</dt>
              <dd>
                <StartDates />
              </dd>
            </div>
          </dl>
        </div>
        <div className="hero-visual" data-reveal>
          <HeroRoute />
        </div>
      </section>

      {/* ---------- numbers ---------- */}
      <section className="numbers" aria-labelledby="numbers-title">
        <div className="numbers-inner">
          <div className="numbers-head" data-reveal>
            <Eyebrow>
              <span id="numbers-title">Track record</span>
            </Eyebrow>
            <p>
              Five years of outreach for coaches. First as an account manager at an outreach firm, now under my own
              name.
            </p>
          </div>
          <div className="numbers-grid">
            <article className="stat" data-reveal>
              <Waffle filled={100} label="About 100 coaches, one square each" />
              <strong>
                <span data-count="100" data-prefix="~">
                  ~100
                </span>
              </strong>
              <span className="stat-label">coaches over 5+ years</span>
            </article>
            <article className="stat" data-reveal style={{ transitionDelay: ".06s" }}>
              <span className="quad">
                <Blocks total={4} filled={4} label="Four blocks of AED 100,000" />
              </span>
              <strong>
                <span data-count="400" data-suffix="K+">
                  400K+
                </span>
              </strong>
              <span className="stat-label">AED in client revenue, last two years</span>
            </article>
            <article className="stat" data-reveal style={{ transitionDelay: ".12s" }}>
              <Waffle filled={12} label="12 out of 100" />
              <strong>
                <span data-count="12" data-suffix="%">
                  12%
                </span>
              </strong>
              <span className="stat-label">reply rate on cold outreach in the Gulf</span>
            </article>
            <article className="stat" data-reveal style={{ transitionDelay: ".18s" }}>
              <Waffle filled={68} label="68 out of 100" />
              <strong>
                <span data-count="68" data-suffix="%">
                  68%
                </span>
              </strong>
              <span className="stat-label">of sales calls became clients</span>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- problem ---------- */}
      <section className="problem section" id="problem">
        <div className="section-head" data-reveal>
          <Eyebrow>What coaches tell me</Eyebrow>
          <h2>
            Referrals are a good way to get clients. <span className="accent">They are just not consistent.</span>
          </h2>
        </div>
        <div className="problem-grid">
          {problems.map((p, i) => (
            <article key={p.title} className="problem-card" data-reveal style={{ transitionDelay: `${i * 0.06}s` }}>
              <ProblemArt kind={p.art} />
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </article>
          ))}
          <article className="problem-card problem-answer" data-reveal style={{ transitionDelay: ".3s" }}>
            <p>
              The fix is not more volume. It is <strong>fewer people who are closer to a yes</strong>, reached
              properly while you keep coaching.
            </p>
            <a href="#process" className="text-link">
              How the pilot does it <Arrow />
            </a>
          </article>
        </div>
      </section>

      {/* ---------- process ---------- */}
      <section className="process section" id="process">
        <div className="section-head" data-reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2>
            One audience, four moves. <span className="accent">Thirty days.</span>
          </h2>
        </div>
        <ol className="timeline" data-reveal>
          {timeline.map((t, i) => (
            <li key={t.title} style={{ "--i": i } as CSSVars}>
              <span className="tl-node" aria-hidden="true">
                {timelineIcons[i]}
              </span>
              <span className="tl-when">{t.when}</span>
              <h3>{t.title}</h3>
              <p>{t.copy}</p>
            </li>
          ))}
        </ol>

        <div className="your-part" data-reveal>
          <p className="your-part-title">
            <strong>Your part.</strong> Three things, and you keep coaching.
          </p>
          <ul>
            {clientPart.map((c, i) => (
              <li key={c.title}>
                <span className="yp-num">{i + 1}</span>
                <span>
                  <strong>{c.title}</strong>
                  <em>{c.copy}</em>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- brief ---------- */}
      <section className="brief-section section" id="brief">
        <div className="brief-layout">
          <div className="brief-copy" data-reveal>
            <Eyebrow>Before every call</Eyebrow>
            <h2>
              You never walk into a call <span className="accent">cold.</span>
            </h2>
            <p className="section-lead">
              Every call I book comes with a one-page brief, sent ahead of time. Here is what is on it.
            </p>
            <ol className="brief-keys">
              <li>
                <span className="key">1</span>
                <span>
                  <strong>Why they fit.</strong> The evidence that they belong on your calendar.
                </span>
              </li>
              <li>
                <span className="key">2</span>
                <span>
                  <strong>What they have said.</strong> Their own words from the email thread.
                </span>
              </li>
              <li>
                <span className="key">3</span>
                <span>
                  <strong>Questions to ask.</strong> Openers that fit their situation.
                </span>
              </li>
              <li>
                <span className="key">4</span>
                <span>
                  <strong>Gaps to clarify.</strong> What I could not confirm, so you ask.
                </span>
              </li>
              <li>
                <span className="key">5</span>
                <span>
                  <strong>A score out of 100.</strong> Fit and readiness, with the evidence. Never&nbsp;100.
                </span>
              </li>
            </ol>
          </div>

          <div className="doc-wrap" data-reveal style={{ transitionDelay: ".1s" }}>
            <article className="doc" aria-label="Example prospect brief">
              <header className="doc-head">
                <span className="doc-kind">
                  <span className="doc-sq" aria-hidden="true" /> Prospect brief
                </span>
                <span className="doc-badge">Example</span>
              </header>
              <div className="doc-who">
                <span className="doc-avatar" aria-hidden="true">
                  HP
                </span>
                <div>
                  <strong>Head of People</strong>
                  <span>Family-owned property developer, Dubai</span>
                </div>
                <span className="doc-when">Thu · 11:00 GST</span>
              </div>

              <div className="doc-row">
                <span className="key">1</span>
                <div>
                  <span className="doc-label">Why they fit</span>
                  <p>New leadership team hired this year. Owner-run, so the decision sits close to the top.</p>
                </div>
              </div>
              <div className="doc-row">
                <span className="key">2</span>
                <div>
                  <span className="doc-label">What they have said</span>
                  <p className="doc-quote">&ldquo;Do you run a workshop for the whole team before one-to-one work?&rdquo;</p>
                </div>
              </div>
              <div className="doc-split">
                <div className="doc-row">
                  <span className="key">3</span>
                  <div>
                    <span className="doc-label">Ask them</span>
                    <p>Who else signs off on a coaching budget?</p>
                  </div>
                </div>
                <div className="doc-row">
                  <span className="key">4</span>
                  <div>
                    <span className="doc-label">Clarify</span>
                    <p>Budget with HR, or with the founder?</p>
                  </div>
                </div>
              </div>
              <div className="doc-score">
                <span className="key">5</span>
                <div className="doc-gauge">
                  <Gauge value={74} />
                  <span className="doc-gauge-num">
                    <span data-count="74">74</span>
                    <small>/100</small>
                  </span>
                </div>
                <p>Strong fit. Budget owner unconfirmed. Replied twice with questions.</p>
              </div>
            </article>
            <p className="doc-note">Invented prospect. Real format.</p>
          </div>
        </div>
      </section>

      {/* ---------- comparison ---------- */}
      <section className="compare section" id="method">
        <div className="section-head" data-reveal>
          <Eyebrow>Why it gets replies</Eyebrow>
          <h2>
            Built for inboxes <span className="accent">that are already full.</span>
          </h2>
        </div>
        <div className="compare-table" data-reveal role="table" aria-label="The usual approach compared with mine">
          <div className="ct-row ct-head" role="row">
            <span role="columnheader" />
            <span role="columnheader">The usual approach</span>
            <span role="columnheader">
              <span className="ct-sq" aria-hidden="true" />
              How I run it
            </span>
          </div>
          {comparison.map((c, i) => (
            <div className="ct-row" role="row" key={c.row} style={{ "--i": i } as CSSVars}>
              <span role="rowheader" className="ct-label">
                {c.row}
              </span>
              <span role="cell" className="ct-usual">
                <Cross />
                {c.usual}
              </span>
              <span role="cell" className="ct-mine">
                <Tick />
                {c.mine}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- offer ---------- */}
      <section className="offer section" id="offer">
        <div className="section-head" data-reveal>
          <Eyebrow>The offer</Eyebrow>
          <h2>
            The First Five. <span className="accent">One price, one month, one audience.</span>
          </h2>
        </div>
        <div className="offer-grid">
          <div className="price-card" data-reveal>
            <div className="price-top">
              <span className="price-kicker">The First Five</span>
              <span className="price-cap">Max 6 clients at a time</span>
            </div>
            <p className="price">
              <span className="price-cur">$</span>
              <span data-count="1500" data-format="comma">
                1,500
              </span>
            </p>
            <p className="price-term">for 30 days, paid in full before setup</p>
            <div className="price-five" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} style={{ "--i": i } as CSSVars} />
              ))}
            </div>
            <p className="price-five-label">Five qualified calls, or I keep sending free</p>
            <BookButton variant="light">Book a call</BookButton>
            <p className="price-next">
              <span>Starts on the 1st or the 15th.</span>
              <span>
                Next: <StartDates />
              </span>
            </p>
          </div>

          <div className="included" data-reveal style={{ transitionDelay: ".08s" }}>
            <p className="mini-title">What the $1,500 covers</p>
            <ul className="included-grid">
              {included.map((item, i) => (
                <li key={item.title}>
                  <span className="inc-icon" aria-hidden="true">
                    {includedIcons[i]}
                  </span>
                  <strong>{item.title}</strong>
                  <span>{item.copy}</span>
                </li>
              ))}
            </ul>
            <p className="mini-title">Also yours</p>
            <ul className="bonus-list">
              {bonuses.map((b) => (
                <li key={b}>
                  <IconCheckFrame />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- guarantee ---------- */}
      <section className="guarantee" id="guarantee">
        <div className="guarantee-inner">
          <div className="section-head" data-reveal>
            <Eyebrow>The guarantee</Eyebrow>
            <h2>
              Five qualified calls in 30&nbsp;days. <span className="accent">Or I keep going for free.</span>
            </h2>
          </div>

          <div className="decision" data-reveal>
            <div className="d-root">
              <span className="d-day">Day 30</span>
              <strong>We count the qualified calls that actually happened.</strong>
              <span className="d-sub">Cancellations and no-shows do not count.</span>
            </div>
            <div className="d-branches">
              <div className="d-branch" style={{ "--i": 0 } as CSSVars}>
                <span className="d-count">
                  <Blocks total={5} filled={5} label="Five calls" />5 or more
                </span>
                <p>Pilot delivered. We decide together what comes next.</p>
              </div>
              <div className="d-branch d-hot" style={{ "--i": 1 } as CSSVars}>
                <span className="d-count">
                  <Blocks total={5} filled={2} label="One to four calls" />1 to 4
                </span>
                <p>I keep sending at no cost until the fifth call happens.</p>
              </div>
              <div className="d-branch d-hot" style={{ "--i": 2 } as CSSVars}>
                <span className="d-count">
                  <Blocks total={5} filled={0} label="Zero calls" />0
                </span>
                <p>
                  <strong>Your $1,500 back.</strong> You keep the research, the opening lines and the inboxes.
                </p>
              </div>
            </div>
          </div>

          <p className="guarantee-fine" data-reveal>
            The 30-day clock runs while your three conditions hold: replies within 24 hours, real slots on your
            calendar, and a fixed audience. If one slips, the clock pauses until it is back. This guarantees
            qualified calls, not clients or revenue. What happens on the call is yours.
          </p>
        </div>
      </section>

      {/* ---------- stories + fit ---------- */}
      <section className="stories section" id="results">
        <div className="section-head" data-reveal>
          <Eyebrow>When it works</Eyebrow>
          <h2>
            Real coaches. <span className="accent">Private names.</span>
          </h2>
        </div>
        <div className="story-grid">
          <article className="story story-lead" data-reveal>
            <span className="story-tag">Executive coach, Dubai. Outreach I ran.</span>
            <div>
              <Blocks total={6} filled={3} label="Six meetings, three signed" />
              <p className="story-figure">6 meetings in 30&nbsp;days. 3&nbsp;signed.</p>
              <p className="story-legend">
                <span className="lg lg-on" /> signed <span className="lg" /> meeting
              </p>
            </div>
          </article>
          <article className="story" data-reveal style={{ transitionDelay: ".08s" }}>
            <span className="story-tag">A coach I have worked with</span>
            <p className="story-text">Landed a retainer with one of Dubai&apos;s biggest developers.</p>
          </article>
          <article className="story story-quote" data-reveal style={{ transitionDelay: ".16s" }}>
            <span className="story-tag">To a coach worried about testimonials</span>
            <p className="story-text">&ldquo;You are the credibility. Buyers need to talk to you, not read about you.&rdquo;</p>
          </article>
        </div>

        <div className="fit" id="fit">
          <div className="fit-col fit-yes" data-reveal>
            <h3>This is for you if</h3>
            <ul>
              {fitYes.map((t) => (
                <li key={t}>
                  <Tick />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="fit-col fit-no" data-reveal style={{ transitionDelay: ".08s" }}>
            <h3>It is not for you if</h3>
            <ul>
              {fitNo.map((t) => (
                <li key={t}>
                  <Cross />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- about ---------- */}
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
          <Eyebrow>Who does the work</Eyebrow>
          <h2>Hi, I&apos;m Haytham.</h2>
          <p className="about-lead">Five years running outreach for coaches. I still do every part of it myself.</p>
          <ul className="about-points">
            <li>
              <strong>Started as an account manager</strong> at an outreach firm, about 100 coaches in.
            </li>
            <li>
              <strong>Now one person, six clients at most.</strong> You deal with me from the first call to the last.
            </li>
            <li>
              <strong>Burned by an agency once.</strong> They promised the world and nothing came back. So I do it by
              hand, count only what happens, and put a guarantee on it.
            </li>
            <li>
              <strong>A software and systems background,</strong> so I care about the whole process, not just the
              message.
            </li>
          </ul>
          <div className="about-links">
            <a href={linkedInPersonal} target="_blank" rel="noreferrer" className="text-link">
              Find me on LinkedIn <Arrow />
            </a>
            <a href={`mailto:${email}`} className="text-link">
              {email} <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="faq section" id="faq">
        <div className="faq-head" data-reveal>
          <Eyebrow>Questions</Eyebrow>
          <h2>
            What people <span className="accent">ask on the call.</span>
          </h2>
          <p className="section-lead">Anything else, ask me directly.</p>
          <BookButton variant="secondary">Book a call</BookButton>
        </div>
        <div className="faq-list" data-reveal>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                <span>{f.q}</span>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- final cta ---------- */}
      <section className="final-cta">
        <div className="final-grid" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} style={{ "--i": i } as CSSVars} />
          ))}
        </div>
        <div className="final-inner" data-reveal>
          <Eyebrow>
            Next pilots start <StartDates />
          </Eyebrow>
          <h2>
            Tell me who you coach and <span className="accent">who you want to reach.</span>
          </h2>
          <p>On the call I will tell you straight whether the pilot fits. If it does not, I will say so.</p>
          <div className="final-actions">
            <BookButton variant="light">Book a call with Haytham</BookButton>
            <a href={`mailto:${email}`} className="button button-ghost">
              Or email me
            </a>
          </div>
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
              <a href={linkedInCompany} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={bookingUrl} target="_blank" rel="noreferrer">
                Book a call
              </a>
              <a href={`mailto:${email}`}>Email</a>
              <a href={phoneHref}>{phoneLabel}</a>
            </div>
          </div>
          <p className="footer-wordmark" aria-hidden="true">
            Haytham Builds
          </p>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Haytham Builds LLC · Casablanca, working across markets</span>
            <span className="footer-legal">
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/refund-policy">Refunds</Link>
              <Link href="/terms-of-service">Terms</Link>
            </span>
          </div>
        </div>
      </footer>

      <div className="mobile-bar">
        <span>
          <strong>The First Five</strong> $1,500 · 30 days
        </span>
        <a href={bookingUrl} target="_blank" rel="noreferrer">
          Book a call <Arrow />
        </a>
      </div>
    </main>
  );
}
