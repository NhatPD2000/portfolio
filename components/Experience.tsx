"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Calendar, MapPin, TrendingUp, ChevronDown, FileText, ExternalLink, Workflow, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

export default function ExperienceEnhanced() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  const toggle = (num: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  };

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="label-amber mb-4">{t.label}</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--text-primary)]">
            {t.heading}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-[var(--border)] hidden sm:block" />

          <div className="space-y-5">
            {t.items.map((exp, i) => {
              const isExpanded = expanded.has(exp.num);
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative sm:pl-14"
                >
                  <div
                    className={`absolute left-[15px] top-6 w-3.5 h-3.5 rounded-full border-2 hidden sm:block ${
                      exp.current
                        ? "bg-[#4F46E5] border-[#4F46E5] shadow-[0_0_0_4px_rgba(79,70,229,0.15)]"
                        : "bg-[var(--border)] border-[var(--border-hover)]"
                    }`}
                  />

                  <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden card-hover">
                    <div className="h-[3px] w-full" style={{ background: exp.current ? "linear-gradient(90deg, #4F46E5, #818CF8)" : "linear-gradient(90deg, var(--border), transparent)" }} />

                    <div className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <Building2 size={12} className="text-[var(--text-muted)]" />
                            <span className="text-xs text-[var(--text-muted)]">{exp.company}</span>
                            {exp.current && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-[#4F46E5]/10 text-[var(--accent)] border border-[#4F46E5]/20 font-medium">
                                {t.current}
                              </span>
                            )}
                          </div>
                          <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">{exp.role}</h3>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                            <Calendar size={11} />{exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                            <MapPin size={10} />{exp.location}
                          </div>
                          <div className="label-amber">{exp.num}</div>
                        </div>
                      </div>

                      <ul className="space-y-2.5 mb-5">
                        {exp.highlights.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.07 }}
                            className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                          >
                            <span className="text-[var(--accent)] mt-1.5 shrink-0 text-xs">▸</span>
                            {point}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex items-start gap-3 px-4 py-3 mb-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
                        <TrendingUp size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                        <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">{exp.keyResult}</p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="text-[11px] px-2.5 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded border border-[var(--border)]">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {exp.clients.length > 0 && (
                      <button
                        onClick={() => toggle(exp.num)}
                        className="w-full flex items-center justify-between px-6 py-3 border-t border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
                      >
                        <span>{isExpanded ? t.hideClients : t.viewClients(exp.clients.length)}</span>
                        <ChevronDown size={14} style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
                      </button>
                    )}

                    <AnimatePresence>
                      {isExpanded && exp.clients.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-3 space-y-4">
                            {exp.clients.map((client) => (
                              <div key={client.name} className="p-5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg space-y-4">
                                <div>
                                  <p className="font-semibold text-[var(--text-primary)] text-base leading-tight">{client.name}</p>
                                  <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-0.5">{client.industry}</p>
                                </div>

                                {client.problem && (
                                  <div className="p-3 bg-red-500/5 border border-red-500/20 rounded">
                                    <div className="flex items-start gap-2 mb-1.5">
                                      <span className="text-xs font-semibold text-red-600 dark:text-red-400">{t.sections.problem}</span>
                                    </div>
                                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{client.problem}</p>
                                  </div>
                                )}

                                {client.analysis && client.analysis.length > 0 && (
                                  <div>
                                    <div className="flex items-center gap-2 mb-2">
                                      <Users size={12} className="text-[var(--accent)]" />
                                      <span className="text-xs font-semibold text-[var(--text-primary)]">{t.sections.analysis}</span>
                                    </div>
                                    <ul className="space-y-1.5">
                                      {client.analysis.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                                          <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <Workflow size={12} className="text-[var(--accent)]" />
                                    <span className="text-xs font-semibold text-[var(--text-primary)]">{t.sections.scope}</span>
                                  </div>
                                  <ul className="space-y-1.5">
                                    {client.scope.map((s, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                                        <span className="text-[var(--accent)] mt-0.5 shrink-0">▸</span>
                                        {s}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {client.deliverables && client.deliverables.length > 0 && (
                                  <div>
                                    <div className="flex items-center gap-2 mb-2">
                                      <FileText size={12} className="text-[var(--accent)]" />
                                      <span className="text-xs font-semibold text-[var(--text-primary)]">{t.sections.deliverables}</span>
                                    </div>
                                    <div className="space-y-2">
                                      {client.deliverables.map((deliverable) => (
                                        <div key={deliverable.name} className="flex items-start justify-between gap-3 p-2.5 bg-[var(--bg-primary)] border border-[var(--border)] rounded">
                                          <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium text-[var(--text-primary)] mb-0.5">{deliverable.name}</p>
                                            <p className="text-[10px] text-[var(--text-muted)] leading-snug">{deliverable.description}</p>
                                            {(deliverable.pages || deliverable.screens) && (
                                              <p className="text-[10px] text-[var(--accent)] mt-1">
                                                {deliverable.pages && `${deliverable.pages} ${t.pages}`}
                                                {deliverable.screens && `${deliverable.screens} ${t.screens}`}
                                              </p>
                                            )}
                                          </div>
                                          {deliverable.link && (
                                            <a href={deliverable.link} className="shrink-0 p-1.5 hover:bg-[var(--accent)]/10 rounded transition-colors" aria-label={`View ${deliverable.name}`}>
                                              <ExternalLink size={12} className="text-[var(--accent)]" />
                                            </a>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                <div className="pt-3 border-t border-[var(--border)]">
                                  <div className="flex items-start gap-2 mb-2">
                                    <TrendingUp size={12} className="text-green-600 dark:text-green-400 mt-0.5" />
                                    <div>
                                      <span className="text-xs font-semibold text-green-600 dark:text-green-400 block mb-1">{t.sections.outcome}</span>
                                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{client.outcome}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {client.tags.map((tag) => (
                                      <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-[#4F46E5]/10 text-[var(--accent)] rounded">{tag}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
