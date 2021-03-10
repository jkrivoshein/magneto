import React from 'react';
import { Link } from "react-router-dom";

import guitar from './guitar.jpeg';
import './App.css';

function AppRouter() {
  return (
      <div className="App">
      <div className="App-header">
        <h1 className="App-logo">Lodestone</h1>
        <ul className="App-menu-list">
          <li className="App-menu-item selected"><Link to="/">Home</Link></li>
          <li className="App-menu-item"><Link to="/music">Music</Link></li>
          <li className="App-menu-item"><Link to="/photography">Photography</Link></li>
          <li className="App-menu-item"><Link to="/events">Events</Link></li>
          <li className="App-menu-item"><Link to="/about">About</Link></li>
        </ul>
      </div>
      <div>
        <img src={guitar} className="App-background" alt="logo" />
      </div>
    </div>
    
     
  );
}

export default AppRouter;
  

