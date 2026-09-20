import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "008Hub — Connect Local. Grow Together.",
  description: "008Hub helps local businesses connect with nearby customers through deals, digital loyalty, rewards, campaigns and WhatsApp.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
