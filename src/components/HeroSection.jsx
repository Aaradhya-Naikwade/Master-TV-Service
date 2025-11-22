import "../styles/hero.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">   {/* <<< SAME CONTAINER AS NAVBAR */}

        <div className="hero-content">
          <p className="hero-small">Welcome to Master TV Service</p>

          <h1 className="hero-title">
            Expert Smart TV <br />
            Repair & Installation
          </h1>

          <p className="hero-instant">Instant Service</p>

          <a href="/contact" className="hero-btn">
            Enquire Now
          </a>
        </div>

      </div>
    </section>
  );
}
