import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import './App.css';

interface PropTypes {
  children: object,
}

function AppRouter(props: PropTypes) {
  const [page, setPage] = useState('/')
  useEffect(() => {
    console.log(page)
  }, [page]);

  return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-logo">Lodestone</h1>
          <ul className="App-menu-list">
            <li className="App-menu-item"><Link onClick={() => setPage('home')} to="/">Home</Link></li>
            <li className="App-menu-item"><Link onClick={() => setPage('music')} to="/music">Music</Link></li>
            <li className="App-menu-item"><Link onClick={() => setPage('photography')} to="/photography">Photography</Link></li>
            <li className="App-menu-item"><Link onClick={() => setPage('events')} to="/events">Events</Link></li>
            <li className="App-menu-item"><Link onClick={() => setPage('about')} to="/about">About</Link></li>
          </ul>
        </div>
      {props.children}
    </div>
    
     
  );
}

export default AppRouter;
  

