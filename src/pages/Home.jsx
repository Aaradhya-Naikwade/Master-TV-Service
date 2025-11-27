import { useState, useEffect } from "react";

import HeroSection from "../components/HeroSection";
import RunningBanner from "../components/RunningBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/AboutUs";
import StatsSection from "../components/StatsSection";
import WorkingSection from "../components/WorkingSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import KeywordSection from "../components/KeywordSection";
import PopupForm from "../components/PopupForm";

export default function Home() {
  const keywords = [

    "TV Repair Gurgaon",
    "TV Repair Near Me",
    "LED TV Repair",
    "LCD TV Repair",
    "Smart TV Repair",
    "TV Technician Gurgaon",
    "Home TV Repair Service",
    "Doorstep TV Repair",
    "TV Installation",
    "TV Wall Mounting",

    "LG TV Repair",
    "Samsung TV Repair",
    "Sony TV Repair",
    "Mi TV Repair",
    "Vu TV Repair",
    "Panasonic TV Repair",
    "Toshiba TV Repair",
    "Haier TV Repair",
    "Croma TV Repair",
    "Onida TV Repair",

    "TV Backlight Repair",
    "LED Backlight Problem",
    "TV Display Issue Repair",
    "TV Screen Replacement",
    "LED Panel Repair",
    "No Display Problem",
    "No Sound Problem",

    "Best TV Repair Service",
    "Affordable TV Repair",
    "Professional TV Technician",
    "Same Day TV Repair",
    "Quick TV Repair",
    "4K LED TV Repair",
    "LED/LCD TV Expert"
  ];

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeroSection />
      <RunningBanner />
      <WhyChooseUs />
      <About />
      <StatsSection />
      <WorkingSection />
      <ServicesSection />
      <ContactSection />
      <TestimonialsSection />
      <CTASection />

      <KeywordSection keywords={keywords} />

      <PopupForm open={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
