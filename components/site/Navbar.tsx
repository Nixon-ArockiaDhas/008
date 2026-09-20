"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppCTA } from "./WhatsAppCTA";

const links = [
  ["How it works", "#about"],
  ["Markets", "#markets"],
  ["Marketing", "#marketing"],
  ["Rewards", "#rewards"],
  ["FAQ", "#faq"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-nav__inner">
        <a className="brand" href="#top" aria-label="008Hub home">
          <Image src="/008hub-logo.webp" alt="008Hub" width={139} height={40} priority />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="desktop-cta"><WhatsAppCTA compact /></div>
        <Sheet>
          <SheetTrigger asChild>
            <button className="menu-button" aria-label="Open navigation menu">
              <Menu aria-hidden="true" size={22} />
            </button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetHeader className="mobile-sheet__header">
              <SheetTitle><Image src="/008hub-logo.webp" alt="008Hub" width={125} height={36} /></SheetTitle>
              <SheetDescription>Local connections, made rewarding.</SheetDescription>
            </SheetHeader>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {links.map(([label, href]) => (
                <SheetClose asChild key={href}><a href={href}>{label}</a></SheetClose>
              ))}
            </nav>
            <div className="mobile-sheet__cta"><WhatsAppCTA /></div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
