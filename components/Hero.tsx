"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText, Layers, ListChecks, GitBranch, PenTool,
  Code2, CheckCircle, ArrowDown,
} from "lucide-react";

const stats = [
  { value: "3+", label: "Years" },
  { value: "2", label: "Companies" },
  { value: "5+", label: "Projects" },
  { value: "3", label: "Languages" },
];

const domains = ["MES / MOM", "ERP Systems", "IoT Integration", "Agile / Scrum", "BPMN"];

const steps = [
  {
    num: "01",
    title: "Requirement Gathering",
    hint: "Workshops · BRS · Interviews",
    icon: ListChecks,
    color: "#818CF8",
  },
  {
    num: "02",
    title: "Analysis & BPMN",
    hint: "Process mapping · FIT/GAP",
    icon: GitBranch,
    color: "#2EC4A8",
  },
  {
    num: "03",
    title: "Design & Prototype",
    hint: "Figma · Wireframes · UML",
    icon: PenTool,
    color: "#C084FC",
  },
  {
    num: "04",
    title: "Implementation",
    hint: "Dev collab · Sprint reviews",
    icon: Code2,
    color: "#F59E0B",
  },
  {
    num: "05",
    title: "Go-Live & UAT",
    hint: "Training · Testing · Support",
    icon: CheckCircle,
    color: "#2EC4A8",
  },
];

function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="label-amber">BA Delivery Process</p>
        <span className="text-[11px] text-[#8999BB]">Step {activeStep + 1} / {steps.length}</span>
      </div>

      <div className="relative">
        {steps.map((step, i) => {
          const isActive = activeStep === i;
          const isPast = i < activeStep;
          const Icon = step.icon;

          return (
            <div key={step.num}>
              {/* Step card */}
              <motion.div
                animate={{
                  borderColor: isActive ? `${step.color}55` : isPast ? `${step.color}25` : "#D8E2F0",
                  backgroundColor: isActive ? `${step.color}0A` : "#FFFFFF",
                  boxShadow: isActive
                    ? `0 4px 24px ${step.color}18, 0 0 0 1px ${step.color}25`
                    : "none",
                }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-3.5 px-4 py-3 rounded-xl border"
              >
                {/* Number badge */}
                <motion.div
                  animate={{
                    backgroundColor: isActive ? step.color : isPast ? `${step.color}20` : "transparent",
                    borderColor: isActive ? step.color : isPast ? `${step.color}40` : "#D8E2F0",
                  }}
                  transition={{ duration: 0.35 }}
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0"
                >
                  <motion.span
                    animate={{
                      color: isActive ? "#FFFFFF" : isPast ? step.color : "#B0BFDA",
                    }}
                    transition={{ duration: 0.35 }}
                    className="text-[9px] font-bold leading-none"
                  >
                    {isPast ? "✓" : step.num}
                  </motion.span>
                </motion.div>

                {/* Icon */}
                <motion.div
                  animate={{ color: isActive ? step.color : isPast ? `${step.color}80` : "#C8D5E8" }}
                  transition={{ duration: 0.35 }}
                  className="shrink-0"
                >
                  <Icon size={17} strokeWidth={1.5} />
                </motion.div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <motion.p
                    animate={{
                      color: isActive ? "#0D1B2E" : isPast ? "#4A5E7A" : "#6B7E9A",
                    }}
                    transition={{ duration: 0.35 }}
                    className="text-sm font-semibold leading-tight"
                  >
                    {step.title}
                  </motion.p>
                  <p className="text-[11px] text-[#8999BB] mt-0.5 truncate">{step.hint}</p>
                </div>

                {/* Active pulse dot */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 relative flex h-2 w-2"
                    >
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                        style={{ backgroundColor: step.color }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-2 w-2"
                        style={{ backgroundColor: step.color }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="flex items-center ml-[22px] h-3.5">
                  <div className="w-px h-full relative overflow-hidden mx-auto"
                    style={{ backgroundColor: "#D8E2F0" }}
                  >
                    <motion.div
                      animate={{
                        backgroundColor: i < activeStep ? step.color : "#D8E2F0",
                        scaleY: i < activeStep ? 1 : 0,
                      }}
                      style={{ transformOrigin: "top" }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-[#D8E2F0] flex items-center justify-between">
        <p className="text-[11px] text-[#8999BB]">End-to-end BA delivery</p>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2EC4A8]" />
          <span className="text-[11px] text-[#2EC4A8] font-medium">AES Vietnam · Active</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F7F9FC] dark:bg-[#0D1B2E] topo-bg overflow-hidden">
      {/* Large faded watermark */}
      <div
        className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-serif font-bold select-none pointer-events-none leading-none text-[#0D1B2E]/[0.025]"
        style={{ fontSize: "22vw" }}
        aria-hidden
      >
        BA
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2EC4A8] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2EC4A8]" />
              </span>
              <span className="text-xs text-[#4A5E7A] font-medium tracking-wide">
                Open to opportunities
              </span>
            </motion.div>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="label-amber mb-3"
            >
              Business Analyst
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="font-serif text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-[#0D1B2E] leading-[1.05] mb-5 tracking-tight"
            >
              Phan Dinh<br />Nhat
            </motion.h1>

            {/* Specialization */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-5 bg-[#2EC4A8]" />
              <span className="text-[#2EC4A8] text-xs tracking-[0.2em] uppercase font-medium">
                Manufacturing Intelligence
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="text-[#4A5E7A] text-[15px] leading-relaxed mb-8 max-w-md"
            >
              Turning complex factory operations into clear, digital systems.
              MES, MOM, ERP — from first workshop to go-live.
            </motion.p>

            {/* Domain tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {domains.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-white border border-[#D8E2F0] text-[#4A5E7A] font-medium shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.58 }}
              className="flex flex-col sm:flex-row gap-3 mb-14"
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-7 py-3 bg-[#2EC4A8] hover:bg-[#25A890] text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
              >
                <Layers size={15} />
                View Projects
              </a>
              <a
                href="/phan-dinh-nhat-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3 bg-white border border-[#D8E2F0] hover:border-[#C8D5E8] text-[#4A5E7A] hover:text-[#0D1B2E] font-medium rounded-lg transition-all duration-200 text-sm"
              >
                <FileText size={15} />
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.68 }}
              className="flex gap-8 pt-8 border-t border-[#D8E2F0]"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-2xl font-bold text-[#0D1B2E]">{s.value}</div>
                  <div className="text-[10px] text-[#8999BB] tracking-widest uppercase mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Process Flow ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl border border-[#D8E2F0] p-7 shadow-sm">
              <ProcessFlow />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
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
