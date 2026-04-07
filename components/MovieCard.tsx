import Link from 'next/link';
import type { Movie } from '@/data/movies';

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article data-testid="movie-item">
      <Link className="movieCard" data-testid="movie-link" href={`/movies/${movie.id}`}>
        <h2 className="movieTitle" data-testid="movie-title">
          {movie.title}
        </h2>
        <p className="metaText" data-testid="movie-release">
          <strong>Lançamento:</strong> {movie.release}
        </p>
        <p className="metaText" data-testid="movie-rating">
          <strong>Nota:</strong> {movie.rating}
        </p>
      </Link>
    </article>
  );
}
