import { StatusBar } from 'expo-status-bar';
import App from "./src/App";
import { Provider as PaperProvider } from 'react-native-paper';

export default function Main() {
  return (
    <PaperProvider>
      <App />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
