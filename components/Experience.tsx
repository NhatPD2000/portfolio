"use client";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    num: "01",
    company: "AES Vietnam",
    role: "Business Analyst",
    period: "April 2024 – Present",
    location: "Ho Chi Minh City",
    current: true,
    highlights: [
      "Delivered BRD & FSD for 2 major MES projects, ensuring full alignment between client operations and system design",
      "Implemented MES for 3 factory clients — improved operational efficiency by 15% through workflow optimization",
      "Designed mockups, wireframes, and prototypes in Figma to visualize system workflows and operator UX",
      "Collaborated with Developers, QA Testers, and IoT team throughout the full project lifecycle",
      "Led go-live activities, user training, and pilot testing at manufacturing sites",
    ],
    tags: ["MES / MOM", "IoT", "BRD / FSD", "Figma", "Agile"],
  },
  {
    num: "02",
    company: "Lumos IS — ERP Solution",
    role: "Business Analyst",
    period: "June 2023 – March 2024",
    location: "Ho Chi Minh City",
    current: false,
    highlights: [
      "Gathered, refined, and documented user requirements in Business Requirement Specifications for ERP implementations",
      "Designed and built ERP functionalities on Oracle Apex using Agile — delivered dashboards, reports, and custom features",
      "Deployed software during testing, provided end-user training, and resolved post-go-live system issues",
    ],
    tags: ["ERP", "Oracle Apex", "Agile / Scrum", "SQL", "Power BI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-amber mb-4">Work Experience</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#0D1B2E]">
            Where I&apos;ve made an impact
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-[#D8E2F0] hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative sm:pl-14"
              >
                {/* Timeline dot */}
                <div className={`absolute left-[15px] top-6 w-3.5 h-3.5 rounded-full border-2 hidden sm:block ${
                  exp.current
                    ? "bg-[#2EC4A8] border-[#2EC4A8] shadow-[0_0_0_4px_rgba(46,196,168,0.15)]"
                    : "bg-[#D8E2F0] border-[#C8D5E8]"
                }`} />

                <div className="p-6 bg-white border border-[#D8E2F0] rounded-xl card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Building2 size={12} className="text-[#8999BB]" />
                        <span className="text-xs text-[#8999BB]">{exp.company}</span>
                        {exp.current && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#2EC4A8]/12 text-[#2EC4A8] border border-[#2EC4A8]/20 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#0D1B2E]">{exp.role}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex items-center gap-1.5 text-xs text-[#4A5E7A]">
                        <Calendar size={11} />{exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#8999BB]">
                        <MapPin size={10} />{exp.location}
                      </div>
                      <div className="label-amber">{exp.num}</div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-[#4A5E7A]">
                        <span className="text-[#2EC4A8] mt-1.5 shrink-0 text-xs">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 bg-[#EEF3FA] text-[#4A5E7A] rounded border border-[#D8E2F0]">
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
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
