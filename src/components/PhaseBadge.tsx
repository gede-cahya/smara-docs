import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phases = [
  { label: "Thinking", color: "#84cc16" },
  { label: "Generating", color: "#bef264" },
  { label: "Acting", color: "#65a30d" },
];

export default function PhaseBadge() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhase((p) => (p + 1) % phases.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const current = phases[phase];

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-smara-green/10 border border-smara-green/20 text-xs font-medium text-smara-green">
      <span
        className="w-2 h-2 rounded-full animate-pulse"
        style={{ backgroundColor: current.color }}
      />
      <AnimatePresence mode="wait">
        <motion.span
          key={current.label}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3 }}
        >
          {current.label}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
