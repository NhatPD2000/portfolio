"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, PenTool, Code2, Users, ChevronDown } from "lucide-react";

const categories = [
  {
    num: "01",
    title: "Business Analysis",
    icon: ClipboardList,
    gradient: `
      radial-gradient(ellipse at 25% 75%, rgba(99,102,241,0.85) 0%, transparent 55%),
      radial-gradient(ellipse at 75% 25%, rgba(59,130,246,0.75) 0%, transparent 55%),
      radial-gradient(ellipse at 55% 55%, rgba(16,185,129,0.25) 0%, transparent 45%),
      linear-gradient(145deg, #0F172A 0%, #1E1B4B 45%, #0C4A6E 100%)
    `,
    skills: [
      "Requirement Gathering", "BRD / FSD Documentation", "User Stories",
      "Agile & Scrum", "FIT/GAP Analysis", "UAT Management",
      "Stakeholder Management", "BPMN Mapping",
    ],
  },
  {
    num: "02",
    title: "Design & Visualization",
    icon: PenTool,
    gradient: `
      radial-gradient(ellipse at 30% 30%, rgba(139,92,246,0.9) 0%, transparent 55%),
      radial-gradient(ellipse at 70% 70%, rgba(236,72,153,0.8) 0%, transparent 50%),
      radial-gradient(ellipse at 55% 10%, rgba(251,146,60,0.5) 0%, transparent 45%),
      linear-gradient(145deg, #0F0B1A 0%, #1A0533 55%, #2D1B4B 100%)
    `,
    skills: [
      "Wireframing", "Figma Prototyping", "UML Diagrams",
      "BPMN Flowcharts", "Visio", "Draw.io",
      "User Flow Design", "System Architecture",
    ],
  },
  {
    num: "03",
    title: "Technical Tools",
    icon: Code2,
    gradient: `
      radial-gradient(ellipse at 25% 35%, rgba(20,184,166,0.9) 0%, transparent 55%),
      radial-gradient(ellipse at 75% 75%, rgba(6,182,212,0.7) 0%, transparent 55%),
      radial-gradient(ellipse at 60% 15%, rgba(16,185,129,0.45) 0%, transparent 45%),
      linear-gradient(145deg, #022C22 0%, #0C4A6E 55%, #0F172A 100%)
    `,
    skills: [
      "SQL", "Power BI", "Oracle Apex (ERP)",
      "MES / MOM Systems", "Apriso — Dassault", "SCADA Integration",
      "IoT Concepts", "Low-Code Development",
    ],
  },
  {
    num: "04",
    title: "Soft Skills & Languages",
    icon: Users,
    gradient: `
      radial-gradient(ellipse at 30% 45%, rgba(217,119,6,0.9) 0%, transparent 55%),
      radial-gradient(ellipse at 72% 65%, rgba(245,158,11,0.7) 0%, transparent 50%),
      radial-gradient(ellipse at 52% 88%, rgba(252,211,77,0.45) 0%, transparent 45%),
      linear-gradient(145deg, #1C0A00 0%, #451A03 50%, #78350F 100%)
    `,
    skills: [
      "Vietnamese — Native", "English — Fluent", "Chinese — Intermediate",
      "Communication", "Critical Thinking", "Problem Solving",
      "Presentation", "Cross-team Collaboration",
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);

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
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex gap-3 h-[480px] sm:h-[520px]"
        >
          {categories.map((cat) => {
            const isActive = active === cat.num;
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.num}
                animate={{ flexGrow: isActive ? 2.4 : 1 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                style={{ flexShrink: 1, flexBasis: "0%", minWidth: "80px" }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer bg-[#0F1830] border transition-colors duration-300 ${
                  isActive ? "border-[#2EC4A8]/40" : "border-[#1B2540] hover:border-[#243050]"
                }`}
                onMouseEnter={() => setActive(cat.num)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : cat.num)}
              >
                {/* ── DEFAULT STATE ── */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-between py-7 px-3"
                    >
                      {/* Top chevron */}
                      <ChevronDown size={10} className="text-[#3A4870]" />

                      {/* Icon + dot */}
                      <div className="flex flex-col items-center gap-5">
                        <Icon
                          size={48}
                          className="text-[#6B7AB8]"
                          strokeWidth={1.2}
                        />
                        <div className="w-1 h-1 rounded-full bg-[#3A4870]" />
                      </div>

                      {/* Name + number */}
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-[#8892BB] text-[10px] tracking-[0.22em] uppercase font-medium text-center leading-tight">
                          {cat.title}
                        </p>
                        <p className="label-amber">{cat.num}</p>
                      </div>

                      {/* Bottom indicator line */}
                      <div className="w-8 h-px bg-[#1B2540]" />
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
                      transition={{ duration: 0.25, delay: 0.1 }}
                      className="absolute inset-0 flex flex-col"
                    >
                      {/* Gradient illustration — fills top portion */}
                      <div
                        className="flex-1 relative overflow-hidden"
                        style={{ background: cat.gradient }}
                      >
                        {/* Noise texture overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E\")",
                            opacity: 0.6,
                          }}
                        />

                        {/* Skill tags */}
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.25 }}
                          className="absolute inset-0 p-5 flex flex-wrap content-start gap-1.5 overflow-hidden"
                        >
                          {cat.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[10px] px-2 py-0.5 rounded bg-black/35 text-white/85 border border-white/10 backdrop-blur-sm whitespace-nowrap"
                            >
                              {skill}
                            </span>
                          ))}
                        </motion.div>
                      </div>

                      {/* Footer */}
                      <div className="px-5 py-4 bg-[#0F1830] flex items-center justify-between border-t border-[#1B2540]">
                        <p className="text-[#E8EDF8] text-[10px] tracking-[0.22em] uppercase font-semibold">
                          {cat.title}
                        </p>
                        <p className="label-amber">{cat.num}</p>
                      </div>

                      {/* Teal progress bar */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                        className="h-0.5 bg-[#2EC4A8] origin-left"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
