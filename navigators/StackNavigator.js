import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Content from '../screens/Content';
import Details from '../screens/Details';
import Chat from '../screens/Chat';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
          headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}