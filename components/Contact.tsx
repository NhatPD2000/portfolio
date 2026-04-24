"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link2, GitBranch, ArrowUpRight } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "phandinhnhat806@gmail.com", href: "mailto:phandinhnhat806@gmail.com" },
  { icon: Phone, label: "Phone", value: "(+84) 899 227 940", href: "tel:+84899227940" },
  { icon: MapPin, label: "Location", value: "Ho Chi Minh City, Vietnam", href: null },
];

const socialLinks = [
  { icon: Link2, label: "LinkedIn", href: "https://linkedin.com/in/phandinhnhat" },
  { icon: GitBranch, label: "GitHub", href: "https://github.com/phandinhnhat" },
];

const openTo = [
  "Manufacturing / Smart Factory",
  "MES / MOM / ERP Systems",
  "Digital Transformation",
  "Vietnam or Remote",
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-14"
          >
            <p className="text-[#4361EE] text-xs font-semibold tracking-[0.18em] uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-[#64748B] max-w-md mx-auto text-sm">
              Looking for a BA who understands both the factory floor and the boardroom?
              Let&apos;s connect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
                  <div className="p-2 rounded-lg bg-[#EEF2FF] text-[#4361EE] shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#94A3B8] mb-0.5 uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[#0F172A] hover:text-[#4361EE] transition-colors text-sm font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#0F172A] text-sm font-medium">{item.value}</p>
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
                    className="flex items-center gap-2 px-4 py-3 border border-[#E2E8F0] hover:border-[#4361EE]/40 hover:text-[#4361EE] hover:bg-[#EEF2FF] rounded-xl text-sm text-[#475569] transition-all duration-200 flex-1 justify-center"
                  >
                    <s.icon size={15} />
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative p-8 bg-[#4361EE] rounded-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle overlay glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-3">Open to opportunities</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Interested in BA roles in manufacturing tech, smart factory,
                  MES/ERP projects, or digital transformation.
                </p>
                <div className="space-y-2 mb-8">
                  {openTo.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-blue-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="mailto:phandinhnhat806@gmail.com"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4361EE] font-semibold rounded-lg transition-colors duration-200 hover:bg-blue-50 w-fit text-sm"
              >
                Send me a message
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E2E8F0] py-8 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#94A3B8] text-sm">
            © 2025 <span className="text-[#475569] font-medium">Phan Dinh Nhat</span> — Business Analyst
          </p>
          <p className="text-[#CBD5E1] text-xs">
            Built with Next.js · Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </footer>
    </>
  );
}
