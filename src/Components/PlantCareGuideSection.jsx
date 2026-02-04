import React from 'react';
import { motion as Motion } from 'framer-motion';

const PlantCareGuideSection = () => {
  const guides = [
    {
      id: 1,
      icon: '💧',
      title: 'Watering Tips',
      tips: [
        'Water when top inch of soil is dry',
        'Use room temperature water',
        'Drain excess water from pots',
        'Water more in growing season'
      ]
    },
    {
      id: 2,
      icon: '☀️',
      title: 'Light Requirements',
      tips: [
        'Most plants need 6-8 hours of light',
        'Rotate plants weekly',
        'Keep away from hot direct sun',
        'Clean leaves for better light absorption'
      ]
    },
    {
      id: 3,
      icon: '🌡️',
      title: 'Temperature & Humidity',
      tips: [
        'Keep temperature between 65-75°F',
        'Avoid cold drafts and heat vents',
        'Mist leaves for humidity',
        'Group plants together for moisture'
      ]
    },
    {
      id: 4,
      icon: '🍃',
      title: 'Fertilizing',
      tips: [
        'Fertilize during growing season',
        'Use balanced fertilizer monthly',
        'Reduce frequency in winter',
        'Always follow package instructions'
      ]
    }
  ];

  return (
    <section className="rounded-2xl mx-auto px-4 py-16 transition-colors duration-300">
      <div className="text-center mb-14">
        <Motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-emerald-700 dark:text-emerald-400 tracking-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Plant Care Guide
        </Motion.h2>
        <Motion.p 
          className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Expert tips to keep your plants healthy and thriving
        </Motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {guides.map((guide, index) => (
          <Motion.div 
            key={guide.id}
            className="group bg-gradient-to-br from-white to-emerald-50 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 dark:border-zinc-700 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {guide.icon}
            </div>
            <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-5">
              {guide.title}
            </h3>
            <ul className="space-y-3">
              {guide.tips.map((tip, idx) => (
                <li key={idx} className="text-sm text-gray-700 dark:text-gray-400 flex items-start gap-3">
                  <span className="text-emerald-500 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareGuideSection;
