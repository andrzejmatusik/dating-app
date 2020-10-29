import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Explore from '../screens/Explore';
import Matches from '../screens/Matches';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#078db2',
            inactiveTintColor: '#888',
            labelStyle: {
                fontSize: 8,
                textTransform: 'uppercase',
                paddingBottom: 7.5,
            },
            style: {
                paddingTop: 5,
            }
        }}
    >
        <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="search" color={color} size={18} />
                )
            }}
        />
        <Tab.Screen
            name="Matches"
            component={Matches}
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="heart" color={color} size={18} />
                )
            }}
        />
        <Tab.Screen
            name="Messages"
            component={Messages}
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="comments" color={color} size={18} />
                )
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="user" color={color} size={18} />
                )
            }}
        />
    </Tab.Navigator>
  );
}