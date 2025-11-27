import "../styles/services.css";
import { useEffect, useRef } from "react";
import Service1 from "../images/Service-1.png"
import Service2 from "../images/Service-2.jpeg"
// import Service3 from "../images/Service-3.png"
import Service4 from "../images/Service-4.jpeg"
import Service5 from "../images/Service-5.png"
import Service6 from "../images/Service-6.png"


export default function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          elem.classList.add("animate-section");
        }
      },
      { threshold: 0.05 } // 🔥 mobile-friendly
    );

    if (elem) obs.observe(elem);
    return () => obs.disconnect();
  }, []);

  const services = [
    {
      img: Service1,
      title: "LED / LCD TV Repair",
      text: "We repair all LED & LCD TVs with genuine parts and expert technicians.",
    },
    {
      img: Service2,
      title: "Smart TV Repair",
      text: "Software & hardware issues fixed for Android, Google & WebOS TVs.",
    },
    {
      img: "https://www.serviceonwheel.com/uploads/service/848801600844756.jpg",
      title: "OLED TV Repair",
      text: "Premium OLED screen diagnostics and repairs with utmost care.",
    },
    {
      img: Service4,
      title: "QLED TV Repair",
      text: "Specialized repair for QLED TVs with panel & color accuracy checks.",
    },
    {
      img: Service5,
      title: "Motherboard Repair",
      text: "Board-level repair for no display, no power & flickering issues.",
    },
    {
      img: Service6,
      title: "Installation & Mounting",
      text: "Professional TV wall-mounting & installation at your home.",
    },
  ];

  return (
    <section className="services-section section-animate-parent" ref={sectionRef}>
      <div className="section-container">

        <div className="services-top">
          <h2 className="services-main-heading section-animate-child delay-1">
            Services
          </h2>

          <p className="services-sub-heading section-animate-child delay-2">
            What we can repair
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`service-box section-animate-child delay-${i + 2}`} key={i}>
              <img src={s.img} alt={s.title} className="service-img" />
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
