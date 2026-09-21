"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SectionHeader } from "./SectionHeader";

const rewards = [
  { category: "Salon reward", title: "20% off your next visit.", copy: "Available this week at participating local salons.", details: "A sample weekly reward for an eligible service at a participating salon. Confirm the business, validity and eligibility in WhatsApp before visiting, then show the confirmed reward at redemption.", position: "84%" },
  { category: "Juice bar reward", title: "Buy one, share one fresh juice.", copy: "A refreshing local reward made for sharing.", details: "A sample buy-one-get-one offer at a participating juice bar. Product availability, serving size and redemption window must be confirmed with the business before claiming.", position: "73%" },
  { category: "Restaurant reward", title: "₹100 off your local meal.", copy: "A simple dining reward for this week’s plans.", details: "A sample dining reward on an eligible minimum bill at a participating restaurant. Ask for the current validity, exclusions and redemption instructions in WhatsApp.", position: "55%" },
  { category: "Bakery reward", title: "A treat on the house.", copy: "A complimentary favourite with an eligible bakery visit.", details: "A sample bakery reward included with an eligible purchase. The participating item, minimum purchase and available dates must be confirmed with the bakery.", position: "24%" },
  { category: "Grocery reward", title: "A little extra for loyal visits.", copy: "Bonus value for choosing your neighbourhood store.", details: "A sample loyalty reward for eligible repeat visits at a participating grocery store. Confirm points, qualification and redemption details before claiming.", position: "12%" },
];

export function Rewards() {
  const rail = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<(typeof rewards)[number] | null>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * Math.min(430, window.innerWidth * .82), behavior: "smooth" });
  useEffect(() => {
    const node = rail.current;
    if (!node) return;
    const update = () => setEdges({ start: node.scrollLeft < 4, end: node.scrollLeft + node.clientWidth >= node.scrollWidth - 4 });
    update();
    node.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { node.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return (
    <section className="section section--rewards" id="rewards">
      <div className="shell rewards-head">
        <SectionHeader eyebrow="This week" title="Top-rated rewards this week." copy="Explore sample reward concepts for local businesses. Availability and terms will be confirmed before launch." />
        <div className="rewards-actions"><span className="week-filter">This Week</span><div className="rail-controls" aria-label="Reward carousel controls"><button onClick={() => move(-1)} aria-label="Previous rewards" disabled={edges.start}><ArrowLeft /></button><button onClick={() => move(1)} aria-label="Next rewards" disabled={edges.end}><ArrowRight /></button></div></div>
      </div>
      <div className="reward-rail" ref={rail} tabIndex={0} aria-label="Sample weekly rewards">
        {rewards.map((reward) => (
          <article className="reward-card" key={reward.title} data-reveal>
            <div className="reward-card__copy"><span>{reward.category}</span><em>Demo reward</em><h3>{reward.title}</h3><p>{reward.copy}</p></div>
            <div className="reward-card__image"><Image src="/hero-section-bg.webp" alt={`Illustrated local scene for ${reward.category}`} fill sizes="(max-width: 760px) 86vw, 26vw" style={{ objectPosition: `${reward.position} 100%` }} /></div>
            <button className="reward-card__plus" onClick={() => setSelected(reward)} aria-label={`Open details for ${reward.title}`}><Plus aria-hidden="true" /></button>
          </article>
        ))}
      </div>
      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="reward-modal" showCloseButton>
          {selected && <><span className="reward-modal__label">Reward details · Sample</span><DialogTitle>{selected.title}</DialogTitle><DialogDescription>{selected.details}</DialogDescription><div className="reward-modal__terms"><strong>Before you claim</strong><p>Participating business, validity, eligibility and final terms must be confirmed. This website currently shows demonstration reward content only.</p></div><a className="whatsapp-cta" href={`https://wa.me/?text=${encodeURIComponent(`Hi 008Hub, I'd like to know more about the sample reward: ${selected.title}`)}`} target="_blank" rel="noreferrer">Connect on WhatsApp <ArrowRight size={18} /></a></>}
        </DialogContent>
      </Dialog>
    </section>
  );
}
