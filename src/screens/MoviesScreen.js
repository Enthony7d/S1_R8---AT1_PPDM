import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { getPopularMovies } from '../services/api';

export default function MoviesScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadMovies() {
    try {
      setLoading(true);
      setError(null);
      const data = await getPopularMovies();
      setMovies(data);
    } catch (err) {
      setError(
        'Não foi possível carregar os filmes. Verifique sua conexão e tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMovies();
  }, []);

  if (loading) return <Loading message="Carregando filmes..." />;
  if (error) return <ErrorMessage message={error} onRetry={loadMovies} />;

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <MovieCard
          movie={item}
          onPress={() => navigation.navigate('Details', { movieId: item.id })}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
});
