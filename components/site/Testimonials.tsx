"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  { quote: "008Hub helped us bring nearby customers back with offers and rewards that are simple to manage.", name: "Demo business owner", meta: "Salon · Chennai", position: "83%" },
  { quote: "We can keep regular customers informed without making local marketing feel complicated.", name: "Demo business owner", meta: "Grocery · Coimbatore", position: "15%" },
  { quote: "Loyalty and timely rewards help us stay part of our customers’ weekly routine.", name: "Demo business owner", meta: "Bakery · Madurai", position: "64%" },
];

export function Testimonials() {
  const rail = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * rail.current.clientWidth, behavior: "smooth" });
  useEffect(() => {
    const node = rail.current;
    if (!node) return;
    const update = () => setEdges({ start: node.scrollLeft < 4, end: node.scrollLeft + node.clientWidth >= node.scrollWidth - 4 });
    update();
    node.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { node.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return (
    <section className="section section--testimonials" aria-labelledby="testimonial-heading">
      <div className="shell">
        <div className="testimonial-heading-row">
          <SectionHeader eyebrow="Customer stories" title="Loved by local businesses." copy="Illustrative stories showing how businesses can use 008Hub to stay connected with their customers." />
          <div className="testimonial-meta"><span className="demo-pill">Sample content</span><div className="rail-controls"><button onClick={() => move(-1)} aria-label="Previous testimonial" disabled={edges.start}><ArrowLeft /></button><button onClick={() => move(1)} aria-label="Next testimonial" disabled={edges.end}><ArrowRight /></button></div></div>
        </div>
        <div className="testimonial-rail" ref={rail} tabIndex={0} aria-label="Sample customer stories">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.meta} data-reveal>
              <div className="testimonial-card__quote"><blockquote>“{item.quote}”</blockquote><figcaption><span className="testimonial-avatar" aria-hidden="true">0H</span><span><strong>{item.name}</strong><small>{item.meta}</small></span></figcaption></div>
              <div className="testimonial-card__image"><Image src="/hero-section-bg.webp" alt={`Illustrated local ${item.meta.split(" · ")[0].toLowerCase()} neighbourhood scene`} fill sizes="(max-width: 760px) 90vw, 45vw" style={{ objectPosition: `${item.position} 100%` }} /></div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
