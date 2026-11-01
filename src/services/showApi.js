
const API_BASE_URL = 'https://api.tvmaze.com';

export async function searchShows(query, signal) {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return [];
  }

  const url = `${API_BASE_URL}/search/shows?q=${encodeURIComponent(trimmedQuery)}`;

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(
      response.status === 429
        ? 'Too many requests. Please wait and try again.'
        : `Unable to fetch shows. Server error: ${response.status}`
    );
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error('Unexpected data received from the server.');
  }

  return data.map((item) => item.show);
}
