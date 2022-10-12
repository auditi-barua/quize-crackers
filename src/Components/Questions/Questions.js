import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Single from './Single/Single';

const Questions = () => {
    const {data}= useLoaderData();
    console.log(data);
    const {questions} = data;
    
    return (
        <div >
            This is Question
           <div className="question">
            {
                questions.map(single=> <Single key={single.id} single={single}></Single>)
            }
           </div>
        </div>
    );
};

export default Questions;