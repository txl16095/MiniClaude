# Sync Claude Code Upstream Fixes (v2.1.105 → v2.1.142) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sync ~15 high-priority bug fixes from official Claude Code releases (v2.1.105–v2.1.142) into MiniClaude, focusing on memory leaks, stream reliability, rendering bugs, MCP stability, and session robustness.

**Architecture:** Each task is self-contained — investigate current MiniClaude code, apply the fix based on upstream release notes, and verify. Tasks are ordered by impact (critical → nice-to-have). No upstream source available; fixes are derived from release note descriptions + code analysis.

**Tech Stack:** Bun + TypeScript 6.0, React/Ink for TUI, Anthropic SDK, MCP SDK

---

### Task 1: Stream idle timeout — enable watchdog by default

**Files:**
- Modify: `src/services/api/claude.ts:1889-1892`

**Background:** Upstream v2.1.126 fixed "Stream idle timeout errors on Mac wake from sleep" and "background/remote sessions incorrectly aborting with Stream idle timeout during long thinking pauses." MiniClaude has the watchdog code but it's gated behind `CLAUDE_ENABLE_STREAM_WATCHDOG`. 

- [ ] **Step 1: Read current watchdog code**

Read `src/services/api/claude.ts` lines 1883-1942 to verify the current implementation.

- [ ] **Step 2: Change watchdog from opt-in to opt-out**

```typescript
// Before (line 1889):
const streamWatchdogEnabled = isEnvTruthy(
  process.env.CLAUDE_ENABLE_STREAM_WATCHDOG,
)

// After:
const streamWatchdogEnabled = !isEnvTruthy(
  process.env.CLAUDE_DISABLE_STREAM_WATCHDOG,
)
```

- [ ] **Step 3: Increase timeout for extended thinking models**

The default 90s is too short for models doing extended thinking. Bump to 180s:

```typescript
// Before (line 1893):
parseInt(process.env.CLAUDE_STREAM_IDLE_TIMEOUT_MS || '', 10) || 90_000

// After:
parseInt(process.env.CLAUDE_STREAM_IDLE_TIMEOUT_MS || '', 10) || 180_000
```

- [ ] **Step 4: Build and verify no compile errors**

```bash
bun run build
```

Expected: Build succeeds without errors.

- [ ] **Step 5: Commit**

