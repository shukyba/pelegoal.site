/**
 * Gets the API configuration based on the current hostname
 * No environment variables needed - detects automatically at runtime
 */
export const getApiConfig = () => {
  // Check if we're in browser (client-side)
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // Localhost detection
    if (hostname === 'localhost') {
      return {
        apiUrl: 'https://localhost:7085',
        isDevelopment: true,
      };
    }
  }
  
  // Production (default)
  return {
    apiUrl: 'https://pelegoal-api-c5f3djanh4evbhe9.westeurope-01.azurewebsites.net',
    isDevelopment: false,
  };
};

// Export a singleton instance
export const apiConfig = getApiConfig();

