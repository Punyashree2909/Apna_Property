@echo off
echo Starting Apna Property Application...

echo.
echo Starting Backend Server...
start "Backend" cmd /k "cd Backend && npm install && npm run dev"

echo Waiting for backend to start...
timeout /t 8 /nobreak > nul

echo.
echo Seeding sample data...
powershell -Command "try { Invoke-RestMethod -Uri 'http://localhost:5000/seed' } catch { Write-Host 'Seeding will be done manually' }"

echo.
echo Starting Frontend Development Server...
start "Frontend" cmd /k "npm install && npm run dev"

echo.
echo ========================================
echo   APNA PROPERTY APPLICATION READY!
echo ========================================
echo Frontend: http://localhost:5173
echo Backend API: http://localhost:5000
echo Seed Data: http://localhost:5000/seed
echo.
echo If properties don't show, visit the seed URL
echo.
pause