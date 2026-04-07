import MovieCard from '@/components/MovieCard';
import { movies } from '@/data/movies';

export default function HomePage() {
  return (
    <main className="page">
      <header className="pageHeader">
        <h1>Catálogo de Filmes</h1>
        <p>
          Um catálogo fictício com rotas estáticas em Next.js, preparado para scraping com
          requests e BeautifulSoup.
        </p>
      </header>

      <section className="moviesGrid" data-testid="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
}
