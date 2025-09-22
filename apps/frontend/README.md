# Frontend Application

React + TypeScript frontend application for ChainQuery AI platform.

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting

## Getting Started

### Development

```bash
# From project root
pnpm frontend:dev

# Or from this directory
pnpm dev
```

The application will start on `http://localhost:3000`

### Building

```bash
# From project root
pnpm frontend:build

# Or from this directory
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
├── App.tsx           # Main app component
├── main.tsx          # App entry point
└── index.css         # Global styles
```

## Features

- Modern React development with TypeScript
- Hot module replacement for fast development
- ESLint configuration for code quality
- Integration with ChainQuery AI packages

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Environment Variables

Create a `.env.local` file for local environment variables:

```
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=ChainQuery AI
```
