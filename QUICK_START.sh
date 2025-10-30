#!/bin/bash

echo "======================================"
echo "  IDURAR ERP/CRM - Quick Start"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Installing Backend Dependencies...${NC}"
cd /workspace/backend
npm install

echo ""
echo -e "${BLUE}📦 Installing Frontend Dependencies...${NC}"
cd /workspace/frontend
npm install

echo ""
echo -e "${GREEN}✅ Installation Complete!${NC}"
echo ""
echo -e "${YELLOW}To start the application:${NC}"
echo ""
echo "1. Start Backend:"
echo "   cd /workspace/backend"
echo "   npm start"
echo ""
echo "2. Start Frontend (in another terminal):"
echo "   cd /workspace/frontend"
echo "   npm run dev"
echo ""
echo "3. Open browser to: http://localhost:5173"
echo ""
echo -e "${GREEN}📚 Documentation:${NC}"
echo "   - NEW_MODULES_SUMMARY.md - Complete overview of all modules"
echo "   - IMPLEMENTATION_CHECKLIST.md - Testing checklist"
echo ""
echo -e "${GREEN}✨ New Modules Added:${NC}"
echo "   1. People"
echo "   2. Company"
echo "   3. Lead"
echo "   4. Product"
echo "   5. Product Category"
echo "   6. Order"
echo "   7. Expense"
echo "   8. Expense Category"
echo "   9. Report"
echo "  10. API Key"
echo "  11. Currency"
echo "  12. Public Form"
echo "  13. Branch/Multi-company"
echo ""
echo "======================================"
