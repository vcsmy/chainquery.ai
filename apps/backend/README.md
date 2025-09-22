# Backend Application

Node.js + Express + TypeScript backend API for ChainQuery AI platform.

## Technology Stack

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe development
- **tsx** - TypeScript execution for development
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## Getting Started

### Development

```bash
# From project root
pnpm backend:dev

# Or from this directory
pnpm dev
```

The server will start on `http://localhost:3001`

### Building

```bash
# From project root
pnpm backend:build

# Or from this directory
pnpm build
```

### Production

```bash
pnpm start
```

## Project Structure

```
src/
├── routes/           # API route handlers
├── middleware/       # Express middleware
├── services/         # Business logic services
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
└── index.ts         # Server entry point
```

## API Endpoints

### Health Check
- `GET /` - Basic server info
- `GET /health` - Health check endpoint

### API v1
- `GET /api/v1/status` - API status

## Environment Variables

Copy `.env.example` to `.env` and configure:

```
NODE_ENV=development
PORT=3001
API_VERSION=v1
```

## Features

- Express server with TypeScript
- Security middleware (Helmet, CORS)
- Error handling middleware
- Environment configuration
- Integration with ChainQuery AI packages

## Scripts

- `pnpm dev` - Start development server with watch mode
- `pnpm build` - Build TypeScript to JavaScript
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Development

The server uses `tsx` for development with hot reloading. Changes to TypeScript files will automatically restart the server.
