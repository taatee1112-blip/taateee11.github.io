@echo off
chcp 65001 >nul
title WMS PRO - Warehouse Server
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
