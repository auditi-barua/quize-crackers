import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <h3>Quizizz</h3>
        <nav className='nav'>
          <NavLink className={(isActive)=>isActive? 'active':undefined} to='/'>Home</NavLink>
          <NavLink to='/statistics'>Statistics</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
        </nav>
    </div>

  );
};

export default Header;