```bash
git add src/services/api/claude.ts
git commit -m "fix: enable stream idle watchdog by default, increase timeout to 180s

Sync from upstream v2.1.126: fixes stream idle timeout on Mac wake
from sleep and during extended thinking pauses.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 2: WebFetch — truncate HTML before conversion, not after

**Files:**
- Modify: `src/tools/WebFetchTool/utils.ts:470-496`

**Background:** Upstream v2.1.117 fixed "WebFetch hangs on very large HTML pages — truncate input before HTML→markdown conversion." MiniClaude currently truncates `markdownContent` at 100K chars AFTER HTML→markdown conversion, which means very large HTML pages still cause the converter to hang or consume excessive memory.

- [ ] **Step 1: Find the HTML→markdown conversion call in utils.ts**

Read `src/tools/WebFetchTool/utils.ts` around the `getURLMarkdownContent` function and find where HTML is converted to markdown.

- [ ] **Step 2: Add HTML truncation before markdown conversion**

In the `getURLMarkdownContent` function, before the turndown/HTML→markdown conversion step, add:

```typescript
// Truncate raw HTML before conversion to prevent hangs on very large pages.
// 1MB of HTML is far more than enough to hit the 100K markdown cap anyway.
const MAX_HTML_LENGTH = 1_000_000
if (htmlContent.length > MAX_HTML_LENGTH) {
  htmlContent = htmlContent.slice(0, MAX_HTML_LENGTH)
  logForDebugging(
    `WebFetch: HTML truncated from ${htmlContent.length} to ${MAX_HTML_LENGTH} chars before markdown conversion`
  )
}
```

- [ ] **Step 3: Also strip `<style>` and `<script>` before conversion**

Upstream v2.1.105 notes: "Improved `WebFetch` to strip `<style>` and `<script>` contents from fetched pages so CSS-heavy pages no longer exhaust the content budget." Add before conversion:

```typescript
// Strip <style> and <script> contents to prevent CSS-heavy pages from
// exhausting the content budget before reaching actual text.
htmlContent = htmlContent
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
```

- [ ] **Step 4: Build and verify**

```bash
bun run build
```

Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/tools/WebFetchTool/utils.ts
git commit -m "fix: truncate HTML and strip style/script before markdown conversion in WebFetch

Sync from upstream v2.1.105 + v2.1.117: prevents hangs on very large
HTML pages and CSS-heavy pages exhausting content budget.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 3: Image memory — clamp image dimensions on paste

**Files:**
- Modify: `src/constants/apiLimits.ts:42-43`
- Modify: `src/utils/attachments.ts` (image paste handling area)
- Modify: `src/utils/imageResizer.ts` (downsample for very large images)

**Background:** Upstream v2.1.126 fixed "Pasting images larger than 2000px crashes session — images are now downsized on paste, and oversized images in history are auto-removed with retry." Upstream v2.1.121 fixed "Unbounded memory growth when processing many images (multi-GB RSS)."

- [ ] **Step 1: Verify current image size limits**

Read `src/constants/apiLimits.ts` — confirm `IMAGE_MAX_WIDTH` and `IMAGE_MAX_HEIGHT` are both 2000.

- [ ] **Step 2: Check image paste handling in attachments.ts**

Search `src/utils/attachments.ts` for the image paste handling code. Find where pasted images enter the system and ensure `maybeResizeAndDownsampleImageBlock` is called before the image enters the message queue.

- [ ] **Step 3: Add automatic downsample for pasted images >2000px**

In the image paste path in `attachments.ts`, find where image blocks are created from pastes and ensure the resize function is called. If it's not already calling `maybeResizeAndDownsampleImageBlock`, add:

```typescript
import { maybeResizeAndDownsampleImageBlock } from './imageResizer.js'

// In the paste handler, after creating the image block:
const resized = await maybeResizeAndDownsampleImageBlock(imageBlock)
```

- [ ] **Step 4: Add max image count per request guard**

In `src/constants/apiLimits.ts`, verify `API_MAX_MEDIA_PER_REQUEST = 100`. Add a client-side check in attachments.ts to warn if too many images are being pasted at once.

- [ ] **Step 5: Build and verify**

```bash
bun run build
```

- [ ] **Step 6: Commit**

```bash
git add src/constants/apiLimits.ts src/utils/attachments.ts src/utils/imageResizer.ts
git commit -m "fix: downsample pasted images >2000px, add media count guard

Sync from upstream v2.1.121 + v2.1.126: prevents session crashes from
oversized image pastes and unbounded memory growth.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 4: MCP tool call timeout isolation

**Files:**
- Modify: `src/services/mcp/client.ts` (MCP tool call timeout handling)

**Background:** Upstream v2.1.113 fixed "MCP concurrent-call timeout handling where a message for one tool call could silently disarm another call's watchdog." This is a race condition where concurrent MCP tool calls share a timeout mechanism.

- [ ] **Step 1: Find MCP tool call timeout code in client.ts**

Search `src/services/mcp/client.ts` for timeout or AbortController usage patterns in the tool call execution path. Look for any shared timeout state.

- [ ] **Step 2: Ensure each MCP tool call has its own AbortController**

The fix: Each concurrent MCP `callTool` invocation must create its own `AbortController` and timeout timer. Review the code and if a shared controller is found, refactor to per-call controllers:

```typescript
// Pattern to verify/implement for each callTool invocation:
const abortController = createAbortController()
const timeoutId = setTimeout(() => {
  abortController.abort()
}, MCP_TOOL_TIMEOUT_MS)

try {
  const result = await mcpClient.callTool(
    { name: toolName, arguments: args },
    { signal: abortController.signal }
  )
} finally {
  clearTimeout(timeoutId)
}
```

