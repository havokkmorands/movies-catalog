import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catálogo de Filmes Fictícios',
  description: 'Projeto em Next.js com rotas estáticas para scraping com requests e BeautifulSoup.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
