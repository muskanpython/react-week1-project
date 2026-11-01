
import { useCallback, useEffect, useState } from 'react';
import { searchShows } from '../services/showApi';

export default function useShows(query) {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchShows = useCallback(async (signal) => {
    if (!query.trim()) {
      setShows([]);
      setError('');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const results = await searchShows(query, signal);
      setShows(results);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Something went wrong. Please try again.');
        setShows([]);
      }
    } finally {
      if (!signal.aborted) {
        setLoading(false);
      }
    }
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();

    fetchShows(controller.signal);

    return () => controller.abort();
  }, [fetchShows]);

  const retry = () => {
    const controller = new AbortController();
    fetchShows(controller.signal);
  };

  return { shows, loading, error, retry };
}