- [ ] **Step 3: Build and verify**

```bash
bun run build
```

- [ ] **Step 4: Commit**

```bash
git add src/services/mcp/client.ts
git commit -m "fix: isolate MCP tool call timeouts to prevent cross-call interference

Sync from upstream v2.1.113: each concurrent MCP tool call now has its
own abort controller, preventing one call from disarming another's watchdog.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 5: MCP server disconnect — fail fast instead of hanging

**Files:**
- Modify: `src/services/mcp/client.ts`

**Background:** Upstream v2.1.110 fixed "MCP tool calls hanging indefinitely when the server connection drops mid-response on SSE/HTTP transports." The fix should detect transport closure and abort pending tool calls.

- [ ] **Step 1: Find MCP transport connection handling**

Search `src/services/mcp/client.ts` for transport setup (SSE, HTTP, stdio). Find where transport `onclose` or `onerror` events are handled.

- [ ] **Step 2: Add transport close handler that aborts pending calls**

When the transport closes, abort all pending tool calls for that server:

```typescript
transport.onclose = () => {
  logMCPError(`MCP transport closed for server ${serverName}`)
  // Abort all pending tool calls for this server
  for (const [callId, pending] of pendingToolCalls) {
    if (pending.serverName === serverName) {
      pending.abortController.abort()
    }
  }
}
```

- [ ] **Step 3: Build and verify**

```bash
bun run build
```

- [ ] **Step 4: Commit**

```bash
git add src/services/mcp/client.ts
git commit -m "fix: abort pending MCP tool calls on transport disconnect

Sync from upstream v2.1.110: prevents indefinite hangs when MCP server
connection drops mid-response on SSE/HTTP transports.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 6: Session resume — skip corrupted transcript lines

**Files:**
- Modify: `src/utils/sessionStorage.ts`

**Background:** Upstream v2.1.121 fixed "--resume failing on large sessions when transcript lines are corrupted by unclean shutdown — corrupted lines are now skipped." MiniClaude likely still crashes when encountering corrupted JSONL lines.

- [ ] **Step 1: Find the JSONL parsing code in sessionStorage.ts**

Read `src/utils/sessionStorage.ts` and find where `parseJSONL` or similar is used to parse session transcript files.

- [ ] **Step 2: Wrap JSONL parsing in try-catch per line**

```typescript
// Before (line-by-line JSON.parse without error handling):
const entries = lines.map(line => JSON.parse(line))

// After (skip corrupted lines):
const entries: Entry[] = []
for (let i = 0; i < lines.length; i++) {
  try {
    entries.push(JSON.parse(lines[i]))
  } catch (e) {
    logForDebugging(
      `Skipping corrupted transcript line ${i} in session ${sessionId}: ${(e as Error).message}`
    )
    // Continue parsing remaining lines — don't lose the whole session
  }
}
```

- [ ] **Step 3: Also fix emoji splitting in --resume (v2.1.132)**

Upstream v2.1.132 fixed "--resume failing due to tool error truncation splitting emoji." Check if there's string slicing in resume logic that could split multi-byte characters:

```typescript
// Use string iterator or grapheme-aware slicing instead of .slice() on raw bytes
// Example: replace content.slice(0, n) with [...content].slice(0, n).join('')
// or use Intl.Segmenter for grapheme clusters.
```

- [ ] **Step 4: Build and verify**

```bash
bun run build
```

- [ ] **Step 5: Commit**

