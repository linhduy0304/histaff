

import React from 'react';
import { Scene, Router, Stack} from 'react-native-router-flux';

import reducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk)) 

import App from './screens/App';
import Login from './screens/Login';

const Main = () => (
  <Provider store = {store}>
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="app" component={App}/>
        <Scene key="login" component={Login}/>
      </Stack>
    </Router>
  </Provider>
);
export default Main;