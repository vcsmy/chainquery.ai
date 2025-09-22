import { OpenAIService } from '../openai';

describe('OpenAIService', () => {
  beforeAll(() => {
    // Ensure we're in test mode by removing any OpenAI API key
    delete process.env.OPENAI_API_KEY;
  });

  describe('Test Mode Operation', () => {
    it('should run in test mode when no API key is provided', async () => {
      const openaiService = new OpenAIService();
      const query = 'What is blockchain?';
      const result = await openaiService.processQuery(query);

      expect(result).toContain('Test Mode Response');
      expect(result).toContain(query);
    });

    it('should generate test SQL when no API key is provided', async () => {
      const openaiService = new OpenAIService();
      const query = 'Show me the latest blocks';
      const result = await openaiService.generateSQLFromQuery(query);

      expect(result).toContain('SELECT');
      expect(result).toContain('Test Mode');
      expect(result).toContain(query);
    });

    it('should handle various query types in test mode', async () => {
      const openaiService = new OpenAIService();
      const queries = [
        'Empty query: ',
        'Long query: ' + 'blockchain '.repeat(50),
        'Special chars: $100 > $50 & < $200'
      ];

      for (const query of queries) {
        const result = await openaiService.processQuery(query);
        expect(result).toContain('Test Mode Response');
        expect(result.length).toBeGreaterThan(0);
      }
    });
  });
});