```bash
git add src/utils/sessionStorage.ts
git commit -m "fix: skip corrupted transcript lines on resume, handle emoji splitting

Sync from upstream v2.1.121 + v2.1.132: corrupted JSONL lines from
unclean shutdown are now skipped instead of crashing --resume.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 7: Session resume — fix path with underscores in project name

**Files:**
- Modify: `src/utils/sessionStorage.ts`
- Modify: `src/commands/resume/` (or wherever --resume session matching lives)

**Background:** Upstream v2.1.136 fixed "--resume / --continue not finding sessions when project path contains underscores."

- [ ] **Step 1: Find session-matching logic**

Search for the session ID / path matching logic used by `--resume`. Look for regex or string matching that might not handle underscores correctly.

- [ ] **Step 2: Fix the matching to handle underscores**

If the matching uses a regex that treats underscores as word boundaries, fix it:

```typescript
// If the pattern uses \b (word boundary) which breaks on underscores:
// Before: new RegExp(`\\b${escapedPath}\\b`)
// After: new RegExp(`(?:^|\\s)${escapedPath}(?:\\s|$)`)
```

Or if it's using a glob pattern, ensure underscores are properly escaped.

- [ ] **Step 3: Build and verify**

```bash
bun run build
```

- [ ] **Step 4: Commit**

```bash
git add src/utils/sessionStorage.ts
git commit -m "fix: --resume now finds sessions when project path contains underscores

Sync from upstream v2.1.136.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 8: Extended thinking — handle edited thinking blocks after tool calls

**Files:**
- Modify: `src/utils/messages.ts` (message normalization for API)
- Modify: `src/services/api/claude.ts` (stream event handling)

**Background:** Upstream v2.1.136 fixed "Extended thinking in tool call after edited thinking block returns API 400." The issue is likely in how thinking blocks are re-serialized for the API after being edited/truncated during tool call processing.

- [ ] **Step 1: Find thinking block serialization in messages.ts**

Read `src/utils/messages.ts` and find `normalizeMessagesForAPI` or similar functions that prepare messages before sending to the API. Look for thinking block handling.

- [ ] **Step 2: Ensure thinking blocks retain required fields**

Verify that when thinking blocks are serialized back to API format, they include all required fields (signature, thinking text). If editing/truncation is removing the signature, restore it:

```typescript
// When serializing a thinking block back to API format:
if (block.type === 'thinking') {
  // Signature is required — never strip it
  if (!block.signature || block.signature.trim() === '') {
    // If signature was lost, this thinking block can't be sent back to API
    // Drop it or replace with a placeholder
    logForDebugging('Thinking block missing signature, dropping from API message')
    continue // Skip this block
  }
}
```

- [ ] **Step 3: Build and verify**

```bash
bun run build
```

- [ ] **Step 4: Commit**

```bash
git add src/utils/messages.ts
git commit -m "fix: handle edited thinking blocks to prevent API 400 errors

Sync from upstream v2.1.136: thinking blocks with missing or edited
signatures after tool calls are now properly handled.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 9: Plan mode — prevent Edit allow rules from bypassing plan mode file write block

**Files:**
- Modify: `src/tools/EnterPlanModeTool/EnterPlanModeTool.ts`
- Modify: `src/tools/FileEditTool/` (permission check logic)
- Modify: `src/tools/FileWriteTool/` (permission check logic)

**Background:** Upstream v2.1.136 fixed "Plan mode not blocking file writes when a matching Edit(...) allow rule exists." Plan mode should prevent the model from writing files even if there's an allow rule matching the Edit tool — the whole point of plan mode is to discuss before writing.

- [ ] **Step 1: Find plan mode state check in Edit/Write tools**

Search `src/tools/FileEditTool/` and `src/tools/FileWriteTool/` for permission checking logic. Look for where `isPlanMode` or plan-related state is checked.

- [ ] **Step 2: Add plan mode check that overrides allow rules**

In the permission check for Edit and Write tools, add a plan mode gate that runs BEFORE the allow rule check:

```typescript
// In FileEditTool and FileWriteTool permission checks:
if (isPlanModeActive()) {
  return {
    behavior: 'deny',
    message: 'File edits are blocked in plan mode. Exit plan mode to apply changes.',
  }
}
```

This check must come BEFORE the `getRuleByContentsForTool` allow rule check.

- [ ] **Step 3: Verify the check also applies to NotebookEditTool and Bash destructive commands**

Check `src/tools/NotebookEditTool/` and `src/tools/BashTool/` for similar bypass potential.

- [ ] **Step 4: Build and verify**

```bash
bun run build
```

- [ ] **Step 5: Commit**

```bash
git add src/tools/EnterPlanModeTool/EnterPlanModeTool.ts src/tools/FileEditTool/ src/tools/FileWriteTool/
git commit -m "fix: plan mode now blocks file writes even with matching allow rules

