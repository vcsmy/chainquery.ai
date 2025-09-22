# ChainQuery AI SDK

Client SDK for interacting with ChainQuery AI services and blockchain data.

## Features

- **Type-safe blockchain queries** - Full TypeScript support
- **Built-in query engine** - Powered by @chainquery-ai/query-engine
- **Blockchain data models** - Predefined interfaces for chain data
- **Configurable client** - Flexible configuration options
- **Promise-based API** - Modern async/await support

## Installation

```bash
# In a workspace package
pnpm add @chainquery-ai/sdk

# For development
pnpm add -D @chainquery-ai/sdk
```

## Usage

### Basic Setup

```typescript
import ChainQuerySDK from '@chainquery-ai/sdk';

const client = new ChainQuerySDK({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.chainquery.ai',
  timeout: 30000,
  retries: 3
});
```

### Querying Blockchain Data

```typescript
// Custom query
const result = await client.queryChainData(
  'SELECT * FROM transactions WHERE block_number = ?',
  { blockNumber: 123456 }
);

if (result.success) {
  console.log('Transactions:', result.data);
}

// Get specific block data
const blockData = await client.getBlockData(123456);

// Get transactions by address
const transactions = await client.getTransactionsByAddress('0x123...');

// Get latest blocks
const latestBlocks = await client.getLatestBlocks(10);
```

### Configuration Management

```typescript
// Get current config
const config = client.getConfig();

// Update config
client.updateConfig({
  timeout: 60000,
  retries: 5
});
```

## API Reference

### ChainQuerySDK

Main SDK class for interacting with ChainQuery AI services.

#### Constructor

```typescript
new ChainQuerySDK(config?: ChainQueryConfig)
```

#### Methods

- `queryChainData(queryString: string, parameters?: Record<string, any>): Promise<QueryResult<ChainData>>` - Execute custom queries
- `getBlockData(blockNumber: number): Promise<QueryResult<ChainData>>` - Get block data
- `getTransactionsByAddress(address: string): Promise<QueryResult<Transaction[]>>` - Get transactions for an address
- `getLatestBlocks(limit?: number): Promise<QueryResult<ChainData[]>>` - Get latest blocks
- `getConfig(): ChainQueryConfig` - Get current configuration
- `updateConfig(newConfig: Partial<ChainQueryConfig>): void` - Update configuration

### Types

#### ChainQueryConfig
```typescript
interface ChainQueryConfig {
  apiKey?: string;
  baseUrl?: string;
  timeout?: number;
  retries?: number;
}
```

#### ChainData
```typescript
interface ChainData {
  blockNumber: number;
  blockHash: string;
  timestamp: string;
  transactions: Transaction[];
}
```

#### Transaction
```typescript
interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: number;
}
```

## Examples

### React Component

```typescript
import React, { useState, useEffect } from 'react';
import ChainQuerySDK from '@chainquery-ai/sdk';

const client = new ChainQuerySDK();

export function BlockExplorer() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    async function loadBlocks() {
      const result = await client.getLatestBlocks(10);
      if (result.success) {
        setBlocks(result.data);
      }
    }
    loadBlocks();
  }, []);

  return (
    <div>
      {blocks.map(block => (
        <div key={block.blockNumber}>
          Block #{block.blockNumber}: {block.blockHash}
        </div>
      ))}
    </div>
  );
}
```

### Node.js Service

```typescript
import ChainQuerySDK from '@chainquery-ai/sdk';

const client = new ChainQuerySDK({
  baseUrl: process.env.CHAINQUERY_API_URL,
  apiKey: process.env.CHAINQUERY_API_KEY
});

export async function analyzeAddress(address: string) {
  const transactions = await client.getTransactionsByAddress(address);
  
  if (transactions.success) {
    return {
      address,
      transactionCount: transactions.data.length,
      transactions: transactions.data
    };
  }
  
  throw new Error(`Failed to analyze address: ${transactions.error}`);
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
