import { motion } from "framer-motion";
import {
  Bot,
  Layers,
  TerminalSquare,
  Workflow,
  Server,
  Puzzle,
  Globe,
  Share2,
  LayoutDashboard,
  Code2,
  Bell,
  Lock,
  Search,
  Rocket,
  Cpu,
  BrainCircuit,
  FileText,
  GitBranch,
  MessageSquare,
  Save,
  Zap,
  Repeat,
  FolderTree,
  ShieldCheck,
} from "lucide-react";
import GlowCard from "../components/GlowCard";

const features = [
  { icon: Bot, title: "Multi-Agent", desc: "Orchestrate multiple AI agents simultaneously for complex workflows." },
  { icon: Layers, title: "3 Modes", desc: "Ask, Rush, and Plan — choose the right level of autonomy for any task." },
  { icon: TerminalSquare, title: "Crush TUI", desc: "Rich terminal interface with progress tracking, syntax highlighting, and live updates." },
  { icon: Search, title: "MCP Auto-Discovery", desc: "Automatically detects and connects to local MCP servers." },
  { icon: Server, title: "Remote MCP", desc: "Connect to remote MCP servers securely — OpenCode, Stitch, and beyond." },
  { icon: Puzzle, title: "Skill Ecosystem v3", desc: "Install, manage, and share reusable agent skills from the community." },
  { icon: Globe, title: "SSH Remote", desc: "Execute commands and manage agents on remote machines via SSH." },
  { icon: Share2, title: "Graphify", desc: "Visualize code relationships, dependencies, and architecture." },
  { icon: LayoutDashboard, title: "Dashboard", desc: "Built-in web dashboard for monitoring agents, memory, and sessions." },
  { icon: Code2, title: "LSP Integration", desc: "Language Server Protocol support for intelligent code analysis." },
  { icon: Bell, title: "Nudge System", desc: "Smart notifications and prompts to keep agents on track." },
  { icon: Lock, title: "Safety & Audit", desc: "Full audit trails, session rollback, and execution confirmation gates." },
  { icon: BrainCircuit, title: "Memory Scoring", desc: "Temporal scoring for memories — recent and important facts surface first." },
  { icon: Save, title: "Persistent Storage", desc: "SQLite-backed team memory that survives restarts and reboots." },
  { icon: FolderTree, title: "Workspace Aware", desc: "Contextual memory scoped to your current workspace and project." },
  { icon: Cpu, title: "Provider Agnostic", desc: "Works with OpenAI, Anthropic, Gemini, and local models via Ollama." },
  { icon: Rocket, title: "Auto-Execute", desc: "Agents can run, test, and iterate code without manual intervention." },
  { icon: Repeat, title: "Session Resume", desc: "Pick up exactly where you left off — sessions are fully resumable." },
  { icon: GitBranch, title: "Git Integration", desc: "Smart commit messages, branch suggestions, and diff analysis." },
  { icon: MessageSquare, title: "Context7 Docs", desc: "Inject live documentation context from Context7 MCP server." },
  { icon: FileText, title: "PRD Support", desc: "Plan and execute based on Product Requirement Documents." },
  { icon: ShieldCheck, title: "Autonomy Controls", desc: "Fine-grained safety settings: allowlist, denylist, and confirmation thresholds." },
  { icon: Zap, title: "Fast Startup", desc: "Sub-second initialization — no heavy containers or lengthy setup." },
  { icon: Workflow, title: "Workflow Engine", desc: "Define reusable agent workflows with built-in branching and retries." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-smara-bg via-smara-bg2 to-smara-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You <span className="text-gradient">Need</span>
          </h2>
          <p className="text-smara-muted max-w-xl mx-auto">
            25+ built-in features designed to make AI agents truly autonomous,
            safe, and productive in real-world development workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <GlowCard key={f.title} delay={i * 0.05}>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-smara-green/10 text-smara-green shrink-0 mt-0.5">
                  <f.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-smara-text text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-smara-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
