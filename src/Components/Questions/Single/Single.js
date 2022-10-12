import React from 'react';
import './Single.css';

const Single = ({ single, handle_answer }) => {
    const { question, options, correctAnswer } = single;
    console.log(correctAnswer)
    return (
        <div className='question' >
            <div className='question-text'>
                <h3>{question} </h3>
                <div className='option-container'>
                    {
                        options.map((option, index) => <p onClick={()=>handle_answer(option,correctAnswer )} key={index} className='option'>{option}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Single;