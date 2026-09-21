import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#0f172a' },
          headerTintColor: '#f59e0b',
          headerTitleStyle: { color: '#fff' },
          contentStyle: { backgroundColor: '#0f172a' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Movies"
          component={MoviesScreen}
          options={{ title: 'Filmes Populares' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Detalhes do Filme' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
