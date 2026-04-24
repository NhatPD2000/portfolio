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
    <section id="about" className="py-24 px-6 bg-[#090C14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <p className="text-[#4361EE] text-xs font-semibold tracking-[0.18em] uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E8F8] mb-6 leading-snug">
              Turning complex factory processes{" "}
              <span className="gradient-text">into clear digital systems</span>
            </h2>
            <p className="text-[#8892AA] leading-relaxed mb-4 text-[15px]">
              I&apos;m a Business Analyst with 3+ years of experience specializing in
              manufacturing technology — from implementing MES systems on factory
              floors to digitizing ERP workflows for enterprise clients.
            </p>
            <p className="text-[#8892AA] leading-relaxed mb-8 text-[15px]">
              My edge: I speak both the language of the shop floor and the
              boardroom. I translate production line realities into system
              requirements that developers can build and operators can adopt.
            </p>
            <div className="flex items-center gap-2 text-[#4A5268] text-sm">
              <MapPin size={13} className="text-[#7B9BFF]" />
              Ho Chi Minh City, Vietnam
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className="space-y-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 bg-[#0E1220] border border-[#1E2436] hover:border-[#252D42] rounded-xl transition-colors duration-200"
              >
                <div className="p-2 rounded-lg bg-[#4361EE]/10 text-[#7B9BFF] shrink-0 mt-0.5">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#E2E8F8] mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-[#8892AA] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-line mt-24 max-w-6xl mx-auto" />
    </section>
  );
}
