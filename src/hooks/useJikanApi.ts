import { useState, useEffect, useCallback, useRef } from 'react';
import { jikanApi, AnimeData, AnimeSearchResponse, TopAnimeResponse, AnimeCharactersResponse } from '../services/jikanApi';
import { handleApiError, retryWithBackoff, debounce } from '../utils/apiHelpers';

// Hook for anime search
export const useAnimeSearch = (query: string, page: number = 1, limit: number = 25) => {
  const [data, setData] = useState<AnimeSearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchAnime = useCallback(async (searchQuery: string, searchPage: number = 1) => {
    if (!searchQuery.trim()) {
      setData(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await retryWithBackoff(() => 
        jikanApi.searchAnime(searchQuery, searchPage, limit)
      );
      setData(result);
    } catch (err) {
      const apiError = handleApiError(err);
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  // Debounced search
  const debouncedSearch = useCallback(
    debounce((searchQuery: string, searchPage: number) => {
      searchAnime(searchQuery, searchPage);
    }, 500),
    [searchAnime]
  );

  useEffect(() => {
    debouncedSearch(query, page);
  }, [query, page, debouncedSearch]);

  return {
    data,
    loading,
    error,
    searchAnime,
    refetch: () => searchAnime(query, page)
  };
};

// Hook for getting anime by ID
export const useAnimeById = (id: number | null) => {
  const [data, setData] = useState<AnimeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAnime = useCallback(async (animeId: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = await retryWithBackoff(() => 
        jikanApi.getAnimeById(animeId)
      );
      setData(result);
    } catch (err) {
      const apiError = handleApiError(err);
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchAnime(id);
    } else {
      setData(null);
    }
  }, [id, fetchAnime]);

  return {
    data,
    loading,
    error,
    refetch: () => id && fetchAnime(id)
  };
};

// Hook for top anime
export const useTopAnime = (
  type: 'all' | 'airing' | 'upcoming' | 'tv' | 'movie' | 'ova' | 'ona' | 'special' = 'all',
  page: number = 1
) => {
  const [data, setData] = useState<TopAnimeResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTopAnime = useCallback(async (animeType: string, animePage: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = await retryWithBackoff(() => 
        jikanApi.getTopAnime(animeType as any, animePage)
      );
      setData(result);
    } catch (err) {
      const apiError = handleApiError(err);
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTopAnime(type, page);
  }, [type, page, fetchTopAnime]);

  return {
    data,
    loading,
    error,
    refetch: () => fetchTopAnime(type, page)
  };
};

// Hook for seasonal anime
export const useSeasonalAnime = (year: number, season: 'winter' | 'spring' | 'summer' | 'fall', page: number = 1) => {
  const [data, setData] = useState<AnimeSearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSeasonalAnime = useCallback(async (animeYear: number, animeSeason: string, animePage: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = await retryWithBackoff(() => 
        jikanApi.getSeasonalAnime(animeYear, animeSeason as any, animePage)
      );
      setData(result);
    } catch (err) {
      const apiError = handleApiError(err);
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSeasonalAnime(year, season, page);
  }, [year, season, page, fetchSeasonalAnime]);

  return {
    data,
    loading,
    error,
    refetch: () => fetchSeasonalAnime(year, season, page)
  };
};

// Hook for current season anime
export const useCurrentSeasonAnime = (page: number = 1) => {
  const [data, setData] = useState<AnimeSearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrentSeason = useCallback(async (animePage: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = await retryWithBackoff(() => 
        jikanApi.getCurrentSeasonAnime()
      );
      setData(result);
    } catch (err) {
      const apiError = handleApiError(err);
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCurrentSeason(page);
  }, [page, fetchCurrentSeason]);

  return {
    data,
    loading,
    error,
    refetch: () => fetchCurrentSeason(page)
  };
};

// Hook for anime characters
export const useAnimeCharacters = (id: number | null) => {
  const [data, setData] = useState<AnimeCharactersResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = useCallback(async (animeId: number) => {
    setLoading(true);
    setError(null);

    try {
      const result = await retryWithBackoff(() => 
        jikanApi.getAnimeCharacters(animeId)
      );
      setData(result);
    } catch (err) {
      const apiError = handleApiError(err);
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchCharacters(id);
    } else {
      setData(null);
    }
  }, [id, fetchCharacters]);

  return {
    data,
    loading,
    error,
    refetch: () => id && fetchCharacters(id)
  };
};

// Hook for managing multiple API calls with loading states
export const useApiLoading = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const setLoading = useCallback((key: string, loading: boolean) => {
    setLoadingStates(prev => ({ ...prev, [key]: loading }));
  }, []);

  const setError = useCallback((key: string, error: string | null) => {
    setErrors(prev => ({ ...prev, [key]: error }));
  }, []);

  const isLoading = useCallback((key: string) => {
    return loadingStates[key] || false;
  }, [loadingStates]);

  const getError = useCallback((key: string) => {
    return errors[key] || null;
  }, [errors]);

  const clearError = useCallback((key: string) => {
    setErrors(prev => ({ ...prev, [key]: null }));
  }, []);

  return {
    setLoading,
    setError,
    isLoading,
    getError,
    clearError,
    loadingStates,
    errors
  };
};
