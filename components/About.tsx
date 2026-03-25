"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { about } from "@/lib/data";

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (isInView && numericValue) {
      let start = 0;
      const increment = numericValue / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {isInView ? (numericValue ? count + value.replace(/\d/g, "") : value) : "0"}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
            {about.summary}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {about.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl sm:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    <AnimatedCounter value={metric.value} />
                  </div>
                  <div className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">
                    {metric.label}
                  </div>
                </div>
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity -z-10 blur-xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob
