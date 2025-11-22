console.log("SERVICE_ID RAW:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("TEMPLATE_ID RAW:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC_KEY RAW:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
console.log("ALL ENV KEYS:", Object.keys(import.meta.env));


import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ subject = "", className = "" }) {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    // Read env vars
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug (optional) — uncomment if needed
    // console.log("SERVICE_ID:", SERVICE_ID);
    // console.log("TEMPLATE_ID:", TEMPLATE_ID);
    // console.log("PUBLIC_KEY:", PUBLIC_KEY);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setStatus({
                type: "error",
                message: "Email service not configured. Check .env file.",
            });
            return;
        }

        const form = formRef.current;
        if (!form) return;

        const name = form["from_name"].value.trim();
        const email = form["from_email"].value.trim();
        const phone = form["phone"].value.trim();
        const message = form["message"].value.trim();
        const subj = form["subject"] ? form["subject"].value.trim() : subject || "Website Contact";

        if (!name || !email || !message) {
            setStatus({
                type: "error",
                message: "Please fill all required fields.",
            });
            return;
        }

        setLoading(true);
        setStatus(null);

        const templateParams = {
            from_name: name,
            from_email: email,
            phone: phone,
            message: message,
            subject: subj || subject || "Website Contact",
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setStatus({
                type: "success",
                message: "Message sent successfully! Thank you.",
            });
            form.reset();
        } catch (err) {
            console.error("EmailJS Error:", err);
            setStatus({
                type: "error",
                message: "Failed to send message. Try again later.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`contact-form ${className}`}
            noValidate
        >
            <input
                name="from_name"
                type="text"
                placeholder="Your Name"
                className="contact-input"
                required
            />

            <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="contact-input"
            />

            <input
                name="from_email"
                type="email"
                placeholder="Email Address"
                className="contact-input"
                required
            />

            <input
                name="subject"
                type="text"
                placeholder="Subject (optional)"
                defaultValue={subject}
                className="contact-input"
            />

            <textarea
                name="message"
                placeholder="Your Message"
                className="contact-textarea"
                required
            />

            <button type="submit" className="contact-submit" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
            </button>

            {status && (
                <div
                    className={`contact-status ${status.type === "error" ? "error" : "success"
                        }`}
                >
                    {status.message}
                </div>
            )}
        </form>
    );
}
