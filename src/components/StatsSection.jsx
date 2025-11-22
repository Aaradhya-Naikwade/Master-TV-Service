import { useEffect, useRef, useState } from "react";
import "../styles/stats.css";

export default function StatsSection() {
  const sectionRef = useRef(null);

  const stats = [
    { label: "Years of Experience", value: 30 },
    { label: "TV’s / LED Repair", value: 10000 },
    { label: "Satisfied Customers", value: 7896 },
  ];

  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("animate-section");
          startCounting();
        }
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Count Animation
  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const fps = 60;

    stats.forEach((stat, i) => {
      let start = 0;
      const increment = stat.value / (duration / fps);

      const counter = setInterval(() => {
        start += increment;

        if (start >= stat.value) {
          start = stat.value;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(start);
          return updated;
        });
      }, 1000 / fps);
    });
  };

  return (
    <section className="stats-section section-animate-parent" ref={sectionRef}>
      <div className="section-container">

        <div className="stats-grid">

          {stats.map((stat, i) => (
            <div
              className={`stats-box section-animate-child delay-${i + 1}`}
              key={i}
            >
              <h2 className="stats-number">
                {counts[i].toLocaleString()}+
              </h2>

              <p className="stats-label">{stat.label}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
