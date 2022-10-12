import React from 'react';
import './Single.css'
const Single = ({single}) => {
    const {question, options} = single;
    console.log(single)
    return (
        <div >
            <div className='queistion'>
                <h3>{question} </h3>
                    {
                    options.map(option => <p>{option}</p>)
                   
                }
                
               
            </div>
        </div>
    );
};

export default Single;