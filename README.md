<div align="center">

```
███╗   ███╗██╗███╗   ██╗██╗     ██████╗██╗      █████╗ ██╗   ██╗██████╗ ███████╗
████╗ ████║██║████╗  ██║██║    ██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██╔════╝
██╔████╔██║██║██╔██╗ ██║██║    ██║     ██║     ███████║██║   ██║██║  ██║█████╗  
██║╚██╔╝██║██║██║╚██╗██║██║    ██║     ██║     ██╔══██║██║   ██║██║  ██║██╔══╝  
██║ ╚═╝ ██║██║██║ ╚████║██║    ╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝███████╗
╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝     ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
```

### 轻量级本地 AI 编程助手

[![Bun](https://img.shields.io/badge/Bun-1.3.11+-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-1ba784?style=for-the-badge)](LICENSE)

[官网](https://txl16095.github.io/MiniClaude/) · [使用指南](https://txl16095.github.io/MiniClaude/#/guide/quick-start) · [社区](https://github.com/txl16095/MiniClaude/discussions)

**中文** | [English](README_EN.md)

</div>

---

![MiniClaude 运行截图](assets/screenshot.png)

---

## 为什么选择 MiniClaude？

原版 **Claude Code** 删除了 **92,000 行**云服务/遥测/协作代码后得到 MiniClaude。

- **精简** — 保留 100% 核心开发功能，移除所有云服务依赖
- **安全** — 无遥测、无追踪、无同步，代码完全本地处理
- **快速** — 一个二进制文件，`bun run build && ./cli` 即可启动
- **完整** — AI 对话、代码生成、文件操作、Git、MCP、插件、技能系统

---

## 快速开始

### 前置要求

- [Bun](https://bun.sh) >= 1.3.11
- [Git](https://git-scm.com)

### 安装构建

```bash
git clone https://github.com/txl16095/MiniClaude.git && cd MiniClaude
bun install
bun run build
```

### 配置文件

MiniClaude 完全兼容 Claude Code 的配置体系，主推在 `~/.claude/settings.json` 中集中管理。

| 配置方式 | 路径 | 适用场景 |
|----------|------|----------|
| **settings.json（推荐）** | `~/.claude/settings.json` | 全局配置，多 Provider 热切换 |
| **.env** | 项目根目录 `.env` | 开发调试，临时覆盖 |

**推荐：settings.json**

复制模板并编辑：

```bash
cp settings.example.json ~/.claude/settings.json
# Linux/macOS: ~/.claude/settings.json
# Windows:     C:\Users\<用户名>\.claude\settings.json
```

最简配置（DeepSeek 为例）：

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

详细模板见 [settings.example.json](settings.example.json)，包含多 Provider、MCP、插件、权限等完整配置。

**备选：.env（开发模式）**

```bash
# 复制 .env.example 并填入密钥
cp .env.example .env
bun run dev
# 或 Windows: start.bat
```

Windows 用户也可双击 `start.bat` 直接启动开发模式。

### 多 Provider 热切换

```bash
/provider              # 查看可用 Provider
/provider deepseek     # 切到 DeepSeek（全局，所有窗口生效）
/provider kiro --session  # 仅当前窗口切换，不影响其他 session
```

Provider 配置也写在 `settings.json` 的 `providers` 块中，切换无需重启。

---

## 核心功能

| 类别 | 功能 |
|---|---|
| AI 能力 | 智能对话 · 代码生成 · 项目理解 · 多模型 · 多 Provider 热切换 |
| 文件工具 | Read / Write / Edit / Glob / Grep / HTML 报告 |
| 开发集成 | Shell (Bash/PowerShell) · Git · LSP |
| 扩展生态 | MCP 协议 · 插件系统 · 技能系统 · Chrome 扩展 |
| 安全 | **hard_deny** 无条件禁止规则 · 权限控制 · Hooks |

---

## 与 Claude Code 的差异

| | Claude Code | MiniClaude |
|---|---|---|
| 核心开发功能 | ✓ | ✓ |
| 云服务集成 | ✓ | **已移除** |
| 遥测上报 | ✓ | **已移除** |
| 团队协作 | ✓ | **已移除** |
| 代码量 | ~100% | **~20%**（删除 92,000 行） |

<details>
<summary>已移除模块详情（点击展开）</summary>

- **云服务** (7K 行) — OAuth、遥测、设置同步、策略限制
- **协作** (24K 行) — 团队协作、桥接模式、远程控制
- **速率限制** (48K 行) — 限速系统、用量分析、文件云存储
- **实验/集成** (5K 行) — 语音、桌面、Teleport、自动更新
- **命令精简** — 移除 42 个授权/实验/内部命令

</details>

---

## 文档

完整使用指南请访问 [官网文档](https://txl16095.github.io/MiniClaude/#/guide/quick-start)：

| 分类 | 内容 |
|---|---|
| 快速开始 | 安装启动、环境变量、第三方模型、全局使用、FAQ |
| 功能指南 | 命令大全、工具详解、hard_deny 安全规则、HTML 输出、技能系统、MCP |
| 参考 | 项目结构、与原版差异 |

---

## 贡献

```bash
git checkout -b feat/amazing-feature
git commit -m 'feat: add amazing feature'
git push origin feat/amazing-feature
# 提交 PR 到 dev 分支
```

---

## 许可证

**MIT License** © 2026 [txl16095](https://github.com/txl16095)

基于 [free-code](https://github.com/paoloanzn/free-code) 改造 · 原始代码版权归 [Anthropic PBC](https://www.anthropic.com) 所有

> ⚠ 本项目不是 Anthropic 官方项目，仅供学习研究使用。

---

<div align="center">

[![Website](https://img.shields.io/badge/官网-1ba784?style=for-the-badge)](https://txl16095.github.io/MiniClaude/)
[![Claude Code](https://img.shields.io/badge/Claude_Code-orange?style=for-the-badge)](https://docs.anthropic.com/en/docs/claude-code)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)

**如果这个项目对你有帮助，请给个 Star ⭐**

</div>
