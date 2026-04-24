"use client";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Factory } from "lucide-react";
import Image from "next/image";

function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-lg">
      {/* Chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#F1F5F9] border-b border-[#E2E8F0]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/80" />
        <div className="ml-3 flex-1 h-5 bg-white rounded text-[11px] flex items-center px-2.5 text-[#94A3B8] font-mono truncate border border-[#E2E8F0]">
          {url}
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative overflow-hidden" style={{ maxHeight: "260px" }}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full object-cover object-top"
          style={{ maxHeight: "260px" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
}

const projects = [
  {
    id: "smes",
    icon: Factory,
    company: "AES Vietnam",
    client: "Spartronics",
    title: "Spartronics Manufacturing Execution System",
    subtitle: "Custom MES — built from scratch with IoT integration",
    period: "Dec 2024 – Present",
    screenshots: [
      { src: "/smes-workcenter.png", alt: "SMES Work Order & Production Line Tracking", url: "smes.spartronics.com/work-center" },
      { src: "/smes-iqc.png", alt: "SMES Incoming Quality Control", url: "smes.spartronics.com/iqc" },
    ],
    challenge:
      "Spartronics had zero real-time visibility into their SMT production lines. Manual tracking created blind spots — product traceability didn't exist, and quality defects were only caught late in the cycle.",
    approach: [
      "Ran on-site requirement workshops to map existing workflows in BPMN, identifying 8 key process gaps",
      "Designed end-to-end system architecture integrating IoT (FPC devices) for real-time machine data",
      "Wrote BRD & FSD covering Work Order management, process route control, traceability, and QC modules",
      "Built and iterated Figma prototypes for operator dashboards — validated through 3 UAT rounds on the factory floor",
    ],
    results: [
      { metric: "Real-time", label: "SMT production monitoring" },
      { metric: "100%", label: "Product traceability coverage" },
      { metric: "IoT", label: "FPC device integration live" },
    ],
    tags: ["MES / MOM", "IoT", "BPMN", "Figma", "BRD / FSD", "Traceability", "Quality Control"],
  },
  {
    id: "pnj",
    icon: Zap,
    company: "AES Vietnam",
    client: "PNJ — Phu Nhuan Jewelry",
    title: "Apriso Integration for Electroplating Process",
    subtitle: "MES digitalization — Apriso / Dassault Systèmes",
    period: "Dec 2023 – Dec 2024",
    screenshots: [
      { src: "/pnj-production.png", alt: "PNJ Production Execution Screen", url: "pnj-mes.apriso.com/production" },
    ],
    challenge:
      "PNJ's electroplating line ran entirely on manual surface area calculations and paper-based logs. This caused frequent coating thickness errors, high rework rates, and zero integration between SCADA machines and production reports.",
    approach: [
      "Mapped the full electroplating workflow in BPMN — identified 6 manual bottlenecks eligible for automation",
      "Wrote functional specs for automated surface area calculation engine built into Apriso",
      "Defined SCADA-to-Apriso data integration requirements for real-time production parameter tracking",
      "Facilitated iterative testing with floor operators, refining requirements across 4 sprint cycles",
    ],
    results: [
      { metric: "40%", label: "Reduction in manual operations" },
      { metric: "25%", label: "Fewer rework errors" },
      { metric: "Live", label: "SCADA data integration" },
    ],
    tags: ["Apriso", "SCADA Integration", "BPMN", "Process Automation", "Electroplating MES"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          <p className="text-[#4361EE] text-xs font-semibold tracking-[0.18em] uppercase mb-3">
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Real problems. Real results.
          </h2>
          <p className="text-[#64748B] max-w-lg mx-auto text-sm leading-relaxed">
            Each project follows a structured BA process: understand the problem,
            map the flow, document requirements, validate with users.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="bg-white border border-[#E2E8F0] hover:border-[#C7D2FE] hover:shadow-lg rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-[#F1F5F9]">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#EEF2FF] text-[#4361EE] shrink-0">
                      <project.icon size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs text-[#94A3B8]">{project.company}</span>
                        <span className="text-[#E2E8F0]">·</span>
                        <span className="text-xs font-semibold text-[#4361EE]">{project.client}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A]">{project.title}</h3>
                      <p className="text-sm text-[#94A3B8] mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1.5 rounded-md bg-[#EEF2FF] text-[#4361EE] border border-[#C7D2FE] shrink-0">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Screenshots */}
              <div className={`px-8 py-6 border-b border-[#F1F5F9] bg-[#FAFBFC] ${project.screenshots.length === 2 ? "grid md:grid-cols-2 gap-4" : ""}`}>
                {project.screenshots.map((shot) => (
                  <BrowserFrame key={shot.src} {...shot} />
                ))}
              </div>

              {/* 3 columns */}
              <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#F1F5F9]">
                <div className="px-8 py-6">
                  <h4 className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-[0.18em] mb-3">
                    Challenge
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">{project.challenge}</p>
                </div>

                <div className="px-8 py-6">
                  <h4 className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-[0.18em] mb-3">
                    BA Approach
                  </h4>
                  <ul className="space-y-2.5">
                    {project.approach.map((step) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-[#475569]">
                        <span className="text-[#4361EE] mt-1.5 shrink-0 text-xs">▸</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 py-6">
                  <h4 className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-[0.18em] mb-3">
                    Results
                  </h4>
                  <div className="space-y-3 mb-6">
                    {project.results.map((r) => (
                      <div
                        key={r.metric}
                        className="flex items-center gap-3 p-3 bg-[#FFFBEB] rounded-lg border border-[#FDE68A]"
                      >
                        <span className="text-xl font-bold text-[#D97706]">{r.metric}</span>
                        <span className="text-xs text-[#92400E] leading-tight">{r.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-[#EEF2FF] text-[#4361EE] border border-[#C7D2FE]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ERP footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6 p-6 bg-white border border-[#E2E8F0] rounded-xl flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-[#EEF2FF] text-[#4361EE] shrink-0">
            <TrendingUp size={18} />
          </div>
          <div>
            <h4 className="font-semibold text-[#0F172A] mb-1 text-sm">
              ERP Implementation — Lumos IS (2023–2024)
            </h4>
            <p className="text-sm text-[#475569] leading-relaxed">
              Collaborated with enterprise clients to implement ERP solutions on Oracle Apex.
              Delivered custom dashboards, reports, and system features via Agile sprints.
              Managed UAT cycles and provided post-deployment support.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {["Oracle Apex", "ERP", "Agile", "Dashboard Design", "UAT"].map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-[#EEF2FF] text-[#4361EE] border border-[#C7D2FE]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-line mt-24 max-w-6xl mx-auto" />
    </section>
  );
}
