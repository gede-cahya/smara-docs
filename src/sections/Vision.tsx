import { motion } from "framer-motion";
import { Brain, Network, Shield, Zap } from "lucide-react";
import GlowCard from "../components/GlowCard";

const pillars = [
  {
    icon: Brain,
    title: "Persistent Memory",
    desc: "Team-wide memory that persists across sessions. Shared context, decisions, and conventions — never lost.",
  },
  {
    icon: Network,
    title: "MCP Orchestration",
    desc: "Auto-discover and connect MCP servers — both local and remote. OpenCode, Figma, Blender, and more.",
  },
  {
    icon: Zap,
    title: "Autonomous Agents",
    desc: "Agents that plan, execute, and iterate. Three modes: Ask, Rush, and Plan — for every workflow.",
  },
  {
    icon: Shield,
    title: "Safety First",
    desc: "Audit trail, session rollback, and execution confirmation. Every action is tracked and reversible.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Vision Behind <span className="text-gradient">Smara</span>
          </h2>
          <p className="text-lg text-smara-muted max-w-2xl mx-auto">
            <span className="text-smara-green font-semibold">स्मृति (Smṛti)</span> — Sanskrit for
            "memory, recollection, that which is remembered."
          </p>
          <p className="text-smara-muted mt-4 max-w-2xl mx-auto">
            Smara CLI is built on a simple belief: an AI agent is only as good as what it
            remembers. We combine persistent team memory, MCP tool orchestration, and
            autonomous agent loops to create a terminal that truly understands your
            codebase, your team, and your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <GlowCard key={p.title} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-smara-green/10 text-smara-green shrink-0">
                  <p.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-smara-text mb-1">{p.title}</h3>
                  <p className="text-sm text-smara-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
