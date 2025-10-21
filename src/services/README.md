# Jikan API Integration

This directory contains the Jikan API integration for MyAnimeList data.

## Files Structure

```
src/
├── services/
│   ├── jikanApi.ts          # Main API service
│   └── index.ts             # Export all services
├── config/
│   ├── api.ts               # API configuration
│   └── environment.ts       # Environment variables
├── utils/
│   └── apiHelpers.ts        # Utility functions
└── hooks/
    └── useJikanApi.ts       # React hooks for API
```

## Usage

### Basic API Usage

```typescript
import { jikanApi } from '../services';

// Search anime
const searchResults = await jikanApi.searchAnime('Naruto');

// Get anime by ID
const anime = await jikanApi.getAnimeById(1);

// Get top anime
const topAnime = await jikanApi.getTopAnime('all');
```

### Using React Hooks

```typescript
import { useAnimeSearch, useAnimeById } from '../services';

function AnimeSearch() {
  const { data, loading, error } = useAnimeSearch('Naruto');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {data?.data.map(anime => (
        <div key={anime.mal_id}>{anime.title}</div>
      ))}
    </div>
  );
}
```

## Features

- ✅ Rate limiting (3 requests/second, 60 requests/minute)
- ✅ Automatic retry with exponential backoff
- ✅ Error handling and custom error types
- ✅ TypeScript support with full type definitions
- ✅ React hooks for easy integration
- ✅ Debounced search functionality
- ✅ Environment configuration
- ✅ Logging and debugging support

## API Endpoints Supported

- Anime search and details
- Top anime lists
- Seasonal anime
- Anime characters
- Current season anime

## Rate Limiting

The API automatically handles rate limiting by:
- Adding delays between requests
- Implementing retry logic with exponential backoff
- Providing clear error messages for rate limit exceeded

## Error Handling

All API calls include comprehensive error handling:
- Network errors
- Rate limiting
- Timeout errors
- Server errors
- Custom error types with detailed messages
