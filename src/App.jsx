
import { useState } from 'react';
import useShows from './hooks/useShows';
import SearchBar from './components/shows/SearchBar';
import ShowList from './components/shows/ShowList';
import './styles/main.css';
import './styles/components.css';

function App() {
  const [query, setQuery] = useState('friends');
  const { shows, loading, error, retry } = useShows(query);

  return (
    <main className="tv-app">
      <header className="tv-header">
        <p className="tv-eyebrow">DISCOVER YOUR NEXT FAVORITE</p>
        <h1>TV Show Explorer</h1>
        <p className="tv-subtitle">
          Explore television shows from around the world.
        </p>
      </header>

      <section className="tv-content">
        <SearchBar query={query} onSearch={setQuery} />

        {loading && (
          <div className="tv-status" role="status">
            <div className="tv-spinner"></div>
            <p>Finding amazing shows...</p>
          </div>
        )}

        {!loading && error && (
          <div className="tv-error" role="alert">
            <h2>Unable to load shows</h2>
            <p>{error}</p>
            <button type="button" onClick={retry}>
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && query.trim() && shows.length === 0 && (
          <div className="tv-empty">
            <h2>No shows found</h2>
            <p>Try another title or search term.</p>
          </div>
        )}

        {!loading && !error && !query.trim() && (
          <div className="tv-empty">
            <h2>Start exploring</h2>
            <p>Enter a TV show name to discover results.</p>
          </div>
        )}

        {!loading && !error && <ShowList shows={shows} />}
      </section>

      <footer className="tv-footer">
        Powered by the TVMaze public API · Built with React
      </footer>
    </main>
  );
}

export default App;
