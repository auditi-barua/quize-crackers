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
      {/* <img src='img/Quizizz.png' alt='' />
      <p>Quizizz is an Indian educational software company headquartered in Bengaluru, India, that creates and sells a gamified student engagement platform. The software is used in class, group assignments, pre-test review, formative assessments and pop quizzes.</p> */}
    </div>

  );
};

export default Header;