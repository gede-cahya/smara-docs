---
title: Smara CLI Feature Guide
version: "v1.20.4"
lastUpdated: "2026-05-17"
description: Guide penggunaan Smara CLI yang digenerate dari analisis source code terbaru.
---

# Smara CLI Feature Guide

> Dokumen ini dibuat otomatis dari analisis source code Smara CLI pada **2026-05-17** untuk versi **v1.20.4**.

## Ringkasan

Smara CLI adalah asisten AI lokal/terminal dengan kemampuan mengelola project, membaca dan mengedit file, menjalankan command, mengelola VPS via SSH, membuat skill otomasi, analisis codebase, dokumentasi, image/document analysis, serta workflow release/deploy.

## Cara Menggunakan Smara CLI

### 1. Jalankan Smara

```bash
smara
```

Jika menjalankan dari source:

```bash
go run .
```

### 2. Contoh prompt umum

```text
analisis project ini dan jelaskan struktur foldernya
buatkan dokumentasi fitur terbaru dari source code
cek server vps dan tampilkan status service
buatkan skill untuk build, commit, dan push release
update docs-site sesuai versi terbaru
```

## Fitur Utama

### Manajemen Project & File

- Membaca file/dokumen dan menjelaskan isinya.
- Mengedit file secara terarah.
- Mencari file, string, dependency, dan struktur project.
- Menjalankan command lokal untuk build, test, lint, atau release.

### Skill Automation

Skill adalah workflow tersimpan yang bisa dijalankan ulang. Cocok untuk proses berulang seperti build, deploy, update dokumentasi, backup, monitoring, dan release.

Contoh:

```text
buatkan skill untuk update docs-site, commit, dan push
jalankan skill update-smara-docs-site dengan version v1.2.3
```

### Analisis Codebase

Smara dapat membantu:

- Menganalisis dependency source code.
- Membuat call graph sederhana.
- Membaca simbol/fungsi penting.
- Membuat knowledge graph untuk project Go.
- Menemukan fitur terbaru dari perubahan source code.

Contoh:

```text
analisis code smara dan buatkan guide fitur terbarunya
buat knowledge graph untuk codebase Go ini
cari fungsi yang berhubungan dengan skill_create
```

### VPS / Remote Server

Smara mendukung SSH untuk:

- Melihat file dan folder server.
- Menjalankan command remote.
- Upload/download file.
- Mengecek service, log, deploy, dan konfigurasi.

Contoh:

```text
cek status nginx di vps
lihat log service smara di server
upload build terbaru ke remote
```

### Dokumentasi & Release

Smara bisa membantu menjaga dokumentasi tetap sinkron dengan versi CLI:

- Generate guide dari source code.
- Update docs-site.
- Build dokumentasi.
- Commit dan push ke GitHub.
- Membuat release notes.

## Fitur Terdeteksi dari Analisis Source Code

Total file dianalisis: **20892**  
File Go: **414**  
File TS/JS/TSX/JSX: **18688**

### Kandidat fitur / integrasi penting

