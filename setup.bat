@echo off
REM Cothú Studio Quick Setup Script (Windows)
REM This script helps you get started with the project

echo 🎨 Welcome to Cothú Studio Setup!
echo ==================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo ✅ npm version:
npm --version
echo.

echo 🔐 Cal.com Configuration
echo ========================
set /p cal_username="Enter your Cal.com username: "

if "%cal_username%"=="" (
    echo ⚠️  No Cal.com username provided. You can add it later.
) else (
    echo ✅ Cal.com username: %cal_username%
    echo.
    echo Note: You'll need to manually update these files with your username:
    echo   1. src/components/art-therapy-booking.tsx (eventTypes object)
    echo   2. src/components/navigation.tsx (Book Now button href)
)

echo.
echo 📦 Installing Dependencies
echo ==========================
call npm install

if errorlevel 1 (
    echo ❌ npm install failed!
    pause
    exit /b 1
)

echo.
echo ✅ Installation complete!
echo.
echo 🚀 Next Steps:
echo ==============
echo 1. Update Cal.com username in the files mentioned above
echo 2. Start development server: npm run dev
echo 3. Open http://localhost:3000 in your browser
echo 4. Visit http://localhost:3000/booking to test the booking system
echo.
echo 📚 Documentation:
echo ====================
echo - README.md - Project overview
echo - CAL_COM_SETUP.md - Detailed Cal.com setup guide
echo - IMPLEMENTATION_CHECKLIST.md - Complete launch checklist
echo.
echo 🎉 Happy creating!
echo.
pause
