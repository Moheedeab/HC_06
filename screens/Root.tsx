import React from 'react';
import { RgbScreen } from '../screens/RgbScreen';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="RGB" component={RgbScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
