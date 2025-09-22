export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateQuery(query: unknown): ValidationResult {
  // Check if query exists
  if (query === undefined || query === null) {
    return { isValid: false, error: 'Query is required' };
  }

  // Check if query is a string
  if (typeof query !== 'string') {
    return { isValid: false, error: 'Query must be a string' };
  }

  // Check if query is not empty
  if (query.trim().length === 0) {
    return { isValid: false, error: 'Query cannot be empty' };
  }

  // Check length limit
  if (query.length > 1000) {
    return { isValid: false, error: 'Query is too long (maximum 1000 characters)' };
  }

  // Check for potentially harmful content
  const harmfulPatterns = [
    /drop\s+table/i,
    /delete\s+from/i,
    /truncate/i,
    /alter\s+table/i,
    /create\s+table/i,
    /insert\s+into/i,
    /update\s+.*set/i,
  ];

  for (const pattern of harmfulPatterns) {
    if (pattern.test(query)) {
      return { isValid: false, error: 'Query contains potentially harmful content' };
    }
  }

  return { isValid: true };
}

export function sanitizeQuery(query: string): string {
  return query
    .trim()
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .substring(0, 1000); // Ensure max length
}
