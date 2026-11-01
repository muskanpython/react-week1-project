
import ShowCard from './ShowCard';

export default function ShowList({ shows }) {
  if (shows.length === 0) {
    return null;
  }

  return (
    <section className="show-grid" aria-label="TV show results">
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </section>
  );
}
