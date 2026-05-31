import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import HeroText from "@/components/Hero";
import HardTruth from "@/components/HardTruth";
import InsideForge from "@/components/InsideForge";
import Chatroom from "@/components/Chatroom";
import Speakers from "@/components/Speakers";
import MadeForYou from "@/components/MadeForYou";
import ClosingCTA from "@/components/ClosingCTA";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* 1. Before/After visual slider — full viewport */}
      <HeroSlider />
      {/* 2. Editorial headline + CTA */}
      <HeroText />
      {/* 3. The Hard Truth — pull quote + body */}
      <HardTruth />
      {/* 4. Inside Forge — 3 sessions */}
      <InsideForge />
      {/* 5. The Chatroom — expert consultations */}
      <Chatroom />
      {/* 6. Speakers / Expert Consultants */}
      <Speakers />
      {/* 7. Made for You If — eligibility */}
      <MadeForYou />
      {/* 8. Closing statement + event details */}
      <ClosingCTA />
      {/* 8. Registration form */}
      <Register />
      {/* 9. Footer */}
      <Footer />
    </>
  );
}
