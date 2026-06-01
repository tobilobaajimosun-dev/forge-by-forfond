import ScrollToTop from "@/components/ScrollToTop";
import SiteHeader from "@/components/SiteHeader";
import HeroText from "@/components/Hero";
import HardTruth from "@/components/HardTruth";
import InsideForge from "@/components/InsideForge";
import Chatroom from "@/components/Chatroom";
import ForgeOrbit from "@/components/ForgeOrbit";
import MadeForYou from "@/components/MadeForYou";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />

      <div id="top" />

      {/* 1. HOOK — Attention: hero + countdown + CTA */}
      <HeroText />

      {/* 2. PROBLEM — agitate the pain, raise the stakes */}
      <ScrollReveal delay={60}>
        <HardTruth />
      </ScrollReveal>

      {/* 3. SOLUTION — what you'll walk away with (the value) */}
      <ScrollReveal delay={60}>
        <InsideForge />
      </ScrollReveal>

      {/* 4. DIFFERENTIATOR — the unmissable private consultations */}
      <ScrollReveal delay={60}>
        <Chatroom />
      </ScrollReveal>

      {/* 5. CREDIBILITY — the depth of expertise in the room */}
      <ScrollReveal delay={60}>
        <ForgeOrbit />
      </ScrollReveal>

      {/* 6. PROOF — the full programme; it's a real, substantial day */}
      <ScrollReveal delay={60}>
        <Schedule />
      </ScrollReveal>

      {/* 7. QUALIFY + CONVERT — "this is you" + ticket + CTA */}
      <ScrollReveal delay={60}>
        <MadeForYou />
      </ScrollReveal>

      {/* 8. OBJECTIONS — FAQ (and it's free) */}
      <ScrollReveal id="faq" delay={60}>
        <FAQ />
      </ScrollReveal>

      {/* 9. CLOSE — final CTA + ForFond Group */}
      <ScrollReveal delay={40}>
        <Footer />
      </ScrollReveal>

      {/*
        Speakers section hidden until the lineup is confirmed.
        Re-add <Speakers /> (and its import) once names + photos are ready.
      */}
    </>
  );
}
