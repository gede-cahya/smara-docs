import { motion } from "framer-motion";
import { Terminal, Copy, Check, Sparkles } from "lucide-react";
import { useState } from "react";

const installCmds = [
  { label: "Linux / macOS", cmd: "curl -fsSL https://raw.githubusercontent.com/gede-cahya/Smara-CLI/main/install.sh | bash" },
  { label: "Windows (PowerShell)", cmd: "irm https://raw.githubusercontent.com/gede-cahya/Smara-CLI/main/install.ps1 | iex" },
  { label: "Go install", cmd: "go install github.com/gede-cahya/Smara-CLI@latest" },
];

function InstallBox({ label, cmd }: { label: string; cmd: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-lg bg-smara-card border border-white/5 px-4 py-3 flex items-center gap-3 group hover:border-smara-green/20 transition-colors"
    >
      <span className="text-xs text-smara-muted shrink-0 w-36">{label}</span>
      <code className="text-sm text-smara-text font-mono truncate flex-1">{cmd}</code>
      <button
        onClick={onCopy}
        className="shrink-0 p-1.5 rounded hover:bg-white/5 text-smara-muted hover:text-smara-green transition-colors"
      >
        {copied ? <Check size={14} className="text-smara-green" /> : <Copy size={14} />}
      </button>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-smara-bg/50 to-smara-bg pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-smara-green/10 border border-smara-green/20 text-sm text-smara-green mb-8"
        >
          <Sparkles size={14} />
          v1.20.9 — Web Observability: Token, Duration, Prompt & Cost Metadata
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-gradient">Smara CLI</span>
          <br />
          <span className="text-smara-text">Autonomous Multi-Agent Terminal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-smara-muted max-w-2xl mx-auto mb-10"
        >
          Team memory + MCP orchestration + built-in skills.
          The terminal that remembers, plans, and acts on your behalf.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#features"
            className="px-6 py-3 rounded-lg bg-smara-green text-smara-bg font-semibold hover:bg-smara-green2 transition-colors"
          >
            Explore Features
          </a>
          <a
            href="https://github.com/gede-cahya/Smara-CLI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/10 text-smara-text hover:border-smara-green/30 hover:text-smara-green transition-colors"
          >
            View on GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-2xl mx-auto space-y-3"
        >
          <div className="flex items-center gap-2 text-sm text-smara-muted mb-2">
            <Terminal size={16} className="text-smara-green" />
            <span>One-line install</span>
          </div>
          {installCmds.map((c) => (
            <InstallBox key={c.label} label={c.label} cmd={c.cmd} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
