import React from "react";
import "./contact.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="contact-us-container">
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
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
              placeholder="example@example.com"
              required
              aria-label="Enter your email"
            />
          </label>
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
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
