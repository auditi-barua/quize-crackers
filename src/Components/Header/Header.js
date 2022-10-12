import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <h3>Quizizz</h3>
        <nav className='nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/statistics'>Statistics</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/topic'>Topic</NavLink>
        </nav>
    </div>

  );
};

export default Header;