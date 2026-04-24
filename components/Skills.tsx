"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ClipboardList, PenTool, Code2, Users, ChevronDown,
  ListChecks, FileText, BookOpen, RefreshCw, CheckSquare, GitBranch,
  Layout, Share2, GitMerge, Layers, Pencil, Server,
  Database, BarChart2, Globe, Settings, Cpu, Activity, Wifi,
  MessageCircle, Lightbulb, Zap, Monitor, MessageSquare,
} from "lucide-react";

const categories = [
  {
    num: "01",
    title: "Business Analysis",
    shortTitle: "BA",
    icon: ClipboardList,
    accentColor: "#818CF8",
    illustration: "/skill-ba.svg",
    gradient: `
      radial-gradient(ellipse at 25% 75%, rgba(99,102,241,0.85) 0%, transparent 55%),
      radial-gradient(ellipse at 75% 25%, rgba(59,130,246,0.75) 0%, transparent 55%),
      radial-gradient(ellipse at 55% 55%, rgba(16,185,129,0.25) 0%, transparent 45%),
      linear-gradient(145deg, #0F172A 0%, #1E1B4B 45%, #0C4A6E 100%)
    `,
    skills: [
      { name: "Requirement Gathering", icon: ListChecks },
      { name: "BRD / FSD Docs", icon: FileText },
      { name: "User Stories", icon: BookOpen },
      { name: "Agile & Scrum", icon: RefreshCw },
      { name: "FIT/GAP Analysis", icon: GitMerge },
      { name: "UAT Management", icon: CheckSquare },
      { name: "Stakeholder Mgmt", icon: Users },
      { name: "BPMN Mapping", icon: GitBranch },
    ],
  },
  {
    num: "02",
    title: "Design & Visualization",
    shortTitle: "Design",
    icon: PenTool,
    accentColor: "#C084FC",
    illustration: "/skill-design.svg",
    gradient: `
      radial-gradient(ellipse at 30% 30%, rgba(139,92,246,0.9) 0%, transparent 55%),
      radial-gradient(ellipse at 70% 70%, rgba(236,72,153,0.8) 0%, transparent 50%),
      radial-gradient(ellipse at 55% 10%, rgba(251,146,60,0.5) 0%, transparent 45%),
      linear-gradient(145deg, #0F0B1A 0%, #1A0533 55%, #2D1B4B 100%)
    `,
    skills: [
      { name: "Wireframing", icon: Layout },
      { name: "Figma Prototyping", icon: PenTool },
      { name: "UML Diagrams", icon: Share2 },
      { name: "BPMN Flowcharts", icon: GitMerge },
      { name: "Visio", icon: Layers },
      { name: "Draw.io", icon: Pencil },
      { name: "User Flow Design", icon: Monitor },
      { name: "System Architecture", icon: Server },
    ],
  },
  {
    num: "03",
    title: "Technical Tools",
    shortTitle: "Tech",
    icon: Code2,
    accentColor: "#2EC4A8",
    illustration: "/skill-tech.svg",
    gradient: `
      radial-gradient(ellipse at 25% 35%, rgba(20,184,166,0.9) 0%, transparent 55%),
      radial-gradient(ellipse at 75% 75%, rgba(6,182,212,0.7) 0%, transparent 55%),
      radial-gradient(ellipse at 60% 15%, rgba(16,185,129,0.45) 0%, transparent 45%),
      linear-gradient(145deg, #022C22 0%, #0C4A6E 55%, #0F172A 100%)
    `,
    skills: [
      { name: "SQL", icon: Database },
      { name: "Power BI", icon: BarChart2 },
      { name: "Oracle Apex", icon: Globe },
      { name: "MES / MOM Systems", icon: Settings },
      { name: "Apriso — Dassault", icon: Cpu },
      { name: "SCADA Integration", icon: Activity },
      { name: "IoT Concepts", icon: Wifi },
      { name: "Low-Code Dev", icon: Code2 },
    ],
  },
  {
    num: "04",
    title: "Soft Skills & Languages",
    shortTitle: "Soft Skills",
    icon: Users,
    accentColor: "#FBBF24",
    illustration: "/skill-soft.svg",
    gradient: `
      radial-gradient(ellipse at 30% 45%, rgba(217,119,6,0.9) 0%, transparent 55%),
      radial-gradient(ellipse at 72% 65%, rgba(245,158,11,0.7) 0%, transparent 50%),
      radial-gradient(ellipse at 52% 88%, rgba(252,211,77,0.45) 0%, transparent 45%),
      linear-gradient(145deg, #1C0A00 0%, #451A03 50%, #78350F 100%)
    `,
    skills: [
      { name: "Vietnamese", icon: MessageCircle },
      { name: "English", icon: Globe },
      { name: "Chinese", icon: MessageSquare },
      { name: "Communication", icon: Share2 },
      { name: "Critical Thinking", icon: Lightbulb },
      { name: "Problem Solving", icon: Zap },
      { name: "Presentation", icon: Monitor },
      { name: "Cross-team Collab", icon: Users },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device on mount
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <section id="skills" className="py-28 px-6 bg-[#0C1226]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-amber mb-4">Skills & Tools</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#E8EDF8]">
            What I bring to the table
          </h2>
          <p className="text-[#3A4870] text-xs mt-3 md:hidden">
            Tap a card to explore skills
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex gap-3 overflow-x-auto md:overflow-x-visible"
          style={{ height: "640px" }}
        >
          {categories.map((cat) => {
            const isActive = active === cat.num;
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.num}
                animate={{ flexGrow: isActive ? 2.6 : 1 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                style={{ flexShrink: 1, flexBasis: "0%", minWidth: "72px" }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer bg-[#0F1830] border transition-colors duration-300 ${
                  isActive
                    ? "border-[#2EC4A8]/40"
                    : "border-[#1B2540] hover:border-[#243050]"
                }`}
                onMouseEnter={() => !isTouchDevice && setActive(cat.num)}
                onMouseLeave={() => !isTouchDevice && setActive(null)}
                onClick={() => setActive(isActive ? null : cat.num)}
              >
                {/* ── IDLE STATE ── */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center py-6 px-2"
                    >
                      {/* Illustration at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none pb-16">
                        <Image
                          src={
                            cat.num === "01"
                              ? "/skill-ba-icon.svg"
                              : cat.num === "02"
                              ? "/skill-design-icon.svg"
                              : cat.num === "03"
                              ? "/skill-tech-icon.svg"
                              : "/skill-soft-icon.svg"
                          }
                          alt={`${cat.title} illustration`}
                          width={180}
                          height={160}
                          className="opacity-65"
                        />
                      </div>

                      {/* Top indicator */}
                      <ChevronDown size={10} className="text-[#3A4870] mb-4 shrink-0 relative z-10" />

                      {/* Category icon */}
                      <Icon
                        size={40}
                        strokeWidth={1.2}
                        className="shrink-0 mb-3"
                        style={{ color: cat.accentColor, opacity: 0.7 }}
                      />
                      <div className="w-1 h-1 rounded-full bg-[#3A4870] mb-4 shrink-0" />

                      {/* Divider */}
                      <div className="w-6 h-px bg-[#1B2540] mb-3 shrink-0" />

                      {/* Skill bars — visible at all times */}
                      <div className="flex flex-col gap-1.5 flex-1 overflow-hidden w-full px-3">
                        {cat.skills.map((skill) => {
                          const SkillIcon = skill.icon;
                          return (
                            <div
                              key={skill.name}
                              className="flex items-center gap-2 w-full px-2.5 py-1.5 rounded-md"
                              style={{
                                background: "#111827",
                                border: "1px solid #1B2540",
                              }}
                            >
                              <SkillIcon
                                size={11}
                                strokeWidth={1.5}
                                style={{ color: cat.accentColor, flexShrink: 0, opacity: 0.8 }}
                              />
                              <span className="text-[11px] text-[#6B7AB8] truncate leading-tight">
                                {skill.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Title + number */}
                      <div className="flex flex-col items-center gap-1.5 mt-3 shrink-0">
                        <p className="text-[#6B7AB8] text-[9px] tracking-[0.2em] uppercase font-medium text-center leading-tight px-1">
                          {cat.shortTitle}
                        </p>
                        <p className="label-amber">{cat.num}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── ACTIVE STATE ── */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="active"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, delay: 0.08 }}
                      className="absolute inset-0 flex flex-col"
                    >
                      {/* Gradient top area */}
                      <div
                        className="flex-1 relative overflow-hidden"
                        style={{ background: cat.gradient }}
                      >
                        {/* Noise texture */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E\")",
                            opacity: 0.5,
                          }}
                        />

                        {/* Header inside gradient */}
                        <div className="relative z-10 flex items-center justify-between px-5 pt-5 pb-3">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="p-1.5 rounded-lg"
                              style={{ background: "rgba(0,0,0,0.3)" }}
                            >
                              <Icon size={16} style={{ color: cat.accentColor }} />
                            </div>
                            <p className="text-white/90 text-[11px] font-semibold tracking-[0.15em] uppercase">
                              {cat.title}
                            </p>
                          </div>
                          <p className="label-amber">{cat.num}</p>
                        </div>

                        {/* Skill icon matrix */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="relative z-10 px-5 pb-4 grid grid-cols-2 gap-x-3 gap-y-2"
                        >
                          {cat.skills.map((skill) => {
                            const SkillIcon = skill.icon;
                            return (
                              <div
                                key={skill.name}
                                className="flex items-center gap-2 px-2.5 py-2 rounded-lg"
                                style={{ background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.08)" }}
                              >
                                <SkillIcon
                                  size={13}
                                  strokeWidth={1.5}
                                  style={{ color: cat.accentColor, flexShrink: 0 }}
                                />
                                <span className="text-white/80 text-[10px] leading-tight truncate">
                                  {skill.name}
                                </span>
                              </div>
                            );
                          })}
                        </motion.div>

                        {/* Animated icon with glow + particles */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="absolute bottom-16 left-0 right-0 h-40 flex items-center justify-center pointer-events-none"
                        >
                          {/* Glow effect behind icon */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute w-32 h-32 rounded-full blur-2xl"
                            style={{ background: cat.accentColor }}
                          />

                          {/* Icon with subtle animation */}
                          <motion.div
                            animate={{
                              y: [0, -8, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Image
                              src={
                                cat.num === "01"
                                  ? "/skill-ba-icon.svg"
                                  : cat.num === "02"
                                  ? "/skill-design-icon.svg"
                                  : cat.num === "03"
                                  ? "/skill-tech-icon.svg"
                                  : "/skill-soft-icon.svg"
                              }
                              alt={`${cat.title} illustration`}
                              width={140}
                              height={120}
                              className="opacity-60"
                              style={{
                                filter: `drop-shadow(0 0 20px ${cat.accentColor}40)`,
                              }}
                            />
                          </motion.div>

                          {/* Floating particles around icon */}
                          <motion.div
                            animate={{
                              y: [0, -15, 0],
                              x: [0, 10, 0],
                              opacity: [0.4, 0.7, 0.4],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute left-[20%] top-[20%] w-2 h-2 rounded-full"
                            style={{ background: cat.accentColor, boxShadow: `0 0 10px ${cat.accentColor}` }}
                          />
                          <motion.div
                            animate={{
                              y: [0, -20, 0],
                              x: [0, -8, 0],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5,
                            }}
                            className="absolute right-[25%] top-[30%] w-1.5 h-1.5 rounded-full"
                            style={{ background: cat.accentColor, boxShadow: `0 0 8px ${cat.accentColor}` }}
                          />
                          <motion.div
                            animate={{
                              y: [0, -12, 0],
                              x: [0, 15, 0],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 4.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1,
                            }}
                            className="absolute left-[35%] bottom-[20%] w-1 h-1 rounded-full"
                            style={{ background: cat.accentColor, boxShadow: `0 0 6px ${cat.accentColor}` }}
                          />
                          <motion.div
                            animate={{
                              y: [0, -18, 0],
                              x: [0, -12, 0],
                              opacity: [0.4, 0.7, 0.4],
                            }}
                            transition={{
                              duration: 5.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.5,
                            }}
                            className="absolute right-[30%] bottom-[25%] w-1.5 h-1.5 rounded-full"
                            style={{ background: cat.accentColor, boxShadow: `0 0 8px ${cat.accentColor}` }}
                          />
                        </motion.div>
                      </div>

                      {/* Footer */}
                      <div className="px-5 py-3 bg-[#0F1830] flex items-center justify-between border-t border-[#1B2540]">
                        <p className="text-[#E8EDF8] text-[10px] tracking-[0.2em] uppercase font-semibold">
                          {cat.skills.length} skills
                        </p>
                        <p className="text-[#3A4870] text-[10px]">hover to explore</p>
                      </div>

                      {/* Teal progress bar */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                        className="h-0.5 origin-left"
                        style={{ background: cat.accentColor }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#E8EDF8] hover:text-[#2EC4A8] transition-colors duration-200 group"
          >
            <span>See these skills in action</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
