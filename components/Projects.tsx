"use client";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Factory } from "lucide-react";
import Image from "next/image";

function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#D8E2F0] shadow-lg shadow-black/5">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#F0F4FA] border-b border-[#D8E2F0]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/70" />
        <div className="ml-3 flex-1 h-5 bg-white rounded text-[11px] flex items-center px-2.5 text-[#8999BB] font-mono truncate border border-[#D8E2F0]">
          {url}
        </div>
      </div>
      <div className="relative overflow-hidden" style={{ maxHeight: "260px" }}>
        <Image src={src} alt={alt} width={1200} height={800} className="w-full object-cover object-top" style={{ maxHeight: "260px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F0F4FA] to-transparent" />
      </div>
    </div>
  );
}

const projects = [
  {
    id: "smes",
    icon: Factory,
    num: "01",
    company: "AES Vietnam",
    client: "Spartronics",
    title: "Spartronics Manufacturing Execution System",
    subtitle: "Custom MES — built from scratch with IoT integration",
    period: "Dec 2024 – Present",
    screenshots: [
      { src: "/smes-workcenter.png", alt: "SMES Work Order & Production Line", url: "smes.spartronics.com/work-center" },
      { src: "/smes-iqc.png", alt: "SMES Incoming Quality Control", url: "smes.spartronics.com/iqc" },
    ],
    challenge: "Spartronics had zero real-time visibility into their SMT production lines. Manual tracking created blind spots — product traceability didn't exist, and quality defects were only caught late in the cycle.",
    approach: [
      "On-site workshops to map existing workflows in BPMN, identifying 8 key process gaps",
      "System architecture integrating IoT (FPC devices) for real-time machine data collection",
      "BRD & FSD covering Work Order management, process routes, traceability, and QC modules",
      "Figma prototypes for operator dashboards — validated through 3 UAT rounds on the factory floor",
    ],
    results: [
      { metric: "Real-time", label: "SMT production monitoring" },
      { metric: "100%", label: "Product traceability" },
      { metric: "IoT", label: "FPC device integration" },
    ],
    tags: ["MES / MOM", "IoT", "BPMN", "Figma", "BRD / FSD", "Traceability", "QC"],
  },
  {
    id: "pnj",
    icon: Zap,
    num: "02",
    company: "AES Vietnam",
    client: "PNJ — Phu Nhuan Jewelry",
    title: "Apriso Integration for Electroplating Process",
    subtitle: "MES digitalization — Apriso / Dassault Systèmes",
    period: "Dec 2023 – Dec 2024",
    screenshots: [
      { src: "/pnj-production.png", alt: "PNJ Production Execution Screen", url: "pnj-mes.apriso.com/production" },
    ],
    challenge: "PNJ's electroplating line ran on manual calculations and paper logs. Frequent coating errors, high rework rates, and zero SCADA-to-report integration were costing production time and quality.",
    approach: [
      "BPMN mapping of full electroplating workflow — identified 6 bottlenecks for automation",
      "Functional specs for automated surface area calculation engine in Apriso",
      "SCADA-to-Apriso integration requirements for real-time parameter tracking",
      "Iterative testing with floor operators across 4 sprint cycles",
    ],
    results: [
      { metric: "40%", label: "Fewer manual operations" },
      { metric: "25%", label: "Reduction in rework errors" },
      { metric: "Live", label: "SCADA data integration" },
    ],
    tags: ["Apriso", "SCADA", "BPMN", "Process Automation", "MES"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-amber mb-4">Featured Work</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#0D1B2E] mb-4">
            Real problems. Real results.
          </h2>
          <p className="text-[#4A5E7A] max-w-lg mx-auto text-sm leading-relaxed">
            Structured BA process: understand the problem, map the flow, document requirements, validate with users.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="bg-white border border-[#D8E2F0] rounded-2xl overflow-hidden card-hover"
            >
              {/* Card header */}
              <div className="px-8 pt-8 pb-6 border-b border-[#D8E2F0]">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#2EC4A8]/10 text-[#2EC4A8] shrink-0">
                      <project.icon size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs text-[#8999BB]">{project.company}</span>
                        <span className="text-[#D8E2F0]">·</span>
                        <span className="text-xs font-semibold text-[#2EC4A8]">{project.client}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#0D1B2E]">{project.title}</h3>
                      <p className="text-sm text-[#8999BB] mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs px-3 py-1.5 rounded border border-[#D8E2F0] text-[#4A5E7A] shrink-0">
                      {project.period}
                    </span>
                    <span className="label-amber shrink-0">{project.num}</span>
                  </div>
                </div>
              </div>

              {/* Screenshots */}
              <div className={`px-8 py-6 bg-[#F7F9FC] border-b border-[#D8E2F0] ${project.screenshots.length === 2 ? "grid md:grid-cols-2 gap-4" : ""}`}>
                {project.screenshots.map((shot) => (
                  <BrowserFrame key={shot.src} {...shot} />
                ))}
              </div>

              {/* 3-col content */}
              <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#D8E2F0]">
                <div className="px-8 py-6">
                  <h4 className="label-amber mb-3">Challenge</h4>
                  <p className="text-sm text-[#4A5E7A] leading-relaxed">{project.challenge}</p>
                </div>

                <div className="px-8 py-6">
                  <h4 className="label-amber mb-3">BA Approach</h4>
                  <ul className="space-y-2.5">
                    {project.approach.map((step) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-[#4A5E7A]">
                        <span className="text-[#2EC4A8] mt-1.5 shrink-0 text-xs">▸</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 py-6">
                  <h4 className="label-amber mb-3">Results</h4>
                  <div className="space-y-2.5 mb-5">
                    {project.results.map((r) => (
                      <div key={r.metric} className="flex items-center gap-3 p-3 bg-[#F7F9FC] rounded-lg border border-[#D8E2F0]">
                        <span className="font-serif text-xl font-bold text-[#E8960C]">{r.metric}</span>
                        <span className="text-xs text-[#4A5E7A] leading-tight">{r.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-[#EEF3FA] text-[#4A5E7A] border border-[#D8E2F0]">
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 p-6 bg-white border border-[#D8E2F0] rounded-xl flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-[#2EC4A8]/10 text-[#2EC4A8] shrink-0">
            <TrendingUp size={18} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h4 className="font-semibold text-[#0D1B2E] text-sm">ERP Implementation — Lumos IS</h4>
              <span className="label-amber">03</span>
            </div>
            <p className="text-sm text-[#4A5E7A] leading-relaxed">
              Implemented ERP solutions on Oracle Apex for enterprise clients via Agile sprints. Delivered custom dashboards, reports, and features. Managed UAT cycles and post-deployment support.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {["Oracle Apex", "ERP", "Agile", "Dashboard Design", "UAT"].map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-[#EEF3FA] text-[#4A5E7A] border border-[#D8E2F0]">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
