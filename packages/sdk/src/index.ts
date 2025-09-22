import { QueryEngine, Query, QueryResult, QueryOptions } from '@chainquery-ai/query-engine';

export interface ChainQueryConfig {
  apiKey?: string;
  baseUrl?: string;
  timeout?: number;
  retries?: number;
}

export interface ChainData {
  blockNumber: number;
  blockHash: string;
  timestamp: string;
  transactions: Transaction[];
}

export interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: number;
}

export class ChainQuerySDK {
  private queryEngine: QueryEngine;
  private config: ChainQueryConfig;

  constructor(config: ChainQueryConfig = {}) {
    this.config = {
      baseUrl: 'http://localhost:3001',
      timeout: 30000,
      retries: 3,
      ...config,
    };
    
    this.queryEngine = new QueryEngine({
      timeout: this.config.timeout,
      retries: this.config.retries,
      cacheEnabled: true,
    });
  }

  async queryChainData(queryString: string, parameters?: Record<string, any>): Promise<QueryResult<ChainData>> {
    const query: Query = {
      id: this.generateQueryId(),
      sql: queryString,
      parameters,
      options: {
        timeout: this.config.timeout,
        retries: this.config.retries,
      },
    };

    return await this.queryEngine.executeQuery<ChainData>(query);
  }

  async getBlockData(blockNumber: number): Promise<QueryResult<ChainData>> {
    const queryString = 'SELECT * FROM blocks WHERE block_number = ?';
    return await this.queryChainData(queryString, { blockNumber });
  }

  async getTransactionsByAddress(address: string): Promise<QueryResult<Transaction[]>> {
    const queryString = 'SELECT * FROM transactions WHERE from_address = ? OR to_address = ?';
    return await this.queryEngine.executeQuery<Transaction[]>({
      id: this.generateQueryId(),
      sql: queryString,
      parameters: { address1: address, address2: address },
    });
  }

  async getLatestBlocks(limit: number = 10): Promise<QueryResult<ChainData[]>> {
    const queryString = 'SELECT * FROM blocks ORDER BY block_number DESC LIMIT ?';
    return await this.queryEngine.executeQuery<ChainData[]>({
      id: this.generateQueryId(),
      sql: queryString,
      parameters: { limit },
    });
  }

  getConfig(): ChainQueryConfig {
    return { ...this.config };
  }

  updateConfig(newConfig: Partial<ChainQueryConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  private generateQueryId(): string {
    return `query_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Export types and classes
export { QueryEngine } from '@chainquery-ai/query-engine';
export type { Query, QueryResult, QueryOptions } from '@chainquery-ai/query-engine';
export default ChainQuerySDK;
