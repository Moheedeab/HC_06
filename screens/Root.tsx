import React from 'react';
import { RgbScreen } from './RgbScreen';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MixingScreen } from './MixingScreen';
import { CleanScreen } from './CleanSecreen';
const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="RGB" component={RgbScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="MixerScreen" component={MixingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="CleanScreen" component={CleanScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
