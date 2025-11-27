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

export default function Home() {
  const keywords = [
    // Location + Service
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

    // Brand-Based Keywords
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

    // TV Issue Keywords
    "TV Backlight Repair",
    "LED Backlight Problem",
    "TV Display Issue Repair",
    "TV Screen Replacement",
    "LED Panel Repair",
    "No Display Problem",
    "No Sound Problem",

    // Premium Search Keywords
    "Best TV Repair Service",
    "Affordable TV Repair",
    "Professional TV Technician",
    "Same Day TV Repair",
    "Quick TV Repair",
    "4K LED TV Repair",
    "LED/LCD TV Expert"
  ];

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

      {/* Final Optimized Keyword Section */}
      <KeywordSection keywords={keywords} />
    </>
  );
}
