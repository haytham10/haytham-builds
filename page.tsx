"use client";

import { useEffect, useRef } from "react";
import FrameScene from "./components/FrameScene";

const bookingUrl = "https://calendar.app.google/XCpJyd1jZ4tvqL3C9";

const steps = [
  ["01", "Find the companies", "A short list of organisations with a real reason to care about what you sell."],
  ["02", "Find the right person", "The person who owns the problem, the budget, or both. Then we verify the route in."],
  ["03", "Start the conversation", "Research turned into outreach that gives the person a reason to answer."],
  ["04", "Book the call", "When there is genuine interest and a real fit, the meeting goes on your calendar."],
];

const logos = [
  ["WWA Corporate Coaching", "/logos/wwa.svg", "wide"],
  ["BCG", "/logos/bcg.svg", "square"],
  ["Stanton Chase", "/logos/stanton-chase.svg", "wide"],
  ["CoachBase", "/logos/coachbase.svg", "wide"],
  ["McKinsey & Company", "/logos/mckinsey.svg", "wide"],
  ["Oliver Wyman", "/logos/oliver-wyman.svg", "wide"],
];

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="arrow">
      <path d="M3.5 14.5 14.5 3.5M6 3.5h8.5V12" />
    </svg>
  );
}

function Mark({ dark = false }: { dark?: boolean }) {
  return (
    <img
      className="hb-mark"
      src={dark ? "/brand/haytham-builds-symbol-black.svg" : "/brand/haytham-builds-symbol-inverse.svg"}
      alt=""
    />
  );
}

