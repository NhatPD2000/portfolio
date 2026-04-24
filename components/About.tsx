"use client";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Globe, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Domain Expertise",
    desc: "Manufacturing (MES/MOM), ERP Systems, Smart Factory & IoT integration",
    color: "sky",
  },
  {
    icon: Globe,
    title: "Trilingual",
    desc: "Vietnamese (Native) · English (Fluent) · Chinese (Intermediate)",
    color: "teal",
  },
  {
    icon: GraduationCap,
    title: "Background",
    desc: "B.A. English Language — HCMUT · Strong bridge between technical & business teams",
    color: "amber",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div>
            <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-slate-100 mb-6 leading-tight">
              Turning complex processes into{" "}
              <span className="gradient-text">clear digital solutions</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              I&apos;m a Business Analyst with 3+ years of experience specializing in
              manufacturing technology — from implementing MES systems at factory
              floors to digitizing ERP workflows for enterprise clients.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My edge: I speak both the language of the shop floor and the
              boardroom. I translate production line realities into system
              requirements that developers can build and operators can use.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin size={14} className="text-sky-400" />
              Ho Chi Minh City, Vietnam
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:border-sky-500/30 transition-all duration-200 group"
              >
                <div
                  className={`p-2.5 rounded-xl ${
                    item.color === "sky"
                      ? "bg-sky-500/10 text-sky-400"
                      : item.color === "teal"
                      ? "bg-teal-500/10 text-teal-400"
                      : "bg-amber-500/10 text-amber-400"
                  } group-hover:scale-110 transition-transform duration-200`}
                >
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-24 max-w-6xl mx-auto opacity-30" />
    </section>
  );
}
