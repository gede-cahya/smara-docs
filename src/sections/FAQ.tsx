import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the difference between Ask, Rush, and Plan modes?",
    a: "Ask mode is interactive — the agent asks before acting. Rush mode is fully autonomous — the agent plans, executes, and iterates on its own. Plan mode generates a step-by-step plan for your approval before any execution.",
  },
  {
    q: "Which LLM providers are supported?",
    a: "Smara CLI supports OpenAI, Anthropic Claude, Google Gemini, and local models via Ollama. You can switch providers per session or configure a default in your smara.yaml.",
  },
  {
    q: "How do I install a skill?",
    a: "Use smara skill install <name> to install from the registry, or smara skill install ./local-path for custom skills. Skills are versioned and can be updated with smara skill update.",
  },
  {
    q: "What is team memory and how does it work?",
    a: "Team memory is a shared, persistent knowledge base stored in SQLite. All agents in a workspace can read and write memories. Facts are scored by importance and freshness so the most relevant context surfaces first.",
  },
  {
    q: "How do I connect to a remote MCP server?",
    a: "Add the server to your smara.yaml under mcp.servers with type: remote, host, and port. Smara will auto-connect on startup using the same parallel connection logic as local servers.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. All memory is local to your machine (SQLite). Remote MCP connections use your own credentials. Every action is logged in the audit trail, and you can configure confirmation thresholds for destructive operations.",
  },
  {
    q: "Can I use Smara CLI on CI/CD or headless servers?",
    a: "Absolutely. Smara CLI is designed for terminal use and works great in SSH sessions, CI pipelines, and headless environments. The web dashboard is optional.",
  },
  {
    q: "How do I update Smara CLI?",
    a: "Run smara update or reinstall via the same one-liner from the website. Updates are checked automatically and changelog is shown before applying.",
  },
  {
    q: "Is there a desktop application?",
    a: "Yes — smara-desktop is a Wails-based desktop wrapper with the same engine, providing a native window experience alongside the terminal CLI.",
  },
  {
    q: "What platforms are supported?",
    a: "Linux, macOS, and Windows (via WSL or native PowerShell). The core CLI is written in Go for maximum portability and speed.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl bg-smara-card border border-white/5 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-sm font-medium text-smara-text pr-4">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-smara-muted"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-4 text-sm text-smara-muted leading-relaxed border-t border-white/5 pt-3">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently <span className="text-gradient">Asked</span>
          </h2>
          <p className="text-smara-muted">
            Common questions about using, configuring, and extending Smara CLI.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
