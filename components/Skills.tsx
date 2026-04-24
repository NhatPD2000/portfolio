"use client";
import { motion } from "framer-motion";
import { ClipboardList, PenTool, Code2, Users } from "lucide-react";

const categories = [
  {
    icon: ClipboardList,
    title: "Business Analysis",
    skills: [
      "Requirement Gathering",
      "BRD / FSD Documentation",
      "User Stories & Acceptance Criteria",
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
    skills: [
      "Wireframing",
      "Prototyping — Figma",
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
    skills: [
      "SQL",
      "Power BI",
      "Oracle Apex (ERP)",
      "MES / MOM Systems",
      "Apriso — Dassault",
      "SCADA Integration",
      "IoT Concepts",
      "Low-Code Development",
    ],
  },
  {
    icon: Users,
    title: "Soft Skills & Languages",
    skills: [
      "Vietnamese — Native",
      "English — Fluent",
      "Chinese — Intermediate",
      "Communication",
      "Critical Thinking",
      "Problem Solving",
      "Presentation",
      "Cross-functional Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0E1220]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <p className="text-[#4361EE] text-xs font-semibold tracking-[0.18em] uppercase mb-3">
            Skills & Tools
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E8F8]">
            What I bring to the table
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="p-6 bg-[#111520] border border-[#1E2436] hover:border-[#252D42] rounded-xl transition-colors duration-200"
            >
              {/* Icon */}
              <div className="inline-flex p-2.5 rounded-lg bg-[#4361EE]/10 text-[#7B9BFF] mb-4">
                <cat.icon size={20} />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#E2E8F8] mb-4 text-sm tracking-wide">
                {cat.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#4361EE]/8 text-[#7B9BFF] border border-[#4361EE]/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-line mt-24 max-w-6xl mx-auto" />
    </section>
  );
}
