"use client";
import { motion } from "framer-motion";
import { ClipboardList, PenTool, Code2, Users } from "lucide-react";

const categories = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Business Analysis",
    skills: ["Requirement Gathering", "BRD / FSD", "User Stories", "Agile & Scrum", "FIT/GAP Analysis", "UAT Management", "Stakeholder Mgmt", "BPMN Mapping"],
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design & Visualization",
    skills: ["Wireframing", "Figma Prototyping", "UML Diagrams", "BPMN Flowcharts", "Visio", "Draw.io", "User Flow", "System Architecture"],
  },
  {
    icon: Code2,
    num: "03",
    title: "Technical Tools",
    skills: ["SQL", "Power BI", "Oracle Apex", "MES / MOM", "Apriso — Dassault", "SCADA Integration", "IoT Concepts", "Low-Code Dev"],
  },
  {
    icon: Users,
    num: "04",
    title: "Soft Skills & Languages",
    skills: ["Vietnamese — Native", "English — Fluent", "Chinese — Intermediate", "Communication", "Critical Thinking", "Problem Solving", "Presentation", "Cross-team Collab"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0C1226]">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="p-6 bg-[#0F1830] border border-[#1B2540] rounded-xl card-hover relative overflow-hidden group"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-5 font-serif text-5xl font-bold text-[#1B2540] group-hover:text-[#243050] transition-colors duration-300 leading-none select-none">
                {cat.num}
              </div>

              <div className="inline-flex p-2.5 rounded-lg bg-[#2EC4A8]/10 text-[#2EC4A8] mb-4 relative z-10">
                <cat.icon size={20} />
              </div>
              <h3 className="font-semibold text-[#E8EDF8] mb-4 text-sm tracking-wide relative z-10">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 relative z-10">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#131D38] text-[#6B7AB8] border border-[#243050]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
