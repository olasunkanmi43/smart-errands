import { useState } from "react";

export default function Errands() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // ⛔ stop redirect
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mzdpeogd", {
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
        alert("Failed to submit errand request.");
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
      <h2>Book an Errand</h2>

      {submitted && (
        <p className="success">✅ Your errand request has been sent!</p>
      )}

      <form onSubmit={handleSubmit} className="form errand-form">
        <label>We can help you with:</label>
        <select name="errand" required defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option>Market Runs</option>
          <option>General Errands</option>
          <option>Waybill Dispatch</option>
          <option>Doorstep Delivery</option>
          <option>Gift Sourcing</option>
          <option>Queue Standing</option>
          <option>Souvenirs & Gift Items</option>
        </select>

        <label>Your Email</label>
        <input type="email" name="email" required />

        <label>Location / Address</label>
        <input type="text" name="location" required />

        <label>Details</label>
        <textarea name="details" required />

        <button type="submit" className="btn primary" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
