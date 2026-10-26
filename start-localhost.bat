@echo off
title Van Bazaar Localhost Server
echo ===================================================
echo  Starting Van Bazaar Local Server at http://localhost:8000/
echo ===================================================
start http://localhost:8000/
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
