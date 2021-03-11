import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';


import './index.scss';
import App from './App';
import Routes from './routes';
import rootReducer from './reducers/index'

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:3000/',
  responseType: 'json'
});

let store = createStore(
  rootReducer,
  applyMiddleware(
    axiosMiddleware(client), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
  )
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App>
        <Routes />
      </App>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
