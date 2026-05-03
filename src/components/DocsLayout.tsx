import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

export default function DocsLayout() {
  return (
    <div className="min-h-screen bg-smara-bg text-smara-text pt-16">
      <div className="max-w-7xl mx-auto flex">
        <Sidebar />
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 min-w-0 px-6 py-10 lg:px-12"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
