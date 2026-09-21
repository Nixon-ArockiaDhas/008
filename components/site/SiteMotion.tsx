"use client";

import { useEffect } from "react";

export function SiteMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: reduced ? 0 : 0.18, rootMargin: "0px 0px -5%" });
    revealNodes.forEach((node) => revealObserver.observe(node));

    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".desktop-nav a[href^='#']"));
    const sections = links.map((link) => document.querySelector(link.hash)).filter(Boolean) as Element[];
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
      });
    }, { rootMargin: "-30% 0px -62%", threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));

    const progress = document.querySelector<HTMLElement>(".page-progress__bar");
    const heroArt = document.querySelector<HTMLElement>(".hero__art");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      if (!reduced && heroArt && window.innerWidth > 760 && window.scrollY < window.innerHeight) {
        heroArt.style.setProperty("--hero-depth", `${Math.min(window.scrollY * 0.08, 54)}px`);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div className="page-progress" aria-hidden="true"><span className="page-progress__bar" /></div>;
}
