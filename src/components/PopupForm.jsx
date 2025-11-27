import { useEffect } from "react";
import "../styles/PopupForm.css";
import ContactForm from "./ContactForm";

export default function PopupForm({ open, onClose }) {
  // Close popup when user clicks outside the box
  useEffect(() => {
    function handleClickOutside(e) {
      if (e.target.classList.contains("popup-overlay")) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close-btn" onClick={onClose}>×</button>

        <h2 className="popup-title">Contact Us</h2>

        <ContactForm />
      </div>
    </div>
  );
}
