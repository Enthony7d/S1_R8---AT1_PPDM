import axios from 'axios';

// URL base para as imagens dos filmes
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Configura a API TMDB com autenticação e idioma padrão
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
  headers: {
    // Token vem da variável de ambiente EXPO_PUBLIC_TMDB_TOKEN
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_TOKEN}`,
    accept: 'application/json',
  },
  params: {
    // Define português como idioma padrão nas respostas
    language: 'pt-BR',
  },
});

// Busca os filmes populares da API
export async function getPopularMovies() {
  const response = await api.get('/movie/popular');
  return response.data.results;
}

// Busca os detalhes completos de um filme específico pelo ID
export async function getMovieDetails(movieId) {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
}

export default api;
