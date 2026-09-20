import Image from "next/image";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Image
        className="hero__art"
        src="/hero-section-bg.webp"
        alt="People discovering nearby local businesses, offers and rewards across a lively neighbourhood"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero__wash" aria-hidden="true" />
      <div className="hero__content">
        <h1 id="hero-title">
          <span>Connect ஆகுங்கள்</span>
          <span>உங்கள் Area-உடன்,</span>
          <span>உங்கள் <strong>Customers-உடன்</strong></span>
        </h1>
        <WhatsAppCTA />
      </div>
      <a className="hero__scroll" href="#about" aria-label="Scroll to learn how 008Hub works">
        <span>Explore</span><i aria-hidden="true" />
      </a>
    </section>
  );
}
