import ScrollToTop from "@/components/ScrollToTop";
import SiteHeader from "@/components/SiteHeader";
import HeroText from "@/components/Hero";
import ApplyInvite from "@/components/ApplyInvite";
import Countdown from "@/components/Countdown";
import HardTruth from "@/components/HardTruth";
import InsideForge from "@/components/InsideForge";
import Chatroom from "@/components/Chatroom";
import ForgeOrbit from "@/components/ForgeOrbit";
import MadeForYou from "@/components/MadeForYou";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import HalftoneDots from "@/components/HalftoneDots";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />

      <div id="top" />

      {/* 1. Hook — the headline question */}
      <ScrollReveal>
        <HeroText />
      </ScrollReveal>

      {/* 2. Immediate CTA — request an invite */}
      <ApplyInvite />

      {/* 3. Urgency — save the date countdown */}
      <ScrollReveal delay={60}>
        <Countdown />
      </ScrollReveal>

      {/* 4. The problem — why this matters */}
      <ScrollReveal delay={60}>
        <HardTruth />
      </ScrollReveal>

      {/* 5. The value — the 3 sessions (stacking cards) */}
      <ScrollReveal delay={60}>
        <InsideForge />
      </ScrollReveal>

      {/* 7. The differentiator — private consultations */}
      <ScrollReveal delay={60}>
        <Chatroom />
      </ScrollReveal>

      {/* 8. The breadth — expertise in the room */}
      <ScrollReveal delay={60}>
        <ForgeOrbit />
      </ScrollReveal>

      {/* 9. Qualification — who this is for */}
      <ScrollReveal delay={60}>
        <MadeForYou />
      </ScrollReveal>

      {/* 10. Logistics — full schedule (light section) */}
      <ScrollReveal delay={60}>
        <Schedule />
      </ScrollReveal>

      {/* 11. Objections — FAQ */}
      <ScrollReveal id="faq" delay={60}>
        <FAQ />
      </ScrollReveal>

      {/* 12. Brand halftone band — interactive */}
      <section className="bg-[#111111] px-4 md:px-6 pt-8 pb-2">
        <div className="max-w-[1400px] mx-auto rounded-2xl overflow-hidden border border-white/[0.06]">
          <HalftoneDots text="FORGE" height={300} gap={12} bg="#0f0f0f" dot="#B69556" accent="#f6dca0" />
        </div>
      </section>

      {/* 13. Close */}
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
