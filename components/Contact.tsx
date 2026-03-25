"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import { getAssetPath } from "@/lib/utils";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Copy, Check } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Let's discuss your next AI or Cloud project!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white font-medium hover:text-blue-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(personalInfo.email)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </motion.button>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-white font-medium hover:text-purple-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group"
            >
              <a
                href={getAssetPath(personalInfo.resumePdf)}
                download
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <Download size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Resume</p>
                  <p className="text-white font-medium hover:text-green-300 transition-colors">
                    Download PDF
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">Connect with me on</p>
            <div className="flex justify-center gap-4">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
              >
                <Github size={28} />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10 text-center"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob
