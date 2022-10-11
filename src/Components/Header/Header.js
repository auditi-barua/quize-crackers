import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div className='header'>
          <nav className='nav'>
          <h3>Quizizz</h3>
            
            <Link to={''}>Home</Link>
            <Link to={''}>StaticPage</Link>
            <Link to={''}>Blog</Link>
            <Link to={''}>Topics</Link>
            
        </nav>
        <img src='img/Quizizz.png' alt=''/>
        <p>Quizizz is an Indian educational software company headquartered in Bengaluru, India, that creates and sells a gamified student engagement platform. The software is used in class, group assignments, pre-test review, formative assessments and pop quizzes.</p>
      </div>
      
    );
};

export default Header;