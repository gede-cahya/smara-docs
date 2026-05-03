import DocPage from "../../components/DocPage";

export default function Configuration() {
  return (
    <DocPage
      title="Configuration"
      description="Configure providers, MCP servers, memory, and workspace settings."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">smara.yaml</h2>
      <p className="text-sm text-smara-muted mb-3">
        The main configuration file lives at <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">~/.smara/smara.yaml</code>. Here is a complete example:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`provider:
  default: openai
  openai:
    model: gpt-4o
    api_key: env:OPENAI_API_KEY
  anthropic:
    model: claude-3-5-sonnet-20241022
    api_key: env:ANTHROPIC_API_KEY
  ollama:
    model: llama3.1
    host: http://localhost:11434

mcp:
  autodiscover: true
  servers:
    - name: context7
      type: remote
      host: mcp.context7.com
      port: 443
      enabled: true
    - name: smara-local
      type: local
      command: npx -y @smara/mcp-server
      enabled: true

memory:
  storage: sqlite
  path: ~/.smara/memory.db
  team_id: my-team
  max_context: 10

agent:
  mode: ask
  safety:
    confirm_destructive: true
    max_iterations: 50
  personality:
    verbosity: balanced
    risk_tolerance: cautious

workspace:
  default: ~/projects
  isolation: true`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Environment Variables</h2>
      <p className="text-sm text-smara-muted mb-3">
        You can override any config via environment variables:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`SMARA_PROVIDER_DEFAULT=anthropic
SMARA_AGENT_MODE=rush
SMARA_MCP_AUTODISCOVER=false
SMARA_MEMORY_TEAM_ID=engineering`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Per-Project Config</h2>
      <p className="text-sm text-smara-muted mb-3">
        Place a <code className="bg-smara-card px-1.5 py-0.5 rounded text-xs">.smara.yaml</code> in any project root to override global settings for that workspace:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`agent:
  mode: plan
  safety:
    confirm_destructive: true

memory:
  team_id: frontend-team

skills:
  autoload:
    - react-best-practices
    - vercel-deploy`}</code>
      </pre>
    </DocPage>
  );
}
