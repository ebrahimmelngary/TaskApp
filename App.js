/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

import AppNavigation from './src/navigation';

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <AppNavigation />
    </View>
  );

};


export default App;
