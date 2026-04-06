@echo off
chcp 65001 >nul
echo ========================================
echo   MiniClaude Startup
echo ========================================
echo.

REM Try to find Bun in PATH
where bun >nul 2>&1
if %errorlevel% equ 0 (
    echo [INFO] Found Bun in PATH
    set BUN_CMD=bun
) else (
    REM Try default Bun installation path
    set BUN_PATH=%USERPROFILE%\.bun\bin\bun.exe
    if exist "!BUN_PATH!" (
        echo [INFO] Found Bun at: !BUN_PATH!
        set BUN_CMD=!BUN_PATH!
    ) else (
        echo [ERROR] Bun not found. Please install Bun first:
        echo https://bun.sh/
        pause
        exit /b 1
    )
)

echo [INFO] Loading configuration...
echo [INFO] Starting MiniClaude...
echo.

REM Start project with .env file
"%BUN_CMD%" --env-file=.env run dev

pause
