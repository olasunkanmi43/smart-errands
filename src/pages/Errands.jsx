

// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";



// export default function Errands() {
//   const formRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     errand: "Market Runs",
//     email: "",
//     location: "",
//     details: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const sendErrandRequest = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Send to Errands Admin
//       await emailjs.sendForm(
//         import.meta.env.VITE_EMAILJS_ERRANDS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_ERRAND_ADMIN_TEMPLATE_ID,
//         formRef.current,
//         import.meta.env.VITE_EMAILJS_ERRAND_PUBLIC_KEY
//       );

//       // Send Auto-reply to User
//       await emailjs.sendForm(
//         import.meta.env.VITE_EMAILJS_ERRANDS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_ERRAND_AUTOREPLY_TEMPLATE_ID,
//         formRef.current,
//         import.meta.env.VITE_EMAILJS_ERRAND_PUBLIC_KEY
//       );

//       alert("✅ Errand request submitted successfully!");
//       setFormData({
//         errand: "Market Runs",
//         email: "",
//         location: "",
//         details: "",
//       });
//       formRef.current.reset();
//     } catch (error) {
//       console.error("EmailJS Errand Error:", error);
//       alert("❌ Failed to submit request. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container page">
//       <h2>Book an Errand</h2>

//       <form
//         ref={formRef}
//         onSubmit={sendErrandRequest}
//         className="form errand-form"
//       >
//         <label>We can help you with:</label>
//         <select
//           name="errand"
//           value={formData.errand}
//           onChange={handleChange}
//           required
//         >
//           <option>Market Runs</option>
//           <option>General Errands</option>
//           <option>Waybill Dispatch</option>
//           <option>Doorstep Delivery</option>
//           <option>Gift Sourcing</option>
//           <option>Queue Standing</option>
//           <option>Souvenirs & Gift Items</option>
//         </select>

//         <label>Your Email</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="name@example.com"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label>Your Location / Address</label>
//         <input
//           type="text"
//           name="location"
//           placeholder="Enter your address"
//           value={formData.location}
//           onChange={handleChange}
//           required
//         />

//         <label>Details</label>
//         <textarea
//           name="details"
//           placeholder="Describe what you need done"
//           value={formData.details}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit" className="btn primary" disabled={loading}>
//           {loading ? "Submitting..." : "Submit Request"}
//         </button>
//       </form>
//     </div>
//   );
// }

export default function Errands() {
  return (
    <div className="container page">
      <h2>Book an Errand</h2>

      <form
        name="errands"
        method="POST"
        data-netlify="true"
        className="form errand-form"
      >
        {/* Netlify required hidden input */}
        <input type="hidden" name="form-name" value="errands" />

        <label>We can help you with:</label>
        <select name="errand" required>
          <option>Market Runs</option>
          <option>General Errands</option>
          <option>Waybill Dispatch</option>
          <option>Doorstep Delivery</option>
          <option>Gift Sourcing</option>
          <option>Queue Standing</option>
          <option>Souvenirs & Gift Items</option>
        </select>

        <label>Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="name@example.com"
          required
        />

        <label>Your Location / Address</label>
        <input
          type="text"
          name="location"
          placeholder="Enter your address"
          required
        />

        <label>Details</label>
        <textarea
          name="details"
          placeholder="Describe what you need done"
          required
        />

        <button type="submit" className="btn primary">
          Submit Request
        </button>
      </form>
    </div>
  );
}
