import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

import { FaTv, FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const location = useLocation();

  /* CLOSE MENUS ON PAGE CHANGE */
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  /* CLICK OUTSIDE TO CLOSE */
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* BODY SCROLL LOCK (MOBILE MENU) */
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [mobileMenuOpen]);

  /* STICKY NAVBAR */
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky-nav" : ""}`}>
      <div className="container">

        {/* LOGO */}
        <div className="logo">
          <FaTv className="tv-icon" />
          <span>Master TV Service</span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="desktop-nav">

          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>

          {/* SERVICES DROPDOWN */}
          <div className="services-wrapper" ref={dropdownRef}>
            <button
              className={`services-btn ${dropdownOpen ? "rotate" : ""}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services <IoIosArrowDown />
            </button>

            {dropdownOpen && (
              <div className="dropdown">

                <NavLink
                  to="/display-panel-repairing"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Display Panel Repairing
                </NavLink>

                <NavLink
                  to="/panel-bonding-acf-cof-tab"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Panel Bonding (ACF/COF/TAB)
                </NavLink>

                <NavLink
                  to="/motherboard-repairs"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Motherboard Repairs
                </NavLink>

                <NavLink
                  to="/backlight-repair"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  LED / TV Backlight Repair
                </NavLink>

              </div>
            )}
          </div>

          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact Us
          </NavLink>

          {/* WHATSAPP BUTTON (DESKTOP) */}
          <a
            href="https://wa.me/918448315376"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-circle-btn"
          >
            <FaWhatsapp className="whatsapp-circle-icon" />
            <span>Chat with Us</span>
          </a>



        </div>

        {/* HAMBURGER (MOBILE) */}
        <button className="hamburger" onClick={() => setMobileMenuOpen(true)}>
          <FaBars />
        </button>

      </div>

      {/* MOBILE BACKDROP */}
      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop">

          {/* MOBILE SIDEBAR */}
          <div className="mobile-menu" ref={mobileMenuRef}>

            <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
              <FaTimes />
            </button>

            <div className="mobile-links">

              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </NavLink>

              {/* MOBILE SERVICES DROPDOWN */}
              <button
                className={`mobile-services-btn ${mobileServicesOpen ? "rotate" : ""}`}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services <IoIosArrowDown />
              </button>

              {mobileServicesOpen && (
                <div className="mobile-services-dropdown">

                  <NavLink
                    to="/display-panel-repairing"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Display Panel Repairing
                  </NavLink>

                  <NavLink
                    to="/panel-bonding-acf-cof-tab"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Panel Bonding (ACF/COF/TAB)
                  </NavLink>

                  <NavLink
                    to="/motherboard-repairs"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Motherboard Repairs
                  </NavLink>

                  <NavLink
                    to="/backlight-repair"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    LED / TV Backlight Repair
                  </NavLink>

                </div>
              )}

              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </NavLink>

              {/* WHATSAPP BUTTON (MOBILE) */}
              <a
                href="https://wa.me/918448315376"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-whatsapp-circle-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaWhatsapp className="mobile-whatsapp-circle-icon" />
                Chat with Us
              </a>


            </div>

          </div>
        </div>
      )}

    </nav>
  );
}
