import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Nunito-SemiBold': require('./src/assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
    'Pecita': require('./src/assets/fonts/Pecita.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <AppNavigator />;
}