"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experience } from "@/lib/data";
import { Briefcase, MapPin, Calendar, Award, ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white text-center mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            7+ years building cloud-native applications and AI systems
          </p>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-8 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[4.5rem] top-6 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white dark:border-slate-900 shadow-lg hidden md:flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  {/* Header - Always visible */}
                  <div
                    onClick={() => toggleExpand(index)}
                    className="p-6 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                            {exp.company}
                          </h3>
                          {exp.current && (
                            <span className="px-3 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {exp.role}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <motion.button
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {expandedIndex === index ? (
                          <ChevronUp size={24} />
                        ) : (
                          <ChevronDown size={24} />
                        )}
                      </motion.button>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>

                  {/* Expandable content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? "auto" : 0,
                      opacity: expandedIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                expandedIndex === index
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                            >
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                expandedIndex === index
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0, scale: 0.8 }
                              }
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Awards */}
                      {exp.awards && exp.awards.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                            Awards & Recognition
                          </h4>
                          <div className="space-y-2">
                            {exp.awards.map((award, i) => (
                              <motion.div
                                key={award}
                                initial={{ opacity: 0, x: -20 }}
                                animate={
                                  expandedIndex === index
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -20 }
                                }
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400"
                              >
                                <Award size={16} />
                                <span className="font-medium">{award}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob
