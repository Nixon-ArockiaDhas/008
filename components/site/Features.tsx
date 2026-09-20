import { BellRing, Gift, HeartHandshake, Percent, Ticket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { title: "Create Deals", copy: "Launch attractive local deals that bring nearby customers through your door.", Icon: Percent, className: "feature-card--wide", accent: "coral" },
  { title: "Digital Loyalty", copy: "Reward repeat visits and give customers a reason to keep coming back.", Icon: HeartHandshake, className: "feature-card--tall", accent: "blue" },
  { title: "Coupons", copy: "Create simple digital coupons customers can save and redeem with ease.", Icon: Ticket, className: "", accent: "mint" },
  { title: "Offers", copy: "Share limited-time offers with the people most likely to love them.", Icon: Gift, className: "", accent: "sun" },
  { title: "Push Notifications", copy: "Keep customers updated about new deals, rewards and timely news.", Icon: BellRing, className: "feature-card--wide", accent: "violet" },
];

export function Features() {
  return (
    <section className="section section--features" id="about">
      <div className="shell">
        <SectionHeader
          eyebrow="How it works"
          title="What is 008Hub?"
          copy="008Hub helps local businesses connect with customers around them using deals, offers, digital loyalty, rewards and timely notifications — designed to turn nearby people into repeat customers."
        />
        <div className="feature-grid">
          {features.map(({ title, copy, Icon, className, accent }, index) => (
            <article className={`feature-card ${className}`} key={title} style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}>
              <div className={`feature-card__icon feature-card__icon--${accent}`}><Icon aria-hidden="true" size={26} strokeWidth={1.8} /></div>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <span className="feature-card__number" aria-hidden="true">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
