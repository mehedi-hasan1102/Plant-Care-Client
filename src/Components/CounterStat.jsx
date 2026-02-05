import React, { useState, useEffect, useRef } from 'react';

const CounterStat = ({ endValue, suffix = '', label, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // 2 seconds animation
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const value = endValue * progress;
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, endValue]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 mb-2">
        {count.toLocaleString('en-US', { 
          maximumFractionDigits: decimals,
          minimumFractionDigits: decimals 
        })}
        {suffix}
      </div>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
};

export default CounterStat;
