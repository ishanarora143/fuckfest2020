import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNav from './scenes/AppContainer';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/store.js';

const store = ConfigureStore();



export default function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
