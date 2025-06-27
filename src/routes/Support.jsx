import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I add a new plant?",
    answer:
      "Go to the 'Add Plant' section in the dashboard and fill out the required details about your plant.",
  },
  {
    question: "Can I edit or delete my plants?",
    answer:
      "Yes, you can manage your plants in the 'My Plants' section, where you can update or remove entries.",
  },
  {
    question: "How do I change the app theme?",
    answer:
      "Use the toggle switch at the bottom of the sidebar to switch between light and dark mode.",
  },
];

const Support = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ email: "", message: "" });
  };

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="mt-8 max-w-5xl mx-auto px-6 py-12 rounded-3xl shadow-md
      bg-gradient-to-br from-green-50 via-white to-green-100
      dark:from-gray-900 dark:via-green-950 dark:to-gray-900
      transition-colors duration-300"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-3">
          Support & Help
        </h2>
        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Find quick answers to common questions. Still need help? Reach out through the form below.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="space-y-5 mb-16 max-w-3xl mx-auto">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="border border-green-200 dark:border-green-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
          >
            <button
              onClick={() => toggleCollapse(idx)}
              className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
            >
              <span className="text-green-700 dark:text-green-300 font-semibold text-lg">
                {item.question}
              </span>
              {openIndex === idx ? (
                <FaChevronUp className="text-gray-500 dark:text-gray-300" />
              ) : (
                <FaChevronDown className="text-gray-500 dark:text-gray-300" />
              )}
            </button>

            {openIndex === idx && (
              <div
                id={`faq-panel-${idx}`}
                className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-base"
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md"
        aria-live="polite"
      >
        <h3 className="text-2xl font-semibold mb-6 text-green-700 dark:text-green-400">
          Need More Help?
        </h3>

        {submitted && (
          <p className="mb-6 text-green-600 dark:text-green-400 text-center font-medium">
            ✅ Thanks for reaching out! We’ll get back to you soon.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-5 py-3 border rounded-xl dark:bg-gray-700 dark:border-gray-600
                focus:outline-none focus:ring-2 focus:ring-green-500
                transition"
            />
          </div>

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
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your issue or question"
              className="w-full px-5 py-3 border rounded-xl dark:bg-gray-700 dark:border-gray-600
                focus:outline-none focus:ring-2 focus:ring-green-500
                transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Support;
