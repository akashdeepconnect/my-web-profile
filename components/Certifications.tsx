"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications, awards } from "@/lib/data";
import { Award, CheckCircle } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white text-center mb-4">
            Certifications & Awards
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Professional certifications and recognition for excellence
          </p>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all h-full">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl shadow-lg">
                        {cert.icon}
                      </div>
                    </div>

                    {/* Certification name */}
                    <h4 className="text-lg font-heading font-bold text-gray-900 dark:text-white text-center mb-2">
                      {cert.name}
                    </h4>

                    {/* Issuer */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                      {cert.issuer}
                    </p>

                    {/* Category badge */}
                    <div className="flex justify-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                        <CheckCircle size={12} />
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity -z-10 blur-xl" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-8 text-center">
              Awards & Recognition
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {awards.map((award, index) => (
                <motion.div
                  key={award.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: (certifications.length + index) * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all h-full">
                    {/* Trophy icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                        <Award size={32} className="text-white" />
                      </div>
                    </div>

                    {/* Award name */}
                    <h4 className="text-lg font-heading font-bold text-gray-900 dark:text-white text-center mb-2">
                      {award.name}
                    </h4>

                    {/* Issuer and year */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-2">
                      {award.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 text-center font-medium">
                      {award.year}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity -z-10 blur-xl" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {certifications.length}
              </span>{" "}
              professional certifications and{" "}
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                {awards.length}
              </span>{" "}
              awards for excellence
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob
