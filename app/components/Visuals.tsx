/* Small explanatory visuals built from the logo's square. Server components;
   their motion is CSS, triggered when a [data-reveal] ancestor gets .is-in. */

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

/* A 10 x 10 waffle: `filled` of 100 squares in the accent colour. */
export function Waffle({ filled, label }: { filled: number; label: string }) {
  return (
    <span className="waffle" role="img" aria-label={label}>
      {Array.from({ length: 100 }, (_, i) => (
        <span key={i} className={i < filled ? "on" : undefined} style={{ "--i": i } as CSSVars} />
      ))}
    </span>
  );
}

/* A row of blocks, e.g. 4 blocks of AED 100K, or 6 meetings with 3 signed. */
export function Blocks({ total, filled, label }: { total: number; filled: number; label: string }) {
  return (
    <span className="blocks" role="img" aria-label={label}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i < filled ? "on" : undefined} style={{ "--i": i } as CSSVars} />
      ))}
    </span>
  );
}

/* One line-art glyph per problem card. 64 x 40 grid, hairline strokes, one
   sand element each, like the icon set. */
export function ProblemArt({ kind }: { kind: string }) {
  const common = {
    viewBox: "0 0 120 72",
    className: "pa",
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "waves":
      return (
        <svg {...common}>
          <path d="M6 52h108" className="pa-faint" />
          <path className="pa-draw" d="M6 52c8 0 10-30 18-30s10 30 18 30h14c8 0 10-22 18-22s10 22 18 22h30" />
          <rect className="pa-mk" x="20" y="16" width="8" height="8" rx="1.5" />
          <rect className="pa-mk" x="70" y="24" width="8" height="8" rx="1.5" />
        </svg>
      );
    case "crowd":
      return (
        <svg {...common}>
          {Array.from({ length: 30 }, (_, i) => {
            const x = 8 + (i % 10) * 11;
            const y = 10 + Math.floor(i / 10) * 19;
            return i === 13 ? (
              <rect key={i} className="pa-mk" x={x} y={y} width="8" height="8" rx="1.5" />
            ) : (
              <rect key={i} x={x} y={y} width="8" height="8" rx="1.5" className="pa-faint" />
            );
          })}
        </svg>
      );
    case "inbox":
      return (
        <svg {...common}>
          <rect x="18" y="8" width="84" height="12" rx="3" className="pa-faint" />
          <rect x="18" y="24" width="84" height="12" rx="3" className="pa-faint" />
          <rect x="18" y="40" width="84" height="12" rx="3" className="pa-faint" />
          <rect x="18" y="56" width="84" height="12" rx="3" />
          <rect className="pa-mk" x="24" y="59" width="6" height="6" rx="1.2" />
          <path d="M36 62h40" />
        </svg>
      );
    case "gate":
      return (
        <svg {...common}>
          <path d="M40 66V14h40v52" />
          <path d="M40 30h40M40 46h40M53 14v52M67 14v52" className="pa-faint" />
          <path d="M6 66h108" className="pa-faint" />
          <rect className="pa-mk" x="10" y="54" width="10" height="10" rx="1.8" />
        </svg>
      );
    case "split":
      return (
        <svg {...common}>
          <circle cx="30" cy="36" r="20" />
          <circle cx="90" cy="36" r="20" className="pa-faint" />
          <path d="M52 36h16" strokeDasharray="2 4" />
          <rect className="pa-mk" x="85" y="31" width="10" height="10" rx="1.8" />
          <path d="M24 32h12M24 40h8" />
        </svg>
      );
    default:
      return null;
  }
}

/* Semicircle score gauge for the prospect brief. */
export function Gauge({ value }: { value: number }) {
  const r = 44;
  const len = Math.PI * r;
  return (
    <svg viewBox="0 0 110 62" className="gauge" aria-hidden="true">
      <path d={`M11 56a${r} ${r} 0 0 1 88 0`} className="gauge-track" />
      <path
        d={`M11 56a${r} ${r} 0 0 1 88 0`}
        className="gauge-fill"
        style={{ strokeDasharray: len, "--off": len * (1 - value / 100), "--len": len } as CSSVars}
      />
    </svg>
  );
}
