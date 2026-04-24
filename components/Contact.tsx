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
  },
  {
    icon: GitBranch,
    label: "GitHub",
    href: "https://github.com/phandinhnhat",
  },
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
      <section id="contact" className="py-24 px-6 bg-[#090C14]">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E8F8] mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-[#8892AA] max-w-md mx-auto text-sm">
              Looking for a BA who understands both the factory floor and the
              boardroom? Let&apos;s connect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left — contact details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="space-y-3"
            >
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-[#0E1220] border border-[#1E2436] rounded-xl"
                >
                  <div className="p-2 rounded-lg bg-[#4361EE]/10 text-[#7B9BFF] shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#4A5268] mb-0.5 uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#E2E8F8] hover:text-[#7B9BFF] transition-colors text-sm font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#E2E8F8] text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 border border-[#1E2436] hover:border-[#4361EE]/40 hover:text-[#7B9BFF] rounded-xl text-sm text-[#8892AA] transition-all duration-200 flex-1 justify-center"
                  >
                    <social.icon size={15} />
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative p-8 bg-[#0E1220] border border-[#252D42] rounded-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#4361EE]/8 rounded-full blur-2xl pointer-events-none" />

              <div className="relative">
                <h3 className="text-xl font-bold text-[#E2E8F8] mb-3">
                  Open to opportunities
                </h3>
                <p className="text-[#8892AA] text-sm leading-relaxed mb-6">
                  Interested in BA roles in manufacturing tech, smart factory,
                  MES/ERP projects, or digital transformation. Full-time or
                  project-based.
                </p>
                <div className="space-y-2 mb-8">
                  {openTo.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#8892AA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4361EE] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="mailto:phandinhnhat806@gmail.com"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-[#4361EE] hover:bg-[#3451D1] text-white font-medium rounded-lg transition-colors duration-200 w-fit text-sm"
              >
                Send me a message
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1E2436] py-8 px-6 bg-[#090C14]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#4A5268] text-sm">
            © 2025 <span className="text-[#8892AA]">Phan Dinh Nhat</span> — Business Analyst
          </p>
          <p className="text-[#4A5268] text-xs">
            Built with Next.js · Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </footer>
    </>
  );
}
