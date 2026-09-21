import { House, MapPin, Megaphone, QrCode, Smartphone, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const campaigns = [
  { label: "Local activation", heading: "Reach customers right where they live.", copy: "Neighbourhood-first door-to-door campaigns that turn local awareness into a clear next step.", className: "marketing-card--local", Icon: House },
  { label: "High footfall", heading: "Be seen where your customers already are.", copy: "On-ground activations for crowded areas, events and high-intent neighbourhood touchpoints.", className: "marketing-card--footfall", Icon: Users },
  { label: "Digital reach", heading: "Stay visible beyond the storefront.", copy: "Practical digital campaigns, offer reminders and QR journeys that keep customers connected.", className: "marketing-card--digital", Icon: Smartphone },
];

export function Marketing() {
  return (
    <section className="section section--marketing" id="marketing">
      <div className="shell">
        <SectionHeader eyebrow="Marketing we handle" title="From the street to the screen." copy="008Hub connects businesses and customers through a considered mix of physical and digital local marketing." />
        <div className="marketing-grid">
          {campaigns.map(({ label, heading, copy, className, Icon }) => (
            <article className={`marketing-card ${className}`} key={label} data-reveal>
              <div className="marketing-card__copy"><span>{label}</span><h3>{heading}</h3><p>{copy}</p></div>
              <div className="campaign-scene" aria-hidden="true">
                <span className="campaign-pin"><MapPin /></span><span className="campaign-pin"><Megaphone /></span><span className="campaign-pin"><QrCode /></span>
                <div className="campaign-main"><Icon /></div><i /><i /><i />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
