import "../styles/service4.css";
import { useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm";

export default function Service3Page() {
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
      {/* HERO */}
      <section className="service3-hero">
        <div className="service3-hero-overlay"></div>
        <h1 className="service3-hero-text">All Brand LED/TV Backlight Repair</h1>
      </section>

      {/* MAIN SECTION */}
      <section className="service3-page section-animate-parent" ref={sectionRef}>
        <div className="section-container service3-grid">

          {/* LEFT CONTENT */}
          <div className="service3-left section-animate-child delay-1">

            <h2 className="service3-heading">Professional LED / TV Backlight Repair</h2>

            <p className="service3-para">
              Backlight is the main light source of your LED TV. When it stops working, 
              the TV may turn ON but the screen stays dark, dim, or the picture disappears 
              after a few seconds. Instead of replacing the entire panel, we offer 
              component-level and strip-level backlight repairing for all TV brands.
            </p>

            <p className="service3-para">
              Our expert technicians diagnose faulty LEDs, backlight drivers, 
              panel strips, and voltage issues using advanced tools to ensure 
              long-lasting performance at affordable prices.
            </p>

            <h3 className="service3-subheading">Common Backlight Issues We Repair</h3>

            <ul className="service3-list">
              <li>✔ TV turns ON but screen completely dark</li>
              <li>✔ Display visible only with torch light</li>
              <li>✔ Picture comes and disappears in 2–3 seconds</li>
              <li>✔ Dim or uneven brightness on screen</li>
              <li>✔ White screen due to backlight failure</li>
              <li>✔ Flashing / blinking backlight</li>
              <li>✔ Backlight driver circuit failure</li>
            </ul>

            <p className="service3-para">
              We use high-quality LED strips, proper heat management solutions, 
              and accurate voltage calibration to ensure your TV’s backlight 
              works perfectly for years.
            </p>

          </div>

          {/* RIGHT FORM */}
          <div className="service3-right section-animate-child delay-2">

            <h2 className="contact-box-heading">Let Us Fix Your TV Backlight</h2>

            <p className="contact-box-text">
              Facing display or backlight issues? Fill the form and we will contact you.
            </p>

            {/* 🔥 EmailJS Working Form */}
            <ContactForm
              subject="Backlight Repair Inquiry"
              className="contact-box-form"
            />
          </div>

        </div>
      </section>
    </>
  );
}
