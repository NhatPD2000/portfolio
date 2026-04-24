"use client";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Layers } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "2", label: "Companies" },
  { value: "5+", label: "Projects Delivered" },
  { value: "3", label: "Languages" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-grid">
      {/* Background blobs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight"
        >
          <span className="gradient-text">Phan Dinh Nhat</span>
        </motion.h1>

        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-slate-600" />
          <span className="text-sky-400 font-semibold text-lg tracking-widest uppercase">
            Business Analyst
          </span>
          <div className="h-px w-12 bg-slate-600" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Bridging{" "}
          <span className="text-sky-400 font-medium">manufacturing intelligence</span>{" "}
          with smart digital solutions — from MES/MOM systems to ERP
          transformation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-sky-500/20"
          >
            <Layers size={18} />
            View Projects
          </a>
          <a
            href="/phan-dinh-nhat-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 border border-slate-700 hover:border-sky-400/50 text-slate-300 hover:text-sky-400 font-semibold rounded-full transition-all duration-200"
          >
            <FileText size={18} />
            Download CV
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-sky-400">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
