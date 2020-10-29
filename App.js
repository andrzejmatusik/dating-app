import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigators/StackNavigator';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'neufreitExtraBold': require("./fonts/NeufreitExtraBold.otf")
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  };
}

// Design: HTTPS://ELITEPIXELS.DRIBBBLE.COM/

// Images: HTTPS://FREEPIK.COM/CATALYSTSTUFF/ || HTTPS://CATALYSTVIBES.DRIBBBLE.COM/
