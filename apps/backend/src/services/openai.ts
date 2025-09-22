import OpenAI from 'openai';

export class OpenAIService {
  private client: OpenAI | null;
  private isTestMode: boolean;

  constructor() {
    this.isTestMode = !process.env.OPENAI_API_KEY;
    
    if (this.isTestMode) {
      console.log('⚠️  Running in TEST MODE - OpenAI API key not provided');
      this.client = null;
    } else {
      this.client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
    }
  }

  async processQuery(query: string): Promise<string> {
    if (this.isTestMode) {
      return `Test Mode Response: You asked about "${query}". This is a simulated response since no OpenAI API key is configured. To get real AI responses, please add your OpenAI API key to the .env file.`;
    }

    try {
      const completion = await this.client!.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are ChainQuery AI, an expert blockchain data analyst. Your role is to help users understand and query blockchain data using natural language.

When a user asks a question about blockchain data, provide:
1. A clear, informative response about what they're asking
2. If applicable, mention what type of blockchain query would be needed
3. Explain the data they would typically see in such queries
4. Be helpful and educational

Keep responses concise but informative. Focus on being helpful for blockchain data analysis.`
          },
          {
            role: "user",
            content: query
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      return completion.choices[0]?.message?.content || 'No response generated';
    } catch (error) {
      console.error('OpenAI API error:', error);
      
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          throw new Error('Invalid or missing OpenAI API key');
        }
        if (error.message.includes('quota')) {
          throw new Error('OpenAI API quota exceeded');
        }
        if (error.message.includes('rate limit')) {
          throw new Error('OpenAI API rate limit exceeded. Please try again later.');
        }
      }
      
      throw new Error('Failed to process query with AI');
    }
  }

  async generateSQLFromQuery(query: string): Promise<string> {
    if (this.isTestMode) {
      return `SELECT 'Test Mode - No OpenAI key configured' as message, '${query}' as original_query;`;
    }

    try {
      const completion = await this.client!.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a blockchain SQL expert. Convert natural language queries about blockchain data into SQL queries.

Available tables:
- blocks (block_number, block_hash, timestamp, gas_used, gas_limit, miner)
- transactions (hash, block_number, from_address, to_address, value, gas_used, gas_price)
- tokens (contract_address, name, symbol, decimals)
- token_transfers (transaction_hash, token_address, from_address, to_address, value)

Return only the SQL query, no explanations.`
          },
          {
            role: "user",
            content: query
          }
        ],
        max_tokens: 300,
        temperature: 0.1,
      });

      return completion.choices[0]?.message?.content || 'SELECT 1';
    } catch (error) {
      console.error('OpenAI SQL generation error:', error);
      throw new Error('Failed to generate SQL query');
    }
  }
}

export const openaiService = new OpenAIService();
