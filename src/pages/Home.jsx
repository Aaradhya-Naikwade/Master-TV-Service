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

export default function Home() {
  return (
    <>
      <HeroSection />
      <RunningBanner />
      <WhyChooseUs />
      <About />
      <StatsSection />
      <WorkingSection />
      <ServicesSection/>
      <ContactSection/>
      <TestimonialsSection/>
      <CTASection/>

    </>
  );
}
