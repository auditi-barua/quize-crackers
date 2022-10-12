import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ data, handleAddToQuiz }) => {
   const {id, name, logo, total } = data;
   console.log(id)
   return (
      <div className='quiz'>
         <img src={logo} alt=''></img>
         <h2>{name}</h2>
         <p>Total: {total}</p>
         <Link to={`quiz/${id}`}>
            <button>start quiz</button>
         </Link>

      </div>
   )
};

export default Quiz;