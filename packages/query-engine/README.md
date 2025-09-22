# Query Engine Package

Core query processing engine for blockchain data analysis in ChainQuery AI.

## Features

- **Type-safe query execution** - Full TypeScript support
- **Query management** - Store and retrieve queries
- **Result handling** - Standardized query results
- **Error handling** - Comprehensive error management
- **Performance tracking** - Execution time monitoring

## Installation

```bash
# In a workspace package
pnpm add @chainquery-ai/query-engine

# For development
pnpm add -D @chainquery-ai/query-engine
```

## Usage

### Basic Usage

```typescript
import { QueryEngine, Query } from '@chainquery-ai/query-engine';

const engine = new QueryEngine({
  timeout: 30000,
  retries: 3,
  cacheEnabled: true
});

const query: Query = {
  id: 'unique-query-id',
  sql: 'SELECT * FROM blocks WHERE block_number = ?',
  parameters: { blockNumber: 123456 }
};

const result = await engine.executeQuery(query);

if (result.success) {
  console.log('Query result:', result.data);
} else {
  console.error('Query failed:', result.error);
}
```

### Query Management

```typescript
// Store a query
const query = {
  id: 'get-latest-blocks',
  sql: 'SELECT * FROM blocks ORDER BY block_number DESC LIMIT 10'
};

await engine.executeQuery(query);

// Retrieve stored query
const storedQuery = engine.getQuery('get-latest-blocks');

// Get all queries
const allQueries = engine.getAllQueries();
```

## API Reference

### QueryEngine

Main class for executing and managing queries.

#### Constructor

```typescript
new QueryEngine(config?: QueryOptions)
```

#### Methods

- `executeQuery<T>(query: Query): Promise<QueryResult<T>>` - Execute a query
- `getQuery(id: string): Query | undefined` - Get a stored query
- `getAllQueries(): Query[]` - Get all stored queries

### Types

#### Query
```typescript
interface Query {
  id: string;
  sql: string;
  parameters?: Record<string, any>;
  options?: QueryOptions;
}
```

#### QueryResult
```typescript
interface QueryResult<T = any> {
  data: T;
  success: boolean;
  error?: string;
  executionTime: number;
  timestamp: string;
}
```

#### QueryOptions
```typescript
interface QueryOptions {
  timeout?: number;
  retries?: number;
  cacheEnabled?: boolean;
}
```

## Development

### Building

```bash
pnpm build
```

### Development Mode

```bash
pnpm dev
```

### Linting

```bash
pnpm lint
```

## License

Private - All rights reserved
