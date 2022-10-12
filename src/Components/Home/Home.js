import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quiz = useLoaderData();
    return (
        <div className='home-container'>
            <div className='quiz-container'>
                {
                    quiz.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                        ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;