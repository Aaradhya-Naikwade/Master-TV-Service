import "../styles/about.css";
import { useEffect, useRef } from "react";
import aboutus from "../images/about-us.png";

export default function AboutUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("animate-section");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="section-container">

        <div className="about-grid">
          {/* LEFT IMAGE */}
          <div className="about-left about-fade delay-1">
            <img
              src={aboutus}
              alt="about img"
              className="about-img"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-right">
            <p className="about-tag about-fade delay-1">About Us</p>

            <h2 className="about-title about-fade delay-2">
              We Provide The Best Services <br />
              To Repair Your TV
            </h2>

            <p className="about-text about-fade delay-3">
              We are a trusted and experienced TV repair service provider in Gurugram,
              offering reliable solutions for Smart TV, Android TV, LED, OLED, and QLED models.
              Our technicians diagnose issues quickly and use genuine parts for long-lasting repairs.
            </p>

            <a href="/about" className="about-btn about-fade delay-4">
              Read More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
