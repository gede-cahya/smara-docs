import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronRight,
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
  Server,
  Menu,
  X,
} from "lucide-react";

const sections = [
  {
    title: "Getting Started",
    icon: Rocket,
    items: [
      { label: "Installation", path: "/docs/getting-started/installation" },
      { label: "Quickstart", path: "/docs/getting-started/quickstart" },
    ],
  },
  {
    title: "User Guide",
    icon: BookOpen,
    items: [
      { label: "Configuration", path: "/docs/user-guide/configuration" },
      { label: "MCP Integration", path: "/docs/user-guide/mcp" },
      { label: "Skills System", path: "/docs/user-guide/skills" },
      { label: "Memory System", path: "/docs/user-guide/memory" },
      { label: "Dashboard", path: "/docs/user-guide/dashboard" },
      { label: "SSH Remote", path: "/docs/user-guide/ssh" },
      { label: "Graphify", path: "/docs/user-guide/graphify" },
      { label: "Workflow Engine", path: "/docs/user-guide/workflow" },
    ],
  },
  {
    title: "Reference",
    icon: Terminal,
    items: [
      { label: "CLI Commands", path: "/docs/reference/cli-commands" },
      { label: "FAQ & Troubleshooting", path: "/docs/reference/faq" },
    ],
  },
];

const iconMap: Record<string, React.ElementType> = {
  Installation: Terminal,
  Quickstart: Rocket,
  Configuration: Server,
  "MCP Integration": Puzzle,
  "Skills System": Brain,
  "Memory System": Brain,
  Dashboard: LayoutDashboard,
  "SSH Remote": Globe,
  Graphify: GitBranch,
  "Workflow Engine": GitBranch,
  "CLI Commands": Command,
  "FAQ & Troubleshooting": HelpCircle,
};

export default function Sidebar() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>([
    "Getting Started",
    "User Guide",
    "Reference",
  ]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const SidebarContent = () => (
    <div className="w-64 shrink-0">
      <div className="px-4 py-6">
        <Link
          to="/docs"
          className="flex items-center gap-2 text-sm font-semibold text-smara-text hover:text-smara-green transition-colors mb-6"
        >
          <BookOpen size={18} />
          Documentation
        </Link>

        <div className="space-y-2">
          {sections.map((section) => {
            const isOpen = openSections.includes(section.title);
            const Icon = section.icon;
            return (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-smara-muted hover:text-smara-text transition-colors"
                >
                  <Icon size={14} />
                  <span className="flex-1 text-left">{section.title}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <ChevronRight size={14} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 space-y-0.5 border-l border-white/5 pl-3">
                        {section.items.map((item) => {
                          const isActive = location.pathname === item.path;
                          const ItemIcon = iconMap[item.label] || ChevronRight;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors ${
                                isActive
                                  ? "text-smara-green bg-smara-green/10 border-l-2 border-smara-green -ml-3.5 pl-4"
                                  : "text-smara-muted hover:text-smara-text hover:bg-white/5"
                              }`}
                            >
                              <ItemIcon size={14} />
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-smara-green text-smara-bg flex items-center justify-center shadow-lg"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop sidebar */}
      <div className="hidden lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-white/5">
        <SidebarContent />
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-72 bg-smara-bg border-r border-white/5 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <SidebarContent />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
