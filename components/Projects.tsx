"use client";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Factory } from "lucide-react";

const projects = [
  {
    id: "smes",
    icon: Factory,
    company: "AES Vietnam",
    client: "Spartronics",
    title: "Spartronics Manufacturing Execution System",
    subtitle: "SMES — Custom MES from scratch",
    period: "Dec 2024 – Present",
    accent: "sky",
    challenge:
      "Spartronics had no real-time visibility into their SMT production lines. Manual tracking created blind spots in product traceability and quality control, making it impossible to detect issues before they became costly defects.",
    approach: [
      "Conducted on-site requirement workshops with production managers and floor operators to map existing workflows in BPMN",
      "Designed end-to-end system architecture integrating IoT (FPC devices) for real-time machine data collection",
      "Created detailed BRD & FSD documentation covering process route management, traceability, and QC modules",
      "Designed wireframes and prototypes in Figma for operator-facing dashboards, validated through iterative UAT sessions",
    ],
    results: [
      { metric: "Real-time", desc: "SMT line monitoring enabled" },
      { metric: "100%", desc: "Product traceability coverage" },
      { metric: "IoT", desc: "FPC device integration achieved" },
    ],
    tags: ["MES", "IoT", "BPMN", "Figma", "BRD/FSD", "Traceability", "Quality Control"],
  },
  {
    id: "pnj",
    icon: Zap,
    company: "AES Vietnam",
    client: "PNJ (Phu Nhuan Jewelry)",
    title: "Apriso Integration for Electroplating Process",
    subtitle: "MES Digitalization — Apriso / Dassault",
    period: "Dec 2023 – Dec 2024",
    accent: "teal",
    challenge:
      "PNJ's electroplating process relied entirely on manual surface area calculations and paper-based tracking. This led to frequent coating thickness errors, rework cycles, and disconnected data between SCADA machines and production reports.",
    approach: [
      "Mapped the full electroplating workflow using BPMN to identify manual bottlenecks and automation opportunities",
      "Documented functional specifications for automated surface area calculation engine within Apriso",
      "Defined SCADA-to-Apriso data integration requirements for real-time production tracking",
      "Collaborated with the dev team on iterative testing cycles, adjusting requirements based on factory validation feedback",
    ],
    results: [
      { metric: "40%", desc: "Reduction in manual operations" },
      { metric: "25%", desc: "Fewer rework errors" },
      { metric: "Real-time", desc: "SCADA data integration" },
    ],
    tags: ["Apriso", "SCADA", "BPMN", "Process Automation", "Manufacturing", "Data Integration"],
  },
];

const accentClasses = {
  sky: {
    border: "border-sky-500/30",
    iconBg: "bg-sky-500/10 text-sky-400",
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    metric: "text-sky-400",
    tag: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    dot: "bg-sky-500",
  },
  teal: {
    border: "border-teal-500/30",
    iconBg: "bg-teal-500/10 text-teal-400",
    badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    metric: "text-teal-400",
    tag: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    dot: "bg-teal-500",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Featured Projects
          </p>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Real problems. Real results.
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Each project follows a structured BA approach: understand the problem,
            map the process, document the requirements, validate with users.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => {
            const colors = accentClasses[project.accent as keyof typeof accentClasses];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:${colors.border} transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${colors.iconBg}`}>
                      <project.icon size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-slate-500">{project.company}</span>
                        <span className="text-slate-700">·</span>
                        <span className={`text-xs font-semibold ${colors.metric}`}>
                          {project.client}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                      <p className="text-sm text-slate-500 mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-3 py-1.5 rounded-full border ${colors.badge}`}>
                    {project.period}
                  </span>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                      Challenge
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                      BA Approach
                    </h4>
                    <ul className="space-y-2">
                      {project.approach.map((step) => (
                        <li key={step} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className={`${colors.metric} mt-1.5 shrink-0`}>▸</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                      Results
                    </h4>
                    <div className="space-y-3 mb-6">
                      {project.results.map((result) => (
                        <div
                          key={result.metric}
                          className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-xl border border-slate-600/30"
                        >
                          <span className={`text-xl font-bold ${colors.metric}`}>
                            {result.metric}
                          </span>
                          <span className="text-xs text-slate-500">{result.desc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-0.5 rounded-full border ${colors.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ERP footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-6 bg-slate-800/20 border border-slate-700/30 rounded-2xl flex items-start gap-4"
        >
          <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 shrink-0">
            <TrendingUp size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-slate-300 mb-1">
              ERP Implementation — Lumos IS (2023–2024)
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Collaborated with enterprise clients to implement ERP solutions built on Oracle Apex using
              Agile methodology. Delivered custom dashboards, reports, and system features while managing
              user acceptance testing and post-deployment support.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {["Oracle Apex", "ERP", "Agile", "Dashboard Design", "UAT"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-24 max-w-6xl mx-auto opacity-30" />
    </section>
  );
}
