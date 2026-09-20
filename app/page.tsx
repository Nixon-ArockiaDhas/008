import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Features } from "@/components/site/Features";
import { Markets } from "@/components/site/Markets";
import { Testimonials } from "@/components/site/Testimonials";
import { Marketing } from "@/components/site/Marketing";
import { NetworkStats } from "@/components/site/NetworkStats";
import { Rewards } from "@/components/site/Rewards";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Markets />
      <Testimonials />
      <Marketing />
      <NetworkStats />
      <Rewards />
      <FAQ />
      <Footer />
    </main>
  );
}
