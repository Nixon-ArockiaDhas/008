"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const items = [
  ["What is 008Hub?", "008Hub connects local businesses with nearby customers using offers, rewards, digital loyalty and practical local marketing."],
  ["Who can use 008Hub?", "Neighbourhood businesses of different sizes can use 008Hub to build stronger relationships with customers around them."],
  ["How do customers connect with businesses?", "Customers can discover a business through local campaigns or QR touchpoints, explore an offer and continue the conversation through WhatsApp."],
  ["Can businesses create their own deals and coupons?", "Yes. Businesses can create deals, digital coupons and timely offers that are simple for customers to understand and redeem."],
  ["Does 008Hub support loyalty rewards?", "Yes. Digital loyalty helps businesses recognise repeat customers and encourage their next visit with relevant rewards."],
  ["How do customers receive updates?", "Customers can receive updates through campaigns, WhatsApp and product notifications, based on the communication flow used by the business."],
  ["What businesses can join 008Hub?", "Salons, groceries, restaurants, bakeries, fruit and vegetable stores, and more local categories as the network grows."],
  ["How can I join 008Hub?", "Use any Connect with WhatsApp button on this page to start a conversation with 008Hub about your business."],
];

export function FAQ() {
  return (
    <section className="section section--faq" id="faq">
      <div className="shell faq-shell">
        <SectionHeader eyebrow="Good to know" title="Frequently asked questions" copy="A few straightforward answers about connecting your business with 008Hub." />
        <Accordion type="single" collapsible className="faq-list" defaultValue="item-0">
          {items.map(([question, answer], index) => (
            <AccordionItem value={`item-${index}`} className="faq-item" key={question}>
              <AccordionTrigger className="faq-trigger">{question}</AccordionTrigger>
              <AccordionContent className="faq-content">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
