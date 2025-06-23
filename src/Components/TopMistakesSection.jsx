
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaExclamationTriangle } from "react-icons/fa";

const mistakes = [
  {
    title: "Overwatering your plants",
    description:
      "Too much water can lead to root rot and other diseases. Make sure to understand each plant's specific watering needs.",
  },
  {
    title: "Placing plants in low light without proper knowledge",
    description:
      "Not all plants can thrive in low light. Research your plant's light requirements before placement.",
  },
  {
    title: "Ignoring signs of pests or disease",
    description:
      "Yellowing leaves, spots, or holes can be early signs of trouble. Act quickly to treat infestations or infections.",
  },
  {
    title: "Using the wrong soil type",
    description:
      "Soil type affects drainage and nutrient availability. Use appropriate soil mixes for different plant species.",
  },
  {
    title: "Not repotting when needed",
    description:
      "Plants outgrow their pots over time. Repotting allows roots to expand and supports healthier growth.",
  },
];

const TopMistakesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="m-8 py-12 px-6 rounded-4xl shadow-md transition-colors duration-300
        bg-gradient-to-br from-green-50 via-white to-green-100
        dark:from-gray-900 dark:via-green-950 dark:to-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800 dark:text-green-400 mb-4 tracking-wide">
          Top Plant Care Mistakes
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Avoid these common pitfalls to keep your plants healthy and thriving.
        </p>
        <div className="space-y-4">
          {mistakes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-green-100 dark:border-green-700 rounded-xl p-5 text-left shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleCollapse(idx)}
                className="w-full flex items-center justify-between text-lg font-medium text-green-700 dark:text-green-300 focus:outline-none"
              >
                <span className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-green-500 dark:text-green-400" />
                  {item.title}
                </span>
                {openIndex === idx ? (
                  <FaChevronUp className="text-gray-500 dark:text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-500 dark:text-gray-400" />
                )}
              </button>
              {openIndex === idx && (
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopMistakesSection;
