import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const {data} = useLoaderData();
    console.log(data);
    return (
        <div className="quiz-container">
           {
                data.map(data => <Quiz
                key={data.id}
                data={data}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;