import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import HeroText from "@/components/Hero";
import Agenda from "@/components/Agenda";
import Speakers from "@/components/Speakers";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <HeroText />
      <Agenda />
      <Speakers />
      <Register />
      <Footer />
    </>
  );
}
