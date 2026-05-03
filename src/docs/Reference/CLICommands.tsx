import DocPage from "../../components/DocPage";

function CommandTable({ title, commands }: { title: string; commands: [string, string][] }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-3">{title}</h2>
      <div className="border border-white/5 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-smara-card border-b border-white/5">
              <th className="text-left px-4 py-2.5 text-smara-muted font-medium w-1/3">Command</th>
              <th className="text-left px-4 py-2.5 text-smara-muted font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {commands.map(([cmd, desc]) => (
              <tr key={cmd} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                <td className="px-4 py-2.5 font-mono text-smara-green text-xs">{cmd}</td>
                <td className="px-4 py-2.5 text-smara-muted">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CLICommands() {
  return (
    <DocPage
      title="CLI Commands"
      description="Complete reference of all Smara CLI commands and flags."
    >
      <CommandTable
        title="Core"
        commands={[
          ["smara start", "Start an agent session (ask/rush/plan mode)"],
          ["smara guide", "Launch interactive terminal guide"],
          ["smara version", "Show version information"],
          ["smara update", "Update Smara CLI to latest version"],
          ["smara doctor", "Check system health and dependencies"],
        ]}
      />

      <CommandTable
        title="Authentication"
        commands={[
          ["smara login", "Authenticate with an LLM provider"],
          ["smara logout", "Remove stored credentials"],
          ["smara provider list", "List configured providers"],
          ["smara provider select", "Set default provider and model"],
        ]}
      />

      <CommandTable
        title="MCP"
        commands={[
          ["smara mcp discover", "Auto-discover MCP servers"],
          ["smara mcp list", "List connected MCP servers"],
          ["smara mcp test <name>", "Test a specific MCP connection"],
          ["smara mcp reload", "Reload all MCP configurations"],
          ["smara mcp disconnect <name>", "Disconnect a MCP server"],
        ]}
      />

      <CommandTable
        title="Skills"
        commands={[
          ["smara skill install <name>", "Install a skill from registry or path"],
          ["smara skill list", "List installed skills"],
          ["smara skill info <name>", "Show skill details and dependencies"],
          ["smara skill update <name>", "Update skill to latest version"],
          ["smara skill remove <name>", "Uninstall a skill"],
          ["smara skill search <query>", "Search skill registry"],
          ["smara skill stats", "Show skill analytics dashboard"],
          ["smara skill dashboard", "Open interactive skill dashboard"],
        ]}
      />

      <CommandTable
        title="Memory"
        commands={[
          ["smara memory list", "List all team memories"],
          ["smara memory search <query>", "Search memories with FTS5"],
          ["smara memory add <text>", "Manually add a memory"],
          ["smara memory delete <id>", "Delete a memory by ID"],
          ["smara memory export <path>", "Export memories to JSON"],
          ["smara memory import <path>", "Import memories from JSON"],
        ]}
      />

      <CommandTable
        title="Workspace"
        commands={[
          ["smara workspace list", "List available workspaces"],
          ["smara workspace switch <name>", "Switch to a workspace"],
          ["smara workspace create <name>", "Create a new workspace"],
          ["smara workspace delete <name>", "Delete a workspace"],
        ]}
      />

      <CommandTable
        title="SSH"
        commands={[
          ["smara ssh exec <host> -- <cmd>", "Execute command on remote host"],
          ["smara ssh shell <host>", "Open interactive shell"],
          ["smara ssh upload <host> <src> <dst>", "Upload file/directory"],
          ["smara ssh download <host> <src> <dst>", "Download file/directory"],
          ["smara ssh sync <host> <src> <dst>", "Sync local and remote directories"],
        ]}
      />

      <CommandTable
        title="Graphify"
        commands={[
          ["smara graphify init", "Initialize graph database"],
          ["smara graphify build [dir]", "Parse codebase into knowledge graph"],
          ["smara graphify rebuild", "Rebuild graph from scratch"],
          ["smara graphify query <text>", "Natural language graph query"],
          ["smara graphify export <format>", "Export graph (json/svg/graphml/neo4j)"],
        ]}
      />

      <CommandTable
        title="Dashboard & Web"
        commands={[
          ["smara dashboard", "Launch web dashboard"],
          ["smara dashboard --no-open", "Run dashboard in background"],
          ["smara web", "Start web API server"],
          ["smara serve", "Start Smara agent server"],
        ]}
      />

      <CommandTable
        title="Platform Bots"
        commands={[
          ["smara bot telegram", "Start Telegram bot"],
          ["smara bot discord", "Start Discord bot"],
          ["smara bot whatsapp", "Start WhatsApp bot"],
        ]}
      />
    </DocPage>
  );
}
