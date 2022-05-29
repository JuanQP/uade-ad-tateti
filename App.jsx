import { StatusBar } from 'expo-status-bar';
import App from "./src/App";
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TitleScreen from './src/TitleScreen';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="TitleScreen"
            component={TitleScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GameScreen"
            component={App}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </PaperProvider>
    </NavigationContainer>
  );
}
