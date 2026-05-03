import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DocPageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function DocPage({ title, description, children }: DocPageProps) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-smara-text mb-2">{title}</h1>
        {description && (
          <p className="text-smara-muted mb-8">{description}</p>
        )}
        <div className="prose-docs">{children}</div>
      </motion.div>
    </div>
  );
}
