import React, { useState } from "react";

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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic (e.g., API call)
    setSubmitted(true);
    setFormData({ email: "", message: "" });
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Support</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          {faqs.map(({ question, answer }, idx) => (
            <li key={idx} className="border-b pb-3">
              <p className="font-medium text-gray-900 dark:text-gray-100">{question}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-1">{answer}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Need More Help?</h2>
        {submitted && (
          <p className="mb-4 text-green-600 dark:text-green-400">
            Thanks for contacting support! We will respond shortly.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Describe your issue or question"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Support;
