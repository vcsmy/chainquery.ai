import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import { requestLogger, errorLogger } from './middleware/logging';

// Load environment variables
dotenv.config();

const app: express.Application = express();
const port = process.env.PORT || 3001;

// CORS configuration for frontend access
const corsOptions = {
  origin: [
    'http://localhost:3000',  // Frontend development server
    'http://127.0.0.1:3000',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Middleware
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(requestLogger);

// API Routes
app.use('/api', apiRoutes);

// Health and Info Routes
app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ 
    message: 'ChainQuery AI Backend API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/health',
      api: '/api/query'
    }
  });
});

app.get('/health', (req: express.Request, res: express.Response) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Legacy API route for backward compatibility
app.get('/api/v1/status', (req: express.Request, res: express.Response) => {
  res.json({
    api: 'ChainQuery AI API',
    version: 'v1',
    status: 'active'
  });
});

// Error handling middleware
app.use(errorLogger);
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server Error:', err.stack);
  
  // Handle specific error types
  if (err.message.includes('OpenAI')) {
    return res.status(503).json({ 
      error: 'AI Service Unavailable',
      message: process.env.NODE_ENV === 'development' ? err.message : 'AI service is temporarily unavailable'
    });
  }

  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req: express.Request, res: express.Response) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl,
    availableEndpoints: [
      'GET /',
      'GET /health',
      'GET /api/query',
      'POST /api/query'
    ]
  });
});

// Initialize server
const startServer = () => {
  try {
    // Warn about missing OpenAI key but don't exit
    if (!process.env.OPENAI_API_KEY) {
      console.log('⚠️  OPENAI_API_KEY not found - running in TEST MODE');
      console.log('💡 Add your OpenAI API key to .env for full functionality');
    }

    app.listen(port, () => {
      console.log(`🚀 ChainQuery AI Backend server running on port ${port}`);
      console.log(`📡 API available at http://localhost:${port}`);
      console.log(`🔗 Query endpoint: http://localhost:${port}/api/query`);
      console.log(`🌐 Frontend CORS enabled for: http://localhost:3000`);
      console.log(`✅ OpenAI integration configured`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
