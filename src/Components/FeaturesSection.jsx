import React from 'react';
import { motion as Motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: '🌱',
      title: 'Easy Plant Logging',
      description: 'Quickly add and organize all your plants with essential information and detailed specs'
    },
    {
      id: 2,
      icon: '⏰',
      title: 'Smart Reminders',
      description: 'Automated care reminders ensure your plants get watering and feeding at the right time'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Track Health',
      description: 'Monitor plant growth, health metrics, and care history with comprehensive tracking logs'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Access and manage your plant data anytime, anywhere on any device with full sync'
    },
    {
      id: 5,
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your personal plant data is protected with enterprise-grade encryption and security'
    },
    {
      id: 6,
      icon: '💡',
      title: 'Expert Tips',
      description: 'Receive personalized care recommendations and expert advice for each plant type'
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
          Powerful Features
        </Motion.h2>
        <Motion.p 
          className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Everything you need to become a plant care expert
        </Motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Motion.div 
            key={feature.id}
            className="group bg-gradient-to-br from-white to-emerald-50 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 dark:border-zinc-700 p-8 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-sm">
              {feature.description}
            </p>
            <div className="mt-5 h-1 w-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
