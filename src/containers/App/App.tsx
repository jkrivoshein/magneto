import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

import './App.scss';

interface PropTypes {
  children: object,
}

function AppRouter(props: PropTypes) {
  const [page, setPage] = useState('home')
  const [isOpen, setState] = useState(false)
  const toggleMenu = (page?: string) => {
    setState(!isOpen)
    if (page)
      setPage(page)
  }
  useEffect(() => {
    setPage(window.location.pathname.split('/')[1])
  }, [])

  return (
    <div className={`App page-${page}`}>
      <div className="App-header">
        <h1 className="App-logo"><Link onClick={() => setPage('home')} to="/">lodestone</Link></h1>
        <ul className="App-menu-list">
          <li className="App-menu-item home"><Link onClick={() => setPage('home')} to="/">Home</Link></li>
          <li className="App-menu-item music"><Link onClick={() => setPage('music')} to="/music">Music</Link></li>
          <li className="App-menu-item photography"><Link onClick={() => setPage('photography')} to="/photography">Photography</Link></li>
          <li className="App-menu-item events"><Link onClick={() => setPage('events')} to="/events">Events</Link></li>
          <li className="App-menu-item about"><Link onClick={() => setPage('about')} to="/about">About</Link></li>
        </ul>
        <div onClick={() => toggleMenu()}>
          <Menu right isOpen={isOpen} width="230px">
            <Link className="menu-item" onClick={() => toggleMenu('home')} to="/">Home</Link>
            <Link className="menu-item" onClick={() => toggleMenu('music')} to="/music">Music</Link>
            <Link className="menu-item" onClick={() => toggleMenu('photography')} to="/photography">Photography</Link>
            <Link className="menu-item" onClick={() => toggleMenu('events')} to="/events">Events</Link>
            <Link className="menu-item" onClick={() => toggleMenu('about')} to="/about">About</Link>
          </Menu>
        </div>
      </div>
      {props.children}
      <footer>
        <div>
          <span>&copy;2021 Lodestone Studio</span>  |
          <span>powered by magneto</span>
        </div>
      </footer>
    </div>
    
     
  );
}

export default AppRouter;
  

