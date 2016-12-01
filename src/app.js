import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers/';
import firebaseKeys from './firebase/keys';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseKeys);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
