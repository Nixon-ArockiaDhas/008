import { BellRing, House, MapPin, Megaphone, QrCode, Smartphone, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const campaigns = [
  { title: "Door-to-Door Campaigns", copy: "Reach households around your business with targeted local promotions and campaign activations.", tags: ["Local Reach", "Customer Acquisition"], Icon: House, nodes: [MapPin, Megaphone] },
  { title: "Crowded Area Campaigns", copy: "Engage customers at high-footfall locations, events and busy neighbourhood hotspots.", tags: ["QR Activation", "Campaign Tracking"], Icon: Users, nodes: [QrCode, MapPin] },
  { title: "Digital Marketing", copy: "Extend your reach through digital campaigns, customer engagement, offers and notifications.", tags: ["Smart Offers", "Timely Updates"], Icon: Smartphone, nodes: [BellRing, Megaphone] },
];

export function Marketing() {
  return (
    <section className="section section--marketing" id="marketing">
      <div className="shell">
        <SectionHeader eyebrow="Marketing we handle" title="From the street to the screen." copy="008Hub connects businesses and customers through a mix of physical and digital local marketing." />
        <div className="marketing-grid">
          {campaigns.map(({ title, copy, tags, Icon, nodes }) => (
            <article className="marketing-card" key={title}>
              <div className="marketing-card__visual" aria-hidden="true">
                <span className="marketing-card__orb marketing-card__orb--one" />
                <span className="marketing-card__orb marketing-card__orb--two" />
                <div className="marketing-card__device"><Icon size={46} strokeWidth={1.5} /></div>
                {nodes.map((Node, i) => <span className={`marketing-card__node node-${i + 1}`} key={i}><Node size={20} /></span>)}
              </div>
              <div className="marketing-card__body">
                <h3>{title}</h3><p>{copy}</p>
                <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
