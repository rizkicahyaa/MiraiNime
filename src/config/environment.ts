// Environment configuration
export const ENV_CONFIG = {
  JIKAN_BASE_URL: import.meta.env.VITE_JIKAN_BASE_URL || 'https://api.jikan.moe/v4',
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
  RATE_LIMIT_DELAY: Number(import.meta.env.VITE_RATE_LIMIT_DELAY) || 1000,
  DEBUG_MODE: import.meta.env.VITE_DEBUG_MODE === 'true',
  ENABLE_LOGGING: import.meta.env.VITE_ENABLE_LOGGING === 'true',
  APP_NAME: import.meta.env.VITE_APP_NAME || 'MiraiNime',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  APP_DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION || 'Modern Anime Discovery Platform',
} as const;

// Development helpers
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// Logging utility
export const logger = {
  info: (message: string, ...args: any[]) => {
    if (ENV_CONFIG.ENABLE_LOGGING) {
      console.log(`[${ENV_CONFIG.APP_NAME}] ${message}`, ...args);
    }
  },
  warn: (message: string, ...args: any[]) => {
    if (ENV_CONFIG.ENABLE_LOGGING) {
      console.warn(`[${ENV_CONFIG.APP_NAME}] ${message}`, ...args);
    }
  },
  error: (message: string, ...args: any[]) => {
    if (ENV_CONFIG.ENABLE_LOGGING) {
      console.error(`[${ENV_CONFIG.APP_NAME}] ${message}`, ...args);
    }
  },
  debug: (message: string, ...args: any[]) => {
    if (ENV_CONFIG.DEBUG_MODE && ENV_CONFIG.ENABLE_LOGGING) {
      console.debug(`[${ENV_CONFIG.APP_NAME}] ${message}`, ...args);
    }
  },
};
