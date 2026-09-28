import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatDate, formatRating, getImageUrl } from '../utils/format';

// Card que exibe as informações resumidas de um filme
export default function MovieCard({ movie, onPress }) {
  const posterUrl = getImageUrl(movie.poster_path);

  return (
    // TouchableOpacity torna o card clicável
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      {posterUrl ? (
        <Image source={{ uri: posterUrl }} style={styles.poster} />
      ) : (
        // Placeholder quando não tem imagem
        <View style={[styles.poster, styles.noPoster]}>
          <Text style={styles.noPosterText}>Sem imagem</Text>
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>
        <Text style={styles.detail}>
          Lançamento: {formatDate(movie.release_date)}
        </Text>
        <Text style={styles.rating}>⭐ {formatRating(movie.vote_average)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  poster: {
    width: 90,
    height: 135,
  },
  noPoster: {
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPosterText: {
    color: '#94a3b8',
    fontSize: 12,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  detail: {
    color: '#cbd5e1',
    fontSize: 14,
    marginBottom: 4,
  },
  rating: {
    color: '#f59e0b',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
