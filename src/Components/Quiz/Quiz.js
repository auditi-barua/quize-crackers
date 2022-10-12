import React from 'react';

const Quiz = ({quizs}) => {
   const {name,logo} = quizs;
    return (
        <div>
           <h3>{name}</h3> 
           <img src='{logo}' alt=''></img>

            
        </div>
    );
};

export default Quiz;