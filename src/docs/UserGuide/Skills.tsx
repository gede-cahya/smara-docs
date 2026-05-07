import DocPage from "../../components/DocPage";

export default function Skills() {
  return (
    <DocPage
      title="Skills System"
      description="Install, create, and manage reusable agent skills with dependency tracking and analytics."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">What Are Skills?</h2>
      <p className="text-sm text-smara-muted mb-4">
        Skills are reusable instruction sets and tool collections that extend what Smara agents can do. They support hierarchical parent-child relationships, dependency edges, and execution analytics.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Installing Skills</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara skill install react-best-practices
smara skill install vercel-deploy
smara skill install ./my-custom-skill`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Skill Management</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara skill list              # List installed skills
smara skill info <name>       # Show skill details & dependencies
smara skill update <name>       # Update a skill to latest version
smara skill remove <name>       # Uninstall a skill
smara skill search <query>      # Search the skill registry`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Creating a Skill</h2>
      <p className="text-sm text-smara-muted mb-3">
        Skills are defined as JSON files with instructions, tools, and metadata:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`{
  "name": "go-refactor",
  "version": "1.0.0",
  "description": "Refactor Go code using idiomatic patterns",
  "author": "your-name",
  "dependencies": ["go-linter", "go-formatter"],
  "instructions": [
    "Analyze the Go file for anti-patterns",
    "Apply idiomatic Go style (gofmt, golint)",
    "Simplify complex functions into smaller ones",
    "Add missing error handling"
  ],
  "tools": ["file_read", "file_write", "execute_command"],
  "examples": [
    {
      "input": "Refactor this handler to use middleware",
      "output": "Uses chi router with middleware chain"
    }
  ]
}`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Skill Analytics</h2>
      <p className="text-sm text-smara-muted mb-3">
        Every skill execution is tracked in SQLite. View analytics via:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara skill stats              # Top skills & success rates
smara skill timeline <name>      # Execution history
smara skill dashboard          # Interactive skill dashboard (web)`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Parameter Substitution</h2>
      <p className="text-sm text-smara-muted mb-3">
        Skill steps support dynamic parameter substitution using <code className="text-smara-green">__PARAM__name</code> placeholders:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`{
  "name": "go-refactor",
  "steps": [
    { "tool": "file_read", "args": { "path": "__PARAM__file" } },
    { "tool": "agent_ask", "args": { "prompt": "Refactor __PARAM__file using __PARAM__style" } }
  ]
}`}</code>
      </pre>
      <p className="text-sm text-smara-muted mt-2 mb-4">
        Parameters are substituted recursively in strings, maps, and arrays at runtime.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Running Skills from Agents</h2>
      <p className="text-sm text-smara-muted mb-3">
        Agents can invoke skills directly via the built-in <code className="text-smara-green">skill_run</code> tool:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`skill_run(skill_name="react-best-practices")`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Auto-Refinement</h2>
      <p className="text-sm text-smara-muted mb-4">
        Smara analyzes skill execution history and suggests improvements. Enable auto-refinement in your config:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`skills:
  autoload: true
  refinement:
    enabled: true
    min_executions: 5
    suggest_threshold: 0.7`}</code>
      </pre>
    </DocPage>
  );
}
