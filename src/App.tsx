import React from 'react';
import guitar from './guitar.jpeg';
import './App.css';

function App() {
  
  const onMenuClick = () => {
    console.log('click')
  }
  
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="App-logo">Lodestone</h1>
        <ul className="App-menu-list">
          <li className="App-menu-item selected" onClick={onMenuClick}>Home</li>
          <li className="App-menu-item" onClick={onMenuClick}>Music</li>
          <li className="App-menu-item" onClick={onMenuClick}>Photography</li>
          <li className="App-menu-item" onClick={onMenuClick}>Events</li>
          <li className="App-menu-item" onClick={onMenuClick}>About</li>
        </ul>
      </div>
      <div>
        <img src={guitar} className="App-background" alt="logo" />
      </div>
    </div>
  );
}

export default App;
