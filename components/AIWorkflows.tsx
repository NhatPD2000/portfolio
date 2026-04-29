"use client";
import { motion } from "framer-motion";
import {
  FileText, GitBranch, CheckSquare, ListChecks,
  Code2, ArrowRight,
} from "lucide-react";

const aiTools = [
  { name: "Claude",       color: "#D97706" },
  { name: "Claude Code",  color: "#F59E0B" },
  { name: "ChatGPT",      color: "#10B981" },
  { name: "Gemini",       color: "#818CF8" },
  { name: "Antigravity",  color: "#C084FC" },
];

const workflows = [
  {
    icon: FileText,
    category: "Requirements Drafting",
    input: "Stakeholder notes & meeting recordings",
    tool: "Claude + ChatGPT",
    toolColor: "#D97706",
    output: "BRS first draft, ready for stakeholder review",
    impact: "5–6× faster",
    impactColor: "#10B981",
  },
  {
    icon: GitBranch,
    category: "Process Mapping",
    input: "Plain-language process description",
    tool: "ChatGPT + Gemini",
    toolColor: "#10B981",
    output: "BPMN structure exported to Visio / draw.io",
    impact: "~60% less time",
    impactColor: "#818CF8",
  },
  {
    icon: CheckSquare,
    category: "UAT Test Cases",
    input: "Functional Specification Document (FSD)",
    tool: "Claude",
    toolColor: "#D97706",
    output: "Comprehensive test scenarios with edge cases",
    impact: "Full coverage",
    impactColor: "#06B6D4",
  },
  {
    icon: ListChecks,
    category: "Meeting → User Stories",
    input: "Transcript, notes, or audio summary",
    tool: "Claude + Antigravity",
    toolColor: "#C084FC",
    output: "Structured user stories + acceptance criteria",
    impact: "Zero missed reqs",
    impactColor: "#F59E0B",
  },
];

export default function AIWorkflows() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #0D1B2E 0%, #152235 60%, #0D1B2E 100%)",
            border: "1px solid rgba(79,70,229,0.25)",
          }}
        >
          {/* Header */}
          <div className="px-8 pt-8 pb-6 border-b border-white/10 flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-cyan-400">
                  AI-Augmented Workflows
                </p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                I don&apos;t just use AI —<br className="hidden sm:block" /> I build workflows with it
              </h2>
              <p className="text-white/50 text-sm max-w-md leading-relaxed">
                Every stage of the BA process, accelerated: from raw meeting notes to signed-off documentation.
              </p>
            </div>

            {/* Tool badges */}
            <div className="flex flex-wrap gap-2 items-start">
              {aiTools.map((tool) => (
                <span
                  key={tool.name}
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: `${tool.color}18`,
                    color: tool.color,
                    border: `1px solid ${tool.color}35`,
                  }}
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          {/* Workflow rows */}
          <div className="px-8 py-6 space-y-3">
            {workflows.map((wf, i) => {
              const Icon = wf.icon;
              return (
                <motion.div
                  key={wf.category}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-5 py-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Category label */}
                  <div className="flex items-center gap-2.5 sm:w-48 shrink-0">
                    <div
                      className="p-1.5 rounded-lg shrink-0"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <Icon size={12} style={{ color: wf.toolColor }} />
                    </div>
                    <span className="text-[11px] font-semibold text-white/70 leading-tight">
                      {wf.category}
                    </span>
                  </div>

                  {/* Flow chain */}
                  <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
                    <span className="text-xs text-white/35 shrink-0 hidden sm:block">Input:</span>
                    <span className="text-xs text-white/50 truncate max-w-[160px]">{wf.input}</span>
                    <ArrowRight size={11} className="text-white/20 shrink-0" />
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded shrink-0"
                      style={{
                        background: `${wf.toolColor}20`,
                        color: wf.toolColor,
                      }}
                    >
                      {wf.tool}
                    </span>
                    <ArrowRight size={11} className="text-white/20 shrink-0" />
                    <span className="text-xs text-white/65">{wf.output}</span>
                  </div>

                  {/* Impact badge */}
                  <div className="shrink-0">
                    <span
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: `${wf.impactColor}15`,
                        color: wf.impactColor,
                        border: `1px solid ${wf.impactColor}30`,
                      }}
                    >
                      {wf.impact}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer — portfolio meta */}
          <div
            className="px-8 py-4 flex items-center gap-3 border-t border-white/10"
            style={{ background: "rgba(0,0,0,0.2)" }}
          >
            <Code2 size={13} style={{ color: "#D97706" }} className="shrink-0" />
            <p className="text-xs text-white/40 leading-relaxed">
              This portfolio was designed and built using{" "}
              <span style={{ color: "#D97706" }} className="font-semibold">Claude Code</span>
              {" "}— a direct demonstration of AI-augmented development workflow in practice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
