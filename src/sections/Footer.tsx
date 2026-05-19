import { Terminal, Github, Heart } from "lucide-react";

const quickLinks = [
  { label: "Documentation", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "GitHub", href: "https://github.com/gede-cahya/Smara-CLI" },
  { label: "Releases", href: "https://github.com/gede-cahya/Smara-CLI/releases" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-smara-bg py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <a href="#" className="flex items-center gap-2 font-bold text-lg text-gradient mb-2">
            <Terminal size={20} className="text-smara-green" />
            Smara CLI
          </a>
          <p className="text-sm text-smara-muted max-w-xs">
            Autonomous multi-agent terminal with persistent team memory.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          {quickLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-smara-muted hover:text-smara-text transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="text-sm text-smara-muted text-right md:text-right">
          <p className="flex items-center gap-1 justify-start md:justify-end">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> by Gede Cahya
          </p>
          <p className="mt-1">MIT License &middot; v1.20.9</p>
        </div>
      </div>
    </footer>
  );
}
