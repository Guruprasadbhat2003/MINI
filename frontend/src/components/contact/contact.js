import React from "react";
import "./contact.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        {/* Formspree Form */}
        <form
          action="https://formspree.io/f/xzzbwebz" // Replace with your Formspree form ID
          method="POST"
        >
          <label htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              name="name" // Important for Formspree
              placeholder="Your Name"
              required
              aria-label="Enter your name"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email" // Important for Formspree
              placeholder="example@example.com"
              required
              aria-label="Enter your email"
            />
          </label>
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
              name="message" // Important for Formspree
              placeholder="Your Message"
              required
              aria-label="Enter your message"
            ></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info-section">
        <h3>Contact Information</h3>
        <p>
          <strong>Address:</strong> Canara College, Mangalore
        </p>
        <p>
          <strong>Phone:</strong> +91 90350 48909
        </p>
        <p>
          <strong>Email:</strong> info@canaracollege.com
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
