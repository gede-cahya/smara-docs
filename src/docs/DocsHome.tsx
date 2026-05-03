import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Rocket,
  BookOpen,
  Terminal,
  Puzzle,
  Brain,
  LayoutDashboard,
  Globe,
  GitBranch,
  Command,
  HelpCircle,
} from "lucide-react";

const quickLinks = [
  { label: "Installation", path: "/docs/getting-started/installation", icon: Rocket, desc: "Get Smara CLI running in minutes" },
  { label: "Quickstart", path: "/docs/getting-started/quickstart", icon: Terminal, desc: "Your first autonomous agent session" },
  { label: "Configuration", path: "/docs/user-guide/configuration", icon: BookOpen, desc: "Set up providers, memory, and defaults" },
  { label: "MCP Integration", path: "/docs/user-guide/mcp", icon: Puzzle, desc: "Connect local & remote MCP servers" },
  { label: "Skills System", path: "/docs/user-guide/skills", icon: Brain, desc: "Install, create, and manage skills" },
  { label: "Memory System", path: "/docs/user-guide/memory", icon: Brain, desc: "Persistent team memory & scoring" },
  { label: "Dashboard", path: "/docs/user-guide/dashboard", icon: LayoutDashboard, desc: "Web-based monitoring & metrics" },
  { label: "SSH Remote", path: "/docs/user-guide/ssh", icon: Globe, desc: "Remote execution & file transfer" },
  { label: "Graphify", path: "/docs/user-guide/graphify", icon: GitBranch, desc: "Codebase knowledge graphs" },
  { label: "CLI Commands", path: "/docs/reference/cli-commands", icon: Command, desc: "Complete command reference" },
  { label: "FAQ", path: "/docs/reference/faq", icon: HelpCircle, desc: "Common questions & troubleshooting" },
];

export default function DocsHome() {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-smara-text mb-2">Smara CLI Documentation</h1>
        <p className="text-smara-muted mb-8">
          Learn how to install, configure, and extend Smara CLI — the autonomous
          multi-agent terminal with persistent team memory.
        </p>

        <h2 className="text-xl font-semibold text-smara-text mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-start gap-3 p-4 rounded-lg bg-smara-card border border-white/5 hover:border-smara-green/30 hover:bg-smara-green/5 transition-all group"
              >
                <div className="p-1.5 rounded-md bg-smara-green/10 text-smara-green shrink-0 group-hover:bg-smara-green/20 transition-colors">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="font-medium text-smara-text text-sm">{link.label}</div>
                  <div className="text-xs text-smara-muted mt-0.5">{link.desc}</div>
                </div>
              </Link>
            );
          })}
        </div>

        <h2 className="text-xl font-semibold text-smara-text mb-4">Key Features</h2>
        <div className="space-y-3 text-sm text-smara-muted">
          <div className="flex items-start gap-2">
            <span className="text-smara-green mt-0.5">●</span>
            <span>
              <strong className="text-smara-text">Multi-Agent System</strong> — Supervisor-Worker architecture for complex task delegation.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-smara-green mt-0.5">●</span>
            <span>
              <strong className="text-smara-text">3 Agent Modes</strong> — Ask (interactive), Rush (autonomous), and Plan (approve before execute).
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-smara-green mt-0.5">●</span>
            <span>
              <strong className="text-smara-text">MCP Auto-Discovery</strong> — Auto-connect local & remote MCP servers from Windsurf, OpenCode, and custom configs.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-smara-green mt-0.5">●</span>
            <span>
              <strong className="text-smara-text">Persistent Memory</strong> — SQLite-backed team memory with temporal scoring. Shared across sessions.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-smara-green mt-0.5">●</span>
            <span>
              <strong className="text-smara-text">Skill Ecosystem v3</strong> — Hierarchical skill trees, dependency graphs, execution analytics, and auto-refinement.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-smara-green mt-0.5">●</span>
            <span>
              <strong className="text-smara-text">Safety & Audit</strong> — Two-step safety (Plan vs Build mode), full audit trails, and auto-revert on failure.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-smara-green mt-0.5">●</span>
            <span>
              <strong className="text-smara-text">Graphify</strong> — Parse Go/TS/Python/Rust codebases into knowledge graphs, query in natural language.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-smara-green mt-0.5">●</span>
            <span>
              <strong className="text-smara-text">Multi-Provider LLM</strong> — OpenAI, Anthropic, Gemini, Ollama (local), and OpenRouter.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
