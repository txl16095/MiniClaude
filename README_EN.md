<div align="center">

```
███╗   ███╗██╗███╗   ██╗██╗     ██████╗██╗      █████╗ ██╗   ██╗██████╗ ███████╗
████╗ ████║██║████╗  ██║██║    ██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██╔════╝
██╔████╔██║██║██╔██╗ ██║██║    ██║     ██║     ███████║██║   ██║██║  ██║█████╗  
██║╚██╔╝██║██║██║╚██╗██║██║    ██║     ██║     ██╔══██║██║   ██║██║  ██║██╔══╝  
██║ ╚═╝ ██║██║██║ ╚████║██║    ╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝███████╗
╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝     ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
```

### Lightweight Local AI Coding Assistant

[![Bun](https://img.shields.io/badge/Bun-1.3.11+-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-1ba784?style=for-the-badge)](LICENSE)

[Website](https://txl16095.github.io/MiniClaude/) · [Guide](https://txl16095.github.io/MiniClaude/#/guide/quick-start) · [Community](https://github.com/txl16095/MiniClaude/discussions)

[中文](README.md) | **English**

</div>

---

## Screenshot

![MiniClaude Screenshot](assets/screenshot.png)

---

## Why MiniClaude?

MiniClaude removes **92,000 lines** of cloud/telemetry/collaboration code from Claude Code.

- **Minimal** — 100% core features retained, all cloud dependencies removed
- **Secure** — No telemetry, no tracking, no sync — fully local
- **Fast** — Single binary, `bun run build && ./cli` to start
- **Complete** — AI chat, code gen, file ops, Git, MCP, plugins, skills

---

## Quick Start

### Prerequisites

- [Bun](https://bun.sh) >= 1.3.11
- [Git](https://git-scm.com)

### Build

```bash
git clone https://github.com/txl16095/MiniClaude.git && cd MiniClaude
bun install
bun run build
```

### Configuration

MiniClaude is fully compatible with Claude Code's config system. Use `~/.claude/settings.json` for centralized management.

| Method | Path | Use Case |
|--------|------|----------|
| **settings.json (recommended)** | `~/.claude/settings.json` | Global config, multi-provider hot-switch |
| **.env** | Project root `.env` | Dev/debug, temporary overrides |

**Recommended: settings.json**

Copy the template and edit:

```bash
cp settings.example.json ~/.claude/settings.json
# Linux/macOS: ~/.claude/settings.json
# Windows:     C:\Users\<username>\.claude\settings.json
```

Minimal config (DeepSeek example):

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "sk-your-api-key-here",
    "ANTHROPIC_MODEL": "deepseek-v4-pro[1m]"
  },
  "model": "deepseek-v4-pro[1m]"
}
```

See [settings.example.json](settings.example.json) for the full template with providers, MCP, plugins, permissions, and more.

**Alternative: .env (dev mode)**

```bash
# Copy .env.example and add your key
cp .env.example .env
bun run dev
# or Windows: start.bat
```

Windows users can double-click `start.bat` for dev mode.

### Multi-Provider Hot Switch

```bash
/provider              # List available providers
/provider deepseek     # Switch to DeepSeek (global, all windows)
/provider kiro --session  # Current window only
```

Providers are configured in `settings.json` under the `providers` key. No restart needed.

---

## Core Features

| Category | Features |
|---|---|
| AI | Chat · Code gen · Project analysis · Multi-model |
| File Tools | Read / Write / Edit / Glob / Grep / HTML reports |
| Dev Integration | Shell (Bash/PowerShell) · Git · LSP |
| Ecosystem | MCP · Plugins · Skills · Chrome Extension |
| Security | **hard_deny** unconditional block · Permissions · Hooks |

---

## vs Claude Code

| | Claude Code | MiniClaude |
|---|---|---|
| Core dev features | ✓ | ✓ |
| Cloud services | ✓ | **Removed** |
| Telemetry | ✓ | **Removed** |
| Team collaboration | ✓ | **Removed** |
| Code size | ~100% | **~20%** (92K lines removed) |

<details>
<summary>Removed modules (expand for details)</summary>

- **Cloud** (7K lines) — OAuth, telemetry, settings sync, policy limits
- **Collaboration** (24K lines) — Team features, bridge mode, remote control
- **Rate limiting** (48K lines) — Rate limit system, usage analytics, cloud storage
- **Experimental** (5K lines) — Voice, desktop, teleport, auto-update
- **Commands** — 42 auth/experimental/internal commands removed

</details>

---

## Documentation

Full guide at [website docs](https://txl16095.github.io/MiniClaude/#/guide/quick-start):

| Category | Topics |
|---|---|
| Getting Started | Installation, env vars, third-party models, global usage, FAQ |
| Features | Commands, tools, hard_deny, HTML output, skills, MCP |
| Reference | Project structure, differences from Claude Code |

---

## Contributing

```bash
git checkout -b feat/amazing-feature
git commit -m 'feat: add amazing feature'
git push origin feat/amazing-feature
# Open PR to dev branch
```

---

## License

**MIT License** © 2026 [txl16095](https://github.com/txl16095)

Based on [free-code](https://github.com/paoloanzn/free-code) · Original code copyright [Anthropic PBC](https://www.anthropic.com)

> ⚠ This is NOT an official Anthropic project. For learning and research only.

---

<div align="center">

[![Website](https://img.shields.io/badge/Website-1ba784?style=for-the-badge)](https://txl16095.github.io/MiniClaude/)
[![Claude Code](https://img.shields.io/badge/Claude_Code-orange?style=for-the-badge)](https://docs.anthropic.com/en/docs/claude-code)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)

**If this project helps you, please give it a Star ⭐**

</div>
