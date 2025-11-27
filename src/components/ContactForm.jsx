// console.log("SERVICE_ID RAW:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
// console.log("TEMPLATE_ID RAW:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
// console.log("PUBLIC_KEY RAW:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
// console.log("ALL ENV KEYS:", Object.keys(import.meta.env));

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ subject = "", className = "" }) {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
        const phone = form["phone"].value.trim();
        const address = form["address"].value.trim();
        const message = form["message"].value.trim();

        if (!name || !message) {
            setStatus({
                type: "error",
                message: "Name and Message are required.",
            });
            return;
        }

        setLoading(true);
        setStatus(null);

        const templateParams = {
            from_name: name,
            phone: phone,
            address: address,
            message: message,
            subject: subject || "Website Contact",
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
            {/* NAME */}
            <input
                name="from_name"
                type="text"
                placeholder="Your Name"
                className="contact-input"
                required
            />

            {/* PHONE */}
            <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="contact-input"
            />

            {/* ADDRESS (NEW FIELD) */}
            <input
                name="address"
                type="text"
                placeholder="Your Address"
                className="contact-input"
            />

            {/* MESSAGE */}
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
                    className={`contact-status ${
                        status.type === "error" ? "error" : "success"
                    }`}
                >
                    {status.message}
                </div>
            )}
        </form>
    );
}
