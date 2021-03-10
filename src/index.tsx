import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Music from './Music'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <div>
        <Route path="/" exact component={App} />
        <Route path="/music" component={Music} />
      </div>
     
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
