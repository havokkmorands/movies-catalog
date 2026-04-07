import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { movies } from '@/data/movies';

type MoviePageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return movies.map((movie) => ({
    id: movie.id,
  }));
}

export function generateMetadata({ params }: MoviePageProps): Metadata {
  const movie = movies.find((item) => item.id === params.id);

  if (!movie) {
    return {
      title: 'Filme não encontrado',
    };
  }

  return {
    title: `${movie.title} | Catálogo de Filmes`,
    description: movie.synopsis,
  };
}

export default function MoviePage({ params }: MoviePageProps) {
  const movie = movies.find((item) => item.id === params.id);

  if (!movie) {
    notFound();
  }

  return (
    <main className="page">
      <Link className="backLink" href="/">
        ← Voltar ao catálogo
      </Link>

      <section className="movieDetail" data-testid="movie-detail">
        <h1 data-testid="movie-title">{movie.title}</h1>
        <p className="metaText" data-testid="movie-release">
          <strong>Lançamento:</strong> {movie.release}
        </p>
        <p className="metaText" data-testid="movie-rating">
          <strong>Nota:</strong> {movie.rating}
        </p>
        <p className="synopsis" data-testid="movie-synopsis">
          <strong>Sinopse:</strong> {movie.synopsis}
        </p>
      </section>
    </main>
  );
}
