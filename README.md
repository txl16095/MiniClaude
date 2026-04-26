<p align="center">
  <img src="assets/screenshot.png" alt="MiniClaude" width="720" />
</p>

<h1 align="center">MiniClaude</h1>

<p align="center">
  <strong>轻量级本地 AI 编程助手</strong><br>
  基于 Claude Code 精简改造，移除云服务依赖，专注本地开发体验<br>
  <br>
  <a href="https://txl16095.github.io/MiniClaude/">📖 官网</a> ·
  <a href="#快速开始">🚀 快速开始</a> ·
  <a href="#核心功能">✨ 功能</a> ·
  <a href="#与-claude-code-的差异">🔄 差异对比</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Bun-1.3.11+-black?logo=bun" alt="Bun">
  <img src="https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

---

## 🎯 项目简介

MiniClaude 是基于 [free-code](https://github.com/paoloanzn/free-code) 深度精简改造的**纯本地** AI 编程助手。

**核心理念**：
- 🔒 **100% 本地化** - 零云端回调，所有数据本地处理
- ⚡ **极致轻量** - 删除 44,700+ 行云服务代码
- 🎯 **专注开发** - 保留核心 AI 编程功能，移除协作/远程特性
- 📦 **开箱即用** - 一个二进制文件，无需复杂配置

---

## 🚀 快速开始

### 安装 Bun

```bash
# Windows: 访问 https://bun.sh 下载安装程序

# Linux / macOS
curl -fsSL https://bun.sh/install | bash
```

### 克隆并构建

```bash
git clone https://github.com/txl16095/MiniClaude.git
cd MiniClaude

# 配置 API 密钥
cp .env.example .env  # Linux/macOS
# 或 copy .env.example .env  # Windows

# 编辑 .env 文件，填入你的 Anthropic API 密钥
# ANTHROPIC_API_KEY=your-api-key-here

# 构建
bun run build

# 运行
./cli  # Linux/macOS
# 或 start.bat  # Windows
```

### 基本使用

```bash
# 交互式对话
./cli

# 单次命令
./cli -p "分析这个项目的结构"

# 指定模型
./cli --model claude-sonnet-4-6
```

---

## ✨ 核心功能

### 🤖 AI 交互

| 功能 | 说明 | 命令 |
|------|------|------|
| **智能对话** | 与 Claude AI 进行自然语言交互 | 直接输入 |
| **代码生成** | 生成、修改、重构代码 | `/help` 查看 |
| **上下文理解** | 自动分析项目结构和文件 | 自动 |
| **多模型支持** | Claude Sonnet/Opus/Haiku | `/model` |

### 📁 文件操作

| 工具 | 功能 | 说明 |
|------|------|------|
| **FileRead** | 读取文件内容 | 支持代码高亮 |
| **FileWrite** | 创建/覆盖文件 | 完整文件写入 |
| **FileEdit** | 智能编辑文件 | 精确修改指定行 |
| **Glob** | 文件搜索 | 支持通配符 |
| **Grep** | 内容搜索 | 基于 ripgrep |

### 🔧 开发工具

| 功能 | 说明 | 命令 |
|------|------|------|
| **Bash/PowerShell** | 执行 Shell 命令 | 自动选择 |
| **Git 集成** | 版本控制操作 | `/branch` |
| **LSP 支持** | 语言服务器协议 | 代码补全/诊断 |
| **任务管理** | 后台任务执行 | `/tasks` |

### 🔌 扩展系统

| 系统 | 说明 | 命令 |
|------|------|------|
| **MCP 服务器** | Model Context Protocol | `/mcp` |
| **插件系统** | 自定义功能扩展 | `/plugin` |
| **技能系统** | 可复用 AI 技能 | `/skills` |
| **Chrome 扩展** | 浏览器集成 | `/chrome` |

### ⚙️ 配置管理

| 功能 | 说明 | 命令 |
|------|------|------|
| **模型切换** | 切换 AI 模型 | `/model` |
| **主题定制** | 终端主题 | `/theme` |
| **快捷键** | 自定义键绑定 | `/keybindings` |
| **权限控制** | 工具使用权限 | `/permissions` |

---

## 🔄 与 Claude Code 的差异

### ❌ 已移除功能（~44,700 行代码）

<details>
<summary><b>☁️ 云服务集成（~7,173 行）</b></summary>

| 功能 | 代码量 | 说明 |
|------|--------|------|
| OAuth 认证 | ~2,062 行 | 云端账号登录 |
| 遥测分析 | ~2,882 行 | 使用数据上报 |
| 设置同步 | ~1,619 行 | 跨设备配置同步 |
| 策略限制 | ~610 行 | 企业策略检查 |

</details>

<details>
<summary><b>👥 协作功能（~24,387 行）</b></summary>

| 功能 | 代码量 | 说明 |
|------|--------|------|
| 团队协作 | ~9,665 行 | 多人协作编程 |
| 桥接模式 | ~12,613 行 | 远程连接支持 |
| 远程控制 | ~1,619 行 | 远程会话管理 |
| 协调器模式 | ~490 行 | 多 Agent 协调 |

</details>

<details>
<summary><b>🧪 实验性功能（~1,950 行）</b></summary>

| 功能 | 代码量 | 说明 |
|------|--------|------|
| 语音模式 | ~500 行 | 语音交互 |
| 桌面集成 | ~300 行 | 桌面应用集成 |
| 移动端集成 | ~200 行 | 移动设备支持 |
| Buddy 精灵 | ~800 行 | 宠物助手 UI |
| Stickers | ~150 行 | 装饰性贴纸 |

</details>

<details>
<summary><b>🔗 复杂集成（~3,170 行）</b></summary>

| 功能 | 代码量 | 说明 |
|------|--------|------|
| Teleport | ~2,071 行 | 项目传送功能 |
| 自动更新 | ~1,069 行 | 软件自动更新 |
| Slack 集成 | ~30 行 | Slack 通知 |

</details>

<details>
<summary><b>🗑️ 命令清理（39 个命令）</b></summary>

| 类别 | 数量 | 示例 |
|------|------|------|
| 授权命令 | 5 个 | login, logout, auth |
| 实验命令 | 8 个 | ultraplan, torch, fork |
| 内部命令 | 22 个 | tag, agents-platform |
| 空桩命令 | 4 个 | 未实现的占位 |

</details>

### ✅ 保留功能（核心开发工具）

| 类别 | 功能 | 说明 |
|------|------|------|
| **AI 核心** | 对话、代码生成、上下文理解 | 完整保留 |
| **文件操作** | 读写、编辑、搜索 | 完整保留 |
| **Shell 集成** | Bash/PowerShell 执行 | 完整保留 |
| **Git 集成** | 版本控制、分支管理 | 完整保留 |
| **MCP 协议** | Model Context Protocol | 完整保留 |
| **LSP 支持** | 语言服务器协议 | 完整保留 |
| **插件系统** | 自定义扩展 | 完整保留 |
| **技能系统** | 可复用技能 | 完整保留 |
| **任务管理** | 后台任务 | 完整保留 |
| **权限系统** | 安全控制 | 完整保留 |

### 📊 精简统计

| 指标 | 数量 | 说明 |
|------|------|------|
| 删除代码 | ~44,700 行 | 净减少 |
| 删除文件 | ~200 个 | 云服务相关 |
| 删除命令 | 39 个 | 非核心命令 |
| 删除依赖 | 20 个 | 云服务 SDK |
| 保留功能 | 100% | 核心开发功能 |

---

## 📖 使用指南

### 常用命令

```bash
# 帮助
/help                    # 显示所有命令
/help <command>          # 查看命令详情

# 配置
/config                  # 打开配置
/model                   # 切换模型
/theme                   # 切换主题

# 文件操作
/files                   # 查看上下文文件
/add-dir <path>          # 添加目录到上下文

# 开发工具
/mcp                     # MCP 服务器管理
/skills                  # 技能管理
/tasks                   # 任务管理
/chrome                  # Chrome 扩展

# 会话管理
/clear                   # 清空对话
/export                  # 导出对话
/resume                  # 恢复会话
```

### 环境变量

```bash
# API 配置
ANTHROPIC_API_KEY=sk-ant-xxx        # Anthropic API 密钥
ANTHROPIC_BASE_URL=https://...      # 自定义 API 端点
ANTHROPIC_MODEL=claude-sonnet-4-6   # 默认模型

# 代理配置
HTTP_PROXY=http://proxy:port        # HTTP 代理
HTTPS_PROXY=https://proxy:port      # HTTPS 代理

# 调试选项
DEBUG=*                             # 启用调试日志
```

### 配置文件

```bash
~/.config/miniclaude/
├── config.json          # 主配置
├── settings.json        # 用户设置
├── mcp.json            # MCP 服务器配置
├── skills/             # 自定义技能
└── plugins/            # 自定义插件
```

---

## 🏗️ 项目结构

```
MiniClaude/
├── src/
│   ├── entrypoints/     # 入口点
│   │   └── cli.tsx      # CLI 主入口
│   ├── commands/        # 斜杠命令（/help, /config 等）
│   ├── tools/           # AI 工具（FileRead, Bash 等）
│   ├── components/      # React 终端 UI 组件
│   ├── screens/         # 主界面（REPL）
│   ├── services/        # 服务层
│   │   ├── api/         # API 客户端
│   │   ├── mcp/         # MCP 协议
│   │   └── lsp/         # LSP 协议
│   ├── utils/           # 工具函数
│   ├── skills/          # 技能系统
│   ├── plugins/         # 插件系统
│   └── state/           # 状态管理
├── scripts/
│   └── build.ts         # 构建脚本
├── website/             # 官网源码
└── README.md
```

---

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **Bun** | >= 1.3.11 | 运行时和构建工具 |
| **TypeScript** | 6.0+ | 开发语言 |
| **React** | 19.x | UI 框架 |
| **Ink** | 6.x | 终端 UI 渲染 |
| **Zod** | 4.x | 模式验证 |
| **Commander.js** | 14.x | CLI 参数解析 |

---

## 🤝 贡献指南

欢迎贡献！请遵循以下步骤：

1. **Fork 项目**
2. **创建分支**：`git checkout -b feat/amazing-feature`
3. **提交更改**：`git commit -m 'feat: add amazing feature'`
4. **推送分支**：`git push origin feat/amazing-feature`
5. **提交 PR**：提交到 `dev` 分支

### 开发环境

```bash
# 安装依赖
bun install

# 开发模式（热重载）
bun run dev

# 构建
bun run build

# 构建开发版
bun run build:dev
```

---

## 📄 许可证

本项目采用 [MIT License](LICENSE)。

**注意**：
- 原始 Claude Code 源代码版权归 Anthropic PBC 所有
- 本项目基于 free-code 改造，仅供学习和研究使用
- 使用时请遵守 Anthropic 的服务条款

---

## ⚠️ 免责声明

1. **非官方项目**：本项目不是 Anthropic 的官方项目，未经授权或认可
2. **使用风险**：使用本项目需自行承担风险
3. **法律责任**：使用者应遵守所在地区法律法规
4. **商业使用**：不建议用于商业用途
5. **随时下架**：如 Anthropic 要求，将立即停止维护

**如果您不同意以上条款，请勿使用本项目。**

---

## 🔗 相关链接

- [📖 官网](https://txl16095.github.io/MiniClaude/) - 项目官方网站
- [🔧 free-code](https://github.com/paoloanzn/free-code) - 上游项目
- [📚 Claude Code 文档](https://docs.anthropic.com/en/docs/claude-code) - 官方文档
- [🏢 Anthropic](https://www.anthropic.com) - Anthropic 官网
- [⚡ Bun](https://bun.sh) - Bun 运行时

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/txl16095">txl16095</a>
</p>
