import React from 'react';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CounterStat from './CounterStat';

const CTASection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section className="rounded-2xl mx-auto px-4 py-16 transition-colors duration-300">
      <Motion.div 
        className="rounded-3xl px-6 md:px-12 py-16 md:py-20 text-center max-w-5xl mx-auto transition-all duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-700 dark:text-emerald-400 mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Start Your Plant Care Journey Today
        </Motion.h2>
        
        <Motion.p 
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of plant lovers managing their green space with Plant Care Tracker. 
          It's free, easy to use, and your plants will thank you!
        </Motion.p>
        
        <Motion.div 
          className="flex flex-col sm:flex-row gap-5 justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={handleGetStarted}
            className="px-10 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform text-lg cursor-pointer"
          >
            Get Started Free
          </button>
          <button 
            onClick={handleLearnMore}
            className="px-10 py-4 bg-transparent border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 font-bold rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 text-lg cursor-pointer"
          >
            Learn More
          </button>
        </Motion.div>

        <Motion.div 
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-12 border-t border-emerald-100 dark:border-zinc-700"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CounterStat endValue={10} suffix="K+" label="Active Users" />
          <CounterStat endValue={50} suffix="K+" label="Plants Tracked" />
          <CounterStat endValue={4.9} suffix="★" label="User Rating" decimals={1} />
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default CTASection;
