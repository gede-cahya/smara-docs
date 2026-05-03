import DocPage from "../../components/DocPage";

export default function Installation() {
  return (
    <DocPage
      title="Installation"
      description="Install Smara CLI on Linux, macOS, or Windows in under a minute."
    >
      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">One-Line Install</h2>

      <h3 className="text-sm font-semibold text-smara-muted mt-4 mb-2">Linux / macOS</h3>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>curl -fsSL https://raw.githubusercontent.com/gede-cahya/Smara-CLI/main/install.sh | bash</code>
      </pre>

      <h3 className="text-sm font-semibold text-smara-muted mt-4 mb-2">Windows (PowerShell)</h3>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>irm https://raw.githubusercontent.com/gede-cahya/Smara-CLI/main/install.ps1 | iex</code>
      </pre>

      <h3 className="text-sm font-semibold text-smara-muted mt-4 mb-2">Go Install</h3>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>go install github.com/gede-cahya/Smara-CLI@latest</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Requirements</h2>
      <ul className="list-disc list-inside text-sm text-smara-muted space-y-1">
        <li>Go 1.23+ (for build from source)</li>
        <li>Node.js 18+ (for dashboard &amp; web UI)</li>
        <li>SQLite (bundled, no extra install needed)</li>
        <li>Git</li>
      </ul>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Desktop App</h2>
      <p className="text-sm text-smara-muted mb-3">
        Smara also ships as a desktop app built with Wails v2:
      </p>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`cd smara-desktop
wails build
# or for development
wails dev`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Verify Installation</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>smara version</code>
      </pre>
    </DocPage>
  );
}
