// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";



// // Reusable Input Component
// const Input = ({
//   label,
//   type,
//   name,
//   value,
//   onChange,
//   placeholder,
//   className,
// }) => {
//   return (
//     <div className="input-group">
//       <label htmlFor={name}>{label}</label>
//       {type === "textarea" ? (
//         <textarea
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className={className}
//           required
//         />
//       ) : (
//         <input
//           id={name}
//           type={type}
//           name={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className={className}
//           required
//         />
//       )}
//     </div>
//   );
// };

// export default function Contact() {
//   const formRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Send email to Admin
//       await emailjs.sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );

//       // Send Auto-Reply to User
//       await emailjs.sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_AUTOREPLY_ID,
//         formRef.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );

//       alert("✅ Message sent successfully! Check your email.");
//       setFormData({ fullName: "", email: "", message: "" });
//       formRef.current.reset();
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       alert("❌ Failed to send message. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container page">
//       <h2>Contact Us</h2>

//       <form ref={formRef} onSubmit={sendEmail} className="form contact-form">
//         <Input
//           label="Full Name"
//           type="text"
//           name="fullName"
//           placeholder="Full name"
//           value={formData.fullName}
//           onChange={handleChange}
//         />

//         <Input
//           label="Email"
//           type="email"
//           name="email"
//           placeholder="name@example.com"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <Input
//           label="Message"
//           type="textarea"
//           name="message"
//           placeholder="Type a message"
//           value={formData.message}
//           onChange={handleChange}
//           className="message-input"
//         />

//         <button type="submit" className="btn primary" disabled={loading}>
//           {loading ? "Sending..." : "Send Email"}
//         </button>
//       </form>

//       <div className="btn-container">
//         <a
//           href="https://wa.me/message/GPOK5WUAN56FF1"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="whatsapp-btn"
//         >
//           Message Smart Errands & Souvenir on WhatsApp
//         </a>
//       </div>
//     </div>
//   );
// }
export default function Contact() {
  return (
    <div className="container page">
      <h2>Contact Us</h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="form contact-form"
      >
        {/* Netlify required hidden input */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Full name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type a message"
            className="message-input"
            required
          />
        </div>

        <button type="submit" className="btn primary">
          Send Message
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
