"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Zap, Factory, ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

type ArtifactImage = { src: string; caption: string };
type Artifacts = { figma?: string; mockups: ArtifactImage[]; diagrams: ArtifactImage[] };

function BrowserFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-lg shadow-black/5 group hover:border-[var(--accent)]/30 hover:shadow-xl hover:shadow-[var(--accent)]/10 transition-all duration-300">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[var(--bg-tertiary)] border-b border-[var(--border)]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70 group-hover:bg-[#FF5F57] transition-colors duration-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/70 group-hover:bg-[#FEBC2E] transition-colors duration-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/70 group-hover:bg-[#28C840] transition-colors duration-200" />
        <div className="ml-3 flex-1 h-5 bg-[var(--bg-secondary)] rounded text-[11px] flex items-center px-2.5 text-[var(--text-muted)] font-mono truncate border border-[var(--border)]">
          {url}
        </div>
      </div>
      <div className="relative overflow-hidden" style={{ maxHeight: "260px" }}>
        <Image src={src} alt={alt} width={1200} height={800} className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" style={{ maxHeight: "260px" }} />
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-tertiary), transparent)" }} />
        <div className="absolute inset-0 bg-[#0D1B2E]/0 group-hover:bg-[#0D1B2E]/5 transition-colors duration-300 pointer-events-none" />
      </div>
    </div>
  );
}

function ArtifactTile({ src, caption, index }: ArtifactImage & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
      className="group"
    >
      <div className="rounded-lg overflow-hidden border border-[var(--border)] hover:border-[var(--accent)]/40 hover:shadow-md hover:shadow-[var(--accent)]/10 transition-all duration-200">
        <Image
          src={src}
          alt={caption}
          width={400}
          height={280}
          className="w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ maxHeight: "180px" }}
        />
      </div>
      <p className="text-center text-[11px] text-[var(--text-muted)] mt-1.5">{caption}</p>
    </motion.div>
  );
}

