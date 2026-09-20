"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, CakeSlice, Gift, ShoppingBasket, Sparkles, Soup } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const rewards = [
  { category: "Salon", title: "20% OFF Your Next Visit", copy: "A polished weekly offer designed to welcome customers back.", Icon: Sparkles, tone: "azure" },
  { category: "Juice Bar", title: "Buy 1, Get 1 Fresh Juice", copy: "A refreshing local reward made for sharing.", Icon: Gift, tone: "orange" },
  { category: "Restaurant", title: "₹100 OFF Your Bill", copy: "A simple dining reward for this week’s local plans.", Icon: Soup, tone: "plum" },
  { category: "Bakery", title: "A Treat On The House", copy: "A complimentary favourite with an eligible bakery visit.", Icon: CakeSlice, tone: "rose" },
  { category: "Grocery", title: "Loyalty Bonus", copy: "A little extra value for choosing your neighbourhood store.", Icon: ShoppingBasket, tone: "green" },
];

export function Rewards() {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * Math.min(430, window.innerWidth * .82), behavior: "smooth" });
  return (
    <section className="section section--rewards" id="rewards">
      <div className="shell rewards-head">
        <SectionHeader eyebrow="This week" title="Top-rated rewards this week." copy="Discover sample rewards customers could love around them right now." />
        <div className="rail-controls" aria-label="Reward carousel controls">
          <button onClick={() => move(-1)} aria-label="Previous rewards"><ArrowLeft aria-hidden="true" /></button>
          <button onClick={() => move(1)} aria-label="Next rewards"><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
      <div className="reward-rail" ref={rail} tabIndex={0} aria-label="Sample weekly rewards">
        {rewards.map(({ category, title, copy, Icon, tone }) => (
          <article className="reward-card" key={title}>
            <div className={`reward-card__art reward-card__art--${tone}`}><span className="reward-card__halo" /><Icon aria-hidden="true" size={76} strokeWidth={1.25} /></div>
            <div className="reward-card__body">
              <div className="reward-card__meta"><span>{category}</span><em>Demo reward</em></div>
              <h3>{title}</h3><p>{copy}</p>
              <a href="https://wa.me/?text=Hi%20008Hub%2C%20I%27d%20like%20to%20know%20more%20about%20local%20rewards." target="_blank" rel="noreferrer">View Reward <ArrowRight aria-hidden="true" size={17} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
