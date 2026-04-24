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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Dot pattern */}
      <div className="absolute inset-0 hero-dots opacity-60" />

      {/* Subtle blue glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#4361EE]/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Amber badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F59E0B]/30 bg-[#FEF3C7] text-[#D97706] text-xs font-medium mb-8 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight mb-5 leading-[1.1]"
        >
          <span className="gradient-text">Phan Dinh Nhat</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-10 bg-[#E2E8F0]" />
          <span className="text-[#4361EE] font-semibold text-sm tracking-[0.2em] uppercase">
            Business Analyst
          </span>
          <div className="h-px w-10 bg-[#E2E8F0]" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="text-[#64748B] text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Bridging{" "}
          <span className="text-[#0F172A] font-medium">manufacturing intelligence</span>{" "}
          with smart digital solutions — MES, MOM, ERP and beyond.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3 bg-[#4361EE] hover:bg-[#3451D1] text-white font-medium rounded-lg transition-colors duration-200 text-sm shadow-md shadow-[#4361EE]/20"
          >
            <Layers size={15} />
            View Projects
          </a>
          <a
            href="/phan-dinh-nhat-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 border border-[#E2E8F0] hover:border-[#4361EE]/40 text-[#475569] hover:text-[#0F172A] font-medium rounded-lg transition-all duration-200 text-sm bg-white"
          >
            <FileText size={15} />
            Download CV
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.36 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-4 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl"
            >
              <div className="text-2xl font-bold text-[#4361EE]">{stat.value}</div>
              <div className="text-[11px] text-[#94A3B8] mt-1 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#94A3B8]"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
