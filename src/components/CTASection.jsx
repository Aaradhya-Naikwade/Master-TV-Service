import "../styles/cta.css";
import { useEffect, useRef } from "react";
import CTA from "../images/cta-section.png"

export default function CTASection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          elem.classList.add("animate-section");
        }
      },
      { threshold: 0.2 }
    );

    if (elem) observer.observe(elem);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="cta-section section-animate-parent"
      ref={sectionRef}
    >
      <div className="overlay"></div>

      <div className="section-container">

        <div className="cta-inner">

          {/* LEFT IMAGE */}
          <div className="cta-image-box section-animate-child delay-1">
            <img
              src={CTA}
              alt="TV Repair"
              className="cta-image"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="cta-content section-animate-child delay-2">
            <h2 className="cta-heading">IS YOUR TV NOT WORKING?</h2>

            <p className="cta-text">
              We can help. If you would like more information about the LCD TV
              repair or LED TV screen repair services, or any other repairs we
              provide, then please call us.
            </p>

            <p className="cta-phone">+91-84483 15376</p>
          </div>

        </div>

      </div>
    </section>
  );
}
