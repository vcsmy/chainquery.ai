# Contributing to ChainQuery AI

Thank you for your interest in contributing to ChainQuery AI! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Process](#contributing-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+
- Git

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/chainquery-ai.git
   cd chainquery-ai
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp apps/backend/.env.example apps/backend/.env
   # Edit .env with your configuration
   ```

4. **Run Development Servers**
   ```bash
   pnpm dev
   ```

5. **Run Tests**
   ```bash
   pnpm test
   ```

## Contributing Process

### 1. Issue Creation

- Check existing issues before creating new ones
- Use appropriate issue templates
- Provide clear descriptions and reproduction steps
- Add relevant labels and milestones

### 2. Branch Strategy

- Create feature branches from `develop`
- Use descriptive branch names: `feature/add-query-caching`, `fix/api-error-handling`
- Keep branches focused and atomic

### 3. Development Workflow

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards

3. Write/update tests:
   ```bash
   pnpm test
   ```

4. Ensure code quality:
   ```bash
   pnpm lint
   pnpm type-check
   ```

5. Commit your changes:
   ```bash
   git commit -m "feat: add new query caching mechanism"
   ```

6. Push and create a Pull Request

### 4. Pull Request Guidelines

- Fill out the PR template completely
- Link related issues
- Ensure CI checks pass
- Request reviews from maintainers
- Address review feedback promptly

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Prefer functional programming patterns

### React Components

- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow component composition patterns
- Use TailwindCSS for styling

### Backend Code

- Use Express.js best practices
- Implement proper error handling
- Add input validation
- Use proper HTTP status codes

### Git Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer(s)]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
- `feat(api): add blockchain query endpoint`
- `fix(ui): resolve loading state issue`
- `docs: update installation instructions`

## Testing Guidelines

### Frontend Testing

- Use Vitest and React Testing Library
- Write component tests for user interactions
- Mock external dependencies
- Aim for >80% code coverage

### Backend Testing

- Use Jest for unit and integration tests
- Test API endpoints with supertest
- Mock external services
- Test error scenarios

### Test Structure

```typescript
describe('Component/Function Name', () => {
  beforeEach(() => {
    // Setup
  });

  it('should do something specific', () => {
    // Test implementation
  });
});
```

## Documentation

### Code Documentation

- Add JSDoc comments for public APIs
- Include usage examples
- Document complex algorithms
- Update README for significant changes

### API Documentation

- Document all endpoints
- Include request/response examples
- Document error cases
- Keep OpenAPI specs updated

## Project Structure

```
chainquery-ai/
├── apps/
│   ├── frontend/          # React application
│   └── backend/           # Express API server
├── packages/
│   ├── query-engine/      # Core query processing
│   └── sdk/              # Client SDK
├── .github/              # GitHub templates and workflows
├── docs/                 # Documentation
└── [config files]       # Root configuration
```

## Release Process

1. Update version numbers
2. Update CHANGELOG.md
3. Create release branch
4. Test thoroughly
5. Create GitHub release
6. Deploy to production

## Getting Help

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Discord**: Real-time chat (link in README)

### Mentorship

New contributors can:
- Look for `good first issue` labels
- Ask questions in discussions
- Request code reviews from maintainers

## Recognition

Contributors will be:
- Added to AUTHORS.md
- Mentioned in release notes
- Eligible for contributor badges

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to ChainQuery AI! 🚀
