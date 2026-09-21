import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry}>
          <Text style={styles.buttonText}>Tentar novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#0f172a',
  },
  text: {
    color: '#fca5a5',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#f59e0b',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
