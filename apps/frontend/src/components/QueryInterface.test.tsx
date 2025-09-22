import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryInterface } from '../components/QueryInterface';

// Mock API module
vi.mock('../utils/api', () => ({
  apiClient: {
    query: vi.fn(),
  },
}));

import { apiClient } from '../utils/api';

describe('QueryInterface', () => {
  it('renders correctly', () => {
    render(<QueryInterface />);
    
    expect(screen.getByText('ChainQuery AI')).toBeInTheDocument();
    expect(screen.getByLabelText(/enter your query/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /execute query/i })).toBeInTheDocument();
  });

  it('displays placeholder text correctly', () => {
    render(<QueryInterface />);
    
    const input = screen.getByPlaceholderText(/show me the latest 10 blocks/i);
    expect(input).toBeInTheDocument();
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    render(<QueryInterface />);
    
    const input = screen.getByLabelText(/enter your query/i);
    await user.type(input, 'test query');
    
    expect(input).toHaveValue('test query');
  });

  it('submits query successfully', async () => {
    const mockResult = { success: true, data: 'Test response from API' };
    (apiClient.query as any).mockResolvedValue(mockResult);
    
    const user = userEvent.setup();
    render(<QueryInterface />);
    
    const input = screen.getByLabelText(/enter your query/i);
    const button = screen.getByRole('button', { name: /execute query/i });
    
    await user.type(input, 'test query');
    await user.click(button);
    
    expect(apiClient.query).toHaveBeenCalledWith('test query');
    
    await waitFor(() => {
      expect(screen.getByText('Test response from API')).toBeInTheDocument();
    });
  });

  it('handles API errors gracefully', async () => {
    const mockError = { success: false, error: 'API Error' };
    (apiClient.query as any).mockResolvedValue(mockError);
    
    const user = userEvent.setup();
    render(<QueryInterface />);
    
    const input = screen.getByLabelText(/enter your query/i);
    const button = screen.getByRole('button', { name: /execute query/i });
    
    await user.type(input, 'test query');
    await user.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('API Error')).toBeInTheDocument();
    });
  });

  it('disables submit button while loading', async () => {
    // Mock a delayed response
    (apiClient.query as any).mockImplementation(() => new Promise(resolve => 
      setTimeout(() => resolve({ success: true, data: 'Response' }), 100)
    ));
    
    const user = userEvent.setup();
    render(<QueryInterface />);
    
    const input = screen.getByLabelText(/enter your query/i);
    const button = screen.getByRole('button', { name: /execute query/i });
    
    await user.type(input, 'test query');
    await user.click(button);
    
    expect(button).toBeDisabled();
    expect(screen.getByText(/processing/i)).toBeInTheDocument();
  });

  it('can clear results', async () => {
    const mockResult = { success: true, data: 'Test response' };
    (apiClient.query as any).mockResolvedValue(mockResult);
    
    const user = userEvent.setup();
    render(<QueryInterface />);
    
    const input = screen.getByLabelText(/enter your query/i);
    const button = screen.getByRole('button', { name: /execute query/i });
    
    await user.type(input, 'test query');
    await user.click(button);
    
    await waitFor(() => {
      expect(screen.getByText('Test response')).toBeInTheDocument();
    });
    
    const clearButton = screen.getByRole('button', { name: /clear/i });
    await user.click(clearButton);
    
    expect(input).toHaveValue('');
  });
});
