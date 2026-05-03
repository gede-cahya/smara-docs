# Smara CLI Documentation

[![Website](https://img.shields.io/badge/Live%20Site-smara--docs.vercel.app-bef264?logo=vercel&style=for-the-badge)](https://smara-docs.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-bef264)](https://github.com/gede-cahya/smara-docs/blob/master/LICENSE)

> **Official documentation website for [Smara CLI](https://github.com/gede-cahya/Smara-CLI)** — the autonomous multi-agent terminal with persistent team memory and MCP orchestration.

---

## 🌐 Live Site

**[https://smara-docs.vercel.app](https://smara-docs.vercel.app)**

---

## 📸 Preview

![Smara CLI Docs Preview](https://smara-docs.vercel.app/og-image.png)

*(Dark-themed documentation site with green accent colors, sidebar navigation, and animated glow effects)*

---

## 🏷️ About

| Tag | Description |
|-----|-------------|
| **Autonomous Agents** | Self-planning, self-executing AI agents with 3 modes: Ask, Rush, Plan |
| **Team Memory** | Persistent SQLite-backed memory shared across sessions and workspaces |
| **MCP Orchestration** | Auto-discovery and connection to local & remote MCP servers |
| **Skill Ecosystem** | Hierarchical skill trees with dependency tracking and analytics |
| **Multi-Provider LLM** | OpenAI, Anthropic, Gemini, Ollama, OpenRouter support |
| **SSH Remote** | Built-in remote execution and file transfer via SFTP/SCP |
| **Graphify** | Codebase knowledge graph with natural language querying |
| **Safety First** | Full audit trails, two-step safety, and auto-revert on failure |
| **Crush TUI** | Pastel green terminal UI with live phase animations |
| **Platform Bots** | Telegram, Discord, WhatsApp integration |

**Version:** v1.18.0  
**License:** MIT  
**Repository:** [gede-cahya/Smara-CLI](https://github.com/gede-cahya/Smara-CLI)

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool and dev server
- **TypeScript** — Type-safe development
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Scroll animations and transitions
- **Lucide React** — Consistent icon set
- **React Router 6** — Client-side routing for multi-page docs

---

## 📁 Structure

```
docs-site/
├── public/
│   └── logo.png              # Smara CLI logo
├── src/
│   ├── main.tsx              # App entry point
│   ├── App.tsx               # Router configuration
│   ├── index.css             # Tailwind + custom styles
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navigation with scroll behavior
│   │   ├── GlowCard.tsx      # Card component with glow border effect
│   │   ├── PhaseBadge.tsx    # Animated phase indicator (Thinking → Generating)
│   │   ├── Sidebar.tsx       # Docs sidebar navigation
│   │   ├── DocsLayout.tsx    # Docs page layout wrapper
│   │   └── DocPage.tsx       # Content page wrapper
│   ├── sections/
│   │   ├── Hero.tsx          # Landing hero with install commands
│   │   ├── Vision.tsx        # Philosophy and 4 pillars
│   │   ├── Features.tsx      # 25+ feature cards grid
│   │   ├── FAQ.tsx           # Accordion FAQ section
│   │   └── Footer.tsx        # Links and license info
│   └── docs/
│       ├── DocsHome.tsx      # Docs landing / quick links
│       ├── GettingStarted/
│       │   ├── Installation.tsx
│       │   └── Quickstart.tsx
│       ├── UserGuide/
│       │   ├── Configuration.tsx
│       │   ├── MCP.tsx
│       │   ├── Skills.tsx
│       │   ├── Memory.tsx
│       │   ├── Dashboard.tsx
│       │   ├── SSH.tsx
│       │   └── Graphify.tsx
│       └── Reference/
│           ├── CLICommands.tsx
│           └── FAQDocs.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── vercel.json               # SPA rewrite rules
└── package.json
```

---

## 🚀 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npx vercel --prod
```

Or connect the GitHub repository to Vercel for automatic deployments on push.

### Manual

Build the static site and deploy the `dist/` folder to any static host:

```bash
npm run build
# dist/ contains the static site
```

---

## 🔗 Links

| Resource | URL |
|----------|-----|
| 🌐 Live Docs | [smara-docs.vercel.app](https://smara-docs.vercel.app) |
| 📦 Main Repo | [github.com/gede-cahya/Smara-CLI](https://github.com/gede-cahya/Smara-CLI) |
| 📄 This Repo | [github.com/gede-cahya/smara-docs](https://github.com/gede-cahya/smara-docs) |
| 🏷️ Releases | [github.com/gede-cahya/Smara-CLI/releases](https://github.com/gede-cahya/Smara-CLI/releases) |

---

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0a0a` | Page background |
| Card | `#111111` | Cards and panels |
| Accent Green | `#bef264` | Primary accent, links, badges |
| Green 2 | `#84cc16` | Secondary accent |
| Text Primary | `#f5f5f5` | Headings, body text |
| Text Muted | `#a3a3a3` | Descriptions, secondary text |
| Border Glow | `rgba(190,242,100,0.2)` | Card borders |
| Font | `Inter` | Primary typeface |

---

## 📄 License

MIT © [Gede Cahya](https://github.com/gede-cahya)

---

<p align="center">
  <a href="https://smara-docs.vercel.app">
    <img src="https://img.shields.io/badge/View%20Documentation-smara--docs.vercel.app-bef264?style=for-the-badge&logo=vercel" alt="View Documentation" />
  </a>
</p>
