import Image from "next/image";
import { WhatsAppCTA } from "./WhatsAppCTA";

const nav = [["About", "#about"], ["Markets", "#markets"], ["Rewards", "#rewards"], ["Marketing", "#marketing"], ["FAQ", "#faq"], ["Contact", "https://wa.me/?text=Hi%20008Hub"]];

export function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="shell">
        <div className="footer-cta" data-reveal><h2>Grow your local business<br />with <span>008Hub.</span></h2><WhatsAppCTA /></div>
        <div className="footer-main">
          <div className="footer-brand"><Image src="/008hub-logo.webp" alt="008Hub" width={139} height={40} /><p>Connecting local businesses with local customers.</p></div>
          <nav aria-label="Footer navigation">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        </div>
        <div className="footer-bottom"><span>© 2026 008Hub. All rights reserved.</span><div><a href="#footer">Privacy Policy</a><a href="#footer">Terms &amp; Conditions</a></div></div>
      </div>
    </footer>
  );
}
