import { BellRing, Check, Gift, HeartHandshake, Percent, Ticket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Features() {
  return (
    <section className="section section--features" id="about">
      <div className="shell">
        <SectionHeader eyebrow="How it works" title="What is 008Hub?" copy="008Hub helps local businesses connect with customers around them using deals, offers, digital loyalty, rewards and timely notifications — designed to turn nearby people into repeat customers." />
        <div className="feature-grid feature-bento">
          <article className="feature-card feature-card--deals" data-reveal>
            <div className="feature-card__copy"><span className="feature-label">Create Deals</span><h3>Turn a good reason to visit into a local campaign.</h3><p>Set the offer, audience and timing in one clear flow.</p></div>
            <div className="deal-builder" aria-hidden="true"><span>Campaign setup</span><strong>Weekend welcome offer</strong><div><i /><i className="is-on" /><i /></div><em><Check size={15} /> Ready to publish</em></div>
          </article>
          <article className="feature-card feature-card--coupons" data-reveal>
            <div className="feature-card__copy"><span className="feature-label">Coupons</span><h3>Simple to save.<br />Easy to redeem.</h3></div>
            <div className="coupon-orbit" aria-hidden="true"><span><Ticket size={30} /></span><strong>SAVE20</strong></div>
          </article>
          <article className="feature-card feature-card--offers" data-reveal>
            <div className="feature-card__copy"><span className="feature-label">Offers</span><h3>Make every offer feel worth discovering.</h3><p>Share timely value with nearby customers most likely to act.</p></div>
            <div className="offer-preview" aria-hidden="true"><div><Gift size={24} /><span><small>Nearby favourite</small><strong>Fresh offer for this week</strong></span></div><em><Percent size={16} /> Limited time</em></div>
          </article>
          <article className="feature-card feature-card--loyalty" data-reveal>
            <div className="feature-card__copy"><span className="feature-label">Digital Loyalty</span><h3>Turn visits into lasting habits.</h3></div>
            <div className="loyalty-track" aria-label="Four of five loyalty visits complete"><span><Check /></span><span><Check /></span><span><Check /></span><span><Check /></span><span><HeartHandshake /></span></div>
          </article>
          <article className="feature-card feature-card--notifications" data-reveal>
            <div className="feature-card__copy"><span className="feature-label">Push Notifications</span><h3>Stay useful, timely and close.</h3></div>
            <div className="notification-stack" aria-hidden="true"><span><BellRing size={18} /><b>Your reward is ready</b><small>Now</small></span><span><Gift size={18} /><b>A new local offer</b><small>Today</small></span></div>
          </article>
        </div>
      </div>
    </section>
  );
}
