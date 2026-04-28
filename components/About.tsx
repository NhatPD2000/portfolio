"use client";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Globe, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Domain Expertise",
    desc: "Manufacturing (MES/MOM), ERP Systems, Smart Factory & IoT integration across production environments",
  },
  {
    icon: Globe,
    title: "Trilingual Communicator",
    desc: "Vietnamese (Native) · English (Fluent) · Chinese (Intermediate) — bridges teams across language barriers",
  },
  {
    icon: GraduationCap,
    title: "Background",
    desc: "B.A. English Language — HCMUT · Translates complex technical systems into language stakeholders understand",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#F7F9FC] topo-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-20 items-center"
        >
          {/* Left */}
          <div>
            <p className="label-amber mb-4">About Me</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#0D1B2E] mb-6 leading-tight">
              Turning complex processes into{" "}
              <span className="text-[#2EC4A8]">clear digital systems</span>
            </h2>
            <p className="text-[#4A5E7A] leading-relaxed mb-4 text-[15px]">
              I&apos;m a Business Analyst with 3+ years of experience in manufacturing technology — implementing MES systems on factory floors and digitizing ERP workflows for enterprise clients.
            </p>
            <p className="text-[#4A5E7A] leading-relaxed mb-8 text-[15px]">
              I speak both the language of the shop floor and the boardroom, translating production realities into requirements that developers can build and operators can adopt.
            </p>
            <div className="flex items-center gap-2 text-[#8999BB] text-sm">
              <MapPin size={13} className="text-[#2EC4A8]" />
              Ho Chi Minh City, Vietnam
            </div>
          </div>

          {/* Right */}
          <div className="space-y-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-white border border-[#D8E2F0] rounded-xl card-hover"
              >
                <div className="p-2 rounded-lg bg-[#2EC4A8]/10 text-[#2EC4A8] shrink-0 mt-0.5">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0D1B2E] mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-[#4A5E7A] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
