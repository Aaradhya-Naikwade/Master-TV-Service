import "../styles/service3.css";
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
        <h1 className="service3-hero-text">Motherboard Repairs</h1>
      </section>

      {/* MAIN SECTION */}
      <section className="service3-page section-animate-parent" ref={sectionRef}>
        <div className="section-container service3-grid">

          {/* LEFT CONTENT */}
          <div className="service3-left section-animate-child delay-1">

            <h2 className="service3-heading">Professional TV Motherboard Repair</h2>

            <p className="service3-para">
              The motherboard is the “brain” of your TV. When it gets damaged,
              you may experience issues like no power, no sound, no display,
              restart loop, or HDMI/USB not working. Instead of replacing the
              entire board, we provide expert-level chip repairing and component
              level services to restore your motherboard at affordable prices.
            </p>

            <p className="service3-para">
              Our experienced technicians diagnose the faulty ICs, SMD components,
              circuits, and power supply issues using advanced soldering and diagnostic
              tools to ensure long-term performance.
            </p>

            <h3 className="service3-subheading">Common Motherboard Issues We Repair</h3>

            <ul className="service3-list">
              <li>✔ TV not turning ON</li>
              <li>✔ TV automatically turning OFF / Restart loop</li>
              <li>✔ No display but sound is working</li>
              <li>✔ USB, HDMI ports not responding</li>
              <li>✔ Backlight ON but no image on screen</li>
              <li>✔ Relays clicking / power supply failure</li>
              <li>✔ Remote not working due to IR board issues</li>
            </ul>

            <p className="service3-para">
              We only use high-quality components and perform precise soldering to
              restore the motherboard at component level, saving you money and time.
            </p>

          </div>

          {/* RIGHT FORM */}
          <div className="service3-right section-animate-child delay-2">

            <h2 className="contact-box-heading">Let us help you today</h2>

            <p className="contact-box-text">
              Facing motherboard issues? Fill the form and we will contact you.
            </p>

            {/* 🔥 EmailJS Working Form */}
            <ContactForm
              subject="Motherboard Repair Inquiry"
              className="contact-box-form"
            />

          </div>

        </div>
      </section>
    </>
  );
}
