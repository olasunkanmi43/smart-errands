import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // ⛔ stop redirect
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xojaerwd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container page">
      <h2>Contact Us</h2>

      {submitted && <p className="success">✅ Your message has been sent!</p>}

      <form onSubmit={handleSubmit} className="form contact-form">
        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" name="fullName" type="text" required />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>

        <button type="submit" className="btn primary" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="btn-container">
       
        <a
          href="https://wa.me/message/GPOK5WUAN56FF1"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          
          Message Smart Errands & Souvenir on WhatsApp
        </a>
      </div>
    </div>
  );
}
