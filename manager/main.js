import Expo from 'expo';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';


AppRegistry.registerComponent("manager", () => App);
Expo.registerRootComponent(App);
