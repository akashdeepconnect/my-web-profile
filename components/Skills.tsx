"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Object.keys(skills)];

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return Object.entries(skills).flatMap(([category, skillList]) =>
        skillList.map((skill) => ({ ...skill, category }))
      );
    }
    return skills[activeCategory as keyof typeof skills].map((skill) => ({
      ...skill,
      category: activeCategory,
    }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white text-center mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Expertise across the full stack — from AI/ML to cloud infrastructure
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:shadow-md"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Skills grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.category}-${skill.name}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
                  {/* Skill name */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>

                  {/* Category badge */}
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity -z-10 blur-xl" />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {filteredSkills.length}
              </span>{" "}
              skills in{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                {activeCategory === "All" ? Object.keys(skills).length : 1}
              </span>{" "}
              {activeCategory === "All" ? "categories" : "category"}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob
