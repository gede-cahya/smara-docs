import DocPage from "../../components/DocPage";

export default function MCP() {
  return (
    <DocPage
      title="MCP Integration"
      description="Connect Model Context Protocol servers — local and remote — for extended agent capabilities."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">What is MCP?</h2>
      <p className="text-sm text-smara-muted mb-4">
        Model Context Protocol (MCP) is an open standard that allows AI agents to connect to external tools, databases, and services. Smara CLI auto-discovers and connects to MCP servers in parallel.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Auto-Discovery</h2>
      <p className="text-sm text-smara-muted mb-3">
        Smara automatically detects MCP servers from:
      </p>
      <ul className="list-disc list-inside text-sm text-smara-muted space-y-1 mb-4">
        <li>Windsurf IDE configuration</li>
        <li>OpenCode workspace configs</li>
        <li>Smara-native <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara.yaml</code> entries</li>
      </ul>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>smara mcp discover</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Local MCP Servers</h2>
      <p className="text-sm text-smara-muted mb-3">
        Add a local MCP server to your config:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`mcp:
  servers:
    - name: filesystem
      type: local
      command: npx -y @modelcontextprotocol/server-filesystem /home/user/docs
      enabled: true`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Remote MCP Servers</h2>
      <p className="text-sm text-smara-muted mb-3">
        Connect to remote MCP servers via SSE/WebSocket:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`mcp:
  servers:
    - name: context7
      type: remote
      host: mcp.context7.com
      port: 443
      protocol: sse
      enabled: true
    - name: stitch
      type: remote
      host: stitch.mcp.example.com
      port: 8080
      protocol: websocket
      enabled: true`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Managing Connections</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara mcp list           # List connected MCP servers
smara mcp test <name>    # Test a specific server connection
smara mcp reload         # Reload all MCP configs
smara mcp disconnect <name>  # Disconnect a server`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">OpenCode Integration</h2>
      <p className="text-sm text-smara-muted mb-3">
        Smara CLI is fully compatible with OpenCode's MCP server ecosystem. When OpenCode MCP servers are detected in your workspace, Smara connects to them automatically using the same parallel connection pattern.
      </p>
    </DocPage>
  );
}
