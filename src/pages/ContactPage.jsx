import "../styles/contactPage.css";
import { useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
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
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <h1 className="contact-hero-text">Contact Us</h1>
      </section>

      {/* MAIN FORM SECTION */}
      <section className="contact-page section-animate-parent" ref={sectionRef}>
        <div className="section-container">

          <div className="contact-form-card section-animate-child delay-1">

            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-subtext">
              Fill the form below and our technician will reach out shortly.
            </p>

            {/* 🔥 Reusable EmailJS WORKING FORM */}
            <ContactForm subject="Contact Page Inquiry" className="contact-form" />

          </div>

        </div>
      </section>
    </>
  );
}
