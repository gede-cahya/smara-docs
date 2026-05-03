import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Docs", href: "/docs" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const isInternalPage = href.startsWith("/");
  if (isInternalPage) {
    return (
      <Link
        to={href}
        onClick={onClick}
        className="text-sm text-smara-muted hover:text-smara-text transition-colors"
      >
        {label}
      </Link>
    );
  }
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm text-smara-muted hover:text-smara-text transition-colors"
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || !isLanding ? "bg-smara-bg/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-gradient">
          <Terminal size={22} className="text-smara-green" />
          Smara CLI
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
          <a
            href="https://github.com/gede-cahya/Smara-CLI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full border border-smara-green/30 text-smara-green text-sm hover:bg-smara-green/10 transition-colors"
          >
            GitHub
          </a>
        </div>

        <button
          className="md:hidden text-smara-text"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-smara-bg/95 backdrop-blur-md border-b border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <NavLink key={l.href} href={l.href} label={l.label} onClick={() => setMobileOpen(false)} />
              ))}
              <a
                href="https://github.com/gede-cahya/Smara-CLI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-smara-green hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
