import Image from "next/image";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdsMarketing from "./components/AdsMarketing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Services />
      <AdsMarketing />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
