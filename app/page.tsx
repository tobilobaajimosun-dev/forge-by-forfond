import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import HeroText from "@/components/Hero";
import ApplyInvite from "@/components/ApplyInvite";
import Countdown from "@/components/Countdown";
import HardTruth from "@/components/HardTruth";
import PatternDivider from "@/components/PatternDivider";
import InsideForge from "@/components/InsideForge";
import Schedule from "@/components/Schedule";
import Chatroom from "@/components/Chatroom";
import Speakers from "@/components/Speakers";
import MadeForYou from "@/components/MadeForYou";
import FAQ from "@/components/FAQ";
import ForgeOrbit from "@/components/ForgeOrbit";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 1. Before/After visual slider — above fold, no reveal */}
      <HeroSlider />

      {/* 2. Editorial headline + CTA */}
      <ScrollReveal>
        <HeroText />
      </ScrollReveal>

      {/* 3. Apply for invite — full-width Luma CTA */}
      <ApplyInvite />

      {/* 4. Countdown */}
      <ScrollReveal delay={60}>
        <Countdown />
      </ScrollReveal>

      {/* 5. The Hard Truth — pull quote */}
      <ScrollReveal delay={60}>
        <HardTruth />
      </ScrollReveal>

      {/* 6. Pattern divider */}
      <PatternDivider />

      {/* 7. Inside Forge — 3 sessions */}
      <ScrollReveal delay={60}>
        <InsideForge />
      </ScrollReveal>

      {/* 8. Full schedule */}
      <ScrollReveal delay={60}>
        <Schedule />
      </ScrollReveal>

      {/* 9. The Chatroom */}
      <ScrollReveal delay={60}>
        <Chatroom />
      </ScrollReveal>

      {/* 10. Speakers */}
      <ScrollReveal delay={60}>
        <Speakers />
      </ScrollReveal>

      {/* 11. Made for You If */}
      <ScrollReveal id="who" delay={60}>
        <MadeForYou />
      </ScrollReveal>

      {/* 12. FAQ */}
      <ScrollReveal id="faq" delay={60}>
        <FAQ />
      </ScrollReveal>

      {/* 13. Forge orbit — expertise visualization */}
      <ScrollReveal delay={60}>
        <ForgeOrbit />
      </ScrollReveal>

      {/* 14. Footer */}
      <ScrollReveal delay={40}>
        <Footer />
      </ScrollReveal>
    </>
  );
}
