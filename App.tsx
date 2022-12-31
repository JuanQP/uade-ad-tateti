import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import App from "./src/App";
import { CellValue } from './src/helpers';
import PvMScreen from './src/PvMScreen';
import PvPScreen from './src/PvPScreen';
import TitleScreen from './src/TitleScreen';

export type RootStackParamList = {
  GameScreen: {
    name1: string;
    selectedEmoji1: NonNullable<CellValue>;
    name2: string;
    selectedEmoji2: NonNullable<CellValue>;
    playerVsMachine: boolean;
  },
  TitleScreen: undefined,
  PvMScreen: undefined,
  PvPScreen: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
            name="PvMScreen"
            component={PvMScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PvPScreen"
            component={PvPScreen}
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
