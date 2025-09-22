// Mock environment variables
process.env.NODE_ENV = 'test';
// Remove any OpenAI API key to force test mode
delete process.env.OPENAI_API_KEY;
process.env.PORT = '3001';

// Mock console to reduce noise during tests
const mockFn = () => {};
global.console = {
  ...console,
  log: mockFn,
  info: mockFn,
  warn: mockFn,
  error: console.error, // Keep error for debugging
};
