/**
 * Analysis Service
 * 
 * Calls the API to analyze websites and generate lead generation strategies
 */

import { apiConfig } from '@/config/api';

export interface AnalysisResult {
  strategy: string;
  searchTerms: string[];
  message: string;
}

/**
 * Analyzes a website URL and returns search suggestions and contact ideas
 * @param url - The website URL to analyze
 * @param email - The user's email address
 * @returns Promise with analysis results
 */
export async function analyzeWebsite(
  url: string,
  email: string
): Promise<AnalysisResult> {
  const response = await fetch(`${apiConfig.apiUrl}/api/Analysis/website`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      url, 
      email 
    }),
  });

  if (!response.ok) {
    // Try to get error details from response body
    let errorMessage = `API error: ${response.status} ${response.statusText}`;
    try {
      const errorData = await response.json();
      if (errorData.message || errorData.error || errorData.title) {
        errorMessage = errorData.message || errorData.error || errorData.title;
      }
    } catch {
      // If response body is not JSON, use status text
      const text = await response.text().catch(() => '');
      if (text) {
        errorMessage = text;
      }
    }
    console.error('API Error Details:', {
      status: response.status,
      statusText: response.statusText,
      url: `${apiConfig.apiUrl}/api/Analysis/website`,
      requestBody: { url, email }
    });
    throw new Error(errorMessage);
  }

  const data = await response.json();
  
  // Handle both capitalized and camelCase property names from API
  const strategy = data.Strategy || data.strategy || '';
  const searchTerms = data.SearchTerms || data.searchTerms || [];
  const message = data.Message || data.message || '';
  
  // Validate that we have all required data
  if (!strategy || !message || !Array.isArray(searchTerms) || searchTerms.length === 0) {
    console.error('Invalid API response structure:', data);
    throw new Error('Invalid response from API: missing required fields');
  }
  
  return {
    strategy,
    searchTerms,
    message,
  };
}