export default function Home() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={rootRef}>
      <section className="hero" id="top">
        <header className="nav-shell">
          <a href="#top" className="brand" aria-label="Haytham Builds home">
            <img src="/brand/haytham-builds-horizontal-inverse.svg" alt="Haytham Builds" />
          </a>
          <nav aria-label="Primary navigation">
            <a href="#process">Process</a>
            <a href="#work">The work</a>
            <a href="#about">About</a>
          </nav>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="nav-book">
            Book a call <Arrow />
          </a>
        </header>

        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy">
          <p className="kicker"><span /> Haytham Builds / Outbound systems</p>
          <h1>We build the<br /><em>pipeline.</em></h1>
          <p className="hero-lead">
            You have something worth selling. We find the companies that should be buying it,
            reach the right person inside, and book the call when there&apos;s a real fit.
          </p>
          <div className="hero-actions">
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="button button-sand">
              Talk to Haytham <Arrow />
            </a>
            <a href="#work" className="text-link">See the work <span>↓</span></a>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-label art-label-top">THE RESOLVED FRAME</div>
          <FrameScene />
          <div className="art-label art-label-bottom">MARKET → BUYER → CONVERSATION</div>
        </div>

        <div className="hero-proof">
          <p>Two years of client pipeline work</p>
          <div><strong><small>AED</small>416K+</strong><span>Revenue from pipeline</span></div>
          <div><strong>120+</strong><span>Qualified meetings</span></div>
          <div><strong>50+</strong><span>Clients closed</span></div>
        </div>
      </section>

      <section className="truth-section">
        <div className="section-index"><span>01</span><i /></div>
        <div className="truth-copy" data-reveal>
          <p>THE PROBLEM</p>
          <h2>The offer isn&apos;t usually the problem.</h2>
          <h2 className="muted">Getting it in front of the right company is.</h2>
        </div>
        <div className="truth-note" data-reveal>
          <Mark dark />
          <p>
            Referrals come when they come. Content can build attention. Neither gives you a pipeline
            you can plan around.
          </p>
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-intro" data-reveal>
          <div className="section-index section-index-light"><span>02</span><i /></div>
          <p className="mini-label">WHAT ACTUALLY HAPPENS</p>
          <h2>Four moves.<br /><em>No theatre.</em></h2>
          <p className="process-summary">Research first. Outreach second. A meeting only counts when the fit is real.</p>
        </div>
        <div className="step-stack">
          {steps.map(([number, title, copy], index) => (
            <article className="step-card" key={number} data-reveal style={{ "--step": index } as React.CSSProperties}>
              <div className="step-number">{number}</div>
              <div className="step-copy"><h3>{title}</h3><p>{copy}</p></div>
              <div className={`step-visual visual-${number}`} aria-hidden="true">
                <i /><i /><i /><i />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-head" data-reveal>
          <div>
            <div className="section-index"><span>03</span><i /></div>
            <p className="mini-label">A LOOK INSIDE</p>
          </div>
          <h2>This is<br />the work.</h2>
          <p>No black box. You can see why the company made the list, who owns the decision, and what gives us a route in.</p>
        </div>

        <div className="work-grid">
          <article className="account-card card" data-reveal>
            <div className="card-top"><span>ACCOUNT / 07</span><span className="verified">● VERIFIED</span></div>
            <div className="account-main">
              <p>TARGET ACCOUNT</p>
              <h3>Regional<br />services group</h3>
              <span>UAE · 1,000–5,000 employees</span>
            </div>
            <div className="account-score"><span>FIT SCORE</span><strong>87</strong><small>/100</small></div>
            <div className="account-foot"><span>WHY IT FITS</span><p>New commercial leader. Team growth visible. Relevant operating problem surfaced.</p></div>
          </article>

          <article className="trigger-card card card-dark" data-reveal>
            <div className="card-top"><span>BUYING SIGNAL</span><span>02 / 04</span></div>
            <div className="radar" aria-hidden="true"><i /><i /><i /><b /></div>
            <div><p className="card-eyebrow">WHY NOW</p><h3>Something changed.</h3><p>A new leader arrived. A team expanded. A gap became visible.</p></div>
          </article>

          <article className="buyer-card card" data-reveal>
            <div className="card-top"><span>BUYER MAP</span><span>2 CONTACTS</span></div>
            <div className="buyer-map" aria-hidden="true">
              <div className="buyer-node buyer-a">Commercial Director</div>
              <span />
              <div className="buyer-core">ACCOUNT</div>
              <span />
              <div className="buyer-node buyer-b">People &amp; Culture</div>
            </div>
            <p>We map the person who owns the problem and the person who can move the budget.</p>
          </article>

          <article className="path-card card" data-reveal>
            <div className="card-top"><span>CONTACT PATH</span><span>READY</span></div>
            <div className="path-lines" aria-hidden="true"><i /><i /><i /><b /></div>
            <div className="path-status"><span>DIRECT EMAIL</span><strong>Verified</strong></div>
            <div className="path-status"><span>LINKEDIN</span><strong>Active</strong></div>
          </article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-image" data-reveal>
          <img src="/portrait-haytham.webp" alt="Haytham Mokhtari, founder of Haytham Builds" />
          <div className="image-caption"><span>HAYTHAM MOKHTARI</span><span>FOUNDER / OPERATOR</span></div>
        </div>
        <div className="about-copy" data-reveal>
          <div className="section-index"><span>04</span><i /></div>
          <p className="mini-label">WHO IS DOING THE WORK</p>
          <h2>Hi, I&apos;m<br />Haytham.</h2>
          <p className="about-lead">I do the research, build the lists, write the outreach and keep the whole thing moving.</p>
          <p>
            My background is in software and systems. It taught me to look at the whole machine—not
            just the message someone sees at the end. You won&apos;t get handed to an account manager after the first call.
          </p>
          <a href="https://www.linkedin.com/in/haytham-mokhtari/" target="_blank" rel="noreferrer" className="text-link text-link-dark">
            Find me on LinkedIn <Arrow />
          </a>
        </div>
      </section>

      <section className="experience">
        <div className="experience-head"><p>Experience includes work with or alongside teams at</p><span>SELECTED ORGANISATIONS</span></div>
        <div className="logo-track">
          {[...logos, ...logos].map(([name, src, shape], index) => (
            <div className="logo-item" key={`${name}-${index}`} aria-hidden={index >= logos.length}>
              <img src={src} alt={index < logos.length ? name : ""} className={`logo-${shape}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-ambient" />
        <div className="cta-mark"><Mark /></div>
        <div className="cta-copy" data-reveal>
          <p>HAVE AN OFFER IN MIND?</p>
          <h2>Tell me what<br />you&apos;re selling.</h2>
          <p>Send me the offer, who it&apos;s for, and where you want to sell it. I&apos;ll tell you honestly whether outbound makes sense.</p>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="button button-sand">Book a conversation <Arrow /></a>
        </div>
      </section>

      <footer>
        <img src="/brand/haytham-builds-horizontal-inverse.svg" alt="Haytham Builds" />
        <p>Casablanca · Working across markets</p>
        <div><a href="https://www.linkedin.com/in/haytham-mokhtari/" target="_blank" rel="noreferrer">LinkedIn</a><a href={bookingUrl} target="_blank" rel="noreferrer">Book a call</a></div>
        <span>© {new Date().getFullYear()} Haytham Builds</span>
      </footer>
    </main>
  );
}
