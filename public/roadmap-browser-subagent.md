# Roadmap Fitur Browser Subagent

## Context

Browser Subagent adalah fitur Smara/Antigravity untuk menjalankan browser automation dari prompt natural. Targetnya adalah membantu user melakukan E2E testing, visual checking, exploratory testing, screenshot capture, dan export laporan Markdown tanpa harus menulis script Playwright secara manual.

Contoh intent utama:

- Membuka `http://localhost:3000`, login sebagai admin, lalu screenshot dashboard.
- Membuka `http://localhost:5173`, mengecek navbar responsif di viewport mobile, lalu screenshot komponen navbar.
- Membuka halaman checkout, mencoba klik tombol `Bayar` tanpa mengisi form, mengecek error merah, lalu screenshot pesan error.

Outcome yang dituju:

- Smara mengenali kata kunci seperti `buka browser`, `gunakan browser subagent`, `ambil screenshot`, `testing E2E`, dan `periksa UI`.
- Browser Subagent bisa membuka URL lokal/remote, klik, input teks, submit form, menunggu perubahan UI, dan mengambil screenshot.
- Setiap run menghasilkan artifact berupa screenshot PNG, metadata JSON, dan laporan Markdown yang bisa diunduh atau dikirim lewat Smara Discord.

## Milestones

| Priority | Milestone | Output |
|---|---|---|
| P0 | MVP Screenshot | URL check, screenshot, report.md |
| P1 | Login E2E | Fill, click, wait, dashboard screenshot |
| P1 | Visual Checking | Mobile viewport, navbar screenshot, overflow check |
| P2 | Exploratory Testing | Form validation, error screenshot, console/network capture |
| P2 | CLI Integration | `smara browser run` command |
| P2 | Discord Integration | Screenshot + Markdown attachment |
| P3 | Advanced Visual Regression | Baseline comparison, diff image, threshold |
| P3 | Accessibility Check | axe-core report and suggestions |

## Milestone 1 — Browser Subagent MVP

### Goal

Smara bisa membuka browser ke URL yang diminta dan mengambil screenshot dasar.

### Fitur

- Deteksi intent browser dari prompt.
- Validasi URL lokal/remote.
- Cek apakah server reachable sebelum browser dijalankan.
- Launch Chromium headless/headful.
- Buka halaman target.
- Ambil screenshot full page.
- Simpan artifact ke folder run.
- Generate laporan Markdown.

### Artifact Structure

```txt
.smara/artifacts/browser-runs/<timestamp>/
├── screenshot-home.png
├── run.json
└── report.md
```

## Milestone 2 — E2E Interaction Runner

### Prompt Example

```txt
Gunakan browser subagent untuk membuka http://localhost:3000.
Tolong lakukan simulasi login dengan memasukkan username 'admin'
dan password 'password123'. Setelah berhasil masuk ke halaman dashboard,
ambil screenshot dan simpan hasilnya.
```

### Task Plan Example

```json
{
  "url": "http://localhost:3000",
  "steps": [
    { "action": "goto", "target": "http://localhost:3000" },
    { "action": "fill", "target": "username", "value": "admin" },
    { "action": "fill", "target": "password", "value": "password123", "secret": true },
    { "action": "click", "target": "Login" },
    { "action": "waitFor", "target": "dashboard" },
    { "action": "screenshot", "name": "dashboard" }
  ]
}
```

## Milestone 3 — Visual Checking Responsive UI

### Prompt Example

```txt
Buka http://localhost:5173 di browser.
Tolong periksa apakah tata letak navbar sudah responsif di ukuran layar mobile.
Ambil screenshot pada komponen navbar tersebut agar saya bisa memvalidasi tampilannya.
```

### Viewport Preset

- Mobile: `375x812`
- Tablet: `768x1024`
- Desktop: `1440x900`

### Output

```txt
.smara/artifacts/browser-runs/<timestamp>/
├── navbar-mobile.png
├── navbar-tablet.png
├── navbar-desktop.png
├── visual-check.json
└── report.md
```

## Milestone 4 — Exploratory Testing & Bug Finding

### Prompt Example

```txt
Tolong navigasikan browser ke halaman checkout di http://localhost:8000.
Cobalah klik tombol 'Bayar' tanpa mengisi form data diri.
Periksa apakah peringatan error merah muncul di layar,
lalu ambil screenshot dari pesan error tersebut.
```

### Expected Result

- Tombol `Bayar` bisa diklik.
- Form kosong memunculkan validasi jika aplikasi benar.
- Screenshot error tersimpan.
- Report menyebutkan apakah error merah ditemukan.

## Milestone 5 — Markdown Report Export

Setiap run menghasilkan `report.md` berisi:

- prompt asli
- URL
- waktu run
- browser mode
- viewport
- langkah yang dijalankan
- status tiap step
- screenshot links
- console errors
- failed network requests
- rekomendasi fix jika bug ditemukan

## Milestone 6 — CLI & Discord Integration

### CLI Proposal

```bash
smara browser run "Buka http://localhost:3000 dan ambil screenshot"
smara browser run --url http://localhost:3000 --screenshot
smara browser e2e --spec browser-task.md
```

### Discord Behavior

Jika user di Discord menulis:

```txt
Gunakan browser subagent buka http://localhost:3000 dan ambil screenshot
```

Smara Discord akan:

1. Mengenali browser intent.
2. Menjalankan browser task.
3. Mengirim screenshot sebagai attachment.
4. Mengirim `report.md` sebagai attachment.

> Catatan: untuk Discord/VPS, `localhost` mengarah ke mesin tempat bot berjalan, bukan perangkat user.

## Files / Tools Likely Needed

```txt
internal/browser/
├── subagent.go
├── planner.go
├── runner.go
├── screenshots.go
├── report.go
├── server_check.go
└── types.go
```

```txt
internal/platform/discord/
├── browser_intent.go
└── browser_artifacts.go
```

```txt
cmd/smara/
├── browser.go
└── root.go
```

## Risks / Rollback

- Localhost ambiguity: tampilkan warning dan dukung tunnel/public URL.
- Selector tidak selalu akurat: fallback ke role, label, placeholder, text, CSS heuristic.
- Aksi destruktif: safe mode, domain allowlist, dan konfirmasi sebelum aksi sensitif.
- Credential exposure: masking otomatis di logs/report.
- Browser dependency berat: lazy install dan `smara doctor`.

Rollback utama:

```txt
SMARA_BROWSER_SUBAGENT=false
```
