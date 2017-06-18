import Expo from 'expo';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/app';

AppRegistry.registerComponent('tech-stack', () => App);
Expo.registerRootComponent(App);
