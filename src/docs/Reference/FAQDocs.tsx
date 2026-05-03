import DocPage from "../../components/DocPage";

export default function FAQDocs() {
  return (
    <DocPage
      title="FAQ & Troubleshooting"
      description="Common questions and solutions for Smara CLI."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">General Questions</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">What is the difference between Ask, Rush, and Plan modes?</h3>
          <p className="text-sm text-smara-muted">
            <strong>Ask</strong> — Interactive Q&amp;A. The agent responds but does not execute tools. Safe for exploration. <br/>
            <strong>Rush</strong> — Full autonomy. The agent plans, executes tools, and iterates without manual approval. <br/>
            <strong>Plan</strong> — Generates a step-by-step plan and waits for your approval before executing each step.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">Which LLM providers are supported?</h3>
          <p className="text-sm text-smara-muted">
            OpenAI (GPT-4o, GPT-4, GPT-3.5), Anthropic Claude (3.5 Sonnet, 3 Opus, 3 Haiku), Google Gemini (1.5 Pro, 1.5 Flash), OpenRouter (aggregated access), and Ollama for local models (Llama, Mistral, etc.).
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">How do I install a skill?</h3>
          <pre className="bg-smara-card border border-white/5 rounded-lg p-3 overflow-x-auto text-xs text-smara-text font-mono mt-2">
            <code>smara skill install react-best-practices</code>
          </pre>
          <p className="text-sm text-smara-muted mt-1">
            Or install from a local path: <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara skill install ./my-skill</code>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">What is team memory and how does it work?</h3>
          <p className="text-sm text-smara-muted">
            Team memory is a shared, persistent SQLite database that stores facts, decisions, conventions, and context. All agents in the same workspace can read and write to it. Memories are scored by recency, importance, and relevance so the most useful context surfaces automatically.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">How do I connect to a remote MCP server?</h3>
          <p className="text-sm text-smara-muted">
            Add the server to your <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara.yaml</code> under <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">mcp.servers</code> with <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">type: remote</code>, specify the host, port, and protocol (sse/websocket). Smara connects automatically on startup.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">Is my data safe?</h3>
          <p className="text-sm text-smara-muted">
            Yes. All memory is stored locally in SQLite on your machine. API keys are stored in your OS keychain. Every agent action is logged in a structured audit trail. You can configure confirmation thresholds for destructive operations.
          </p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-smara-text mt-10 mb-2">Troubleshooting</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">Smara fails to start with "provider not found"</h3>
          <p className="text-sm text-smara-muted">
            Run <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara login</code> to authenticate, then <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara provider select</code> to choose a default model. Check that your API key is valid and has sufficient quota.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">MCP servers are not discovered</h3>
          <p className="text-sm text-smara-muted">
            Ensure <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">mcp.autodiscover: true</code> is set in smara.yaml. Run <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara mcp discover</code> manually. Check that Windsurf/OpenCode configs exist in their standard locations.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">Dashboard does not open</h3>
          <p className="text-sm text-smara-muted">
            Make sure Node.js 18+ is installed. Try running <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara dashboard --no-open</code> and manually open <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">http://localhost:3000</code>. Check the dashboard logs in <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">~/.smara/logs/dashboard.log</code>.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">Skills are not executing</h3>
          <p className="text-sm text-smara-muted">
            Verify the skill is installed: <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara skill list</code>. Check that all dependencies are resolved: <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara skill info &lt;name&gt;</code>. Run in Plan mode to see each step before execution.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">Memory search returns no results</h3>
          <p className="text-sm text-smara-muted">
            Ensure the memory database is initialized: <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara memory list</code>. If empty, your team_id or workspace filter may be too restrictive. Check <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">smara.yaml</code> memory settings.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-smara-text mb-1">SSH connection refused</h3>
          <p className="text-sm text-smara-muted">
            Verify the host is reachable via <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">ping</code>. Confirm the SSH key path and permissions (should be 600). For password auth, ensure the password is set via environment variable, not plaintext in config.
          </p>
        </div>
      </div>
    </DocPage>
  );
}
