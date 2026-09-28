import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet,  Text, TouchableOpacity, View,} from 'react-native';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { getMovieDetails } from '../services/api';
import { formatDate,  formatMoney,  formatRating,  formatRuntime,  getImageUrl,} from '../utils/format';

export default function DetailsScreen({ route, navigation }) {
  const { movieId } = route.params;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadDetails() {
    try {
      setLoading(true);
      setError(null);
      const data = await getMovieDetails(movieId);
      setMovie(data);
    } catch (err) {
      setError(
        'Não foi possível carregar os detalhes do filme. Tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDetails();
  }, [movieId]);

  if (loading) return <Loading message="Carregando detalhes..." />;
  if (error) return <ErrorMessage message={error} onRetry={loadDetails} />;

  const posterUrl = getImageUrl(movie.poster_path);
  const genres = movie.genres.map((genre) => genre.name).join(', ');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posterUrl && <Image source={{ uri: posterUrl }} style={styles.poster} />}

      <Text style={styles.title}>{movie.title}</Text>
      {!!movie.tagline && <Text style={styles.tagline}>"{movie.tagline}"</Text>}

      <View style={styles.infoBox}>
        <InfoRow
          label="Nota"
          value={`⭐ ${formatRating(movie.vote_average)} (${movie.vote_count} votos)`}
        />
        <InfoRow label="Lançamento" value={formatDate(movie.release_date)} />
        <InfoRow label="Duração" value={formatRuntime(movie.runtime)} />
        <InfoRow label="Gêneros" value={genres || 'Não informado'} />
        <InfoRow label="Título original" value={movie.original_title} />
        <InfoRow
          label="Idioma original"
          value={movie.original_language.toUpperCase()}
        />
        <InfoRow label="Situação" value={movie.status} />
        <InfoRow label="Orçamento" value={formatMoney(movie.budget)} />
        <InfoRow label="Bilheteria" value={formatMoney(movie.revenue)} />
      </View>

      <Text style={styles.sectionTitle}>Sinopse</Text>
      <Text style={styles.overview}>
        {movie.overview || 'Sinopse não disponível em português.'}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar para a lista</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  poster: {
    width: 220,
    height: 330,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tagline: {
    color: '#94a3b8',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 6,
  },
  infoBox: {
    alignSelf: 'stretch',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 14,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    color: '#f59e0b',
    fontWeight: 'bold',
    marginRight: 6,
  },
  value: {
    color: '#e2e8f0',
    flex: 1,
  },
  sectionTitle: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },
  overview: {
    alignSelf: 'stretch',
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#f59e0b',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 24,
    marginBottom: 16,
  },
  buttonText: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
