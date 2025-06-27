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
  };

  return (
    <section
      className="mt-8 max-w-5xl mx-auto px-6 py-12 rounded-3xl shadow-md
        bg-gradient-to-br from-green-50 via-white to-green-100
        dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
        transition-colors duration-300"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 dark:text-emerald-400 mb-2">
          Contact Us
        </h1>
        <p className="text-gray-700 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Have questions, suggestions, or need help? Fill out the form and our team will reach out shortly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-md">
        {submitted && (
          <div className="flex items-center gap-3 mb-6 text-green-600 dark:text-emerald-400 font-medium">
            <FaCheckCircle className="text-xl" />
            <p>Thank you for reaching out! We'll get back to you soon.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-5 py-3 border rounded-xl
                dark:bg-zinc-700 dark:border-zinc-600
                focus:outline-none focus:ring-2 focus:ring-green-500
                transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-5 py-3 border rounded-xl
                dark:bg-zinc-700 dark:border-zinc-600
                focus:outline-none focus:ring-2 focus:ring-green-500
                transition"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message"
              className="w-full px-5 py-3 border rounded-xl
                dark:bg-zinc-700 dark:border-zinc-600
                focus:outline-none focus:ring-2 focus:ring-green-500
                transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
