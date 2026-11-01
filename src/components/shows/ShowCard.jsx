
export default function ShowCard({ show }) {
  const image = show.image?.medium || show.image?.original;

  const summary = show.summary
    ? show.summary.replace(/<[^>]*>/g, '')
    : 'No summary available for this show.';

  return (
    <article className="show-card">
      {image ? (
        <img
          src={image}
          alt={`${show.name} poster`}
          loading="lazy"
        />
      ) : (
        <div className="poster-placeholder">No Image Available</div>
      )}

      <div className="show-card-content">
        <h2>{show.name}</h2>

        <p className="show-meta">
          {show.premiered?.slice(0, 4) || 'Year unavailable'}
          {' · '}
          {show.rating?.average ?? 'Not rated'}
        </p>

        <p className="show-summary">{summary}</p>

        {show.genres?.length > 0 && (
          <p className="show-genres">
            {show.genres.join(' · ')}
          </p>
        )}
      </div>
    </article>
  );
}
