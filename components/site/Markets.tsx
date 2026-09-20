import Image from "next/image";
import { ArrowUpRight, Croissant, Leaf, ShoppingBasket, Soup, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const markets = [
  { label: "Beauty & care", title: "Salons", copy: "Turn first-time visitors into regular customers with offers, loyalty rewards and personalised updates.", benefit: "Built for repeat visits", Icon: Sparkles, position: "15%" },
  { label: "Everyday essentials", title: "Groceries", copy: "Keep neighbourhood shoppers close with timely savings, useful reminders and loyalty benefits.", benefit: "Make every visit count", Icon: ShoppingBasket, position: "31%" },
  { label: "Food & dining", title: "Restaurants", copy: "Fill quieter hours, bring regulars back and share fresh reasons to dine with you.", benefit: "From discovery to dining", Icon: Soup, position: "50%" },
  { label: "Freshly made", title: "Bakeries", copy: "Put daily favourites and seasonal specials in front of the customers around you.", benefit: "Turn treats into traditions", Icon: Croissant, position: "69%" },
  { label: "Fresh produce", title: "Fruits & Vegetables", copy: "Build a dependable local customer base with fresh offers and convenient updates.", benefit: "Local, fresh, connected", Icon: Leaf, position: "86%" },
];

export function Markets() {
  return (
    <section className="section section--markets" id="markets">
      <div className="shell">
        <SectionHeader eyebrow="Markets we cover" title="Built for the businesses around you." copy="From your neighbourhood salon to your favourite bakery, 008Hub helps local businesses build lasting customer relationships." />
        <div className="market-stack">
          {markets.map(({ label, title, copy, benefit, Icon, position }, index) => (
            <article className="market-card" key={title} style={{ "--stack-index": index } as React.CSSProperties}>
              <div className="market-card__content">
                <div className="market-card__label"><Icon aria-hidden="true" size={17} />{label}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <div className="market-card__benefit">{benefit}<ArrowUpRight aria-hidden="true" size={18} /></div>
              </div>
              <div className="market-card__image">
                <Image src="/hero-section-bg.webp" alt={`Illustrated neighbourhood scene for ${title}`} fill sizes="(max-width: 760px) 90vw, 48vw" style={{ objectPosition: `${position} 100%` }} />
                <span className="market-card__count">0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
