import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers/';
import firebaseKeys from './firebase/keys';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseKeys);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
