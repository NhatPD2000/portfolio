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
      <section id="contact" className="py-28 px-6 bg-[#070C18] topo-bg">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="label-amber mb-4">Get In Touch</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#E8EDF8] mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-[#6B7AB8] max-w-sm mx-auto text-sm">
              Looking for a BA who understands both the factory floor and the boardroom?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="space-y-3"
            >
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-[#0C1226] border border-[#1B2540] rounded-xl">
                  <div className="p-2 rounded-lg bg-[#2EC4A8]/10 text-[#2EC4A8] shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#3A4870] mb-0.5 uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[#E8EDF8] hover:text-[#2EC4A8] transition-colors text-sm font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#E8EDF8] text-sm font-medium">{item.value}</p>
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
                    className="flex items-center gap-2 px-4 py-3 border border-[#1B2540] hover:border-[#2EC4A8]/30 hover:text-[#2EC4A8] rounded-xl text-sm text-[#6B7AB8] transition-all duration-200 flex-1 justify-center"
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
              className="relative p-8 bg-[#0C1226] border border-[#1B2540] rounded-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Teal glow */}
              <div className="absolute top-0 right-0 w-52 h-52 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(46,196,168,0.08) 0%, transparent 70%)", filter: "blur(24px)" }} />

              <div className="relative">
                <p className="label-amber mb-3">Open to opportunities</p>
                <h3 className="font-serif text-2xl font-bold text-[#E8EDF8] mb-3">
                  Let&apos;s build something
                </h3>
                <p className="text-[#6B7AB8] text-sm leading-relaxed mb-6">
                  Interested in BA roles in manufacturing tech, smart factory,
                  MES/ERP, or digital transformation.
                </p>
                <div className="space-y-2 mb-8">
                  {openTo.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#6B7AB8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2EC4A8]/60 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="mailto:phandinhnhat806@gmail.com"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-[#2EC4A8] hover:bg-[#25A890] text-[#070C18] font-semibold rounded-lg transition-colors duration-200 w-fit text-sm"
              >
                Send a message
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1B2540] py-8 px-6 bg-[#070C18]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#3A4870] text-sm">
            © 2025 <span className="font-serif text-[#6B7AB8]">Phan Dinh Nhat</span> — Business Analyst
          </p>
          <p className="text-[#3A4870] text-xs tracking-wide">
            Next.js · Tailwind CSS · Framer Motion · Vercel
          </p>
        </div>
      </footer>
    </>
  );
}
