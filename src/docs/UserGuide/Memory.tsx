import DocPage from "../../components/DocPage";

export default function Memory() {
  return (
    <DocPage
      title="Memory System"
      description="Persistent team memory with hybrid search, versioning, and temporal scoring."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">Overview</h2>
      <p className="text-sm text-smara-muted mb-4">
        Smara's memory system is inspired by the Sanskrit word <em>Smṛti</em> (स्मृति) — "that which is remembered." It stores team-wide knowledge in SQLite with FTS5 full-text search, versioning, and temporal scoring so the most relevant and recent facts surface first.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Memory Commands</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara memory list              # List all memories
smara memory search <query>    # Search memories with FTS5
smara memory add <text>        # Add a new memory manually
smara memory delete <id>       # Delete a memory by ID
smara memory export <path>     # Export memories to JSON
smara memory import <path>     # Import memories from JSON`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Memory Scoring</h2>
      <p className="text-sm text-smara-muted mb-3">
        Each memory has a composite score based on:
      </p>
      <ul className="list-disc list-inside text-sm text-smara-muted space-y-1 mb-4">
        <li><strong>Recency</strong> — newer memories rank higher</li>
        <li><strong>Importance</strong> — user-flagged or frequently accessed memories boost</li>
        <li><strong>Relevance</strong> — semantic similarity to current context</li>
        <li><strong>Source</strong> — memories from successful executions score higher</li>
      </ul>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Team vs Private</h2>
      <p className="text-sm text-smara-muted mb-3">
        Memories can be team-visible or private. Use the <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">visibility</code> field:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`memory:
  team_id: engineering
  visibility: team        # or "private" for personal-only memories`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Workspace Scoping</h2>
      <p className="text-sm text-smara-muted mb-4">
        Memories are scoped to your current workspace (Git repo or project directory). Switch workspaces and Smara automatically loads the relevant memory context.
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara workspace list           # List workspaces
smara workspace switch <name>    # Switch workspace context
smara workspace create <name>    # Create new isolated workspace`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">LLM Context Injection</h2>
      <p className="text-sm text-smara-muted mb-4">
        Before each agent turn, Smara queries the memory database and injects the top-N relevant memories into the system prompt. This happens transparently — you don't need to manually copy-paste context.
      </p>
    </DocPage>
  );
}
