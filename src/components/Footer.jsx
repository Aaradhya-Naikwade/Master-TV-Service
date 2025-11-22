import "../styles/footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-inner">

        {/* LEFT - COMPANY INFO */}
        <div className="footer-left">
          <h2 className="footer-title">Master TV Service</h2>

          <p className="footer-about">
            We provide fast, professional and affordable TV repair services 
            including LED, LCD, Smart TV, OLED & QLED repairs across Gurugram.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-social">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="https://wa.me/918448315376" target="_blank" className="social-icon"><FaWhatsapp /></a>
          </div>
        </div>

        {/* CENTER - CONTACT INFO (NOW LEFT ALIGNED) */}
        <div className="footer-center">
          <div className="footer-item">
            <FaPhoneAlt className="footer-icon" />
            <p>+91-84483 15376</p>
          </div>

          <div className="footer-item">
            <FaEnvelope className="footer-icon" />
            <p>mastertvservice@gmail.com</p>
          </div>

          <div className="footer-item">
            <FaMapMarkerAlt className="footer-icon" />
            <p>Sector 93, Gurugram, Haryana</p>
          </div>
        </div>

        {/* RIGHT - GOOGLE MAP */}
        <div className="footer-right">
          <iframe
            title="map"
            className="footer-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3103892627483!2d77.0413!3d28.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b408b687eb%3A0xfbfe352e!2sGurugram!5e0!3m2!1sen!2sin!4v1702748299123!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Master TV Service — All Rights Reserved.
      </div>
    </footer>
  );
}
