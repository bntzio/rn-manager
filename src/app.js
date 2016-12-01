import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers/';
import firebaseKeys from './firebase/keys';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseKeys);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
