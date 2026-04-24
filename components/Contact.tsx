"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link2, GitBranch, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "phandinhnhat806@gmail.com",
    href: "mailto:phandinhnhat806@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+84) 899 227 940",
    href: "tel:+84899227940",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Link2,
    label: "LinkedIn",
    href: "https://linkedin.com/in/phandinhnhat",
    color: "hover:text-sky-400 hover:border-sky-400/40",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    href: "https://github.com/phandinhnhat",
    color: "hover:text-slate-200 hover:border-slate-400/40",
  },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Looking for a BA who understands both the factory floor and the
              boardroom? Let&apos;s connect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-5 bg-slate-800/40 border border-slate-700/50 rounded-2xl"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-200 hover:text-sky-400 transition-colors text-sm font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-3 border border-slate-700/50 rounded-xl text-sm text-slate-400 transition-all duration-200 ${social.color}`}
                  >
                    <social.icon size={16} />
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative p-8 bg-gradient-to-br from-sky-500/10 to-teal-500/10 border border-sky-500/20 rounded-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Blob */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl" />
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">
                  Open to opportunities
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  I&apos;m interested in BA roles in manufacturing tech, smart
                  factory, MES/ERP projects, or digital transformation
                  initiatives. Full-time or project-based.
                </p>
                <div className="space-y-2 text-sm text-slate-400 mb-8">
                  {[
                    "Manufacturing / Smart Factory",
                    "MES / MOM / ERP Systems",
                    "Digital Transformation",
                    "Vietnam or Remote",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="mailto:phandinhnhat806@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-all duration-200 w-fit"
              >
                Send me a message
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center">
        <p className="text-slate-600 text-sm">
          © 2025 Phan Dinh Nhat — Business Analyst
          <span className="mx-3">·</span>
          Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </>
  );
}
