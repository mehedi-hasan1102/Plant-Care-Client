import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Us</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        Welcome to PlantCare! We are dedicated to helping you nurture and grow your plants
        with the best tips, tools, and resources. Our mission is to empower plant lovers
        of all levels to create thriving green spaces.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Whether you're a beginner or an expert gardener, PlantCare provides you with
        detailed information and a community to share your passion. We believe plants
        make life better, and we're here to support your green journey every step of the way.
      </p>
    </section>
  );
};

export default About;
