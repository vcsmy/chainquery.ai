# 🚀 ChainQuery AI - Quick Start Guide

This monorepo contains a full-stack TypeScript application for natural language blockchain queries.

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0
- **OpenAI API Key** (optional for testing)

## ⚡ Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Set up Environment (Optional)
```bash
cd apps/backend
cp .env.example .env
# Edit .env and add your OpenAI API key
```

### 3. Start Development Servers
```bash
# From root directory
pnpm start

# OR manually:
# Terminal 1: Backend
pnpm backend:dev

# Terminal 2: Frontend  
pnpm frontend:dev
```

### 4. Access the Application
- **Frontend**: http://localhost:3000 (or next available port)
- **Backend API**: http://localhost:3001
- **API Docs**: http://localhost:3001/api/query

## 🏗️ Project Structure

```
chainquery-ai/
├── apps/
│   ├── frontend/          # React + Vite + TailwindCSS
│   └── backend/           # Node.js + Express + OpenAI
├── packages/
│   ├── query-engine/      # Core query processing
│   └── sdk/              # TypeScript SDK
└── package.json          # Workspace configuration
```

## 🧪 Testing

### Backend API Testing
```bash
# Health check
curl http://localhost:3001/health

# Test query (with test mode response)
curl -X POST http://localhost:3001/api/query \
  -H "Content-Type: application/json" \
  -d '{"query": "Show me the latest blocks"}'
```

### Frontend Testing
1. Open http://localhost:3000 (or shown port)
2. Enter a natural language query
3. Click "Execute Query"
4. See results in the panel below

## 🔧 Development Commands

```bash
# Install all dependencies
pnpm install

# Build all packages
pnpm build

# Start both servers
pnpm start

# Start individual services
pnpm frontend:dev   # React dev server
pnpm backend:dev    # Express server with hot reload

# Build for production
pnpm build

# Type checking
pnpm type-check

# Clean build artifacts
pnpm clean
```

## 🌟 Features

### Frontend
- ✅ Modern React with TypeScript
- ✅ TailwindCSS for beautiful UI
- ✅ Natural language input interface
- ✅ Real-time API integration
- ✅ Loading states and error handling
- ✅ Responsive design

### Backend
- ✅ Express.js with TypeScript
- ✅ OpenAI GPT-3.5-turbo integration
- ✅ CORS enabled for frontend
- ✅ Request validation and sanitization
- ✅ Test mode (works without OpenAI key)
- ✅ Comprehensive error handling

### Packages
- ✅ **Query Engine**: Blockchain query processing
- ✅ **SDK**: Client library with TypeScript
- ✅ **Workspace**: Shared dependencies

## 🎯 API Usage

### POST /api/query
```json
{
  "query": "Show me the latest 10 blocks"
}
```

**Response:**
```json
{
  "result": "AI-generated response about blockchain data...",
  "executionTime": 1250,
  "timestamp": "2025-09-21T..."
}
```

## 🚨 Test Mode

Without an OpenAI API key, the backend runs in **test mode**:
- ✅ All endpoints work normally
- ✅ API returns simulated responses
- ✅ Perfect for development and testing
- 💡 Add OpenAI key for real AI responses

## 🔑 OpenAI Setup

1. Get API key from [OpenAI Platform](https://platform.openai.com/)
2. Add to `apps/backend/.env`:
   ```
   OPENAI_API_KEY=your_key_here
   ```
3. Restart backend server

## 🎉 You're Ready!

The application is now running and ready for blockchain queries. Try asking:
- "Show me the latest 10 blocks"
- "Find transactions from address 0x123..."
- "What's the average gas price today?"

Happy querying! 🚀
