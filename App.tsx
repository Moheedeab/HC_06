import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './screens/Root';
import { Provider } from 'react-redux';
import { Store } from './data/connection';
export default function App() {
  return (
    <Provider store={Store}>
    <RootNavigator />
    </Provider>
  );
}
