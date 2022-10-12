import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Single.css';


const Single = ({ single, handle_answer, notifyAnswer }) => {
    const { question, options, correctAnswer } = single;
    console.log(correctAnswer)
    return (
        <div className='question' >
            <div className='question-text'>
                <h3>{question} </h3>
                <p onClick={()=>notifyAnswer(correctAnswer)}>
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </p>
                <div className='option-container'>
                    {
                        options.map((option, index) => <p onClick={() => handle_answer(option, correctAnswer)} key={index} className='option'>{option}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Single;