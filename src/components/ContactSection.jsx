// import "../styles/contact.css";
// import { useEffect, useRef } from "react";

// export default function ContactSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const elem = sectionRef.current;

//     const obs = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           elem.classList.add("animate-section");
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (elem) obs.observe(elem);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section className="contact-section section-animate-parent" ref={sectionRef}>
//       <div className="overlay"></div>

//       <div className="section-container contact-wrapper">
//         <h2 className="contact-heading section-animate-child delay-1">
//           Contact Us
//         </h2>

//         <div className="contact-card section-animate-child delay-2">

//           <form className="contact-form">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="contact-input"
//               required
//             />

//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="contact-input"
//               required
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="contact-input"
//               required
//             />

//             <textarea
//               placeholder="Your Message"
//               className="contact-textarea"
//               required
//             ></textarea>

//             <button type="submit" className="contact-submit">
//               Submit
//             </button>
//           </form>

//         </div>
//       </div>
//     </section>
//   );
// }




import "../styles/contact.css";
import { useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm";

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          elem.classList.add("animate-section");
        }
      },
      { threshold: 0.2 }
    );

    if (elem) obs.observe(elem);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="contact-section section-animate-parent"
      ref={sectionRef}
    >
      <div className="overlay"></div>

      <div className="section-container contact-wrapper">
        <h2 className="contact-heading section-animate-child delay-1">
          Contact Us
        </h2>

        <div className="contact-card section-animate-child delay-2">
          {/* Injecting the reusable EmailJS Contact Form */}
          <ContactForm subject="General Inquiry" />
        </div>
      </div>
    </section>
  );
}
