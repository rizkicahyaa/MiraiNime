import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Jikan API Configuration
const JIKAN_BASE_URL = 'https://api.jikan.moe/v4';
const RATE_LIMIT_DELAY = 1000; // 1 second delay between requests

// Types for Jikan API responses
export interface AnimeData {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer?: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  approved: boolean;
  titles: Array<{
    type: string;
    title: string;
  }>;
  title: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes?: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
    };
  };
  duration: string;
  rating: string;
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background?: string;
  season?: string;
  year?: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: Array<{
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }>;
  licensors: Array<{
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }>;
  studios: Array<{
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }>;
  genres: Array<{
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }>;
  explicit_genres: Array<{
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }>;
  themes: Array<{
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }>;
  demographics: Array<{
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }>;
}

export interface AnimeSearchResponse {
  data: AnimeData[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

export interface TopAnimeResponse {
  data: AnimeData[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

export interface CharacterData {
  character: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
      };
    };
    name: string;
  };
  role: string;
  voice_actors: Array<{
    person: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
        };
      };
      name: string;
    };
    language: string;
  }>;
}

export interface AnimeCharactersResponse {
  data: CharacterData[];
}

// Jikan API Service Class
class JikanApiService {
  private api: AxiosInstance;
  private lastRequestTime: number = 0;

  constructor() {
    this.api = axios.create({
      baseURL: JIKAN_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'MiraiNime/1.0'
      }
    });

    // Add request interceptor for rate limiting
    this.api.interceptors.request.use(
      async (config) => {
        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;
        
        if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
          const delay = RATE_LIMIT_DELAY - timeSinceLastRequest;
          await new Promise(resolve => setTimeout(resolve, delay));
        }
        
        this.lastRequestTime = Date.now();
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor for error handling
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 429) {
          console.warn('Rate limit exceeded. Please wait before making more requests.');
        }
        return Promise.reject(error);
      }
    );
  }

  // Get anime by ID
  async getAnimeById(id: number): Promise<AnimeData> {
    try {
      const response = await this.api.get(`/anime/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching anime by ID:', error);
      throw error;
    }
  }

  // Search anime
  async searchAnime(query: string, page: number = 1, limit: number = 25): Promise<AnimeSearchResponse> {
    try {
      const response = await this.api.get('/anime', {
        params: {
          q: query,
          page,
          limit,
          sfw: true // Safe for work content only
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching anime:', error);
      throw error;
    }
  }

  // Get top anime
  async getTopAnime(type: 'all' | 'airing' | 'upcoming' | 'tv' | 'movie' | 'ova' | 'ona' | 'special' = 'all', page: number = 1): Promise<TopAnimeResponse> {
    try {
      const response = await this.api.get('/top/anime', {
        params: {
          type,
          page,
          sfw: true
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching top anime:', error);
      throw error;
    }
  }

  // Get seasonal anime
  async getSeasonalAnime(year: number, season: 'winter' | 'spring' | 'summer' | 'fall', page: number = 1): Promise<AnimeSearchResponse> {
    try {
      const response = await this.api.get(`/seasons/${year}/${season}`, {
        params: {
          page,
          sfw: true
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching seasonal anime:', error);
      throw error;
    }
  }

  // Get anime characters
  async getAnimeCharacters(id: number): Promise<AnimeCharactersResponse> {
    try {
      const response = await this.api.get(`/anime/${id}/characters`);
      return response.data;
    } catch (error) {
      console.error('Error fetching anime characters:', error);
      throw error;
    }
  }

  // Get current season anime
  async getCurrentSeasonAnime(): Promise<AnimeSearchResponse> {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    
    let season: 'winter' | 'spring' | 'summer' | 'fall';
    if (month >= 12 || month <= 2) season = 'winter';
    else if (month >= 3 && month <= 5) season = 'spring';
    else if (month >= 6 && month <= 8) season = 'summer';
    else season = 'fall';
    
    return this.getSeasonalAnime(year, season);
  }
}

// Export singleton instance
export const jikanApi = new JikanApiService();
export default jikanApi;
