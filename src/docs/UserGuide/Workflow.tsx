import DocPage from "../../components/DocPage";

export default function Workflow() {
  return (
    <DocPage
      title="Workflow Engine"
      description="Create, run, and manage reusable agent workflows with branching, retries, and visual editing."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">Overview</h2>
      <p className="text-sm text-smara-muted mb-4">
        Smara's workflow engine lets you define multi-step agent processes that can branch, retry, and share state across steps. Workflows can be created via CLI or the visual node editor in the web dashboard.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">CLI Workflow Commands</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara workflow list              # List saved workflows
smara workflow run <name>        # Execute a workflow
smara workflow create <name>     # Create from interactive template
smara workflow delete <name>     # Remove a workflow`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Custom Workflow (Web Dashboard)</h2>
      <p className="text-sm text-smara-muted mb-3">
        The web dashboard provides a visual node editor for building custom workflows:
      </p>
      <ul className="list-disc list-inside text-sm text-smara-muted mb-4 space-y-1">
        <li><strong>Node Types:</strong> Start, Agent, Tool, Condition, Loop, End</li>
        <li><strong>Drag & Drop:</strong> Add and connect nodes visually</li>
        <li><strong>Live Execution:</strong> Run workflows directly from the editor</li>
        <li><strong>State Sharing:</strong> Pass data between nodes via shared state</li>
        <li><strong>Export/Import:</strong> Save workflows as JSON and share them</li>
      </ul>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Workflow JSON Format</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`{
  "name": "code-review-pipeline",
  "description": "Automated code review and fix pipeline",
  "nodes": [
    { "id": "start", "type": "start" },
    { "id": "read", "type": "tool", "tool": "file_read", "args": { "path": "__PARAM__file" } },
    { "id": "review", "type": "agent", "prompt": "Review this code for bugs and style issues" },
    { "id": "fix", "type": "agent", "prompt": "Apply the suggested fixes" },
    { "id": "test", "type": "tool", "tool": "execute_command", "args": { "command": "go test ./..." } },
    { "id": "end", "type": "end" }
  ],
  "edges": [
    { "from": "start", "to": "read" },
    { "from": "read", "to": "review" },
    { "from": "review", "to": "fix" },
    { "from": "fix", "to": "test" },
    { "from": "test", "to": "end" }
  ]
}`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Parameter Substitution</h2>
      <p className="text-sm text-smara-muted mb-3">
        Use <code className="text-smara-green">__PARAM__name</code> placeholders in workflow nodes and skill steps. Values are substituted at runtime from the merged configuration and runtime arguments.
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`# Run a workflow with parameters
smara workflow run code-review-pipeline --file=src/main.go`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Skill Execution in Agents</h2>
      <p className="text-sm text-smara-muted mb-3">
        Agents can run skills directly via the built-in <code className="text-smara-green">skill_run</code> tool:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`skill_run(skill_name="react-best-practices")`}</code>
      </pre>
    </DocPage>
  );
}
