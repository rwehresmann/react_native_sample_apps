import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBi4HznpPjDnUqD-ni1V3bhDtZyRyNDwp4',
      authDomain: 'auth-cd7a7.firebaseapp.com',
      databaseURL: 'https://auth-cd7a7.firebaseio.com',
      projectId: 'auth-cd7a7',
      storageBucket: 'auth-cd7a7.appspot.com',
      messagingSenderId: '332610182363'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
   }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 45 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner size="large" style={{ alignSelf: 'center' }} />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
