#!/bin/bash

# Cothú Studio Quick Setup Script
# This script helps you get started with the project

echo "🎨 Welcome to Cothú Studio Setup!"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please download and install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Ask for Cal.com username
echo "🔐 Cal.com Configuration"
echo "========================"
read -p "Enter your Cal.com username: " cal_username

if [ -z "$cal_username" ]; then
    echo "⚠️  No Cal.com username provided. You can add it later."
else
    echo "✅ Cal.com username: $cal_username"
    echo ""
    echo "Note: You'll need to manually update these files with your username:"
    echo "  1. src/components/art-therapy-booking.tsx (eventTypes object)"
    echo "  2. src/components/navigation.tsx (Book Now button href)"
fi

echo ""
echo "📦 Installing Dependencies"
echo "=========================="
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed!"
    exit 1
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "🚀 Next Steps:"
echo "=============="
echo "1. Update Cal.com username in the files mentioned above"
echo "2. Start development server: npm run dev"
echo "3. Open http://localhost:3000 in your browser"
echo "4. Visit http://localhost:3000/booking to test the booking system"
echo ""
echo "📚 Documentation:"
echo "=================="
echo "- README.md - Project overview"
echo "- CAL_COM_SETUP.md - Detailed Cal.com setup guide"
echo "- IMPLEMENTATION_CHECKLIST.md - Complete launch checklist"
echo ""
echo "🎉 Happy creating!"
