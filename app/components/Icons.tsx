import type { SVGProps } from "react";

/* One icon system for the whole page: 24px grid, 1.5 hairline stroke, square
   corners softened to 1px. Every icon carries exactly one solid brand-sand
   element (.mk / .mks) so the set echoes the logo, where a single sand block
   sits inside the charcoal geometry. */

function Svg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="ico"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function IconScope() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 1.75v2.5M12 19.75v2.5M1.75 12h2.5M19.75 12h2.5" />
      <rect className="mk" x="10.4" y="10.4" width="3.2" height="3.2" rx="0.6" />
    </Svg>
  );
}

export function IconList() {
  return (
    <Svg>
      <rect className="mk" x="2.75" y="4.25" width="4.5" height="4.5" rx="1" />
      <rect x="3.5" y="10.5" width="3.75" height="3.75" rx="0.9" />
      <rect x="3.5" y="16" width="3.75" height="3.75" rx="0.9" />
      <path d="M10.75 6.5h10.5M10.75 12.4h10.5M10.75 17.9h6.75" />
    </Svg>
  );
}

export function IconEnvelope() {
  return (
    <Svg>
      <path d="M20.75 9.25V18a2 2 0 0 1-2 2H5.25a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9.25" />
      <path d="m3.6 6.4 8.4 5.85 2.9-2.02" />
      <rect className="mk" x="16.5" y="2.75" width="5" height="5" rx="1" />
    </Svg>
  );
}

export function IconCalendar() {
  return (
    <Svg>
      <rect x="3.25" y="5" width="17.5" height="15.75" rx="2.25" />
      <path d="M3.25 10h17.5M8 3.25v3.5M16 3.25v3.5" />
      <rect className="mk" x="6.75" y="12.75" width="4.25" height="4.25" rx="0.9" />
    </Svg>
  );
}

export function IconCheckFrame() {
  return (
    <Svg>
      <path d="M20.75 11.5v7a2 2 0 0 1-2 2h-13.5a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h9.25" />
      <path d="m7.5 12 3 3 6-6" />
      <rect className="mk" x="16.75" y="2.75" width="4.75" height="4.75" rx="1" />
    </Svg>
  );
}

export function IconOrgChart() {
  return (
    <Svg>
      <rect className="mk" x="9.25" y="2.75" width="5.5" height="5.5" rx="1" />
      <rect x="2.75" y="15.75" width="5.5" height="5.5" rx="1" />
      <rect x="15.75" y="15.75" width="5.5" height="5.5" rx="1" />
      <path d="M12 8.25v3.75M5.5 15.75v-2.25a1.5 1.5 0 0 1 1.5-1.5h10a1.5 1.5 0 0 1 1.5 1.5v2.25" />
    </Svg>
  );
}

export function IconBrief() {
  return (
    <Svg>
      <rect x="4.25" y="2.75" width="15.5" height="18.5" rx="2.25" />
      <rect className="mk" x="7.75" y="6.5" width="6.25" height="2.75" rx="0.8" />
      <path d="M7.75 13h8.5M7.75 16.75h5.5" />
    </Svg>
  );
}

export function IconRoute() {
  return (
    <Svg>
      <rect className="mk" x="2.5" y="3" width="6" height="6" rx="1.25" />
      <rect x="15.5" y="15" width="6" height="6" rx="1.25" />
      <path d="M5.5 9v4.5a3.5 3.5 0 0 0 3.5 3.5h6.5" />
    </Svg>
  );
}

export function IconBars() {
  return (
    <Svg>
      <path d="M3.25 20.5h17.5" />
      <rect x="4.75" y="12.25" width="3.75" height="5.25" rx="0.9" />
      <rect x="10.15" y="8.5" width="3.75" height="9" rx="0.9" />
      <rect className="mk" x="15.55" y="4.25" width="3.75" height="13.25" rx="0.9" />
    </Svg>
  );
}

export function IconCheckCircle() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="8.75" />
      <path className="mks" d="m8.15 12.15 2.6 2.6 5.35-5.5" />
    </Svg>
  );
}

export function IconPeople() {
  return (
    <Svg>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.75 20.25c0-3.45 2.8-6.25 6.25-6.25s6.25 2.8 6.25 6.25" />
      <circle className="mk" cx="17.9" cy="7.25" r="2.75" />
      <path d="M16.9 13.6a6 6 0 0 1 4.35 5.75" />
    </Svg>
  );
}

export function IconInbox() {
  return (
    <Svg>
      <path d="M3.25 13.5 5.6 5.4a2 2 0 0 1 1.92-1.4h8.96a2 2 0 0 1 1.92 1.4l2.35 8.1V18a2 2 0 0 1-2 2H5.25a2 2 0 0 1-2-2z" />
      <path d="M3.5 13.5h4.25l1.5 2.5h5.5l1.5-2.5h4.25" />
      <rect className="mk" x="9.9" y="7.4" width="4.2" height="3.4" rx="0.8" />
    </Svg>
  );
}

export function IconReply() {
  return (
    <Svg>
      <path d="M20.75 12.25a7.5 7.5 0 0 1-10.9 6.68L4 20.25l1.4-4.55A7.5 7.5 0 1 1 20.75 12.25z" />
      <rect className="mk" x="10.4" y="10.65" width="3.2" height="3.2" rx="0.7" />
    </Svg>
  );
}

export function IconPlaybook() {
  return (
    <Svg>
      <path d="M12 6.25C10.5 4.9 8.3 4.25 4.25 4.25v14.5c4.05 0 6.25.65 7.75 2 1.5-1.35 3.7-2 7.75-2V4.25c-4.05 0-6.25.65-7.75 2z" />
      <path d="M12 6.25v14.5" />
      <rect className="mk" x="14.4" y="8.2" width="3.3" height="3.3" rx="0.7" />
    </Svg>
  );
}

export function IconShield() {
  return (
    <Svg>
      <path d="M12 2.9 4.25 5.75v5.9c0 4.6 3.2 8.2 7.75 9.45 4.55-1.25 7.75-4.85 7.75-9.45v-5.9z" />
      <path className="mks" d="m8.5 12.1 2.4 2.4 4.6-4.75" />
    </Svg>
  );
}

export function IconFilter() {
  return (
    <Svg>
      <path d="M3.25 4.75h17.5l-6.75 8v6.5l-4 1.75v-8.25z" />
      <rect className="mk" x="16.6" y="15.1" width="4.4" height="4.4" rx="0.9" />
    </Svg>
  );
}

export function IconHand() {
  return (
    <Svg>
      <path d="M8.25 12.25V5a1.5 1.5 0 0 1 3 0v6M11.25 10.5V3.75a1.5 1.5 0 0 1 3 0v6.75M14.25 10.5V5.5a1.5 1.5 0 0 1 3 0V14c0 4-2.6 6.75-6.25 6.75-2.35 0-3.75-1-5.1-2.95l-2.3-3.4a1.45 1.45 0 0 1 2.35-1.7l2.3 2.05" />
      <rect className="mk" x="17.7" y="2.6" width="3.6" height="3.6" rx="0.8" />
    </Svg>
  );
}
