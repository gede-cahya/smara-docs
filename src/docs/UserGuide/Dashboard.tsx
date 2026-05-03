import DocPage from "../../components/DocPage";

export default function Dashboard() {
  return (
    <DocPage
      title="Dashboard"
      description="Web-based monitoring dashboard for agents, memory, skills, and system health."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">Launching the Dashboard</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>smara dashboard</code>
      </pre>
      <p className="text-sm text-smara-muted mt-2">
        This starts a local Vite + React development server and opens the dashboard in your default browser.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Dashboard Panels</h2>
      <div className="space-y-3 text-sm text-smara-muted">
        <div className="flex items-start gap-2">
          <span className="text-smara-green mt-0.5">●</span>
          <span>
            <strong className="text-smara-text">Agent Monitor</strong> — Real-time status of active agents, current phase, and iteration count.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-smara-green mt-0.5">●</span>
          <span>
            <strong className="text-smara-text">Memory Explorer</strong> — Browse, search, and manage team memories with filtering by workspace and recency.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-smara-green mt-0.5">●</span>
          <span>
            <strong className="text-smara-text">Skill Analytics</strong> — Top skills, struggling skills, execution timeline, and success rate charts.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-smara-green mt-0.5">●</span>
          <span>
            <strong className="text-smara-text">MCP Status</strong> — Connected MCP servers with health indicators and tool availability.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-smara-green mt-0.5">●</span>
          <span>
            <strong className="text-smara-text">Audit Log</strong> — Filterable, chronological view of all agent actions with revert buttons.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-smara-green mt-0.5">●</span>
          <span>
            <strong className="text-smara-text">System Health</strong> — LLM provider latency, token usage, and resource consumption.
          </span>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Configuration</h2>
      <p className="text-sm text-smara-muted mb-3">
        Customize dashboard behavior in <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara.yaml</code>:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`dashboard:
  port: 3000
  host: 127.0.0.1
  auto_open: true
  panels:
    - agent_monitor
    - memory_explorer
    - skill_analytics
    - mcp_status
    - audit_log
    - system_health`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Headless Mode</h2>
      <p className="text-sm text-smara-muted mb-3">
        Run the dashboard in the background without opening a browser:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>smara dashboard --no-open</code>
      </pre>
    </DocPage>
  );
}
