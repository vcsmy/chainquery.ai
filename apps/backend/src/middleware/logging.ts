import express from 'express';

export function requestLogger(req: express.Request, res: express.Response, next: express.NextFunction) {
  const start = Date.now();
  const { method, url, ip } = req;
  
  console.log(`📨 ${method} ${url} - ${ip || 'unknown'}`);
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const { statusCode } = res;
    
    const statusEmoji = statusCode >= 200 && statusCode < 300 ? '✅' : 
                       statusCode >= 400 && statusCode < 500 ? '⚠️' : '❌';
    
    console.log(`${statusEmoji} ${method} ${url} - ${statusCode} - ${duration}ms`);
  });
  
  next();
}

export function errorLogger(err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
  console.error(`❌ Error in ${req.method} ${req.url}:`, err.message);
  next(err);
}
