"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdsMarketing from "./components/AdsMarketing";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2000); // Logo εμφανίζεται για 2 δευτερόλεπτα

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#121212] text-white">
      {/* Logo Animation */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-[#121212] z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl font-bold tracking-wide"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              WE<span className="text-green-500">BLEND</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Slide-Up Animation */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Ξεκινάει πιο χαμηλά
        animate={{ opacity: showLogo ? 0 : 1, y: showLogo ? 100 : 0 }} // Ανέρχεται προς τα πάνω
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }} // Ομαλή μετάβαση
      >
        <Navbar />
        <HeroSection />
        <Services />
        <AdsMarketing />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}
