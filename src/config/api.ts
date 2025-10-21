// API Configuration
export const API_CONFIG = {
  JIKAN_BASE_URL: 'https://api.jikan.moe/v4',
  RATE_LIMIT: {
    REQUESTS_PER_SECOND: 3,
    REQUESTS_PER_MINUTE: 60,
    DELAY_BETWEEN_REQUESTS: 1000, // 1 second
  },
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 2000, // 2 seconds
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  ANIME: {
    BY_ID: (id: number) => `/anime/${id}`,
    SEARCH: '/anime',
    TOP: '/top/anime',
    SEASONAL: (year: number, season: string) => `/seasons/${year}/${season}`,
    CHARACTERS: (id: number) => `/anime/${id}/characters`,
    STAFF: (id: number) => `/anime/${id}/staff`,
    EPISODES: (id: number) => `/anime/${id}/episodes`,
    NEWS: (id: number) => `/anime/${id}/news`,
    FORUM: (id: number) => `/anime/${id}/forum`,
    PICTURES: (id: number) => `/anime/${id}/pictures`,
    STATS: (id: number) => `/anime/${id}/statistics`,
    MORE_INFO: (id: number) => `/anime/${id}/moreinfo`,
    RECOMMENDATIONS: (id: number) => `/anime/${id}/recommendations`,
    REVIEWS: (id: number) => `/anime/${id}/reviews`,
  },
  MANGA: {
    BY_ID: (id: number) => `/manga/${id}`,
    SEARCH: '/manga',
    TOP: '/top/manga',
  },
  CHARACTERS: {
    BY_ID: (id: number) => `/characters/${id}`,
    SEARCH: '/characters',
    TOP: '/top/characters',
  },
  PEOPLE: {
    BY_ID: (id: number) => `/people/${id}`,
    SEARCH: '/people',
    TOP: '/top/people',
  },
} as const;

// Search parameters
export const SEARCH_PARAMS = {
  ANIME_TYPES: ['tv', 'movie', 'ova', 'ona', 'special', 'music'] as const,
  ANIME_STATUS: ['airing', 'complete', 'upcoming'] as const,
  ANIME_RATINGS: ['g', 'pg', 'pg13', 'r17', 'r', 'rx'] as const,
  SEASONS: ['winter', 'spring', 'summer', 'fall'] as const,
  SORT_OPTIONS: ['asc', 'desc'] as const,
} as const;

// Default search parameters
export const DEFAULT_SEARCH_PARAMS = {
  page: 1,
  limit: 25,
  sfw: true,
  unapproved: false,
} as const;
