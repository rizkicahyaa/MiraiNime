import { AxiosError } from 'axios';

// Custom error types
export class JikanApiError extends Error {
  public status?: number;
  public statusText?: string;
  public isRateLimited: boolean;

  constructor(message: string, status?: number, statusText?: string, isRateLimited: boolean = false) {
    super(message);
    this.name = 'JikanApiError';
    this.status = status;
    this.statusText = statusText;
    this.isRateLimited = isRateLimited;
  }
}

// Error handling utility
export const handleApiError = (error: unknown): JikanApiError => {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const statusText = error.response?.statusText;
    const isRateLimited = status === 429;
    
    let message = 'An error occurred while fetching data';
    
    if (isRateLimited) {
      message = 'Rate limit exceeded. Please wait before making more requests.';
    } else if (status === 404) {
      message = 'The requested resource was not found.';
    } else if (status === 500) {
      message = 'Internal server error. Please try again later.';
    } else if (error.code === 'ECONNABORTED') {
      message = 'Request timeout. Please check your internet connection.';
    } else if (error.code === 'NETWORK_ERROR') {
      message = 'Network error. Please check your internet connection.';
    }
    
    return new JikanApiError(message, status, statusText, isRateLimited);
  }
  
  if (error instanceof Error) {
    return new JikanApiError(error.message);
  }
  
  return new JikanApiError('An unknown error occurred');
};

// Retry utility with exponential backoff
export const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  baseDelay: number = 1000
): Promise<T> => {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxAttempts) {
        throw lastError;
      }
      
      // Don't retry on rate limit errors
      if (error instanceof JikanApiError && error.isRateLimited) {
        throw error;
      }
      
      // Exponential backoff: delay = baseDelay * 2^(attempt-1)
      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError!;
};

// Debounce utility for search
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for API calls
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// URL parameter builder
export const buildSearchParams = (params: Record<string, any>): URLSearchParams => {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        value.forEach(item => searchParams.append(key, String(item)));
      } else {
        searchParams.append(key, String(value));
      }
    }
  });
  
  return searchParams;
};

// Format anime title for display
export const formatAnimeTitle = (anime: any): string => {
  return anime.title_english || anime.title || 'Unknown Title';
};

// Format anime score
export const formatAnimeScore = (score: number | null | undefined): string => {
  if (score === null || score === undefined) {
    return 'N/A';
  }
  return score.toFixed(1);
};

// Format anime duration
export const formatAnimeDuration = (duration: string): string => {
  if (!duration || duration === 'Unknown') {
    return 'Unknown';
  }
  
  // Extract number and unit from duration string
  const match = duration.match(/(\d+)\s*(\w+)/);
  if (match) {
    const [, number, unit] = match;
    return `${number} ${unit}`;
  }
  
  return duration;
};

// Format anime status
export const formatAnimeStatus = (status: string): string => {
  const statusMap: Record<string, string> = {
    'Currently Airing': 'Airing',
    'Finished Airing': 'Finished',
    'Not yet aired': 'Not Aired',
  };
  
  return statusMap[status] || status;
};

// Get anime season from date
export const getAnimeSeason = (date: string): string => {
  if (!date) return 'Unknown';
  
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  
  if (month >= 12 || month <= 2) return 'Winter';
  if (month >= 3 && month <= 5) return 'Spring';
  if (month >= 6 && month <= 8) return 'Summer';
  return 'Fall';
};

// Check if anime is currently airing
export const isAnimeAiring = (anime: any): boolean => {
  return anime.status === 'Currently Airing' || anime.airing === true;
};

// Get anime year
export const getAnimeYear = (anime: any): number | null => {
  if (anime.year) return anime.year;
  
  if (anime.aired?.from) {
    const year = new Date(anime.aired.from).getFullYear();
    return isNaN(year) ? null : year;
  }
  
  return null;
};
