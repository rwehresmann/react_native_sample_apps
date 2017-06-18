import Expo from 'expo';
import { AppRegistry } from 'react-native';
import App from './src/app'

AppRegistry.registerComponent('auth', () => App);
Expo.registerRootComponent(App);
