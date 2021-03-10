import React from 'react';
import guitar from './guitar.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">Lodestone</h1>
        <ul className="App-menu-list">
          <li className="App-menu-item selected">Home</li>
          <li className="App-menu-item">Music</li>
          <li className="App-menu-item">Photography</li>
          <li className="App-menu-item">Events</li>
          <li className="App-menu-item">About</li>
        </ul>
      </header>
      <body>
        <img src={guitar} className="App-background" alt="logo" />
      </body>
    </div>
  );
}

export default App;
