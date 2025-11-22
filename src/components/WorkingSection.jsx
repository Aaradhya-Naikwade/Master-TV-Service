import "../styles/working.css";
import { useEffect, useRef } from "react";

// IMPORT REACT ICONS
import { FaCalendarCheck, FaTools, FaCheckCircle } from "react-icons/fa";

export default function WorkingSection() {
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
    <section className="working-section section-animate-parent" ref={sectionRef}>
      <div className="overlay"></div>

      {/* FULL SPACING FIX */}
      <div className="section-container working-wrapper">

        <h2 className="working-heading section-animate-child delay-1">
          Our Working Process
        </h2>

        <div className="working-grid">

          {/* STEP 1 */}
          <div className="working-box section-animate-child delay-2">
            <div className="icon-circle">
              <FaCalendarCheck className="working-icon" />
            </div>

            <h3 className="working-title">Make an Appointment</h3>

            <p className="working-text">
              For in-shop or in-home service, book a technician easily.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="working-box section-animate-child delay-3">
            <div className="icon-circle">
              <FaTools className="working-icon" />
            </div>

            <h3 className="working-title">Technician Comes To Your Home</h3>

            <p className="working-text">
              We visit your home or you may bring your TV to our shop.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="working-box section-animate-child delay-4">
            <div className="icon-circle">
              <FaCheckCircle className="working-icon" />
            </div>

            <h3 className="working-title">Your TV Is Fixed</h3>

            <p className="working-text">
              Your TV is diagnosed properly and repaired using genuine parts.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
