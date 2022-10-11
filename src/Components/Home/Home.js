import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quiz = useLoaderData();
    return (
        <div>
            <h3>Home page</h3>
        </div>
    );
};

export default Home;