- `versions/RELEASE_v1.20.3.md:11:1.` **Attachment dan embed image Discord** — adapter sekarang mengambil gambar dari attachment, embed image, dan thumbnail.
- `versions/RELEASE_v1.20.3.md:15:3.` **Direct image analysis path** — jika prompt user memang meminta analisis gambar, gateway langsung menjalankan tool analisis gambar pada file yang sudah di-download, sehingga jawaban lebih cepat dan tidak bergantung pada reasoning umum.
- `versions/RELEASE_v1.20.3.md:35:-` `internal/agent/analyze_image.go`
- `versions/RELEASE_v1.13.0.md:34:-` **OpenCode Auto-Discovery**: Auto-load MCP servers dari konfigurasi `~/.config/opencode/mcp.json` secara paralel.
- `versions/RELEASE_v1.13.0.md:35:-` **Remote MCP Support**: Koneksi ke MCP server remote via SSE/WebSocket dengan `mcp.NewRemoteClient`.
- `versions/RELEASE_v1.13.0.md:40:-` **Message Selection**: `Ctrl+S` untuk seleksi pesan historis, `Enter/C` untuk copy ke clipboard.
- `versions/RELEASE_v1.13.0.md:41:-` **Clipboard Paste**: `Ctrl+V` untuk paste dari clipboard ke input prompt.
- `versions/RELEASE_v1.13.0.md:52:-` **Config Parsing**: Support konfigurasi `skill_registries` di `config.yaml`.
- `versions/RELEASE_v1.13.0.md:91:skill_registries:` versions/RELEASE_v1.13.0.md:91:skill_registries:
- `versions/RELEASE_v1.19.2.md:15:2.` **Attachment download** — Telegram adapter expose `DownloadAttachment(ctx, fileID) (path, error)` via interface baru `platform.AttachmentDownloader`. File disimpan ke `~/.smara/clip-images/tg-<fileID>.jpg`.
- `versions/RELEASE_v1.19.2.md:17:3.` **Prompt injection di gateway** — sebelum supervisor dipanggil, gateway iterasi `msg.Attachments`, download semua tipe `image`, lalu prefix prompt dengan `[image:/path/to/file.jpg]` token. Plus steering message:
- `versions/RELEASE_v1.19.2.md:18:` > [Sistem: pesan ini menyertakan gambar. Pakai tool analyze_image dengan path tersebut...]
- `versions/RELEASE_v1.19.2.md:20:` Ini bikin agent otomatis panggil `analyze_image` daripada menebak.
- `versions/RELEASE_v1.19.2.md:33:2.` Panggil tool `analyze_image` → dapat metadata (size/dimensi/format) + OCR text via tesseract
- `versions/RELEASE_v1.19.2.md:52:-` **Scheduler** — `smara schedule` menyimpan dan mengelola job lokal terjadwal.
- `versions/RELEASE_v1.19.2.md:68:-` `internal/platform/gateway.go` — download + inject `[image:/path]` token
- `go.mod:7:` github.com/atotto/clipboard v0.1.4
- `README.md:26:-` **🔀 Message Selection & Clipboard**: `Ctrl+S` untuk menyeleksi pesan historis, `Enter/C` untuk copy ke clipboard. `Ctrl+V` untuk paste dari clipboard.
- `README.md:28:-` **🛜 Remote MCP Support**: Koneksi ke MCP server remote via SSE/WebSocket (`mcp.NewRemoteClient`).
- `README.md:41:-` **🖥️ SSH Remote Control**: Kelola VPS/Server langsung dari agen — `ssh_exec`, `ssh_view_file`, `ssh_list_dir` sebagai built-in agent tools.
- `README.md:49:-` **🖼️ Clipboard Image & Vision Tools**: Ctrl+V di TUI ambil gambar dari clipboard sistem (X11/Wayland/macOS/Windows), simpan ke `~/.smara/clip-images/`, dan inject `[image:/path]` ke prompt. Built-in tool `analyze_image` ekstrak metadata + OCR (tesseract); `clip_paste_image` & `clip_copy_image` untuk agent.
- `README.md:56:-` **⏱️ Scheduler & Sharing**: `smara schedule` untuk job lokal terjadwal dan `smara share` untuk export/import artifact berbagi.
- `README.md:176:smara` graphify init ./cmd --name smara-cmd
- `README.md:179:smara` graphify query "auth flow" --name smara-cmd --depth 2
- `README.md:182:smara` graphify path "A" "B" --name smara-cmd
- `README.md:185:smara` graphify explain "NodeID" --name smara-cmd --depth 1
- `README.md:188:smara` graphify export --name smara-cmd --format json # JSON
- `README.md:189:smara` graphify export --name smara-cmd --format svg # SVG
- `README.md:190:smara` graphify export --name smara-cmd --format graphml # GraphML
- `README.md:191:smara` graphify export --name smara-cmd --format neo4j # Neo4j Cypher
- `README.md:194:smara` graphify list
- `README.md:195:smara` graphify delete smara-cmd
- `README.md:334:-` `/mcp` — Lihat daftar tool yang tersedia.
- `README.md:351:-` `smara graphify`: Generate knowledge graph dari codebase Go (init, query, path, explain, export, list, delete).
- `README.md:375:skill_registries:` README.md:375:skill_registries:
- `web/package-lock.json:10:` "dependencies": {
- `web/package-lock.json:51:` "dependencies": {
- `web/package-lock.json:76:` "dependencies": {
- `web/package-lock.json:107:` "dependencies": {
- `web/package-lock.json:124:` "dependencies": {
- `web/package-lock.json:151:` "dependencies": {
- `web/package-lock.json:165:` "dependencies": {
- `web/package-lock.json:223:` "dependencies": {
- `web/package-lock.json:237:` "dependencies": {
- `web/package-lock.json:253:` "dependencies": {
- `web/package-lock.json:269:` "dependencies": {
- `web/package-lock.json:294:` "dependencies": {
- `web/package-lock.json:309:` "dependencies": {
- `web/package-lock.json:328:` "dependencies": {
- `web/package-lock.json:739:` "dependencies": {
- `web/package-lock.json:750:` "dependencies": {
- `web/package-lock.json:778:` "dependencies": {
- `web/package-lock.json:794:` "dependencies": {
- `web/package-lock.json:807:` "dependencies": {
- `web/package-lock.json:831:` "dependencies": {
- `web/package-lock.json:844:` "dependencies": {
- `web/package-lock.json:857:` "dependencies": {
- `web/package-lock.json:881:` "dependencies": {
- `web/package-lock.json:894:` "dependencies": {
- `web/package-lock.json:917:` "dependencies": {
- `web/package-lock.json:987:` "dependencies": {
- `web/package-lock.json:996:` "scheduler": "^0.21.0",
- `web/package-lock.json:1031:` "node_modules/@react-three/fiber/node_modules/scheduler": {
- `web/package-lock.json:1033:` "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.21.0.tgz",
- `web/package-lock.json:1036:` "dependencies": {
- `web/package-lock.json:1465:` "dependencies": {
- `web/package-lock.json:1479:` "dependencies": {
- `web/package-lock.json:1489:` "dependencies": {
- `web/package-lock.json:1500:` "dependencies": {
- `web/package-lock.json:1515:` "dependencies": {
- `web/package-lock.json:1524:` "dependencies": {
- `web/package-lock.json:1539:` "dependencies": {
- `web/package-lock.json:1548:` "dependencies": {
- `web/package-lock.json:1558:` "dependencies": {
- `web/package-lock.json:1579:` "dependencies": {
- `web/package-lock.json:1588:` "dependencies": {
- `web/package-lock.json:1597:` "dependencies": {
- `web/package-lock.json:1624:` "dependencies": {
- `web/package-lock.json:1644:` "dependencies": {
- `web/package-lock.json:1659:` "dependencies": {

### Simbol / fungsi / tipe penting

- `web/src/api.ts:31:export` interface Status {
- `web/src/api.ts:42:export` interface MemoryItem {
- `web/src/api.ts:52:export` interface WorkspaceItem {
- `web/src/api.ts:59:export` interface CategoryItem {
- `web/src/api.ts:67:export` interface MCPInfo {
- `web/src/api.ts:74:export` interface ChatMessage {
- `web/src/api.ts:91:export` interface UploadResponse {
- `web/src/api.ts:127:export` interface AgentSpec {
- `web/src/api.ts:141:export` interface Blueprint {
- `web/src/api.ts:151:export` interface SkillParam {
- `web/src/api.ts:159:export` interface SkillLineageEntry {
- `web/src/api.ts:168:export` interface SkillItem {
- `web/src/api.ts:180:export` interface ModeInfo {
- `web/src/api.ts:187:export` interface GraphInfo {
- `web/src/api.ts:199:export` interface GraphNode {
- `web/src/api.ts:212:export` interface GraphEdge {
- `web/src/api.ts:223:export` interface GraphData {
- `web/src/api.ts:233:export` interface GraphListResponse {
- `web/src/api.ts:237:export` function fetchGraphList(): Promise<GraphListResponse> {
- `web/src/api.ts:241:export` function fetchGraphData(id: string): Promise<GraphData> {
- `web/src/api.ts:245:export` function fetchGraphQuery(id: string, q: string, depth = 2): Promise<{ nodes: GraphNode[]; edges: GraphEdge[] }> {
- `web/src/api.ts:249:export` interface CustomWorkflowTask {
- `web/src/api.ts:257:export` interface MemoryNodeConfig {
- `web/src/api.ts:264:export` interface CustomWorkflowAgent {
- `web/src/api.ts:274:export` interface CustomWorkflowItem {
- `web/src/api.ts:283:export` interface CustomWorkflowSummary {
- `web/src/api.ts:289:export` interface CustomWorkflowListResponse {
- `web/src/api.ts:293:export` interface BundledSkillItem {
- `web/src/api.ts:303:export` interface BundledSkillsResponse {
- `web/src/api.ts:307:export` function fetchBundledSkills(): Promise<BundledSkillsResponse> {
- `web/src/api.ts:311:export` function installBundledSkill(name: string): Promise<{ status: string; name: string }> {
- `web/src/api.ts:318:export` function fetchCustomWorkflowList(): Promise<CustomWorkflowListResponse> {
- `web/src/api.ts:322:export` function fetchCustomWorkflowGet(name: string): Promise<CustomWorkflowItem> {
- `web/src/api.ts:326:export` function saveCustomWorkflow(cw: CustomWorkflowItem): Promise<{ status: string; name: string }> {
- `web/src/api.ts:330:export` function deleteCustomWorkflow(name: string): Promise<{ status: string; name: string }> {
- `web/src/api.ts:334:export` function runCustomWorkflow(name: string, projectDir?: string): Promise<unknown> {
- `web/src/api.ts:341:export` function importCustomWorkflow(name: string, json: string): Promise<{ status: string; name: string }> {
- `web/src/api.ts:348:export` function getCwd(): Promise<{ path: string }> {
- `web/src/api.ts:352:export` interface FSEntry {
- `web/src/api.ts:357:export` function listDir(path: string): Promise<{ path: string; entries: FSEntry[] }> {
- `web/src/components/FolderPicker.tsx:5:interface` FolderPickerProps {
- `versions/RELEASE_v1.19.2.md:15:2.` **Attachment download** — Telegram adapter expose `DownloadAttachment(ctx, fileID) (path, error)` via interface baru `platform.AttachmentDownloader`. File disimpan ke `~/.smara/clip-images/tg-<fileID>.jpg`.
- `versions/RELEASE_v1.17.0.md:60:-` `web/src/api.ts` — extended SkillItem interface with new fields.
- `smara-desktop/workspace_events_test.go:13:type` mockEventCollector struct {
- `smara-desktop/workspace_events_test.go:21:func` TestWorkspaceEventSerialization(t *testing.T) {
- `smara-desktop/workspace_events_test.go:49:func` TestEmitMethods(t *testing.T) {
- `smara-desktop/workspace_events_test.go:80:func` TestTriggerWorkspaceDemo(t *testing.T) {
- `smara-desktop/workspace_events_test.go:95:func` TestWorkspaceEventTypes(t *testing.T) {
- `smara-desktop/workspace_events.go:10:type` WorkspaceEvent struct {
- `web/src/pages/Chat.tsx:299:interface` ChatSession {
- `web/src/pages/SkillDashboard.tsx:5:interface` SkillStat {
- `web/src/pages/SkillDashboard.tsx:11:interface` Analytics {
- `web/src/pages/SkillDashboard.tsx:18:interface` TimelineItem {
- `web/src/pages/SkillTree.tsx:81:interface` ImportOutcome {
- `web/src/pages/MemoryGraph.tsx:16:interface` MemGraphNode {
- `web/src/pages/MemoryGraph.tsx:26:interface` MemGraphEdge {
- `web/src/pages/MemoryGraph.tsx:34:interface` MemGraphData {
- `web/src/pages/MemoryGraph.tsx:39:interface` MemoryLink {
- `web/src/pages/Memory.tsx:9:interface` CategoryConfig {
- `web/src/pages/Dashboard.tsx:6:interface` ModelUsage { provider: string; model: string; requests: number; prompts: number; input_tokens: number; output_tokens: number; total_tokens: number; cost_usd: number }
- `web/src/pages/Dashboard.tsx:7:interface` DailyUsage { date: string; requests: number; prompts: number; input_tokens: number; output_tokens: number; total_tokens: number; cost_usd: number }
- `web/src/pages/Dashboard.tsx:8:interface` SkillUsage { name: string; run_count: number; success_rate: number }
- `web/src/pages/Dashboard.tsx:9:interface` UsageAnalytics {
- `web/src/pages/SkillTree3D.tsx:24:interface` FractalNode3D {
- `web/src/pages/SkillTree3D.tsx:254:interface` NodeProps {
- `web/src/pages/SkillTree3D.tsx:437:interface` SceneProps {
- `web/src/pages/Workflow.tsx:7:interface` WorkflowItem {
- `web/src/pages/skillIcons.ts:56:export` function getSkillIcon(sk: SkillItem | null | undefined, synthetic = false): string {
- `web/src/pages/skillIcons.ts:76:export` function getCategoryIcon(label: string): string {
- `web/src/pages/SkillConstellation.tsx:56:interface` FractalNode {
- `web/src/pages/SkillConstellation.tsx:377:interface` NodeDelta { dx: number; dy: number }
- `web/src/pages/SkillHierarchy.tsx:20:interface` TreeNode {
- `web/src/pages/SkillHierarchy.tsx:111:interface` LaidOutNode extends TreeNode {
- `web/src/pages/SkillHierarchy.tsx:118:interface` Layout {
- `web/src/pages/SkillHierarchy.tsx:183:interface` Props {
- `web/src/pages/SkillHierarchy.tsx:187:interface` NodeDelta { dx: number; dy: number }
- `smara-desktop/frontend/wailsjs/runtime/runtime.js:11:export` function LogPrint(message) {
- `smara-desktop/frontend/wailsjs/runtime/runtime.js:15:export` function LogTrace(message) {
- `smara-desktop/frontend/wailsjs/runtime/runtime.js:19:export` function LogDebug(message) {
- `smara-desktop/frontend/wailsjs/runtime/runtime.js:23:export` function LogInfo(message) {

## Script Development yang Terdeteksi

```json
Root package scripts:

Docs-site package scripts:
{
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview"
}
```

## Workflow Rekomendasi untuk Update Dokumentasi

1. Pull source code terbaru.
2. Jalankan analisis code Smara.
3. Generate atau update guide fitur.
4. Build docs-site.
5. Commit perubahan dokumentasi.
6. Push ke GitHub.

Contoh dengan skill ini:

```text
jalankan skill smara-docs-generate-feature-guide dengan version v1.20.4
```

## Catatan Maintenance

Dokumen ini bersifat generated. Jika ada fitur penting yang belum tertangkap otomatis, tambahkan penjelasan manual pada halaman docs-site yang lebih spesifik, lalu jalankan build docs untuk validasi.
