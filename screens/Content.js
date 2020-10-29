import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../navigators/TabNavigator';

export default function Content() {
  return (
    <NavigationContainer
        independent={true}
    >
      <TabNavigator />
    </NavigationContainer>
  );
}
