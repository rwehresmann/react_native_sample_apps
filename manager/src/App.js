import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAC6PV4A2db6EbmdIjZKSuToUkfi-GYXQg',
      authDomain: 'manager-4f0d3.firebaseapp.com',
      databaseURL: 'https://manager-4f0d3.firebaseio.com',
      projectId: 'manager-4f0d3',
      storageBucket: 'manager-4f0d3.appspot.com',
      messagingSenderId: '596312982311'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
