import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
   <div
  className="flex justify-center items-center min-h-screen px-6 py-10
    bg-gradient-to-br from-green-50 via-white to-green-100
    dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
    transition-colors duration-300"
>
  {/* Card */}
  <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg dark:shadow-emerald-900/30 bg-white dark:bg-zinc-900">
    
    {/* Image Section (hidden in mobile) */}
    <div className="hidden md:flex w-1/2 bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900 dark:to-green-800 justify-center items-center p-10">
      <img
        src="https://i.ibb.co/tp4VNg2r/Contact-us-amico.png"
        alt="Contact illustration"
        className="w-80 h-auto object-contain drop-shadow-lg"
      />
    </div>

    {/* Contact Form Section */}
    <div className="w-full md:w-1/2 p-10 space-y-6">
      <h2 className="text-4xl font-bold text-center text-green-700 dark:text-emerald-400">
        Contact Us
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-400">
        We'd love to hear from you. Fill out the form below.
      </p>

      {submitted && (
        <div className="flex items-center gap-3 mb-4 text-green-600 dark:text-emerald-400 font-medium">
          <FaCheckCircle className="text-xl" />
          <p>Thank you for reaching out! We'll get back to you soon.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full px-5 py-3 border border-green-700 rounded-xl
            dark:bg-zinc-800 dark:border-emerald-400 dark:text-emerald-300
            focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="w-full px-5 py-3 border border-green-700 rounded-xl
            dark:bg-zinc-800 dark:border-emerald-400 dark:text-emerald-300
            focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Write your message"
          rows="4"
          className="w-full px-5 py-3 border border-green-700 rounded-xl
            dark:bg-zinc-800 dark:border-emerald-400 dark:text-emerald-300
            focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-2xl transition shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Contact;
