"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link2, GitBranch, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const contactItemsBase = [
  { icon: Mail,   key: "Email" as const,    value: "phandinhnhat806@gmail.com", href: "mailto:phandinhnhat806@gmail.com" },
  { icon: Phone,  key: "Phone" as const,    value: "(+84) 899 227 940",         href: "tel:+84899227940" },
  { icon: MapPin, key: "Location" as const, value: "Ho Chi Minh City, Vietnam",  href: null },
];

const socialLinks = [
  { icon: Link2,     label: "LinkedIn", href: "https://www.linkedin.com/in/nhatsifo806/" },
  { icon: GitBranch, label: "GitHub",   href: "https://github.com/phandinhnhat" },
];

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <>
      <section id="contact" className="py-28 px-6 bg-[var(--bg-tertiary)] topo-bg">
        <div className="max-w-4xl mx-auto">
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
            <p className="text-[var(--text-secondary)] max-w-sm mx-auto text-sm">
              {t.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Left — contact details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="space-y-3"
            >
              {contactItemsBase.map((item) => (
                <div key={item.key} className="flex items-center gap-4 p-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl">
                  <div className="p-2 rounded-lg bg-[#4F46E5]/10 text-[var(--accent)] shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--text-muted)] mb-0.5 uppercase tracking-widest">
                      {t.contactLabels[item.key]}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors text-sm font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[var(--text-primary)] text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-1">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 border border-[var(--border)] hover:border-[#4F46E5]/40 hover:text-[var(--accent)] rounded-xl text-sm text-[var(--text-secondary)] transition-all duration-200 flex-1 justify-center bg-[var(--bg-secondary)]"
                  >
                    <s.icon size={14} />
                    <span className="text-xs tracking-wide">{s.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative p-8 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-52 h-52 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(46,196,168,0.07) 0%, transparent 70%)", filter: "blur(24px)" }} />

              <div className="relative">
                <p className="label-amber mb-3">{t.opportunitiesLabel}</p>
                <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-3">{t.ctaHeading}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">{t.ctaDesc}</p>
                <div className="space-y-2 mb-8">
                  {t.openTo.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]/60 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="mailto:phandinhnhat806@gmail.com"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-[#4F46E5] hover:bg-[#3730A3] text-white font-semibold rounded-lg transition-colors duration-200 w-fit text-sm"
              >
                {t.sendMessage}
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] py-8 px-6 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-[var(--text-muted)] text-sm">
            © 2026 <span className="font-serif text-[var(--text-secondary)]">Phan Dinh Nhat</span> — {t.footer}
          </p>
        </div>
      </footer>
    </>
  );
}
