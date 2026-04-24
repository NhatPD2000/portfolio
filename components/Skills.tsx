"use client";
import { motion } from "framer-motion";
import { ClipboardList, PenTool, Code2, Users } from "lucide-react";

const skillCategories = [
  {
    icon: ClipboardList,
    title: "Business Analysis",
    color: "sky",
    skills: [
      "Requirement Gathering",
      "BRD / FSD Documentation",
      "User Stories",
      "Agile & Scrum",
      "FIT/GAP Analysis",
      "UAT Management",
      "Stakeholder Management",
      "Process Mapping (BPMN)",
    ],
  },
  {
    icon: PenTool,
    title: "Design & Visualization",
    color: "teal",
    skills: [
      "Wireframing",
      "Prototyping (Figma)",
      "UML Diagrams",
      "BPMN Flowcharts",
      "Visio",
      "Draw.io",
      "User Flow Design",
      "System Architecture Diagrams",
    ],
  },
  {
    icon: Code2,
    title: "Technical Tools",
    color: "violet",
    skills: [
      "SQL",
      "Power BI",
      "Oracle Apex (ERP)",
      "MES / MOM Systems",
      "Apriso (Dassault)",
      "SCADA Integration",
      "IoT Concepts",
      "Low-Code Development",
    ],
  },
  {
    icon: Users,
    title: "Soft Skills & Languages",
    color: "amber",
    skills: [
      "Vietnamese (Native)",
      "English (Fluent)",
      "Chinese (Intermediate)",
      "Communication",
      "Critical Thinking",
      "Problem Solving",
      "Presentation",
      "Cross-functional Collaboration",
    ],
  },
];

const colorMap: Record<string, { card: string; icon: string; tag: string }> = {
  sky: {
    card: "hover:border-sky-500/40",
    icon: "bg-sky-500/10 text-sky-400",
    tag: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  },
  teal: {
    card: "hover:border-teal-500/40",
    icon: "bg-teal-500/10 text-teal-400",
    tag: "bg-teal-500/10 text-teal-300 border-teal-500/20",
  },
  violet: {
    card: "hover:border-violet-500/40",
    icon: "bg-violet-500/10 text-violet-400",
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  amber: {
    card: "hover:border-amber-500/40",
    icon: "bg-amber-500/10 text-amber-400",
    tag: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Skills & Tools
          </p>
          <h2 className="text-4xl font-bold text-slate-100">
            What I bring to the table
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl transition-all duration-200 ${colors.card}`}
              >
                <div className={`inline-flex p-2.5 rounded-xl mb-4 ${colors.icon}`}>
                  <category.icon size={22} />
                </div>
                <h3 className="font-semibold text-slate-200 mb-4 text-sm tracking-wide">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2.5 py-1 rounded-full border ${colors.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="section-divider mt-24 max-w-6xl mx-auto opacity-30" />
    </section>
  );
}
