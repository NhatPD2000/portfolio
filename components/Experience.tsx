"use client";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "AES Vietnam",
    role: "Business Analyst",
    period: "April 2024 – Present",
    location: "Ho Chi Minh City",
    type: "Full-time",
    highlights: [
      "Delivered BRD & FSD documentation for 2 major MES projects, ensuring full alignment between client operations and system design",
      "Implemented MES solutions for 3 factory clients, improving operational efficiency by 15% through workflow optimization",
      "Designed mockups, wireframes, and prototypes using Figma to visualize system workflows and UX for operators",
      "Collaborated with cross-functional teams including Developers, QA Testers, and the IoT team",
      "Led go-live activities, user training, and pilot testing at manufacturing sites",
    ],
    tags: ["MES/MOM", "IoT", "BRD/FSD", "Figma", "Agile"],
    accent: "sky",
  },
  {
    company: "Lumos IS — ERP Solution",
    role: "Business Analyst",
    period: "June 2023 – March 2024",
    location: "Ho Chi Minh City",
    type: "Full-time",
    highlights: [
      "Gathered, refined, and documented user requirements in Business Requirement Specifications for ERP implementations",
      "Designed and implemented ERP system functionalities using Agile principles on Oracle Apex low-code platform",
      "Developed dashboards, reports, and custom features according to client business requirements",
      "Deployed software during testing phases, provided end-user guidance, and resolved system issues post-deployment",
    ],
    tags: ["ERP", "Oracle Apex", "Agile/Scrum", "SQL", "Power BI"],
    accent: "teal",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Work Experience
          </p>
          <h2 className="text-4xl font-bold text-slate-100">
            Where I&apos;ve made an impact
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-700 hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden sm:block ${
                    exp.accent === "sky"
                      ? "bg-sky-500 border-sky-400"
                      : "bg-teal-500 border-teal-400"
                  }`}
                />

                <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:border-sky-500/20 transition-all duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 size={14} className="text-slate-500" />
                        <span className="text-sm text-slate-500">{exp.company}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 text-sm text-slate-400 justify-end mb-1">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          exp.accent === "sky"
                            ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                            : "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-sky-500 mt-1.5 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-slate-700/50 text-slate-400 rounded-full border border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider mt-24 max-w-6xl mx-auto opacity-30" />
    </section>
  );
}
