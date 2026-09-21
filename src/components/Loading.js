import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Loading({ message = 'Carregando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#f59e0b" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  text: {
    color: '#cbd5e1',
    marginTop: 12,
    fontSize: 16,
  },
});
