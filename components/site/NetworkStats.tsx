"use client";

import { useEffect, useRef, useState } from "react";

function PlaceholderStat({ value, label }: { value: string; label: string }) {
  return <div className="stat-card"><strong>{value}</strong><span>{label}</span><small>Live figure coming soon</small></div>;
}

export function NetworkStats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: .25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <section className={`network-section ${visible ? "is-visible" : ""}`} ref={ref} aria-labelledby="network-title">
      <div className="shell network-shell" data-reveal>
        <div className="network-copy"><p className="eyebrow">008Hub network</p><h2 id="network-title">One local network.<br /><span>Growing every day.</span></h2></div>
        <div className="stats-grid"><PlaceholderStat value="XX,XXX+" label="People Connected" /><PlaceholderStat value="XX+" label="Lines of Business Covered" /></div>
      </div>
    </section>
  );
}
