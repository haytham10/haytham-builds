"use client";

import { useEffect, useRef, useState } from "react";
import { routePhases } from "../content";

/* The 30-day pilot as one picture: each square is a prospect.
   Research fills the grid, the CRM check removes a few, sending turns the rest
   ink, replies light up in sand, and five become qualified calls.
   It is an illustration of the process, not a live campaign, and it shows no
   rates. Server render and reduced motion show the finished state. */

const COLS = 24;
const ROWS = 10;
const TOTAL = COLS * ROWS; // 240, inside the "200 to 300" range
const HOLD = [2300, 2100, 2300, 2300, 3600];

// Deterministic spread so server and client agree.
function pick(count: number, seed: number, exclude: Set<number> = new Set()) {
  const out = new Set<number>();
  let x = seed;
  while (out.size < count) {
    x = (x * 1103515245 + 12345) % 2147483648;
    const i = x % TOTAL;
    if (!exclude.has(i)) out.add(i);
  }
  return out;
}
const REMOVED = pick(16, 7);
const REPLIED = pick(14, 91, REMOVED);
const BOOKED = new Set(Array.from(REPLIED).slice(0, 5));

export default function HeroRoute() {
  const [phase, setPhase] = useState(4);
  const [cycle, setCycle] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = true;
    let timer: ReturnType<typeof setTimeout>;
    let current = 4;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    if (ref.current) io.observe(ref.current);

    const advance = () => {
      if (visible) {
        current = current === 4 ? 0 : current + 1;
        if (current === 0) setCycle((c) => c + 1);
        setPhase(current);
      }
      timer = setTimeout(advance, HOLD[current]);
    };
    timer = setTimeout(advance, 1600);
    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  const squares = [];
  for (let i = 0; i < TOTAL; i++) {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    let state = "on";
    if (phase >= 1 && REMOVED.has(i)) state = "removed";
    else if (phase >= 4 && BOOKED.has(i)) state = "booked";
    else if (phase >= 3 && REPLIED.has(i)) state = "replied";
    else if (phase >= 2) state = "sent";
    // Research fills by row, send sweeps by column.
    const delay = phase === 0 ? (row * COLS + col) * 5 : phase === 2 ? col * 38 + row * 6 : 0;
    squares.push(<span key={i} className={`rq ${state}`} style={{ "--d": `${delay}ms` } as React.CSSProperties} />);
  }

  const active = routePhases[phase];

  return (
    <div className="route" ref={ref} aria-label="How the 30-day pilot works, as an illustration" role="img">
      <div className="route-top">
        <span className="route-title">The First Five, 30 days</span>
        <span className="route-legend">1 square = 1 prospect</span>
      </div>

      <div className="route-grid" key={cycle} data-phase={phase}>
        {squares}
      </div>

      <div className="route-slots" data-phase={phase}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="slot" style={{ "--d": `${i * 160}ms` } as React.CSSProperties}>
            <span className="slot-sq" />
            <span className="slot-label">Call {i + 1}</span>
          </span>
        ))}
      </div>

      <ol className="route-steps">
        {routePhases.map((p, i) => (
          <li key={p.key} className={i === phase ? "active" : i < phase ? "done" : undefined}>
            <span className="route-num">0{i + 1}</span>
            <span className="route-label">{p.label}</span>
          </li>
        ))}
      </ol>
      <p className="route-caption" aria-live="polite">
        {active.copy}
      </p>
      <p className="route-note">Illustration of the process. Not a live campaign.</p>
    </div>
  );
}