function ArtifactsPanel({ artifacts }: { artifacts: Artifacts }) {
  return (
    <div className="px-8 py-6 bg-[var(--surface-elevated)] border-t border-[var(--border)]">
      <div className="flex items-center justify-between mb-4">
        <p className="label-amber">MOCKUPS & WIREFRAMES</p>
        {artifacts.figma && (
          <a
            href={artifacts.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200"
          >
            <ExternalLink size={12} />
            Open in Figma
          </a>
        )}
      </div>
      {artifacts.mockups.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {artifacts.mockups.map((img, i) => (
            <ArtifactTile key={img.src} {...img} index={i} />
          ))}
        </div>
      )}
      {artifacts.diagrams.length > 0 && (
        <>
          <p className="label-amber mt-6 mb-3">PROCESS DIAGRAMS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {artifacts.diagrams.map((img, i) => (
              <ArtifactTile key={img.src} {...img} index={artifacts.mockups.length + i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Static config: icons, screenshots, tags, company/client names (non-translatable)
const PROJECT_CONFIG = [
  {
    id: "smes", num: "01", icon: Factory,
    company: "AES Vietnam", client: "Spartronics",
    screenshots: [
      { src: "/smes-workcenter.png", alt: "SMES Work Order & Production Line", url: "smes.spartronics.com/work-center" },
      { src: "/smes-iqc.png",        alt: "SMES Incoming Quality Control",      url: "smes.spartronics.com/iqc"         },
    ],
    tags: ["MES / MOM","IoT","BPMN","Figma","BRD / FSD","Traceability","QC"],
    artifacts: {
      figma: "",
      mockups: [
        { src: "/smes-mockup-workcenter.png", caption: "Work Center UI" },
        { src: "/smes-mockup-iqc.png",        caption: "IQC Screen" },
      ],
      diagrams: [
        { src: "/smes-bpmn-production.png", caption: "Production Flow" },
        { src: "/smes-bpmn-quality.png",    caption: "Quality Control Flow" },
      ],
    } as Artifacts,
  },
  {
    id: "pnj", num: "02", icon: Zap,
    company: "AES Vietnam", client: "PNJ — Phu Nhuan Jewelry",
    screenshots: [
      { src: "/pnj-production.png", alt: "PNJ Production Execution Screen", url: "pnj-mes.apriso.com/production" },
    ],
    tags: ["Apriso","SCADA","BPMN","Process Automation","MES"],
    artifacts: {
      figma: "",
      mockups: [
        { src: "/pnj-mockup-dashboard.png", caption: "Production Dashboard" },
      ],
      diagrams: [
        { src: "/pnj-bpmn-flow.png", caption: "Process Flow" },
      ],
    } as Artifacts,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProjectCard({ project, t, i }: { project: any; t: any; i: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: i * 0.1 }}
      className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl overflow-hidden card-hover transition-all duration-300 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/10"
    >
      {/* Header */}
      <div className="px-8 pt-8 pb-6 border-b border-[var(--border)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#4F46E5]/10 text-[var(--accent)] shrink-0">
              <project.icon size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs text-[var(--text-muted)]">{project.company}</span>
                <span className="text-[var(--border)]">·</span>
                <span className="text-xs font-semibold text-[var(--accent)]">{project.client}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">{project.title}</h3>
              <p className="text-sm text-[var(--text-muted)] mt-0.5">{project.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs px-3 py-1.5 rounded border border-[var(--border)] text-[var(--text-secondary)] shrink-0">{project.period}</span>
            <span className="label-amber shrink-0">{project.num}</span>
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className={`px-8 py-6 bg-[var(--surface-elevated)] border-b border-[var(--border)] ${project.screenshots.length === 2 ? "grid md:grid-cols-2 gap-4" : ""}`}>
        {project.screenshots.map((shot: { src: string; alt: string; url: string }) => (
          <BrowserFrame key={shot.src} {...shot} />
        ))}
      </div>

      {/* Challenge / Approach / Results */}
      <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
        <div className="px-8 py-6">
          <h4 className="label-amber mb-3">{t.challenge}</h4>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.challenge}</p>
        </div>
        <div className="px-8 py-6">
          <h4 className="label-amber mb-3">{t.approach}</h4>
          <ul className="space-y-2.5">
            {project.approach.map((step: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
              >
                <span className="text-[var(--accent)] mt-1.5 shrink-0 text-xs">▸</span>
                {step}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="px-8 py-6">
          <h4 className="label-amber mb-3">{t.results}</h4>
          <div className="space-y-2.5 mb-5">
            {project.results.map((r: { metric: string; label: string }, idx: number) => (
              <motion.div
                key={r.metric}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="flex items-center gap-3 p-3 bg-[var(--surface-elevated)] rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors duration-200"
              >
                <span className="font-serif text-xl font-bold text-[#E8960C]">{r.metric}</span>
                <span className="text-xs text-[var(--text-secondary)] leading-tight">{r.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag: string) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-[11px] px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Artifacts toggle */}
      {project.artifacts && (
        <>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="w-full flex items-center justify-between px-8 py-3.5 bg-[var(--bg-tertiary)] border-t border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--surface-elevated)] hover:text-[var(--accent)] transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">View Artifacts</span>
              <span className="text-xs text-[var(--text-muted)]">mockups · diagrams · figma</span>
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <ArtifactsPanel artifacts={project.artifacts} />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.article>
  );
}

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const projects = PROJECT_CONFIG.map((cfg, i) => ({ ...cfg, ...t.items[i] }));

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-amber mb-4">{t.label}</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t.heading}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto text-sm leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} t={t} i={i} />
          ))}
        </div>

        {/* ERP footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl flex items-start gap-4"
        >
          <div className="p-2.5 rounded-lg bg-[#4F46E5]/10 text-[var(--accent)] shrink-0">
            <TrendingUp size={18} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h4 className="font-semibold text-[var(--text-primary)] text-sm">{t.erpTitle}</h4>
              <span className="label-amber">03</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t.erpDesc}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {["Oracle Apex","ERP","Agile","Dashboard Design","UAT"].map((tag) => (
                <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border)]">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
