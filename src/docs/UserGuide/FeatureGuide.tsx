import DocPage from "../../components/DocPage";

export default function FeatureGuide() {
  return (
    <DocPage
      title="Smara CLI Feature Guide"
      description="Generated guide for Smara CLI v1.20.4 based on the latest source-code feature scan."
    >
      <p className="text-sm text-smara-muted mb-4">
        Last updated: <strong>2026-05-17</strong>. This page summarizes the current Smara CLI capabilities and the recommended workflows for day-to-day agent usage.
      </p>

      <h2 className="text-lg font-semibold text-smara-text mt-6 mb-2">Core Usage</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`smara
smara doctor
go run .`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Main Capabilities</h2>
      <ul className="list-disc list-inside text-sm text-smara-muted mb-4 space-y-1">
        <li>Project and file operations: read, edit, search, build, test, lint, and release.</li>
        <li>Skill automation for reusable workflows such as docs generation, deploy, backup, monitoring, and GitHub releases.</li>
        <li>VPS/SSH operations: remote command execution, file inspection, upload/download, service checks, and deployment tasks.</li>
        <li>Codebase intelligence: dependency analysis, call graph outlines, graphify knowledge graph, symbol lookup, and source-based feature detection.</li>
        <li>Document and image understanding: PDF/DOCX/text extraction, OCR/metadata analysis, clipboard image handling, and image generation/editing.</li>
        <li>Release workflows: version bump, release notes, cross-compile assets, checksum generation, and GitHub Release uploads.</li>
      </ul>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Useful Prompts</h2>
      <pre className="bg-smara-card border border-white/5 rounded-lg p-4 overflow-x-auto text-sm text-smara-text font-mono">
        <code>{`analisis project ini dan jelaskan struktur foldernya
buatkan dokumentasi fitur terbaru dari source code
cek server vps dan tampilkan status service
buatkan skill untuk build, commit, dan push release
update docs-site sesuai versi terbaru
jalankan github release agent`}</code>
      </pre>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Recommended Documentation Workflow</h2>
      <ol className="list-decimal list-inside text-sm text-smara-muted mb-4 space-y-1">
        <li>Pull source code terbaru.</li>
        <li>Run the Smara docs generation skill or ask Smara to scan the codebase.</li>
        <li>Update docs-site pages and navigation when new user-facing features are detected.</li>
        <li>Build docs-site with <code className="text-smara-green">npm run build</code>.</li>
        <li>Commit and push the documentation changes.</li>
      </ol>

      <h2 className="text-lg font-semibold text-smara-text mt-8 mb-2">Detected Highlights in v1.20.4</h2>
      <ul className="list-disc list-inside text-sm text-smara-muted mb-4 space-y-1">
        <li>Registry skill for GitHub release cross-compiled asset upload.</li>
        <li>Docs generation agent produced a Markdown feature guide at <code className="text-smara-green">src/content/guides/smara-cli-feature-guide.md</code>.</li>
        <li>Docs-site build validation passed after generation.</li>
      </ul>
    </DocPage>
  );
}