Sync from upstream v2.1.136: plan mode permission check takes priority
over Edit/Write allow rules, preventing unintended file modifications.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 10: Bash tool — security: deny rules matching commands wrapped in env/sudo/watch

**Files:**
- Modify: `src/tools/BashTool/bashSecurity.ts`
- Modify: `src/tools/BashTool/bashPermissions.ts`

**Background:** Upstream v2.1.113 added security hardening: "Bash deny rules now match commands wrapped in env/sudo/watch/ionice/setsid and similar exec wrappers" and "Bash(find:*) allow rules no longer auto-approve find -exec/-delete."

- [ ] **Step 1: Read current command extraction logic in bashSecurity.ts**

Read `src/tools/BashTool/bashSecurity.ts` and find where the base command is extracted from the full command string for permission matching.

- [ ] **Step 2: Unwrap exec wrappers before permission matching**

Add unwrapping logic for `env`, `sudo`, `watch`, `ionice`, `setsid`, `nice`, `nohup`, `chroot`, `flock`:

```typescript
const EXEC_WRAPPERS = ['env', 'sudo', 'watch', 'ionice', 'setsid', 'nice', 'nohup', 'chroot', 'flock']

function unwrapCommand(command: string): string {
  let unwrapped = command.trim()
  for (const wrapper of EXEC_WRAPPERS) {
    // Match "wrapper [options] -- actual-command"
    const pattern = new RegExp(`^${wrapper}\\s+(?:-[\\w-]+\\s+)*\\s*(.+)$`, 'i')
    const match = unwrapped.match(pattern)
    if (match) {
      unwrapped = match[1]
    }
  }
  return unwrapped
}
```

- [ ] **Step 3: Block find -exec/-delete in allow rules**

In `bashPermissions.ts`, when matching `Bash(find:*)` allow rules, add a check that rejects commands containing `-exec` or `-delete`:

```typescript
if (toolName === BASH_TOOL_NAME && ruleContent.startsWith('find:') && ruleContent.includes('*')) {
  const command = input.command || ''
  if (command.includes('-exec') || command.includes('-delete')) {
    return { behavior: 'ask', message: 'find -exec/-delete requires explicit permission' }
  }
}
```

- [ ] **Step 4: Also treat macOS /private/etc, /private/var, /private/tmp as dangerous**

In bashSecurity.ts, add these macOS symlink equivalents to the dangerous paths list.

- [ ] **Step 5: Build and verify**

```bash
bun run build
```

- [ ] **Step 6: Commit**

```bash
git add src/tools/BashTool/
git commit -m "fix: unwrap exec wrappers for deny rules, block find -exec/-delete in allow rules

Sync from upstream v2.1.113: security hardening for Bash tool permission
matching — commands wrapped in env/sudo/watch/etc. are now unwrapped
before deny rule matching.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 11: CJK/Unicode rendering — fix garbled text on Windows

**Files:**
- Modify: `src/ink/termio/` (terminal I/O)
- Modify: `src/ink/layout/` (text layout/wrapping)

**Background:** Upstream v2.1.126 fixed "Japanese/Korean/Chinese text showing as garbled characters in flicker-free mode on Windows." Upstream v2.1.116 fixed "Devanagari and other Indic scripts showing column-alignment errors in terminal UI."

- [ ] **Step 1: Find text width calculation for CJK characters**

Search `src/ink/` for text width calculation — likely `get-east-asian-width` package usage or custom width calculation.

- [ ] **Step 2: Verify east-asian-width handling**

Ensure the code uses proper east Asian width detection. On Windows terminals, CJK characters may report incorrect widths. The fix likely involves:

```typescript
import { eastAsianWidthType } from 'get-east-asian-width'

