import "../styles/service1.css";
import { useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm";

export default function Service1Page() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          elem.classList.add("animate-section");
        }
      },
      { threshold: 0.2 }
    );

    if (elem) obs.observe(elem);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="service1-hero">
        <div className="service1-hero-overlay"></div>
        <h1 className="service1-hero-text">Display Panel Repairing</h1>
      </section>

      {/* MAIN CONTENT */}
      <section className="service1-page section-animate-parent" ref={sectionRef}>
        <div className="section-container service1-grid">

          {/* LEFT CONTENT */}
          <div className="service1-left section-animate-child delay-1">

            <h2 className="service1-heading">Professional Display Panel Repairing</h2>

            <p className="service1-para">
              A damaged or faulty display panel is one of the most common issues in LED, LCD,
              Smart TV, OLED, and QLED televisions. Whether your screen is showing no display,
              lines, color patches, or flickering — our expert technicians can fix it with
              high-quality repair techniques and genuine spare parts.
            </p>

            <p className="service1-para">
              We carefully diagnose the exact problem in the TV panel and provide a proper
              repair or replacement solution at affordable pricing. This ensures your TV
              performs like brand new without unnecessary expenses.
            </p>

            <h3 className="service1-subheading">Common Display Panel Issues We Fix</h3>

            <ul className="service1-list">
              <li>✔ No display or black screen</li>
              <li>✔ Display with lines (vertical / horizontal)</li>
              <li>✔ Half screen visible</li>
              <li>✔ Flickering or blinking display</li>
              <li>✔ Color patches or distorted colors</li>
              <li>✔ Dimming or dark areas on the screen</li>
            </ul>

            <p className="service1-para">
              Our Display Panel Repair service ensures long-term performance with advanced
              diagnostics, high-grade components, and professional handling of delicate panel parts.
            </p>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="service1-right section-animate-child delay-2">

            <h2 className="contact-box-heading">Let us help you today</h2>

            <p className="contact-box-text">
              Need assistance with TV panel issues?  
              Fill the form below and our technician will call you.
            </p>

            {/* 🔥 Reusable EmailJS working contact form */}
            <ContactForm subject="Display Panel Repair Inquiry" className="contact-box-form" />

          </div>

        </div>
      </section>
    </>
  );
}
