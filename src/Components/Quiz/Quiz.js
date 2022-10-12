import React from 'react';
import './Quiz.css'

const Quiz = ({data}) => {
   const {name,logo,total} = data;
 return(
    <div className='quiz'>
       <img src={logo} alt=''></img>
       <h2>{name}</h2>
       <p>Total: {total}</p>
       <button>start quiz</button>
    </div>
 )
};

export default Quiz;