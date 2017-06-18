import Expo from 'expo';
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albuns!'}/>
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('albuns', () => App);
Expo.registerRootComponent(App);
