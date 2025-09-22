import express from 'express';
import { openaiService } from '../services/openai';
import { validateQuery, sanitizeQuery } from '../utils/validation';

const router: express.Router = express.Router();

interface QueryRequest {
  query: string;
}

interface QueryResponse {
  result: string;
  executionTime: number;
  timestamp: string;
}

// POST /api/query - Process natural language queries
router.post('/query', async (req: express.Request<{}, QueryResponse, QueryRequest>, res: express.Response<QueryResponse>) => {
  const startTime = Date.now();
  
  try {
    const { query } = req.body;

    // Validate input
    const validation = validateQuery(query);
    if (!validation.isValid) {
      return res.status(400).json({
        result: `Error: ${validation.error}`,
        executionTime: Date.now() - startTime,
        timestamp: new Date().toISOString(),
      } as QueryResponse);
    }

    // Sanitize and process query
    const sanitizedQuery = sanitizeQuery(query);
    const result = await openaiService.processQuery(sanitizedQuery);

    const executionTime = Date.now() - startTime;

    res.json({
      result,
      executionTime,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Query processing error:', error);
    
    const executionTime = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';

    res.status(500).json({
      result: `Error: ${errorMessage}`,
      executionTime,
      timestamp: new Date().toISOString(),
    });
  }
});

// GET /api/query - Get API information
router.get('/query', (req, res) => {
  res.json({
    message: 'ChainQuery API - Natural Language Blockchain Query Processor',
    method: 'POST',
    endpoint: '/api/query',
    body: {
      query: 'string (required) - Natural language query about blockchain data'
    },
    example: {
      query: 'Show me the latest 10 blocks'
    },
    response: {
      result: 'string - AI processed response',
      executionTime: 'number - Processing time in milliseconds',
      timestamp: 'string - ISO timestamp'
    }
  });
});

export default router;
