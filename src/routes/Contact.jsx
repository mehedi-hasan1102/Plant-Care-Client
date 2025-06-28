
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
// import LoginLottie from "../LoginLottie";

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

    // Optionally, reset "submitted" after some seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen px-6 py-10
        bg-gradient-to-br from-green-50 via-white to-green-100
        dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
        transition-colors duration-300"
    >
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 shadow-md dark:shadow-green-800/30 p-10 rounded-3xl space-y-6">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-emerald-400">
          Contact Us
        </h2>

        {submitted && (
          <div className="flex items-center gap-3 mb-4 text-green-600 dark:text-emerald-400 font-medium">
            <FaCheckCircle className="text-xl" />
            <p>Thank you for reaching out! We'll get back to you soon.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
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

          {/* Email */}
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

          {/* Message */}
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
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-3xl transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
