import DocPage from "../../components/DocPage";

export default function Graphify() {
  return (
    <DocPage
      title="Graphify"
      description="Parse codebases into knowledge graphs for natural language querying and context injection."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">Overview</h2>
      <p className="text-sm text-smara-muted mb-4">
        Graphify parses Go, TypeScript, Python, and Rust codebases into a structured knowledge graph stored in SQLite. Agents can query the graph in natural language and receive relevant code context automatically injected into their system prompts.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Building a Knowledge Graph</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara graphify init           # Initialize graph database
smara graphify build          # Parse current workspace into graph
smara graphify build ./src    # Parse specific directory
smara graphify rebuild        # Rebuild from scratch`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Querying the Graph</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara graphify query "functions that handle HTTP errors"
smara graphify query "types related to user authentication"
smara graphify query "interfaces implemented by the storage layer"`}</code>
      </pre>
      <p className="text-sm text-smara-muted mt-2">
        Queries use a hybrid of full-text search and graph traversal. Results include the relevant code snippets, file paths, and relationship chains.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Agent Context Injection</h2>
      <p className="text-sm text-smara-muted mb-3">
        Enable automatic graph context injection in your config:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`graphify:
  enabled: true
  auto_build: true
  context_injection:
    enabled: true
    max_nodes: 15
    trigger_keywords:
      - "refactor"
      - "explain"
      - "where is"
      - "how does"`}</code>
      </pre>
      <p className="text-sm text-smara-muted mt-2">
        When an agent processes a prompt containing trigger keywords, Smara automatically queries the graph and injects relevant nodes into the system prompt.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Export Formats</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara graphify export json      # JSON graph representation
smara graphify export svg       # Visual dependency graph
smara graphify export graphml   # Import into Gephi/yEd
smara graphify export neo4j     # Bulk import to Neo4j`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Supported Languages</h2>
      <ul className="list-disc list-inside text-sm text-smara-muted space-y-1">
        <li>Go (via go/parser + go/ast)</li>
        <li>TypeScript / JavaScript (via tree-sitter)</li>
        <li>Python (via tree-sitter)</li>
        <li>Rust (via tree-sitter)</li>
      </ul>
    </DocPage>
  );
}
