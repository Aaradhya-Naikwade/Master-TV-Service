import "../styles/aboutPage.css";
import { useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm";

export default function AboutUsPage() {
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
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <h1 className="about-hero-text">About Us</h1>
      </section>

      {/* MAIN CONTENT */}
      <section className="about-page section-animate-parent" ref={sectionRef}>
        <div className="section-container about-grid">

          {/* LEFT CONTENT */}
          <div className="about-left section-animate-child delay-1">

            <h2 className="about-heading">Who We Are</h2>

            <p className="about-para">
              Master TV Service is one of the most trusted and professional TV
              repair service providers in Gurugram. With years of experience, we
              deliver high-quality LED, LCD, Smart TV, OLED, and QLED repair solutions.
            </p>

            <p className="about-para">
              Our certified technicians diagnose the issue quickly and fix it with
              genuine components to ensure long-lasting results. We believe in 
              transparent pricing, fast service, and customer satisfaction.
            </p>

            <h3 className="about-subheading">Why Choose Us?</h3>

            <ul className="about-list">
              <li>✔ Experienced and certified technicians</li>
              <li>✔ Doorstep TV repair service across Gurugram</li>
              <li>✔ 100% genuine spare parts</li>
              <li>✔ Transparent and affordable pricing</li>
              <li>✔ Fast service and same-day repair available</li>
            </ul>

          </div>

          {/* RIGHT CONTACT BOX */}
          <div className="about-right section-animate-child delay-2">

            <h2 className="contact-box-heading">Let us help you today</h2>

            <p className="contact-box-text">
              Have a question or need quick TV repair assistance?  
              Reach out to us below.
            </p>

            {/* 🔥 Reusable working EmailJS form */}
            <ContactForm subject="About Page Inquiry" className="contact-box-form" />

          </div>

        </div>
      </section>
    </>
  );
}
