import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import HeroText from "@/components/Hero";
import HardTruth from "@/components/HardTruth";
import InsideForge from "@/components/InsideForge";
import Chatroom from "@/components/Chatroom";
import Speakers from "@/components/Speakers";
import MadeForYou from "@/components/MadeForYou";
import ClosingCTA from "@/components/ClosingCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero slider — above fold, no reveal delay */}
      <HeroSlider />

      {/* Each section blurs + fades in on scroll */}
      <ScrollReveal>
        <HeroText />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <HardTruth />
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <InsideForge />
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <Chatroom />
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <Speakers />
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <MadeForYou />
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <ClosingCTA />
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal delay={40}>
        <Footer />
      </ScrollReveal>
    </>
  );
}
