"use client";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Globe, GraduationCap, TrendingUp, Factory, Users, Layers } from "lucide-react";

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

const metrics = [
  { icon: TrendingUp, value: "15%", label: "Efficiency gain delivered at Spartronics MES" },
  { icon: Factory,   value: "3",    label: "Factory go-lives completed end-to-end" },
  { icon: Layers,    value: "2",    label: "MES platforms: custom-built & Apriso/Dassault" },
  { icon: Users,     value: "3",    label: "Languages — bridges cross-cultural teams" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="label-amber mb-4">About Me</p>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#0D1B2E] leading-tight">
              Turning complex processes into{" "}
              <span className="text-[#4F46E5]">clear digital systems</span>
            </h2>
            <div>
              <p className="text-[#4A5E7A] leading-relaxed mb-4 text-[15px]">
                I&apos;m a Business Analyst with 3+ years of experience in manufacturing technology — implementing MES systems on factory floors and digitizing ERP workflows for enterprise clients.
              </p>
              <p className="text-[#4A5E7A] leading-relaxed text-[15px]">
                I speak both the language of the shop floor and the boardroom, translating production realities into requirements that developers can build and operators can adopt.
              </p>
              <div className="flex items-center gap-2 text-[#8999BB] text-sm mt-5">
                <MapPin size={13} className="text-[#4F46E5]" />
                Ho Chi Minh City, Vietnam
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="p-5 bg-[#F7F9FC] border border-[#D8E2F0] rounded-xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-[#4F46E5]/10">
                    <Icon size={14} className="text-[#4F46E5]" />
                  </div>
                </div>
                <div className="font-serif text-3xl font-bold text-[#0D1B2E] mb-1">{m.value}</div>
                <p className="text-xs text-[#8999BB] leading-snug">{m.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex flex-col gap-3 p-6 bg-white border border-[#D8E2F0] rounded-xl card-hover"
            >
              <div className="p-2.5 rounded-xl bg-[#4F46E5]/10 text-[#4F46E5] w-fit">
                <item.icon size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-[#0D1B2E] mb-1.5 text-sm">{item.title}</h3>
                <p className="text-xs text-[#4A5E7A] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
      <div className="section-line mt-28 max-w-6xl mx-auto" />
    </section>
  );
}
