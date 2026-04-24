"use client";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "AES Vietnam",
    role: "Business Analyst",
    period: "April 2024 – Present",
    location: "Ho Chi Minh City",
    current: true,
    highlights: [
      "Delivered BRD & FSD documentation for 2 major MES projects, ensuring full alignment between client operations and system design",
      "Implemented MES solutions for 3 factory clients — improved operational efficiency by 15% through workflow optimization and smart factory design",
      "Designed mockups, wireframes, and prototypes in Figma to visualize system workflows and operator UX",
      "Collaborated cross-functionally with Developers, QA Testers, and the IoT team throughout the full project lifecycle",
      "Led go-live activities, user training, and pilot testing at manufacturing sites",
    ],
    tags: ["MES / MOM", "IoT", "BRD / FSD", "Figma", "Agile"],
  },
  {
    company: "Lumos IS — ERP Solution",
    role: "Business Analyst",
    period: "June 2023 – March 2024",
    location: "Ho Chi Minh City",
    current: false,
    highlights: [
      "Gathered, refined, and documented user requirements in Business Requirement Specifications for ERP implementations",
      "Designed and built ERP system functionalities on Oracle Apex using Agile principles — developed dashboards, reports, and custom features",
      "Deployed software during testing phases, provided end-user training, and resolved system issues post-go-live",
    ],
    tags: ["ERP", "Oracle Apex", "Agile / Scrum", "SQL", "Power BI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#090C14]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <p className="text-[#4361EE] text-xs font-semibold tracking-[0.18em] uppercase mb-3">
            Work Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E8F8]">
            Where I&apos;ve made an impact
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-[#1E2436] hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative sm:pl-14"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[15px] top-6 w-3.5 h-3.5 rounded-full border-2 hidden sm:block ${
                    exp.current
                      ? "bg-[#4361EE] border-[#4361EE] shadow-[0_0_0_4px_rgba(67,97,238,0.15)]"
                      : "bg-[#252D42] border-[#252D42]"
                  }`}
                />

                <div className="p-6 bg-[#0E1220] border border-[#1E2436] hover:border-[#252D42] rounded-xl transition-colors duration-200">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Building2 size={12} className="text-[#4A5268]" />
                        <span className="text-xs text-[#4A5268]">{exp.company}</span>
                        {exp.current && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#4361EE]/12 text-[#7B9BFF] border border-[#4361EE]/20 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-[#E2E8F8]">{exp.role}</h3>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1.5">
                      <div className="flex items-center gap-1.5 text-xs text-[#8892AA]">
                        <Calendar size={11} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#4A5268]">
                        <MapPin size={10} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-[#8892AA]">
                        <span className="text-[#4361EE] mt-1.5 shrink-0 text-xs">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 bg-[#111520] text-[#8892AA] rounded-md border border-[#1E2436]"
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

      <div className="section-line mt-24 max-w-6xl mx-auto" />
    </section>
  );
}
