
import React from "react";
import { FaSeedling } from "react-icons/fa";
import { BorderBeam } from "@stianlarsen/border-beam";

const beginnerPlants = [
  {
    name: "Snake Plant",
    description: "Thrives on neglect and low light. Perfect for busy beginners.",
  },
  {
    name: "Spider Plant",
    description: "Air-purifying, resilient, and quick-growing with minimal care.",
  },
  {
    name: "Pothos",
    description: "Versatile, low-maintenance vine ideal for shelves or hanging baskets.",
  },
];

const AdditionalSections = () => {
  return (
    <section className="rounded-lg px-6 py-16  transition-colors duration-500">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
          Beginner-Friendly Plants
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-12 text-lg">
          Start your plant care journey with these hassle-free and rewarding green companions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {beginnerPlants.map((plant, idx) => (
            <div
              key={idx}
              tabIndex={0}
              className="relative bg-gradient-to-br from-white to-green-50 dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl shadow-xl transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl focus:-translate-y-2 focus:shadow-2xl focus:outline-none group"
            >
                 <BorderBeam size={100} duration={8}  colorFrom="#22c55e" colorTo="#16a34a" />

              <div className="  flex flex-col items-center text-center">
                 
                <div
                  aria-hidden="true"
                  className="bg-emerald-100 dark:bg-emerald-900 p-4 rounded-full mb-4 shadow-inner ring-2 ring-emerald-400 dark:ring-emerald-500 transition-all"
                >
                  <FaSeedling className="text-emerald-600 dark:text-emerald-300 text-3xl group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {plant.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {plant.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalSections;
