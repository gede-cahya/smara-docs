import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Vision from "./sections/Vision";
import Features from "./sections/Features";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import DocsLayout from "./components/DocsLayout";
import DocsHome from "./docs/DocsHome";
import Installation from "./docs/GettingStarted/Installation";
import Quickstart from "./docs/GettingStarted/Quickstart";
import Configuration from "./docs/UserGuide/Configuration";
import MCP from "./docs/UserGuide/MCP";
import Skills from "./docs/UserGuide/Skills";
import Memory from "./docs/UserGuide/Memory";
import Dashboard from "./docs/UserGuide/Dashboard";
import SSH from "./docs/UserGuide/SSH";
import Graphify from "./docs/UserGuide/Graphify";
import Workflow from "./docs/UserGuide/Workflow";
import FeatureGuide from "./docs/UserGuide/FeatureGuide";
import BrowserSubagent from "./docs/UserGuide/BrowserSubagent";
import CLICommands from "./docs/Reference/CLICommands";
import FAQDocs from "./docs/Reference/FAQDocs";

function LandingPage() {
  return (
    <div className="min-h-screen bg-smara-bg text-smara-text">
      <Navbar />
      <Hero />
      <Vision />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-smara-bg text-smara-text">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<DocsHome />} />
            <Route path="getting-started/installation" element={<Installation />} />
            <Route path="getting-started/quickstart" element={<Quickstart />} />
            <Route path="user-guide/configuration" element={<Configuration />} />
            <Route path="user-guide/mcp" element={<MCP />} />
            <Route path="user-guide/skills" element={<Skills />} />
            <Route path="user-guide/memory" element={<Memory />} />
            <Route path="user-guide/dashboard" element={<Dashboard />} />
            <Route path="user-guide/ssh" element={<SSH />} />
            <Route path="user-guide/graphify" element={<Graphify />} />
            <Route path="user-guide/workflow" element={<Workflow />} />
            <Route path="user-guide/feature-guide" element={<FeatureGuide />} />
            <Route path="user-guide/browser-subagent" element={<BrowserSubagent />} />
            <Route path="reference/cli-commands" element={<CLICommands />} />
            <Route path="reference/faq" element={<FAQDocs />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
