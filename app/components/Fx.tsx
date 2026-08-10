"use client";

import { useEffect } from "react";

/* Progressive-enhancement effects: scroll reveals, stat count-ups,
   and the header elevation state. Renders nothing. */
export default function Fx() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));

    const runCounter = (el: HTMLElement) => {
      const target = Number(el.dataset.count ?? "0");
      const prefix = el.dataset.prefix ?? "";
      const suffix = el.dataset.suffix ?? "";
      if (reduced || !Number.isFinite(target)) {
        el.textContent = `${prefix}${target}${suffix}`;
        return;
      }
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4);
        el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    let io: IntersectionObserver | undefined;
    if (reduced || typeof IntersectionObserver === "undefined") {
      revealEls.forEach((el) => el.classList.add("is-in"));
      counters.forEach(runCounter);
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.classList.add("is-in");
            el.querySelectorAll<HTMLElement>("[data-count]").forEach(runCounter);
            if (el.dataset.count !== undefined) runCounter(el);
            io?.unobserve(el);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      revealEls.forEach((el) => io?.observe(el));
      counters
        .filter((el) => !el.closest("[data-reveal]"))
        .forEach((el) => io?.observe(el));
    }

    const header = document.querySelector(".site-header");
    const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
