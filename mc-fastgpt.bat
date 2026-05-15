@echo off
chcp 65001 >nul
REM ========================================
REM   MiniClaude - FastGPT 内网环境
REM ========================================

REM 设置 UTF-8 编码环境
set PYTHONIOENCODING=utf-8
set NODE_OPTIONS=--no-warnings

REM 设置环境变量（通过代理访问 FastGPT）
set ANTHROPIC_AUTH_TOKEN=sk-1234
set ANTHROPIC_BASE_URL=http://localhost:4000
set ANTHROPIC_MODEL=qwen
set ANTHROPIC_DEFAULT_SONNET_MODEL=qwen
set ANTHROPIC_DEFAULT_HAIKU_MODEL=qwen
set ANTHROPIC_DEFAULT_OPUS_MODEL=qwen
set API_TIMEOUT_MS=3000000
set DISABLE_TELEMETRY=1
set CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1

echo ========================================
echo   启动 MiniClaude (FastGPT 内网)
echo ========================================
echo 模型: %ANTHROPIC_MODEL%
echo API: %ANTHROPIC_BASE_URL%
echo ========================================
echo 提示: 请确保 FastGPT 代理已启动
echo       python fastgpt_proxy.py
echo ========================================

REM 调用 PATH 中的 mc.exe（使用完整路径避免递归调用）
where mc.exe >nul 2>&1
if %errorlevel% equ 0 (
    for /f "tokens=*" %%i in ('where mc.exe ^| findstr /v "%~dp0"') do (
        "%%i" %*
        goto :eof
    )
)

REM 如果 PATH 中没有找到，使用本地的 cli.exe
"%~dp0cli.exe" %*
