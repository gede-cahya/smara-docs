import DocPage from "../../components/DocPage";

export default function BrowserSubagent() {
  return (
    <DocPage
      title="Browser Subagent Roadmap"
      description="Roadmap for natural-language browser automation, E2E testing, visual checking, exploratory testing, screenshots, and Markdown reports."
    >
      <div className="mb-6 rounded-xl border border-smara-green/20 bg-smara-green/5 p-4">
        <p className="text-sm text-smara-muted mb-3">
          Browser Subagent lets Smara open local or remote web apps, interact with UI elements,
          capture screenshots, and export a Markdown report from natural-language prompts.
        </p>
        <a
          href="/roadmap-browser-subagent.md"
          download
          className="inline-flex items-center rounded-lg bg-smara-green px-4 py-2 text-sm font-semibold text-smara-bg hover:bg-lime-300 transition-colors"
        >
          Download roadmap Markdown
        </a>
      </div>

      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">Target Use Cases</h2>
      <ul className="list-disc list-inside text-sm text-smara-muted mb-4 space-y-1">
        <li>E2E login simulation and dashboard screenshot capture.</li>
        <li>Responsive UI checking for components like navbar on mobile viewport.</li>
        <li>Exploratory testing for checkout/form validation and error states.</li>
        <li>Automatic PNG screenshots and downloadable <code className="text-smara-green">report.md</code>.</li>
      </ul>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Prompt Examples</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`Gunakan browser subagent untuk membuka http://localhost:3000.
Tolong lakukan simulasi login dengan memasukkan username 'admin'
dan password 'password123'. Setelah berhasil masuk ke halaman dashboard,
ambil screenshot dan simpan hasilnya.`}</code>
      </pre>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono mt-3">
        <code>{`Buka http://localhost:5173 di browser.
Tolong periksa apakah tata letak navbar sudah responsif di ukuran layar mobile.
Ambil screenshot pada komponen navbar tersebut agar saya bisa memvalidasi tampilannya.`}</code>
      </pre>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono mt-3">
        <code>{`Tolong navigasikan browser ke halaman checkout di http://localhost:8000.
Cobalah klik tombol 'Bayar' tanpa mengisi form data diri.
Periksa apakah peringatan error merah muncul di layar,
lalu ambil screenshot dari pesan error tersebut.`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Milestones</h2>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-smara-text">
              <th className="text-left py-2 pr-4">Priority</th>
              <th className="text-left py-2 pr-4">Milestone</th>
              <th className="text-left py-2">Output</th>
            </tr>
          </thead>
          <tbody className="text-smara-muted">
            <tr className="border-b border-white/5"><td className="py-2 pr-4">P0</td><td className="py-2 pr-4">MVP Screenshot</td><td className="py-2">URL check, screenshot, report.md</td></tr>
            <tr className="border-b border-white/5"><td className="py-2 pr-4">P1</td><td className="py-2 pr-4">Login E2E</td><td className="py-2">Fill, click, wait, dashboard screenshot</td></tr>
            <tr className="border-b border-white/5"><td className="py-2 pr-4">P1</td><td className="py-2 pr-4">Visual Checking</td><td className="py-2">Mobile viewport, navbar screenshot, overflow check</td></tr>
            <tr className="border-b border-white/5"><td className="py-2 pr-4">P2</td><td className="py-2 pr-4">Exploratory Testing</td><td className="py-2">Form validation, error screenshot, console/network capture</td></tr>
            <tr className="border-b border-white/5"><td className="py-2 pr-4">P2</td><td className="py-2 pr-4">CLI + Discord Integration</td><td className="py-2">smara browser command and Discord attachments</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Artifact Structure</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`.smara/artifacts/browser-runs/<timestamp>/
├── screenshot-home.png
├── dashboard.png
├── visual-check.json
├── run.json
└── report.md`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">CLI Proposal</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara browser run "Buka http://localhost:3000 dan ambil screenshot"
smara browser run --url http://localhost:3000 --screenshot
smara browser e2e --spec browser-task.md`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Discord Behavior</h2>
      <p className="text-sm text-smara-muted mb-3">
        When a Discord prompt contains keywords like <code className="text-smara-green">buka browser</code>,
        <code className="text-smara-green"> gunakan browser subagent</code>, or
        <code className="text-smara-green"> ambil screenshot</code>, Smara routes the request to the Browser Subagent,
        sends PNG screenshots as attachments, and includes the generated Markdown report.
      </p>
      <blockquote className="border-l-2 border-smara-green pl-4 text-sm text-smara-muted">
        Note: when running through Discord/VPS, localhost points to the machine where the bot runs, not the user's laptop.
      </blockquote>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Risks and Rollback</h2>
      <ul className="list-disc list-inside text-sm text-smara-muted mb-4 space-y-1">
        <li>Localhost ambiguity: show a warning and support tunnel/public URLs.</li>
        <li>Selector accuracy: fallback to role, label, placeholder, text, and CSS heuristics.</li>
        <li>Destructive actions: use safe mode, domain allowlist, and confirmation for sensitive actions.</li>
        <li>Credential exposure: mask secrets in logs and reports.</li>
      </ul>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`SMARA_BROWSER_SUBAGENT=false`}</code>
      </pre>
    </DocPage>
  );
}
