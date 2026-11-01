
export default function SearchBar({ query, onSearch }) {
  return (
    <div className="search-container">
      <label htmlFor="show-search">Search TV Shows</label>

      <input
        id="show-search"
        type="search"
        value={query}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search shows like Friends, Dark, Breaking Bad..."
      />
    </div>
  );
}
