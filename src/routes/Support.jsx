import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCheckCircle } from "react-icons/fa";

const faqs = [
  { question: "How do I add a new plant?", answer: "Go to 'Add Plant' section in the dashboard and fill out the required details." },
  { question: "Can I edit or delete my plants?", answer: "Yes, manage your plants in 'My Plants' section." },
  { question: "How do I change the app theme?", answer: "Use the toggle switch at the bottom of the sidebar to switch themes." },
];

const Support = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };
  const toggleCollapse = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="flex flex-col md:flex-row min-h-screen px-6 md:px-12 py-12  transition-colors duration-300 items-center justify-center gap-8">
      
      {/* Left Panel */}
      <div className="w-full md:w-1/2 lg:w-2/5 rounded-3xl p-8 md:p-10 space-y-6 transition-all">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-emerald-400">Support & Help</h2>
        <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base leading-relaxed">
          Find answers to your questions or get in touch with us below.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-3 max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 dark:scrollbar-thumb-emerald-500">
          {faqs.map((item, idx) => (
            <div key={idx} className={`border border-green-200 dark:border-green-700 rounded-xl shadow-sm transition-all ${openIndex === idx ? "bg-green-50 dark:bg-zinc-800" : "bg-white dark:bg-zinc-800/70"}`}>
              <button
                onClick={() => toggleCollapse(idx)}
                className="w-full px-4 py-3 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-green-700 dark:text-emerald-400 font-medium text-sm md:text-base">{item.question}</span>
                {openIndex === idx ? <FaChevronUp className="text-gray-500 dark:text-gray-300"/> : <FaChevronDown className="text-gray-500 dark:text-gray-300"/>}
              </button>
              {openIndex === idx && <div className="px-4 pb-3 text-gray-600 dark:text-gray-300 text-sm md:text-base">{item.answer}</div>}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {submitted && (
            <p className="flex items-center gap-2 text-green-600 dark:text-emerald-400 font-medium text-sm">
              <FaCheckCircle /> Thanks for reaching out! We’ll get back to you soon.
            </p>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-green-700 rounded-xl dark:bg-zinc-800 dark:border-emerald-400 dark:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner transition text-sm"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Describe your issue or question"
            className="w-full px-4 py-3 border border-green-700 rounded-xl dark:bg-zinc-800 dark:border-emerald-400 dark:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner transition text-sm resize-none"
          />
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform">
            Submit
          </button>
        </form>
      </div>

      {/* Right Panel: Illustration */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
        <img
          src="https://i.ibb.co/k2MQLycF/Active-Support-bro.png"
          alt="Support illustration"
          className="w-full max-w-md h-auto object-contain  rounded-xl transform hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  );
};

export default Support;
