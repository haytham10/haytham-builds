"use client";

import { useEffect } from "react";

/* Progressive-enhancement effects: scroll reveals, stat count-ups, the header
   elevation state, the mobile sticky CTA and mobile menu. Renders nothing. */
export default function Fx() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Reveal styles apply only from here on, so a failed script never hides content.
    document.documentElement.classList.add("fx");

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));

    const runCounter = (el: HTMLElement) => {
      const target = Number(el.dataset.count ?? "0");
      const prefix = el.dataset.prefix ?? "";
      const suffix = el.dataset.suffix ?? "";
      const fmt = (n: number) => (el.dataset.format === "comma" ? n.toLocaleString("en-US") : String(n));
      if (reduced || !Number.isFinite(target)) {
        el.textContent = `${prefix}${fmt(target)}${suffix}`;
        return;
      }
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4);
        el.textContent = `${prefix}${fmt(Math.round(target * eased))}${suffix}`;
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
    const bar = document.querySelector(".mobile-bar");
    const hero = document.querySelector<HTMLElement>(".hero");
    const finalCta = document.querySelector<HTMLElement>(".final-cta");
    const onScroll = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 12);
      // The sticky mobile CTA appears once the hero's own buttons are gone and
      // steps aside when the closing CTA is on screen.
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : false;
      const atEnd = finalCta ? finalCta.getBoundingClientRect().top < window.innerHeight : false;
      bar?.classList.toggle("is-visible", pastHero && !atEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Close the mobile menu after a link inside it is used.
    const menu = document.querySelector<HTMLDetailsElement>(".nav-mobile");
    const closeMenu = (e: Event) => {
      if ((e.target as HTMLElement).closest("a")) menu?.removeAttribute("open");
    };
    menu?.addEventListener("click", closeMenu);

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      menu?.removeEventListener("click", closeMenu);
    };
  }, []);

  return null;
}
