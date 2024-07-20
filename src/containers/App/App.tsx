import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

import './App.scss';

interface PropTypes {
  children: object,
}
const body = document.getElementsByTagName('body')[0]

function AppRouter(props: PropTypes) {
  const [, setPage] = useState('home')
  const [isOpen, setState] = useState(false)
  const toggleMenu = (page?: string) => {
    setState(!isOpen)
    setPageName(!isOpen)
  }
  const setPageName = (isOpen?: boolean) => {
    const pathname = window.location.pathname.split('/')[1]
    body.className = 'page-'
    body.className += pathname ? pathname : 'home'
    body.className += isOpen ? ' bm-open' : ''
  }
  setPageName(isOpen)

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          <img alt="DJLodestone" src="/lodestonerunegod2.png" />
        </div>
        <ul className="App-menu-list">
          <li className="App-menu-item home"><Link onClick={() => setPage('home')} to="/">Home</Link></li>
          <li className="App-menu-item music"><Link onClick={() => setPage('music')} to="/music">Music</Link></li>
          <li className="App-menu-item photography"><Link onClick={() => setPage('photography')} to="/photography">Photography</Link></li>
          <li className="App-menu-item events"><Link onClick={() => setPage('events')} to="/events">Events</Link></li>
          <li className="App-menu-item about"><Link onClick={() => setPage('about')} to="/about">About</Link></li>
        </ul>
        <div onClick={() => toggleMenu()}>
          <Menu right isOpen={isOpen} width="230px">
            <Link className="menu-item" to="/">Home</Link>
            <Link className="menu-item" to="/music">Music</Link>
            <Link className="menu-item" to="/photography">Photography</Link>
            <Link className="menu-item" to="/events">Events</Link>
            <Link className="menu-item" to="/about">About</Link>
          </Menu>
        </div>
      </div>
      {props.children}
      <footer>
        <div>
          <span>&copy;2024 Lodestone Studio</span>  |
          <span>powered by magneto</span>
        </div>
      </footer>
    </div>
    
     
  );
}

export default AppRouter;
  

