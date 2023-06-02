import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './screens/Root';
import Home from './screens/Home';
import { RgbScreen } from './screens/RgbScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
export default function App() {
  return (
    <RootNavigator />
  );
}
