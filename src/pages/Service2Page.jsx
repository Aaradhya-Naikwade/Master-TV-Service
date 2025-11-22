import "../styles/service2.css";
import { useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm";

export default function Service2Page() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          elem.classList.add("animate-section");
        }
      },
      { threshold: 0.05 } // 🔥 MOBILE-FRIENDLY
    );

    if (elem) obs.observe(elem);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="service2-hero">
        <div className="service2-hero-overlay"></div>
        <h1 className="service2-hero-text">
          Panel Bonding By ACF / COF / TAB Machine
        </h1>
      </section>

      {/* MAIN CONTENT */}
      <section className="service2-page section-animate-parent" ref={sectionRef}>
        <div className="section-container service2-grid">

          {/* LEFT CONTENT */}
          <div className="service2-left section-animate-child delay-1">

            <h2 className="service2-heading">
              Advanced ACF / COF / TAB Bonding Repair
            </h2>

            <p className="service2-para">
              ACF / COF / TAB bonding is one of the most advanced and delicate
              repair techniques used to fix TV display panels. When the connection
              between the panel and its driver IC (COF/TAB) becomes loose or damaged,
              you may see vertical lines, half display, slow display, or no display
              issues.
            </p>

            <p className="service2-para">
              Using professional ACF Bonding Machines, we accurately re-bond the COF
              strip to revive the display without replacing the entire panel — saving
              up to 70% of the replacement cost.
            </p>

            <h3 className="service2-subheading">When Does ACF/COF/TAB Bonding Help?</h3>

            <ul className="service2-list">
              <li>✔ Vertical or horizontal lines on screen</li>
              <li>✔ Half screen visible / other half dark</li>
              <li>✔ Display visible only when pressing the panel</li>
              <li>✔ Ghosting or slow-motion display</li>
              <li>✔ No display due to COF loose connection</li>
              <li>✔ Multi-color patches or distorted output</li>
            </ul>

            <p className="service2-para">
              Our specialized ACF bonding setup ensures precise pressure,
              temperature, and alignment to restore the panel to its optimal
              working condition.
            </p>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="service2-right section-animate-child delay-2">

            <h2 className="contact-box-heading">Let us help you today</h2>

            <p className="contact-box-text">
              Facing display issues? Our ACF bonding experts can restore your
              panel. Submit your details below.
            </p>

            {/* 🔥 EmailJS Working Form */}
            <ContactForm
              subject="ACF / COF / TAB Bonding Inquiry"
              className="contact-box-form"
            />

          </div>

        </div>
      </section>
    </>
  );
}
