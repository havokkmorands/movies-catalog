# Next Movie Catalog

Projeto em Next.js com 30 filmes fictícios, rotas estáticas e `data-testid` para facilitar scraping com `requests` e `BeautifulSoup`.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build estático

```bash
npm run build
```

Como `output: "export"` está habilitado, o Next gera HTML estático em `out/`.

## Estrutura de scraping

### Página inicial
- `section[data-testid="movies-list"]`
- `article[data-testid="movie-item"]`
- `a[data-testid="movie-link"]`
- `h2[data-testid="movie-title"]`

### Página de detalhe
- `section[data-testid="movie-detail"]`
- `h1[data-testid="movie-title"]`
- `p[data-testid="movie-release"]`
- `p[data-testid="movie-rating"]`
- `p[data-testid="movie-synopsis"]`
