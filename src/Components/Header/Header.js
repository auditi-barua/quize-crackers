import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <nav className='nav'>
        <h3>Quizizz</h3>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/statistics'>Statistics</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/topic'>Topic</NavLink>
        </nav>
      </nav>
    </div>

  );
};

export default Header;