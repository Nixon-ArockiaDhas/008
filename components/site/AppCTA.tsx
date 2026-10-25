import Image from "next/image";
import { Smartphone } from "lucide-react";

export function AppCTA() {
  return (
    <section
      className="app-cta-wrap"
      data-reveal
      aria-labelledby="app-cta-title"
    >
      <div className="shell app-cta">
        <span className="app-shape app-shape--one" aria-hidden="true" />
        <span className="app-shape app-shape--two" aria-hidden="true" />
        <span className="app-shape app-shape--three" aria-hidden="true" />
        <p className="eyebrow">Take a little local love with you</p>
        <h2 id="app-cta-title">
          Your neighbourhood.
          <br />
          Now in your pocket.
        </h2>
        <p className="app-cta__copy">
          Discover local favourites, unlock offers and keep your rewards
          together with 008Hub.
        </p>
        <div
          className="store-status"
          aria-label="008Hub mobile app availability"
        >
          {" "}
          <Image src="/appstore.svg" alt="" width={200} height={200} />
          <Image src="/playstore.svg" alt="" width={200} height={200} />
        </div>
      </div>
    </section>
  );
}
