@echo off
title Radhe Design Studio - Local Server
echo.
echo  ╔═══════════════════════════════════════════════╗
echo  ║   RADHE DESIGN STUDIO - 360 Experience        ║
echo  ║   Starting local server...                     ║
echo  ╚═══════════════════════════════════════════════╝
echo.

cd /d "%~dp0"

:: Try to find an available port
set PORT=8360

echo  Starting server on http://localhost:%PORT%
echo  Opening 360 Studio in your browser...
echo.
echo  Press Ctrl+C to stop the server when done.
echo.

:: Open browser after a short delay
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:%PORT%/experience.html"

:: Start Python HTTP server
python -m http.server %PORT% --bind 127.0.0.1
