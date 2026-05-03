import DocPage from "../../components/DocPage";

export default function Quickstart() {
  return (
    <DocPage
      title="Quickstart"
      description="Get your first autonomous agent session running in under 5 minutes."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">1. Login to an LLM Provider</h2>
      <p className="text-sm text-smara-muted mb-3">
        Smara supports multiple providers. Start by logging in to your preferred one:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>smara login</code>
      </pre>
      <p className="text-sm text-smara-muted mt-2">
        Choose from OpenAI, Anthropic, Gemini, OpenRouter, or Ollama (local). Your API key is stored securely in the system keychain.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">2. Select a Model</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>smara provider select</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">3. Start Your First Session</h2>
      <p className="text-sm text-smara-muted mb-3">
        Launch Smara in <strong>Ask</strong> mode for a safe, interactive first experience:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>smara start --mode ask</code>
      </pre>
      <p className="text-sm text-smara-muted mt-2">
        Type a task like "Explain the Go code in this directory" and press Enter. The agent will respond interactively without executing any files.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">4. Try Rush Mode</h2>
      <p className="text-sm text-smara-muted mb-3">
        Once comfortable, switch to <strong>Rush</strong> mode for full autonomy:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>smara start --mode rush</code>
      </pre>
      <p className="text-sm text-smara-muted mt-2">
        The agent will plan, execute tools, and iterate autonomously. All actions are logged and can be reverted.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">5. Explore Built-in Commands</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara guide          # Interactive terminal guide
smara dashboard      # Launch web dashboard
smara memory list    # View team memories
smara skill list     # List installed skills
smara doctor         # Check system health`}</code>
      </pre>
    </DocPage>
  );
}
