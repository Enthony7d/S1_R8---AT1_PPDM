import axios from 'axios';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_TOKEN}`,
    accept: 'application/json',
  },
  params: {
    language: 'pt-BR',
  },
});

export async function getPopularMovies() {
  const response = await api.get('/movie/popular');
  return response.data.results;
}

export async function getMovieDetails(movieId) {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
}

export default api;
