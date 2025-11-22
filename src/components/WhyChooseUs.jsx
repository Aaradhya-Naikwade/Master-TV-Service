import "../styles/why.css";
import { useEffect, useRef } from "react";
import Wcs1 from "../images/why-choose-us-1.png"

export default function WhyChooseUs() {
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
    <section className="why-section" ref={sectionRef}>
      <div className="container">

        <h2 className="why-heading">Why Choose Us</h2>

        <div className="why-grid">

          {/* Column 1 */}
          <div className="why-box delay-1">
            <img 
              src={Wcs1}
              alt="Experienced Technicians"
              className="why-img"
            />
            <h3>Experienced Technicians</h3>
            <p>
              Highly trained experts with years of experience in Smart TV, LED,
              OLED and QLED repairs.
            </p>
          </div>

          {/* Column 2 */}
          <div className="why-box delay-2">
            <img 
              src={Wcs1}
              alt="Fast Doorstep Service"
              className="why-img"
            />
            <h3>Fast Doorstep Service</h3>
            <p>
              We provide quick home-visit repair solutions with minimum waiting time.
            </p>
          </div>

          {/* Column 3 */}
          <div className="why-box delay-3">
            <img 
              src={Wcs1}
              alt="Affordable Pricing"
              className="why-img"
            />
            <h3>Affordable & Transparent Pricing</h3>
            <p>
              No hidden charges. We offer reliable service with clear and honest pricing.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
