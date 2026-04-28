"use client";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Layers } from "lucide-react";

const stats = [
  { value: "3+", label: "Years" },
  { value: "2", label: "Companies" },
  { value: "5+", label: "Projects" },
  { value: "3", label: "Languages" },
];

function GradientOrb() {
  return (
    <div className="relative w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] mx-auto select-none pointer-events-none">
      {/* Rotating outer rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-[#D8E2F0]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full border border-[#D8E2F0]/70"
      />
      <div className="absolute inset-[72px] rounded-full border border-[#D8E2F0]/50" />

      {/* Pink-orange orb */}
      <motion.div
        animate={{ y: [-14, 12, -14], x: [-6, 8, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[6%] left-[10%] w-60 h-60 rounded-full"
        style={{
          background: "radial-gradient(circle at 40% 35%, #FF6B9D 0%, #FF9A50 45%, transparent 72%)",
          filter: "blur(34px)",
          opacity: 0.5,
        }}
      />

      {/* Blue-teal orb */}
      <motion.div
        animate={{ y: [10, -14, 10], x: [8, -6, 8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-[6%] right-[6%] w-56 h-56 rounded-full"
        style={{
          background: "radial-gradient(circle at 55% 60%, #4F8EF7 0%, #2EC4A8 50%, transparent 75%)",
          filter: "blur(38px)",
          opacity: 0.45,
        }}
      />

      {/* Violet accent orb */}
      <motion.div
        animate={{ y: [-8, 10, -8], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute top-[28%] right-[12%] w-40 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle, #9B5CF6 0%, #4F8EF7 55%, transparent 75%)",
          filter: "blur(28px)",
          opacity: 0.3,
        }}
      />

      {/* Center highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      {/* Small detail dots */}
      <div className="absolute top-[18%] left-[52%] w-1.5 h-1.5 rounded-full bg-[#2EC4A8]/60" />
      <div className="absolute bottom-[22%] left-[30%] w-1 h-1 rounded-full bg-[#FF6B9D]/50" />
      <div className="absolute top-[60%] right-[22%] w-1 h-1 rounded-full bg-[#0D1B2E]/20" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F7F9FC] topo-bg">
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(46,196,168,0.06) 0%, transparent 65%)", filter: "blur(60px)" }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Gradient orb visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <GradientOrb />
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="label-amber mb-3"
        >
          Business Analyst
        </motion.p>

        {/* Name — serif, large */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0D1B2E] leading-tight mb-4 tracking-tight"
        >
          Phan Dinh Nhat
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-8 bg-[#D8E2F0]" />
          <span className="text-[#2EC4A8] text-xs tracking-[0.22em] uppercase font-medium">
            Manufacturing Intelligence
          </span>
          <span className="h-px w-8 bg-[#D8E2F0]" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.62 }}
          className="text-[#4A5E7A] max-w-md text-base leading-relaxed mb-10"
        >
          Bridging factory floor realities with smart digital systems.
          MES, MOM, ERP — from requirement to go-live.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.72 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-16"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3 bg-[#2EC4A8] hover:bg-[#25A890] text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
          >
            <Layers size={15} />
            View Projects
          </a>
          <a
            href="/phan-dinh-nhat-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 border border-[#D8E2F0] hover:border-[#C8D5E8] text-[#4A5E7A] hover:text-[#0D1B2E] font-medium rounded-lg transition-all duration-200 text-sm"
          >
            <FileText size={15} />
            Download CV
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.82 }}
          className="grid grid-cols-4 gap-6 max-w-sm mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-2xl font-bold text-[#0D1B2E]">{s.value}</div>
              <div className="text-[10px] text-[#8999BB] tracking-widest uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8999BB]"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}