// When calculating display width of a character:
function charWidth(char: string): number {
  const type = eastAsianWidthType(char)
  // F, W → 2 (fullwidth), others → 1
  return type === 'F' || type === 'W' ? 2 : 1
}
```

- [ ] **Step 3: Test with CJK characters in Windows Terminal**

After building, manually test that Chinese characters render correctly in the flicker-free mode (if available) and in normal mode.

- [ ] **Step 4: Commit**

```bash
git add src/ink/
git commit -m "fix: correct CJK character width calculation for Windows terminals

Sync from upstream v2.1.116 + v2.1.126: fixes garbled CJK text in
flicker-free mode and column alignment for wide characters.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 12: Windows — PowerShell as default shell when enabled

**Files:**
- Modify: `src/utils/shell/` (shell selection logic)

**Background:** Upstream v2.1.126 notes: "Windows: Claude now prefers PowerShell as primary shell when PowerShell tool is enabled, rather than defaulting to Bash." MiniClaude on Windows currently defaults to Bash (via Git Bash/MSYS2).

- [ ] **Step 1: Find shell selection logic**

Read `src/utils/shell/` directory and find where the default shell is determined on Windows.

- [ ] **Step 2: Prefer PowerShell when available and enabled**

```typescript
function getDefaultShell(): 'bash' | 'powershell' {
  if (process.platform === 'win32') {
    // Check if PowerShell is available and the PowerShell tool is enabled
    const pwshEnabled = !isEnvDefinedFalsy('CLAUDE_CODE_USE_POWERSHELL_TOOL')
    if (pwshEnabled && hasPowerShell()) {
      return 'powershell'
    }
    // Fall back to bash (Git Bash / MSYS2)
    return 'bash'
  }
  return 'bash'
}
```

- [ ] **Step 3: Build and verify**

```bash
bun run build
```

- [ ] **Step 4: Commit**

```bash
git add src/utils/shell/
git commit -m "feat: prefer PowerShell on Windows when enabled

Sync from upstream v2.1.126.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 13: Final integration test

**Files:**
- All modified files (verification only)

**Background:** Ensure all fixes work together without regressions.

- [ ] **Step 1: Build from clean**

```bash
bun run build
```

Expected: Build succeeds.

- [ ] **Step 2: Test basic CLI startup**

```bash
./cli --help
```

Expected: Help output displays correctly.

- [ ] **Step 3: Run in dev mode and test a simple chat**

```bash
bun run dev
```
Type: "Hello, what is 1+1?"
Expected: Get a response.

- [ ] **Step 4: Test --resume**

```bash
./cli --resume
```
Expected: Session picker opens without crash.

- [ ] **Step 5: Test MCP tool**

If you have an MCP server configured, verify it connects and tools are available.

- [ ] **Step 6: Commit if any final adjustments needed**

```bash
git add -A
git commit -m "chore: integration testing after upstream sync

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Summary of Synced Fixes

| Task | Upstream Version | Description |
|------|-----------------|-------------|
| 1 | v2.1.126 | Stream idle watchdog enabled by default |
| 2 | v2.1.105+117 | WebFetch HTML truncation + strip style/script |
| 3 | v2.1.121+126 | Image downsample on paste, memory guard |
| 4 | v2.1.113 | MCP tool call timeout isolation |
| 5 | v2.1.110 | MCP disconnect fails fast |
| 6 | v2.1.121+132 | Corrupted transcript + emoji handling on resume |
| 7 | v2.1.136 | --resume with underscores in path |
| 8 | v2.1.136 | Extended thinking block serialization |
| 9 | v2.1.136 | Plan mode file write bypass |
| 10 | v2.1.113 | Bash security: exec wrapper unwrapping |
| 11 | v2.1.116+126 | CJK rendering on Windows |
| 12 | v2.1.126 | PowerShell as default on Windows |
| 13 | — | Integration test |
