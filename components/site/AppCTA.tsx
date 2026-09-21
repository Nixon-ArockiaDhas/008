import { Apple, Play, Smartphone } from "lucide-react";

export function AppCTA() {
  return (
    <section className="app-cta-wrap" data-reveal aria-labelledby="app-cta-title">
      <div className="shell app-cta">
        <span className="app-shape app-shape--one" aria-hidden="true" />
        <span className="app-shape app-shape--two" aria-hidden="true" />
        <span className="app-shape app-shape--three" aria-hidden="true" />
        <p className="eyebrow">Take a little local love with you</p>
        <h2 id="app-cta-title">Your neighbourhood.<br />Now in your pocket.</h2>
        <p className="app-cta__copy">Discover local favourites, unlock offers and keep your rewards together with 008Hub.</p>
        <div className="store-status" aria-label="008Hub mobile app availability">
          <span aria-disabled="true"><Apple aria-hidden="true" /><small>App Store</small><strong>Coming Soon</strong></span>
          <span aria-disabled="true"><Play aria-hidden="true" /><small>Google Play</small><strong>Coming Soon</strong></span>
        </div>
        <p className="app-cta__note"><Smartphone aria-hidden="true" size={16} /> App in development. Downloads coming to iOS &amp; Android.</p>
      </div>
    </section>
  );
}
