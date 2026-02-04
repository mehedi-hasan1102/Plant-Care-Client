import React from 'react';
import { motion as Motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Plant Enthusiast',
      image: '👩‍🦰',
      comment: 'Plant Care Tracker has transformed how I manage my 30+ plants. The reminders are lifesavers!',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Urban Gardener',
      image: '👨‍💼',
      comment: 'Finally, an app that understands my plants\' needs. My succulents have never been healthier!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Plant Parent',
      image: '👩‍🌾',
      comment: 'The health tracking feature is amazing. I can see exactly how my plants are thriving over time.',
      rating: 5
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
          What Our Users Say
        </Motion.h2>
        <Motion.p 
          className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join thousands of happy plant parents managing their green friends
        </Motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Motion.div 
            key={testimonial.id}
            className="bg-gradient-to-br from-white to-emerald-50 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 dark:border-zinc-700 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-5">
              <div className="text-5xl mr-4">{testimonial.image}</div>
              <div>
                <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            
            <div className="mb-5 flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-sm border-l-4 border-emerald-500 pl-4">
              "{testimonial.comment}"
            </p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
