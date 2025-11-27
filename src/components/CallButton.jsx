import { FaPhoneAlt } from "react-icons/fa";
import "../styles/CallButton.css";

export default function CallButton() {
  return (
    <a href="tel:+918448315376" className="call-button">
      <FaPhoneAlt className="call-icon" />
    </a>
  );
}
