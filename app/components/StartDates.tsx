"use client";

import { useSyncExternalStore } from "react";

/* Pilots start on the 1st or the 15th. Shows the next two start dates at least
   14 days out, leaving time for payment, setup and inbox warm-up. Computed in the browser so a cached page never shows a past date. */
function upcoming(from: Date, count: number) {
  const dates: Date[] = [];
  const d = new Date(from.getFullYear(), from.getMonth(), from.getDate() + 13);
  while (dates.length < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDate() === 1 || d.getDate() === 15) dates.push(new Date(d));
  }
  return dates;
}

// Non-breaking space keeps "1 November" together when the line wraps.
const fmt = (d: Date) => d.toLocaleDateString("en-GB", { day: "numeric", month: "long" }).replace(" ", " ");

const subscribe = () => () => {};
const clientLabel = () => {
  const [a, b] = upcoming(new Date(), 2);
  return `${fmt(a)} or ${fmt(b)}`;
};
const serverLabel = () => "the 1st or the 15th";

export default function StartDates({ className }: { className?: string }) {
  const label = useSyncExternalStore(subscribe, clientLabel, serverLabel);
  return <span className={className}>{label}</span>;
}
