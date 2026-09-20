import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  { quote: "The offers make it much easier to give nearby customers a reason to visit again.", name: "Demo business owner", meta: "Salon · Chennai" },
  { quote: "We can keep regular customers informed without making local marketing feel complicated.", name: "Demo business owner", meta: "Grocery · Coimbatore" },
  { quote: "Loyalty and timely rewards help us stay part of our customers’ weekly routine.", name: "Demo business owner", meta: "Bakery · Madurai" },
  { quote: "The physical and digital approach feels practical for a neighbourhood business like ours.", name: "Demo business owner", meta: "Restaurant · Chennai" },
];

export function Testimonials() {
  return (
    <section className="section section--testimonials" aria-labelledby="testimonial-heading">
      <div className="shell">
        <div className="testimonial-heading-row">
          <SectionHeader eyebrow="Customer stories" title="Loved by local businesses." copy="See how businesses can use 008Hub to stay connected with their customers." />
          <span className="demo-pill">Sample content</span>
        </div>
        <div className="testimonial-rail">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.meta}>
              <Quote aria-hidden="true" size={34} strokeWidth={1.5} />
              <blockquote>“{item.quote}”</blockquote>
              <figcaption><strong>{item.name}</strong><span>{item.meta}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
